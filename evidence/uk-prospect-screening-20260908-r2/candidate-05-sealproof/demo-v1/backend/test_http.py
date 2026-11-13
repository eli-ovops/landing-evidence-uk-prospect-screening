"""Loopback-only integration test. No SMTP and no real recipients."""
import json,threading,urllib.request
from wsgiref.simple_server import make_server,WSGIRequestHandler
from app import Application,ContactHandler,Settings
from test_app import Sink
from pathlib import Path
class Quiet(WSGIRequestHandler):
 def log_message(self,*args):pass
sink=Sink();settings=Settings(enabled=True,smtp_host='test.invalid',smtp_user='test',smtp_password='synthetic',sender='[REDACTED_EMAIL]',recipient='[REDACTED_EMAIL]')
server=make_server('127.0.0.1',0,Application(ContactHandler(settings,sink)),handler_class=Quiet)
settings.origin=f'http://127.0.0.1:{server.server_port}'
thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
payload=dict(name='LOCAL TEST ONLY',email='[REDACTED_EMAIL]',phone='',subject='Synthetic local integration',message='No external delivery',request_id='http-local-only-123456789')
try:
 responses=[]
 for _ in range(2):
  req=urllib.request.Request(settings.origin+'/api/enquiry',data=json.dumps(payload).encode(),headers={'Origin':settings.origin,'Content-Type':'application/json'},method='POST')
  with urllib.request.urlopen(req) as r:responses.append({'status':r.status,'body':json.load(r)})
 assert len(sink.messages)==1 and all(r['status']==200 for r in responses)
 assert responses[0]['body']['reference']==responses[1]['body']['reference']
 report={'scope':'LOCAL TEST ONLY — injectable recording transport, no SMTP/network send beyond loopback','http':responses,'receivedByLocalSink':len(sink.messages),'messageContainsAllFields':all(s in sink.messages[0].get_content() for s in ['LOCAL TEST ONLY','[REDACTED_EMAIL]','No external delivery']),'externalMailSent':False,'businessInboxVerified':False}
 target=Path(__file__).resolve().parent.parent/'replacement-20260908/qa/http-integration.json';target.parent.mkdir(exist_ok=True);target.write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))
finally:server.shutdown();server.server_close()
