import defaultConfig from "../data/skills-intro.json";
import type { SkillsIntroConfig } from "../types";
import type { ThemeTokens } from "../../../packages/video-kit";

export const getTheme = (config: SkillsIntroConfig = defaultConfig): ThemeTokens => {
  return {
    fonts: config.theme.fonts,
    colors: config.theme.colors,
  };
};

export type Theme = ThemeTokens;
