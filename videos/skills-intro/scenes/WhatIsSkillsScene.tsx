import { useFadeIn, useFadeInUp, useStagger } from "../../../packages/video-kit";
import { Scene } from "../components/Scene";
import type { SkillsIntroConfig } from "../types";
import type { Theme } from "../styles/theme";

export const WhatIsSkillsScene = ({
  theme,
  scene,
}: {
  theme: Theme;
  scene: SkillsIntroConfig["scenes"]["whatIs"];
}) => {
  const titleOpacity = useFadeIn(0, 30);
  const titleMotion = useFadeInUp(0, 30, 20);

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
          transform: titleMotion.transform,
          letterSpacing: "-1.5px",
          fontFamily: theme.fonts.display,
        }}
      >
        {scene.title}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {scene.cards.map((card, index) => {
          const startFrame = card.delay ?? useStagger(index, 30, 30);
          const cardMotion = useFadeInUp(startFrame, 30, 40);

          return (
            <div
              key={`${card.title}-${index}`}
              style={{
                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 45%), linear-gradient(135deg, ${theme.colors.surface} 0%, ${theme.colors.surfaceHi} 100%)`,
                padding: 52,
                borderRadius: 28,
                border: `1px solid ${theme.colors.border}`,
                opacity: cardMotion.opacity,
                transform: cardMotion.transform,
                boxShadow: "0 24px 70px rgba(7, 10, 20, 0.6)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
                <span style={{ fontSize: 48, lineHeight: 1 }}>{card.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      color: theme.colors.text,
                      fontSize: 36,
                      fontWeight: 650,
                      margin: 0,
                      marginBottom: 12,
                      fontFamily: theme.fonts.display,
                    }}
                  >
                    {card.title}
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
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Scene>
  );
};
