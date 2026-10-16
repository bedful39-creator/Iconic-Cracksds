"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll reveals implemented as a pure progressive enhancement.
 *
 * The hidden state lives in CSS behind a `.js` class that an inline <head>
 * script sets, so:
 *   - the server-rendered HTML is fully visible (crawlers, no-JS users)
 *   - IntersectionObserver missing → we reveal everything immediately
 *   - the resting state is always "visible", never stuck at opacity 0
 *
 * A single module-level IntersectionObserver is shared by every instance
 * rather than creating one per element.
 */

let observer: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, () => void>();

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === "undefined") return null;
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const cb = callbacks.get(entry.target);
        if (cb) {
          cb();
          observer?.unobserve(entry.target);
          callbacks.delete(entry.target);
        }
      }
    },
    // Start the animation just before the element scrolls into view.
    { rootMargin: "0px 0px -60px 0px", threshold: 0 },
  );

  return observer;
}

export function Reveal({
  children,
  y = 16,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  /** Starting vertical offset in px. */
  y?: number;
  /** Extra delay before the transition starts, in seconds. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = getObserver();
    if (!io) {
      el.classList.add("is-in");
      return;
    }

    callbacks.set(el, () => el.classList.add("is-in"));
    io.observe(el);

    return () => {
      io.unobserve(el);
      callbacks.delete(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={
        {
          ...style,
          "--reveal-y": `${y}px`,
          transitionDelay: delay ? `${delay}s` : undefined,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

/**
 * Stagger container. Direct `.reveal` children pick up an incremental
 * transition-delay from CSS nth-child rules — no JS involved.
 */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.06,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds between each child's transition. */
  stagger?: number;
}) {
  return (
    <div
      className={`reveal-stagger ${className}`}
      style={{ "--step": `${stagger}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <Reveal className={className}>{children}</Reveal>;
}
