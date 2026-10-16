import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { CrackedStamp, LogoMark } from "./Logo";
import { brand, downloadUrl, latestBuild } from "@/lib/brand";

const COLUMNS = [
  {
    heading: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Modules", href: "/features" },
      { label: "Reviews", href: "/#reviews" },
    ],
  },
  {
    heading: "Socials",
    links: [
      { label: "Discord Server", href: brand.discordUrl },
      { label: "TikTok", href: brand.tiktokUrl },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-canvas/60">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <span className="flex items-center gap-2.5">
              <LogoMark />
              <span className="text-[0.9375rem] font-semibold tracking-[-0.02em] text-text">
                {brand.wordmark}
              </span>
            </span>
            <p className="max-w-[30ch] text-sm leading-relaxed text-muted">
              The Krypton client, cracked. 82+ modules unlocked, free forever, built for{" "}
              {brand.server}.
            </p>
            <div className="flex gap-2">
              <a
                href={brand.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 items-center rounded-[10px] border border-border px-3 text-[0.8125rem] font-medium text-muted transition-colors hover:border-accent-deep hover:bg-surface-2 hover:text-text"
              >
                Discord
              </a>
              <a
                href={brand.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 items-center rounded-[10px] border border-border px-3 text-[0.8125rem] font-medium text-muted transition-colors hover:border-accent-deep hover:bg-surface-2 hover:text-text"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3 className="text-[0.6875rem] font-semibold tracking-[0.14em] text-faint uppercase">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  const inner = (
                    <span className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-text">
                      {link.label}
                      {external && <ArrowUpRight className="size-3" />}
                    </span>
                  );
                  return (
                    <li key={link.label}>
                      {external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          {inner}
                        </a>
                      ) : (
                        <Link href={link.href} className="inline-block">
                          {inner}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Download column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[0.6875rem] font-semibold tracking-[0.14em] text-faint uppercase">
              Direct Download
            </h3>
            <CrackedStamp size="lg" className="w-fit" />
            <p className="text-sm leading-relaxed text-muted">
              Cracked and unlocked. No key, no account, no payment. Just the .jar.
            </p>
            <a
              href={downloadUrl(latestBuild.file)}
              download
              className="inline-flex h-10 w-fit items-center gap-2 rounded-[10px] border border-good bg-good px-4 text-sm font-semibold text-canvas transition-[filter] hover:brightness-110"
            >
              <Download className="size-4" />
              Cracked v{latestBuild.version}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-border/60 pt-8">
          <div className="flex flex-col gap-3 text-[0.8125rem] text-faint md:flex-row md:items-center md:justify-between">
            <p>© 2026 {brand.name}. All rights reserved.</p>
            <p className="max-w-[62ch] md:text-right">
              {brand.wordmark} is not affiliated with Mojang AB. The company&apos;s commercial
              activities comply with Mojang AB policy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
