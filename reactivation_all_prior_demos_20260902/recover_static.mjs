import { mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const targets = [
  ['al-safy-handyman', 'https://alsafyhandyman.netlify.app/'],
  ['ama-concrete', 'https://amaconcreting.netlify.app/'],
  ['pro-landscaping', 'https://prolandscapingservices.netlify.app/'],
  ['australian-landscape-hub', 'https://australianlandscapehub.netlify.app/'],
  ['shanti-cafe', 'https://shanticafee.netlify.app/'],
];

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
const refs = (text) => [...text.matchAll(/(?:src|href)\s*=\s*["']([^"']+)["']|url\(\s*["']?([^'"\s)]+)["']?\s*\)/gi)].map(m => m[1] || m[2]);
const safePath = (url) => {
  let p = decodeURIComponent(url.pathname);
  if (p === '/' || p.endsWith('/')) p += 'index.html';
  p = p.replace(/^\/+/, '');
  if (p.split('/').some(s => !s || s === '.' || s === '..')) throw new Error(`unsafe path ${p}`);
  return p;
};

for (const [slug, homepage] of targets) {
  const origin = new URL(homepage).origin;
  const destination = path.join(root, 'recovered_static', slug);
  await mkdir(destination, { recursive: true });
  const resources = [];
  const queued = [homepage];
  const seen = new Set();
  while (queued.length) {
    const raw = queued.shift();
    const u = new URL(raw, homepage); u.hash = '';
    if (seen.has(u.href)) continue;
    seen.add(u.href);
    const sameOrigin = u.origin === origin;
    if (!sameOrigin) { resources.push({ url: u.href, same_origin: false, disposition: 'recorded-not-downloaded' }); continue; }
    let response;
    try { response = await fetch(u, { redirect: 'follow' }); } catch (error) { resources.push({ url: u.href, same_origin: true, error: String(error) }); continue; }
    const body = Buffer.from(await response.arrayBuffer());
    const localPath = safePath(u);
    await mkdir(path.dirname(path.join(destination, localPath)), { recursive: true });
    await writeFile(path.join(destination, localPath), body);
    const contentType = response.headers.get('content-type') || '';
    resources.push({ url: u.href, same_origin: true, status: response.status, content_type: contentType, local_path: localPath, bytes: body.length, sha256: sha256(body), retrieved_at_utc: new Date().toISOString() });
    if (/text\/(html|css)|javascript/i.test(contentType)) {
      for (const ref of refs(body.toString('utf8'))) {
        if (/^(data:|mailto:|tel:|javascript:|#)/i.test(ref)) continue;
        try {
          const candidate = new URL(ref, u);
          // Preserve only the homepage document and conventional static assets;
          // navigation targets are not part of a single-page runtime recovery.
          if (candidate.origin !== origin || /\.(?:css|js|mjs|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|otf|mp4|webm)$/i.test(candidate.pathname)) queued.push(candidate.href);
        } catch { /* invalid reference is recorded by browser QA */ }
      }
    }
  }
  await writeFile(path.join(destination, 'RECOVERY_MANIFEST.json'), JSON.stringify({ retrieved_at_utc: new Date().toISOString(), homepage, origin, recovery_scope: 'current deployed HTML and referenced same-origin static responses only; cross-origin URLs recorded but not downloaded', resources }, null, 2) + '\n');
}
