import json,threading,subprocess
from pathlib import Path
from wsgiref.simple_server import make_server,WSGIRequestHandler
from app import Application,ContactHandler,Settings
from test_app import Sink
class Quiet(WSGIRequestHandler):
 def log_message(self,*args):pass
s=Settings(enabled=True,smtp_host='test.invalid',smtp_user='test',smtp_password='synthetic',sender='[REDACTED_EMAIL]',recipient='[REDACTED_EMAIL]');sink=Sink()
server=make_server('127.0.0.1',0,Application(ContactHandler(s,sink)),handler_class=Quiet);s.origin=f'http://127.0.0.1:{server.server_port}'
threading.Thread(target=server.serve_forever,daemon=True).start()
try:
 r=Path(__file__).resolve().parent.parent/'replacement-20260908'
 subprocess.run(['node',str(r/'qa-form-success.mjs'),s.origin],check=True)
 assert len(sink.messages)==2
 (r/'qa/LOCAL-TEST-ONLY-browser-receipt.json').write_text(json.dumps({'localReceived':len(sink.messages),'externalMailSent':False,'businessInboxVerified':False},indent=2))
finally:server.shutdown();server.server_close()
