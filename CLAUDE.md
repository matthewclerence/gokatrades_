# GokaTrades — Project Instructions

## What This Project Is
GokaTrades is an Indonesia-based Pokemon TCG business spanning educational social media content, a digital pack-opening app, and US-to-Indonesia product resale.

## Brand Identity
- **Feel:** Clean, Premium, Playful
- **Boundary:** Playful but never deceiving — honesty and transparency come first

## Visual Brain
The full brand guide is in `GokaTrades_Visual_Brain.md`. All content creation must follow it. Key rules:

### Colors
- Background: highlighted card image blurred if not, #111111 (dark default)
- Light banner: #F7F7F7
- Headlines on dark: #FFFFFF
- Headlines on light: #111111
- CTA/Highlight: #FF4444 (use sparingly)
- Secondary text: #A0A0A0
- Alt light bg: #E8E8E8

### Typography
- Font: Space Grotesk (Google Font) for everything
- Headlines: Bold 700, 36-48px, ALL CAPS
- Subheadings: Semi-Bold 600, 24-32px, Sentence case
- Body: Regular 400, 16-20px
- CTA: Bold 700, 20-28px, ALL CAPS

### Text Rules
- Hook slides: 10 words max
- Body slides: 15 words max
- Min text size: 16px

### Layout
- Primary format: 1080x1350 (Instagram Portrait)
- Two-zone layout: ~60% card imagery top, ~40% text zone where text is Large ALL CAPS headline text, left-aligned and Text is stacked vertically, very large and bold — feels like it slightly overflows into the card zone
- 60px minimum safe zone in text block
- Cards are always the hero — no photos of people

### Voice Rules
- Short, punchy sentences. Clean and direct.
- Educational tone — inform, don't hype
- Standard CTAs: "Follow for more," "Link in bio," "Drop a comment," or end with a question
- NEVER: profanity, the word "scam", overhyped language, emoji spam

### Brand Marks
- Handle: @gokatrades — bottom right of every slide
- Logo watermark: top left of every slide

## Branding Assets
Located in `GokaTrades branding/`:
- `goka_clean_appicon.png` — App icon
- `goka_clean_profile.png` — Profile picture
- `goka_clean_thumbnail.png` — Thumbnail
- `goka_clean_watermark.png` — Watermark overlay
- `goka_clean_youtube_banner.png` — YouTube banner
- `goka_clean_tiktok_banner.png` — TikTok banner

## Content Output
Feed posts go in `Goka Trades Feed Posts/` organized by content title/heading/hook.

## Content Commands

Type these as regular messages — NOT as /slash commands.

