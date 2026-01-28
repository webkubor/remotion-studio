import { AbsoluteFill } from "remotion";
import { Typewriter } from "@packages/video-kit";

export const Intro = () => {
  return (
    <AbsoluteFill className="flex items-center justify-center bg-slate-950">
      <h1 className="text-6xl font-bold text-white tracking-wider">
        <Typewriter text="What is TTS?" speed={3} />
      </h1>
    </AbsoluteFill>
  );
};
