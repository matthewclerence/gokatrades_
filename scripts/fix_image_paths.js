// Bump ../../images/ → ../../../images/ in all HTML files under MISC/
// (they were originally two levels deep, now three after the MISC/ nesting).

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'FEED POST', 'MISC');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (e.isFile() && e.name.endsWith('.html')) processFile(full);
  }
}

function processFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  const before = content;
  // Only match exactly 2-level parent refs. Use negative lookbehind to avoid
  // re-bumping paths that are already 3-level.
  content = content.replace(/(?<!\.\.\/)\.\.\/\.\.\/images\//g, '../../../images/');
  content = content.replace(/(?<!\.\.\/)\.\.\/\.\.\/IMAGES\//g, '../../../IMAGES/');
  if (content !== before) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('  fixed:', path.relative(__dirname, file));
  }
}

console.log('Scanning', ROOT);
walk(ROOT);
console.log('Done.');
