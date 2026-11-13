const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, 'evidence');
fs.mkdirSync(out, { recursive: true });

const targets = [
  ['UKFRN-001', 'wild-clover-skin-care', 'https://wildcloverskin.book.app/'],
  ['UKFRN-002', 'tranquil-touch-relaxation-therapy', 'https://tranquil-touch-relaxation-therapy.book.app/'],
  ['UKFRN-003', 'seraphine-beauty-and-wellness', 'https://seraphine-beauty-and-wellness.book.app/'],
  ['UKFRN-004', 'lavella-hair-limited', 'https://lavellahairlimited.book.app/'],
];

const viewports = [
  ['desktop', 1440, 900],
  ['mobile', 390, 844],
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const ledger = [];
  for (const [id, slug, url] of targets) {
    for (const [label, width, height] of viewports) {
      const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
      const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.screenshot({ path: path.join(out, `${id}_${slug}_${label}_${width}x${height}.png`) });
      if (label === 'desktop') {
        await page.screenshot({ path: path.join(out, `${id}_${slug}_fullpage.png`), fullPage: true });
      }
      ledger.push({
        id,
        url,
        finalUrl: page.url(),
        label,
        width,
        height,
        status: response ? response.status() : null,
        title: await page.title(),
        links: await page.locator('a').evaluateAll((items) => items.map((a) => ({
          text: (a.innerText || a.getAttribute('aria-label') || '').trim(),
          href: a.href,
        }))),
        bodyText: (await page.locator('body').innerText()).slice(0, 20000),
        capturedAt: new Date().toISOString(),
      });
      await page.close();
    }
  }
  fs.writeFileSync(path.join(out, 'browser_capture_ledger.json'), JSON.stringify(ledger, null, 2));
  await browser.close();
})();
