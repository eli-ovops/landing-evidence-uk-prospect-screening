import fs from 'node:fs';
import {runtime} from '../../../../tools/demo-workflow/core.mjs';
const out=decodeURIComponent(new URL('.',import.meta.url).pathname);
const b=await runtime().lib.chromium.launch({channel:'chrome',headless:true});
try{for(const [name,viewport] of Object.entries({desktop:{width:1440,height:900},mobile:{width:390,height:844}})){
const c=await b.newContext({viewport,deviceScaleFactor:1,isMobile:name==='mobile',hasTouch:name==='mobile',acceptDownloads:false});
const p=await c.newPage();await p.goto('https://trustedtraders.which.co.uk/businesses/chris-roach-ltd/',{waitUntil:'domcontentloaded',timeout:45000});
const cookie=p.getByRole('button',{name:'Only use essential cookies',exact:true});await cookie.waitFor({state:'visible',timeout:15000});await cookie.click();await cookie.waitFor({state:'hidden'});await p.waitForTimeout(700);
const tel=p.locator('a[href="tel:07889397102"]');await tel.evaluate(el=>window.scrollTo(0,el.getBoundingClientRect().top+window.scrollY-120));await p.screenshot({path:out+name+'-contact-cleared.png'});
await p.locator('a[href="#reviews"]').click();await p.waitForTimeout(400);await p.screenshot({path:out+name+'-review-anchor-cleared.png'});
const result={retrieved:new Date().toISOString(),viewport,reviewAnchorURL:p.url(),reviewHeadingVisible:await p.getByRole('heading',{name:'Customer reviews',exact:true}).isVisible(),contact:'href only; no call or email launched'};
const work=p.getByRole('heading',{name:'My work',exact:true});await work.evaluate(el=>window.scrollTo(0,el.getBoundingClientRect().top+window.scrollY-30));await p.waitForTimeout(300);await p.screenshot({path:out+name+'-gallery-cleared.png'});
fs.writeFileSync(out+name+'-paths.json',JSON.stringify(result,null,2));await c.close();console.log(name,'done');
}}finally{await b.close()}
