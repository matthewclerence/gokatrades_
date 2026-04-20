// Render Artist Spotlight slides to PNG at 1080x1440.
//   node "FEED POST/MISC/Artist Spotlight/render.mjs"

import puppeteer from "puppeteer";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..", "..", "..");
const slideDirUrlPath = path.relative(projectRoot, __dirname).split(path.sep).map(encodeURIComponent).join("/");

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
  await page.goto(`${base}/${slideDirUrlPath}/${htmlName}`, { waitUntil: "networkidle0" });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(__dirname, outName), omitBackground: false });
  await page.close();
}

(async () => {
  const { server, base } = await startServer(projectRoot);
  const browser = await puppeteer.launch({ headless: "new" });
  try {
    for (const n of ["01","02","03","04","05","06","07"]) {
      await renderSlide(browser, base, `slide_${n}.html`, `slide_${n}.png`);
    }
  } finally {
    await browser.close();
    server.close();
  }
  console.log("Done.");
})();
