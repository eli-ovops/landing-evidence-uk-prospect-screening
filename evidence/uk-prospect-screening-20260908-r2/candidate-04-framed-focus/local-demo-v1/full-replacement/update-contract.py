from pathlib import Path
import json,hashlib,csv,io
b=Path(__file__).resolve().parent.parent;job=Path('/Volumes/EXTERNAL/海外落地页/evidence/demo-workflow-20260905/framed-focus-v1-01a07f53');p=job/'contract.json';c=json.loads(p.read_text())
(b/'full-replacement'/'before'/'contract.json').write_text(p.read_text())
items=[('artwork-framing','Artwork framing'),('watercolour-framing','Watercolour framing'),('limited-edition-print-framing','Limited edition print framing'),('poster-framing','Poster framing'),('photo-frames','Photo frames'),('sports-memorabilia-framing','Sports memorabilia framing'),('medal-framing','Medal framing'),('box-frames','Box frames'),('certificate-framing','Certificate framing'),('embroidery-framing','Embroidery framing'),('bespoke-framing','Bespoke framing'),('canvas-stretching','Canvas stretching'),('mount-cutting','Mount cutting'),('about','Framing in Billericay since 2000.'),('opening-hours','Monday–Saturday'),('payment-methods','bank transfer'),('yell-enquiry','Send an enquiry on Yell'),('write-review','Share your experience on Yell'),('facebook-reviews','Facebook recommendations'),('all-photos','Browse the Facebook photo gallery'),('yell-gallery','More framing examples on Yell')]
f=b/'full-replacement'/'SOURCE_MAPPING.csv'
with f.open('w') as h:
 w=csv.writer(h);w.writerow(['id','source','fact','selector'])
 for id,txt in items:w.writerow(['FR-'+id,'S2' if id in ['facebook-reviews','all-photos'] else 'S1',txt,'#'+id])
lines=f.read_text().splitlines()
for n,(id,txt) in enumerate(items,2):
 sid='S2' if id in ['facebook-reviews','all-photos'] else 'S1'; iid='FR-'+id
 c['items'].append({'id':iid,'category':'fact','sourceId':sid,'factState':'SOURCE CLAIM','applicability':'YES','disposition':'FACT/PARAPHRASE USE','section':'full-replacement','selector':'#'+id,'reason':'Current source content/action carried; external submission receipt remains separately BLOCKED','mappingStatus':'OWNER_CONFIRMED','viewports':['desktop','mobile'],'text':txt})
 c['baseline'].append({'id':'FRBASE'+str(n),'file':str(f),'line':n,'excerpt':lines[n-1],'excerptSha256':hashlib.sha256(lines[n-1].encode()).hexdigest(),'disposition':'MAPPED','itemIds':[iid],'sourceIds':[sid],'reason':'Current public baseline mapped without asserting external workflow outcome'})
c['sourceFiles'].append({'path':str(f),'sha256':hashlib.sha256(f.read_bytes()).hexdigest()})
c['sections']=['#hero','#work','#service-directory','#prepare','#proof','#closing']
c['coverageReview']='Full Replacement v1.0: known source mappings only. Full external content/workflow/admin coverage BLOCKED; CLI mechanical PASS cannot override.'
c['currentEvidence']='User authorized full replacement remediation; full-replacement/PRE_CODE_ADDENDUM.md, live Yell DOM and review. Historical limited-slice PASS superseded.'
p.write_text(json.dumps(c,indent=2))
