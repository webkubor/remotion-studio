import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig, Audio, staticFile } from "remotion";
import config from "../data/config.json";
import { getTheme } from "../styles/theme";

const theme = getTheme(config);

// 自定义高级背景：噪点 + 极简流动光晕
const MinimalistBackground = () => {
  const frame = useCurrentFrame();
  
  // 极慢的流动效果
  const gradientMove = frame * 0.15;
  
  return (
    <AbsoluteFill style={{ backgroundColor: "#FAFAFA", overflow: "hidden" }}>
      {/* 1. 细微的噪点纹理 (通过 SVG 滤镜或 base64 图片模拟，这里用 CSS radial gradient 模拟光感) */}
      <AbsoluteFill style={{ opacity: 0.6 }}>
        <div style={{ 
          position: "absolute",
          top: "-50%",
          left: "-50%",
          right: "-50%",
          bottom: "-50%",
          backgroundImage: `radial-gradient(circle at 50% 50%, #000000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          opacity: 0.03,
          transform: "rotate(20deg)"
        }} />
      </AbsoluteFill>

      {/* 2. 动态光晕 - 左上角冷色 */}
      <div style={{ 
        position: "absolute",
        top: "-20%",
        left: "-10%",
        width: "80%",
        height: "80%",
        background: "radial-gradient(circle, rgba(200, 220, 255, 0.15) 0%, transparent 70%)",
        filter: "blur(60px)",
        transform: `translate(${Math.sin(gradientMove * 0.02) * 50}px, ${Math.cos(gradientMove * 0.03) * 50}px)`,
      }} />

      {/* 3. 动态光晕 - 右下角暖色 */}
      <div style={{ 
        position: "absolute",
        bottom: "-20%",
        right: "-10%",
        width: "90%",
        height: "90%",
        background: "radial-gradient(circle, rgba(255, 230, 200, 0.12) 0%, transparent 70%)",
        filter: "blur(80px)",
        transform: `translate(${Math.cos(gradientMove * 0.025) * 50}px, ${Math.sin(gradientMove * 0.035) * 50}px)`,
      }} />
    </AbsoluteFill>
  );
};

const TextSlide = ({ text, type, duration }: { text: string; type?: string; duration: number }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 进场动画：模糊 + 上浮 + 透明度
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const blur = interpolate(frame, [0, 20], [20, 0], { extrapolateRight: "clamp" });
  const translateY = interpolate(frame, [0, 25], [40, 0], { extrapolateRight: "clamp", easing: (t) => t * (2 - t) }); // Ease out quad
  
  // 出场动画
  const outOpacity = interpolate(frame, [duration - 15, duration], [1, 0], { extrapolateRight: "clamp" });
  const outScale = interpolate(frame, [duration - 15, duration], [1, 0.95], { extrapolateRight: "clamp" });

  const currentOpacity = opacity * outOpacity;

  const isTitle = type === "title";
  const isOutro = type === "outro";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        textAlign: "center",
        opacity: currentOpacity,
        filter: `blur(${blur}px)`,
        transform: `translateY(${translateY}px) scale(${outScale})`,
      }}
    >
      {text.split("\n").map((line, i) => (
        <h1
          key={i}
          style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
            color: "#1d1d1f", // Apple style dark text
            fontSize: isTitle ? 90 : isOutro ? 80 : 70,
            fontWeight: isTitle ? 700 : 500,
            margin: "0 0 24px 0",
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            whiteSpace: "pre-wrap",
            textShadow: "0 10px 30px rgba(0,0,0,0.05)", // 极淡的阴影增加立体感
          }}
        >
          {line}
        </h1>
      ))}
      {isTitle && (
        <div style={{ 
          width: 80, 
          height: 6, 
          background: "#1d1d1f", 
          marginTop: 40,
          borderRadius: 3,
          opacity: 0.1 
        }} />
      )}
    </div>
  );
};

export const TechFatigue = () => {
  let currentFrame = 0;

  return (
    <AbsoluteFill>
      <MinimalistBackground />
      
      {/* 直接引用 Audio 组件以确保播放 */}
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
            <TextSlide text={scene.text} type={scene.type} duration={scene.duration} />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};