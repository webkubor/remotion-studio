import { useFadeIn, useFadeInUp, useSpringScale } from "../../../packages/video-kit";
import { Scene } from "../components/Scene";
import type { SkillsIntroConfig } from "../types";
import type { Theme } from "../styles/theme";

export const OpeningScene = ({
  theme,
  meta,
}: {
  theme: Theme;
  meta: SkillsIntroConfig["meta"];
}) => {
  const titleOpacity = useFadeIn(0, 45);
  const titleScale = useSpringScale(0, { damping: 200, stiffness: 100 });
  const subtitle = useFadeInUp(30, 45, 30);

  return (
    <Scene
      theme={theme}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 140,
        textAlign: "center",
      }}
    >
      <div
        style={{
          padding: "10px 22px",
          borderRadius: 999,
          border: `1px solid ${theme.colors.border}`,
          background: "rgba(255, 255, 255, 0.04)",
          color: theme.colors.textSecondary,
          fontSize: 16,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          fontFamily: theme.fonts.body,
          opacity: subtitle.opacity,
          marginBottom: 28,
          transform: subtitle.transform,
        }}
      >
        {meta.tagline}
      </div>
      <h1
        style={{
          fontSize: 160,
          fontWeight: 700,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          margin: 0,
          lineHeight: 0.95,
          letterSpacing: "-2.5px",
          fontFamily: theme.fonts.display,
          backgroundImage: `linear-gradient(135deg, ${theme.colors.accent}, ${theme.colors.accentAlt})`,
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          textShadow: "0 20px 60px rgba(108, 140, 255, 0.25)",
        }}
      >
        {meta.title}
      </h1>
      <p
        style={{
          color: theme.colors.textSecondary,
          fontSize: 34,
          marginTop: 24,
          opacity: subtitle.opacity,
          transform: subtitle.transform,
          fontWeight: 500,
          letterSpacing: "0.06em",
          fontFamily: theme.fonts.body,
        }}
      >
        {meta.subtitle}
      </p>
    </Scene>
  );
};
