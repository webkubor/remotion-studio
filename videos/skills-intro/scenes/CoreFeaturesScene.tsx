import { useFadeIn, useSpringScale, useStagger } from "../../../packages/video-kit";
import { Scene } from "../components/Scene";
import type { SkillsIntroConfig } from "../types";
import type { Theme } from "../styles/theme";

export const CoreFeaturesScene = ({
  theme,
  scene,
}: {
  theme: Theme;
  scene: SkillsIntroConfig["scenes"]["coreFeatures"];
}) => {
  const titleOpacity = useFadeIn(0, 30);

  return (
    <Scene
      theme={theme}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 120,
      }}
    >
      <h2
        style={{
          color: theme.colors.text,
          fontSize: 76,
          fontWeight: 700,
          marginBottom: 80,
          opacity: titleOpacity,
          letterSpacing: "-1.5px",
          fontFamily: theme.fonts.display,
        }}
      >
        {scene.title}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 32,
          width: "100%",
          maxWidth: 1400,
        }}
      >
        {scene.items.map((feature, index) => {
          const startFrame = feature.delay ?? useStagger(index, 30, 20);
          const featureOpacity = useFadeIn(startFrame, 30);
          const featureScale = useSpringScale(startFrame, {
            damping: 200,
            stiffness: 100,
          });

          return (
            <div
              key={`${feature.title}-${index}`}
              style={{
                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 45%), linear-gradient(135deg, ${theme.colors.surface} 0%, ${theme.colors.surfaceHi} 100%)`,
                padding: 56,
                borderRadius: 28,
                border: `1px solid ${theme.colors.border}`,
                opacity: featureOpacity,
                transform: `scale(${featureScale})`,
                boxShadow: "0 30px 80px rgba(6, 9, 18, 0.55)",
              }}
            >
              <div style={{ fontSize: 64, marginBottom: 24, lineHeight: 1 }}>
                {feature.icon}
              </div>
              <h3
                style={{
                  color: theme.colors.text,
                  fontSize: 40,
                  fontWeight: 650,
                  margin: 0,
                  marginBottom: 16,
                  fontFamily: theme.fonts.display,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: theme.colors.textSecondary,
                  fontSize: 24,
                  margin: 0,
                  lineHeight: 1.5,
                  fontFamily: theme.fonts.body,
                }}
              >
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
    </Scene>
  );
};
