const puppeteer = require('puppeteer');
const path = require('path');

const dir = path.join(__dirname, 'FEED POST', 'Pokemon Sets Matrix');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1440, deviceScaleFactor: 1 });
  const filePath = path.join(dir, 'slide_01_matrix.html').replace(/\\/g, '/');
  await page.goto('file:///' + filePath, { waitUntil: 'networkidle0', timeout: 20000 });
  await new Promise(r => setTimeout(r, 700));
  await page.screenshot({ path: path.join(dir, 'slide_01.png'), type: 'png' });
  await page.close();
  await browser.close();
  console.log('Rendered: slide_01.png');
})();
