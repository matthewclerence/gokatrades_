# createfeed — GokaTrades Instagram Carousel Production System

## Invocation

Type as plain messages (not `/slash`):

| Command | Tag folder | Produces |
|---|---|---|
| `createfeed cuanmingguan [topic]` | `FEED POST/CUAN MINGGUAN/` | 7-slide data carousel — biggest weekly gainers |
| `createfeed quicksale [topic]` | `FEED POST/QUICKSALE/` | 3–4 slide punch carousel — @thefinecard style |
| `createfeed misc [topic]` | `FEED POST/MISC/` | 6–8 slide carousel — Pokémon vs Luxury / trivia |
| `createfeed news [topic]` | `FEED POST/NEWS/` | 5-slide carousel — set reveal, announcement |

**Folder convention (every tag):**
```
FEED POST/[TAG]/
├── template [tag name]/     ← reference visuals — ALWAYS read first
└── [Post Name]/             ← each new post lives here as a sibling
```

New posts go to `FEED POST/[TAG]/[Post Name]/` with `slide_NN.html` + rendered `slide_NN.png` at 1080×1440.

---

## GLOBAL RULES (apply to every tag)

### Images — single source of truth
All card images, booster packs, badges, and any visual asset referenced by a slide **MUST** come from the central `IMAGES/` folder at the repo root.

- ❌ **NEVER** create a per-post `images/` folder inside `FEED POST/[TAG]/[Post Name]/`
- ❌ **NEVER** create a per-tag `images/` folder inside `FEED POST/[TAG]/`
- ✅ Drop new card art directly into `IMAGES/`
- ✅ From a post HTML file, reference as `../../../IMAGES/<filename>` (three `..` because posts sit 3 levels deep: `FEED POST/[TAG]/[Post Name]/slide_NN.html`)
- ✅ Use descriptive filenames: `mega_greninja_ex.jpg`, `abyss_eye_booster.png` — no spaces, lowercase with underscores

If you need an image that isn't in `IMAGES/` yet, add it there first, then reference it. This keeps every asset reusable across posts and prevents duplication.

### Canvas
- **Size:** 1080 × 1440 (Instagram portrait carousel) — unless a tag overrides
- **Base background:** `#111111` — unless tag overrides (e.g. `quicksale` uses pure `#000000`)
- **Font:** Space Grotesk (400/600/700) via Google Fonts, unless tag overrides
- **60px minimum safe zone** on all four sides for text

### Brand marks
- **Watermark top-left** at 24px inset: `GOKATRADES` white on `#FF4444` badge, 22px/700, letter-spacing 2px, `10px 18px` padding, `border-radius: 4px`
- **@gokatrades handle bottom-right** at 24/44px inset: 22px/600, `rgba(255,255,255,0.45)`

Exception: `quicksale` places `@gokatrades` centered bottom (matching @thefinecard layout).

### Palette (FLAT SOLIDS ONLY)
| Token | Hex | Use |
|---|---|---|
| BG dark | `#111111` | Default slide background |
| BG pure black | `#000000` | `quicksale` only |
| BG light | `#F7F7F7` / `#E8E8E8` | White banner blocks |
| Text white | `#FFFFFF` | Headlines, primary text |
| Text mute | `#A0A0A0` / `#C8C8C8` | Captions, labels |
| Red accent | `#FF4444` | CTA, key word, arrows down |
| Green | `#22C55E` | Price up |
| Gold/Yellow | `#FFCB05` | `quicksale` headline prices only |

### No gradients, no tints, no radial washes (global)
Gradient fills, radial backgrounds, and tinted color washes are **banned** — they read as AI-generated and break "Clean · Premium · Playful."

- ❌ `linear-gradient(...)` / `radial-gradient(...)` for backgrounds, card fills, or decorative washes
- ✅ **Blurred card-art backgrounds** (actual Pokémon card image, blurred) are permitted
- ✅ **Data-viz fills** under a line chart or gauge bar are permitted
- ✅ `#FF4444` appears **exactly once per slide** as the accent (except `quicksale`, where gold is primary accent)

### Slide 1 hook — SACRED SIZING (applies to `cuanmingguan` and `news`)
Hook headline = brand's visual signature. MUST match Abyss Eye baseline.

- **`.hook-text h1` font-size: 150px** (never 136, never 120, never 148 — 150)
- font-weight: 700
- line-height: 0.95
- letter-spacing: -4px
- Container `.hook-text`: `left: 40px; right: 40px`
- Exactly **3 lines**, each **≤9 characters**
- **ONE line** colored red via `<span class="red">`

If the topic word exceeds 9 chars, **rewrite the hook** to a short related phrase. Never shrink the font.

