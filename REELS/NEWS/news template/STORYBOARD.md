# Mega Greninja ex · Premium Collection — Reel Storyboard

**Format:** Format 1 — Faceless News Reel
**Duration:** 12.5s (375 frames @ 30fps)
**Frame:** 1080 × 1920 vertical
**Category tag:** `● NEWS`
**Source carousel:** `Goka Trades Feed Posts/Mega Greninja ex Premium Collection/`

## Persistent Chrome (full reel)
- Red `GOKATRADES` pill top-left (locked logo)
- Category tag `● NEWS` with 40×2 red underline
- Footer source: `Source · PokéBeach — 16 April 2026`

## Scene Timing

| # | Scene | Range | Frames | Headline | Motion |
|---|---|---|---|---|---|
| 1 | HOOK | 0.0–3.5s | 0–105 | `MEGA GRENINJA / PREMIUM / COLLECTION` + `DATANG >>> 3 JULI` red bar | Box spring-scales in, **then bobs + tilts gently** (±14px / ±1.4° sine loop) for the hold; headline slides up, DATANG bar slams in |
| 2 | CONTENTS | 3.5–8.5s | 105–255 | `ISI BOX` (large blue-accented headline) + 4 rows w/ thumbnails | Rows slide in from right, staggered 0.8s apart between each animation start |
| 3 | CLIMAX | 8.5–11.0s | 255–330 | `3 JULI 2026` (slam) → `DROP KOMEN` (red, big) → `kamu incar atau skip?` (muted) | White flash → date spring-slams → DROP KOMEN fades in |
| 4 | CTA | 11.0–12.5s | 330–375 | `GOKATRADES` wordmark + `+ FOLLOW` pulsing button + `@gokatrades` + IG + TikTok icons | Button spring-in + sine pulse; platform row shows Instagram + TikTok logos |

## Audio Direction
- **Base track:** urgent news sting (trending Reels audio with up-arrow icon).
- **SFX hits:**
  - 0.5s — whoosh (box reveal)
  - 2.0s — deep bass drop (scene transition)
  - 4.0s — light tick on each content row (×4 staggered)
  - 8.0s — impact hit + white flash (date slam)
  - 10.5s — coin drop (CTA)

## Caption (IG/TikTok)
```
MEGA GRENINJA ex PREMIUM COLLECTION — RILIS 3 JULI 2026 💎

Kemasan premium English Set ini drop bareng set Chaos Rising. MSRP $39.99 (~Rp 650.000), kemungkinan besar masuk Indonesia lewat allocation terbatas.

📦 ISI BOX:
• 1× Promo Foil Card — alt-art Mega Greninja ex (belum pernah muncul di Jepang)
• 1× Jumbo Lenticular Display — efek 3D berubah sesuai sudut pandang
• 1× Tech Sticker Mega Greninja — reusable
• 8× Booster Packs — termasuk set Chaos Rising

⚡ Mega Greninja ex — Stage 2 · Water · HP 350
• Ability Mortal Shuriken: discard Basic Water Energy, taruh 6 damage counter di Pokemon lawan.
• Attack Ninja Spinner: 120+ damage, potensi scaling hingga 200.

Menurut kalian — masuk Indonesia atau skip? Drop komen di bawah 👇

Source: PokéBeach · 16 April 2026

Follow @gokatrades untuk info Pokemon TCG terlengkap!

#PokemonTCG #MegaGreninjaEx #PremiumCollection #ChaosRising #PokemonIndonesia #GokaTrades
```

## Render
```bash
cd "gokatrades Reels/mega-greninja-reel"
npm install
npm run dev         # Remotion Studio preview
npm run render      # Outputs out/mega-greninja-reel.mp4
```

Finished MP4 should be moved to `gokatrades Reels/finished/mega-greninja-reel/` for archival per project convention.
