import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Typewriter } from "@packages/video-kit";

export const Problem = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1]);
  
  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-slate-950">
      <h2 className="text-6xl font-bold text-white mb-8">The LLM Problem</h2>
      <div className="text-2xl text-red-400 font-mono bg-red-950/30 px-8 py-4 rounded-xl border border-red-500/20">
        <span className="text-slate-400 mr-4">User:</span>
        <Typewriter text="What happened today?" speed={2} />
      </div>
      
      {frame > 60 && (
        <div className="mt-8 text-2xl text-slate-500 font-mono bg-slate-900 px-8 py-4 rounded-xl border border-slate-700">
           <span className="text-blue-400 mr-4">AI:</span>
           <span>I don't know. My knowledge cutoff is 2023.</span>
        </div>
      )}
    </AbsoluteFill>
  );
};
