import {
  AbsoluteFill,
  Audio,
  OffthreadVideo,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";
import type { ReelConfig } from "../types";
import { reelConfig as defaultConfig } from "../reel-config";
import { HookText } from "./HookText";
import { Captions } from "./Captions";
import { MeasurementLabel } from "./MeasurementLabel";
import { RedCircle } from "./RedCircle";
import { ScreenshotOverlay } from "./ScreenshotOverlay";
import { CardInfo } from "./CardInfo";

export interface CardGradingReelProps {
  config?: ReelConfig;
}

export const CardGradingReel: React.FC<CardGradingReelProps> = ({
  config = defaultConfig,
}) => {
  const { fps } = useVideoConfig();
  const {
    hookText,
    hookDuration = 3,
    scenes,
    captions,
    measurements = [],
    annotations = [],
    screenshots = [],
    cardName,
    grade,
    hasVoiceover = true,
  } = config;

  // Calculate frame offsets for each scene
  const sceneFrames = scenes.map((s) => Math.round(s.duration * fps));
  const sceneStarts: number[] = [];
  let cumulative = 0;
  for (const f of sceneFrames) {
    sceneStarts.push(cumulative);
    cumulative += f;
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Load Space Grotesk font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />
      {/* Video scenes */}
      {scenes.map((scene, i) => (
        <Sequence
          key={`scene-${i}`}
          from={sceneStarts[i]}
          durationInFrames={sceneFrames[i]}
        >
          <AbsoluteFill>
            <OffthreadVideo
              src={staticFile(`clips/${scene.clip}`)}
              startFrom={Math.round((scene.trimStart ?? 0) * fps)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Screenshot overlays for this scene */}
            {screenshots
              .filter((s) => s.scene === i)
              .map((s, j) => (
                <ScreenshotOverlay
                  key={`screenshot-${j}`}
                  image={s.image}
                  position={s.position}
                  opacity={s.opacity}
                />
              ))}

            {/* Measurement overlays for this scene */}
            {measurements
              .filter((m) => m.scene === i)
              .map((m, j) => (
                <MeasurementLabel
                  key={`measure-${j}`}
                  value={m.value}
                  label={m.label}
                  x={m.x}
                  y={m.y}
                />
              ))}

            {/* Red circle annotations for this scene */}
            {annotations
              .filter((a) => a.scene === i)
              .map((a, j) => (
                <RedCircle
                  key={`circle-${j}`}
                  x={a.x}
                  y={a.y}
                  radius={a.radius}
                  startFrame={a.startFrame}
                />
              ))}
          </AbsoluteFill>
        </Sequence>
      ))}

      {/* Hook text overlay */}
      <Sequence from={0} durationInFrames={Math.round(hookDuration * fps)}>
        <HookText
          text={hookText}
          durationInFrames={Math.round(hookDuration * fps)}
        />
      </Sequence>

      {/* Card info lower-third on the second scene (card front reveal) */}
      {cardName && scenes.length > 1 && (
        <Sequence from={sceneStarts[1]} durationInFrames={sceneFrames[1]}>
          <CardInfo cardName={cardName} grade={grade} />
        </Sequence>
      )}

      {/* Captions run the full duration */}
      <Captions words={captions} />

      {/* Voiceover audio */}
      {hasVoiceover && (
        <Sequence from={0}>
          <Audio src={staticFile("clips/voiceover.mp3")} />
        </Sequence>
      )}
    </AbsoluteFill>
  );
};
