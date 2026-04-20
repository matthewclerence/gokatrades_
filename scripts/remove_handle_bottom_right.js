// Remove bottom-right @gokatrades handle from all slide HTMLs.
// Removes only .handle and .handle-bottom — NOT .handle-big (central CTA brand
// lockup) or .footer-handle (Bingo CTA inline) or tag mentions inside captions.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'FEED POST');

// Patterns to strip — div-level only, both class and className forms.
const PATTERNS = [
  /^[ \t]*<div class="handle">\s*@gokatrades\s*<\/div>\s*\r?\n/gm,
  /^[ \t]*<div class="handle-bottom">\s*@gokatrades\s*<\/div>\s*\r?\n/gm,
  /^[ \t]*<div className="handle">\s*@gokatrades\s*<\/div>\s*\r?\n/gm,
  /^[ \t]*<div className="handle-bottom">\s*@gokatrades\s*<\/div>\s*\r?\n/gm,
];

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
  for (const p of PATTERNS) content = content.replace(p, '');
  if (content !== before) {
    fs.writeFileSync(file, content, 'utf8');
    const rel = path.relative(__dirname, file);
    console.log('  stripped:', rel);
  }
}

console.log('Scanning', ROOT);
walk(ROOT);
console.log('Done.');
