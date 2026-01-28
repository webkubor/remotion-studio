import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { Problem } from "./scenes/Problem";
import { Solution } from "./scenes/Solution";
import { Flow } from "./scenes/Flow";
import { Result } from "./scenes/Result";

export const Main = () => {
  return (
    <AbsoluteFill className="bg-slate-950 text-white">
      {/* 规则执行：必须添加音频。尝试使用 2.wav */}
      <Audio src={staticFile("2.wav")} />
      
      <Sequence from={0} durationInFrames={120}>
        <Problem />
      </Sequence>
      <Sequence from={120} durationInFrames={150}>
        <Solution />
      </Sequence>
      <Sequence from={270} durationInFrames={210}>
        <Flow />
      </Sequence>
      <Sequence from={480} durationInFrames={120}>
        <Result />
      </Sequence>
    </AbsoluteFill>
  );
};
