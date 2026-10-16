import type { ReactNode } from "react";

/** Section wrapper: consistent vertical rhythm + scroll anchor offsets. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  className?: string;
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignCls} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h2 text-text">{title}</h2>
      {sub && <p className="lede">{sub}</p>}
    </div>
  );
}
