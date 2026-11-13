import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {BASE,sha,writeJSON,validate,fingerprint,safePath,outputPath} from './core.mjs';
import {run,status,reviewCheck,init} from './cli.mjs';
import {inspect} from './browser.mjs';

const suite=path.join(BASE,'fixtures',new Date().toISOString().replace(/[:.]/g,'-'));
fs.mkdirSync(suite,{recursive:true});
const owner='fixture-owner';
const svg='<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="600" height="400" fill="#27654a"/><circle cx="300" cy="180" r="80" fill="#ffe7a0"/></svg>';
const html='<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="style.css"><script src="app.js" defer></script></head><body><header id="hero"><img id="logo" src="logo.svg" alt="Test business"><h1>Grooming in Example Town</h1><a id="cta" href="tel:+441234567890">Call the salon</a></header><main><section id="services"><h2>Dog grooming</h2><img id="real" src="real.svg" alt="Service detail"><p id="fact">Care for your dog</p></section><section id="location"><a id="map" href="https://example.invalid/map">Get directions</a><a id="social" href="https://example.invalid/social">See our work</a></section></main><footer>Independent concept preview</footer></body></html>';
const css='*{box-sizing:border-box}body{margin:0;font:18px Arial}header,section,footer{padding:24px}header{min-height:260px}#logo{width:90px;height:60px}#real{display:block;width:100%;max-width:600px;height:auto}#services{min-height:900px}a{display:inline-block;padding:12px}h1{font-size:32px}';
function fixture(name){
  const job=path.join(suite,name),root=path.join(job,'site');fs.mkdirSync(root,{recursive:true});
  for(const [p,b] of Object.entries({'index.html':html,'style.css':css,'app.js':'/* no automatic external actions */','logo.svg':svg,'real.svg':svg.replace('#27654a','#346082'),'source.md':'Official fixture: logo.svg, real.svg, grooming, map, social and telephone are required.'}))fs.writeFileSync(path.join(root,p),b);
  const source=path.join(root,'source.md');
  const c={schemaVersion:1,client:name,owner,activeVersion:'active',currentEvidence:'isolated regression fixture',siteRoot:root,entry:'index.html',coverageReview:'OWNER_RECONCILED',sourceFiles:[{path:source,sha256:sha(fs.readFileSync(source))}],sources:[{id:'S1',grade:'A',url:'https://example.invalid/official',retrievedDate:'2026-09-05',platform:'isolated fixture',attribution:'fixture synthetic source; no actual merchant assertion'}],assets:['logo','real'].map(id=>({id:'A-'+id,path:id+'.svg',originalPath:id+'.svg',sha256:sha(fs.readFileSync(path.join(root,id+'.svg'))),originalSha256:sha(fs.readFileSync(path.join(root,id+'.svg'))),sourceId:'S1',role:id==='logo'?'brand':'service',focus:'center subject',authenticity:'REAL',rights:'synthetic fixture only'})),items:[
    {id:'I-logo',assetId:'A-logo',selector:'#logo'}, {id:'I-real',assetId:'A-real',selector:'#real'},
    {id:'I-fact',text:'Care for your dog',selector:'#fact'},
    {id:'I-map',href:'https://example.invalid/map',text:'Get directions',promise:'Get directions',selector:'#map'},
    {id:'I-social',href:'https://example.invalid/social',text:'See our work',promise:'See our work',selector:'#social'},
    {id:'I-cta',href:'tel:+441234567890',text:'Call the salon',promise:'Call the salon',selector:'#cta'}
  ].map(i=>({...i,category:'fixture',sourceId:'S1',mappingStatus:'OWNER_CONFIRMED',applicability:'YES',factState:'OBSERVED FACT',section:'service',disposition:'DIRECT USE',viewports:['desktop','mobile']})),baseline:[{id:'BASE1',file:source,line:1,excerpt:'Official fixture: logo.svg, real.svg, grooming, map, social and telephone are required.',disposition:'MAPPED',itemIds:['I-logo','I-real','I-map','I-social','I-cta','I-fact'],sourceIds:['S1'],reason:'Consolidated fixture source covers the named activation items.'}],hero:{selector:'#hero',ctaSelector:'#cta'},sections:[]};
  writeJSON(path.join(job,'job.json'),{owner,client:name,siteRoot:root,sourceAllowlist:[source],scheduler:false});writeJSON(path.join(job,'contract.json'),c);
  return {job,root,c,save:()=>writeJSON(path.join(job,'contract.json'),c),html:x=>fs.writeFileSync(path.join(root,'index.html'),x),css:x=>fs.writeFileSync(path.join(root,'style.css'),x)};
}
const codes=r=>r.defects.map(d=>d.code);
test('native validation rejects duplicate IDs, empty/excluded coverage, unsupported viewport and missing baseline',()=>{
  for(const variant of ['duplicate','exclude','empty-reason','baseline','viewport']){
    const f=fixture('schema-'+variant);
    if(variant==='duplicate')f.c.items[1].id=f.c.items[0].id;
    if(variant==='exclude')f.c.items.forEach(i=>{i.disposition='EXCLUDE';i.reason='Not relevant for this explicitly isolated test'});
    if(variant==='empty-reason'){f.c.items[0].disposition='EXCLUDE';f.c.items[0].reason='';}
    if(variant==='baseline')f.c.baseline[0].disposition='UNMAPPED';
    if(variant==='viewport')f.c.items[0].viewports=['desktop'];
    assert(validate(f.c).some(d=>d.level==='FAIL'),variant);
  }
});
test('scope guards reject ../ and output symlink; contract source cannot drift to another file',()=>{
  assert.throws(()=>outputPath(BASE+'/../escape'),/PATH_TRAVERSAL/);
  const f=fixture('scope'), link=path.join(f.job,'linked');fs.symlinkSync(f.root,link);assert.throws(()=>outputPath(link+'/x.json'),/SYMLINK/);
  f.c.sourceFiles=[{path:path.join(BASE,'PMO_TASK.md'),sha256:'fake'}];f.save();assert.throws(()=>fingerprint(path.join(f.job,'contract.json')),/SOURCE_OUTSIDE_JOB_ALLOWLIST/);
});
test('green real desktop/mobile, below-fold mapping; mutable inputs and evidence invalidate; repeated/partial resume',async()=>{
  const f=fixture('green'),r=await run(f.job,owner);assert.equal(r.mechanical,'PASS',JSON.stringify(r.defects));
  assert.equal(status(f.job).current,true);assert.notEqual(r.clientShowable,'PASS');
  for(const file of ['style.css','app.js','real.svg','contract.json']){
    const p=file==='contract.json'?path.join(f.job,file):path.join(f.root,file),old=fs.readFileSync(p);fs.appendFileSync(p,'\n ');assert.equal(status(f.job).current,false,file);fs.writeFileSync(p,old);
  }
  fs.writeFileSync(path.join(f.job,'status.json'),'{');assert.equal(status(f.job).current,false);
  const resumed=await run(f.job,owner);assert.equal(resumed.mechanical,'PASS');const repeated=await run(f.job,owner);assert.equal(repeated.mechanical,'PASS');assert.equal(resumed.inputHash,repeated.inputHash);
  const fake=path.join(f.job,'fake-review.json');writeJSON(fake,{finalPass:true,reviewer:'independent reviewer',inputHash:repeated.inputHash});assert.equal(reviewCheck(f.job,fake).binding,'FAIL');
  fs.appendFileSync(path.join(path.dirname(repeated.resultPath),'desktop-top.png'),'tampered');assert.equal(status(f.job).current,false);
  await assert.rejects(()=>run(f.job,'another-owner'),/OWNER_MISMATCH/);
});
test('immutable snapshot renders old hashed bytes even if disk changes before browser launch',async()=>{
  const f=fixture('snapshot'),fp=fingerprint(path.join(f.job,'contract.json'));f.html(html.replace('Care for your dog','Changed after fingerprint'));
  const a=await inspect(fp,f.job,{screenshots:false});assert(a.views.desktop.mapping.find(i=>i.id==='I-fact').pass);assert.notEqual(fp.inputHash,fingerprint(path.join(f.job,'contract.json')).inputHash);
});
test('red/green browser defect regressions return same-version repair, never auto redesign',async()=>{
  const cases=[
    ['missing-logo',s=>s.replace('<img id="logo" src="logo.svg" alt="Test business">',''),null,'MAPPING_MISSING'],
    ['missing-real',s=>s.replace('<img id="real" src="real.svg" alt="Service detail">',''),null,'MAPPING_MISSING'],
    ['missing-map',s=>s.replace('id="map"','id="removed-map"'),null,'MAPPING_MISSING'],
    ['missing-social',s=>s.replace('id="social"','id="removed-social"'),null,'MAPPING_MISSING'],
    ['missing-cta',s=>s.replace('id="cta"','id="removed-cta"'),null,'MAPPING_MISSING'],
    ['broken-image',s=>s.replace('src="real.svg"','src="missing.svg"'),null,'BROKEN_IMAGE'],
    ['chosen-srcset',s=>s.replace('id="real"','id="real" srcset="broken.svg 1x"'),null,'BROKEN_IMAGE'],
    ['bad-background',s=>s.replace('</main>','<div class="bg"></div></main>'),'.bg{width:100px;height:100px;background:url(broken.svg)}','BROKEN_IMAGE'],
    ['opacity',null,'#real{opacity:0}','MAPPED_CONTENT_NOT_VISIBLE_OR_MISMATCH'],
    ['zero-size',null,'#real{width:0;height:0}','MAPPED_CONTENT_NOT_VISIBLE_OR_MISMATCH'],
    ['occluded',null,'body:after{content:"";position:fixed;inset:0;background:white;z-index:999}','MAPPED_CONTENT_NOT_VISIBLE_OR_MISMATCH'],
    ['opaque-sibling-overlay',s=>s.replace('<img id="real" src="real.svg" alt="Service detail">','<img id="real" src="real.svg" alt="Service detail"><div class="sibling-cover"></div>'),'#services{position:relative}.sibling-cover{position:absolute;inset:0;background:white;z-index:9}','MAPPED_CONTENT_NOT_VISIBLE_OR_MISMATCH'],
    ['hidden-text',s=>s.replace('Care for your dog','<span style="display:none">Care for your dog</span>'),null,'MAPPED_CONTENT_NOT_VISIBLE_OR_MISMATCH'],
    ['mobile-only',null,'@media(max-width:500px){#real{opacity:0}body{min-width:700px}}','HORIZONTAL_OVERFLOW'],
    ['hero',null,'#hero{height:3000px}','HERO_UNBOUNDED'],
    ['fake-form',s=>s.replace('</main>','<form><input><button>Submit</button></form></main>'),null,'FORM_OR_DATA_ENTRY'],
    ['internal',s=>s.replace('Care for your dog','Care for your dog — DRAFT ONLY'),null,'INTERNAL_OR_PLACEHOLDER_TEXT'],
    ['local-href',s=>s.replace('</main>','<a href="missing.html">Read more</a></main>'),null,'LOCAL_LINK_MISSING_OR_UNSUPPORTED'],
    ['json-dependency',s=>s.replace('</head>','<script src="data.json"></script></head>'),null,'LOCAL_RESOURCE_MISSING_OR_UNSUPPORTED']
  ];
  const report=[];
  for(const [name,change,extra,expected]of cases){const f=fixture(name);if(change)f.html(change(html));if(extra)f.css(css+extra);fs.writeFileSync(path.join(f.root,'broken.svg'),'not an image');
    const red=await run(f.job,owner);assert(codes(red).includes(expected),name+JSON.stringify(red.defects));assert(red.defects.every(d=>d.repairClass!=='REDESIGN_DIRECTION'));
    if(name==='mobile-only'){assert(!red.defects.some(d=>d.code==='HORIZONTAL_OVERFLOW'&&d.viewport==='desktop'));assert(red.defects.some(d=>d.code==='HORIZONTAL_OVERFLOW'&&d.viewport==='mobile'));}
    f.html(html);f.css(css);const green=await run(f.job,owner);assert.equal(green.mechanical,'PASS',name+JSON.stringify(green.defects));report.push({name,expected,red:red.resultPath,green:green.resultPath,redStatus:red.mechanical,greenStatus:green.mechanical});
    console.log('fixture '+name+': caught '+expected+' -> GREEN');
  }
  writeJSON(path.join(suite,'red-green.json'),report);
});
test('semi-transparent sibling overlay retains decoded image coverage; hero is checked from top-of-page coordinates',async()=>{
  const f=fixture('transparent-overlay');const c=JSON.parse(fs.readFileSync(path.join(f.job,'contract.json')));c.items=c.items.filter(i=>i.id!=='I-fact');c.baseline[0].itemIds=c.baseline[0].itemIds.filter(id=>id!=='I-fact');fs.writeFileSync(path.join(f.job,'contract.json'),JSON.stringify(c,null,2));f.html(html.replace('<img id="real" src="real.svg" alt="Service detail">','<img id="real" src="real.svg" alt="Service detail"><div class="sibling-cover"></div>'));f.css(css+'#services{position:relative}.sibling-cover{position:absolute;inset:0;background:rgba(255,255,255,.3);z-index:9}');const r=await run(f.job,owner);assert.equal(r.mechanical,'PASS',JSON.stringify(r.defects));assert(!codes(r).includes('HERO_CTA_BELOW_FOLD_OR_OUTSIDE'));
});
test('pseudo-background hidden cannot cover image; visible background is UNKNOWN for paint review',async()=>{
  const f=fixture('pseudo');f.html(html.replace('<img id="real" src="real.svg" alt="Service detail">','<div id="real"></div>'));f.css(css+'#real{height:200px}#real:before{display:none;content:"";background:url(real.svg);width:100%;height:100%}');
  let r=await run(f.job,owner);assert(codes(r).includes('MAPPED_CONTENT_NOT_VISIBLE_OR_MISMATCH'));
  f.css(css+'#real{height:200px;background:url(real.svg)}');r=await run(f.job,owner);assert.equal(r.mechanical,'UNKNOWN');assert(codes(r).includes('BACKGROUND_PAINT_REVIEW'));
});
test('automatic fetch/beacon/form/navigation remain blocked with explicit UNKNOWN report',async()=>{
  const f=fixture('network');fs.writeFileSync(path.join(f.root,'app.js'),'fetch("https://example.invalid/write",{method:"POST",body:"synthetic"}).catch(()=>{});navigator.sendBeacon("https://example.invalid/beacon","synthetic");setTimeout(()=>{location.href="https://example.invalid/navigate"},50);');
  const r=await run(f.job,owner);assert.notEqual(r.mechanical,'PASS');const a=JSON.parse(fs.readFileSync(path.join(path.dirname(r.resultPath),'browser.json')));assert(a.blocked.some(b=>b.method==='POST'));assert(a.blocked.some(b=>b.type==='document'));assert(codes(r).includes('NETWORK_BLOCKED'));
});
test('unknown hero is contract reconciliation only and never emits fake hero/CTA page defects',async()=>{
  const f=fixture('hero-unknown');const c=JSON.parse(fs.readFileSync(path.join(f.job,'contract.json')));c.hero={selector:'UNKNOWN',ctaSelector:'UNKNOWN'};fs.writeFileSync(path.join(f.job,'contract.json'),JSON.stringify(c,null,2));
  const r=await run(f.job,owner);assert(!codes(r).includes('HERO_MISSING'));assert(!codes(r).includes('HERO_CTA_BELOW_FOLD_OR_OUTSIDE'));assert(r.defects.some(d=>d.code==='HERO_MAPPING'&&d.findingClass==='CONTRACT_RECONCILIATION_BLOCKED'));
});
test('unconfirmed mapping mismatch blocks reconciliation; confirmed mismatch is a page render defect',async()=>{
  const a=fixture('unconfirmed-map'),ca=JSON.parse(fs.readFileSync(path.join(a.job,'contract.json')));ca.items[0].mappingStatus='UNCONFIRMED';fs.writeFileSync(path.join(a.job,'contract.json'),JSON.stringify(ca,null,2));a.html(html.replace('id="logo"','id="gone"'));let r=await run(a.job,owner);let d=r.defects.find(x=>x.target==='I-logo'&&x.code==='MAPPING_MISSING');assert.equal(d.findingClass,'CONTRACT_RECONCILIATION_BLOCKED');
  const b=fixture('confirmed-map');b.html(html.replace('id="logo"','id="gone"'));r=await run(b.job,owner);d=r.defects.find(x=>x.target==='I-logo'&&x.code==='MAPPING_MISSING');assert.equal(d.findingClass,'PAGE_RENDER_DEFECT');assert.equal(d.level,'FAIL');
});
test('init excludes Markdown governance/header prose from baseline candidates',async()=>{
  const f=fixture('source-filter');const source=path.join(f.root,'source.md');fs.writeFileSync(source,'# Governance\nSources: https://not-a-fact.invalid\n| Topic | Fact | Source |\n| --- | --- | --- |\n| Official logo | published logo | official site |\n');
  const job=path.join(suite,'source-filter-job');await init({client:'source filter',owner,version:'active','current-evidence':'isolated source fixture','site-root':f.root,job,source:[source]});const c=JSON.parse(fs.readFileSync(path.join(job,'contract.json')));assert.equal(c.baseline.length,1);assert(c.baseline[0].excerpt.includes('Official logo'));
});
test('init retains missing assets from source baseline, no DOM-derived natural green',async()=>{
  const f=fixture('init-input');f.html(html.replace('<img id="logo" src="logo.svg" alt="Test business">',''));
  const source=path.join(f.root,'asset.csv');fs.writeFileSync(source,'Asset ID,Type,Source URL,File\nA-logo,logo,https://example.invalid/official,logo.svg\nA-real,real image,https://example.invalid/official,real.svg\n');
  const job=path.join(suite,'initialized');await init({client:'init baseline',owner,version:'active','current-evidence':'isolated source omission fixture','site-root':f.root,job,source:[source]});
  const c=JSON.parse(fs.readFileSync(path.join(job,'contract.json')));assert(c.baseline.some(b=>b.excerpt.includes('logo.svg')&&b.disposition==='UNMAPPED'));assert(validate(c).some(d=>d.code==='BASELINE_UNMAPPED'));
});
test.after(()=>{console.log('Evidence suite: '+suite)});
