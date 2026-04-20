const fs = require('fs');
const path = require('path');

function fix(file, replacements) {
  let html = fs.readFileSync(path.join(__dirname, 'slides', file), 'utf8');
  let count = 0;
  for (const [from, to] of replacements) {
    if (html.includes(from)) {
      html = html.replace(from, to);
      count++;
    }
  }
  fs.writeFileSync(path.join(__dirname, 'slides', file), html);
  console.log('Fixed:', file, '(' + count + ' replacements)');
}

// ---- SLIDE 01 ----
fix('slide_01.html', [
  ['font-size: 108px; font-weight: 700; line-height: 0.98', 'font-size: 124px; font-weight: 700; line-height: 0.98'],
  ['font-size: 40px; font-weight: 700; color: #22C55E', 'font-size: 46px; font-weight: 700; color: #22C55E'],
]);

// ---- SLIDE 02 ----
fix('slide_02.html', [
  ['font-size: 84px;', 'font-size: 100px;'],
  ['font-size: 30px; font-weight: 600; color: #FF4444;\n    font-style: italic', 'font-size: 34px; font-weight: 600; color: #FF4444;\n    font-style: italic'],
  ['font-size: 36px; font-weight: 700; color: #FFFFFF', 'font-size: 42px; font-weight: 700; color: #FFFFFF'],
]);

// ---- SLIDE 03 ----
fix('slide_03.html', [
  ['font-size: 108px; font-weight: 700; color: #FFFFFF', 'font-size: 124px; font-weight: 700; color: #FFFFFF'],
  ['font-size: 24px; font-weight: 700; color: #22C55E', 'font-size: 28px; font-weight: 700; color: #22C55E'],
]);

// ---- SLIDE 04 ----
fix('slide_04.html', [
  ['font-size: 46px; font-weight: 700; color: #FFFFFF', 'font-size: 56px; font-weight: 700; color: #FFFFFF'],
  ['font-size: 42px; font-weight: 700; color: #FFFFFF', 'font-size: 48px; font-weight: 700; color: #FFFFFF'],
  ['font-size: 20px; font-weight: 700; color: #FFFFFF', 'font-size: 24px; font-weight: 700; color: #FFFFFF'],
]);

// ---- SLIDE 05 ----
fix('slide_05.html', [
  ['font-size: 58px; font-weight: 700; color: #FFFFFF', 'font-size: 68px; font-weight: 700; color: #FFFFFF'],
  ['font-size: 58px; font-weight: 700; color: #22C55E', 'font-size: 68px; font-weight: 700; color: #22C55E'],
  ['font-size: 32px; font-weight: 700; color: #22C55E', 'font-size: 38px; font-weight: 700; color: #22C55E'],
  ['font-size: 22px; font-weight: 700; color: #FFFFFF', 'font-size: 26px; font-weight: 700; color: #FFFFFF'],
]);

// ---- SLIDE 06 ----
fix('slide_06.html', [
  ['font-size: 30px; font-weight: 700; color: #FFFFFF', 'font-size: 34px; font-weight: 700; color: #FFFFFF'],
  ['font-size: 22px; font-weight: 400; color: #A0A0A0;\n    line-height: 1.4', 'font-size: 24px; font-weight: 400; color: #A0A0A0;\n    line-height: 1.4'],
  ['font-size: 20px; font-weight: 700; color: #A0A0A0', 'font-size: 22px; font-weight: 700; color: #A0A0A0'],
]);

// ---- SLIDE 07 ----
fix('slide_07.html', [
  ['font-size: 90px; font-weight: 700; color: #FFFFFF', 'font-size: 108px; font-weight: 700; color: #FFFFFF'],
  ['font-size: 32px; font-weight: 700;\n    padding: 22px 60px', 'font-size: 38px; font-weight: 700;\n    padding: 22px 60px'],
  ['font-size: 36px; font-weight: 700; color: #FFFFFF;\n    margin-top: 15px', 'font-size: 42px; font-weight: 700; color: #FFFFFF;\n    margin-top: 15px'],
  ['font-size: 26px; font-weight: 400; color: #A0A0A0', 'font-size: 30px; font-weight: 400; color: #A0A0A0'],
]);

console.log('Done. All display fonts scaled up ~15%.');
