import "./index.css";
import { Composition } from "remotion";
import { CardGradingReel } from "./components/CardGradingReel";
import { reelConfig } from "./reel-config";

const FPS = 30;

// Calculate total duration from all scenes
const totalDurationInFrames = reelConfig.scenes.reduce(
  (sum, scene) => sum + Math.round(scene.duration * FPS),
  0,
);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CardGradingReel"
        component={CardGradingReel}
        durationInFrames={totalDurationInFrames}
        fps={FPS}
        width={720}
        height={1280}
        defaultProps={{
          config: reelConfig,
        }}
      />
    </>
  );
};
