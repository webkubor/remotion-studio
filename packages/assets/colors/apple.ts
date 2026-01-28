/**
 * Apple 风格颜色系统
 * 基于 iOS/macOS Human Interface Guidelines
 * 参考: https://developer.apple.com/design/human-interface-guidelines/color
 */

// 系统颜色 - iOS/macOS 标准颜色
export const SystemColors = {
  // 红色系
  red: {
    light: 'rgb(255, 59, 48)',
    dark: 'rgb(255, 69, 58)',
  },

  // 橙色系
  orange: {
    light: 'rgb(255, 149, 0)',
    dark: 'rgb(255, 159, 10)',
  },

  // 黄色系
  yellow: {
    light: 'rgb(255, 204, 0)',
    dark: 'rgb(255, 214, 10)',
  },

  // 绿色系
  green: {
    light: 'rgb(52, 199, 89)',
    dark: 'rgb(48, 209, 88)',
  },

  // 青蓝色系
  tealBlue: {
    light: 'rgb(90, 200, 250)',
    dark: 'rgb(100, 210, 255)',
  },

  // 蓝色系
  blue: {
    light: 'rgb(0, 122, 255)',
    dark: 'rgb(10, 132, 255)',
  },

  // 紫色系
  purple: {
    light: 'rgb(175, 82, 222)',
    dark: 'rgb(191, 90, 242)',
  },

  // 粉色系
  pink: {
    light: 'rgb(255, 55, 95)',
    dark: 'rgb(255, 45, 85)',
  },

  // 靛蓝色系
  indigo: {
    light: 'rgb(88, 86, 214)',
    dark: 'rgb(94, 92, 230)',
  },
} as const;

// 语义化颜色 - 用于视频制作的苹果风格配色
export const SemanticColors = {
  // 背景颜色
  background: {
    primary: '#000000',      // 主背景 - 纯黑
    secondary: '#1d1d1f',    // 次要背景 - 深灰
    tertiary: '#2d2d2f',     // 第三背景 - 中灰
    elevated: '#3d3d3f',     // 浮起元素背景
  },

  // 文字颜色
  text: {
    primary: '#ffffff',      // 主文字 - 纯白
    secondary: '#86868b',    // 次要文字 - 灰色
    tertiary: '#6e6e73',     // 第三文字 - 更深灰
    disabled: '#48484a',     // 禁用文字
  },

  // 强调色
  accent: {
    blue: '#0071e3',         // 苹果蓝 - 主要强调色
    green: '#34c759',        // 苹果绿 - 成功状态
    red: '#ff3b30',          // 苹果红 - 警告/错误
    yellow: '#ffcc00',       // 苹果黄 - 注意
    purple: '#af52de',       // 苹果紫 - 特殊强调
  },

  // 卡片颜色
  card: {
    default: '#1d1d1f',      // 默认卡片
    hover: '#2d2d2f',        // 悬停状态
    active: '#3d3d3f',       // 激活状态
  },

  // 边框颜色
  border: {
    default: 'rgba(255, 255, 255, 0.1)',
    hover: 'rgba(255, 255, 255, 0.2)',
    focus: 'rgba(0, 113, 227, 0.5)',
  },

  // 阴影颜色
  shadow: {
    light: 'rgba(0, 0, 0, 0.3)',
    medium: 'rgba(0, 0, 0, 0.5)',
    dark: 'rgba(0, 0, 0, 0.7)',
  },
} as const;

// 渐变色 - 苹果风格渐变
export const Gradients = {
  // 蓝色渐变
  blue: {
    from: '#0071e3',
    to: '#00c7be',
  },

  // 紫色渐变
  purple: {
    from: '#af52de',
    to: '#5e5ce6',
  },

  // 橙色渐变
  orange: {
    from: '#ff9500',
    to: '#ff3b30',
  },

  // 绿色渐变
  green: {
    from: '#34c759',
    to: '#30d158',
  },

  // 深色渐变
  dark: {
    from: '#1d1d1f',
    to: '#000000',
  },
} as const;

// 技术栈颜色 - 用于展示技术标签
export const TechColors = {
  react: '#61DAFB',
  typescript: '#3178C6',
  javascript: '#F7DF1E',
  nodejs: '#339933',
  python: '#3776AB',
  java: '#007396',
  go: '#00ADD8',
  rust: '#000000',
  swift: '#F05138',
  kotlin: '#7F52FF',
  docker: '#2496ED',
  kubernetes: '#326CE5',
  aws: '#FF9900',
  azure: '#0089D6',
  gcp: '#4285F4',
  graphql: '#E10098',
  mongodb: '#47A248',
  postgresql: '#336791',
  redis: '#DC382D',
  mysql: '#4479A1',
  nginx: '#269539',
  vue: '#4FC08D',
  angular: '#DD0031',
  svelte: '#FF3E00',
  nextjs: '#000000',
  remix: '#000000',
  vite: '#646CFF',
  tailwind: '#06B6D4',
  figma: '#F24E1E',
  sketch: '#F7B500',
  adobe: '#FF0000',
  git: '#F05032',
  github: '#181717',
  gitlab: '#FC6D26',
  bitbucket: '#0052CC',
  jira: '#0052CC',
  slack: '#4A154B',
  discord: '#5865F2',
  notion: '#000000',
  linear: '#5E6AD2',
  framer: '#0055FF',
  storybook: '#FF4785',
} as const;

// 颜色工具函数
export const ColorUtils = {
  /**
   * 将颜色转换为 rgba 格式
   */
  toRgba: (color: string, alpha: number = 1): string => {
    // 如果已经是 rgba，直接返回
    if (color.startsWith('rgba')) {
      return color.replace(/[\d.]+\)$/, `${alpha})`);
    }

    // 如果是 rgb，转换为 rgba
    if (color.startsWith('rgb')) {
      return color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
    }

    // 如果是 hex，转换为 rgba
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    return color;
  },

  /**
   * 创建带透明度的阴影
   */
  createShadow: (color: string, blur: number, spread: number = 0, alpha: number = 0.3): string => {
    return `0 ${blur}px ${spread}px ${ColorUtils.toRgba(color, alpha)}`;
  },

  /**
   * 创建渐变背景
   */
  createGradient: (from: string, to: string, direction: string = '135deg'): string => {
    return `linear-gradient(${direction}, ${from}, ${to})`;
  },

  /**
   * 获取技术栈颜色
   */
  getTechColor: (techName: string): string => {
    const normalizedName = techName.toLowerCase().replace(/[^a-z0-9]/g, '');
    return TechColors[normalizedName as keyof typeof TechColors] || '#86868b';
  },
} as const;

// 导出所有颜色
export const AppleColors = {
  System: SystemColors,
  Semantic: SemanticColors,
  Gradients: Gradients,
  Tech: TechColors,
  Utils: ColorUtils,
} as const;

// 默认导出
export default AppleColors;