Exception: `quicksale` uses its own large-dollar-amount headline style (gold outlined display text, NOT 150px Space Grotesk). `misc` can vary per sub-concept.

### Text limits
- Hook slide: **≤ 8 words total** on the headline
- Body slides: **≤ 15 words** of narrative per slide

### Voice (mirror Visual Brain)
- Language: **Bahasa Indonesia** for body copy. ALL CAPS for headlines
- Short, punchy sentences. Educational tone — inform, don't hype
- CTAs: "Follow untuk info lainnya", "Link di bio", "Tulis komentar"
- ❌ Never: "scam", "OMG", "you NEED this", "moon", "cop", "send it"

---

## TAG 1 — `createfeed cuanmingguan [topic]`

**Purpose:** Weekly recap of biggest Pokémon card price movers ("Cuan Mingguan" = Weekly Profit).

**Tag folder:** `FEED POST/CUAN MINGGUAN/`
**Reference:** `FEED POST/CUAN MINGGUAN/template cuan mingguan/` (WhatsApp reference images + slide_01.png)
**Sibling posts for additional reference:** `FEED POST/CUAN MINGGUAN/21 April/`

### Structure (7 slides — statistics layout)

| # | File | Purpose |
|---|---|---|
| 01 | `slide_01_hook.html` | Card top-center, green `+X%` badge top-right, 150px headline bottom-left, `GESER >>>>>` CTA |
| 02 | `slide_02_card.html` | Section `KARTU` — card left + info side (name, rarity, Set, Nomor, Rilis) |
| 03 | `slide_03_price.html` | Section `HARGA RAW · NEAR MINT` — card + big price, NAIK/TURUN trend, 30-day line chart (SVG) |
| 04 | `slide_04_graded.html` | Section `RINCIAN GRADED` — 3-col price grid (PSA 9 / PSA 10 / Gem Rate) + PSA pop grid |
| 05 | `slide_05_ebay.html` | Section `DINAMIKA PASAR EBAY` — 3 stat cards + demand gauge + supply row |
| 06 | `slide_06_analysis.html` | Section `KENAPA HARGANYA NAIK/TURUN` — 3 reasons, red left-border, summary |
| 07 | `slide_07_cta.html` | Faded card bg (0.18 opacity), big `GOKATRADES` lockup, red FOLLOW button |

### Layout notes
- All body slides share `.blurred-bg`: `url('../../../IMAGES/<card>.jpg')` with `filter: blur(28–35px) brightness(0.3) saturate(0.7)` (three `..` segments because posts now nest one level deeper under the tag folder)
- Slide 1 hook uses **150px** (SACRED)
- Section labels: 24–26px/700, `#FF4444`, letter-spacing 10–12px, 70×4 red underline 14px below
- Stat cards: `rgba(255,255,255,0.08)` bg, `1px solid rgba(255,255,255,0.12)`, 20px radius
- Chart + gauge gradients permitted (data-viz exception)

### Required data
- Raw / ungraded NM price + 30-day price history (8–10 points)
- PSA 9 price, PSA 10 price, Gem Rate %
- PSA population (PSA 10 / PSA 9 / Total)
- eBay: listing count, new listings/day, sold/day, demand %, supply shift
- 2–3 clean reasons for movement

### Execution
1. Study `FEED POST/CUAN MINGGUAN/template cuan mingguan/` — the visual reference set.
2. Gather data from the allowed sources (see bottom).
3. Place hero card image in `IMAGES/`.
4. Create `FEED POST/CUAN MINGGUAN/[Post Name]/`.
5. Author all 7 HTML slides from scratch matching the reference visual. HTML skeleton is no longer pre-saved — build from spec above.
6. Slide 1 hook: 150px, 3×≤9 char lines, one red.
7. Render via the puppeteer pipeline.
8. Verify against reference polish.

---

## TAG 2 — `createfeed quicksale [topic]`

**Purpose:** Alert followers to a big auction result, flash sale, or undervalued listing. Short punch carousel — 3 to 4 slides max.

**Tag folder:** `FEED POST/QUICKSALE/`
**Reference:** `FEED POST/QUICKSALE/template quicksale/` — @thefinecard JPG refs

### Visual DNA (from refs)
- **Background:** Pure `#000000`
- **PSA label ribbon** across the top (white background with red corner tab, PSA grading data in black condensed sans)
- **Hero card** — real card image centered (sometimes with zoomed-detail circle overlay)
- **Headline — giant dollar amount** in gold/yellow (`#FFCB05`) with heavy black outline/drop-shadow, display-weight serif or condensed display sans
- **Subhead** — white ALL CAPS, short sentence (e.g. "THIS POP 1 ERROR SHINING MEW JUST SOLD ON AUCTION")
- **Handle bottom-center** — `@gokatrades` in muted white
- **Geser chevron** (`>>`) bottom-right in red

