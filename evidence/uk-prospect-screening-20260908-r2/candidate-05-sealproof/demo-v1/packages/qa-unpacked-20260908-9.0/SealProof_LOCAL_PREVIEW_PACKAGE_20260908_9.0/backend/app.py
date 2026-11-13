"""SealProof contact handler. Local WSGI preview; SMTP off unless explicitly configured."""
from __future__ import annotations
import hashlib, json, mimetypes, os, re, smtplib, ssl, threading, time, uuid
from collections import defaultdict, deque
from dataclasses import dataclass
from email.message import EmailMessage
from pathlib import Path
from urllib.parse import parse_qs
from wsgiref.simple_server import make_server

SITE = Path(__file__).resolve().parent.parent / 'site'
EMAIL = re.compile(r'^[A-Za-z0-9.!#$%&\'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9.-]{0,251}[A-Za-z0-9])?\.[A-Za-z]{2,63}$')

@dataclass
class Settings:
    origin: str = 'http://127.0.0.1:8769'
    enabled: bool = False
    smtp_host: str = ''
    smtp_port: int = 465
    smtp_user: str = ''
    smtp_password: str = ''
    sender: str = ''
    recipient: str = ''
    rate_limit: int = 6

    @classmethod
    def from_env(cls):
        return cls(origin=os.environ.get('SEALPROOF_ORIGIN', cls.origin),
            enabled=os.environ.get('SEALPROOF_SEND_AUTHORIZED') == 'YES',
            smtp_host=os.environ.get('SEALPROOF_SMTP_HOST', ''),
            smtp_port=int(os.environ.get('SEALPROOF_SMTP_PORT', '465')),
            smtp_user=os.environ.get('SEALPROOF_SMTP_USER', ''),
            smtp_password=os.environ.get('SEALPROOF_SMTP_PASSWORD', ''),
            sender=os.environ.get('SEALPROOF_MAIL_FROM', ''),
            recipient=os.environ.get('SEALPROOF_MAIL_TO', ''))

    @property
    def ready(self):
        return bool(self.enabled and self.smtp_host and self.smtp_user and self.smtp_password
            and EMAIL.fullmatch(self.sender) and EMAIL.fullmatch(self.recipient))

class MailTransport:
    def __init__(self, settings): self.settings = settings
    def deliver(self, message):
        s = self.settings
        if not s.ready: raise RuntimeError('Transport not configured')
        context = ssl.create_default_context()
        if s.smtp_port == 465:
            connection = smtplib.SMTP_SSL(s.smtp_host, s.smtp_port, timeout=12, context=context)
        else:
            connection = smtplib.SMTP(s.smtp_host, s.smtp_port, timeout=12)
            connection.ehlo(); connection.starttls(context=context); connection.ehlo()
        with connection:
            connection.login(s.smtp_user, s.smtp_password)
            refused = connection.send_message(message, from_addr=s.sender, to_addrs=[s.recipient])
            if refused: raise smtplib.SMTPRecipientsRefused(refused)

