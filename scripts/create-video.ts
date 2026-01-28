#!/usr/bin/env node

/**
 * Remotion Studio 视频项目创建脚本
 * 用于快速创建新的视频项目，基于模板
 *
 * 使用方法：
 *   node scripts/create-video.ts <video-name>
 *
 * 示例：
 *   node scripts/create-video.ts my-video
 */

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

// 配置常量
const CONFIG = {
  ROOT_DIR: path.resolve(__dirname, '..'),
  VIDEOS_DIR: 'videos',
  TEMPLATE_DIR: '_template',
  DEFAULT_FPS: 30,
  DEFAULT_WIDTH: 1920,
  DEFAULT_HEIGHT: 1080,
  DEFAULT_DURATION: 300, // 10秒 @ 30fps
};

// 颜色输出
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// 工具函数
function log(message: string, color: string = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function error(message: string) {
  log(`❌ ${message}`, colors.red);
}

function success(message: string) {
  log(`✅ ${message}`, colors.green);
}

function info(message: string) {
  log(`ℹ️  ${message}`, colors.blue);
}

function warn(message: string) {
  log(`⚠️  ${message}`, colors.yellow);
}

// 创建目录（如果不存在）
function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 复制文件或目录
function copyRecursive(src: string, dest: string, replacements: Record<string, string> = {}): void {
  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    const files = fs.readdirSync(src);

    files.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      copyRecursive(srcPath, destPath, replacements);
    });
  } else {
    let content = fs.readFileSync(src, 'utf-8');

    // 执行替换
    for (const [key, value] of Object.entries(replacements)) {
      content = content.replace(new RegExp(key, 'g'), value);
    }

    fs.writeFileSync(dest, content);
  }
}

// 检查项目名称是否有效
function validateProjectName(name: string): boolean {
  if (!name || name.trim().length === 0) {
    return false;
  }

  // 检查是否只包含字母、数字、连字符和下划线
  const validNameRegex = /^[a-zA-Z0-9-_]+$/;
  return validNameRegex.test(name);
}

