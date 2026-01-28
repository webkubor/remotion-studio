import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

const Step = ({ text, icon, delay, frame, fps, color }: any) => {
  const y = spring({ frame: frame - delay, fps, config: { damping: 15 } });
  const opacity = interpolate(frame - delay, [0, 10], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  
  if (frame < delay) return null;

  return (
    <div 
      className={`flex items-center gap-4 bg-slate-900 border border-${color}-500/30 px-6 py-4 rounded-lg w-[600px]`}
      style={{ opacity, transform: `translateY(${(1 - y) * 50}px)` }}
    >
      <div className={`text-2xl p-2 bg-${color}-500/20 rounded-full`}>{icon}</div>
      <div className="text-xl text-slate-200">{text}</div>
    </div>
  );
};

export const Flow = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-slate-950 gap-6">
      <h3 className="text-3xl text-slate-500 mb-8 absolute top-10">The Logic Flow</h3>
      
      <Step 
        frame={frame} fps={fps} delay={10} 
        icon="🔍" color="blue" 
        text="1. Retrieve relevant chunks from Vector DB" 
      />
      <Step 
        frame={frame} fps={fps} delay={60} 
        icon="➕" color="purple" 
        text="2. Augment Prompt with Context" 
      />
      <Step 
        frame={frame} fps={fps} delay={110} 
        icon="🤖" color="green" 
        text="3. Generate Answer based on Context" 
      />
    </AbsoluteFill>
  );
};
