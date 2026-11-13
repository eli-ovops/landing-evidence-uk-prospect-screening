import {chromium} from '/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';import fs from 'node:fs';import{fileURLToPath}from'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));const b=await chromium.launch({channel:'chrome',headless:true});try{const c=await b.newContext({viewport:{width:1440,height:900},acceptDownloads:false});const p=await c.newPage();
for(const[id,url]of [['reference-londonreseal','https://londonreseal.co.uk/'],['reference-pimlico','https://www.pimlicoplumbers.com/services/plumbing/damp-and-leak-detection/bathroom-leaks/'],['reference-silversaints','https://www.silversaints.com/jobs-we-do/plumbing-work/fix-faulty-showers/'],['customer-yell','https://www.yell.com/biz/sealproof-property-maintenance-london-8878727/'],['customer-logo','https://infosealproof.wixsite.com/sealproof']]){
let status,error;try{status=(await p.goto(url,{waitUntil:'domcontentloaded',timeout:25000})).status();await p.waitForTimeout(3000);}catch(e){error=e.message;}
const data=await p.evaluate(()=>({url:location.href,title:document.title,text:document.body.innerText.slice(0,14000),images:[...document.images].map(i=>({src:i.currentSrc,alt:i.alt})),links:[...document.querySelectorAll('a[href]')].map(a=>({text:a.innerText,href:a.href})).filter(a=>a.text)}));
await p.screenshot({path:root+'evidence/'+id+'.png',fullPage:false});fs.writeFileSync(root+'evidence/'+id+'.json',JSON.stringify({retrieved:new Date().toISOString(),status,error,viewport:{width:1440,height:900},...data},null,2));
if(id==='customer-logo'){await p.screenshot({path:root+'site/assets/brand-original.png',clip:{x:269,y:108,width:620,height:312}});}
console.log(id,status,error?.slice(0,100));}
}finally{await b.close();}
