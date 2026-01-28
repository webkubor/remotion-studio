import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Typewriter } from "@packages/video-kit";

export const Result = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-slate-950">
      <div style={{ opacity }} className="text-center">
        <div className="text-6xl mb-8">✨</div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Accurate & Up-to-Date
        </h2>
        <p className="text-slate-500 mb-12">No more hallucinations.</p>
        
        <div className="text-sm text-slate-700 font-mono">
          <Typewriter text="RAG System Architecture" speed={1} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
