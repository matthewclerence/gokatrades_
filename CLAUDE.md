# GokaTrades — Project Instructions

## What This Project Is
GokaTrades is an Indonesia-based Pokemon TCG business spanning educational social media content, a digital pack-opening app, and US-to-Indonesia product resale.

## Brand Identity
- **Feel:** Clean, Premium, Playful
- **Boundary:** Playful but never deceiving — honesty and transparency come first

## Visual Brain
Full brand guide: `GokaTrades_Visual_Brain.md`. Content skills load the relevant specs automatically — read it directly only when working outside the skill system.

## Branding Assets
Located in `GokaTrades branding/`:
- `goka_clean_appicon.png` — App icon
- `goka_clean_profile.png` — Profile picture
- `goka_clean_thumbnail.png` — Thumbnail
- `goka_clean_watermark.png` — Watermark overlay
- `goka_clean_youtube_banner.png` — YouTube banner
- `goka_clean_tiktok_banner.png` — TikTok banner

## Content Output
Feed posts go in `FEED POST/` organized by content title.
Reels live in `REELS/[reel-name]/` as standalone Remotion projects. Finished MP4s copy to `REELS/finished/[reel-name]/`.
Shared card imagery lives in `IMAGES/`.

## Content Commands

Type these as regular messages — NOT as /slash commands. Each command has a dedicated skill in `skills/` — read the skill's `SKILL.md` before executing.

| Command | Tag | Skill | What it does |
|---------|-----|-------|-------------|
| `createfeed cuanmingguan [topic]` | Weekly Market Movers | `skills/createfeed/SKILL.md` | 7-slide data carousel — biggest weekly gainers |
| `createfeed quicksale [topic]` | Auction / Big Sale Alert | `skills/createfeed/SKILL.md` | 3–4 slide punch carousel — @thefinecard style |
| `createfeed misc [topic]` | Loose Bucket | `skills/createfeed/SKILL.md` | 6–8 slide carousel — Pokémon vs Luxury / trivia |
| `createfeed news [topic]` | New Set / Release | `skills/createfeed/SKILL.md` | 5-slide carousel — set reveal, announcement |
| `createreels news [topic]` | Faceless News Reel | `skills/createreels/SKILL.md` | 8–15s Remotion reel — announcement / market move |
| `createreels misc [topic]` | Fun / Narrative Reel | `skills/createreels/SKILL.md` | 20–60s Remotion reel — pixel trend / GOKA VS / offbeat |
| `news` | — | `skills/news/SKILL.md` | Fetch latest Pokemon TCG updates, output in English |

### Content Sources (STRICT — no others)
- https://www.pokemon.com/us/pokemon-news
- https://www.pokemon-card.com/
- https://www.pokebeach.com/
- https://asia.pokemon-card.com/id/
- https://www.pokeguardian.com/
- https://www.tcgplayer.com/content/pokemon/articles

## Important
- NEVER commit or share the contents of `socmed creds.md`
- Reference images are in `IMAGES/`
