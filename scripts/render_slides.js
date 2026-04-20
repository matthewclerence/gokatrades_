const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const outDir = path.join(__dirname, 'Goka Trades Feed Posts', 'Ascended Heroes Stats');

  for (let i = 1; i <= 6; i++) {
    const num = String(i).padStart(2, '0');
    const filePath = path.join(__dirname, 'slides', `slide_${num}.html`);
    const outPath = path.join(outDir, `slide_${num}.png`);

    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
    await page.goto('file:///' + filePath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 15000 });
    await page.screenshot({ path: outPath, type: 'png' });
    await page.close();
    console.log(`Rendered slide_${num}.png`);
  }

  await browser.close();
  console.log('All slides rendered.');
})();
