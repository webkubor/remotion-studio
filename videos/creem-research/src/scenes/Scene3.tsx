import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const FeatureCard = ({ title, desc, delay, frame }: any) => {
  const opacity = interpolate(frame - delay, [0, 15], [0, 1], { extrapolateLeft: "clamp" });
  const y = interpolate(frame - delay, [0, 15], [20, 0], { extrapolateLeft: "clamp" });
  
  return (
    <div style={{ opacity, transform: `translateY(${y}px)` }} 
      className="bg-slate-900 border border-slate-800 p-6 rounded-xl w-80 text-center">
      <h3 className="text-xl font-bold text-blue-400 mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  );
};

export const Scene3 = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center bg-slate-950">
      <h2 className="text-4xl text-white mb-12 font-bold">Why for AI Products?</h2>
      <div className="flex gap-6">
        <FeatureCard frame={frame} delay={0} title="Risk Shield" desc="Protects against Stripe bans" />
        <FeatureCard frame={frame} delay={30} title="Global Tax" desc="VAT/GST handled automatically" />
        <FeatureCard frame={frame} delay={60} title="AI Analytics" desc="Ask revenue questions in plain text" />
      </div>
    </AbsoluteFill>
  );
};
