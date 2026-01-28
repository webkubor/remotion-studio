import { AbsoluteFill, useCurrentFrame, interpolate, useVideoConfig, spring } from "remotion";
import { Typewriter } from "@packages/video-kit";

const Box = ({ title, icon, delay, frame, fps }: any) => {
  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12 },
  });
  
  const opacity = interpolate(frame - delay, [0, 10], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  if (frame < delay) return null;

  return (
    <div 
      className="flex flex-col items-center justify-center w-48 h-48 border-2 border-slate-700 rounded-xl bg-slate-900"
      style={{ transform: `scale(${scale})`, opacity }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-xl font-semibold text-white">{title}</div>
    </div>
  );
};

const Arrow = ({ delay, frame, fps }: any) => {
    const opacity = interpolate(frame - delay, [0, 10], [0, 1], { extrapolateLeft: 'clamp' });
    if (frame < delay) return null;
    return (
        <div className="text-slate-500 text-4xl" style={{ opacity }}>→</div>
    )
}

export const Mechanism = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-slate-950">
      <h3 className="text-3xl text-slate-300 mb-16 absolute top-20">How it works</h3>
      
      <div className="flex items-center gap-8">
        <Box title="Input Text" icon="📄" delay={10} frame={frame} fps={fps} />
        <Arrow delay={40} frame={frame} fps={fps} />
        <Box title="AI Model" icon="🧠" delay={60} frame={frame} fps={fps} />
        <Arrow delay={90} frame={frame} fps={fps} />
        <Box title="Audio" icon="🔊" delay={110} frame={frame} fps={fps} />
      </div>

      <div className="absolute bottom-20 text-slate-500 text-lg">
        {frame > 130 && <Typewriter text="Neural Processing..." speed={2} />}
      </div>
    </AbsoluteFill>
  );
};
