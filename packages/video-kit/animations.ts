import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const useFadeIn = (startFrame = 0, duration = 30) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateRight: "clamp",
  });
};

export const useFadeInUp = (startFrame = 0, duration = 30, distance = 40) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [distance, 0],
    { extrapolateRight: "clamp" }
  );

  return { opacity, transform: `translateY(${translateY}px)` };
};

export const useSpringScale = (
  startFrame = 0,
  config: { damping?: number; stiffness?: number } = {}
) => {
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

export const useStagger = (index: number, base = 0, step = 15) => {
  return base + index * step;
};
