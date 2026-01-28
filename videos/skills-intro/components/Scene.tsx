import type { CSSProperties, ReactNode } from "react";
import { SceneShell } from "../../../packages/video-kit";
import type { Theme } from "../styles/theme";

export const Scene = ({
  theme,
  children,
  style,
}: {
  theme: Theme;
  children: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <SceneShell theme={theme} background={null} style={style}>
      {children}
    </SceneShell>
  );
};
