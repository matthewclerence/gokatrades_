const puppeteer = require('puppeteer');
const path = require('path');

const dir = path.join(__dirname, 'Goka Trades Feed Posts', 'Mega Charizard X ex SIR Stats');

const slides = [
  { html: 'slide_01_hook.html',     out: 'slide_01.png' },
  { html: 'slide_02_card.html',     out: 'slide_02.png' },
  { html: 'slide_03_price.html',    out: 'slide_03.png' },
  { html: 'slide_04_graded.html',   out: 'slide_04.png' },
  { html: 'slide_05_ebay.html',     out: 'slide_05.png' },
  { html: 'slide_06_analysis.html', out: 'slide_06.png' },
  { html: 'slide_07_cta.html',      out: 'slide_07.png' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  for (const { html, out } of slides) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1440, deviceScaleFactor: 1 });
    const filePath = path.join(dir, html).replace(/\\/g, '/');
    await page.goto('file:///' + filePath, { waitUntil: 'networkidle0', timeout: 20000 });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(dir, out), type: 'png' });
    await page.close();
    console.log('Rendered:', out);
  }

  await browser.close();
  console.log('Done — all 7 slides rendered at 1080x1440.');
})();
