import { useCurrentFrame } from "remotion";
import React from "react";

export const Typewriter: React.FC<{
  text: string;
  className?: string;
  speed?: number;
}> = ({ text, className = "", speed = 1 }) => {
  const frame = useCurrentFrame();
  const charsShown = Math.floor(frame / speed);
  const textToShow = text.slice(0, charsShown);
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;

  return (
    <span className={className}>
      {textToShow}
      <span
        style={{
          opacity: cursorVisible ? 1 : 0,
          display: "inline-block",
          marginLeft: 2,
          width: 2,
          height: "1em",
          backgroundColor: "currentColor",
          verticalAlign: "middle",
        }}
      />
    </span>
  );
};
