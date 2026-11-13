import {chromium} from '/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../polish-9-20260908');fs.mkdirSync(path.join(root,'qa'),{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});const results=[];
for(const [mode,width,height] of [['desktop',1440,1000],['mobile',390,844]]){
 const page=await browser.newPage({viewport:{width,height}});let errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const slug of ['','services/','testimonials/','about/','contact/']){
  const response=await page.goto('http://127.0.0.1:8769/'+slug);await page.locator('img').evaluateAll(imgs=>{imgs.forEach(i=>i.loading='eager');return Promise.all(imgs.map(i=>i.decode().catch(()=>{})));});
  const data=await page.evaluate(()=>({title:document.title,overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.images].map(i=>({src:i.getAttribute('src'),ok:i.complete&&i.naturalWidth>0})),links:[...document.querySelectorAll('a')].map(a=>a.getAttribute('href')),h1:document.querySelector('h1')?.textContent}));
  const name=slug.replace('/','')||'home';await page.screenshot({path:path.join(root,'qa',`${mode}-${name}.png`),fullPage:true});results.push({mode,page:name,status:response.status(),...data,errors:[...errors]});
 }
 if(mode==='mobile'){await page.locator('.mobile-nav summary').click();await page.screenshot({path:path.join(root,'qa','mobile-menu.png')});await page.locator('.mobile-nav a[href="/services/"]').click();if(!page.url().endsWith('/services/'))throw Error('Mobile menu route');}
 await page.goto('http://127.0.0.1:8769/contact/');await page.locator('#name').fill('Local QA');await page.locator('#email').fill('[REDACTED_EMAIL]');await page.locator('#message').fill('Synthetic local validation only.');await page.locator('button[type=submit]').click();await page.waitForFunction(()=>document.querySelector('#form-result').dataset.state==='error');
 results.push({mode,form:{result:await page.locator('#form-result').innerText(),retained:await page.locator('#message').inputValue(),buttonEnabled:await page.locator('button[type=submit]').isEnabled()}});await page.screenshot({path:path.join(root,'qa',`${mode}-form-not-connected.png`),fullPage:true});await page.close();
}
const page=await browser.newPage();const localLinks=[...new Set(results.flatMap(r=>r.links||[]).filter(a=>a.startsWith('/')&&!a.startsWith('//')))];
const linkChecks=[];for(const href of localLinks){const response=await page.request.get('http://127.0.0.1:8769'+href);linkChecks.push({href,status:response.status()});}
for(const href of ['/services','/sealproof','/sealproof/about','/sealproof/contact','/sealproof/testimonials','/sealproof/services']){const response=await page.request.get('http://127.0.0.1:8769'+href);linkChecks.push({href,status:response.status(),url:response.url()});}
fs.writeFileSync(path.join(root,'qa','results.json'),JSON.stringify({results,linkChecks},null,2));await browser.close();console.log(JSON.stringify({pages:results.filter(r=>r.page).length,overflows:results.filter(r=>r.overflow),brokenImages:results.flatMap(r=>(r.images||[]).filter(i=>!i.ok)),errors:results.flatMap(r=>r.errors||[]),badLinks:linkChecks.filter(r=>r.status!==200),forms:results.filter(r=>r.form)},null,2));
