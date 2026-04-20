# createreels — GokaTrades Short-Form Video Production System

## Invocation

Type as plain messages (not `/slash`):

| Command | Tag folder | Produces |
|---|---|---|
| `createreels news [topic]` | `REELS/NEWS/` | 8–15s Remotion reel — set reveal / announcement / market move |
| `createreels misc [topic]` | `REELS/MISC/` | 20–60s Remotion reel — pixel trend, GOKA VS, offbeat |

**Folder convention (every tag):**
```
REELS/[TAG]/
├── [tag] template/          ← reference material (MP4 or full Remotion project)
└── [Reel Name]/             ← each new reel lives here as a sibling
```

New reels go to `REELS/[TAG]/[Reel Name]/` as their own standalone Remotion project. Finished `.mp4` can optionally be archived to `REELS/finished/[Reel Name]/`.

---

## GLOBAL RULES (apply to every tag)

### Images — single source of truth
All card art, booster packs, stickers, logos, and other visual assets originate in the central `IMAGES/` folder at the repo root.

- ❌ **NEVER** originate new card art directly inside a reel's `public/assets/` — it must come from `IMAGES/` first
- ❌ **NEVER** create a per-tag `images/` folder inside `REELS/[TAG]/`
- ✅ Drop new art into `IMAGES/`, then **copy** (not move) the specific files a reel needs into that reel's `public/assets/` folder — Remotion's `staticFile()` convention requires assets in `public/`
- ✅ Keep `IMAGES/<filename>` as the canonical original; `public/assets/<filename>` is the reel-local copy for rendering

This keeps every asset reusable across reels AND feed posts while respecting Remotion's asset loading.

### Frame + format
- **Frame:** 1080 × 1920 vertical
- **FPS:** 30 (60 for complex animations)
- **Codec:** MP4 / H.264
- **File size:** < 100 MB
- **Safe zone:** center 1080 × 1600 (avoid IG UI chrome)
- **First frame MUST work as standalone thumbnail** — it becomes the Reels grid cover

### Persona
- **FACELESS** — no on-camera host, ever. We are a brand, not a personality.
- Audio default: trending Reels sound (up-arrow icon on IG). Voiceover optional — start without.

### Brand chrome on every reel
- **Red `GOKATRADES` pill top-left** — locked logo
- **Footer source line** — `Source · <publisher> — <date>` in muted white
- **Final frame MUST carry** — `GOKATRADES` wordmark + `+ FOLLOW` pulsing button + `@gokatrades` handle + IG + TikTok icon row

### Palette
| Token | Hex | Use |
|---|---|---|
| BG | `#0A0E14 → #121821` | Dark gradient backdrop (the ONE gradient exception for reels — never for feed) |
| Red | `#FF3B3B` | Brand pill, urgency |
| Breaking red | `#FF0000` | Breaking news only |
| Green | `#00E676` | Price UP / positive |
| Amber | `#FF9500` | Price DROP |
| White primary | `#FFFFFF` | Headlines |
| White muted | `rgba(255,255,255,0.60)` | Secondary body |
| White footer | `rgba(255,255,255,0.40)` | Source line |

### Typography
- **Headlines:** Inter Bold or Space Grotesk Bold, ALL CAPS
- **Size:** headlines 12–14% of frame height; body 5–7%
- **Legibility:** subtle 3px dark drop shadow
- **Never:** letter-by-letter typewriter on body text

### Motion
- Loops seamless
- **ONE motion element per frame MAX**
- Slow confident pacing — NEVER TikTok chaos
- ALWAYS easing: `ease-out` for entries, `ease-in` for exits, NEVER linear
- Hold key frames 0.8–1.2s so viewers can read
- Motion reinforces content — up-arrow for price rises, shimmer for holos, zoom for detail

### Voice
- **Bahasa Indonesia** for all on-screen text and captions
- Short, punchy. Headlines ALL CAPS
- End caption with a question to drive comments

### Non-negotiable rules
- NO on-camera host
- Never exceed 60s (sweet spot 8–15s for `news`, 20–40s for `misc`)
- Final frame MUST have Follow CTA
- No CapCut/editor watermarks
- Always ship the carousel version alongside the Reel when the source is a carousel

---

## TAG 1 — `createreels news [topic]`

