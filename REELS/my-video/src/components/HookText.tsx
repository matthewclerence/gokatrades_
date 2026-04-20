import { interpolate, useCurrentFrame } from "remotion";

interface HookTextProps {
  text: string;
  durationInFrames: number;
}

export const HookText: React.FC<HookTextProps> = ({
  text,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 8, durationInFrames - 12, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateRight: "clamp" },
  );

  const scale = interpolate(frame, [0, 10], [0.92, 1], {
    extrapolateRight: "clamp",
  });

  if (frame >= durationInFrames) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: 50,
        left: 24,
        right: 24,
        display: "flex",
        justifyContent: "center",
        opacity,
        transform: `scale(${scale})`,
        zIndex: 20,
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          borderRadius: 10,
          padding: "18px 24px",
          maxWidth: 660,
          boxShadow: "0 4px 24px rgba(0,0,0,0.6)",
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 38,
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            textAlign: "center",
            lineHeight: 1.15,
            whiteSpace: "pre-line",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
