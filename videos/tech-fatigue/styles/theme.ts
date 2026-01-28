import type { ThemeTokens } from "../../../packages/video-kit";

// 直接复用 video-kit 的类型，这里做一个简单的转换或者直接使用
export type Theme = ThemeTokens;

export const getTheme = (config: any): Theme => {
  return config.theme;
};
