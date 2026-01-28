import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const Outro = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill className="flex items-center justify-center bg-slate-950">
      <div style={{ opacity }} className="text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Thanks for Watching
        </h2>
        <p className="text-slate-500">Generated with Remotion</p>
      </div>
    </AbsoluteFill>
  );
};
