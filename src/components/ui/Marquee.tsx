"use client";

import type { ReactNode } from "react";

/**
 * Seamless infinite marquee driven by a pure CSS keyframe loop — no library.
 *
 * The track holds the children rendered TWICE and translates by exactly -50%,
 * so the second copy lands precisely where the first began. Direction and
 * speed are CSS variables; hover pauses via the `.marquee-row` parent rule.
 */
export function MarqueeRow({
  children,
  direction = "left",
  duration = 40,
}: {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
}) {
  return (
    <div className="marquee-viewport">
      <div
        className="marquee-track"
        style={
          {
            "--dur": `${duration}s`,
            animation: `marquee-${direction} var(--dur) linear infinite`,
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0 gap-4 pr-4">{children}</div>
        <div className="flex shrink-0 gap-4 pr-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
