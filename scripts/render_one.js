const puppeteer = require('puppeteer');
const path = require('path');

const [,, htmlPath, outPath] = process.argv;

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const abs = path.resolve(htmlPath);
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1440, deviceScaleFactor: 1 });
  await page.goto('file:///' + abs.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 20000 });
  await page.screenshot({ path: path.resolve(outPath), type: 'png' });
  await page.close();
  await browser.close();
  console.log('Rendered', outPath);
})();