class ContactHandler:
    def __init__(self, settings=None, transport=None):
        self.settings = settings or Settings.from_env()
        self.transport = transport or MailTransport(self.settings)
        self.lock = threading.Lock(); self.attempts = defaultdict(deque); self.receipts = {}

    @property
    def ready(self): return self.settings.ready

    def process(self, payload, origin, ip):
        if origin != self.settings.origin:
            return 403, {'ok': False, 'message': 'This enquiry must be submitted from this website.'}
        if not isinstance(payload, dict):
            return 400, {'ok': False, 'message': 'Please check the enquiry fields.'}
        now = time.monotonic()
        with self.lock:
            # Keep bounded metadata only; no visitor message bodies or raw email addresses in caches.
            for key in list(self.attempts):
                while self.attempts[key] and now - self.attempts[key][0] > 60: self.attempts[key].popleft()
                if not self.attempts[key]: del self.attempts[key]
            for key in list(self.receipts):
                if now - self.receipts[key]['time'] > 3600: del self.receipts[key]
            hits = self.attempts[ip]
            if len(hits) >= self.settings.rate_limit:
                return 429, {'ok': False, 'message': 'Please wait a minute before trying again. You can also call SealProof.'}
            if len(self.attempts) > 2000:
                return 503, {'ok': False, 'message': 'The enquiry service is busy. Please call or email SealProof.'}
            hits.append(now)
        values = {}; errors = {}
        for field, limit in [('name',100),('email',254),('phone',40),('subject',150),('message',4000)]:
            value = payload.get(field, '')
            if not isinstance(value,str): errors[field] = 'Please enter text.'; value = ''
            value = value.strip(); values[field] = value
            if len(value) > limit: errors[field] = f'Please use no more than {limit} characters.'
            if '\x00' in value or (field != 'message' and any(ch in value for ch in '\r\n')):
                errors[field] = 'Please enter this on a single line.'
        if not values['name']: errors['name'] = 'Please enter your name.'
        if not EMAIL.fullmatch(values['email']): errors['email'] = 'Please enter a valid email address.'
        if values['phone'] and not re.fullmatch(r'[+0-9 ()#.\-]{3,40}',values['phone']):
            errors['phone'] = 'Please enter a valid phone number, or leave this blank.'
        if payload.get('website'): errors['form'] = 'This enquiry could not be accepted.'
        key = payload.get('request_id', '')
        if not isinstance(key,str) or not re.fullmatch(r'[a-zA-Z0-9-]{16,80}',key): errors['form'] = 'Please reload the page and try again.'
        if errors: return 422, {'ok':False,'message':'Please check the highlighted fields.','errors':errors}
        if not self.ready:
            return 503, {'ok':False,'message':'Your message has not been sent. Online enquiries are not connected in this preview. Please call or email SealProof; your details are still here.'}
        digest = hashlib.sha256(json.dumps(values,sort_keys=True).encode()).hexdigest()
        with self.lock:
            existing = self.receipts.get(key)
            if existing:
                if existing['digest'] != digest:
                    return 409, {'ok':False,'message':'This enquiry has changed. Please submit it as a new enquiry.'}
                if existing['state'] == 'sent': return 200, existing['response']
                return 409, {'ok':False,'message':'This enquiry is already being processed or awaiting confirmation. Please do not submit it again; call or email if you need help.'}
            if len(self.receipts) >= 2000:
                return 503, {'ok':False,'message':'The enquiry service is busy. Please call or email SealProof.'}
            self.receipts[key] = {'digest':digest,'state':'pending','time':now}
        reference = 'SP-' + uuid.uuid4().hex[:10].upper()
        message = EmailMessage()
        message['From'] = self.settings.sender; message['To'] = self.settings.recipient
        message['Reply-To'] = values['email']
        message['Subject'] = 'Website enquiry: ' + (values['subject'] or 'General enquiry')
        message['Message-ID'] = f'<{reference.lower()}@sealproof-enquiry.local>'
        message.set_content(f"Reference: {reference}\nName: {values['name']}\nEmail: {values['email']}\nPhone: {values['phone'] or 'Not supplied'}\nSubject: {values['subject'] or 'General enquiry'}\n\n{values['message'] or 'No message supplied'}")
        try: self.transport.deliver(message)
        except Exception:
            # An SMTP timeout may happen after acceptance. Never blindly retry an uncertain send.
            with self.lock: self.receipts[key]['state'] = 'uncertain'
            return 502, {'ok':False,'message':'We could not confirm your enquiry was submitted. Please do not resend it immediately. Call or email SealProof for help.','reference':reference}
        response = {'ok':True,'message':'Your enquiry has been submitted. Thank you.','reference':reference}
        with self.lock: self.receipts[key].update(state='sent',response=response)
        return 200, response

