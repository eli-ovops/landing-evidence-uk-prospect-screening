import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

export const PROJECT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
export const BASE = path.join(PROJECT, 'evidence/demo-workflow-20260905');
export const VERSION = 1;
export const sha = x => crypto.createHash('sha256').update(x).digest('hex');
export const json = p => JSON.parse(fs.readFileSync(p, 'utf8'));
export const meaningful = x => typeof x === 'string' && x.trim().length > 0 && !/^(UNKNOWN|NOT VERIFIED|TBD)$/i.test(x.trim());
export const isWithin = (root, p) => p === root || p.startsWith(root + path.sep);
export function safePath(p, root = PROJECT) {
  if (typeof p !== 'string' || p.split(/[\\/]/).includes('..')) throw Error('PATH_TRAVERSAL');
  const full = path.resolve(p);
  if (!isWithin(root, full)) throw Error('PATH_OUTSIDE_SCOPE');
  let part = full;
  while (part !== path.dirname(part)) {
    if (fs.existsSync(part) && fs.lstatSync(part).isSymbolicLink()) throw Error('SYMLINK_NOT_ALLOWED');
    part = path.dirname(part);
  }
  return full;
}
export function outputPath(p) { return safePath(p, BASE); }
export function writeJSON(p, data) {
  outputPath(p); fs.mkdirSync(path.dirname(p), { recursive: true });
  // Atomic replacement of this job's own status, never customer content.
  const temp = p + '.pending-' + crypto.randomUUID();
  fs.writeFileSync(temp, JSON.stringify(data, null, 2) + '\n', { flag: 'wx' });
  fs.renameSync(temp, p);
}
export function writeText(p, text) { outputPath(p); fs.mkdirSync(path.dirname(p), {recursive:true}); fs.writeFileSync(p, text); }
const STATIC = /\.(html?|css|m?js|svg|png|jpe?g|webp|avif|gif|ico|woff2?|ttf|otf|mp4|webm)$/i;
export function fileManifest(root, snapshot = new Map()) {
  root = safePath(root); const files = [];
  function visit(dir) {
    for (const name of fs.readdirSync(dir).sort()) {
      if (name.startsWith('.') || /^(node_modules|docs|evidence|backups|LOCAL_PREVIEW_PACKAGE.*)$/i.test(name)) continue;
      const p = path.join(dir,name), st = fs.lstatSync(p);
      if (st.isSymbolicLink()) throw Error('SYMLINK_NOT_ALLOWED: ' + path.relative(root,p));
      if (st.isDirectory()) visit(p);
      else if (STATIC.test(name)) { const bytes=fs.readFileSync(p), relative=path.relative(root,p); snapshot.set('/'+relative,bytes); files.push({path:relative,sha256:sha(bytes),bytes:bytes.length}); }
    }
  }
  visit(root); return files;
}
export function fingerprint(contractPath) {
  contractPath = safePath(contractPath); const bytes = fs.readFileSync(contractPath), c = JSON.parse(bytes);
  const siteRoot = safePath(c.siteRoot);
  if(siteRoot===PROJECT||siteRoot===BASE)throw Error('SITE_ROOT_TOO_BROAD');
  if(typeof c.entry!=='string'||path.isAbsolute(c.entry)||c.entry.split(/[\\/]/).includes('..'))throw Error('ENTRY_PATH_INVALID');
  const receipt=json(path.join(path.dirname(contractPath),'job.json'));
  if(receipt.siteRoot!==siteRoot)throw Error('JOB_ROOT_DRIFT');
  const snapshot=new Map(), manifest = fileManifest(siteRoot,snapshot);
  const sources = (c.sourceFiles || []).map(s => {
    const p = safePath(s.path);
    if(!receipt.sourceAllowlist?.includes(p))throw Error('SOURCE_OUTSIDE_JOB_ALLOWLIST');
    if (!/\.(md|csv|json|txt)$/i.test(p)) throw Error('SOURCE_TYPE_NOT_ALLOWED');
    return {path:p,sha256:fs.existsSync(p)?sha(fs.readFileSync(p)):'MISSING'};
  });
  const engine = ['core.mjs','browser.mjs','cli.mjs'].map(p=>({path:p,sha256:sha(fs.readFileSync(path.join(PROJECT,'tools/demo-workflow',p)))}));
  const inputs = {contractSha256:sha(bytes),activeVersion:c.activeVersion,manifest,sources,engine};
  return {c,siteRoot,inputs,snapshot,inputHash:sha(JSON.stringify(inputs))};
}
export function defect(code, target, detail, level='FAIL') {
  return {code,target,detail,level,repairClass:level==='UNKNOWN'?'OWNER_EVIDENCE':'SAME_VERSION_FIX',nextAction:level==='UNKNOWN'?'Owner 补齐该项来源/适用性或工具证据，再 run':'Owner 在 active version 修复该项，再 run；不自动整体重做'};
}
const dispositions = ['DIRECT USE','FACT/PARAPHRASE USE','LOCATION/VISIT USE','CONCEPT VISUAL REPLACEMENT','TIME-SENSITIVE VERIFY/REPHRASE','EXCLUDE'];
export function validate(c) {
  const d=[]; const add=(...a)=>d.push(defect(...a));
  for(const k of ['client','owner','activeVersion','currentEvidence','siteRoot','entry']) if(!meaningful(c[k])) add('CONTRACT_FIELD',k,'必需身份/当前版本依据缺失');
  if(c.schemaVersion!==VERSION) add('CONTRACT_VERSION','schemaVersion','不支持的 contract 版本');
  for(const k of ['items','assets','sources','sourceFiles']) if(!Array.isArray(c[k])) add('CONTRACT_ARRAY',k,'必须是数组');
  if(d.length) return d;
  if(c.coverageReview!=='OWNER_RECONCILED')add('BASELINE_RECONCILIATION_PENDING','coverageReview','Owner reconcile independent source inventory; DOM observations alone are not coverage','UNKNOWN');
  if(!Array.isArray(c.baseline)||!c.baseline.length)add('BASELINE_MISSING','baseline','Owner supply existing asset/activation/source inventory','UNKNOWN');
  const baseIds=new Set();
  for(const b of c.baseline||[]){
    if(!meaningful(b.id)||baseIds.has(b.id))add('DUPLICATE_BASELINE_ID',b.id,'baseline id must be unique');baseIds.add(b.id);
    if(!['MAPPED','EXCLUDE','SUPERSEDED'].includes(b.disposition))add('BASELINE_UNMAPPED',b.id,`${b.file}:${b.line} — Owner map source item to contract item; no user JSON work`);
    else if(b.disposition==='MAPPED'){
      const mapped=(b.itemIds||[]).map(id=>c.items.find(i=>i.id===id));
      if(!mapped.length||mapped.some(i=>!i))add('BASELINE_MAPPING_INVALID',b.id,'baseline requires existing itemIds');
      const baselineSources=b.sourceIds||[];
      if(c.coverageReview==='OWNER_RECONCILED'&&!baselineSources.length)add('BASELINE_SOURCE_LINK_MISSING',b.id,'reconciled baseline needs sourceIds that match mapped item sourceId','UNKNOWN');
      if(baselineSources.length&&mapped.some(i=>i&&!baselineSources.includes(i.sourceId)))add('BASELINE_SOURCE_MISMATCH',b.id,'baseline sourceIds must include every mapped item sourceId');
      if(baselineSources.length&&!baselineSources.every(id=>c.sources.some(s=>s.id===id)))add('BASELINE_SOURCE_INVALID',b.id,'baseline sourceIds must exist in contract sources');
      if((mapped.length>1||baselineSources.length>1)&&!meaningful(b.reason))add('BASELINE_CONSOLIDATION_REASON',b.id,'many-to-one/multi-source mapping needs a specific consolidate reason');
    }
    else if(b.disposition!=='MAPPED'&&(!meaningful(b.reason)||b.reason.length<12))add('BASELINE_EXCLUSION_REASON',b.id,'specific source-backed exclusion/supersession required');
  }
  if(c.baseline?.length&&c.baseline.every(b=>b.disposition==='EXCLUDE'||b.disposition==='SUPERSEDED'))add('EMPTY_BASELINE_COVERAGE','baseline','all excluded/superseded cannot prove retained business coverage');
  const ids = new Set();
  for(const x of [...c.sources,...c.assets,...c.items]) {
    if(!meaningful(x.id)||ids.has(x.id)) add('DUPLICATE_OR_EMPTY_ID',x.id||'UNKNOWN','ID 必须全局唯一'); ids.add(x.id);
  }
  const sourceIds = new Set(c.sources.map(x=>x.id)), assetIds=new Set(c.assets.map(x=>x.id));
  for(const s of c.sources) {
    if(!['A','B','C','UNKNOWN'].includes(s.grade)) add('SOURCE_GRADE',s.id,'保留 A/B/C/UNKNOWN');
    for(const k of ['url','retrievedDate','platform','attribution']) if(!meaningful(s[k])) add('SOURCE_UNKNOWN',s.id,k+' 需 Owner 从资料补证','UNKNOWN');
    if(s.grade==='UNKNOWN') add('SOURCE_UNKNOWN',s.id,'来源等级未确认','UNKNOWN');
  }
  for(const a of c.assets) {
    if(!c.items.some(i=>i.assetId===a.id))add('ASSET_UNMAPPED',a.id,'Registered asset has no mapping or item-level specific exclusion');
    for(const k of ['path','originalPath','sha256','originalSha256','role','focus','authenticity','rights']) if(!meaningful(a[k])) add('ASSET_UNKNOWN',a.id,k+' 未确认','UNKNOWN');
    if(!sourceIds.has(a.sourceId)) add('ASSET_SOURCE',a.id,'无对应来源','UNKNOWN');
    if(!['REAL','CONCEPT','UNKNOWN'].includes(a.authenticity)) add('AUTHENTICITY',a.id,'不得虚构真实性分类');
    const s=c.sources.find(s=>s.id===a.sourceId);
    if(s?.grade==='C' && !meaningful(a.permissionEvidence) && c.items.some(i=>i.assetId===a.id&&i.disposition!=='EXCLUDE')) add('C_ASSET_RIGHTS',a.id,'C 级直接使用缺可定位许可');
    if(a.authenticity==='UNKNOWN') add('AUTHENTICITY_UNKNOWN',a.id,'真实/概念属性未核','UNKNOWN');
  }
  if(!c.items.length || c.items.every(i=>i.disposition==='EXCLUDE'||i.applicability==='NO')) add('EMPTY_COVERAGE','items','空契约/全排除不能证明覆盖');
  for(const i of c.items) {
    if(!['YES','NO','UNKNOWN'].includes(i.applicability)) add('APPLICABILITY',i.id,'适用性只能 YES/NO/UNKNOWN');
    if(i.applicability==='UNKNOWN') add('APPLICABILITY_UNKNOWN',i.id,'Owner 判断商户适用性，不能默认为排除','UNKNOWN');
    if(!dispositions.includes(i.disposition)) add('DISPOSITION',i.id,'必须选择唯一既有 Activation Disposition');
    if(i.applicability==='NO'||i.disposition==='EXCLUDE') {
      if(!meaningful(i.reason)||i.reason.trim().length<12) add('EXCLUSION_REASON',i.id,'需具体排除/替代理由');
      continue;
    }
    if(!meaningful(i.selector)) add('MAPPING_MISSING',i.id,'需要当前页面 selector');
    if(!['OWNER_CONFIRMED','UNCONFIRMED'].includes(i.mappingStatus)) add('MAPPING_STATUS',i.id,'mappingStatus must be OWNER_CONFIRMED or UNCONFIRMED','UNKNOWN');
    if(c.coverageReview==='OWNER_RECONCILED'&&i.mappingStatus!=='OWNER_CONFIRMED') add('MAPPING_CONFIRMATION_PENDING',i.id,'global reconciled coverage cannot leave item mapping unconfirmed','UNKNOWN');
    if(!meaningful(i.section)) add('SECTION_MISSING',i.id,'需要商业版位');
    if(!['OBSERVED FACT','SOURCE CLAIM','INFERENCE','UNKNOWN'].includes(i.factState)) add('FACT_STATE',i.id,'事实与来源主张/推断分开');
    if(['UNKNOWN','INFERENCE'].includes(i.factState)) add('FACT_UNKNOWN',i.id,'不得以推断或未知自动通过','UNKNOWN');
    if(!sourceIds.has(i.sourceId)) add('FACT_SOURCE',i.id,'缺来源关联','UNKNOWN');
    if(i.assetId&&!assetIds.has(i.assetId)) add('ASSET_ID',i.id,'资产 ID 不存在');
    if(!i.assetId&&!meaningful(i.text)&&!meaningful(i.href)) add('EXPECTATION_MISSING',i.id,'至少指定资产、关键可见文字或路径，不能只验证空容器');
    if(i.href&&!meaningful(i.promise)) add('CTA_PROMISE',i.id,'需要路径对应的页面承诺');
    if(i.viewports && JSON.stringify(i.viewports)!==JSON.stringify(['desktop','mobile'])) add('VIEWPORT_OVERRIDE',i.id,'双视口要求不可省略；响应式 selector 用 selectors.desktop/mobile');
  }
  if(!meaningful(c.hero?.selector) || !meaningful(c.hero?.ctaSelector)) add('HERO_MAPPING','hero','缺已确认 hero / CTA selector；跳过 contract-dependent hero mapping，不伪造页面缺陷','UNKNOWN');
  return d;
}
export function runtime() {
  const req=createRequire(import.meta.url); const candidates=[process.env.DEMO_PLAYWRIGHT,'playwright','/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'].filter(Boolean);
  for(const p of candidates) {try {const lib=req(p); const pkg=req(p+'/package.json'); return {lib,module:p,version:pkg.version};}catch{}}
  throw Error('PLAYWRIGHT_UNAVAILABLE: set DEMO_PLAYWRIGHT to an already installed module; no install attempted');
}
