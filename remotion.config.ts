// See all configuration options: https://www.remotion.dev/docs/config
// Each option also is available as a CLI flag: https://www.remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { Config } from "@remotion/cli/config";
import { enableTailwind } from "@remotion/tailwind-v4";

// 设置默认入口点为 skills-intro 视频
// 可以通过命令行参数覆盖：npx remotion studio videos/other-video/src/index.ts
Config.setEntryPoint("./videos/skills-intro/src/index.ts");

// 设置公共目录
Config.setPublicDir("./public");

// 设置视频图片格式
Config.setVideoImageFormat("jpeg");

// 覆盖已存在的输出文件
Config.setOverwriteOutput(true);

// 启用 Tailwind CSS v4
Config.overrideWebpackConfig(enableTailwind);

// 设置并发数（根据 CPU 核心数自动调整）
// 可以通过 --concurrency 参数覆盖
Config.setConcurrency(4);

// 设置日志级别
// 可选值: 'error', 'warn', 'info', 'verbose'
Config.setLevel("info");

// 设置 Studio 端口
// 可以通过 --port 参数覆盖
Config.setStudioPort(3000);

// 设置渲染器端口
Config.setRendererPort(3001);

// 启用 Webpack 缓存（加速后续构建）
Config.setCachingEnabled(true);

// 设置最大时间轴轨道数
Config.setMaxTimelineTracks(20);

// 设置像素格式
// 可选值: 'yuv420p', 'yuv422p', 'yuv444p', 'yuva420p'
Config.setPixelFormat("yuv420p");

// 设置编码器
// 可选值: 'h264', 'h265', 'vp8', 'vp9', 'prores'
Config.setCodec("h264");

// 设置 JPEG 质量（0-100）
Config.setJpegQuality(90);

// 设置图片序列模式
Config.setImageSequence(false);

// 设置图片序列模式下的图片格式
Config.setStillImageFormat("jpeg");

// 设置图片序列模式下的图片序列模式
Config.setImageSequencePattern("frame-[frame].[ext]");

// 设置环境变量文件路径
Config.setDotEnvLocation(".env");

// 设置输出目录
Config.setOutputLocation("./out");

// 设置浏览器可执行文件路径
// Config.setBrowserExecutable('/path/to/chrome');

// 设置 Chromium 标志
// Config.setChromiumFlags(['--no-sandbox', '--disable-setuid-sandbox']);

// 设置忽略证书错误
// Config.setIgnoreCertificateErrors(true);

// 设置静默模式
// Config.setMuted(true);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBitrate('5M');

// 设置帧率
// Config.setFps(30);

// 设置高度
// Config.setHeight(1080);

// 设置宽度
// Config.setWidth(1920);

// 设置时长
// Config.setDurationInFrames(300);

// 设置比例
// Config.setEveryNthFrame(1);

// 设置缩放
// Config.setScale(1);

// 设置音频编解码器
// Config.setAudioCodec('aac');

// 设置音频比特率
// Config.setAudioBitrate('128k');

// 设置视频比特率
// Config.setVideoBit
