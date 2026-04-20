const puppeteer = require('puppeteer');
const path = require('path');

const slides = [
  { dir: 'Mega Charizard X ex SIR Stats', html: 'slide_01_hook.html', out: 'slide_01.png' },
  { dir: 'magikarp', html: 'slide_01_hook.html', out: 'final_slide_01.png' },
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  for (const { dir, html, out } of slides) {
    const slideDir = path.join(__dirname, 'Goka Trades Feed Posts', dir);
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 1 });
    const filePath = path.join(slideDir, html).replace(/\\/g, '/');
    await page.goto('file:///' + filePath, { waitUntil: 'networkidle0', timeout: 20000 });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(slideDir, out), type: 'png' });
    await page.close();
    console.log('Rendered:', dir + '/' + out);
  }
  await browser.close();
})();
