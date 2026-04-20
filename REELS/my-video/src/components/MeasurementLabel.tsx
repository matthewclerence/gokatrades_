import { interpolate, useCurrentFrame } from "remotion";

interface MeasurementLabelProps {
  value: string;
  label: string;
  /** X position as percentage from left */
  x?: number;
  /** Y position as percentage from top */
  y?: number;
}

export const MeasurementLabel: React.FC<MeasurementLabelProps> = ({
  value,
  label,
  x = 50,
  y = 30,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [5, 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const slideY = interpolate(frame, [5, 15], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, ${slideY}px)`,
        opacity,
        zIndex: 22,
        textAlign: "center",
      }}
    >
      <div
        style={{
          color: "#FFFFFF",
          fontSize: 48,
          fontWeight: 900,
          fontFamily: "'Space Grotesk', sans-serif",
          textShadow: "0 2px 6px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.4)",
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 26,
          fontWeight: 700,
          fontFamily: "'Space Grotesk', sans-serif",
          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
          marginTop: 2,
        }}
      >
        {label}
      </div>
    </div>
  );
};
