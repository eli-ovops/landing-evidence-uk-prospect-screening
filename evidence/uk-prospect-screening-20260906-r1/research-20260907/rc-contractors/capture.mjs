import { chromium } from '/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const allowed='/Volumes/EXTERNAL/海外落地页/evidence/uk-prospect-screening-20260906-r1/research-20260907/rc-contractors';
if(fs.realpathSync(root)!==fs.realpathSync(allowed))throw Error('ROOT BOUNDARY');
function dest(name){const p=path.resolve(root,name);const r=path.relative(root,p);if(r.startsWith('..')||path.isAbsolute(r))throw Error('OUTPUT BOUNDARY');return p;}
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--disable-background-networking']});
try{for(const [name,viewport] of Object.entries({desktop:{width:1440,height:900},mobile:{width:390,height:844}})){
const context=await browser.newContext({viewport,isMobile:name==='mobile',hasTouch:name==='mobile',acceptDownloads:false,serviceWorkers:'block'});
const page=await context.newPage();
const url='https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=62399';
const response=await page.goto(url,{waitUntil:'load',timeout:30000});
const data=await page.evaluate(()=>{
 const body=document.body.innerText;const overview=body.split('Customer reviews for this trader')[0];
 const dates=[...body.matchAll(/Reviewed on (\d{2}\/\d{2}\/\d{4})/g)].map(m=>m[1]);
 const i=body.indexOf('Rob and Jonny have just');
 return {url:location.href,title:document.title,overview,dates,h0Excerpt:i>=0?body.slice(i,i+230):null,
 links:[...document.querySelectorAll('a[href]')].map(a=>({text:a.innerText,href:a.href})),
 images:[...document.images].map(i=>({alt:i.alt,url:i.currentSrc,width:i.naturalWidth,height:i.naturalHeight})),
 reviewBlocks:[...document.querySelectorAll('p')].filter(p=>p.innerText.includes('Reviewed on')).slice(0,5).map(p=>({text:p.innerText.slice(0,130),html:p.outerHTML.slice(0,260)}))};
});
fs.writeFileSync(dest(name+'.json'),JSON.stringify({retrieved:new Date().toISOString(),viewport,status:response.status(),browser:browser.version(),...data},null,2));
await page.screenshot({path:dest(name+'.png')});
if(name==='desktop'){const h=page.getByText('Rob and Jonny have just absolutely transformed', {exact:false}).first();if(await h.count()){await h.scrollIntoViewIfNeeded();await page.screenshot({path:dest('h0-review.png')});}}
console.log(JSON.stringify({name,status:response.status(),dates:data.dates.slice(0,5),overview:data.overview,images:data.images.filter(i=>i.alt==='R C Contractors')}));
await context.close();
}}finally{await browser.close();}
