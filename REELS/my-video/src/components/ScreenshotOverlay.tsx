import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";

interface ScreenshotOverlayProps {
  image: string;
  position: "full" | "top" | "inset";
  opacity?: number;
}

export const ScreenshotOverlay: React.FC<ScreenshotOverlayProps> = ({
  image,
  position,
  opacity = 1,
}) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 8], [0, opacity], {
    extrapolateRight: "clamp",
  });

  const styles: React.CSSProperties =
    position === "full"
      ? {
          position: "absolute",
          inset: 0,
          zIndex: 5,
          opacity: fadeIn,
        }
      : position === "top"
        ? {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "55%",
            zIndex: 5,
            opacity: fadeIn,
          }
        : {
            position: "absolute",
            top: 40,
            right: 20,
            width: "45%",
            zIndex: 5,
            opacity: fadeIn,
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          };

  return (
    <div style={styles}>
      <Img
        src={staticFile(`images/${image}`)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: position === "inset" ? "contain" : "cover",
        }}
      />
    </div>
  );
};
