import { interpolate, useCurrentFrame } from "remotion";

interface CardInfoProps {
  cardName: string;
  grade?: string;
}

export const CardInfo: React.FC<CardInfoProps> = ({ cardName, grade }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const slideX = interpolate(frame, [0, 15], [-30, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 180,
        left: 16,
        opacity,
        transform: `translateX(${slideX}px)`,
        zIndex: 22,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(8px)",
          borderRadius: 8,
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: 22,
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {cardName}
        </span>
        {grade && (
          <span
            style={{
              color: "#FF4444",
              fontSize: 20,
              fontWeight: 800,
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              backgroundColor: "rgba(255,68,68,0.15)",
              padding: "4px 10px",
              borderRadius: 6,
            }}
          >
            {grade}
          </span>
        )}
      </div>
    </div>
  );
};
