// Re-render every slide in FEED POST/ that has a slide_NN.html → slide_NN.png.
// Runs slide-by-slide so each post gets its bottom-right-less version baked
// into the matching PNG.

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'FEED POST');

// Per-folder config: what HTMLs to render, where to write PNG, at what size.
// Default size 1080x1440 unless overridden (cuan mingguan is 1080x1350).
const JOBS = [
  // Cuan Mingguan 21 April (only the live slide_01 — variants left alone)
  { dir: 'CUAN MINGGUAN/21 April', size: [1080, 1350], renders: [
    { html: 'slide_01.html', out: 'slide_01.png' },
  ]},

  // Pokemon Sets Matrix
  { dir: 'MISC/Pokemon Sets Matrix', size: [1080, 1440], renders: [
    { html: 'slide_01_matrix.html', out: 'slide_01.png' },
    { html: 'slide_02_cta.html',    out: 'slide_02.png' },
  ]},

  // Pokemon Pack Bingo (dark-bg only)
  { dir: 'MISC/Pokemon Pack Bingo', size: [1080, 1440], renders: [
    { html: 'slide_01_bingo.html', out: 'slide_01.png' },
    { html: 'slide_02_cta.html',   out: 'slide_02.png' },
  ]},

  // Pokemon vs Luxury Cars (8 slides)
  { dir: 'MISC/Pokemon vs Luxury Cars', size: [1080, 1440], renders: [
    { html: 'slide_01.html', out: 'slide_01.png' },
    { html: 'slide_02.html', out: 'slide_02.png' },
    { html: 'slide_03.html', out: 'slide_03.png' },
    { html: 'slide_04.html', out: 'slide_04.png' },
    { html: 'slide_05.html', out: 'slide_05.png' },
    { html: 'slide_06.html', out: 'slide_06.png' },
    { html: 'slide_07.html', out: 'slide_07.png' },
    { html: 'slide_08.html', out: 'slide_08.png' },
  ]},

  // Pokemon vs Luxury Watches (6 slides)
  { dir: 'MISC/Pokemon vs Luxury Watches', size: [1080, 1440], renders: [
    { html: 'slide_01.html', out: 'slide_01.png' },
    { html: 'slide_02.html', out: 'slide_02.png' },
    { html: 'slide_03.html', out: 'slide_03.png' },
    { html: 'slide_04.html', out: 'slide_04.png' },
    { html: 'slide_05.html', out: 'slide_05.png' },
    { html: 'slide_06.html', out: 'slide_06.png' },
  ]},
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  for (const job of JOBS) {
    const absDir = path.join(ROOT, job.dir);
    if (!fs.existsSync(absDir)) { console.log('SKIP (no dir):', job.dir); continue; }
    const [w, h] = job.size;
    console.log(`\n=== ${job.dir}  (${w}x${h}) ===`);
    for (const { html, out } of job.renders) {
      const htmlPath = path.join(absDir, html);
      if (!fs.existsSync(htmlPath)) { console.log('  skip (missing):', html); continue; }
      const page = await browser.newPage();
      await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
      const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
      await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 20000 });
      await new Promise(r => setTimeout(r, 600));
      await page.screenshot({ path: path.join(absDir, out), type: 'png' });
      await page.close();
      console.log('  rendered:', out);
    }
  }
  await browser.close();
  console.log('\nAll done.');
})();
