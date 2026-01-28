import { Composition } from "remotion";
import { TechFatigue } from "./TechFatigue";
import config from "../data/config.json";
import "./index.css";

export const TechFatigueComposition = () => {
  return (
    <>
      <Composition
        id="技术疲劳吐槽"
        component={TechFatigue}
        durationInFrames={config.video.durationInFrames}
        fps={config.video.fps}
        width={config.video.width}
        height={config.video.height}
      />
    </>
  );
};
