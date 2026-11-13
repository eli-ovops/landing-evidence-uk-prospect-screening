from pathlib import Path
import json,csv,re
root=Path(__file__).resolve().parent
p=Path('/Volumes/EXTERNAL/海外落地页/evidence/demo-workflow-20260905/sealproof-v1-01a07f53/contract.json');c=json.loads(p.read_text())
wix='https://infosealproof.wixsite.com/sealproof'
urls=[wix,wix+'/services',wix+'/contact',wix+'/about',wix+'/testimonials','https://www.yell.com/biz/sealproof-property-maintenance-london-8878727/','https://firmania.co.uk/london/sealproof-property-maintenance-2301241','https://nextdoor.co.uk/pages/sealproof-property-maintenance/','local-generation://01a07f53-995b-7342-9792-55f6ccf6c181']
c['sources']=[dict(id='S'+str(n+1),grade='A' if n<5 else 'C',url=u,retrievedDate='2026-09-08',platform='Wix official' if n<5 else ['Yell','Firmania','Nextdoor','Built-in image generation'][n-5],attribution='Official business page registered in CUSTOMER_PUBLIC_INTELLIGENCE.md' if n<5 else 'Public attributed business/customer text; concise source-linked paraphrase only' if n<8 else 'Original image created in this user-authorized local demo; creation paths and hashes ASSET_INVENTORY.csv') for n,u in enumerate(urls)]
c['assets']=[];c['items']=[]
for a in csv.DictReader((root/'ASSET_INVENTORY.csv').open()):
 id=a['Asset ID'];sid='S1' if a['Authenticity']=='REAL' else 'S9';fn=a['Original and render path'];c['assets'].append(dict(id=id,path=fn,originalPath=fn,sha256=a['Original and render SHA256'],originalSha256=a['Original and render SHA256'],role=a['Placement'],focus='Entire roof and name; contain' if id=='A1' else 'Task object visible; full source aspect preferred' if id[0:2]!='AX' else 'Not displayed',authenticity=a['Authenticity'],rights=a['Rights'],sourceId=sid,permissionEvidence='Current user local demo authorization plus official A-asset concept-use rule' if sid=='S1' else 'Original generation in this task; tool call and immutable generated file retained'))
 if id!='A1':
  sel={'A2':'#hero-image','A3':'#tap-image','A4':'#tools-image'}.get(id,'')
  c['items'].append(dict(id='IMG'+id,category='visual',sourceId=sid,factState='OBSERVED FACT',applicability='YES' if sel else 'NO',disposition=a['Disposition'],section={'A2':'hero','A3':'services','A4':'contact'}.get(id,'excluded'),selector=sel,assetId=id,reason=a['Treatment reason'],mappingStatus='UNCONFIRMED',viewports=['desktop','mobile']))
mp={'R01':('#brand-image','header',None,'A1',None),'R02':('#hero-intro','hero','South East London',None,None),'R03':('#service-seals summary','services','Shower sealing',None,None),'R04':('#service-plumbing summary','services','Tap & valve repairs',None,None),'R05':('#service-home summary','services','Home maintenance',None,None),'R06':('#contact-phone','contact','07415 601494',None,'tel:+447415601494'),'R07':('#contact-email','contact','[REDACTED_EMAIL]',None,'mailto:[REDACTED_EMAIL]'),'R08':('#areas','contact','London & Kent',None,None),'R10':('#review-seal','reviews','AlisdareH',None,None),'R11':('#review-bathroom','reviews','JamesB-854998',None,None),'R16':('#hero-image','hero',None,'A2',None),'R22':('#contact-prep','contact','Your postcode',None,None),'R23':('#contact-email','contact','[REDACTED_EMAIL]',None,'mailto:[REDACTED_EMAIL]'),'R24':('#nav-links','header','Repairs',None,None)}
for line in (root/'CUSTOMER_PUBLIC_INTELLIGENCE.md').read_text().splitlines():
 if not re.match(r'\| R\d\d ',line):continue
 cells=[x.strip() for x in line.strip('|').split('|')];id=cells[0].split()[0];sids=cells[1].split();dis=cells[3]
 i=dict(id=id,category=cells[0],sourceId=sids[0],factState='SOURCE CLAIM',mappingStatus='UNCONFIRMED',applicability='NO' if dis=='EXCLUDE' else 'YES',disposition=dis,reason=cells[4],viewports=['desktop','mobile'])
 if id in mp:
  sel,section,txt,asset,href=mp[id];i.update(selector=sel,section=section)
  if txt:i['text']=txt
  if asset:i['assetId']=asset
  if href:i.update(href=href,promise='Opens the clearly labeled business email or telephone handler; does not send or book automatically')
 if id=='R16':i.update(sourceId='S9',factState='OBSERVED FACT')
 c['items'].append(i)
for b in c['baseline']:
 if 'ASSET_INVENTORY' in b['file']:
  aid=next(csv.reader([b['excerpt']]))[0];ids=['R01'] if aid=='A1' else ['IMG'+aid]
 else:ids=[re.search(r'R\d\d',b['excerpt']).group()]
 b.update(disposition='MAPPED',itemIds=ids,sourceIds=list({i['sourceId'] for i in c['items'] if i['id'] in ids}),reason='Specific source row is retained or specifically excluded by its corresponding activation item; concept replacements have their generated provenance registered.')
c['hero']={'selector':'#hero','ctaSelector':'#hero-call'};c['sections']=['#hero','#services','#reviews','#contact'];c['coverageReview']='OWNER_RECONCILED';c['customerAuthorization']='NOT VERIFIED; user authorized independent local concept, not client commission';c['transferEligibility']='UNKNOWN; no source transfer requested'
p.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
print('Prepared',len(c['items']),'activation items and',len(c['baseline']),'source baseline rows. Confirmation awaits rendered DOM.')