- `createfeed educational[website link or prompt]` — Full carousel set in Visual Brain style (Indonesian language, Space Grotesk, dark palette). Slides are 1080x1350. Get template design references from C:\Users\USER\Desktop\GokaTrades\Goka Trades Feed Posts\template educational whilst also being in topic with which image to fetch from the image folder 
- `createfeed statistics[website linkor prompt]` — Full carousel set in Visual Brain style (Indonesian language, Space Grotesk, dark palette). Slides are 1080x1350. Get template design references from C:\Users\USER\Desktop\GokaTrades\Goka Trades Feed Posts\template statistics whilst also being in topic with which image to fetch from the image folder 
- `news` — Gather latest updates from PokeBeach, Pokemon Card Asia ID, PokeGuardian ONLY. Output in English.
- `fix` — Compare current slides against the matching template (template educational or template statistics) AND the Visual Brain guide (`GokaTrades_Visual_Brain.md`), then immediately rebuild any that don't match. No permission asked — just fix and deliver. Only works when slides have been generated in the current conversation.

  **Image rules:**
  - Product images with white/light backgrounds: run `sharp` to remove white pixels (threshold ≥230 RGB → alpha 0) and save as transparent PNGs in `images/nobg/`. Always use the `images/nobg/` versions in slides. Do NOT use `mix-blend-mode: multiply` (darkens product) or `box-shadow` border hacks (doesn't cover large white areas)
  - Product images must be hero-sized — minimum 400px wide for main hero, 200px+ for secondary
  - Ghost/background images: 25-35% opacity, large enough to be recognizable
  - All images: `object-fit: contain`, use `drop-shadow` for depth

  **Text size rules (matched from template — follow exactly):**

  *Slide 01 — Hook:*
  - Headline: 90-100px Bold 700 ALL CAPS (massive, overflows into card zone)
  - "GESER >>>>>" swipe indicator: 16-18px
  - @gokatrades handle: 16-18px
  - GOKATRADES badge: 18px

  *Slide 02 — Card/Set Info (left image + right details):*
  - Section header (e.g. "KARTU"): 16-18px Semi-Bold 600, letter-spaced, red
  - Card/set name: 48-52px Bold 700 ALL CAPS
  - Subtitle: 22-24px Semi-Bold 600, red
  - Detail labels (SET, NOMOR, etc.): 12-14px Semi-Bold 600, uppercase, red
  - Detail values: 26-30px Bold 700
  - Footer note: 14-16px

  *Slide 03 — Info/Stats (same layout as slide 02 or centered data):*
  - Section header: 16-18px red, letter-spaced
  - Title: 44-48px Bold 700 ALL CAPS
  - Subtitle: 22-24px red
  - Body paragraph: 18-20px Regular 400
  - Detail labels: 12-14px red
  - Detail values: 24-28px Bold 700

  *Slide 04 — Comparison/VS:*
  - Section header: 16-18px red, letter-spaced
  - "VS" label: 36-40px Bold 700, red
  - Comparison labels: 36-40px Bold 700
  - Sub-labels: 18-20px
  - Footer paragraph: 16-18px

  *Slide 05 — Gallery/Grid:*
  - Section header: 16-18px red, letter-spaced
  - Body paragraph: 18-20px Regular 400
  - Card/item labels: 16-18px Bold 700

  *Slide 06 — CTA:*
  - "GOKATRADES" brand name: 64-72px Bold 700
  - Tagline: 20-22px Regular 400
  - CTA button text: 22-24px Bold 700 ALL CAPS
  - Sub-links: 18-20px
  - Categories: 14-16px

  *Global:*
  - Nothing below 14px ever
  - Font: Space Grotesk only

  **Layout/alignment rules (matched from template — follow exactly per slide):**

  *Slide 01 — Hook:*
  - Two-zone: ~60% imagery top, ~40% text bottom
  - Images: centered horizontally as a group, overlapping, angled
  - Text zone: LEFT-ALIGNED, 60px padding left/right, text overflows upward into card zone
  - GOKATRADES badge: top-left. GESER >>>>>: bottom-left. @gokatrades: bottom-right

  *Slide 02 & 03 — Info slides (left image + right details):*
  - Section header: horizontally CENTERED with red underline, ~100px from top
  - Two-column layout: left ~40% (image), right ~60% (text is DOMINANT, LEFT-ALIGNED)
  - Content block VERTICALLY CENTERED between section header and footer (use `align-items: center`) — do NOT top-align
  - Image is supplementary, NOT hero — ~400-450px tall, vertically centered in its column
  - Text is the star: card name large and bold, detail values chunky and readable
  - 60px padding sides
  - Detail rows stacked vertically in right column
  - Footer note: horizontally CENTERED at bottom
  - @gokatrades: bottom-right

  *Slide 04 — Comparison/VS:*
  - Section header: horizontally CENTERED
  - Two items side by side, horizontally CENTERED as a group
  - "VS" centered between items
  - Labels CENTERED under each respective item
  - Footer paragraph: horizontally CENTERED
  - @gokatrades: bottom-right

  *Slide 05 — Gallery/Grid or List:*
  - Section header: horizontally CENTERED
  - Body paragraph: horizontally CENTERED
  - Grid/list: horizontally CENTERED, evenly spaced
  - Item labels: CENTERED under each item
  - @gokatrades: bottom-right

  *Slide 06 — CTA:*
  - Everything VERTICALLY and HORIZONTALLY CENTERED
  - Ghost product images on left and right sides, angled, 25-35% opacity
  - Ghost images pulled inward — `left: 60px` / `right: 60px`, not negative values
  - Brand name, tagline, CTA button, sub-links, categories: all CENTERED
  - @gokatrades: bottom-right

  *Global:*
  - All containers use flexbox with explicit align-items/justify-content
  - Minimum 60px safe zone padding on all sides
  - Font: Space Grotesk only

  **Brand compliance:**
  - Watermark: top-left, red #FF4444 background badge
  - Handle @gokatrades: bottom-right
  - Font: Space Grotesk only
  - Colors: #111111 bg, #FF4444 accent (sparingly), #FFFFFF headlines, #A0A0A0 secondary
  - Blurred product image as background on every slide (filter: blur(50-70px) brightness(0.15-0.35))

  **CRITICAL — Proven CSS px values (use these exact values, not the ranges above):**
  These are the validated CSS font-sizes that produce template-matching output with Space Grotesk on a 1080x1350 canvas. The ranges above are the spec — these are the actual implementation values:

  *Slide 01 — Hook:*
  - Headline: `font-size: 96px; line-height: 0.98; letter-spacing: -3px`
  - Images: flexbox row, center hero 560px tall, side items 440px tall, `margin-left: -120px` / `margin-right: -120px` for overlap, side items angled ±6-8deg, 70-80% opacity

  *Slide 02 & 03 — Info (two-column):*
  - Card/set name: `font-size: 84px; line-height: 1.0`
  - Subtitle: `font-size: 28px`
  - Detail labels: `font-size: 14px; letter-spacing: 3px`
  - Detail values (short): `font-size: 36px`
  - Detail values (long/wrapping): `font-size: 24px`
  - Body paragraph: `font-size: 22px`
  - Product image: `height: 450px` (supplementary, not hero)
  - Content area: `align-items: center; justify-content: center` (vertically centered)
  - Footer: `font-size: 16px; text-align: center`

  *Slide 03 — Stats/Comparison variant:*
  - Comparison numbers: `font-size: 140px`
  - Unit labels: `font-size: 22px`
  - VS label: `font-size: 40px`
  - Bullet text: `font-size: 28px`
  - Footer: `font-size: 20px`

  *Slide 04 — Info (two-column, same as 02/03):*
  - Title: `font-size: 72px; line-height: 1.05`
  - Body text: `font-size: 22px`
  - Detail values: `font-size: 34px`
  - Detail small: `font-size: 22px`
  - Product image: `height: 430px`

  *Slide 05 — Grid/List:*
  - Title: `font-size: 56px`
  - Subtitle: `font-size: 22px`
  - Tip/item titles: `font-size: 26px`
  - Tip/item descriptions: `font-size: 20px`
  - 2x2 grid with `gap: 20px`, cards with `padding: 28px 24px`

  *Slide 06 — CTA:*
  - Brand name: `font-size: 80px; letter-spacing: 4px`
  - Tagline: `font-size: 26px`
  - CTA button: `font-size: 28px; padding: 22px 60px`
  - Sub-links: `font-size: 24px`
  - Categories: `font-size: 18px`
  - Ghost images: `width: 360-380px; opacity: 0.3; left: 60px / right: 60px`

### Content Sources (STRICT — no others)
- https://www.pokebeach.com/
- https://asia.pokemon-card.com/id/
- https://www.pokeguardian.com/

### Style References
- @tcg.dailycardfever, @collectr, @wethehobby_evolution

## Flutter App
Firebase-only stack. Architecture doc exists separately. Key rules:
- Never suggest Vercel, Supabase, or external platforms
- Security is first-class — never retrofit
- Midtrans for payments (wallet top-up model)
- Firestore atomic transactions for pack openings

## Important
- NEVER commit or share the contents of `socmed creds.txt`
- Reference images are in `images/`
