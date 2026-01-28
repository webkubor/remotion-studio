import { Audio } from "@remotion/media";
import { Sequence, staticFile } from "remotion";
import type { SkillsIntroConfig } from "../types";

const resolveAudioSrc = (src: string) => {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  return staticFile(src);
};

export const AudioTrack = ({
  audio,
}: {
  audio?: SkillsIntroConfig["audio"];
}) => {
  if (!audio?.enabled) {
    return null;
  }

  const {
    src,
    volume = 1,
    startFrame = 0,
    trimBefore,
    trimAfter,
    playbackRate,
    loop,
  } = audio;

  return (
    <Sequence from={startFrame}>
      <Audio
        src={resolveAudioSrc(src)}
        volume={volume}
        trimBefore={trimBefore}
        trimAfter={trimAfter}
        playbackRate={playbackRate}
        loop={loop}
      />
    </Sequence>
  );
};
