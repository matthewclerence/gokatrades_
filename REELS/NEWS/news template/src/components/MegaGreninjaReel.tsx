import {
  AbsoluteFill,
  Sequence,
  Img,
  staticFile,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const FPS = 30;

// Scene durations in seconds (Format 1 Faceless News Reel, 12.5s total)
const SCENES = {
  hook: 3.5,      // 0–3.5s     cold open + hook (held longer for read)
  contents: 5,    // 3.5–8.5s   box contents grid w/ thumbnails
  climax: 2.5,    // 8.5–11s    release date slam + DROP KOMEN
  cta: 1.5,       // 11–12.5s   Follow CTA w/ IG + TikTok
};

const toFrames = (s: number) => Math.round(s * FPS);

const S_HOOK = 0;
const S_CONTENTS = S_HOOK + toFrames(SCENES.hook);
const S_CLIMAX = S_CONTENTS + toFrames(SCENES.contents);
const S_CTA = S_CLIMAX + toFrames(SCENES.climax);

export const TOTAL_FRAMES = S_CTA + toFrames(SCENES.cta);

// ── Brand tokens ───────────────────────────────────────────────
const COLORS = {
  bgTop: "#0A0E14",
  bgBot: "#121821",
  red: "#FF3B3B",
  green: "#00E676",
  amber: "#FF9500",
  blue: "#3BA4FF",
  white: "#FFFFFF",
  mutedWhite: "rgba(255,255,255,0.6)",
  footer: "rgba(255,255,255,0.4)",
};

const FONT_STACK =
  '"Space Grotesk", "Inter", system-ui, -apple-system, Segoe UI, sans-serif';

// ── Reusable chrome ────────────────────────────────────────────

const Background: React.FC = () => (
  <AbsoluteFill
    style={{
      background: `linear-gradient(180deg, ${COLORS.bgTop} 0%, ${COLORS.bgBot} 100%)`,
    }}
  >
    {/* Soft blue water-glow ambient (Mega Greninja water theme) */}
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse 900px 700px at 50% 40%, rgba(59,164,255,0.18) 0%, rgba(59,164,255,0.06) 40%, transparent 72%)",
        pointerEvents: "none",
      }}
    />
  </AbsoluteFill>
);

const Logo: React.FC = () => (
  <div
    style={{
      position: "absolute",
      top: 60,
      left: 60,
      display: "inline-flex",
      alignItems: "center",
      background: COLORS.red,
      color: COLORS.white,
      padding: "14px 24px",
      borderRadius: 12,
      fontFamily: FONT_STACK,
      fontWeight: 700,
      fontSize: 28,
      letterSpacing: 2,
      textTransform: "uppercase",
      boxShadow: "0 8px 30px rgba(255,59,59,0.35)",
      zIndex: 50,
    }}
  >
    GOKATRADES
  </div>
);

const CategoryTag: React.FC<{ symbol: string; label: string; sub?: string }> = ({
  symbol,
  label,
  sub,
}) => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        top: 170,
        left: 60,
        zIndex: 40,
        opacity: fadeIn,
      }}
    >
      <div
        style={{
          fontFamily: FONT_STACK,
          color: COLORS.red,
          fontWeight: 700,
          fontSize: 30,
          letterSpacing: 5,
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <span style={{ fontSize: 22 }}>{symbol}</span>
        <span>{label}</span>
        {sub && (
          <span style={{ color: COLORS.mutedWhite, fontWeight: 600 }}>
            ⟨{sub}⟩
          </span>
        )}
      </div>
      <div
        style={{
          width: 40,
          height: 2,
          background: COLORS.red,
          marginTop: 10,
        }}
      />
    </div>
  );
};

const Source: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      position: "absolute",
      bottom: 80,
      left: 60,
      right: 60,
      fontFamily: FONT_STACK,
      color: COLORS.footer,
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: 3,
      textTransform: "uppercase",
      zIndex: 40,
    }}
  >
    {text}
  </div>
);

// ── Scene 1 · HOOK (0–2s) ──────────────────────────────────────

