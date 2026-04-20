// One-shot: remove white halo from the Huracan PNG and write a clean copy.
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, "..", "..", "images", "610-6109360_lamborghini-huracn-evo-spyder-lamborghini-huracan-evo-price.png");
const OUT = path.resolve(__dirname, "..", "..", "images", "nobg", "lamborghini_huracan_evo_green.png");

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const w = info.width, h = info.height;
const px = new Uint8ClampedArray(data);

// Strategy: any pixel that is BOTH near-white AND not surrounded by strong color
// gets pushed to transparent. Run two passes:
// 1) Threshold near-white anti-aliased pixels to transparent.
// 2) Erode partial-alpha edges by clamping low-alpha to 0.
for (let i = 0; i < px.length; i += 4) {
  const r = px[i], g = px[i + 1], b = px[i + 2], a = px[i + 3];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;
  const y = Math.floor((i / 4) / w);

  const isNearWhite = max > 230 && chroma < 25;
  // Gray floor/shadow pixels — low chroma, mid-to-high luminance, anywhere in the image.
  const isGray = max > 150 && chroma < 18;
  // Catch fainter shadow pixels in the bottom third of the canvas only (so we
  // don't accidentally erase grey trim/wheels on the car body).
  const isFloorShadow = y > h * 0.65 && max > 100 && chroma < 22;

  if (isNearWhite || isGray || isFloorShadow) {
    px[i + 3] = 0;
  } else if (a < 180) {
    px[i + 3] = 0;
  }
}

await sharp(Buffer.from(px), { raw: { width: w, height: h, channels: 4 } })
  .png()
  .toFile(OUT);

console.log("Wrote", OUT);
