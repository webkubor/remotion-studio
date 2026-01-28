import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";

// 苹果风格的颜色系统
const colors = {
  background: "#000000",
  text: "#ffffff",
  textSecondary: "#86868b",
  accent: "#0071e3",
  card: "#1d1d1f",
  cardHover: "#2d2d2f",
};

// 场景1：开场标题 - 苹果风格
const OpeningScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 标题淡入和缩放动画
  const titleOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleScale = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
  });

  // 副标题淡入
  const subtitleOpacity = interpolate(frame, [30, 75], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subtitleY = interpolate(frame, [30, 75], [30, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: colors.text,
          fontSize: 140,
          fontWeight: 600,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          textAlign: "center",
          margin: 0,
          letterSpacing: "-2px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        Skills
      </h1>
      <p
        style={{
          color: colors.textSecondary,
          fontSize: 32,
          marginTop: 24,
          opacity: subtitleOpacity,
          transform: `translateY(${subtitleY}px)`,
          textAlign: "center",
          fontWeight: 400,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        技术分享系列
      </p>
    </AbsoluteFill>
  );
};

// 场景2：什么是 Skills - 苹果风格卡片
const WhatIsSkills = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 标题动画
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 30], [20, 0], {
    extrapolateRight: "clamp",
  });

  // 卡片依次出现
  const cards = [
    {
      icon: "🎯",
      title: "核心概念",
      desc: "现代化的技术能力评估和展示平台",
      delay: 30,
    },
    {
      icon: "💡",
      title: "主要目标",
      desc: "帮助开发者系统化地管理和展示技术技能",
      delay: 60,
    },
    {
      icon: "🚀",
      title: "应用场景",
      desc: "技术面试、职业发展、团队协作",
      delay: 90,
    },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 120,
      }}
    >
      <h2
        style={{
          color: colors.text,
          fontSize: 72,
          fontWeight: 600,
          marginBottom: 80,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          letterSpacing: "-1px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        什么是 Skills？
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
        {cards.map((card, index) => {
          const startFrame = card.delay;
          const cardOpacity = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [0, 1],
            {
              extrapolateRight: "clamp",
            },
          );
          const cardY = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [40, 0],
            {
              extrapolateRight: "clamp",
            },
          );

          return (
            <div
              key={index}
              style={{
                backgroundColor: colors.card,
                padding: 48,
                borderRadius: 24,
                opacity: cardOpacity,
                transform: `translateY(${cardY}px)`,
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "flex-start", gap: 24 }}
              >
                <span style={{ fontSize: 48, lineHeight: 1 }}>{card.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      color: colors.text,
                      fontSize: 36,
                      fontWeight: 600,
                      margin: 0,
                      marginBottom: 12,
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      color: colors.textSecondary,
                      fontSize: 24,
                      margin: 0,
                      lineHeight: 1.5,
                      fontFamily:
                        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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
    </AbsoluteFill>
  );
};

// 场景3：核心特性 - 苹果风格网格
const CoreFeatures = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const features = [
    { icon: "📊", title: "技能评估", desc: "多维度评估技术能力" },
    { icon: "🎨", title: "可视化展示", desc: "直观展示技能图谱" },
    { icon: "📈", title: "成长追踪", desc: "记录技能提升轨迹" },
    { icon: "🤝", title: "团队协作", desc: "共享技能资源" },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 120,
      }}
    >
      <h2
        style={{
          color: colors.text,
          fontSize: 72,
          fontWeight: 600,
          marginBottom: 80,
          opacity: titleOpacity,
          letterSpacing: "-1px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        核心特性
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
        {features.map((feature, index) => {
          const startFrame = 30 + index * 20;
          const featureOpacity = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [0, 1],
            {
              extrapolateRight: "clamp",
            },
          );
          const featureScale = spring({
            frame: frame - startFrame,
            fps,
            config: { damping: 200, stiffness: 100 },
          });

          return (
            <div
              key={index}
              style={{
                backgroundColor: colors.card,
                padding: 56,
                borderRadius: 24,
                opacity: featureOpacity,
                transform: `scale(${featureScale})`,
              }}
            >
              <div style={{ fontSize: 64, marginBottom: 24, lineHeight: 1 }}>
                {feature.icon}
              </div>
              <h3
                style={{
                  color: colors.text,
                  fontSize: 40,
                  fontWeight: 600,
                  margin: 0,
                  marginBottom: 16,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: colors.textSecondary,
                  fontSize: 24,
                  margin: 0,
                  lineHeight: 1.5,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// 场景4：技术栈 - 苹果风格圆形徽章
const TechStack = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const techs = [
    { name: "React", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Node.js", color: "#339933" },
    { name: "GraphQL", color: "#E10098" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Docker", color: "#2496ED" },
  ];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 120,
      }}
    >
      <h2
        style={{
          color: colors.text,
          fontSize: 72,
          fontWeight: 600,
          marginBottom: 80,
          opacity: titleOpacity,
          letterSpacing: "-1px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        技术栈
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
        {techs.map((tech, index) => {
          const startFrame = 30 + index * 15;
          const techOpacity = interpolate(
            frame,
            [startFrame, startFrame + 30],
            [0, 1],
            {
              extrapolateRight: "clamp",
            },
          );
          const scale = spring({
            frame: frame - startFrame,
            fps,
            config: { damping: 200, stiffness: 100 },
          });

          return (
            <div
              key={index}
              style={{
                backgroundColor: tech.color,
                padding: "32px 64px",
                borderRadius: 100,
                opacity: techOpacity,
                transform: `scale(${scale})`,
                boxShadow: `0 4px 20px ${tech.color}40`,
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: 36,
                  fontWeight: 600,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// 场景5：总结 - 苹果风格 CTA
const Summary = () => {
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
    <AbsoluteFill
      style={{
        backgroundColor: colors.background,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 120,
      }}
    >
      <h2
        style={{
          color: colors.text,
          fontSize: 96,
          fontWeight: 600,
          marginBottom: 60,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          textAlign: "center",
          letterSpacing: "-1px",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        开始使用 Skills
      </h2>

      <div
        style={{
          opacity: pointsOpacity,
          transform: `translateY(${pointsY}px)`,
          textAlign: "center",
          marginBottom: 60,
        }}
      >
        <p
          style={{
            color: colors.textSecondary,
            fontSize: 32,
            marginBottom: 24,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          📚 系统化管理你的技术能力
        </p>
        <p
          style={{
            color: colors.textSecondary,
            fontSize: 32,
            marginBottom: 24,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          🎯 精准评估和展示技能
        </p>
        <p
          style={{
            color: colors.textSecondary,
            fontSize: 32,
            marginBottom: 0,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          🚀 加速职业发展
        </p>
      </div>

      <div
        style={{
          padding: "24px 64px",
          backgroundColor: colors.accent,
          borderRadius: 50,
          opacity: buttonOpacity,
          transform: `scale(${buttonScale})`,
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: 600,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          立即开始 →
        </span>
      </div>
    </AbsoluteFill>
  );
};

// 主组件
export const SkillsIntro = () => {
  return (
    <AbsoluteFill>
      {/* 场景1：开场标题 - 0-90帧（3秒） */}
      <Sequence from={0} durationInFrames={90}>
        <OpeningScene />
      </Sequence>

      {/* 场景2：什么是 Skills - 90-270帧（6秒） */}
      <Sequence from={90} durationInFrames={180}>
        <WhatIsSkills />
      </Sequence>

      {/* 场景3：核心特性 - 270-450帧（6秒） */}
      <Sequence from={270} durationInFrames={180}>
        <CoreFeatures />
      </Sequence>

      {/* 场景4：技术栈 - 450-600帧（5秒） */}
      <Sequence from={450} durationInFrames={150}>
        <TechStack />
      </Sequence>

      {/* 场景5：总结 - 600-750帧（5秒） */}
      <Sequence from={600} durationInFrames={150}>
        <Summary />
      </Sequence>
    </AbsoluteFill>
  );
};
