import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/brand";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sora",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kryptonclient.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cracked Krypton Client — Free Download, No Key",
    template: "%s · Cracked Krypton",
  },
  description: `Download Cracked Krypton free. License check removed, all 82+ modules unlocked, no key and no account. Direct .jar download for Minecraft ${brand.version}.`,
  keywords: [
    "cracked krypton",
    "cracked minecraft client",
    "krypton client free",
    "minecraft client",
    "fabric mod",
    `${brand.server} client`,
    "cheat client",
    "ghost client",
    "minecraft 1.21.11",
  ],
  authors: [{ name: brand.name }],
  openGraph: {
    type: "website",
    siteName: brand.wordmark,
    title: "Cracked Krypton Client — Free Download, No Key",
    description: `Cracked and unlocked. 82+ modules, no license key, no account.`,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Cracked Krypton Client — Free Download, No Key",
    description: `Cracked and unlocked. 82+ modules, no license key, no account.`,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The inline head script mutates <html> before React hydrates, which is
    // exactly what suppressHydrationWarning is for.
    <html lang="en" className={sora.variable} suppressHydrationWarning>
      {/*
        Marks the document as JS-capable before the body renders, which is what
        enables the hidden state of the scroll reveals. Without JS this never
        runs and every section stays visible — see globals.css.

        Deliberately NOT wrapped in a manual <head>: declaring one suppresses
        Next's metadata hoisting and pushes the meta description into <body>.
      */}
      <body className="antialiased">
        <div className="ambient" aria-hidden="true" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[10px] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-canvas"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
