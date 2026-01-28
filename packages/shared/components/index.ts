/**
 * Remotion Studio 共享组件库
 * 提供可复用的视频组件，基于苹果风格设计
 */

import { AbsoluteFill, Sequence } from 'remotion';
import { AppleColors } from '../../assets/colors/apple';

// ==================== 基础容器组件 ====================

/**
 * 全屏容器组件
 * 用于占满整个画布的容器
 */
export const FullScreenContainer: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  backgroundColor?: string;
}> = ({ children, style, backgroundColor = AppleColors.Semantic.background.primary }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        ...style,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};

/**
 * 居中容器组件
 * 用于内容居中显示
 */
export const CenterContainer: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  padding?: number;
}> = ({ children, style, padding = 120 }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// ==================== 文本组件 ====================

/**
 * 主标题组件
 * 苹果风格的大标题
 */
export const MainTitle: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  color?: string;
  fontSize?: number;
}> = ({ children, style, color = AppleColors.Semantic.text.primary, fontSize = 140 }) => {
  return (
    <h1
      style={{
        color,
        fontSize,
        fontWeight: 600,
        margin: 0,
        letterSpacing: '-2px',
        textAlign: 'center',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        ...style,
      }}
    >
      {children}
    </h1>
  );
};

/**
 * 副标题组件
 * 苹果风格的副标题
 */
export const Subtitle: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  color?: string;
  fontSize?: number;
}> = ({ children, style, color = AppleColors.Semantic.text.secondary, fontSize = 32 }) => {
  return (
    <p
      style={{
        color,
        fontSize,
        fontWeight: 400,
        margin: 0,
        textAlign: 'center',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        ...style,
      }}
    >
      {children}
    </p>
  );
};

/**
 * 章节标题组件
 * 用于各个章节的标题
 */
export const SectionTitle: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  color?: string;
  fontSize?: number;
  marginBottom?: number;
}> = ({ children, style, color = AppleColors.Semantic.text.primary, fontSize = 72, marginBottom = 80 }) => {
  return (
    <h2
      style={{
        color,
        fontSize,
        fontWeight: 600,
        margin: 0,
        marginBottom,
        letterSpacing: '-1px',
        textAlign: 'center',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        ...style,
      }}
    >
      {children}
    </h2>
  );
};

// ==================== 卡片组件 ====================

/**
 * 基础卡片组件
 * 苹果风格的卡片
 */
export const Card: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  padding?: number;
  borderRadius?: number;
}> = ({ children, style, padding = 48, borderRadius = 24 }) => {
  return (
    <div
      style={{
        backgroundColor: AppleColors.Semantic.card.default,
        padding,
        borderRadius,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * 图标卡片组件
 * 带有图标和文字的卡片
 */
export const IconCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
}> = ({ icon, title, description, style }) => {
  return (
    <Card style={style}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
        <span style={{ fontSize: 48, lineHeight: 1 }}>{icon}</span>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              color: AppleColors.Semantic.text.primary,
              fontSize: 36,
              fontWeight: 600,
              margin: 0,
              marginBottom: 12,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              color: AppleColors.Semantic.text.secondary,
              fontSize: 24,
              margin: 0,
              lineHeight: 1.5,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

/**
 * 特性卡片组件
 * 用于展示特性列表
 */
export const FeatureCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
}> = ({ icon, title, description, style }) => {
  return (
    <Card style={style}>
      <div style={{ fontSize: 64, marginBottom: 24, lineHeight: 1 }}>{icon}</div>
      <h3
        style={{
          color: AppleColors.Semantic.text.primary,
          fontSize: 40,
          fontWeight: 600,
          margin: 0,
          marginBottom: 16,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: AppleColors.Semantic.text.secondary,
          fontSize: 24,
          margin: 0,
          lineHeight: 1.5,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {description}
      </p>
    </Card>
  );
};

// ==================== 按钮组件 ====================

/**
 * 主要按钮组件
 * 苹果风格的主要按钮
 */
export const PrimaryButton: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  backgroundColor?: string;
  color?: string;
  padding?: string;
  borderRadius?: number;
}> = ({
  children,
  style,
  backgroundColor = AppleColors.Semantic.accent.blue,
  color = AppleColors.Semantic.text.primary,
  padding = '24px 64px',
  borderRadius = 50,
}) => {
  return (
    <div
      style={{
        backgroundColor,
        color,
        padding,
        borderRadius,
        display: 'inline-block',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        ...style,
      }}
    >
      <span
        style={{
          fontSize: 32,
          fontWeight: 600,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {children}
      </span>
    </div>
  );
};

// ==================== 技术标签组件 ====================

/**
 * 技术标签组件
 * 用于展示技术栈
 */
export const TechBadge: React.FC<{
  name: string;
  style?: React.CSSProperties;
  color?: string;
}> = ({ name, style, color }) => {
  const badgeColor = color || AppleColors.Tech.getTechColor(name);

  return (
    <div
      style={{
        backgroundColor: badgeColor,
        padding: '32px 64px',
        borderRadius: 100,
        boxShadow: `0 4px 20px ${badgeColor}40`,
        ...style,
      }}
    >
      <span
        style={{
          color: 'white',
          fontSize: 36,
          fontWeight: 600,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {name}
      </span>
    </div>
  );
};

// ==================== 场景组件 ====================

/**
 * 场景容器组件
 * 用于包装一个完整的场景
 */
export const Scene: React.FC<{
  children: React.ReactNode;
  from: number;
  durationInFrames: number;
  style?: React.CSSProperties;
}> = ({ children, from, durationInFrames, style }) => {
  return (
    <Sequence from={from} durationInFrames={durationInFrames}>
      <div style={style}>{children}</div>
    </Sequence>
  );
};

// ==================== 列表组件 ====================

/**
 * 垂直列表组件
 * 用于垂直排列的卡片列表
 */
export const VerticalList: React.FC<{
  children: React.ReactNode;
  gap?: number;
  maxWidth?: number;
  style?: React.CSSProperties;
}> = ({ children, gap = 24, maxWidth = 1200, style }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap,
        width: '100%',
        maxWidth,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * 网格列表组件
 * 用于网格布局的卡片列表
 */
export const GridList: React.FC<{
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  maxWidth?: number;
  style?: React.CSSProperties;
}> = ({ children, columns = 2, gap = 32, maxWidth = 1400, style }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
        width: '100%',
        maxWidth,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * 弹性列表组件
 * 用于弹性布局的标签列表
 */
export const FlexList: React.FC<{
  children: React.ReactNode;
  gap?: number;
  maxWidth?: number;
  style?: React.CSSProperties;
}> = ({ children, gap = 32, maxWidth = 1400, style }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap,
        justifyContent: 'center',
        maxWidth,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// ==================== 导出所有组件 ====================

export const SharedComponents = {
  // 容器组件
  FullScreenContainer,
  CenterContainer,

  // 文本组件
  MainTitle,
  Subtitle,
  SectionTitle,

  // 卡片组件
  Card,
  IconCard,
  FeatureCard,

  // 按钮组件
  PrimaryButton,

  // 技术标签组件
  TechBadge,

  // 场景组件
  Scene,

  // 列表组件
  VerticalList,
  GridList,
  FlexList,
};

export default SharedComponents;