**Purpose:** Repurpose a news carousel (or a fresh news hit) into a fast-punch faceless reel. Set reveals, market moves, card announcements.

**Tag folder:** `REELS/NEWS/`
**Reference:** `REELS/NEWS/news template/` — full Remotion project skeleton (copy-from source)

### Duration
**8–15s** sweet spot. Ship at 12.5s (375 frames) by default unless the story is trivially shorter.

### Structure (4 scenes)

| # | Scene | Range | Headline | Motion |
|---|---|---|---|---|
| 1 | **HOOK** | 0.0 – 3.5s | 3-line hook (same ≤9-char sacred sizing feel) + red bar date / price pill | Box spring-scales in, bobs + tilts gently (±14px / ±1.4° sine loop), headline slides up, bar slams |
| 2 | **CONTENTS** | 3.5 – 8.5s | Section headline + 3–4 info rows with thumbnails | Rows slide from right, **0.8s stagger** between each |
| 3 | **CLIMAX** | 8.5 – 11.0s | Date slam → `DROP KOMEN` (red, big) → muted CTA question | White flash → spring-slam → fade-in |
| 4 | **CTA** | 11.0 – 12.5s | `GOKATRADES` wordmark + `+ FOLLOW` pulsing + `@gokatrades` + IG + TikTok icon row | Button spring-in + sine pulse |

### Audio beats (default)
- 0.5s — whoosh (box reveal)
- 2.0s — deep bass drop (scene transition)
- 4.0s — light tick on each content row (×4 staggered)
- 8.0s — impact hit + white flash (date slam)
- 10.5s — coin drop (CTA)

### Remotion project scaffold
Each news reel is its own standalone Remotion project inside `REELS/NEWS/[Reel Name]/`:

```
REELS/NEWS/[Reel Name]/
├── package.json
├── tsconfig.json
├── remotion.config.ts
├── STORYBOARD.md       ← required: timing + copy + motion beats
├── public/assets/      ← card cutouts, box cutouts, stickers, goka_appicon.png
└── src/
    ├── index.ts
    ├── Root.tsx        ← single <Composition id="..." .../>
    └── components/
        └── [ReelName].tsx   ← scene composition
```

Copy-from template: `REELS/NEWS/news template/`.

### Execution

1. **Identify source** — either a published carousel in `FEED POST/NEWS/[topic]/` or a fresh news hit from the allowed sources.
2. **Write `STORYBOARD.md`** first: format, duration, frame count, scene table, audio beats, caption. Mirror `REELS/NEWS/news template/STORYBOARD.md`.
3. **Bootstrap Remotion project** — copy `REELS/NEWS/news template/` folder structure into `REELS/NEWS/[Reel Name]/` (exclude `node_modules`, regenerate with `npm install`).
4. **Update assets** in `public/assets/` — hero card cutout, box cutout if product, any stickers.
5. **Rewrite the single component** in `src/components/` with new copy + timing — keep the 4-scene skeleton.
6. **Preview:** `npm run dev` (Remotion Studio).
7. **Render:** `npm run render` → `out/[reel-name].mp4`.
8. **Archive final** to `REELS/finished/[Reel Name]/` (optional).

### Carousel → Reel conversion map
- Carousel slide 1 hook → Reel cold open (scene 1)
- Carousel climax slide → Reel 8–10s mark (scene 3)
- Carousel CTA slide → Reel final frame (scene 4)
- Carousel 5–8 middle slides → compressed into 3–4 beats @ 0.8–1.2s each (scene 2)

Result: 1 idea = 1 carousel + 1 Reel + 1 Story = 3× distribution for ~1.3× work.

---

## TAG 2 — `createreels misc [topic]`

**Purpose:** Loose bucket for fun / narrative / offbeat reels. Pixel retro storytelling, Pokemon vs Luxury compares, trivia, trend remixes.

**Tag folder:** `REELS/MISC/`
**References:**
- `REELS/MISC/misc template # 1/` — reference MP4 (Japanese collector style)
- `REELS/MISC/misc template # 2/` — reference MP4 (trend-pixel retro narrative)

Use both as visual inspiration. Neither is a full Remotion project yet — first invocation bootstraps the project.

### Duration
**20–60s.** Pixel trend narrative runs ~54s with 7 scenes. GOKA VS tentpoles run 25–30s. Keep under 60s.

