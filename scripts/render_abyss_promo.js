const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const outDir = path.join(__dirname, 'Goka Trades Feed Posts', 'Abyss Eye Video Promo');
  const filePath = path.join(__dirname, 'slides_abyss_promo', 'slide_01.html');
  const outPath = path.join(outDir, 'slide_01.png');

  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1440, deviceScaleFactor: 1 });
  await page.goto('file:///' + filePath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 20000 });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: outPath, type: 'png' });
  await page.close();
  console.log(`Rendered ${outPath}`);

  await browser.close();
})();
