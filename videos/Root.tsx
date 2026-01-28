import { SkillsIntroComposition } from "./skills-intro/src/Root";
import { TechFatigueComposition } from "./tech-fatigue/src/Root";
import { TTSIntroComposition } from "./tts-intro/src/Root";
import { CreemResearchComposition } from "./creem-research/src/Root";
import { RAGConceptComposition } from "./rag-concept/src/Root";

export const Root = () => {
  return (
    <>
      <SkillsIntroComposition />
      <TechFatigueComposition />
      <TTSIntroComposition />
      <CreemResearchComposition />
      <RAGConceptComposition />
    </>
  );
};
