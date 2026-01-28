# Tech Fatigue 视频开发复盘
**日期**: 2026-01-28
**项目**: videos/tech-fatigue
**标签**: #Remotion #TypeScript #Assets #CSS #Webpack

## 1. 核心成果
- **新视频上线**: 完成 `TechFatigue` (白色极简科技风) 开发。
- **架构升级**: 重构 `videos/index.ts`，支持多视频项目同时在 Studio 侧边栏展示，打破了单一入口限制。
- **视觉体系**: 确立了 "White Minimalist" 风格，包含动态噪点背景、光晕流动及复杂的字体组合（Montserrat + HarmonyOS + Rajdhani）。

## 2. 踩坑记录 (Critical Issues)

### A. 静态资源 404 (Audio & Fonts)
- **问题**: 代码引用了 `packages/assets` 下的文件，但运行时无法加载。
- **根因**: Remotion 运行时仅服务 `public/` 目录下的资源，不会自动打包源码目录中的非导入资源。
- **解决**: 手动将资源复制到 `public/fonts` 和 `public/` (音频)。
- **规则**: **运行时静态资源必须位于 `public/` 目录。**

### B. CSS Webpack 解析错误
- **问题**: 在 `index.css` 中使用 `@font-face { src: url('/fonts/...') }` 导致构建失败。
- **根因**: Webpack 尝试解析 CSS 中的绝对路径，但在源码层无法找到构建后的 public 路径。
- **解决**: 移除 CSS 中的字体定义，改为使用 React 组件 (`Fonts.tsx`) + `staticFile()` 动态注入 `<style>`。
- **规则**: **避免在 CSS 中直接引用本地字体文件，使用 `staticFile()` 辅助加载。**

### C. 背景组件复用陷阱
- **问题**: 直接复用 `skills-intro` 的背景导致新视频样式错误（黑底）。
- **解决**: 将背景组件抽离至 `packages/video-kit` 并参数化（支持 Theme）。

## 3. 后续优化建议
- [ ] 编写 `scripts/sync-assets.ts` 脚本，开发启动时自动同步 `packages/assets` 到 `public`。
- [ ] 封装通用的 `FontLoader` 组件。

## 4. 字体清单
- **Montserrat**: 英文大标题
- **HarmonyOS Sans SC**: 中文正文/标题
- **Rajdhani**: 科技/代码元素
- **Inter**: 英文正文
- **Oswald**: 辅助标签
