import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "subtle";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-canvas font-semibold border border-accent hover:bg-accent-2 hover:border-accent-2 active:translate-y-px",
  ghost:
    "bg-transparent text-text font-medium border border-border hover:bg-surface-2 hover:border-accent-deep active:translate-y-px",
  subtle:
    "bg-surface-2 text-muted font-medium border border-border hover:bg-surface-3 hover:text-text active:translate-y-px",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[0.9375rem]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[10px] tracking-[-0.01em] transition-all duration-200 ease-[var(--ease-out-soft)] select-none";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps & Omit<ComponentProps<"button">, "className" | "children">;
type ButtonLinkProps = CommonProps & Omit<ComponentProps<typeof Link>, "className" | "children">;
type AnchorProps = CommonProps & Omit<ComponentProps<"a">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: AnchorProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