### Structure — flexible, three sub-formats

#### Sub-format A — Pixel Narrative (trend-pixel baseline)
Retro NES-style palette (red/yellow/cream/blue/black), Press Start 2P + VT323 fonts, chunky pixel wipes, color-block scene transitions.

7 scenes: HOOK → BACKSTORY → TURNING POINT → CONDITION → WHY → UPCOMING → CTA.

Use when: storytelling about a card's history, price arc, or cultural moment.

#### Sub-format B — GOKA VS Animated (monthly tentpole)
Compare Pokémon cards to luxury assets (cars, watches, real estate, stocks, gold, crypto).

25–30s. Structure:
- 0–2s — Cold open: hook question + dramatic music
- 2–5s — Round 1: lowest tier pairing
- 5–10s — Round 2: mid tier
- 10–15s — Round 3: high tier
- 15–22s — Climax: biggest multiplier (e.g. "30×")
- 22–27s — CTA: "Kalian pilih MOBIL atau KARTU?"
- 27–30s — Logo + Follow

Use when: status / rarity / value comparisons against real-world luxe.

#### Sub-format C — Freestyle
Trend remixes, trivia grids, meme formats. Must still obey global rules (faceless, BI captions, Follow CTA, under 60s).

### Execution

1. **ASK THE USER FIRST — required every invocation:**
   > "Which misc template — `# 1` (Japanese collector style MP4) or `# 2` (trend-pixel retro narrative MP4)? Or freestyle?"

   Do NOT proceed until the user picks one of: `1`, `2`, or `freestyle`. This question is mandatory — never assume.
2. **Pick sub-format** based on the user's answer:
   - `# 1` → typically Sub-format C (freestyle / collector storytelling) or A depending on topic
   - `# 2` → Sub-format A (Pixel Narrative)
   - `freestyle` → Sub-format B (GOKA VS) or C (anything else)
3. **Watch the chosen MP4** at `REELS/MISC/misc template # [N]/` for visual cues.
4. **Write `STORYBOARD.md`** with scene table, duration, audio direction, caption.
5. **Bootstrap** a new Remotion project at `REELS/MISC/[Reel Name]/` (use any sibling reel with a working `package.json` as the scaffold — e.g. copy the news template's project structure).
6. **Customize** component(s), assets, timing per sub-format.
7. **Preview + render** via Remotion.
8. **Archive** → `REELS/finished/[Reel Name]/` (optional).

---

## Programmatic Generation Priorities
High-ROI automation targets (in order):
1. Daily price-movers reel from TCGplayer data (`cuanmingguan` carousel → `news` reel bridge)
2. Spoiler card reels from card image + stats
3. GOKA VS reels from pairing arrays
4. Pixel trend narrative from a card's price history

---

## Content Sources (STRICT — no others)
- https://www.pokemon.com/us/pokemon-news
- https://www.pokemon-card.com/
- https://www.pokebeach.com/
- https://asia.pokemon-card.com/id/
- https://www.pokeguardian.com/
- https://www.tcgplayer.com/content/pokemon/articles

Any claim in a reel — set name, date, price, pop count — must be traceable to one of these six.

---

## Metrics (priority order)
1. **Completion rate** (target >60%)
2. Replay rate
3. **Shares** (7× weighted on IG's algorithm)
4. Saves
5. Comments
6. Follow rate from Reels

---

## Pre-ship Quality Checklist

Before declaring a reel done:

- [ ] 1080 × 1920 @ 30fps
- [ ] Under 60s (sweet spot 8–15s news / 20–40s misc)
- [ ] First frame works as thumbnail
- [ ] Red `GOKATRADES` pill top-left on every frame
- [ ] All on-screen copy in Bahasa Indonesia
- [ ] No on-camera host (faceless)
- [ ] Final frame has `+ FOLLOW` CTA + handle + IG + TikTok icons
- [ ] One motion element per frame max
- [ ] No editor watermarks (CapCut etc.)
- [ ] Source line in footer
- [ ] All data traceable to allowed sources
- [ ] MP4 < 100 MB
- [ ] Reel lives at `REELS/[TAG]/[Reel Name]/`
- [ ] Every asset in `public/assets/` originated in the central `IMAGES/` folder (no orphan card art)

If any checkbox fails, fix before shipping.