### Structure (4 slides default — contract to 3 if single-item, expand to 5 for compare)

| # | File | Purpose |
|---|---|---|
| 01 | `slide_01_hook.html` | PSA ribbon top + hero card + gold $amount + "JUST ENDED" / "$X SALE" headline + handle + `>>` |
| 02 | `slide_02_context.html` | Why it matters — 2 stats: pop report, prior high, rarity context |
| 03 | `slide_03_comparison.html` (optional) | vs 2–3 other recent sales of same card / grade |
| 04 | `slide_NN_cta.html` | Minimal: `GOKATRADES` lockup + `FOLLOW UNTUK ALERT BERIKUTNYA` + handle |

### Required data
- PSA grading data (year, set, card name, #, grade, cert #)
- Final sale price (USD + IDR conversion at ~Rp 16,500/USD)
- Sale date + auction house / platform (Goldin, PWCC, Heritage, eBay, Fanatics)
- Pop report: PSA 10 pop, PSA 9 pop, total graded
- 1–2 sentences of why this sale matters

### Execution (first-run bootstrap)
Only visual JPG refs exist. On first invocation:

1. **Study** `FEED POST/QUICKSALE/template quicksale/*.jpg` — lock visual DNA (black bg, gold $ headline, PSA ribbon, centered card).
2. **Create** `FEED POST/QUICKSALE/[Post Name]/`.
3. **Author** slide_01_hook.html from scratch matching the composition with GokaTrades watermarks swapped in.
4. Slide $amount font: `"Anton", "Bebas Neue", sans-serif`, 200–240px, color `#FFCB05`, text-shadow `4px 4px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000`.
5. PSA ribbon: white banner with `#FF4444` left square (PSA logo slot), black condensed text.
6. Handle centered bottom — `@GOKATRADES` 22px/600, `rgba(255,255,255,0.55)`.
7. GESER `>>` bottom-right, red `#FF4444`, 28px, letter-spacing 4px.
8. Render via puppeteer pipeline.

**NOTE:** Gold `#FFCB05` is the accent for this tag INSTEAD of `#FF4444`. Red still appears on PSA ribbon tab + `>>` chevron, but the primary eye-catcher is the gold dollar amount.

---

## TAG 3 — `createfeed misc [topic]`

**Purpose:** Loose bucket for fun/offbeat posts — luxury-item comparisons, trivia, grid posts. Variable length.

**Tag folder:** `FEED POST/MISC/`
**Reference:** `FEED POST/MISC/template misc/` (canonical template — currently empty, bootstrapped on first run from the sibling posts below)
**Sibling posts available for reference:**
- `FEED POST/MISC/Pokemon vs Luxury Cars/` (8 slides, full HTML — car vs card)
- `FEED POST/MISC/Pokemon vs Luxury Watches/` (6 slides, full HTML — watch vs card)
- `FEED POST/MISC/Pokemon Pack Bingo/`
- `FEED POST/MISC/Pokemon Sets Matrix/`
- `FEED POST/MISC/30th Celebration Pokemon TCG/`

### Structure (flexible — 6 to 8 slides)

| # | Slide | Purpose |
|---|---|---|
| 01 | Hook | Big provocative question or comparison statement |
| 02–0N | Body | 4–6 comparison / content slides, one idea per slide |
| Final | CTA | Standard GokaTrades CTA with FOLLOW button |

### Known sub-formats
- **Pokemon vs Luxury Cars** — 8 slides, round-based comparison
- **Pokemon vs Luxury Watches** — 6 slides, round-based comparison
- **Trivia grids** — multi-card grid with fact overlays

### Voice + style freedom
- May break the "exactly one red per slide" rule for round-based layouts (each round has its own accent color from the palette)
- Hook size doesn't have to hit 150px — comparison layouts need breathing room for two subjects
- Blurred backgrounds OK; flat `#111` OK; never gradients

### Execution
1. Pick the closest existing post as starting point (Cars for status compare; Watches for craftsmanship compare; freestyle otherwise).
2. Create `FEED POST/MISC/[Post Name]/`.
3. Copy its HTML skeleton in.
4. Swap subjects round-by-round.
5. Keep the GokaTrades watermark + handle.
6. Render via the copied folder's own `render.mjs` if one exists, else use `scripts/render_slides.js`.

---

## TAG 4 — `createfeed news [topic]`

**Purpose:** Announce a new set, card reveal, or Pokémon TCG event.

**Tag folder:** `FEED POST/NEWS/`
**Reference:** `FEED POST/NEWS/template news/` (5 slide PNGs — visual reference only, HTML authored fresh)

### Structure (5 slides)

| # | Slide | Purpose |
|---|---|---|
| 01 | **Hook** | Big card image (upper 60%), 150px headline below (lower 40%), `GESER >>>>>` bottom-left |
| 02 | **Detail Set** | Vertical booster/card image left, red `DETAIL SET` label right, key-value pairs (Rilis Jepang, Isi Set, Isi Pack, Spesial) |
| 03 | **Price / Key Numbers** | Dark card panels with price or data, flat fills, red accent once |
| 04 | **Card Grid** | 6 cards from the set (3×2) with name labels underneath |
| 05 | **CTA** | Centered `GOKATRADES` lockup, tagline, red FOLLOW button, social row |

### Layout notes
- Slide 1 card image bleeds to top edge; headline sits in dark lower zone — SACRED 150px sizing
- Slide 2 has a vertical `DETAIL SET` red label (12px letter-spacing)
- Slide 3 uses **flat dark cards** with thin `rgba(255,255,255,0.12)` borders — no gradient
- Slide 4 grid: 3 cols × 2 rows, card image + name label (18–20px/700, letter-spacing 2px)
- Slide 5 CTA: `GOKATRADES` wordmark (white + red two-tone), 32px FOLLOW button

### Data source
Before writing slide 01, run the `news` skill or consult the allowed sources to confirm set name, release date, card count, pack count, and hero card identity.

### Execution
1. Study `FEED POST/NEWS/template news/slide_0N.png` (all 5) — memorize the visual layout.
2. Gather source material. Hero card image → `IMAGES/`.
3. Create `FEED POST/NEWS/[Post Name]/`.
4. Author all 5 HTMLs from scratch matching the PNG references.
5. Sacred 150px hook, 3×≤9 char lines, one red.
6. Render via `scripts/render_slides.js` or a per-post renderer.
7. Verify PNG outputs match reference polish.

---

## Rendering Pipeline (HTML → PNG)

Each slide is a self-contained HTML file rendered to PNG at 1080×1440 via Puppeteer.

```js
const puppeteer = require('puppeteer');
const path = require('path');

// Posts now live 2 levels deep: FEED POST/[TAG]/[Post Name]/
const dir = path.join(__dirname, '..', 'FEED POST', '[TAG]', '[Post Name]');

const slides = [
  { html: 'slide_01_hook.html', out: 'slide_01.png' },
  // ... list remaining slides in order ...
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  for (const { html, out } of slides) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1440, deviceScaleFactor: 1 });
    const filePath = path.join(dir, html).replace(/\\/g, '/');
    await page.goto('file:///' + filePath, { waitUntil: 'networkidle0', timeout: 20000 });
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(dir, out), type: 'png' });
    await page.close();
  }
  await browser.close();
})();
```

Existing reference renderers live at repo root (`render_charizard.js`, `render_slides.js`, etc.) but reference old paths (`Goka Trades Feed Posts/...`). Use as pattern only — write a fresh per-post renderer pointing at the new tag-nested path.

---

## Content Sources (STRICT — no others)
- https://www.pokemon.com/us/pokemon-news
- https://www.pokemon-card.com/
- https://www.pokebeach.com/
- https://asia.pokemon-card.com/id/
- https://www.pokeguardian.com/
- https://www.tcgplayer.com/content/pokemon/articles

Any data, set name, release date, price, or card info on a slide must be traceable to one of these six. If you can't verify, don't write it.

---

## Pre-ship Quality Checklist

For every tag, before declaring done:

- [ ] Size is exactly 1080 × 1440
- [ ] Watermark top-left + @gokatrades present (position per tag rules)
- [ ] Slide 1 hook sizing matches tag's rule (150px for cuanmingguan/news; tag-specific for quicksale/misc)
- [ ] No `linear-gradient` / `radial-gradient` outside chart SVG + gauge
- [ ] Accent color appears once per slide (red `#FF4444` default; gold `#FFCB05` for quicksale)
- [ ] Background layer is flat OR approved blurred product image
- [ ] Font is Space Grotesk throughout (exception: quicksale $amount display font)
- [ ] All data traceable to allowed sources
- [ ] Bahasa Indonesia copy, no off-brand slang
- [ ] PNG renders match the tag's reference folder polish
- [ ] Post lives at `FEED POST/[TAG]/[Post Name]/`, NOT at the old `FEED POST/[Post Name]/` root
- [ ] ALL `<img>` and `background-image` URLs point at `../../../IMAGES/<file>` — no per-post or per-tag image folders exist

If any checkbox fails, fix before shipping.
