import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { Typewriter } from "@packages/video-kit";

export const Scene4 = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill className="flex items-center justify-center bg-slate-950">
      <div style={{ opacity }} className="text-center">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
          Verdict
        </h2>
        <div className="text-2xl text-white font-light">
          Use Creem to <span className="font-bold">replace</span> Stripe, not connect it.
        </div>
        <div className="mt-12 text-sm text-slate-600">
          <Typewriter text="Research Completed by Gemini Agent" speed={1} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
