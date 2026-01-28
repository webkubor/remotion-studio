# Remotion Studio Monorepo

一个专业的 Remotion 视频制作 monorepo 项目，采用苹果风格设计系统，提供共享组件库和快速创建视频项目的工具。

## 📁 项目结构

```
remotion-studio/
├── packages/
│   ├── shared/              # 共享动画组件库
│   │   ├── components/      # 可复用的视频组件
│   │   ├── hooks/           # 动画 Hooks
│   │   └── utils/           # 工具函数
│   └── assets/              # 品牌视觉与听觉资源
│       ├── colors/          # 颜色系统（苹果风格）
│       ├── fonts/           # 字体资源
│       └── sounds/          # 音效资源
├── videos/
│   ├── _template/           # 新视频项目模板
│   └── skills-intro/        # Skills 技术分享视频
│       ├── src/             # 视频源代码
│       │   ├── Root.tsx     # Composition 定义
│       │   ├── index.ts     # 入口文件
│       │   └── index.css    # 样式文件
│       ├── SkillsIntro.tsx  # 主视频组件
│       └── README.md        # 视频项目说明
├── scripts/
│   └── create-video.ts      # 视频项目创建脚本
├── public/                  # 静态资源
├── remotion.config.ts       # Remotion 配置
└── package.json             # 项目依赖
```

## 🚀 快速开始

### 前置要求

- **Node.js** 16 或更高版本
- **pnpm** 包管理器

### 安装依赖

```bash
pnpm install
```

### 预览现有视频

```bash
pnpm run dev
```

浏览器会自动打开 Remotion Studio，你可以在侧边栏看到所有可用的视频项目。

### 创建新的视频项目

使用提供的脚本快速创建新视频项目：

```bash
# 方式1：直接指定项目名称
node scripts/create-video.ts my-video

# 方式2：交互式输入
node scripts/create-video.ts
```

脚本会自动：
1. 创建项目目录结构
2. 生成模板文件
3. 配置 Composition
4. 创建 README 文档

## 📦 核心功能

### 1. 共享组件库 (`packages/shared`)

提供可复用的视频组件和工具：

#### 动画 Hooks
- `useFadeIn` - 淡入动画
- `useFadeOut` - 淡出动画
- `useSlideIn` - 滑入动画
- `useSpringScale` - 弹簧缩放动画
- `useFadeSlideIn` - 淡入+滑入组合动画
- `useStagger` - 交错动画（用于列表）
- 更多...

#### 共享组件
- `FullScreenContainer` - 全屏容器
- `CenterContainer` - 居中容器
- `MainTitle` - 主标题
- `Subtitle` - 副标题
- `SectionTitle` - 章节标题
- `Card` - 基础卡片
- `IconCard` - 图标卡片
- `FeatureCard` - 特性卡片
- `PrimaryButton` - 主要按钮
- `TechBadge` - 技术标签
- `Scene` - 场景容器
- `VerticalList` - 垂直列表
- `GridList` - 网格列表
- `FlexList` - 弹性列表

#### 工具函数
- 时间格式化
- 颜色转换
- 数值映射
- 数组操作
- 对象操作
- 字符串处理
- 验证函数
- 更多...

### 2. 苹果风格设计系统 (`packages/assets/colors`)

完整的苹果风格颜色系统：

#### 系统颜色
- 红色、橙色、黄色、绿色、蓝色、紫色、粉色、靛蓝色

#### 语义化颜色
- 背景颜色（primary, secondary, tertiary, elevated）
- 文字颜色（primary, secondary, tertiary, disabled）
- 强调色（blue, green, red, yellow, purple）
- 卡片颜色
- 边框颜色
- 阴影颜色

#### 渐变色
- 蓝色渐变、紫色渐变、橙色渐变、绿色渐变、深色渐变

#### 技术栈颜色
- React, TypeScript, JavaScript, Node.js, Python, Java, Go, Rust, Swift, Kotlin, Docker, Kubernetes, AWS, Azure, GCP, GraphQL, MongoDB, PostgreSQL, Redis, MySQL, Nginx, Vue, Angular, Svelte, Next.js, Remix, Vite, Tailwind, Figma, Sketch, Adobe, Git, GitHub, GitLab, Bitbucket, Jira, Slack, Discord, Notion, Linear, Framer, Storybook 等

#### 颜色工具函数
- `toRgba` - 转换为 rgba 格式
- `createShadow` - 创建阴影
- `createGradient` - 创建渐变
- `getTechColor` - 获取技术栈颜色

### 3. 视频项目创建脚本 (`scripts/create-video.ts`)

快速创建新视频项目的工具：

**功能特性：**
- 自动生成项目结构
- 创建模板文件（Root.tsx, index.ts, index.css, 主组件）
- 生成 README 文档
- 支持自定义项目名称
- 自动转换为 PascalCase 和 kebab-case

**使用示例：**

