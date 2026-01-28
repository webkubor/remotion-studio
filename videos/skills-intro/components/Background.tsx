import { AbsoluteFill, useCurrentFrame } from "remotion";
import type { Theme } from "../styles/theme";

export const Background = ({ theme }: { theme: Theme }) => {
  const frame = useCurrentFrame();
  const driftX = Math.sin(frame / 120) * 30;
  const driftY = Math.cos(frame / 140) * 24;

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.background }}>
      <AbsoluteFill
        style={{
          backgroundImage: `
            radial-gradient(1200px 800px at 12% 8%, rgba(108, 140, 255, 0.28), transparent 60%),
            radial-gradient(900px 900px at 88% 18%, rgba(66, 232, 195, 0.2), transparent 65%),
            radial-gradient(1000px 800px at 22% 92%, rgba(255, 149, 89, 0.16), transparent 65%),
            linear-gradient(160deg, #0a0b10 0%, #0f1220 55%, #0a0b10 100%)
          `,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 140 + driftX,
          top: 90 + driftY,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(108, 140, 255, 0.35), transparent 70%)",
          filter: "blur(30px)",
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 120 - driftX,
          top: 160 - driftY,
          width: 440,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 60% 40%, rgba(66, 232, 195, 0.35), transparent 70%)",
          filter: "blur(26px)",
          opacity: 0.8,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(0deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
          opacity: 0.08,
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
          opacity: 0.12,
          mixBlendMode: "soft-light",
        }}
      />
    </AbsoluteFill>
  );
};
