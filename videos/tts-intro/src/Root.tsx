import { Composition } from "remotion";
import { Main } from "./Main";

export const TTSIntroComposition = () => {
  return (
    <Composition
      id="TTSIntro"
      component={Main}
      durationInFrames={480} // 16 seconds @ 30fps
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
