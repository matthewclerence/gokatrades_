import { interpolate, useCurrentFrame } from "remotion";

interface RedCircleProps {
  /** Center X as percentage from left */
  x: number;
  /** Center Y as percentage from top */
  y: number;
  /** Radius in pixels */
  radius?: number;
  /** Frame within the scene when the circle appears */
  startFrame?: number;
}

export const RedCircle: React.FC<RedCircleProps> = ({
  x,
  y,
  radius = 60,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startFrame;

  if (localFrame < 0) return null;

  // Draw-on animation: stroke-dashoffset goes from full to 0
  const circumference = 2 * Math.PI * radius;
  const drawProgress = interpolate(localFrame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(localFrame, [0, 5], [0, 1], {
    extrapolateRight: "clamp",
  });

  const svgSize = (radius + 8) * 2;

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        opacity,
        zIndex: 21,
        pointerEvents: "none",
      }}
    >
      <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="none"
          stroke="#E53935"
          strokeWidth={5}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - drawProgress)}
          style={{
            filter: "drop-shadow(0 0 3px rgba(229, 57, 53, 0.5))",
          }}
        />
      </svg>
    </div>
  );
};
