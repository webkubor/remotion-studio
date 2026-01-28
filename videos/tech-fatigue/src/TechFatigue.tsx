import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile, random } from "remotion";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import config from "../data/config.json";
import { Fonts } from "./Fonts";
import { MemphisColors } from "@packages/assets/colors/memphis";

// --- 节奏提取 Hook ---
const useMusicBeat = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(staticFile(config.audio.src));

  if (!audioData) {
    return 1;
  }

  // 提取当前帧的振幅 (Amplitude)
  // visualizeAudio 返回一个表示频谱的数组，我们可以取均值作为音量
  // 这里的 frame 需要适当偏移，因为 Audio 组件可能也在播放
  const visualization = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 16, // 只需要少量样本计算总体音量
  });

  // 计算平均音量 (0~1)
  const volume = visualization.reduce((a, b) => a + b, 0) / visualization.length;
  
  // 放大效果，让微小的声音也能产生动效
  // 基础缩放 1.0，最大缩放 1.15
  return 1 + Math.min(0.15, volume * 4); 
};

// --- 工具组件 ---

// 1. 疯狂背景：每句话换个颜色，带点噪点 + 随音乐闪烁
const CrazyBackground = ({ index, duration }: { index: number, duration: number }) => {
  const frame = useCurrentFrame();
  const beatScale = useMusicBeat(); // 获取节奏
  
  const baseColor = MemphisColors.Palette[index % MemphisColors.Palette.length];
  
  // 简单的条纹纹理
  const stripeOffset = (frame * 2) % 100;
  
  // 随节奏改变亮度
  const brightness = 100 + (beatScale - 1) * 50; // 100% -> 107.5%

  return (
    <AbsoluteFill style={{ backgroundColor: baseColor, overflow: 'hidden', filter: `brightness(${brightness}%)` }}>
      {/* 动态条纹 */}
      <div style={{
        position: 'absolute',
        top: -100, left: -100, right: -100, bottom: -100,
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(0,0,0,0.05) 0px,
          rgba(0,0,0,0.05) 20px,
          transparent 20px,
          transparent 40px
        )`,
        transform: `translateY(${stripeOffset}px)`
      }} />
      
      {/* 噪点覆盖 */}
      <AbsoluteFill style={{ opacity: 0.15, filter: 'contrast(150%) brightness(100%)' }}>
        <div style={{
          width: '100%', height: '100%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
        }} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// 2. 故障文字组件
const GlitchText = ({ text, delay }: { text: string, delay: number }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const beatScale = useMusicBeat(); // 获取节奏
  
  // 进场弹跳
  const scale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 12, stiffness: 200, mass: 0.5 }
  });
  
  // 随机故障抖动
  const isGlitch = frame > delay + 30 && frame % 15 < 3;
  const skewX = isGlitch ? random(frame) * 20 - 10 : 0;
  const translateX = isGlitch ? random(frame + 1) * 10 - 5 : 0;
  const colorOffset = isGlitch 
    ? `2px 2px 0px ${MemphisColors.Glitch.Cyan}, -2px -2px 0px ${MemphisColors.Glitch.Red}` 
    : `4px 4px 0px ${MemphisColors.Glitch.Dim}`;
  
  // 最终缩放 = 进场缩放 * 音乐节奏缩放
  const finalScale = scale * beatScale;

  return (
    <h1 style={{
      fontFamily: '"Montserrat", "HarmonyOS", sans-serif',
      fontWeight: 800,
      fontSize: 80,
      lineHeight: 1.1,
      margin: 10,
      color: MemphisColors.Glitch.Primary,
      textTransform: 'uppercase',
      transform: `scale(${finalScale}) skewX(${skewX}deg) translateX(${translateX}px)`,
      textShadow: colorOffset,
      backgroundColor: MemphisColors.Glitch.Background,
      padding: '10px 20px',
      border: `4px solid ${MemphisColors.Glitch.Shadow}`,
      boxShadow: `8px 8px 0px ${MemphisColors.Glitch.Shadow}`,
      display: 'inline-block'
    }}>
      {text}
    </h1>
  );
};

// 3. Emoji 炸弹
const EmojiBomb = ({ emojis }: { emojis: string[] }) => {
  const frame = useCurrentFrame();
  const beatScale = useMusicBeat(); // 获取节奏

  if (!emojis || emojis.length === 0) return null;

  return (
    <AbsoluteFill>
      {emojis.map((emoji, i) => {
        const seed = i * 123;
        const x = random(seed) * 100; // 0-100%
        const y = random(seed + 1) * 100; // 0-100%
        const delay = i * 5;
        
        const scale = spring({
          frame: frame - delay,
          fps: 30,
          config: { damping: 15, stiffness: 150 }
        });
        
        const rotate = interpolate(frame, [0, 100], [0, random(seed + 2) > 0.5 ? 45 : -45]);
        
        // Emoji 对节奏更敏感，缩放更夸张
        const finalScale = scale * (1 + (beatScale - 1) * 2);

        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
            fontSize: 120,
            transform: `scale(${finalScale}) rotate(${rotate}deg)`,
            opacity: scale
          }}>
            {emoji}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// --- 主场景 ---

const Scene = ({ text, duration, index }: { text: string; duration: number; index: number }) => {
  // 根据文案自动匹配一些 Emoji (简单硬编码匹配)
  const getEmojis = (txt: string) => {
    if (txt.includes("玩意")) return ["😅", "🤔", "🤷‍♂️"];
    if (txt.includes("Manus") || txt.includes("OpenCode")) return ["💻", "⌨️", "📦"];
    if (txt.includes("Remotion") || txt.includes("Figma")) return ["🎨", "🎥", "🗡️"];
    if (txt.includes("iOS") || txt.includes("Mac")) return ["🍎", "📱", "💸"];
    if (txt.includes("AGI")) return ["🤖", "🤯", "💊"];
    if (txt.includes("游戏")) return ["🎮", "🕹️", "👾"];
    return ["✨", "⚡", "🔥"];
  };

  const emojis = getEmojis(text);

  return (
    <AbsoluteFill>
      <CrazyBackground index={index} duration={duration} />
      
      {/* Emoji 层 */}
      <EmojiBomb emojis={emojis} />

      {/* 文字层 - 居中容器 */}
      <AbsoluteFill style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 60
      }}>
        {text.split('\n').map((line, i) => (
          <div key={i} style={{ transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})`, zIndex: 10 }}>
            <GlitchText text={line} delay={i * 15} />
          </div>
        ))}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export const TechFatigue = () => {
  let currentFrame = 0;

  return (
    <AbsoluteFill>
      <Fonts />
      
      {/* 音乐 - 必须有这个组件，useAudioData 才能读取到数据流，但实际上 Audio 组件只负责播放，useAudioData 负责分析文件 */}
      {/* Remotion 推荐: <Audio /> 用于播放，useAudioData 独立读取源文件。 */}
      {config.audio.enabled && (
         <Audio 
           src={staticFile(config.audio.src)} 
           volume={config.audio.volume} 
           loop 
         />
      )}
      
      {config.scenes.map((scene, index) => {
        const from = currentFrame;
        currentFrame += scene.duration;
        
        return (
          <Sequence key={index} from={from} durationInFrames={scene.duration}>
            <Scene text={scene.text} duration={scene.duration} index={index} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};