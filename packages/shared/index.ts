/**
 * Remotion Studio 共享组件库
 * 提供可复用的动画组件、Hooks 和工具函数
 */

// 导出动画 Hooks
export * from './hooks/animations';

// 导出颜色系统
export { AppleColors, default as Colors } from '../assets/colors/apple';

// 导出工具函数
export * from './utils';

// 导出共享组件
export * from './components';

// 重新导出常用的 Remotion 组件和函数
export {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from 'remotion';

// 版本信息
export const SHARED_VERSION = '1.0.0';

// 默认导出
export default {
  version: SHARED_VERSION,
  hooks: require('./hooks/animations'),
  colors: require('../assets/colors/apple'),
  utils: require('./utils'),
  components: require('./components'),
};
