import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { Waveform } from "@packages/video-kit";

export const Definition = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const slideUp = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-slate-950 gap-12">
      <div style={{ opacity, transform: `translateY(${(1 - slideUp) * 50}px)` }}>
        <h2 className="text-5xl font-bold text-white mb-4">Text-to-Speech</h2>
        <p className="text-2xl text-slate-400 text-center font-light">Technology</p>
      </div>
      
      <div style={{ opacity: interpolate(frame, [30, 60], [0, 1]) }}>
        <Waveform bars={30} height={120} color="#60a5fa" />
      </div>
    </AbsoluteFill>
  );
};
