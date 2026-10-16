import type { ReactNode } from "react";

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: "neutral" | "accent" | "good" | "warn" | "danger";
  className?: string;
}) {
  const tones = {
    neutral: "border-border bg-surface-2 text-muted",
    accent: "border-accent/30 bg-accent/10 text-accent-3",
    good: "border-good/25 bg-good/10 text-good",
    warn: "border-warn/25 bg-warn/10 text-warn",
    danger: "border-danger/25 bg-danger/10 text-danger",
  } as const;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