const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const boxScale = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 80 },
    from: 0.7,
    to: 1,
  });
  const boxOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [14, 28], [80, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineOpacity = interpolate(frame, [14, 28], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subY = interpolate(frame, [28, 42], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [28, 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Gentle floating bob + sway, blended in after spring settles (~frame 22)
  const floatBlend = interpolate(frame, [22, 38], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const floatY = Math.sin(frame / 18) * 14 * floatBlend;
  const tilt = Math.sin(frame / 22) * 1.4 * floatBlend;

  return (
    <AbsoluteFill>
      {/* Box hero centered */}
      <div
        style={{
          position: "absolute",
          top: 360,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: boxOpacity,
          transform: `translateY(${floatY}px) scale(${boxScale}) rotate(${tilt}deg)`,
          filter:
            "drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 100px rgba(59,164,255,0.45))",
        }}
      >
        <Img
          src={staticFile("assets/box_cutout.png")}
          style={{ width: 780, height: "auto" }}
        />
      </div>

      {/* Headline */}
      <div
        style={{
          position: "absolute",
          bottom: 480,
          left: 60,
          right: 60,
          transform: `translateY(${headlineY}px)`,
          opacity: headlineOpacity,
        }}
      >
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.white,
            fontWeight: 700,
            fontSize: 140,
            lineHeight: 0.9,
            letterSpacing: -4,
            textTransform: "uppercase",
            textShadow: "0 8px 40px rgba(0,0,0,0.9)",
          }}
        >
          <span style={{ color: COLORS.blue }}>MEGA GRENINJA</span>
          <br />
          PREMIUM
          <br />
          <span style={{ color: COLORS.red }}>COLLECTION</span>
        </div>
      </div>

      {/* Sub bar */}
      <div
        style={{
          position: "absolute",
          bottom: 380,
          left: 60,
          transform: `translateY(${subY}px)`,
          opacity: subOpacity,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 22,
            background: COLORS.red,
            color: COLORS.white,
            padding: "18px 36px 14px",
            fontFamily: FONT_STACK,
            fontWeight: 700,
            fontSize: 56,
            letterSpacing: 10,
            textTransform: "uppercase",
          }}
        >
          DATANG <span style={{ letterSpacing: 0 }}>&gt;&gt;&gt;</span> 3 JULI
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 2 · CONTENTS (2–7s) ──────────────────────────────────

const ContentRow: React.FC<{
  img: string;
  qty: string;
  qtyUnit: string;
  name: string;
  desc: string;
  delay: number;
}> = ({ img, qty, qtyUnit, name, desc, delay }) => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [delay, delay + 10], [100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [delay, delay + 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "200px 1fr auto",
        gap: 30,
        alignItems: "center",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 22,
        padding: "22px 28px",
        transform: `translateX(${x}px)`,
        opacity,
      }}
    >
      <div
        style={{
          width: 200,
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.03)",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <Img
          src={staticFile(`assets/${img}`)}
          style={{
            maxWidth: "92%",
            maxHeight: "92%",
            objectFit: "contain",
            filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.55))",
          }}
        />
      </div>
      <div>
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.white,
            fontWeight: 700,
            fontSize: 44,
            letterSpacing: -0.5,
            textTransform: "uppercase",
            lineHeight: 1.05,
            marginBottom: 8,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.mutedWhite,
            fontWeight: 500,
            fontSize: 26,
            lineHeight: 1.3,
          }}
        >
          {desc}
        </div>
      </div>
      <div
        style={{
          fontFamily: FONT_STACK,
          color: COLORS.blue,
          fontWeight: 700,
          fontSize: 92,
          lineHeight: 1,
          letterSpacing: -2,
          textAlign: "right",
          minWidth: 110,
        }}
      >
        {qty}
        <div
          style={{
            fontSize: 18,
            color: COLORS.mutedWhite,
            letterSpacing: 3,
            fontWeight: 700,
            textTransform: "uppercase",
            marginTop: -4,
          }}
        >
          {qtyUnit}
        </div>
      </div>
    </div>
  );
};

