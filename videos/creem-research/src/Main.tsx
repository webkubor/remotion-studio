import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { Scene1 } from "./scenes/Scene1";
import { Scene2 } from "./scenes/Scene2";
import { Scene3 } from "./scenes/Scene3";
import { Scene4 } from "./scenes/Scene4";

export const Main = () => {
  return (
    <AbsoluteFill className="bg-slate-950 text-white">
      {/* 遵循规则：默认添加音频 */}
      <Audio src={staticFile("1.wav")} />
      
      <Sequence from={0} durationInFrames={120}>
        <Scene1 />
      </Sequence>
      <Sequence from={120} durationInFrames={150}>
        <Scene2 />
      </Sequence>
      <Sequence from={270} durationInFrames={150}>
        <Scene3 />
      </Sequence>
      <Sequence from={420} durationInFrames={120}>
        <Scene4 />
      </Sequence>
    </AbsoluteFill>
  );
};
