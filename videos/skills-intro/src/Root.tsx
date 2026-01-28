import "./index.css";
import { Composition } from "remotion";
import { SkillsIntro, type SkillsIntroProps } from "../SkillsIntro";
import skillsIntroConfig from "../data/skills-intro.json";

// Each <Composition> is an entry in the sidebar!

export const SkillsIntroComposition = () => {
  return (
    <>
      <Composition
        id="技术分享系列"
        component={SkillsIntro}
        durationInFrames={skillsIntroConfig.video.durationInFrames}
        fps={skillsIntroConfig.video.fps}
        width={skillsIntroConfig.video.width}
        height={skillsIntroConfig.video.height}
        defaultProps={{
          config: skillsIntroConfig,
        } satisfies SkillsIntroProps}
      />
    </>
  );
};