const SceneContents: React.FC = () => {
  const frame = useCurrentFrame();
  const headerOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 320,
          left: 60,
          right: 60,
          opacity: headerOpacity,
        }}
      >
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.white,
            fontWeight: 700,
            fontSize: 140,
            letterSpacing: -4,
            lineHeight: 1,
            textTransform: "uppercase",
          }}
        >
          ISI <span style={{ color: COLORS.blue }}>BOX</span>
        </div>
        <div
          style={{
            width: 80,
            height: 3,
            background: COLORS.red,
            marginTop: 18,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 640,
          left: 60,
          right: 60,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        <ContentRow
          img="promos_cutout.png"
          qty="1"
          qtyUnit="KARTU"
          name="PROMO FOIL"
          desc="Alt-art Mega Greninja ex — belum muncul di Jepang"
          delay={6}
        />
        <ContentRow
          img="promo_card.webp"
          qty="1"
          qtyUnit="DISPLAY"
          name="JUMBO LENTICULAR"
          desc="Efek 3D berubah sesuai sudut pandang"
          delay={30}
        />
        <ContentRow
          img="sticker.webp"
          qty="1"
          qtyUnit="STICKER"
          name="TECH STICKER"
          desc="Reusable — untuk laptop atau case"
          delay={54}
        />
        <ContentRow
          img="boosters_cutout.png"
          qty="8"
          qtyUnit="PACKS"
          name="BOOSTER PACKS"
          desc="Termasuk set Chaos Rising (rilis Mei 2026)"
          delay={78}
        />
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 3 · CLIMAX (7–9.5s) ──────────────────────────────────

const SceneClimax: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const flash = interpolate(frame, [0, 4, 10], [0.9, 0.3, 0], {
    extrapolateRight: "clamp",
  });
  const dateSpring = spring({
    frame: Math.max(0, frame - 4),
    fps,
    config: { damping: 11, stiffness: 130 },
    from: 1.6,
    to: 1,
  });
  const questionOpacity = interpolate(frame, [30, 48], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      {/* White flash into slam */}
      <AbsoluteFill
        style={{
          background: "#fff",
          opacity: flash,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 420,
          left: 60,
          right: 60,
          textAlign: "center",
          transform: `scale(${dateSpring})`,
        }}
      >
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.mutedWhite,
            fontWeight: 700,
            fontSize: 40,
            letterSpacing: 10,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          RILIS RESMI
        </div>
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.white,
            fontWeight: 700,
            fontSize: 360,
            lineHeight: 0.88,
            letterSpacing: -14,
          }}
        >
          3 <span style={{ color: COLORS.blue }}>JULI</span>
        </div>
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.white,
            fontWeight: 700,
            fontSize: 140,
            letterSpacing: 12,
            marginTop: 4,
          }}
        >
          2026
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 240,
          left: 60,
          right: 60,
          textAlign: "center",
          opacity: questionOpacity,
        }}
      >
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.red,
            fontWeight: 700,
            fontSize: 110,
            letterSpacing: -2,
            textTransform: "uppercase",
            lineHeight: 1,
            textShadow:
              "0 0 30px rgba(255,59,59,0.45), 0 6px 24px rgba(0,0,0,0.6)",
          }}
        >
          DROP KOMEN
        </div>
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.mutedWhite,
            fontWeight: 600,
            fontSize: 34,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginTop: 20,
          }}
        >
          kamu incar atau skip?
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 4 · CTA (12–13.5s) ───────────────────────────────────

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 72 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="ig-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="50%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#515BD4" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#ig-grad)" />
    <rect
      x="12"
      y="12"
      width="40"
      height="40"
      rx="10"
      fill="none"
      stroke="#fff"
      strokeWidth="3.5"
    />
    <circle
      cx="32"
      cy="32"
      r="9"
      fill="none"
      stroke="#fff"
      strokeWidth="3.5"
    />
    <circle cx="46" cy="18" r="2.4" fill="#fff" />
  </svg>
);

