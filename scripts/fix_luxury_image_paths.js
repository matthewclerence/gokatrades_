// Rewrite image refs in Pokemon vs Luxury Cars/Watches slides to point at
// the actual files inside IMAGES/ subfolders (graded, misc, raw singles).
// Missing slab variants fall back to their non-slab source.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'FEED POST', 'MISC');
const REL = '../../../IMAGES';   // HTMLs live 3 levels deep

// Substring (old → new) replacements. Applied in order.
// Keys are the "bad" suffix after ../../../images/  ; values are the new full rel path.
const MAP = {
  // Cars — slab fallbacks to non-slab versions
  'nobg/goldstar_charizard_slab.png':         `${REL}/raw singles/goldstar_charizard.jpg`,
  'nobg/kangaskhan_trophy_slab.png':          `${REL}/raw singles/kangaskhan_trophy.jpg`,
  'nobg/pikachu_illustrator_slab.png':        `${REL}/graded/pikachu_illustrator.jpg`,
  'nobg/lugia_1st_ed_slab.png':               `${REL}/raw singles/lugia_1st_ed.png`,
  'nobg/charizard_1st_ed_shadowless_slab.png':`${REL}/raw singles/charizard_1st_ed_shadowless.jpg`,
  'nobg/lamborghini_huracan_evo_green.png':   `${REL}/misc/lamborghini_huracan_evo.png`,
  'nobg/porsche_911_carrera.png':             `${REL}/misc/porsche_911_carrera.png`,
  // Cars — background / non-slab refs
  'goldstar_charizard.jpg':             `${REL}/raw singles/goldstar_charizard.jpg`,
  'kangaskhan_trophy.jpg':              `${REL}/raw singles/kangaskhan_trophy.jpg`,
  'pikachu_illustrator.jpg':            `${REL}/graded/pikachu_illustrator.jpg`,
  'lugia_1st_ed.png':                   `${REL}/raw singles/lugia_1st_ed.png`,
  'charizard_1st_ed_shadowless.jpg':    `${REL}/raw singles/charizard_1st_ed_shadowless.jpg`,
  'bmw 5 series.webp':                  `${REL}/misc/bmw 5 series.webp`,
  'lamborghini-aventador-6589974_1280.webp': `${REL}/misc/lamborghini-aventador-6589974_1280.webp`,

  // Watches — slabs → fallback actual files
  'nobg/blastoise_galaxy_star.png':     `${REL}/raw singles/show_blastoise-cosmos-holo-009-165-white-back-starlight-holo-test-print-card-wizards-of-the-coast-era-promos.webp`,
  'nobg/umbreon_goldstar_slab.png':     `${REL}/misc/Umbreon-200x200.webp`,
  'nobg/no1_trainer_slab.png':          `${REL}/graded/1999-pm-japanese-promo-no-1-trainer-super-secret-battle-gem-mt-10-73959.webp`,
  'nobg/ap_royal_oak_offshore.png':     `${REL}/misc/Audemars Piguet Royal Oak Offshore 25721 Chronograph Stainless Steel.webp`,
  'nobg/tropical_mega_battle_slab.png': `${REL}/graded/topic mega battle.jpg`,
  'nobg/rm_11_03.png':                  `${REL}/misc/RM 11-03.webp`,
  'nobg/rolex_cosmograph_daytona.png':  `${REL}/misc/Rolex Cosmograph Daytona.webp`,
  'nobg/patek_nautilus_40th.png':       `${REL}/misc/PATEK NAUTILUS.webp`,
};

// Build pattern: ../../../images/<key>   OR  ../../../IMAGES/<key>  (Windows FS is case-insensitive
// but Chrome on Windows usually resolves either — we keep both forms to be safe).
const PREFIXES = ['../../../images/', '../../../IMAGES/'];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.isFile() && e.name.endsWith('.html')) processFile(full);
  }
}

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const before = content;
  for (const prefix of PREFIXES) {
    for (const [key, target] of Object.entries(MAP)) {
      const needle = prefix + key;
      while (content.includes(needle)) {
        content = content.replace(needle, target);
      }
    }
  }
  if (content !== before) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('  fixed:', path.relative(__dirname, file));
  }
}

console.log('Scanning', ROOT);
walk(ROOT);
console.log('Done.');