// 转换项目名称为 PascalCase
function toPascalCase(name: string): string {
  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// 转换项目名称为 kebab-case
function toKebabCase(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase();
}

// 创建模板文件
function createTemplateFiles(videoName: string, videoDir: string): void {
  const pascalName = toPascalCase(videoName);
  const kebabName = toKebabCase(videoName);

  // 创建 src 目录
  const srcDir = path.join(videoDir, 'src');
  ensureDir(srcDir);

  // 创建 index.css
  const indexCss = `/* ${pascalName} 视频样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
`;
  fs.writeFileSync(path.join(srcDir, 'index.css'), indexCss);

  // 创建 index.ts
  const indexTs = `// ${pascalName} 视频入口文件
import { registerRoot } from 'remotion';
import { RemotionRoot } from './Root';

registerRoot(RemotionRoot);
`;
  fs.writeFileSync(path.join(srcDir, 'index.ts'), indexTs);

  // 创建 Root.tsx
  const rootTsx = `import './index.css';
import { Composition } from 'remotion';
import { ${pascalName} } from '../${pascalName}';
import { AppleColors } from '../../../packages/assets/colors/apple';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="${kebabName}"
        component={${pascalName}}
        durationInFrames={${CONFIG.DEFAULT_DURATION}}
        fps={${CONFIG.DEFAULT_FPS}}
        width={${CONFIG.DEFAULT_WIDTH}}
        height={${CONFIG.DEFAULT_HEIGHT}}
        defaultProps={{
          colors: AppleColors,
        }}
      />
    </>
  );
};
`;
  fs.writeFileSync(path.join(srcDir, 'Root.tsx'), rootTsx);

  // 创建主组件文件
  const mainTsx = `import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from 'remotion';
import { AppleColors } from '../../packages/assets/colors/apple';

// 场景1：开场标题
const OpeningScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 45], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const titleScale = spring({
    frame,
    fps,
    config: { damping: 200, stiffness: 100 },
  });

  const subtitleOpacity = interpolate(frame, [30, 75], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const subtitleY = interpolate(frame, [30, 75], [30, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: AppleColors.Semantic.background.primary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          color: AppleColors.Semantic.text.primary,
          fontSize: 140,
          fontWeight: 600,
          opacity: titleOpacity,
          transform: \`scale(\${titleScale})\`,
          textAlign: 'center',
          margin: 0,
          letterSpacing: '-2px',
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        ${pascalName}
      </h1>
      <p
        style={{
          color: AppleColors.Semantic.text.secondary,
          fontSize: 32,
          marginTop: 24,
          opacity: subtitleOpacity,
          transform: \`translateY(\${subtitleY}px)\`,
          textAlign: 'center',
          fontWeight: 400,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        技术分享系列
      </p>
    </AbsoluteFill>
  );
};

// 主组件
export const ${pascalName} = () => {
  return (
    <AbsoluteFill>
      {/* 场景1：开场标题 - 0-90帧（3秒） */}
      <Sequence from={0} durationInFrames={90}>
        <OpeningScene />
      </Sequence>
    </AbsoluteFill>
  );
};
`;
  fs.writeFileSync(path.join(videoDir, `${pascalName}.tsx`), mainTsx);

  // 创建 README.md
  const readme = `# ${pascalName} 视频

## 📹 视频信息

- **项目名称**: ${videoName}
- **组件名称**: ${pascalName}
- **分辨率**: ${CONFIG.DEFAULT_WIDTH}x${CONFIG.DEFAULT_HEIGHT}
- **帧率**: ${CONFIG.DEFAULT_FPS} fps
- **时长**: ${CONFIG.DEFAULT_DURATION} 帧 (${(CONFIG.DEFAULT_DURATION / CONFIG.DEFAULT_FPS).toFixed(1)} 秒)

## 🚀 快速开始

### 预览视频

\`\`\`bash
pnpm run dev
\`\`\`

然后在浏览器中打开 Remotion Studio，选择 "${kebabName}" 组合。

### 渲染视频

\`\`\`bash
# 渲染为 MP4
pnpm exec remotion render ${kebabName} out/${kebabName}.mp4

# 渲染为 WebM
pnpm exec remotion render ${kebabName} out/${kebabName}.webm --codec=vp9

# 渲染为 GIF
pnpm exec remotion render ${kebabName} out/${kebabName}.gif --codec=gif
\`\`\`

## 📁 项目结构

\`\`\`
${videoName}/
├── src/
│   ├── Root.tsx          # Composition 定义
│   ├── index.ts          # 入口文件
│   └── index.css         # 样式文件
├── ${pascalName}.tsx     # 主视频组件
└── README.md             # 本文件
\`\`\`

## 🎨 自定义

### 修改视频时长

在 \`src/Root.tsx\` 中修改 \`durationInFrames\`：

\`\`\`tsx
<Composition
  id="${kebabName}"
  component={${pascalName}}
  durationInFrames={600}  // 修改这里
  // ...
/>
\`\`\`

### 修改分辨率

在 \`src/Root.tsx\` 中修改 \`width\` 和 \`height\`：

\`\`\`tsx
<Composition
  id="${kebabName}"
  component={${pascalName}}
  width={1920}  // 修改宽度
  height={1080} // 修改高度
  // ...
/>
\`\`\`

### 添加新场景

在主组件中使用 \`<Sequence>\` 添加新场景：

\`\`\`tsx
export const ${pascalName} = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={90}>
        <Scene1 />
      </Sequence>

      <Sequence from={90} durationInFrames={90}>
        <Scene2 />
      </Sequence>
    </AbsoluteFill>
  );
};
\`\`\`

## 📚 参考资料

- [Remotion 官方文档](https://www.remotion.dev/docs/)
- [共享组件库](../../packages/shared/)
- [颜色系统](../../packages/assets/colors/)

## 🆘 获取帮助

如果遇到问题，请查看：
1. [Remotion 官方文档](https://www.remotion.dev/docs/)
2. [Discord 社区](https://discord.gg/6VzzNDwUwV)
3. [GitHub Issues](https://github.com/remotion-dev/remotion/issues)
`;
  fs.writeFileSync(path.join(videoDir, 'README.md'), readme);
}

// 主函数
async function main() {
  // 获取命令行参数
  const args = process.argv.slice(2);
  let videoName = args[0];

  // 如果没有提供项目名称，提示用户输入
  if (!videoName) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const answer = await new Promise<string>((resolve) => {
      rl.question('请输入视频项目名称: ', (name) => {
        rl.close();
        resolve(name.trim());
      });
    });

    videoName = answer;
  }

  // 验证项目名称
  if (!validateProjectName(videoName)) {
    error('项目名称无效！只能包含字母、数字、连字符和下划线。');
    process.exit(1);
  }

  const pascalName = toPascalCase(videoName);
  const kebabName = toKebabCase(videoName);

  log('\n🎬 Remotion Studio 视频项目创建器\n', colors.bright);

  // 检查项目是否已存在
  const videoDir = path.join(CONFIG.ROOT_DIR, CONFIG.VIDEOS_DIR, kebabName);
  if (fs.existsSync(videoDir)) {
    error(`视频项目 "${kebabName}" 已存在！`);
    process.exit(1);
  }

  // 创建项目目录
  info(`正在创建视频项目: ${kebabName}...`);
  ensureDir(videoDir);

  // 创建模板文件
  info('正在创建模板文件...');
  createTemplateFiles(videoName, videoDir);

  // 更新主项目的 package.json（如果需要）
  info('正在更新项目配置...');

  // 完成
  success(`视频项目 "${kebabName}" 创建成功！\n`);

  // 显示使用说明
  log('📋 下一步操作：\n', colors.bright);
  log(`1. 进入项目目录：`);
  log(`   cd ${path.join(CONFIG.VIDEOS_DIR, kebabName)}\n`, colors.cyan);

  log(`2. 预览视频：`);
  log(`   pnpm run dev\n`, colors.cyan);

  log(`3. 在浏览器中打开 Remotion Studio，选择 "${kebabName}" 组合\n`, colors.cyan);

  log(`4. 渲染视频：`);
  log(`   pnpm exec remotion render ${kebabName} out/${kebabName}.mp4\n`, colors.cyan);

  log(`5. 编辑视频组件：`);
  log(`   ${path.join(CONFIG.VIDEOS_DIR, kebabName, `${pascalName}.tsx`)}\n`, colors.cyan);

  log('📚 更多信息请查看 README.md\n', colors.bright);
}

// 运行主函数
main().catch((err) => {
  error(err.message);
  process.exit(1);
});
