import { brand } from "@/lib/brand";

/**
 * Brushed-steel K shield, split by a crack. The crack is the whole point —
 * this is the Cracked Krypton mark, not the upstream one.
 */
export function LogoMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="km-steel" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4D9F0" />
          <stop offset="0.45" stopColor="#6E93BE" />
          <stop offset="1" stopColor="#49688F" />
        </linearGradient>
      </defs>

      <path
        d="M16 1.6 28.6 8.4v13.6L16 28.8 3.4 22V8.4L16 1.6Z"
        stroke="url(#km-steel)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M11.6 9.6v10.8M11.6 15.1l6.9-5.5M12.6 14.6l7.4 5.8"
        stroke="url(#km-steel)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* the crack */}
      <path
        d="M23.4 3.9 19.2 9.6l3.1 1.9-3.6 4.4 2.4 1.3-2.2 3.3"
        stroke="#C4D9F0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m22.3 12.4 2.5-1.1" stroke="#C4D9F0" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

/** The loud badge that rides next to the wordmark everywhere. */
export function CrackedStamp({
  className = "",
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  const dims =
    size === "lg"
      ? "px-4 py-1.5 text-sm tracking-[0.18em]"
      : "px-2 py-0.5 text-[0.625rem] tracking-[0.16em]";

  return (
    <span
      className={`inline-flex items-center rounded-[5px] border border-good/40 bg-good/15 font-bold whitespace-nowrap text-good uppercase ${dims} ${className}`}
    >
      {brand.stamp}
    </span>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="text-[0.9375rem] font-semibold tracking-[-0.02em] text-text">
        {brand.wordmark}
      </span>
      <CrackedStamp />
    </span>
  );
}

/* ── Launcher marks ─────────────────────────────────────────────── */

const launcherPaths: Record<string, React.ReactNode> = {
  minecraft: (
    <>
      <path d="M12 2 4 5.2v13.6L12 22l8-3.2V5.2L12 2Z" fill="#8FCB8F" opacity=".9" />
      <path d="M4 5.2 12 8.5v13.5L4 18.8V5.2Z" fill="#5D8F5D" />
      <path d="M20 5.2v13.6L12 22V8.5l8-3.3Z" fill="#A8DCA8" opacity=".55" />
    </>
  ),
  modrinth: (
    <path d="M4 9.5 12 4l8 5.5v9L12 20l-8-1.5v-9Z" fill="currentColor" opacity=".95" />
  ),
  prism: (
    <>
      <path d="M12 3 3 20h18L12 3Z" fill="currentColor" opacity=".9" />
      <path d="M12 9.5 7.4 17.5h9.2L12 9.5Z" fill="#0A0E14" opacity=".55" />
    </>
  ),
  dawn: (
    <>
      <circle cx="12" cy="12" r="8.2" fill="currentColor" opacity=".25" />
      <path d="M12 4.4a7.6 7.6 0 0 0 0 15.2V4.4Z" fill="currentColor" />
    </>
  ),
};

export function LauncherMark({ slug }: { slug: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="48"
      height="48"
      className="size-12"
      aria-hidden="true"
      focusable="false"
    >
      {launcherPaths[slug]}
    </svg>
  );
}
