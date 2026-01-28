import { useCurrentFrame, useVideoConfig, interpolate, spring, Easing } from 'remotion';

/**
 * 淡入动画 Hook
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @returns opacity 值
 */
export const useFadeIn = (startFrame: number = 0, duration: number = 30): number => {
  const frame = useCurrentFrame();
  return interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateRight: 'clamp',
  });
};

/**
 * 淡出动画 Hook
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @returns opacity 值
 */
export const useFadeOut = (startFrame: number = 0, duration: number = 30): number => {
  const frame = useCurrentFrame();
  return interpolate(frame, [startFrame, startFrame + duration], [1, 0], {
    extrapolateRight: 'clamp',
  });
};

/**
 * 滑入动画 Hook
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @param direction 方向 ('up', 'down', 'left', 'right')
 * @param distance 移动距离（像素）
 * @returns translateY 或 translateX 值
 */
export const useSlideIn = (
  startFrame: number = 0,
  duration: number = 30,
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 100
): string => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const currentDistance = distance * (1 - progress);

  switch (direction) {
    case 'up':
      return `translateY(${currentDistance}px)`;
    case 'down':
      return `translateY(-${currentDistance}px)`;
    case 'left':
      return `translateX(${currentDistance}px)`;
    case 'right':
      return `translateX(-${currentDistance}px)`;
  }
};

/**
 * 缩放动画 Hook（使用 spring）
 * @param startFrame 开始帧
 * @param config spring 配置
 * @returns scale 值
 */
export const useSpringScale = (
  startFrame: number = 0,
  config: { damping?: number; stiffness?: number } = {}
): number => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return spring({
    frame: frame - startFrame,
    fps,
    config: {
      damping: config.damping ?? 200,
      stiffness: config.stiffness ?? 100,
    },
  });
};

/**
 * 缩放动画 Hook（使用 interpolate）
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @param from 起始值
 * @param to 结束值
 * @returns scale 值
 */
export const useScale = (
  startFrame: number = 0,
  duration: number = 30,
  from: number = 0,
  to: number = 1
): number => {
  const frame = useCurrentFrame();
  return interpolate(frame, [startFrame, startFrame + duration], [from, to], {
    extrapolateRight: 'clamp',
  });
};

/**
 * 旋转动画 Hook
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @param from 起始角度（度）
 * @param to 结束角度（度）
 * @returns rotate 值
 */
export const useRotate = (
  startFrame: number = 0,
  duration: number = 30,
  from: number = 0,
  to: number = 360
): string => {
  const frame = useCurrentFrame();
  const rotation = interpolate(frame, [startFrame, startFrame + duration], [from, to], {
    extrapolateRight: 'clamp',
  });
  return `rotate(${rotation}deg)`;
};

/**
 * 组合动画 Hook - 淡入 + 滑入
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @param direction 滑入方向
 * @param distance 滑入距离
 * @returns 包含 opacity 和 transform 的样式对象
 */
export const useFadeSlideIn = (
  startFrame: number = 0,
  duration: number = 30,
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 100
): { opacity: number; transform: string } => {
  const opacity = useFadeIn(startFrame, duration);
  const transform = useSlideIn(startFrame, duration, direction, distance);

  return { opacity, transform };
};

/**
 * 组合动画 Hook - 淡入 + 缩放
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @param from 起始缩放值
 * @param to 结束缩放值
 * @returns 包含 opacity 和 transform 的样式对象
 */
export const useFadeScaleIn = (
  startFrame: number = 0,
  duration: number = 30,
  from: number = 0.8,
  to: number = 1
): { opacity: number; transform: string } => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const scale = spring({
    frame: frame - startFrame,
    fps,
    config: { damping: 200, stiffness: 100 },
  });

  return { opacity, transform: `scale(${scale})` };
};

/**
 * 延迟动画 Hook
 * @param delay 延迟帧数
 * @returns 是否开始动画
 */
export const useDelay = (delay: number): boolean => {
  const frame = useCurrentFrame();
  return frame >= delay;
};

