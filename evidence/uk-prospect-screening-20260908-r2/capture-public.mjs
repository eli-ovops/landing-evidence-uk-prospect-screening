import { chromium } from '/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const allowed=fs.realpathSync('/Volumes/EXTERNAL/海外落地页/evidence/uk-prospect-screening-20260908-r2');
if(fs.realpathSync(root)!==allowed)throw new Error('WRONG ROOT');
const dest=path.resolve(root,'browser-evidence');
const relative=path.relative(allowed,dest);
if(relative==='..'||relative.startsWith('..'+path.sep)||path.isAbsolute(relative))throw new Error('OUTPUT OUTSIDE AUTHORIZED ROOT');
fs.mkdirSync(dest,{recursive:true});
const targets=JSON.parse(process.argv[2]);
if(targets.some(t=>!/^[a-z0-9-]+$/.test(t.id)))throw new Error('INVALID ID');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--disable-background-networking']});
try {for(const target of targets){
 for(const [view,viewport] of Object.entries({desktop:{width:1440,height:900},mobile:{width:390,height:844}})){
  const context=await browser.newContext({viewport,deviceScaleFactor:1,isMobile:view==='mobile',hasTouch:view==='mobile',acceptDownloads:false,serviceWorkers:'block'});
  const page=await context.newPage();page.setDefaultTimeout(8000);
  let status=null,error=null;
  try{status=(await page.goto(target.url,{waitUntil:'load',timeout:20000}))?.status();}catch(e){error=e.message;}
  let cookieAction='none';
  if(target.cookieButton){try{await page.getByRole('button',{name:target.cookieButton,exact:true}).click({timeout:6000});await page.getByRole('button',{name:target.cookieButton,exact:true}).waitFor({state:'hidden',timeout:8000});cookieAction='clicked and hidden '+target.cookieButton;}catch(e){cookieAction=e.message.split('\n')[0];}}
  if(target.directory){try{await page.getByText('Reject all',{exact:true}).click({timeout:4500});cookieAction='Reject all clicked';}catch(e){cookieAction='Reject button not visible: '+e.message.split('\n')[0];}}
  const title=await page.title();
  const data=await page.evaluate(()=>({url:location.href,title:document.title,width:innerWidth,height:innerHeight,reviewDates:[...(document.body?.innerText||'').matchAll(/Reviewed on ([0-9]{2}\/[0-9]{2}\/[0-9]{4})/g)].map(m=>m[1]),body:document.body?.innerText?.slice(0,18000),links:[...document.querySelectorAll('a[href]')].map(a=>({text:a.innerText,url:a.href})).filter(a=>a.text),images:[...document.images].map(i=>({alt:i.alt,url:i.currentSrc,loaded:i.complete&&i.naturalWidth>0}))}));
  // Preserve only the business overview for third-party review directories.
  if(target.directory&&data.body)data.body=data.body.split('Customer reviews for this trader')[0];
  const stem=target.id+'-'+view;
if(fs.existsSync(path.join(dest,stem+'.json')))throw new Error('NO OVERWRITE');
  await page.screenshot({path:path.join(dest,stem+'.png'),fullPage:false});
  if(target.sections){for(const [i,label] of target.sections.entries()){try{await page.getByRole('heading',{name:label,exact:true}).scrollIntoViewIfNeeded();await page.screenshot({path:path.join(dest,stem+'-section-'+i+'.png'),fullPage:false});}catch(e){data['sectionError'+i]=e.message.split('\n')[0];}}}
  if(target.scrollPositions){for(const [i,y] of target.scrollPositions.entries()){await page.evaluate(y=>scrollTo(0,y),y);await page.screenshot({path:path.join(dest,stem+'-scroll-'+i+'.png'),fullPage:false});}}
  fs.writeFileSync(path.join(dest,stem+'.json'),JSON.stringify({retrieved:new Date().toISOString(),requested:target.url,viewport,status,error,cookieAction,browser:browser.version(),...data},null,2));
  console.log(JSON.stringify({id:target.id,view,status,error,title,url:data.url,width:data.width,height:data.height}));
  await context.close();
 }
}}finally{await browser.close();}
