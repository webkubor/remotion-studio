import { AbsoluteFill } from "remotion";
import type { CSSProperties, ReactNode } from "react";
import type { ThemeTokens } from "./types";

export const SceneShell = ({
  theme,
  background,
  children,
  style,
}: {
  theme: ThemeTokens;
  background: ReactNode;
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <AbsoluteFill style={{ color: theme.colors.text }}>
      {background}
      <AbsoluteFill style={style}>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};
