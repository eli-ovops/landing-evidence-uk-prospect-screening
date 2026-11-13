import {chromium} from '/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
const browser=await chromium.launch({channel:'chrome',headless:true});
try {
for(const [view,viewport] of Object.entries({desktop:{width:1440,height:900},mobile:{width:390,height:844}})){
 const context=await browser.newContext({viewport,isMobile:view==='mobile',hasTouch:view==='mobile',acceptDownloads:false,serviceWorkers:'block'});
 const page=await context.newPage();
 await page.goto('https://infosealproof.wixsite.com/sealproof',{waitUntil:'load',timeout:30000});
 for(const [id,label] of [['home',null],['services','SERVICES'],['testimonials','TESTIMONIALS'],['contact','CONTACT']]){
  let navigation='initial URL';
  if(label){try{await page.getByRole('link',{name:label,exact:true}).click({timeout:7000});navigation='clicked visible navigation '+label;}catch(e){navigation='click failed: '+e.message.split('\n')[0];}}
  await page.getByText('SealProof',{exact:true}).first().waitFor({state:'visible',timeout:10000});
  const data=await page.evaluate(()=>({url:location.href,title:document.title,innerWidth,scrollWidth:document.documentElement.scrollWidth,visualViewport:{width:visualViewport.width,scale:visualViewport.scale},text:document.body.innerText,links:[...document.querySelectorAll('a[href]')].map(a=>({text:a.innerText,href:a.href})),viewportMeta:document.querySelector('meta[name=viewport]')?.content}));
  await page.screenshot({path:root+'screenshots/'+view+'-'+id+'.png',fullPage:true});
  fs.writeFileSync(root+'sources/'+view+'-'+id+'.json',JSON.stringify({retrieved:new Date().toISOString(),browser:browser.version(),viewport,navigation,...data},null,2));
  console.log(JSON.stringify({view,id,url:data.url,innerWidth:data.innerWidth,visualViewport:data.visualViewport,navigation}));
 }
 await context.close();
}
}finally{await browser.close();}