class Application:
    def __init__(self, handler=None, site=SITE): self.handler=handler or ContactHandler(); self.site=Path(site).resolve()
    def __call__(self, env, start):
        path=env.get('PATH_INFO','/'); method=env.get('REQUEST_METHOD','GET')
        def respond(status, body, content_type='application/json; charset=utf-8', extras=()):
            if isinstance(body,dict): body=json.dumps(body).encode()
            if isinstance(body,str): body=body.encode()
            reason={200:'OK',302:'Found',400:'Bad Request',403:'Forbidden',404:'Not Found',405:'Method Not Allowed',409:'Conflict',413:'Payload Too Large',415:'Unsupported Media Type',422:'Unprocessable Entity',429:'Too Many Requests',502:'Bad Gateway',503:'Service Unavailable'}.get(status,'Error')
            headers=[('Content-Type',content_type),('Content-Length',str(len(body))),('Cache-Control','no-store'),('X-Content-Type-Options','nosniff'),('Referrer-Policy','strict-origin-when-cross-origin'),('Content-Security-Policy',"default-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; form-action 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'")]
            start(f'{status} {reason}',headers+list(extras));return [b'' if method=='HEAD' else body]
        if path=='/api/form-status' and method=='GET':
            ready=self.handler.ready
            return respond(200,{'ready':ready,'message':'' if ready else 'Online enquiries are not connected in this preview. You can still call or email SealProof.'})
        if path=='/api/enquiry':
            if method!='POST': return respond(405,{'ok':False,'message':'Please use the enquiry form.'},extras=[('Allow','POST')])
            try: length=int(env.get('CONTENT_LENGTH') or '0')
            except ValueError: return respond(400,{'ok':False,'message':'Invalid enquiry.'})
            if length<=0 or length>16384: return respond(413,{'ok':False,'message':'This enquiry is too long.'})
            if env.get('CONTENT_TYPE','').split(';')[0]!='application/json': return respond(415,{'ok':False,'message':'Please use the enquiry form on the website.'})
            try: payload=json.loads(env['wsgi.input'].read(length))
            except (ValueError,UnicodeError): return respond(400,{'ok':False,'message':'Invalid enquiry.'})
            code,data=self.handler.process(payload,env.get('HTTP_ORIGIN',''),env.get('REMOTE_ADDR','unknown'))
            return respond(code,data)
        if method not in ('GET','HEAD'): return respond(405,'Method not allowed','text/plain')
        routes={'/':'index.html','/index.html':'index.html','/services/':'services/index.html','/about/':'about/index.html','/testimonials/':'testimonials/index.html','/contact/':'contact/index.html'}
        aliases={'/sealproof':'/','/sealproof/':'/'}
        for slug in ('services','about','testimonials','contact'):
            for alias in ('/'+slug,'/sealproof/'+slug,'/sealproof/'+slug+'/'): aliases[alias]='/'+slug+'/'
        if path in aliases: return respond(302,'','text/plain', [('Location',aliases[path])])
        relative=routes.get(path)
        if relative is None and (path.startswith('/assets/') or path in ('/styles.css','/site.js','/robots.txt')): relative=path.lstrip('/')
        if not relative or any(part.startswith('.') for part in Path(relative).parts): return respond(404,'Page not found','text/plain')
        file=(self.site/relative).resolve()
        if self.site not in file.parents or not file.is_file() or file.is_symlink(): return respond(404,'Page not found','text/plain')
        return respond(200,file.read_bytes(),mimetypes.guess_type(str(file))[0] or 'application/octet-stream')

application=Application()
if __name__=='__main__':
    port=int(os.environ.get('SEALPROOF_PORT','8769'))
    with make_server('127.0.0.1',port,application) as server:
        print(f'SealProof local preview: http://127.0.0.1:{port}/; mail enabled: {application.handler.ready}',flush=True)
        server.serve_forever()
