const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const images = [
  'Pokemon_TCG_Mega_Evolution—Ascended_Heroes_Booster_Wrap1.webp',
  'Ascended-Heroes-Elite-Trainer-Box-1-200x191.webp',
  'product-img-01.webp',
  '11816194.jpg',
  '11816195.jpg',
  '11816196.jpg',
  '11816201.jpg',
  '11816202.jpg',
  '11816206.jpg',
  '11830155.jpg',
  'ASC.png'
];

async function removeBg(filename) {
  const input = path.join(__dirname, 'images', filename);
  const outName = path.parse(filename).name + '.png';
  const output = path.join(__dirname, 'images', 'nobg', outName);

  if (!fs.existsSync(input)) {
    console.log(`SKIP: ${filename} not found`);
    return;
  }

  try {
    const { data, info } = await sharp(input)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const threshold = 230;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i] >= threshold && data[i + 1] >= threshold && data[i + 2] >= threshold) {
        data[i + 3] = 0; // alpha to 0
      }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .png()
      .toFile(output);

    console.log(`OK: ${filename} -> ${outName} (${info.width}x${info.height})`);
  } catch (e) {
    console.log(`ERR: ${filename}: ${e.message}`);
  }
}

(async () => {
  for (const img of images) {
    await removeBg(img);
  }
  console.log('Done.');
})();
