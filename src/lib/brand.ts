/**
 * Single source of truth for every brand string on the site.
 * Swap these values to rebrand the entire project in one place.
 */

export const brand = {
  name: "Cracked Krypton",
  wordmark: "Cracked Krypton",
  /** Stamped version for tight spaces — the header, the OG image, badges. */
  stamp: "CRACKED",
  /** Headline lockup. */
  headline: "Cracked Krypton",
  /** Line under the headline. */
  subline: "Free cracked client. Every module unlocked, no license key, no account.",
  server: "DonutSMP",
  version: "1.21.11",
  loader: "Fabric",
  discordUrl: "https://discord.gg/kryptonofficial",
  tiktokUrl: "https://www.tiktok.com/@_weaknessss",
  youtubeId: "5Z8ztXzjH88",
} as const;

/**
 * Drop your compiled .jar into `public/download/` using the filename below and
 * every download button on the site serves it.
 */
export const DOWNLOAD_DIR = "/download";

export interface BuildEntry {
  version: string;
  date: string;
  size: string;
  loader: string;
  file: string;
  changelog: string;
}

/** The one universal build this site ships. */
export const builds: BuildEntry[] = [
  {
    version: "1.21.11",
    date: "12 Mar 2026",
    size: "48.2 MB",
    loader: "Fabric",
    // Rename here if you publish the jar under a different filename.
    file: "KryptonCracked-Universal-V3.8.jar",
    changelog: "Anchor Macro + Mace Bomber added. Auto Crystal retuned for high ping.",
  },
];

export const latestBuild = builds[0];

export function downloadUrl(file: string): string {
  return `${DOWNLOAD_DIR}/${file}`;
}

/** Everything you get, no strings attached. */
export const included: string[] = [
  "All 82+ modules unlocked",
  "OP exploits & bypasses",
  "Auto base finding",
  "Auto-farm & utility",
  "Every future update, free",
  "Discord support",
];

export const stats = {
  totalUsers: 12847,
  growingThisMonth: 3204,
  discordMembers: "5,000+",
} as const;

export const reviews = [
  { text: "Good found 19 base/farm and found them all before anyone else did." },
  { text: "Ts is the best client." },
  { text: "best 10/10" },
  { text: "W I bought for a potato and i hate donuts" },
  { text: "goated cheats" },
  { text: "Loaded it straight onto a hard ban account. Still runs clean. Wild." },
  { text: "The auto crystal alone is worth it, and it cost me nothing." },
  { text: "Support answered me in like four minutes. Insane." },
  { text: "Runs at 240fps on my laptop. No drops at all." },
  { text: "Been on the free build since day one. Never paid a cent." },
] as const;

export const faqs = [
  {
    q: "What does cracked actually mean here?",
    a: "The original Krypton client phones home to verify a paid license key before it will run. This build has that check removed: the client starts instantly, every module is unlocked with no tier gating, and nothing phones home. You need a valid Minecraft account to launch the game itself, but the client itself asks for nothing — no key, no email, no login.",
  },
  {
    q: "Is it really free?",
    a: "Yes — completely. No purchase, no license key, no account, no email, no trial timer. The build is unlocked out of the box and every future update stays free. Nothing is hidden behind a paywall.",
  },
  {
    q: "Do I need a Minecraft account?",
    a: "You need a valid Minecraft Java account to launch the game, but Krypton itself does not ask for anything. No key validation, no activation, no phone-home to an auth server.",
  },
  {
    q: "How do I install it?",
    a: "Download the cracked .jar, drop it into your .minecraft/mods folder, and launch. Open the GUI with Right Shift. There is no installer and no configuration to do first.",
  },
  {
    q: "Which version is supported?",
    a: "Minecraft Java 1.21.11 on Fabric, out of the box. We track DonutSMP patches continuously and publish a fresh cracked build for every one that lands, free of charge.",
  },
  {
    q: "Is it detected?",
    a: "On the current patch, no. We ship a bypass within hours of any server update. That said, detection status changes — check the module list for live per-module status, and use a throwaway account if you want to be cautious.",
  },
  {
    q: "Will I get banned?",
    a: "Every client carries some risk and we will not pretend otherwise. Play at your own risk, and consider running on an alt so a ban costs you nothing.",
  },
] as const;

export const launchers = [
  { name: "Minecraft", slug: "minecraft" },
  { name: "Modrinth", slug: "modrinth" },
  { name: "Prism", slug: "prism" },
  { name: "Dawn", slug: "dawn" },
] as const;
