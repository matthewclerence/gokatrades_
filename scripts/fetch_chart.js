// Fetch the pricecharting 151 price chart and save as PNG for the reel
const puppeteer = require("puppeteer");
const path = require("path");

const URL =
  "https://www.pricecharting.com/game/pokemon-scarlet-&-violet-151/booster-bundle";
const OUT = path.resolve(
  __dirname,
  "..",
  "reels",
  "pokemon-trend-pixel",
  "public",
  "assets",
  "chart_151_price.png"
);

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 2 });
  await page.goto(URL, { waitUntil: "networkidle2", timeout: 60000 });

  // Click "All" to get full history
  await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll("button,a,div,span"));
    const allBtn = buttons.find(
      (el) => el.textContent?.trim() === "All" && el.offsetWidth > 0
    );
    if (allBtn) allBtn.click();
  });
  await new Promise((r) => setTimeout(r, 1200));

  // Find the highcharts container (the chart itself)
  const chartBox = await page.evaluate(() => {
    const container = document.querySelector(".highcharts-container, [data-highcharts-chart]");
    if (!container) return null;
    const r = container.getBoundingClientRect();
    return { x: r.x, y: r.y, width: r.width, height: r.height };
  });

  if (!chartBox) throw new Error("chart not found");

  await page.screenshot({
    path: OUT,
    clip: {
      x: Math.max(0, chartBox.x - 10),
      y: Math.max(0, chartBox.y - 10),
      width: chartBox.width + 20,
      height: chartBox.height + 20,
    },
  });

  console.log("saved:", OUT);
  await browser.close();
})();
