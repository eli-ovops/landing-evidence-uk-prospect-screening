import fs from 'node:fs';
import {runtime} from '../../../../tools/demo-workflow/core.mjs';
const out=decodeURIComponent(new URL('.',import.meta.url).pathname);
const rt=runtime();
const browser=await rt.lib.chromium.launch({channel:'chrome',headless:true});
try {
 for (const [name,viewport] of Object.entries({desktop:{width:1440,height:900},mobile:{width:390,height:844}})) {
  const context=await browser.newContext({viewport,deviceScaleFactor:1,isMobile:name==='mobile',hasTouch:name==='mobile',acceptDownloads:false,serviceWorkers:'block'});
  await context.addInitScript(()=>document.addEventListener('submit',e=>{e.preventDefault();e.stopImmediatePropagation()},true));
  const p=await context.newPage();
  const response=await p.goto('https://trustedtraders.which.co.uk/businesses/chris-roach-ltd/',{waitUntil:'domcontentloaded',timeout:45000});
  await p.waitForTimeout(1500);
  const cookie=p.getByRole('button',{name:'Only use essential cookies',exact:true});
  if(await cookie.count())await cookie.click();
  await p.waitForTimeout(500);
  const state=await p.evaluate(()=>({url:location.href,title:document.title,text:document.body.innerText,links:[...document.querySelectorAll('a')].map(a=>({text:a.innerText,href:a.getAttribute('href')})),headings:[...document.querySelectorAll('h1,h2,h3')].map(a=>({text:a.innerText,y:a.getBoundingClientRect().top+scrollY})),images:[...document.images].filter(i=>i.currentSrc.includes('uploads/image')).map(i=>({alt:i.alt,width:i.naturalWidth,height:i.naturalHeight,loaded:i.complete&&i.naturalWidth>0})),width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
  state.retrieved=new Date().toISOString();state.viewport=viewport;state.status=response.status();state.browser=browser.version();state.playwright=rt.version;
  fs.writeFileSync(out+name+'-state.json',JSON.stringify(state,null,2));
  await p.screenshot({path:out+name+'-top.png'});
  for(const [key,heading] of [['about','About'],['services','What we do'],['work','My work'],['reviews','Customer reviews']]){
   const loc=p.getByRole('heading',{name:heading,exact:true}).first();
   if(await loc.count()){await loc.scrollIntoViewIfNeeded();await p.screenshot({path:out+name+'-'+key+'.png'});}
  }
  console.log(name,response.status(),state.headings);
  await context.close();
 }
}finally{await browser.close()}
