import { Composition } from "remotion";
import { MegaGreninjaReel, FPS, TOTAL_FRAMES } from "./components/MegaGreninjaReel";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MegaGreninjaReel"
        component={MegaGreninjaReel}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
      />
    </>
  );
};
