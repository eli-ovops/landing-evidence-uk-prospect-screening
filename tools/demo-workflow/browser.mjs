import fs from 'node:fs';
import path from 'node:path';
import { runtime, defect } from './core.mjs';

export const VIEWPORTS={desktop:{width:1440,height:900},mobile:{width:390,height:844}};
const ORIGIN='http://demo.local';
const mime={'.html':'text/html','.css':'text/css','.js':'text/javascript','.mjs':'text/javascript','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.avif':'image/avif','.woff2':'font/woff2','.woff':'font/woff'};
export async function inspect(fp, out, {screenshots=true}={}) {
  const rt=runtime(), browser=await rt.lib.chromium.launch({channel:process.env.DEMO_BROWSER_CHANNEL||'chrome',headless:true,args:['--disable-background-networking','--force-webrtc-ip-handling-policy=disable_non_proxied_udp']});
  // Render exactly the bytes whose hashes are in inputs.json, never reread mutable customer files.
  const contents=fp.snapshot;
  const all=[], views={}, blocked=[];
  try {
    for(const [name,viewport] of Object.entries(VIEWPORTS)) {
      const context=await browser.newContext({viewport,isMobile:name==='mobile',hasTouch:name==='mobile',deviceScaleFactor:1,serviceWorkers:'block',acceptDownloads:false});
      await context.route('**/*', async route=> {
        const req=route.request(), u=new URL(req.url());
        if(u.origin!==ORIGIN||req.method()!=='GET'||['fetch','xhr','ping'].includes(req.resourceType())) {
          // A registered remote iframe/style/image cannot be rendered from an immutable
          // offline snapshot. Preserve that limitation separately; automatic writes or
          // top-frame navigation remain an UNKNOWN safety finding.
          const subframe=req.isNavigationRequest()&&req.frame()!==page.mainFrame();
          const passiveRemote=u.origin!==ORIGIN&&req.method()==='GET'&&
            (['image','stylesheet','font','media'].includes(req.resourceType())||subframe);
          blocked.push({viewport:name,url:req.url(),type:req.resourceType(),method:req.method(),limitation:passiveRemote});return route.abort();
        }
        let key;try{key=decodeURIComponent(u.pathname)}catch{return route.abort()}
        const bytes=contents.get(key);
        if(!bytes) {all.push({...defect('LOCAL_RESOURCE_MISSING_OR_UNSUPPORTED',key,'Local dependency missing or outside supported static types/active root; do not broaden reads'),viewport:name});return route.fulfill({status:404,body:'Not found'});}
        return route.fulfill({status:200,contentType:mime[path.extname(key)]||'application/octet-stream',body:bytes});
      });
      await context.routeWebSocket('**/*', ws=>ws.close());
      await context.addInitScript(()=> {
        document.addEventListener('submit',e=>{e.preventDefault();e.stopImmediatePropagation()},true);
        window.open=()=>null;
      });
      const page=await context.newPage(); page.setDefaultTimeout(4000);
      page.on('dialog', d=>d.dismiss());
      const errors=[];page.on('pageerror',e=>errors.push(e.message));
      try {
        await page.goto(ORIGIN+'/'+fp.c.entry,{waitUntil:'load',timeout:15000});
        await page.evaluate(async()=>{await Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,2000))]);});
        // A bounded normal scroll activates lazy images and scroll-triggered content.
        await page.evaluate(async()=>{for(let y=0,n=0;y<document.documentElement.scrollHeight&&n<100;y+=innerHeight*.75,n++){scrollTo({top:y,behavior:'instant'});await new Promise(r=>setTimeout(r,20))}scrollTo({top:0,behavior:'instant'})});
        await page.waitForTimeout(180);
        const audit=await page.evaluate(async ({items,assets,hero,origin,viewport})=>{
          const issues=[], mapping=[], images=[], links=[], discovered=[];
          const cssPath=e=>{if(e.id)return '#'+CSS.escape(e.id);let a=[];while(e&&e!==document.documentElement){let part=e.tagName.toLowerCase();const sib=[...e.parentElement.children].filter(x=>x.tagName===e.tagName);part+=':nth-of-type('+(sib.indexOf(e)+1)+')';a.unshift(part);e=e.parentElement}return 'html > '+a.join(' > ')};
          const issue=(code,target,detail,level='FAIL',findingClass)=>issues.push({code,target,detail,level,findingClass});
          const visible=async e=>{
            if(!e)return {visible:false,reason:'missing'};
            e.scrollIntoView({block:'center',inline:'nearest',behavior:'instant'});
            await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
            const r=e.getBoundingClientRect(); let x=e;
            while(x){const s=getComputedStyle(x);if(s.display==='none'||s.visibility==='hidden'||Number(s.opacity)<.05||s.contentVisibility==='hidden')return {visible:false,reason:'hidden ancestor'};x=x.parentElement;}
            if(r.width<2||r.height<2)return {visible:false,reason:'zero/tiny size'};
            const left=Math.max(0,r.left),right=Math.min(viewport.width,r.right),top=Math.max(0,r.top),bottom=Math.min(viewport.height,r.bottom);
            if(right-left<2||bottom-top<2)return {visible:false,reason:'outside viewport after scroll'};
            let seen=0;
            const opaque=e=>{const c=getComputedStyle(e).backgroundColor.match(/rgba?\(([^)]+)\)/);return c&&Number((c[1].split(',')[3]??'1').trim())>=.95;};
            for(const fx of [.2,.5,.8])for(const fy of [.2,.5,.8]){const stack=document.elementsFromPoint(left+(right-left)*fx,top+(bottom-top)*fy);const hit=stack[0];const parent=e.parentElement;const localOverlay=e.matches('img')&&parent&&parent.contains(hit)&&hit!==parent&&!e.contains(hit);if(hit&&(hit===e||e.contains(hit)||(e.matches('img')&&parent?.contains(hit)&&(!localOverlay||!opaque(hit)))))seen++;}
            return {visible:seen>0,reason:seen?'paint/hit-test sample':'occluded/clipped',rect:{x:r.x,y:r.y,width:r.width,height:r.height},samples:seen,objectFit:getComputedStyle(e).objectFit,focus:getComputedStyle(e).objectPosition};
          };
          const urls=e=>{const result=[];if(e.matches('img'))result.push(e.currentSrc||e.src);for(const pseudo of [null,'::before','::after']){const s=getComputedStyle(e,pseudo);if(s.display==='none'||s.visibility==='hidden'||Number(s.opacity)<.05||(pseudo&&['none','normal'].includes(s.content)))continue;for(const match of s.backgroundImage.matchAll(/url\(["']?(.*?)["']?\)/g))result.push(match[1]);}return [...new Set(result)].filter(Boolean)};
          const decode=async url=>{try{const im=new Image();im.src=url;await Promise.race([im.decode(),new Promise((_,rej)=>setTimeout(()=>rej(Error('timeout')),2500))]);return {decoded:true,width:im.naturalWidth,height:im.naturalHeight}}catch{return {decoded:false}}};
          const norm=s=>(s||'').replace(/\s+/g,' ').trim();
          const cache=new Map();
          for(const el of document.querySelectorAll('body *')){
            const srcs=urls(el);if(!srcs.length)continue;
            const selector=cssPath(el);const v=await visible(el);
            if(!el.matches('img'))issue('BACKGROUND_PAINT_REVIEW',selector,'Background/pseudo decoded; paint occlusion, layering and crop require independent visual review','UNKNOWN');
            for(const url of srcs){if(!cache.has(url))cache.set(url,await decode(url));const decoded=cache.get(url);images.push({selector,url,visibility:v,...decoded});if(!decoded.decoded)issue(url.startsWith(origin)?'BROKEN_IMAGE':'REMOTE_IMAGE_UNVERIFIED',selector,url,url.startsWith(origin)?'FAIL':'UNKNOWN');}
            discovered.push({kind:'image',selector,urls:srcs,section:el.closest('section,header,footer')?.id||el.closest('section,header,footer')?.className||'body',focus:getComputedStyle(el).objectPosition});
          }
          for(const el of document.querySelectorAll('a')) {
            const href=el.getAttribute('href'),selector=cssPath(el);links.push({selector,href,text:norm(el.innerText)});
            if(href===null||!href.trim()||href.trim()==='#'||/^javascript:/i.test(href))issue('EMPTY_OR_UNSAFE_LINK',selector,'empty/#/javascript href');
            else if(href.startsWith('#')){let target;try{target=document.getElementById(decodeURIComponent(href.slice(1)))}catch{}if(!target)issue('BROKEN_ANCHOR',selector,href);}
            else {try{const u=new URL(href,location.href);if(u.origin===origin)discovered.push({kind:'local-link',selector,path:decodeURIComponent(u.pathname),hash:u.hash});}catch{issue('INVALID_LINK',selector,href)}}
            if(href&&!href.startsWith('#'))discovered.push({kind:'path',selector,href,text:norm(el.innerText),section:el.closest('section,header,footer')?.id||'contact'});
          }
          for(const el of document.querySelectorAll('h1,h2,h3,address'))discovered.push({kind:'fact',selector:cssPath(el),text:norm(el.innerText),section:el.closest('section,header,footer')?.id||'content'});
          for(const item of items||[]){
            if(item.applicability!=='YES'||item.disposition==='EXCLUDE')continue;
            let nodes=[];try{nodes=[...document.querySelectorAll(item.selector)]}catch{issue('INVALID_SELECTOR',item.id,item.selector);continue}
            let match=null;const attempts=[];
            for(const e of nodes){
              const v=await visible(e);const row={selector:item.selector,...v,actualText:norm(e.innerText),actualHref:e.getAttribute('href'),actualUrls:urls(e)}; attempts.push(row);if(!v.visible)continue;
              if(item.text&&!norm(e.innerText).toLowerCase().replace(/\s+/g,'').includes(norm(item.text).toLowerCase().replace(/\s+/g,'')))continue;
              if(item.href&&e.getAttribute('href')!==item.href)continue;
              if(item.assetId){const a=assets.find(a=>a.id===item.assetId);if(!a)continue;const expected=new URL(a.path,origin+'/').href;const actual=urls(e);if(!actual.includes(expected))continue;if(!cache.has(expected))cache.set(expected,await decode(expected));if(!cache.get(expected).decoded)continue;}
              match=row;break;
            }
            mapping.push({id:item.id,pass:!!match,attempts,match});
            if(!match){const confirmed=item.mappingStatus==='OWNER_CONFIRMED';issue(nodes.length?'MAPPED_CONTENT_NOT_VISIBLE_OR_MISMATCH':'MAPPING_MISSING',item.id,'Expected '+JSON.stringify({selector:item.selector,text:item.text,href:item.href,assetId:item.assetId}),confirmed?'FAIL':'UNKNOWN',confirmed?'PAGE_RENDER_DEFECT':'CONTRACT_RECONCILIATION_BLOCKED');}
          }
          scrollTo({top:0,behavior:'instant'});await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
          const width=document.documentElement.scrollWidth;
          if(width>viewport.width+2)issue('HORIZONTAL_OVERFLOW','document',`${width} > required viewport ${viewport.width}`);
          const configured=s=>typeof s==='string'&&s.trim()&&!/^(UNKNOWN|NOT VERIFIED|TBD)$/i.test(s.trim());
          const firstScreen=e=>{if(!e)return false;let x=e;while(x){const s=getComputedStyle(x);if(s.display==='none'||s.visibility==='hidden'||Number(s.opacity)<.05)return false;x=x.parentElement;}const r=e.getBoundingClientRect();return r.width>=2&&r.height>=2&&r.bottom>0&&r.top<innerHeight&&r.right>0&&r.left<innerWidth;};
          if(configured(hero?.selector)&&configured(hero?.ctaSelector)){try{const heroes=[...document.querySelectorAll(hero.selector)],ctas=[...document.querySelectorAll(hero.ctaSelector)],e=heroes.find(firstScreen)||heroes[0],cta=ctas.find(firstScreen)||ctas[0];const r=e?.getBoundingClientRect(),cr=cta?.getBoundingClientRect();if(!r)issue('HERO_MISSING',hero.selector,'missing','UNKNOWN','CONTRACT_RECONCILIATION_BLOCKED');else if(r.height>innerHeight*2.2)issue('HERO_UNBOUNDED',hero.selector,`${r.height}px; inspect constraints`);if(!cr||cr.top<0||cr.bottom>innerHeight||cr.left<0||cr.right>innerWidth)issue('HERO_CTA_BELOW_FOLD_OR_OUTSIDE',hero.ctaSelector,'Core CTA not within first screen');if(!firstScreen(cta))issue('HERO_CTA_NOT_VISIBLE',hero.ctaSelector,'CTA hidden/clipped/occluded');scrollTo({top:0,behavior:'instant'})}catch{issue('HERO_SELECTOR_INVALID','hero','invalid selector','UNKNOWN','CONTRACT_RECONCILIATION_BLOCKED')}}
          // Scan text nodes and accessibility/metadata separately; script/comment code is not body copy.
          const ban=/\b(TODO|TBD|lorem ipsum|placeholder|mock content|AI.generated|generated with AI|AI image|stock image|rights status|source URL|internal review|PMO|draft only|not authorized to send|CUSTOMER AUTHORIZATION|reserved for final delivery|shown in demo)\b|待确认|以后再补|素材授权|内部治理/ig;
          const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
          while(node=walker.nextNode()){if(node.parentElement.closest('script,style'))continue;const hits=node.textContent.match(ban);if(hits)issue('INTERNAL_OR_PLACEHOLDER_TEXT',cssPath(node.parentElement),[...new Set(hits)].join(', '));}
          for(const e of document.querySelectorAll('[alt],[title],[aria-label],meta[name="description"],script[type="application/ld+json"]')){const text=[e.getAttribute('alt'),e.getAttribute('title'),e.getAttribute('aria-label'),e.getAttribute('content'),e.matches('script')?e.textContent:''].join(' ');const hits=text.match(ban);if(hits)issue('INTERNAL_METADATA',cssPath(e),[...new Set(hits)].join(', '));}
          for(const e of document.querySelectorAll('form,input,textarea,button[type="submit"]'))issue('FORM_OR_DATA_ENTRY',cssPath(e),'Static boundary: replace data collection / fake submission with registered real external path');
          for(const e of document.querySelectorAll('iframe'))issue('EMBED_UNVERIFIED',cssPath(e),'Remote iframe blocked; inspect registered src and independent rendering','UNKNOWN','EXTERNAL/INDEPENDENT_REVIEW_UNKNOWN');
          return {issues,mapping,images,links,discovered,width,height:document.documentElement.scrollHeight};
        },{items:(fp.c.items||[]).map(i=>({...i,selector:i.selectors?.[name]||i.selector})),assets:fp.c.assets||[],hero:fp.c.hero,origin:ORIGIN,viewport});
        views[name]=audit;
        for(const l of audit.discovered.filter(x=>x.kind==='local-link'))if(!contents.has(l.path))all.push({...defect('LOCAL_LINK_MISSING_OR_UNSUPPORTED',l.selector,l.path),viewport:name});
        all.push(...audit.issues.map(i=>({...defect(i.code,i.target,i.detail,i.level),viewport:name,findingClass:i.findingClass})));
        if(errors.length)all.push(defect('PAGE_SCRIPT_ERROR',name,errors.join('; ')));
        if(screenshots){
          await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
          if(audit.height>25000)all.push(defect('PAGE_TOO_TALL',name,'Full screenshot capped at 25000px; inspect runaway layout'));
          if(audit.height<=25000)await page.screenshot({path:path.join(out,name+'-full.png'),fullPage:true,animations:'disabled'});
          await page.screenshot({path:path.join(out,name+'-top.png'),animations:'disabled'});
          for(const [idx,selector] of (fp.c.sections||[]).entries()){try{const loc=page.locator(selector).first();await loc.scrollIntoViewIfNeeded();await loc.screenshot({path:path.join(out,`${name}-section-${idx}.png`),animations:'disabled',timeout:4000});}catch{all.push(defect('SECTION_SCREENSHOT_UNAVAILABLE',selector,'Need independent evidence for this section','UNKNOWN'));}}
        }
      } catch(e) {all.push(defect('BROWSER_CHECK_BLOCKED',name,e.message,'UNKNOWN'));}
      finally{await context.close();}
    }
    for(const b of blocked) all.push({...defect(b.limitation?'REMOTE_RESOURCE_LIMITATION':'NETWORK_BLOCKED',b.viewport,`${b.type} ${b.method} ${b.url}; destination behavior not verified`,b.limitation?'LIMITATION':'UNKNOWN'),findingClass:'EXTERNAL/INDEPENDENT_REVIEW_UNKNOWN'});
    return {defects:all,views,blocked,runtime:{node:process.version,playwright:rt.version,browser:browser.version(),platform:process.platform,network:'OFFLINE_SNAPSHOT; external requests, fetch/xhr/ping, forms and WebSockets blocked'}};
  } finally {await browser.close();}
}
