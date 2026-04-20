// Strip the "PERBANDINGAN X / 4" section-label divs from slides 2–5 of
// Pokemon vs Luxury Watches. Targets only the specific div line so the
// surrounding layout stays intact.

const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'FEED POST', 'MISC', 'Pokemon vs Luxury Watches');
const FILES = ['slide_02.html', 'slide_03.html', 'slide_04.html', 'slide_05.html'];

// Matches the whole <div class="section-label">PERBANDINGAN X / 4<span …></span></div>
// line, optionally surrounded by whitespace, and removes it (including newline).
const PAT = /^[ \t]*<div class="section-label">PERBANDINGAN \d \/ 4<span class="section-underline"><\/span><\/div>\s*\r?\n/gm;

for (const f of FILES) {
  const full = path.join(DIR, f);
  let s = fs.readFileSync(full, 'utf8');
  const before = s;
  s = s.replace(PAT, '');
  if (s !== before) {
    fs.writeFileSync(full, s, 'utf8');
    console.log('  stripped:', f);
  } else {
    console.log('  no match:', f);
  }
}
