const {chromium}=require('/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs'),path=require('path');
const out=__dirname;
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true});
for(const [name,viewport] of Object.entries({desktop:{width:1440,height:900},mobile:{width:390,height:844}})){
const context=await browser.newContext({viewport,isMobile:name==='mobile',hasTouch:name==='mobile',acceptDownloads:false});
await context.route('**/*',r=>['GET','HEAD'].includes(r.request().method())?r.continue():r.abort());
const page=await context.newPage();
async function capture(label,url){let status=null,error=null;try{status=(await page.goto(url,{waitUntil:'domcontentloaded',timeout:25000})).status();await page.waitForTimeout(1200)}catch(e){error=e.message}
const data={retrieved:new Date().toISOString(),requested:url,url:page.url(),viewport,status,error,browser:browser.version(),...await page.evaluate(()=>({title:document.title,body:document.body.innerText,links:[...document.querySelectorAll('a[href]')].map(a=>({text:a.innerText,url:a.href})),forms:[...document.forms].map(f=>({action:f.action,fields:[...f.elements].map(e=>({tag:e.tagName,type:e.type,name:e.name}))})),scrollWidth:document.documentElement.scrollWidth,images:[...document.images].map(i=>({src:i.currentSrc,width:i.naturalWidth,height:i.naturalHeight}))}))};
fs.writeFileSync(path.join(out,`${label}-${name}.json`),JSON.stringify(data,null,2));await page.screenshot({path:path.join(out,`${label}-${name}.png`),fullPage:true});console.log(label,name,status,data.url);return data;}
const home=await capture('home','https://www.antiques-atlas.com/bridgendantiques/');
const item=home.links.find(l=>l.url.includes('browse.php?code='));if(item)await capture('item',item.url);
await capture('contact','https://www.antiques-atlas.com/bridgendantiques/contact.php');
if(name==='desktop'){await capture('shop','https://www.antiques-atlas.com/antique_shop/bridgend_antiques/as1077');await capture('video','https://www.youtube.com/shorts/iet95Lq8_NQ');}
await context.close();}
await browser.close();})();
