import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import type { CaptionWord } from "../types";

interface CaptionsProps {
  words: CaptionWord[];
}

export const Captions: React.FC<CaptionsProps> = ({ words }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = frame / fps;

  if (words.length === 0) return null;

  // Find the active word
  const activeIndex = words.findIndex(
    (w) => currentTime >= w.start && currentTime < w.end,
  );

  if (activeIndex === -1) return null;

  // Show a window of words around the active one
  const windowStart = Math.max(0, activeIndex - 2);
  const windowEnd = Math.min(words.length, activeIndex + 3);
  const visible = words.slice(windowStart, windowEnd);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 100,
        left: 16,
        right: 16,
        display: "flex",
        justifyContent: "center",
        zIndex: 25,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "4px 7px",
          maxWidth: 620,
        }}
      >
        {visible.map((word) => {
          const isActive =
            currentTime >= word.start && currentTime < word.end;
          const wordStartFrame = Math.round(word.start * fps);
          const localFrame = frame - wordStartFrame;

          const scale = isActive
            ? interpolate(localFrame, [0, 3], [1.12, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              })
            : 1;

          return (
            <span
              key={`${word.start}-${word.text}`}
              style={{
                color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                fontSize: 34,
                fontWeight: 800,
                fontFamily: "'Space Grotesk', sans-serif",
                textShadow:
                  "0 2px 8px rgba(0,0,0,0.85), 0 0 24px rgba(0,0,0,0.5)",
                transform: `scale(${scale})`,
              }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};
