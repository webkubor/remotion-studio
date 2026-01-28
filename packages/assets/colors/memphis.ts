/**
 * Memphis 孟菲斯风格 / 故障艺术配色系统
 * 特点：高饱和度、撞色、几何感
 */

// 基础色板 - 用于背景循环切换
export const Palette = [
  "#FFD700", // Gold (高亮黄)
  "#FF6B6B", // Red (西瓜红)
  "#4ECDC4", // Teal (蓝绿色)
  "#FFE66D", // Yellow (柠檬黄)
  "#1A535C", // Dark Blue (深青)
  "#F7FFF7", // White-ish (近白)
  "#FF9F1C", // Orange (活力橙)
  "#2EC4B6"  // Cyan (青色)
];

// 故障艺术专用色
export const Glitch = {
  Primary: "#111111",      // 主文字色 (黑)
  Background: "#FFFFFF",   // 文字背景 (白)
  Shadow: "#000000",       // 硬阴影 (纯黑)
  Cyan: "cyan",           // 故障偏移色 1
  Red: "red",             // 故障偏移色 2
  Dim: "rgba(0,0,0,0.2)"  // 静态阴影
};

export const MemphisColors = {
  Palette,
  Glitch
};
