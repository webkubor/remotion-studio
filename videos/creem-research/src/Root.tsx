import { Composition } from "remotion";
import { Main } from "./Main";

export const CreemResearchComposition = () => {
  return (
    <Composition
      id="CreemResearch"
      component={Main}
      durationInFrames={540} // 18 seconds
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
