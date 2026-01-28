import { AbsoluteFill, useCurrentFrame } from "remotion";
import type { ThemeTokens } from "./types";

export const Background = ({ theme }: { theme: ThemeTokens }) => {
  const frame = useCurrentFrame();
  const driftX = Math.sin(frame / 120) * 30;
  const driftY = Math.cos(frame / 140) * 24;

  // 使用 theme 中的颜色，如果不存在则回退到原来的硬编码值（为了兼容性，但尽量使用 theme）
  const accent1 = theme.colors.accent || "#6c8cff";
  const accent2 = theme.colors.accentAlt || "#42e8c3";
  // 这里的第三个颜色在原 theme 中没有，我们可以临时保留硬编码，或者最好在 theme 中添加一个 tertiary
  // 暂时保留硬编码以保持视觉一致，但在将来建议添加到 theme
  const accent3 = "#ff9559"; 

  return (
    <AbsoluteFill style={{ backgroundColor: theme.colors.background }}>
      <AbsoluteFill
        style={{
          backgroundImage: `
            radial-gradient(1200px 800px at 12% 8%, ${accent1}47, transparent 60%),
            radial-gradient(900px 900px at 88% 18%, ${accent2}33, transparent 65%),
            radial-gradient(1000px 800px at 22% 92%, ${accent3}29, transparent 65%),
            linear-gradient(160deg, ${theme.colors.background} 0%, ${theme.colors.surface || "#0f1220"} 55%, ${theme.colors.background} 100%)
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
            `radial-gradient(circle at 30% 30%, ${accent1}59, transparent 70%)`,
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
            `radial-gradient(circle at 60% 40%, ${accent2}59, transparent 70%)`,
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
