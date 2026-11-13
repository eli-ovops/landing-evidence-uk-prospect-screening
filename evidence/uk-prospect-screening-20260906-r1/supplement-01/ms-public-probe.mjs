import {chromium} from '/Users/USER/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));const b=await chromium.launch({channel:'chrome',headless:true});
try{const p=await b.newPage({viewport:{width:1440,height:900}});await p.goto('https://www.facebook.com/people/MS-Property-Solutions/100063495431353/',{waitUntil:'domcontentloaded',timeout:20000});console.log(await p.getByRole('button').evaluateAll(a=>a.map(x=>({text:x.innerText,label:x.getAttribute('aria-label')}))));}finally{await b.close();}
