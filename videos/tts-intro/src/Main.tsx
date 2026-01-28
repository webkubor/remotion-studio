import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { Intro } from "./scenes/Intro";
import { Definition } from "./scenes/Definition";
import { Mechanism } from "./scenes/Mechanism";
import { Outro } from "./scenes/Outro";

export const Main = () => {
  return (
    <AbsoluteFill className="bg-slate-950 text-white">
      <Audio src={staticFile("1.wav")} />
      
      <Sequence from={0} durationInFrames={90}>
        <Intro />
      </Sequence>
      <Sequence from={90} durationInFrames={150}>
        <Definition />
      </Sequence>
      <Sequence from={240} durationInFrames={180}>
        <Mechanism />
      </Sequence>
      <Sequence from={420} durationInFrames={60}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};
