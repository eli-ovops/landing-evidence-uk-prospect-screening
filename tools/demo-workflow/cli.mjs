#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { BASE, PROJECT, sha, json, safePath, outputPath, writeJSON, writeText, fingerprint, validate, defect, fileManifest, runtime, meaningful } from './core.mjs';
import { inspect } from './browser.mjs';

const HELP=`Local demo workflow (no scheduler, no publishing, no external clicks)
node tools/demo-workflow/cli.mjs doctor
node tools/demo-workflow/cli.mjs init --client NAME --owner ID --version VERSION --site-root PATH --current-evidence TEXT --job PATH [--source PATH ...]
node tools/demo-workflow/cli.mjs refresh-baseline --job PATH --owner ID
node tools/demo-workflow/cli.mjs confirm-current-mappings --job PATH --owner ID
node tools/demo-workflow/cli.mjs run --job PATH --owner ID
node tools/demo-workflow/cli.mjs resume --job PATH --owner ID
node tools/demo-workflow/cli.mjs status --job PATH
node tools/demo-workflow/cli.mjs review-check --job PATH --review PATH
Output jobs must be below evidence/demo-workflow-20260905/. Owner edits generated contract, never user homework.
Exit 0 = mechanical PASS only, 1 = mechanical FAIL, 2 = UNKNOWN/tool/input gap.
No command grants CLIENT-SHOWABLE PASS; independent reviewer identity is verified outside this CLI.`;
function args(argv){const opts={};for(let n=0;n<argv.length;n++){const k=argv[n];if(!k.startsWith('--')||!argv[n+1]||argv[n+1].startsWith('--'))throw Error('Bad option '+k);const v=argv[++n];if(k==='--source')(opts.source??=[]).push(v);else opts[k.slice(2)]=v;}return opts;}
function loadJob(job){job=outputPath(job);const receipt=json(path.join(job,'job.json'));return {job,receipt,contractPath:path.join(job,'contract.json')};}
function contractSummary(c){
  const unmapped=(c.baseline||[]).filter(b=>b.disposition==='UNMAPPED');
  const counts=Object.fromEntries([...new Set(c.items.map(i=>i.disposition))].map(d=>[d,c.items.filter(i=>i.disposition===d).length]));
  return `# ${c.client} / ${c.activeVersion}\n\nGenerated from contract.json; Owner reconciles sources, user does not fill JSON.\n\nAssets: ${c.assets.length}; activation items: ${c.items.length}; independent baseline: ${(c.baseline||[]).length}; UNMAPPED: ${unmapped.length}.\n\nDisposition counts: ${JSON.stringify(counts)}\n\nCoverage reconciliation: ${c.coverageReview}. No automatic commercial/visual PASS.\n\n${unmapped.slice(0,20).map(b=>`- ${b.id}: ${b.file}:${b.line} — Owner map/explain source item`).join('\n')}\n\nComplete source rows, original hashes, applicability and exclusions are in contract.json.\n`;
}
function sourceCandidates(file){
  const lines=fs.readFileSync(file.path,'utf8').split(/\r?\n/), ext=path.extname(file.path).toLowerCase();
  if(ext==='.csv'){
    const header=lines.findIndex(x=>x.trim());
    return lines.slice(header+1).map((text,index)=>({file:file.path,line:header+index+2,text})).filter(x=>x.text.trim()&&x.text.split(',').length>=4);
  }
  // Only import actual Markdown table data. Headings, governance prose, URLs and
  // table headers are context, not customer facts requiring a user reconciliation.
  return lines.map((text,index)=>({file:file.path,line:index+1,text})).filter(x=>{
    const t=x.text.trim();if(!t.startsWith('|')||t.split('|').length<4)return false;
    const cells=t.split('|').slice(1,-1).map(s=>s.trim());
    return cells.some(Boolean)&&!cells.every(s=>/^:?-{3,}:?$/.test(s))&&!cells.some(s=>/^(field|topic|id|asset id|research item|baseline|section|query|route)$/i.test(s));
  });
}
function assertOwner(receipt,owner){if(!owner||owner!==receipt.owner)throw Error('OWNER_MISMATCH');}
function evidenceFiles(dir){return fs.readdirSync(dir).filter(n=>/\.(json|png|md)$/.test(n)&&n!=='result.json'&&n!=='summary.md').sort().map(n=>({path:n,sha256:sha(fs.readFileSync(path.join(dir,n)))}));}
const CONTRACT_CODES=/^(BASELINE_|DUPLICATE_BASELINE|EMPTY_BASELINE|SOURCE_|ASSET_(?:UNMAPPED|UNKNOWN|SOURCE)|AUTHENTICITY|APPLICABILITY|DISPOSITION|FACT_|EXPECTATION_|CTA_PROMISE|VIEWPORT_OVERRIDE|HERO_MAPPING|MAPPING_(?:MISSING|STATUS|CONFIRMATION_PENDING)|CONTRACT_)/;
function classify(defects){
  for(const d of defects){
    const cls=d.findingClass||(CONTRACT_CODES.test(d.code)?'CONTRACT_RECONCILIATION_BLOCKED':d.level==='UNKNOWN'||d.level==='LIMITATION'?'EXTERNAL/INDEPENDENT_REVIEW_UNKNOWN':'PAGE_RENDER_DEFECT');
    d.findingClass=cls;
    if(cls==='CONTRACT_RECONCILIATION_BLOCKED'){
      d.repairClass='CONTRACT_RECONCILIATION';
      d.nextAction='Owner 仅用现有 source/asset/activation 资料补 source、适用性或 selector 映射，再 run；不是页面返修。';
    }else if(cls==='EXTERNAL/INDEPENDENT_REVIEW_UNKNOWN'){
      d.repairClass='EXTERNAL_OR_INDEPENDENT_REVIEW';
      d.nextAction='保留离线/独立核验限制；不得静默当作页面 PASS，也不自动修改页面。';
    }else {
      d.repairClass='SAME_VERSION_FIX';
      d.nextAction='Owner 在 active version 修复确证页面渲染/资源缺陷，再 run；不自动整体重做。';
    }
  }
  const grouped={contract:[],page:[],external:[]};
  for(const d of defects){
    const key=d.findingClass==='CONTRACT_RECONCILIATION_BLOCKED'?'contract':d.findingClass==='PAGE_RENDER_DEFECT'?'page':'external';
    grouped[key].push({code:d.code,target:d.target,detail:d.detail,level:d.level});
  }
  const reconciliationByTarget={};
  for(const d of grouped.contract){const key=d.target||'contract';(reconciliationByTarget[key]??=[]).push(d.code);}
  grouped.reconciliationByTarget=Object.fromEntries(Object.entries(reconciliationByTarget).map(([target,codes])=>[target,{codes:[...new Set(codes)],nextAction:'Use existing registered source/asset/activation material to reconcile this target; do not treat it as a page edit.'}]));
  return grouped;
}
function fresh(job){
  const {contractPath}=loadJob(job), fp=fingerprint(contractPath);let state;
  try{state=json(path.join(job,'status.json'));}catch{return {fp,current:false,phase:'受阻',reason:'STATUS_MISSING_OR_PARTIAL — resume rechecks all inputs'};}
  if(state.inputHash!==fp.inputHash)return {fp,current:false,phase:'进行中',reason:'STALE_INPUT — contract/page/CSS/JS/assets/sources/tool changed'};
  try{
    const rp=outputPath(state.resultPath), result=json(rp);
    if(sha(fs.readFileSync(rp))!==state.resultSha256||result.inputHash!==fp.inputHash)throw Error('RESULT_CHANGED');
    for(const f of result.evidence){const p=outputPath(path.join(path.dirname(rp),f.path));if(sha(fs.readFileSync(p))!==f.sha256)throw Error('EVIDENCE_CHANGED');}
    return {fp,current:true,phase:state.phase,result,resultPath:rp};
  }catch{return {fp,current:false,phase:'受阻',reason:'EVIDENCE_MISSING_OR_CHANGED — resume must generate new evidence'};}
}
export function status(job){const s=fresh(job);return {current:s.current,phase:s.phase,reason:s.reason||null,mechanical:s.current?s.result.mechanical:'UNKNOWN',clientShowable:'AWAITING INDEPENDENT REVIEW — CLI never grants final PASS',inputHash:s.fp.inputHash,resultPath:s.resultPath||null,scheduler:false,nextAction:s.current?'Independent reviewer inspect same-hash raw evidence; defects return to same version':'Owner resume with current inputs'};}
export async function init(opts){
  const job=outputPath(opts.job),root=safePath(opts['site-root']);
  if(fs.existsSync(path.join(job,'job.json')))throw Error('JOB_ALREADY_EXISTS — use resume; init never overwrites a contract');
  if(!opts.owner||!opts.client||!opts.version||!opts['current-evidence'])throw Error('MISSING_IDENTITY');
  if(root===PROJECT||root===BASE)throw Error('SITE_ROOT_TOO_BROAD');
  if(job===root||job.startsWith(root+path.sep))throw Error('OUTPUT_INSIDE_CUSTOMER_ROOT');
  const clientRoot=path.join(PROJECT,path.relative(PROJECT,root).split(path.sep)[0]);
  const sourceFiles=(opts.source||[]).map(p=>{p=safePath(p,clientRoot);if(!/\.(md|csv|txt|json)$/i.test(p))throw Error('SOURCE_TYPE_NOT_ALLOWED');return {path:p,sha256:sha(fs.readFileSync(p))};});
  fs.mkdirSync(job,{recursive:true});
  const c={schemaVersion:1,client:opts.client,owner:opts.owner,activeVersion:opts.version,currentEvidence:opts['current-evidence'],siteRoot:root,entry:opts.entry||'index.html',sourceFiles,sources:[],assets:[],items:[],hero:{selector:'UNKNOWN',ctaSelector:'UNKNOWN'},sections:[],coverageReview:'UNKNOWN — Owner reconcile imported material with existing research; initializer is not exhaustive',customerAuthorization:'NOT VERIFIED',transferEligibility:'UNKNOWN'};
  writeJSON(path.join(job,'contract.json'),c);writeJSON(path.join(job,'job.json'),{owner:opts.owner,client:opts.client,siteRoot:root,sourceAllowlist:sourceFiles.map(s=>s.path),createdAt:new Date().toISOString(),scheduler:false});
  const fp=fingerprint(path.join(job,'contract.json'));
  const observed=await inspect(fp,job,{screenshots:false});
  writeJSON(path.join(job,'initial-observation.json'),observed);
  const seen=new Set();
  for(const x of Object.values(observed.views).flatMap(v=>v.discovered)){
    if(x.kind==='local-link')continue;
    const key=JSON.stringify([x.kind,x.selector,x.href,x.urls,x.text]);if(seen.has(key))continue;seen.add(key);
    const sid='S'+(c.sources.length+1);c.sources.push({id:sid,grade:'UNKNOWN',url:'UNKNOWN',retrievedDate:'UNKNOWN',platform:'UNKNOWN',attribution:'UNKNOWN',importOrigin:'existing page observation; NOT proof of official provenance'});
    const item={id:'R'+(c.items.length+1),category:x.kind,baselineId:'B'+(c.items.length+1),factState:'UNKNOWN',sourceId:sid,mappingStatus:'UNCONFIRMED',applicability:'YES',disposition:x.kind==='image'?'DIRECT USE':'FACT/PARAPHRASE USE',section:x.section,selector:x.selector,reason:'',viewports:['desktop','mobile']};
    if(x.kind==='image'){
      const u=new URL(x.urls[0]);let assetPath;
      if(u.origin==='http://demo.local'){assetPath=decodeURIComponent(u.pathname.slice(1));}else assetPath=x.urls[0];
      const f=fp.inputs.manifest.find(f=>f.path===assetPath),id='A'+(c.assets.length+1);
      c.assets.push({id,path:assetPath,sha256:f?.sha256||'UNKNOWN',originalPath:assetPath,originalSha256:f?.sha256||'UNKNOWN',sourceId:sid,role:x.section,focus:x.focus||'UNKNOWN',authenticity:'UNKNOWN',rights:'UNKNOWN',permissionEvidence:'UNKNOWN'});item.assetId=id;
    }else if(x.kind==='path'){item.href=x.href;item.text=x.text;item.promise=x.text||'UNKNOWN';item.disposition='LOCATION/VISIT USE';}else item.text=x.text;
    c.items.push(item);
  }
  // Keep each candidate source line as an actionable import, not a silent exclusion.
  c.researchCandidates=sourceFiles.flatMap(sourceCandidates);
  // Independent baseline survives absent DOM content. Every selected source row remains UNMAPPED until reconciled.
  c.baseline=c.researchCandidates.map((x,n)=>({id:'BASE'+(n+1),file:x.file,line:x.line,excerpt:x.text,excerptSha256:sha(x.text),disposition:'UNMAPPED',itemIds:[],sourceIds:[],reason:''}));
  writeJSON(path.join(job,'contract.json'),c);
  writeText(path.join(job,'contract-summary.md'),contractSummary(c));
  writeJSON(path.join(job,'status.json'),{phase:'进行中',owner:c.owner,activeVersion:c.activeVersion,scheduler:false,nextAction:'Owner reconcile source candidates/grade/facts/hero against materials, implement then run; do not ask user to fill contract'});
  return {job,contract:path.join(job,'contract.json'),items:c.items.length,assets:c.assets.length,researchCandidates:c.researchCandidates.length,mechanical:'UNKNOWN',nextAction:'Owner reconcile automatically extracted page and source candidates'};
}
export function refreshBaseline(job,owner){
  const j=loadJob(job);assertOwner(j.receipt,owner);const c=json(j.contractPath);
  c.researchCandidates=(c.sourceFiles||[]).flatMap(sourceCandidates);
  c.baseline=c.researchCandidates.map((x,n)=>({id:'BASE'+(n+1),file:x.file,line:x.line,excerpt:x.text,excerptSha256:sha(x.text),disposition:'UNMAPPED',itemIds:[],sourceIds:[],reason:''}));
  c.coverageReview='UNKNOWN — refreshed from source-only baseline; Owner reconcile required';
  writeJSON(j.contractPath,c);writeText(path.join(j.job,'contract-summary.md'),contractSummary(c));
  return {job:j.job,researchCandidates:c.researchCandidates.length,baseline:c.baseline.length,nextAction:'Owner reconcile only these source data rows; headings/governance/page DOM were not imported.'};
}
export function confirmCurrentMappings(job,owner){
  const j=loadJob(job);assertOwner(j.receipt,owner);const c=json(j.contractPath);
  if(c.coverageReview!=='OWNER_RECONCILED')throw Error('COVERAGE_NOT_RECONCILED');
  for(const i of c.items||[])i.mappingStatus='OWNER_CONFIRMED';
  for(const b of c.baseline||[])if(b.disposition==='MAPPED'){
    b.sourceIds=[...new Set((b.itemIds||[]).map(id=>c.items.find(i=>i.id===id)?.sourceId).filter(Boolean))];
    if((b.itemIds||[]).length>1&&!meaningful(b.reason))b.reason='Existing activation matrix consolidates these source-linked items into one retained page treatment.';
  }
  writeJSON(j.contractPath,c);return {job:j.job,items:(c.items||[]).length,baseline:(c.baseline||[]).length,nextAction:'Current owner-confirmed mappings are now eligible for page-render defects; rerun same version.'};
}
export async function run(job, owner){
  const j=loadJob(job);assertOwner(j.receipt,owner);
  const lock=path.join(job,'run.lock');
  if(fs.existsSync(lock)){
    let held;try{held=json(lock)}catch{throw Error('LOCK_PARTIAL — inspect run.lock; no concurrent recovery guesses')}
    try{process.kill(held.pid,0);throw Error('JOB_BUSY')}catch(e){if(e.message==='JOB_BUSY'||e.code!=='ESRCH')throw e;}
    fs.renameSync(lock,lock+'.interrupted-'+crypto.randomUUID());
  }
  fs.writeFileSync(lock,JSON.stringify({pid:process.pid,owner,startedAt:new Date().toISOString()}),{flag:'wx'});
  const attempt=path.join(job,'runs',new Date().toISOString().replace(/[:.]/g,'-')+'-'+crypto.randomUUID().slice(0,8));fs.mkdirSync(attempt,{recursive:true});
  try {
    const fp=fingerprint(j.contractPath);
    if(fp.c.owner!==owner||fp.siteRoot!==j.receipt.siteRoot||fp.c.client!==j.receipt.client)throw Error('JOB_IDENTITY_DRIFT');
    const defects=validate(fp.c);
    writeJSON(path.join(job,'status.json'),{phase:'进行中',activeVersion:fp.c.activeVersion,owner,inputHash:fp.inputHash,scheduler:false,nextAction:'Current attempt browser checks',attempt});
    writeJSON(path.join(attempt,'inputs.json'),fp.inputs);
    writeText(path.join(attempt,'contract-summary.md'),contractSummary(fp.c));
    for(const s of fp.c.sourceFiles||[])if(fp.inputs.sources.find(x=>x.path===s.path)?.sha256!==s.sha256)defects.push(defect('SOURCE_RECORD_STALE',s.path,'Source file changed since contract import','UNKNOWN'));
    for(const a of fp.c.assets||[]){
      for(const [field,h] of [['path','sha256'],['originalPath','originalSha256']]){
        if(typeof a[field]!=='string'||/^https?:/.test(a[field])){defects.push(defect('REMOTE_ASSET_UNVERIFIED',a.id,'Local immutable original/render bytes required','UNKNOWN'));continue}
        try{if(path.isAbsolute(a[field])||a[field].split(/[\\/]/).includes('..'))throw Error('ASSET_PATH_ESCAPE');const p=safePath(path.join(fp.siteRoot,a[field]),fp.siteRoot);if(!fs.existsSync(p)||sha(fs.readFileSync(p))!==a[h])defects.push(defect('ASSET_HASH_MISMATCH',a.id,field+' missing or changed'));}catch{defects.push(defect('ASSET_PATH_ESCAPE',a.id,field+' invalid'));}
      }
    }
    let audit;
    try{audit=await inspect(fp,attempt);defects.push(...audit.defects);}catch(e){defects.push(defect('BROWSER_UNAVAILABLE','runtime',e.message,'UNKNOWN'));audit={views:{},runtime:null};}
    writeJSON(path.join(attempt,'browser.json'),audit);
    if(fingerprint(j.contractPath).inputHash!==fp.inputHash)defects.push(defect('INPUT_CHANGED_DURING_RUN','inputs','Shared input changed; rerun current snapshot','UNKNOWN'));
    const findingSummary=classify(defects);
    const mechanical=defects.some(d=>d.level==='FAIL')?'FAIL':defects.some(d=>d.level==='UNKNOWN')?'UNKNOWN':'PASS';
    const visualTasks=(fp.c.assets||[]).map(a=>({assetId:a.id,source:path.join(fp.siteRoot,a.originalPath||''),originalSha256:a.originalSha256,renderFile:path.join(fp.siteRoot,a.path||''),sha256:a.sha256,focus:a.focus,role:a.role,selectors:(fp.c.items||[]).filter(i=>i.assetId===a.id).map(i=>i.selector),evidence:['desktop-full.png','mobile-full.png'],question:'Independent reviewer compare original with both renders: subject crop, truthfulness, quality and commercial role; mechanical decoding does not answer these'}));
    writeJSON(path.join(attempt,'visual-review-tasks.json'),{inputHash:fp.inputHash,assets:visualTasks,businessReview:['brand/IA/storyboard','5-second recognition','before/after commercial increment','Bottom 40%','Gate E positive retention questions','existing ten-part visual rubric'],identity:'Independent reviewer provenance must be verified by PMO, never a generic string'});
    const result={schemaVersion:1,createdAt:new Date().toISOString(),owner,client:fp.c.client,activeVersion:fp.c.activeVersion,inputHash:fp.inputHash,mechanical,clientShowable:'AWAITING INDEPENDENT REVIEW',scheduler:false,defects,findingSummary,runtime:audit.runtime,evidence:evidenceFiles(attempt),nextAction:mechanical==='PASS'?'Independent visual review bound to inputHash + result SHA + evidence SHA':'Resolve the classed findings: contract reconciliation is not a page defect; only PAGE_RENDER DEFECT is a same-version page fix.'};
    writeJSON(path.join(attempt,'result.json'),result);
    const summary=`# ${fp.c.client} / ${fp.c.activeVersion}\n\nMechanical: ${mechanical}; Client-showable: AWAITING INDEPENDENT REVIEW.\n\nInput: ${fp.inputHash}\n\nResume is a local recheck, not a scheduler. ${defects.length} findings: contract ${findingSummary.contract.length}; page ${findingSummary.page.length}; external/independent ${findingSummary.external.length}. Full detail is in result.json.\n\n${defects.slice(0,20).map(d=>`- ${d.findingClass} / ${d.level} ${d.code} [${d.viewport||'static'}] ${d.target}: ${d.detail} → ${d.repairClass}`).join('\n')}\n\nNext: ${result.nextAction}\n`;
    writeText(path.join(attempt,'summary.md'),summary);
    writeJSON(path.join(job,'status.json'),{phase:mechanical==='PASS'?'待验收':mechanical==='UNKNOWN'?'受阻':'进行中',owner,activeVersion:fp.c.activeVersion,inputHash:fp.inputHash,resultPath:path.join(attempt,'result.json'),resultSha256:sha(fs.readFileSync(path.join(attempt,'result.json'))),mechanical,scheduler:false,defects,nextAction:result.nextAction});
    return {...result,resultPath:path.join(attempt,'result.json')};
  }finally{fs.renameSync(lock,path.join(attempt,'lock-released.json'));}
}
export function reviewCheck(job,reviewPath){
  const s=fresh(job);if(!s.current)return {binding:'FAIL',reason:s.reason,clientShowable:'AWAITING INDEPENDENT REVIEW'};
  const r=json(safePath(reviewPath));
  const issues=[];
  if(r.inputHash!==s.fp.inputHash||r.resultSha256!==sha(fs.readFileSync(s.resultPath)))issues.push('REVIEW_STALE_OR_WRONG_INPUT');
  if(!r.reviewer||typeof r.reviewer!=='object'||!r.reviewer.taskId||!r.reviewer.name||r.reviewer.taskId===s.fp.c.owner||!r.reviewer.identityEvidence)issues.push('REVIEWER_IDENTITY_NOT_VERIFIABLE');
  if(JSON.stringify(r.evidence)!==JSON.stringify(s.result.evidence))issues.push('REVIEW_EVIDENCE_MISMATCH');
  if(!r.viewportFindings?.desktop||!r.viewportFindings?.mobile||!r.businessFindings||!r.assetFindings)issues.push('REVIEW_FINDINGS_MISSING');
  return {binding:issues.length?'FAIL':'STRUCTURALLY_BOUND',issues,identityAuthentication:'NOT PROVIDED BY LOCAL CLI; PMO must check independent task provenance',clientShowable:'AWAITING INDEPENDENT REVIEW / PMO VERIFICATION',mechanical:s.result.mechanical,scheduler:false};
}
export async function main(argv=process.argv.slice(2)){
  const cmd=argv.shift();if(!cmd||cmd==='help'){console.log(HELP);return 0;}const o=args(argv);let r;
  if(cmd==='doctor'){const rt=runtime();const b=await rt.lib.chromium.launch({channel:process.env.DEMO_BROWSER_CHANNEL||'chrome',headless:true});r={node:process.version,playwright:rt.version,module:rt.module,browser:b.version(),installAttempted:false};await b.close();}
  else if(cmd==='init')r=await init(o);
  else if(cmd==='refresh-baseline')r=refreshBaseline(outputPath(o.job),o.owner);
  else if(cmd==='confirm-current-mappings')r=confirmCurrentMappings(outputPath(o.job),o.owner);
  else if(['run','resume'].includes(cmd))r=await run(outputPath(o.job),o.owner);
  else if(cmd==='status')r=status(outputPath(o.job));
  else if(cmd==='review-check')r=reviewCheck(outputPath(o.job),o.review);
  else throw Error('Unknown command');
  console.log(JSON.stringify(r,null,2));return r.binding==='FAIL'||r.mechanical==='FAIL'?1:r.mechanical==='UNKNOWN'?2:0;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))main().then(code=>{process.exitCode=code}).catch(e=>{console.error(JSON.stringify({mechanical:'UNKNOWN',error:e.message,scheduler:false,nextAction:'Owner resolve only affected job/input/tool gap; other jobs continue'}));process.exitCode=2;});