const TikTokIcon: React.FC<{ size?: number }> = ({ size = 72 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <rect x="4" y="4" width="56" height="56" rx="14" fill="#000" />
    {/* Cyan shadow */}
    <path
      d="M38 15c0 5 3 9 8 10v6c-3 0-6-1-8-2v12a11 11 0 1 1-11-11v6a5 5 0 1 0 5 5V15h6z"
      fill="#25F4EE"
      transform="translate(-2 -2)"
    />
    {/* Red shadow */}
    <path
      d="M38 15c0 5 3 9 8 10v6c-3 0-6-1-8-2v12a11 11 0 1 1-11-11v6a5 5 0 1 0 5 5V15h6z"
      fill="#FE2C55"
      transform="translate(2 2)"
    />
    {/* White top */}
    <path
      d="M38 15c0 5 3 9 8 10v6c-3 0-6-1-8-2v12a11 11 0 1 1-11-11v6a5 5 0 1 0 5 5V15h6z"
      fill="#fff"
    />
  </svg>
);


const SceneCta: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const buttonSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 120 },
    from: 0.8,
    to: 1,
  });
  const pulse = 1 + Math.sin(frame / 4) * 0.03;

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          top: 620,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.white,
            fontWeight: 700,
            fontSize: 170,
            letterSpacing: -4,
            lineHeight: 0.9,
          }}
        >
          GOKA
          <span
            style={{
              color: COLORS.blue,
              textShadow:
                "0 0 40px rgba(59,164,255,0.7), 0 0 90px rgba(59,164,255,0.4)",
            }}
          >
            TRADES
          </span>
        </div>
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.mutedWhite,
            fontWeight: 600,
            fontSize: 28,
            letterSpacing: 5,
            textTransform: "uppercase",
            marginTop: 20,
          }}
        >
          Pokémon TCG · Indonesia
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 440,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: COLORS.red,
            color: COLORS.white,
            padding: "32px 64px",
            borderRadius: 100,
            fontFamily: FONT_STACK,
            fontWeight: 700,
            fontSize: 52,
            letterSpacing: 4,
            textTransform: "uppercase",
            transform: `scale(${buttonSpring * pulse})`,
            boxShadow:
              "0 0 60px rgba(255,59,59,0.5), 0 14px 40px rgba(0,0,0,0.45)",
          }}
        >
          + FOLLOW
        </div>
        <div
          style={{
            fontFamily: FONT_STACK,
            color: COLORS.white,
            fontWeight: 700,
            fontSize: 56,
            letterSpacing: 2,
            marginTop: 30,
          }}
        >
          @gokatrades
        </div>

        {/* Platform row — IG + TikTok */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 48,
            marginTop: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: FONT_STACK,
              color: COLORS.white,
              fontWeight: 700,
              fontSize: 32,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            <InstagramIcon size={80} />
            <span>INSTAGRAM</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: FONT_STACK,
              color: COLORS.white,
              fontWeight: 700,
              fontSize: 32,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            <TikTokIcon size={80} />
            <span>TIKTOK</span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ── Master composition ─────────────────────────────────────────

export const MegaGreninjaReel: React.FC = () => {
  return (
    <AbsoluteFill style={{ fontFamily: FONT_STACK }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Background />

      {/* Persistent chrome */}
      <Logo />
      <CategoryTag symbol="●" label="NEWS" />
      <Source text="Source · PokéBeach — 16 April 2026" />

      {/* Scenes */}
      <Sequence from={S_HOOK} durationInFrames={toFrames(SCENES.hook)}>
        <SceneHook />
      </Sequence>
      <Sequence from={S_CONTENTS} durationInFrames={toFrames(SCENES.contents)}>
        <SceneContents />
      </Sequence>
      <Sequence from={S_CLIMAX} durationInFrames={toFrames(SCENES.climax)}>
        <SceneClimax />
      </Sequence>
      <Sequence from={S_CTA} durationInFrames={toFrames(SCENES.cta)}>
        <SceneCta />
      </Sequence>
    </AbsoluteFill>
  );
};
