import {chromium} from '/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=fs.realpathSync(path.dirname(fileURLToPath(import.meta.url)));
const allowed=fs.realpathSync('/Volumes/EXTERNAL/海外落地页/evidence/uk-prospect-screening-20260906-r1/research-20260907/hedley');
if(root!==allowed)throw Error('Unauthorized output root');
const b=await chromium.launch({channel:'chrome',headless:true});
try{for(const [id,url,vp] of [
['council-desktop','https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=35659',{width:1440,height:900}],
['council-mobile','https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=35659',{width:390,height:844}],
['local-directory','https://www.chesterfieldlocal.com/local-business',{width:1440,height:900}]
]){const c=await b.newContext({viewport:vp,acceptDownloads:false,serviceWorkers:'block'});const p=await c.newPage();let error=null,status=null;
try{status=(await p.goto(url,{waitUntil:'load',timeout:30000}))?.status();}catch(e){error=e.message;}
const buttons=await p.locator('button').allTextContents();let cookieAction='none';
const reject=p.getByRole('button',{name:'Reject all',exact:true});if(await reject.count()){try{await reject.click({timeout:5000});await reject.waitFor({state:'hidden',timeout:6000});cookieAction='Reject all clicked; button confirmed hidden';}catch(e){cookieAction=e.message;}}
await p.screenshot({path:path.join(root,id+'.png'),fullPage:false});
const data=await p.evaluate(()=>({url:location.href,title:document.title,text:document.body.innerText,links:[...document.querySelectorAll('a[href]')].map(a=>({text:a.innerText,url:a.href})),images:[...document.images].map(i=>({alt:i.alt,url:i.currentSrc,width:i.naturalWidth,height:i.naturalHeight})),dialogs:[...document.querySelectorAll('[role="dialog"]')].map(e=>({text:e.innerText,visible:!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}))}));
// Preserve bounded relevant evidence only, not bulk directory/review text.
let relevant;if(id.startsWith('council')) {relevant=data.text.split('Customer reviews for this trader')[0];const m=data.text.match(/.{0,450}Reviewed on 13\/08\/2026/s);data.h0excerpt=m?m[0].slice(-650):null;data.reviewDates=[...data.text.matchAll(/Reviewed on (\d{2}\/\d{2}\/\d{4})/g)].map(m=>m[1]);data.reviewThemes=data.text.slice(data.text.indexOf('Customer reviews for this trader'),data.text.indexOf('Customer reviews for this trader')+4400);}else{let i=data.text.toLowerCase().indexOf('hedley');relevant=i<0?'NO HEDLEY TEXT':data.text.slice(Math.max(0,i-120),i+500);data.links=data.links.filter(x=>/hedley|35659/i.test(x.text+' '+x.url));data.images=[];}
delete data.text;fs.writeFileSync(path.join(root,id+'.json'),JSON.stringify({retrieved:new Date().toISOString(),requested:url,viewport:vp,status,error,cookieAction,buttons,browser:b.version(),overview:relevant,...data},null,2));console.log(JSON.stringify({id,status,error,cookieAction,overview:relevant,h0:data.h0excerpt,links:id==='local-directory'?data.links:undefined}));await c.close();}}finally{await b.close();}
