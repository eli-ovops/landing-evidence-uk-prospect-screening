import pathlib,json,hashlib
p=pathlib.Path(__file__).resolve().parent
job=pathlib.Path('/Volumes/EXTERNAL/海外落地页/evidence/demo-workflow-20260905/chris-roach-local-v1')
c=json.loads((job/'contract.json').read_text()); sha=lambda b:hashlib.sha256(b).hexdigest()
c['sources']=[dict(id='S1',grade='B',url='https://trustedtraders.which.co.uk/businesses/chris-roach-ltd/',retrievedDate='2026-09-08',platform='Which Trusted Traders',attribution='Business-managed profile and My work gallery; reviews separately attributed to customers')]
assets=json.loads((p/'source/assets.json').read_text()); selected=['A0','A1','A2','A6','A7','A10']; roles=['closing van','hero wallpaper room','wallpaper service','care protected floor','hand-painted kitchen work','interior room']
c['assets']=[]
for id,role in zip(selected,roles):
 a=next(a for a in assets if a['id']==id);c['sources'].append(dict(id='S'+id,grade='B',url=a['url'],retrievedDate=a['retrieved'],platform='Which business-managed My work gallery',attribution=a['attribution']))
 c['assets'].append(dict(id=id,path='assets/'+a['file'],originalPath='assets/'+a['file'],sha256=a['hash'],originalSha256=a['hash'],sourceId='S'+id,role=role,focus='50% 50%; entire original frame or checked responsive fit',authenticity='REAL',rights=a['rights']))
c['items']=[];c['baseline']=[]
texts={'R01':'Chris Roach','R02':'Ruislip','R03':'Interior decorating','R04':'Wallpapering','R05':'Hand-painted kitchens','R06':'protection','R07':'Dust-controlled sanding','R08':'101 reviews','R09':'skilled','R10':'07889 397102','R11':'01895 638174','R12':'[REDACTED_EMAIL]','R13':'50 The Ridgeway','R14':'Read the customer reviews','R30':'Daily updates'}
selectors={}; amap={'R15':'A0','R16':'A1','R17':'A2','R18':'A10','R19':'A7','R20':'A6'}
for ln,line in enumerate((p/'CUSTOMER_PUBLIC_INTELLIGENCE.md').read_text().splitlines(),1):
 if not line.startswith('| R'):continue
 id,cat,fact,disp,target=[v.strip() for v in line.split('|')[1:-1]]
 b=dict(id='B'+id[1:],file=str(p/'CUSTOMER_PUBLIC_INTELLIGENCE.md'),line=ln,excerpt=line,excerptSha256=sha(line.encode()),disposition='EXCLUDE' if disp=='EXCLUDE' else 'MAPPED',itemIds=[id],sourceIds=['S1'])
 i=dict(id=id,category=cat,baselineId=b['id'],factState='SOURCE CLAIM' if 'SOURCE CLAIM' in fact else 'OBSERVED FACT',sourceId='S1',mappingStatus='OWNER_CONFIRMED',applicability='NO' if disp=='EXCLUDE' else 'YES',disposition=disp,section='customer-specific page',viewports=['desktop','mobile'])
 if disp=='EXCLUDE':i['reason']=target;b['reason']=target
 else:
  i['selector']=target.split()[0].rstrip(';')
  if id in amap:i['assetId']=amap[id];i['sourceId']='S'+amap[id];b['sourceIds']=[i['sourceId']]
  else:i['text']=texts[id]
 c['items'].append(i);c['baseline'].append(b)
c['hero']={'selector':'#hero','ctaSelector':'#hero-cta'};c['sections']=['#hero','#work','#care','#testimonial','#contact'];c['coverageReview']='OWNER_RECONCILED';c['customerAuthorization']='User authorized local independent concept; client consent NOT VERIFIED';c['transferEligibility']='UNKNOWN; local concept only'
for s in c['sourceFiles']:s['sha256']=sha(pathlib.Path(s['path']).read_bytes())
(job/'contract.json').write_text(json.dumps(c,indent=2)+'\n')
