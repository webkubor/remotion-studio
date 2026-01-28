import "./index.css";
import { Composition } from "remotion";
import { SkillsIntro } from "../SkillsIntro";
import { AppleColors } from "../../../packages/assets/colors/apple";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Skills 技术分享视频 */}
      <Composition
        id="SkillsIntro"
        component={SkillsIntro}
        durationInFrames={750}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          colors: AppleColors,
        }}
      />
    </>
  );
};
