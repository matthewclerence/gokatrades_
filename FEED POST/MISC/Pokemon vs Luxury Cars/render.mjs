// Render the Pokemon vs Luxury Cars slides (one HTML per slide) to PNG.
//   node "Goka Trades Feed Posts/Pokemon vs Luxury Cars/render.mjs" [slide_02.html slide_07.html ...]
// If no args are given, renders every slide_*.html in this folder.

import puppeteer from "puppeteer";
import { createServer } from "node:http";
import { readFile, readdir } from "node:fs/promises";
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
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function startServer(root) {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const url = decodeURIComponent(req.url.split("?")[0]);
      const filePath = path.join(root, url === "/" ? "/index.html" : url);
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

async function renderSlide(browser, base, slideHtml) {
  const outName = slideHtml.replace(/\.html$/, ".png");
  console.log(`→ ${slideHtml}`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1440, deviceScaleFactor: 1 });
  // Static server is one level up so individual slide html files load relative ../../images correctly.
  await page.goto(`${base}/${encodeURIComponent("Goka Trades Feed Posts")}/${encodeURIComponent("Pokemon vs Luxury Cars")}/${encodeURIComponent(slideHtml)}`, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  await new Promise((r) => setTimeout(r, 500));
  const outPath = path.join(__dirname, outName);
  await page.screenshot({ path: outPath, type: "png", clip: { x: 0, y: 0, width: 1080, height: 1440 } });
  await page.close();
  console.log("  ✓ " + outPath);
}

(async () => {
  const repoRoot = path.resolve(__dirname, "..", "..");
  const { server, base } = await startServer(repoRoot);
  console.log(`Static server: ${base} (root: ${repoRoot})\n`);

  let targets = process.argv.slice(2);
  if (targets.length === 0) {
    const all = await readdir(__dirname);
    targets = all.filter((f) => /^slide_\d+\.html$/.test(f)).sort();
  }

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  try {
    for (const slide of targets) {
      await renderSlide(browser, base, slide);
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log("\nDone.");
})();
