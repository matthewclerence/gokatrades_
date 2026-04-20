// Export the Pokemon Pack Bingo slide for Instagram.
//
//   node "Goka Trades Feed Posts/Pokemon Pack Bingo/export.mjs"
//
// Output: slide_01.png — 1080x1440 PNG

import puppeteer from "puppeteer";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function startServer(root) {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const url = decodeURIComponent(req.url.split("?")[0]);
      const filePath = path.join(root, url === "/" ? "/index.html" : url);
      if (!filePath.startsWith(root)) { res.statusCode = 403; return res.end(); }
      try {
        const data = await readFile(filePath);
        res.setHeader("Content-Type", MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream");
        res.end(data);
      } catch {
        res.statusCode = 404;
        res.end("not found");
      }
    });
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      resolve({ server, base: `http://127.0.0.1:${port}` });
    });
  });
}

async function renderSlide(browser, base, htmlName, outName) {
  console.log(`→ ${outName}`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1440, deviceScaleFactor: 1 });
  await page.goto(`${base}/${htmlName}`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(__dirname, outName), omitBackground: false });
  await page.close();
}

(async () => {
  const { server, base } = await startServer(__dirname);
  const browser = await puppeteer.launch({ headless: "new" });
  try {
    await renderSlide(browser, base, "slide_01_bingo.html", "slide_01.png");
    await renderSlide(browser, base, "slide_01_bingo_black.html", "slide_01_black.png");
    await renderSlide(browser, base, "slide_02_cta.html", "slide_02.png");
    await renderSlide(browser, base, "slide_02_cta_black.html", "slide_02_black.png");
  } finally {
    await browser.close();
    server.close();
  }
  console.log("Done.");
})();
