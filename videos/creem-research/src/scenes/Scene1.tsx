import { AbsoluteFill } from "remotion";
import { Typewriter } from "@packages/video-kit";

export const Scene1 = () => {
  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-slate-950">
      <h1 className="text-7xl font-bold text-white mb-8 tracking-tighter">
        Creem.io
      </h1>
      <div className="text-3xl text-purple-400 font-mono bg-slate-900 px-6 py-3 rounded-lg border border-purple-500/30">
        <Typewriter text="Deep Research Report" speed={2} />
      </div>
      <p className="mt-12 text-slate-500 text-xl">Is it a Gateway? No.</p>
    </AbsoluteFill>
  );
};
