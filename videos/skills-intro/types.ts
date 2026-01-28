export type SkillsIntroConfig = {
  meta: {
    id: string;
    title: string;
    subtitle: string;
    tagline: string;
  };
  video: {
    width: number;
    height: number;
    fps: number;
    durationInFrames: number;
  };
  theme: {
    fonts: {
      display: string;
      body: string;
    };
    colors: {
      background: string;
      text: string;
      textSecondary: string;
      accent: string;
      accentAlt: string;
      surface: string;
      surfaceHi: string;
      border: string;
    };
  };
  audio?: {
    enabled: boolean;
    src: string;
    volume?: number;
    startFrame?: number;
    trimBefore?: number;
    trimAfter?: number;
    playbackRate?: number;
    loop?: boolean;
  };
  timeline: {
    opening: { from: number; duration: number };
    whatIs: { from: number; duration: number };
    coreFeatures: { from: number; duration: number };
    techStack: { from: number; duration: number };
    summary: { from: number; duration: number };
  };
  scenes: {
    whatIs: {
      title: string;
      cards: Array<{
        icon: string;
        title: string;
        desc: string;
        delay: number;
      }>;
    };
    coreFeatures: {
      title: string;
      items: Array<{
        icon: string;
        title: string;
        desc: string;
        delay: number;
      }>;
    };
    techStack: {
      title: string;
      items: Array<{
        name: string;
        color: string;
        delay: number;
      }>;
    };
    summary: {
      title: string;
      points: string[];
      cta: string;
    };
  };
};
