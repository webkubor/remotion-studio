import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { Waveform } from "@packages/video-kit";

export const Scene2 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  
  const scale = spring({ frame, fps, config: { damping: 12 } });
  const opacity = interpolate(frame, [0, 20], [0, 1]);

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-slate-950">
      <div style={{ opacity, transform: `scale(${scale})` }} className="text-center">
        <h2 className="text-5xl font-bold text-white mb-6">Merchant of Record</h2>
        <div className="flex gap-4 items-center justify-center text-2xl text-slate-400">
          <span className="line-through decoration-red-500">Stripe Plugin</span>
          <span>→</span>
          <span className="text-green-400 font-bold">Stripe Alternative</span>
        </div>
      </div>
      <div className="mt-16 opacity-50">
        <Waveform bars={40} height={60} color="#a78bfa" />
      </div>
    </AbsoluteFill>
  );
};
