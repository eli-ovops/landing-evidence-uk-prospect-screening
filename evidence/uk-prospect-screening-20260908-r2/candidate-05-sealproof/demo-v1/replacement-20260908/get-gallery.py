from pathlib import Path
import urllib.request,json,hashlib,concurrent.futures
r=Path(__file__).resolve().parent;d=r/'yell-originals';d.mkdir(exist_ok=True)
files=['baeed0bc-a4d0-4bd8-a937-75e38c40e297_image_jpeg.jpg','12fcffaf-354e-49de-89fd-781a53b098f9_image_jpeg.jpg','d45c4b48-8d8a-4755-bc09-b98734c8b8d7_image_jpeg.jpg','35d8c224-6a31-4e5b-951c-04b0496c8608_image_jpeg.jpg','d13561fc-d281-4fa5-86bd-cee4c3fdf915_image_jpeg.jpg','b0ecfca6-76ac-4672-be55-164d5708776e_image_png.png','54fa8cf1-156f-44da-89da-018ea63a8f53_image_jpeg.jpg','24b4a7bb-bb3b-43c3-adfb-5dd7d68a2a7f_image_png.png','60f2c586-86e0-4fa1-ab20-1fd113fa1c56_image_jpeg.jpg','1d73bcc7-4150-4986-8924-6a16dcf941bb_image_png.png','66115d54-846f-44b1-a915-c440b98f61d8_image_png.png','e0684b8e-fb08-482e-9ab0-3af1ab4d5988_image_png.png']
def get(pair):
 n,f=pair;url='https://c.yell.com/'+f
 try:
  resp=urllib.request.urlopen(url,timeout=25);raw=resp.read();p=d/(str(n+1).zfill(2)+'-'+f);p.write_bytes(raw);return dict(id='Y'+str(n+1),file=str(p),sourceURL=url,observedThumbnailURL='https://c.yell.com/t_bigSquare%2Cf_auto/'+f,listing='https://www.yell.com/biz/sealproof-property-maintenance-london-8878727/',retrieved='2026-09-08',status=resp.status,sha256=hashlib.sha256(raw).hexdigest(),bytes=len(raw))
 except Exception as e:return dict(id='Y'+str(n+1),sourceURL=url,error=str(e))
with concurrent.futures.ThreadPoolExecutor(max_workers=4)as pool:rows=list(pool.map(get,enumerate(files)))
(r/'yell-assets.json').write_text(json.dumps(rows,indent=2));print([(x['id'],x.get('bytes'),x.get('error'))for x in rows])