```bash
# 创建名为 "product-demo" 的视频项目
node scripts/create-video.ts product-demo

# 创建名为 "team-intro" 的视频项目
node scripts/create-video.ts team-intro
```

生成的项目包含：
- 完整的目录结构
- 配置好的 Composition
- 苹果风格的模板代码
- 详细的 README 文档

## 🎨 设计原则

### 苹果风格设计

本项目采用苹果的设计语言，遵循以下原则：

1. **极简主义** - 去除不必要的装饰，突出核心内容
2. **大标题** - 使用大字号标题，增强视觉冲击力
3. **高对比度** - 黑色背景 + 白色文字，确保可读性
4. **精致动画** - 使用平滑的弹簧动画，避免生硬的过渡
5. **统一配色** - 使用苹果官方颜色系统
6. **优雅排版** - 合理的间距和对齐

### 动画原则

- **平滑过渡** - 使用 `spring` 动画而非线性插值
- **适度时长** - 动画时长控制在 1-2 秒内
- **交错出现** - 列表项使用交错动画，避免同时出现
- **自然节奏** - 遵循物理规律，避免不自然的运动

## 📝 开发工作流

### 1. 创建新视频项目

```bash
# 使用脚本创建
node scripts/create-video.ts my-video

# 进入项目目录
cd videos/my-video
```

### 2. 开发视频

```bash
# 启动开发服务器
pnpm run dev

# 在浏览器中打开 Remotion Studio
# 选择你的视频项目进行预览
```

### 3. 使用共享组件

```tsx
import {
  FullScreenContainer,
  MainTitle,
  Subtitle,
  Card,
  IconCard,
  FeatureCard,
  PrimaryButton,
  TechBadge,
  VerticalList,
  GridList,
  FlexList,
} from '../../../packages/shared';

import {
  useFadeIn,
  useSlideIn,
  useSpringScale,
  useStagger,
} from '../../../packages/shared';

import { AppleColors } from '../../../packages/assets/colors/apple';

// 使用组件
<FullScreenContainer backgroundColor={AppleColors.Semantic.background.primary}>
  <MainTitle>我的视频</MainTitle>
  <Subtitle>副标题</Subtitle>
  
  <GridList columns={2}>
    <FeatureCard icon="🎯" title="特性1" description="描述1" />
    <FeatureCard icon="💡" title="特性2" description="描述2" />
  </GridList>
</FullScreenContainer>
```

### 4. 渲染视频

```bash
# 渲染为 MP4
pnpm exec remotion render my-video out/my-video.mp4

# 渲染为 WebM
pnpm exec remotion render my-video out/my-video.webm --codec=vp9

# 渲染为 GIF
pnpm exec remotion render my-video out/my-video.gif --codec=gif

# 高级选项
pnpm exec remotion render my-video out/my-video.mp4 \
  --jpeg-quality=90 \
  --concurrency=4 \
  --frames=0-300
```

## 🛠️ 技术栈

- **Remotion** - 视频制作框架
- **React** - UI 组件库
- **TypeScript** - 类型安全
- **pnpm** - 包管理器
- **Tailwind CSS** - 样式框架（可选）

## 📚 参考资料

- [Remotion 官方文档](https://www.remotion.dev/docs/)
- [Remotion Discord 社区](https://discord.gg/6VzzNDwUwV)
- [苹果 Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Monorepo 最佳实践](https://github.com/renli-tech/monorepo)

## 🤝 贡献指南

欢迎贡献代码、报告问题或提出建议！

### 添加新的共享组件

1. 在 `packages/shared/components/` 中创建新组件
2. 在 `packages/shared/components/index.ts` 中导出
3. 添加 TypeScript 类型定义
4. 编写使用示例

### 添加新的动画 Hook

1. 在 `packages/shared/hooks/` 中创建新 Hook
2. 在 `packages/shared/hooks/animations.ts` 中导出
3. 添加 JSDoc 注释
4. 编写使用示例

### 添加新的颜色

1. 在 `packages/assets/colors/apple.ts` 中添加颜色定义
2. 更新相关类型定义
3. 添加颜色工具函数（如果需要）

## 📄 许可证

本项目采用 MIT 许可证。

## 🆘 获取帮助

如果遇到问题：

1. 查看 [Remotion 官方文档](https://www.remotion.dev/docs/)
2. 在 [Discord 社区](https://discord.gg/6VzzNDwUwV) 提问
3. 查看 [GitHub Issues](https://github.com/remotion-dev/remotion/issues)
4. 阅读项目中的 README 文档

## 🎯 未来计划

- [ ] 添加更多共享组件
- [ ] 创建更多视频模板
- [ ] 添加 3D 组件支持
- [ ] 集成 AI 辅助视频生成
- [ ] 添加视频预览和对比工具
- [ ] 创建组件库文档网站
- [ ] 添加单元测试
- [ ] 优化渲染性能

---

开始你的视频创作之旅吧！🎬