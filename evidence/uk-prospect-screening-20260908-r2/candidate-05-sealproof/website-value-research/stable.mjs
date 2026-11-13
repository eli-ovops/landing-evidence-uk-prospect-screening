import {chromium} from '/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
const browser=await chromium.launch({channel:'chrome',headless:true});
try{for(const [view,viewport] of Object.entries({desktop:{width:1440,height:900},mobile:{width:390,height:844}})){
const c=await browser.newContext({viewport,isMobile:view==='mobile',hasTouch:view==='mobile',acceptDownloads:false,serviceWorkers:'block'});const p=await c.newPage();
for(const id of ['home','testimonials','contact']){
const url='https://infosealproof.wixsite.com/sealproof'+(id==='home'?'':'/'+id);await p.goto(url,{waitUntil:'load',timeout:30000});await p.waitForTimeout(3500);await p.evaluate(()=>document.fonts.ready);
const data=await p.evaluate(()=>({url:location.href,title:document.title,innerWidth,visualViewport:{width:visualViewport.width,scale:visualViewport.scale},body:document.body.innerText,links:[...document.querySelectorAll('a[href]')].map(a=>({text:a.innerText,href:a.href}))}));
await p.screenshot({path:root+'screenshots/stable-'+view+'-'+id+'.png',fullPage:false});
fs.writeFileSync(root+'sources/stable-'+view+'-'+id+'.json',JSON.stringify({retrieved:new Date().toISOString(),viewport,browser:browser.version(),...data},null,2));console.log(view,id,data.url);
}await c.close();}}finally{await browser.close();}
