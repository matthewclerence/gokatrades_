const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
  });

  const slideDir = path.resolve(__dirname, 'Goka Trades Feed Posts', '4 - 13 - 26');
  const slides = [
    { html: 'slide_01_hook.html',     out: 'final_slide_01.png' },
    { html: 'slide_02_card.html',     out: 'final_slide_02.png' },
    { html: 'slide_03_price.html',    out: 'final_slide_03.png' },
    { html: 'slide_04_graded.html',   out: 'final_slide_04.png' },
    { html: 'slide_05_ebay.html',     out: 'final_slide_05.png' },
    { html: 'slide_06_analysis.html', out: 'final_slide_06.png' },
    { html: 'slide_07_cta.html',      out: 'final_slide_07.png' },
  ];

  for (const slide of slides) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });

    const filePath = path.join(slideDir, slide.html);
    const { pathToFileURL } = require('url');
    const fileUrl = pathToFileURL(filePath).href;

    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 15000 });
    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready);
    await new Promise(r => setTimeout(r, 1000));

    const outPath = path.join(slideDir, slide.out);
    await page.screenshot({ path: outPath, type: 'png' });
    console.log(`Captured: ${slide.out}`);
    await page.close();
  }

  await browser.close();
  console.log('All slides captured.');
})();
