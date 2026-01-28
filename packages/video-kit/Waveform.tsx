import { random, useCurrentFrame } from "remotion";
import React from "react";

export const Waveform: React.FC<{
  bars?: number;
  height?: number;
  color?: string;
  className?: string;
}> = ({ bars = 20, height = 100, color = "#3b82f6", className = "" }) => {
  const frame = useCurrentFrame();

  return (
    <div className={`flex items-end gap-1 justify-center h-[${height}px] ${className}`}>
      {new Array(bars).fill(0).map((_, i) => {
        // Create a predictable random seed for each bar
        const seed = i * 123;
        // Generate a sine wave pattern with some randomness
        const offset = i * 0.2;
        const frequency = 0.1;
        const amplitude = Math.sin(frame * frequency + offset) * 0.5 + 0.5;
        
        // Add some noise based on randomness
        const noise = random(seed + Math.floor(frame / 5)) * 0.3;
        
        const barHeight = Math.max(10, (amplitude + noise) * height);

        return (
          <div
            key={i}
            className="w-2 rounded-full transition-all duration-75"
            style={{
              height: barHeight,
              backgroundColor: color,
              opacity: 0.8,
            }}
          />
        );
      })}
    </div>
  );
};
