from pathlib import Path
import json,csv,hashlib
p=Path(__file__).resolve().parent;f=p/'full-replacement';a=json.loads((f/'ALL_ASSETS.json').read_text())
rows=[]
def row(id,page,selector,text=None,asset=None,href=None,source='S1'):
 d=dict(id=id,page=page,selector=selector,sourceId=source,disposition='DIRECT USE' if asset else 'LOCATION/VISIT USE' if href else 'FACT/PARAPHRASE USE',factState='SOURCE CLAIM',applicability='YES',section=selector)
 if text:d['text']=text
 if asset:d['assetId']=asset;d['sourceId']='S'+asset;d['factState']='OBSERVED FACT'
 if href:d['href']=href;d['promise']=text or 'Retained original external business workflow entry; outcome separately audited'
 rows.append(d)
for id,selector,text in [('identity','.brand','Chris Roach'),('history','#established','1986'),('about','#about-chris','45 years'),('wallpaper','#wallpaper','Wallpapering'),('interiors','#interiors','Interior decorating'),('kitchens','#kitchens','Hand-painted kitchens'),('preparation','#care','prepared'),('sanding','#method','95%'),('insurance','#insurance','public liability'),('updates','#updates','Daily updates'),('rating','#rating','101 customer reviews'),('review-bedroom','#case-bedroom','Cracks'),('review-sitting','#case-sitting','plaster cracks'),('review-care','#care-review','Careful and considerate'),('areas','#areas','Chorleywood'),('guide','#enquiry-guide','Tell Chris')]:row(id,'index.html',selector,text,source='Soriginal' if id=='guide' else 'S1')
for n,sel in [(0,'#van'),(1,'#hero-photo'),(2,'#wallpaper-photo'),(3,'#care-photo'),(4,'#kitchen-photo'),(10,'#interior-photo')]:row('image'+str(n),'index.html',sel,asset='A'+str(n))
base='https://trustedtraders.which.co.uk/businesses/chris-roach-ltd/'
links={'phone':('tel:07889397102','07889 397102'),'landline':('tel:01895638174','01895 638174'),'email':('mailto:[REDACTED_EMAIL]','[REDACTED_EMAIL]'),'address':('https://www.google.com/maps/search/?api=1&query=50%20The%20Ridgeway%2C%20Ruislip%20HA4%208QQ','50 The Ridgeway'),'original-map':(base+'map/','View the Which? location map'),'review-link':(base+'?reviews_count=all&reviews_sort=when_posted__desc#business_reviews_count','Read all reviews'),'write-review':('https://trustedtraders.which.co.uk/businesses/284c52601c980131398b1a1dbfa7604f/reviews/new/','Leave a review'),'review-verification':('https://trustedtraders.which.co.uk/faqs/','How reviews are checked'),'conduct':('https://trustedtraders.which.co.uk/about/code-of-conduct/','Code of Conduct'),'review-terms':('https://trustedtraders.which.co.uk/about/terms-and-conditions/','Which? terms'),'hamuch-quote':('https://www.hamuch.com/1005434/chris-roach-limited','Request a quote through HaMuch'),'more-work-link':('more-work.html',"Explore more of Chris's work")}
for id,(href,text) in links.items():row('action-'+id,'index.html','#'+id,text,href=href,source='S3' if id=='hamuch-quote' else 'Soriginal' if id=='more-work-link' else 'S1')
for id,value in [('newest','when_posted__desc'),('oldest','when_posted__asc'),('highest','overall__desc'),('lowest','overall__asc')]:row('sort-'+id,'index.html','#sort-'+id,href=base+'?reviews_count=all&reviews_sort='+value+'#business_sort')
for n in [5,6,7,8,9,11,12,13,14,15]:row('image'+str(n),'more-work.html','#gallery-photo-'+str(n),asset='A'+str(n))
row('gallery-heading','more-work.html','#gallery-hero',"More of Chris's work",source='Soriginal');row('gallery-contact','more-work.html','#gallery-contact','Discuss your decorating project',href='index.html#contact',source='Soriginal');row('gallery-return','more-work.html','#gallery-next','Return to services',source='Soriginal')
(f/'CONTENT_MAP.json').write_text(json.dumps(rows,indent=2)+'\n')
with (f/'ASSET_INVENTORY.csv').open('w') as o:
 w=csv.writer(o);w.writerow(['id','source_url','retrieved','grade','attribution','file','sha256','page','selector','treatment','transfer_disposition'])
 for x in a:
  r=next(r for r in rows if r.get('assetId')==x['id']);w.writerow([x['id'],x['url'],x['retrieved'],x['grade'],x['attribution'],'site/assets/'+x['file'],x['hash'],r['page'],r['selector'],'Original unmodified; responsive contain/fit','CUSTOMER RECONFIRMATION REQUIRED'])
