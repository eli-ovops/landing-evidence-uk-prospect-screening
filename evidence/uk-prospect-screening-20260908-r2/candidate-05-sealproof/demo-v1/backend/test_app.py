import io,json,unittest
from app import Application,ContactHandler,Settings
class Sink:
    def __init__(self,fail=False): self.messages=[];self.fail=fail
    def deliver(self,message):
        if self.fail: raise TimeoutError('local test')
        self.messages.append(message)
class Tests(unittest.TestCase):
    def setUp(self):
        self.settings=Settings(enabled=True,smtp_host='test.invalid',smtp_user='test',smtp_password='synthetic',sender='[REDACTED_EMAIL]',recipient='[REDACTED_EMAIL]',rate_limit=100)
        self.sink=Sink();self.handler=ContactHandler(self.settings,self.sink)
        self.payload=dict(name='QA Test',email='[REDACTED_EMAIL]',phone='',subject='Local test only',message='Synthetic local message',request_id='local-test-123456789')
    def post(self,payload=None,handler=None,origin=None):
        app=Application(handler or self.handler);body=json.dumps(payload or self.payload).encode();result={}
        def start(status,headers):result['status']=int(status.split()[0])
        output=app({'PATH_INFO':'/api/enquiry','REQUEST_METHOD':'POST','CONTENT_TYPE':'application/json','CONTENT_LENGTH':str(len(body)),'wsgi.input':io.BytesIO(body),'HTTP_ORIGIN':origin or self.settings.origin,'REMOTE_ADDR':'127.0.0.1'},start)
        return result['status'],json.loads(b''.join(output))
    def test_local_receipt_and_duplicate(self):
        code,data=self.post();self.assertEqual(code,200);self.assertTrue(data['ok']);self.assertEqual(len(self.sink.messages),1)
        msg=self.sink.messages[0];self.assertEqual(msg['To'],'[REDACTED_EMAIL]');self.assertEqual(msg['Reply-To'],'[REDACTED_EMAIL]');self.assertIn('Synthetic local message',msg.get_content())
        self.assertEqual(self.post()[1]['reference'],data['reference']);self.assertEqual(len(self.sink.messages),1)
        self.assertEqual(self.post(dict(self.payload,message='Changed'))[0],409)
    def test_invalid_and_injection(self):
        for patch in ({'email':'bad'},{'name':''},{'subject':'x\r\nBcc: [REDACTED_EMAIL]'},{'message':'a'*4001},{'website':'spam'}):
            self.assertEqual(self.post(dict(self.payload,**patch))[0],422)
        self.assertFalse(self.sink.messages)
    def test_origin(self):self.assertEqual(self.post(origin='https://external.invalid')[0],403)
    def test_default_not_sent(self):
        h=ContactHandler(Settings(),self.sink);code,data=self.post(handler=h);self.assertEqual(code,503);self.assertFalse(data['ok']);self.assertFalse(self.sink.messages)
    def test_uncertain_not_retried(self):
        h=ContactHandler(self.settings,Sink(True));self.assertEqual(self.post(handler=h)[0],502);self.assertEqual(self.post(handler=h)[0],409)
    def test_rate_limit(self):
        self.settings.rate_limit=1;self.post();self.assertEqual(self.post()[0],429)
if __name__=='__main__':unittest.main(verbosity=2)