/**
 * 循环动画 Hook
 * @param duration 循环周期（帧数）
 * @param progress 进度值（0-1）
 * @returns 当前循环的进度
 */
export const useLoop = (duration: number, progress: number = 1): number => {
  const frame = useCurrentFrame();
  const loopFrame = frame % duration;
  return interpolate(loopFrame, [0, duration * progress], [0, 1], {
    extrapolateRight: 'clamp',
  });
};

/**
 * 弹跳动画 Hook
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @param bounceCount 弹跳次数
 * @returns translateY 值
 */
export const useBounce = (
  startFrame: number = 0,
  duration: number = 30,
  bounceCount: number = 1
): string => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.68, -0.55, 0.265, 1.55),
  });

  const bounceHeight = 50 * Math.sin(progress * Math.PI * bounceCount);
  return `translateY(${-bounceHeight}px)`;
};

/**
 * 抖动动画 Hook
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @param intensity 抖动强度
 * @returns transform 值
 */
export const useShake = (
  startFrame: number = 0,
  duration: number = 30,
  intensity: number = 10
): string => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const x = Math.sin(progress * Math.PI * 10) * intensity * (1 - progress);
  const y = Math.cos(progress * Math.PI * 10) * intensity * (1 - progress);

  return `translate(${x}px, ${y}px)`;
};

/**
 * 脉冲动画 Hook
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @param minScale 最小缩放值
 * @param maxScale 最大缩放值
 * @returns scale 值
 */
export const usePulse = (
  startFrame: number = 0,
  duration: number = 30,
  minScale: number = 0.95,
  maxScale: number = 1.05
): number => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.inOut(Easing.sin),
  });

  return interpolate(progress, [0, 0.5, 1], [minScale, maxScale, minScale]);
};

/**
 * 打字机效果 Hook
 * @param startFrame 开始帧
 * @param text 要显示的文本
 * @param speed 打字速度（每帧显示的字符数）
 * @returns 当前显示的文本
 */
export const useTypewriter = (
  startFrame: number = 0,
  text: string,
  speed: number = 1
): string => {
  const frame = useCurrentFrame();
  const progress = Math.max(0, frame - startFrame);
  const charCount = Math.min(Math.floor(progress * speed), text.length);
  return text.slice(0, charCount);
};

/**
 * 交错动画 Hook - 用于列表项依次出现
 * @param startFrame 开始帧
 * @param index 项目索引
 * @param delay 每个项目之间的延迟帧数
 * @param duration 每个项目的动画持续帧数
 * @returns opacity 和 transform
 */
export const useStagger = (
  startFrame: number = 0,
  index: number,
  delay: number = 15,
  duration: number = 30
): { opacity: number; transform: string } => {
  const itemStartFrame = startFrame + index * delay;
  return useFadeSlideIn(itemStartFrame, duration, 'up', 50);
};

/**
 * 视差滚动效果 Hook
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @param speed 滚动速度
 * @returns translateY 值
 */
export const useParallax = (
  startFrame: number = 0,
  duration: number = 100,
  speed: number = 1
): string => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const distance = 100 * speed;
  return `translateY(${distance * progress}px)`;
};

/**
 * 颜色渐变动画 Hook
 * @param startFrame 开始帧
 * @param duration 持续帧数
 * @param fromColor 起始颜色
 * @param toColor 结束颜色
 * @returns 当前颜色
 */
export const useColorTransition = (
  startFrame: number = 0,
  duration: number = 30,
  fromColor: string,
  toColor: string
): string => {
  const frame = useCurrentFrame();
  return interpolateColors(
    frame,
    [startFrame, startFrame + duration],
    [fromColor, toColor],
    {
      extrapolateRight: 'clamp',
    }
  );
};

// 导出所有 hooks
export const AnimationHooks = {
  useFadeIn,
  useFadeOut,
  useSlideIn,
  useSpringScale,
  useScale,
  useRotate,
  useFadeSlideIn,
  useFadeScaleIn,
  useDelay,
  useLoop,
  useBounce,
  useShake,
  usePulse,
  useTypewriter,
  useStagger,
  useParallax,
  useColorTransition,
};

export default AnimationHooks;
