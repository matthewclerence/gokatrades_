const puppeteer = require('puppeteer');
const path = require('path');

const slides = [
  { html: 'slide_01_hook.html',     out: 'final_slide_01.png' },
  { html: 'slide_02_card.html',     out: 'final_slide_02.png' },
  { html: 'slide_03_price.html',    out: 'final_slide_03.png' },
  { html: 'slide_04_graded.html',   out: 'final_slide_04.png' },
  { html: 'slide_05_ebay.html',     out: 'final_slide_05.png' },
  { html: 'slide_06_analysis.html', out: 'final_slide_06.png' },
  { html: 'slide_07_cta.html',      out: 'final_slide_07.png' },
];

const slideDir = path.join(__dirname, 'Goka Trades Feed Posts', 'magikarp');

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  for (const { html, out } of slides) {
    const filePath = path.join(slideDir, html);
    const outPath  = path.join(slideDir, out);

    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1440, deviceScaleFactor: 1 });
    await page.goto('file:///' + filePath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 20000 });
    await new Promise(r => setTimeout(r, 600)); // let web fonts settle
    await page.screenshot({ path: outPath, type: 'png' });
    await page.close();
    console.log('Rendered:', out);
  }

  await browser.close();
  console.log('Done — all 7 slides rendered.');
})();
