import type { ReelConfig } from "./types";

// Auto-generated for: psa 8 ceruledge jp (v6)
// Card: 2024 POKEMON SV8 JP #109 — CERULEDGE — ART RARE — NM-MT 8
// Cert: 114705739
// Flaw: Print lines on "K" and "E" in Pokemon text (card back)

export const reelConfig: ReelConfig = {
  hookText: "Apakah Ceruledge Jepang ini\nlayak lebih dari PSA 8?",
  hookDuration: 3,
  hasVoiceover: false,

  scenes: [
    // 1. Reveal — hand bringing slab into frame (FIRST)
    { clip: "reveal.mp4", duration: 4 },
    // 2. Front showcase — card front, tilting, holo shine
    { clip: "front_showcase.mp4", duration: 8 },
    // 3. Flip to back — continuous front-to-back flip from raw video
    { clip: "flip_to_back.mp4", duration: 6 },
    // 4. Centering tool — photo no.5 showing front centering data
    { clip: "centering.mp4", duration: 4 },
    // 5. Flaw — photo showing K and E print lines (full view, static)
    { clip: "flaw_zoom.mp4", duration: 4 },
    // 6. Verdict — closing
    { clip: "verdict.mp4", duration: 2 },
  ],

  captions: [],

  measurements: [
    {
      scene: 3,
      value: "L|R 52.6% | 47.4%",
      label: "Centering kiri-kanan",
      x: 50,
      y: 18,
    },
    {
      scene: 3,
      value: "T|B 46.4% | 53.6%",
      label: "Centering atas-bawah",
      x: 50,
      y: 30,
    },
    {
      scene: 4,
      value: "Print Lines",
      label: "pada huruf 'K' dan 'E' di Pokemon",
      x: 50,
      y: 82,
    },
  ],

  annotations: [
    // Red circle on flaw scene highlighting the K and é area
    { scene: 4, x: 45, y: 58, radius: 55, startFrame: 15 },
  ],

  screenshots: [],

  cardName: "Ceruledge #109 Art Rare",
  grade: "PSA 8",
};
