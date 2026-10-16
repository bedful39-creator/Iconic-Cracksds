"use client";

import { useEffect, useRef, useState } from "react";

/** easeOutExpo — fast start, long settle. Reads as "counting up and landing". */
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/** Counts 0 → value once, the first time the element scrolls into view. */
export function CountUp({
  value,
  duration = 1.6,
  className = "",
}: {
  value: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // A second mount (e.g. after a client navigation) should show the
    // final value immediately rather than replaying the animation.
    let done = false;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }

    const run = () => {
      if (done) return;
      done = true;
      observer.disconnect();

      let raf = 0;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min((now - start) / (duration * 1000), 1);
        setDisplay(Math.round(easeOutExpo(t) * value));
        if (t < 1) raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) run();
      },
      // Matches a 60px pre-trigger margin: starts just before it scrolls in.
      { rootMargin: "0px 0px -60px 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      done = true;
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display.toLocaleString("en-US")}
    </span>
  );
}
