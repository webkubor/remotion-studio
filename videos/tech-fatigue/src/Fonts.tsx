import { staticFile } from "remotion";
import React from "react";

export const Fonts = () => {
  return (
    <style>
      {`
        @font-face {
          font-family: 'Inter';
          src: url('${staticFile("fonts/Inter-Bold.otf")}') format('opentype');
          font-weight: bold;
        }

        @font-face {
          font-family: 'Montserrat';
          src: url('${staticFile("fonts/Montserrat-ExtraBold.otf")}') format('opentype');
          font-weight: 800;
        }

        @font-face {
          font-family: 'HarmonyOS';
          src: url('${staticFile("fonts/HarmonyOS_Sans_SC_Bold.ttf")}') format('truetype');
          font-weight: bold;
        }

        @font-face {
          font-family: 'Oswald';
          src: url('${staticFile("fonts/Oswald-Regular.ttf")}') format('truetype');
          font-weight: normal;
        }

        @font-face {
          font-family: 'Rajdhani';
          src: url('${staticFile("fonts/Rajdhani-Bold-4.ttf")}') format('truetype');
          font-weight: bold;
        }
      `}
    </style>
  );
};
