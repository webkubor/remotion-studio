import { Composition } from "remotion";
import { Main } from "./Main";

export const RAGConceptComposition = () => {
  return (
    <Composition
      id="RAGConcept"
      component={Main}
      durationInFrames={600} // 20 seconds
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
