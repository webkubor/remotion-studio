import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { Waveform } from "@packages/video-kit";

export const Solution = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scale = spring({ frame, fps, config: { damping: 12 } });
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-slate-950">
      <div style={{ opacity, transform: `scale(${scale})` }} className="text-center">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
          R.A.G.
        </h1>
        <p className="text-2xl text-slate-400 tracking-widest uppercase">Retrieval-Augmented Generation</p>
      </div>
      
      <div className="mt-16 flex items-center gap-8">
        <div className="text-slate-500">External Knowledge</div>
        <Waveform bars={30} height={50} color="#4ade80" />
        <div className="text-slate-500">Vector DB</div>
      </div>
    </AbsoluteFill>
  );
};
