import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { ReactElement } from "react";
import { Background } from "../../packages/video-kit";
import { AudioTrack } from "./components/AudioTrack";
import { Scene } from "./components/Scene";
import skillsIntroConfig from "./data/skills-intro.json";
import { getTheme, type Theme } from "./styles/theme";
import type { SkillsIntroConfig } from "./types";

export type SkillsIntroProps = {
  config?: SkillsIntroConfig;
};

type OpeningSceneProps = {
  theme: Theme;
  meta: SkillsIntroConfig["meta"];
};

type WhatIsSkillsProps = {
  theme: Theme;
  scene: SkillsIntroConfig["scenes"]["whatIs"];
};

type CoreFeaturesProps = {
  theme: Theme;
  scene: SkillsIntroConfig["scenes"]["coreFeatures"];
};

type TechStackProps = {
  theme: Theme;
  scene: SkillsIntroConfig["scenes"]["techStack"];
};

type SummaryProps = {
  theme: Theme;
  scene: SkillsIntroConfig["scenes"]["summary"];
};

const OpeningScene = ({ theme, meta }: OpeningSceneProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleScale = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
  });

  const subtitleOpacity = interpolate(frame, [30, 75], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subtitleY = interpolate(frame, [30, 75], [30, 0], {
    extrapolateRight: "clamp",
  });

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
          opacity: subtitleOpacity,
          marginBottom: 28,
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
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
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

const WhatIsSkills = ({ theme, scene }: WhatIsSkillsProps) => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 30], [20, 0], {
    extrapolateRight: "clamp",
  });

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
          transform: `translateY(${titleY}px)`,
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
          const startFrame = card.delay ?? index * 30;
          const cardOpacity = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [0, 1],
            {
              extrapolateRight: "clamp",
            }
          );
          const cardY = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [40, 0],
            {
              extrapolateRight: "clamp",
            }
          );

          return (
            <div
              key={`${card.title}-${index}`}
              style={{
                background: `linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0) 45%), linear-gradient(135deg, ${theme.colors.surface} 0%, ${theme.colors.surfaceHi} 100%)`,
                padding: 52,
                borderRadius: 28,
                border: `1px solid ${theme.colors.border}`,
                opacity: cardOpacity,
                transform: `translateY(${cardY}px)`,
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

const CoreFeatures = ({ theme, scene }: CoreFeaturesProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

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
          const startFrame = feature.delay ?? 30 + index * 20;
          const featureOpacity = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [0, 1],
            {
              extrapolateRight: "clamp",
            }
          );
          const featureScale = spring({
            frame: frame - startFrame,
            fps,
            config: { damping: 200, stiffness: 100 },
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

const TechStack = ({ theme, scene }: TechStackProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

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
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          justifyContent: "center",
          maxWidth: 1400,
        }}
      >
        {scene.items.map((tech, index) => {
          const startFrame = tech.delay ?? 30 + index * 15;
          const techOpacity = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [0, 1],
            {
              extrapolateRight: "clamp",
            }
          );
          const scale = spring({
            frame: frame - startFrame,
            fps,
            config: { damping: 200, stiffness: 100 },
          });

          return (
            <div
              key={`${tech.name}-${index}`}
              style={{
                background: `linear-gradient(135deg, ${tech.color}22 0%, rgba(15, 18, 30, 0.9) 60%)`,
                padding: "30px 62px",
                borderRadius: 100,
                border: `1px solid ${tech.color}66`,
                opacity: techOpacity,
                transform: `scale(${scale})`,
                boxShadow: `0 18px 50px ${tech.color}40`,
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: 34,
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  fontFamily: theme.fonts.body,
                }}
              >
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </Scene>
  );
};

const Summary = ({ theme, scene }: SummaryProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleScale = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
  });

  const pointsOpacity = interpolate(frame, [45, 90], [0, 1], {
    extrapolateRight: "clamp",
  });
  const pointsY = interpolate(frame, [45, 90], [40, 0], {
    extrapolateRight: "clamp",
  });

  const buttonOpacity = interpolate(frame, [90, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const buttonScale = spring({
    frame: frame - 90,
    fps,
    config: { damping: 200, stiffness: 100 },
  });

  return (
    <Scene
      theme={theme}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 120,
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: theme.colors.text,
          fontSize: 104,
          fontWeight: 700,
          marginBottom: 60,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          letterSpacing: "-1.5px",
          fontFamily: theme.fonts.display,
        }}
      >
        {scene.title}
      </h2>

      <div
        style={{
          opacity: pointsOpacity,
          transform: `translateY(${pointsY}px)`,
          textAlign: "center",
          marginBottom: 60,
        }}
      >
        {scene.points.map((point, index): ReactElement => {
          const isLast = index === scene.points.length - 1;
          return (
            <p
              key={`${point}-${index}`}
              style={{
                color: theme.colors.textSecondary,
                fontSize: 32,
                marginBottom: isLast ? 0 : 24,
                fontFamily: theme.fonts.body,
              }}
            >
              {point}
            </p>
          );
        })}
      </div>

      <div
        style={{
          padding: "22px 64px",
          background: `linear-gradient(135deg, ${theme.colors.accent} 0%, ${theme.colors.accentAlt} 100%)`,
          borderRadius: 50,
          border: "1px solid rgba(255, 255, 255, 0.2)",
          opacity: buttonOpacity,
          transform: `scale(${buttonScale})`,
          cursor: "pointer",
          boxShadow: "0 18px 50px rgba(66, 232, 195, 0.35)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "0.02em",
            fontFamily: theme.fonts.body,
          }}
        >
          {scene.cta}
        </span>
      </div>
    </Scene>
  );
};

export const SkillsIntro = ({ config = skillsIntroConfig }: SkillsIntroProps) => {
  const theme = getTheme(config);
  const { timeline, scenes, meta } = config;

  return (
    <AbsoluteFill>
      <Background theme={theme} />
      <AudioTrack audio={config.audio} />

      <Sequence from={timeline.opening.from} durationInFrames={timeline.opening.duration}>
        <OpeningScene theme={theme} meta={meta} />
      </Sequence>

      <Sequence from={timeline.whatIs.from} durationInFrames={timeline.whatIs.duration}>
        <WhatIsSkills theme={theme} scene={scenes.whatIs} />
      </Sequence>

      <Sequence
        from={timeline.coreFeatures.from}
        durationInFrames={timeline.coreFeatures.duration}
      >
        <CoreFeatures theme={theme} scene={scenes.coreFeatures} />
      </Sequence>

      <Sequence from={timeline.techStack.from} durationInFrames={timeline.techStack.duration}>
        <TechStack theme={theme} scene={scenes.techStack} />
      </Sequence>

      <Sequence from={timeline.summary.from} durationInFrames={timeline.summary.duration}>
        <Summary theme={theme} scene={scenes.summary} />
      </Sequence>
    </AbsoluteFill>
  );
};
