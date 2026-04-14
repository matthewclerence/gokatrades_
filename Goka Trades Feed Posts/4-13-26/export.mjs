import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SLIDE_W = 1080;
const SLIDE_H = 1350;

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [`--window-size=${SLIDE_W},${SLIDE_H}`],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: SLIDE_W, height: SLIDE_H, deviceScaleFactor: 1 });

  const htmlPath = path.join(__dirname, 'slides.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 1500));

  // Get all slide elements
  const slides = await page.$$('.slide');
  console.log(`Found ${slides.length} slides`);

  for (let i = 0; i < slides.length; i++) {
    const slideNum = String(i + 1).padStart(2, '0');
    const outPath = path.join(__dirname, `slide_${slideNum}.png`);

    // Scroll slide into view and screenshot at exact dimensions
    await slides[i].screenshot({
      path: outPath,
      type: 'png',
      clip: undefined, // use element bounding box
    });

    console.log(`Exported slide_${slideNum}.png (${SLIDE_W}x${SLIDE_H})`);
  }

  await browser.close();
  console.log('Done — all slides exported.');
})();
