import type { Metadata } from "next";
import { Check, Gauge, RefreshCw, Unlock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { VideoFacade } from "@/components/VideoFacade";
import { LauncherMark } from "@/components/Logo";
import { CrackedStamp } from "@/components/Logo";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { CountUp } from "@/components/ui/CountUp";
import { MarqueeRow } from "@/components/ui/Marquee";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import {
  brand,
  downloadUrl,
  faqs,
  included,
  latestBuild,
  launchers,
  reviews,
  stats,
} from "@/lib/brand";

export const metadata: Metadata = {
  title: "Cracked Krypton Client — Free Download, No Key Needed",
  description: `Download the Cracked Krypton client free. Fully cracked and unlocked — all ${brand.name} modules active, no license key, no account, no payment. Direct .jar download for Minecraft ${brand.version}.`,
  alternates: { canonical: "/" },
};

const WHY = [
  {
    icon: Unlock,
    title: "Fully Cracked",
    body: "The license check is gone. Every module is unlocked and nothing is gated.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    body: "No FPS drops. Runs light so you can actually play.",
  },
  {
    icon: RefreshCw,
    title: "Free Updates",
    body: "Every new cracked build lands here free. No key to renew, nothing to pay.",
  },
];

const STEPS = [
  { title: "Download", body: "Grab the cracked .jar — straight from the button above" },
  { title: "Drop it in", body: "Place it in your mods folder" },
  { title: "Launch", body: "Start the game and press Right Shift" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <JsonLd />
      <main id="main">
        {/* ── 1. HERO ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-32 pb-4 md:pt-40 md:pb-6">
          <div
            aria-hidden="true"
            className="animate-mesh-drift pointer-events-none absolute inset-x-0 top-0 h-[38rem]"
            style={{
              background:
                "radial-gradient(38rem 24rem at 30% 40%, color-mix(in oklab, var(--color-accent) 26%, transparent), transparent 70%), radial-gradient(32rem 20rem at 72% 55%, color-mix(in oklab, var(--color-accent-2) 20%, transparent), transparent 70%)",
            }}
          />

          <div className="shell relative flex flex-col items-center gap-7 text-center">
            <Reveal>
              <Badge tone="good">Cracked · v{brand.version} · Free</Badge>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="text-sheen display">
                Cracked
                <span className="text-good"> Krypton</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="lede max-w-[44ch]">
                The Krypton client, <strong className="font-semibold text-text">cracked</strong>.
                Every module unlocked, license check removed, free download for {brand.server}.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[0.875rem] text-faint">
                {["No license key", "No login", "No payment", "82+ modules unlocked"].map(
                  (item, i, arr) => (
                    <span key={item} className="flex items-center gap-2.5">
                      {item}
                      {i < arr.length - 1 && (
                        <span className="text-border" aria-hidden="true">
                          /
                        </span>
                      )}
                    </span>
                  ),
                )}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
                <a
                  href={downloadUrl(latestBuild.file)}
                  download
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[10px] border border-good bg-good px-7 text-[0.9375rem] font-semibold text-canvas transition-all duration-200 ease-[var(--ease-out-soft)] hover:brightness-110 active:translate-y-px sm:w-auto"
                >
                  <span>Download cracked .jar</span>
                </a>
                <a
                  href={brand.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center rounded-[10px] border border-border bg-transparent px-7 text-[0.9375rem] font-medium text-text transition-all duration-200 ease-[var(--ease-out-soft)] hover:border-accent-deep hover:bg-surface-2 active:translate-y-px sm:w-auto"
                >
                  Join Discord
                </a>
              </div>
              <p className="mt-5 font-mono text-xs text-faint">
                v{latestBuild.version} · {latestBuild.size} · {latestBuild.loader}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 2. WHY CHOOSE ────────────────────────────────────────── */}
        <Section>
          <Reveal>
            <SectionHeading title="Why go cracked?" align="center" />
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {WHY.map(({ icon: Icon, title, body }) => (
              <RevealItem key={title}>
                <article className="panel panel-hover h-full p-8">
                  <span className="mb-5 grid size-11 place-items-center rounded-[12px] border border-accent/20 bg-accent/10 text-accent-3">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="h3 mb-2.5 text-text">{title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-muted">{body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>

        {/* ── 3. EASY TO SET UP ────────────────────────────────────── */}
        <Section className="border-y border-border/40 bg-surface/25">
          <Reveal>
            <SectionHeading title="Easy to set up" align="center" />
          </Reveal>

          <RevealGroup className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            <div
              aria-hidden="true"
              className="absolute left-[16%] right-[16%] top-[2.1rem] hidden h-px origin-left bg-gradient-to-r from-transparent via-border to-transparent md:block"
            />

            {STEPS.map((step, i) => (
              <RevealItem key={step.title}>
                <div className="relative flex flex-col items-center gap-3 text-center md:px-6">
                  <span className="font-mono text-sm font-semibold tracking-[0.14em] text-accent tabular-nums">
                    0{i + 1}
                  </span>
                  <h3 className="h3 text-text">{step.title}</h3>
                  <p className="max-w-[26ch] text-[0.9375rem] leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>

        {/* ── 4. STATS ─────────────────────────────────────────────── */}
        <Section className="py-16 md:py-20">
          <RevealGroup className="mx-auto grid max-w-3xl grid-cols-2 divide-x divide-border">
            <RevealItem>
              <div className="px-4 text-center md:px-10">
                <p className="font-mono text-4xl font-semibold tracking-tight text-text tabular-nums md:text-5xl">
                  <CountUp value={stats.totalUsers} />
                </p>
                <p className="mt-2 text-sm text-muted">Total users</p>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="px-4 text-center md:px-10">
                <p className="font-mono text-4xl font-semibold tracking-tight text-accent-3 tabular-nums md:text-5xl">
                  <CountUp value={stats.growingThisMonth} />
                </p>
                <p className="mt-2 text-sm text-muted">Growing this month</p>
              </div>
            </RevealItem>
          </RevealGroup>
        </Section>

        {/* ── 5. COMPATIBLE LAUNCHERS ──────────────────────────────── */}
        <Section className="pt-0 pb-20 md:pb-24">
          <Reveal>
            <p className="mb-9 text-center text-sm text-faint">
              Works with {brand.loader} {brand.version} out of the box.
            </p>
          </Reveal>

          <RevealGroup
            className="mx-auto grid max-w-2xl grid-cols-4 items-center gap-8 [&>*]:text-muted [&>*]:transition-all [&>*]:duration-300 [&>*]:grayscale [&>*]:hover:grayscale-0 [&>*]:hover:text-text"
            stagger={0.12}
          >
            {launchers.map((launcher) => (
              <RevealItem key={launcher.slug} className="flex justify-center">
                <span className="grid place-items-center" title={launcher.name}>
                  <LauncherMark slug={launcher.slug} />
                  <span className="sr-only">{launcher.name}</span>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>

        {/* ── 6. VIDEO ─────────────────────────────────────────────── */}
        <Section>
          <Reveal>
            <SectionHeading
              title={`See ${brand.name} in Action`}
              sub={`Watch ${brand.name} on ${brand.server}`}
            />
          </Reveal>

          <Reveal delay={0.08} className="mx-auto mt-12 max-w-4xl">
            <VideoFacade
              videoId={brand.youtubeId}
              title={`${brand.wordmark} showcase`}
              poster="/poster.svg"
            />
          </Reveal>
        </Section>

        {/* ── 7. FREE DOWNLOAD ─────────────────────────────────────── */}
        <Section id="download" className="border-y border-border/40 bg-surface/25">
          <Reveal>
            <SectionHeading
              title="Cracked build — free, forever"
              sub="Direct .jar download. License check removed, every module unlocked. Nothing to buy, nothing to activate, nothing to log into."
            />
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-5">
            {/* Primary download card */}
            <Reveal className="lg:col-span-2">
              <div className="panel relative flex h-full flex-col overflow-hidden border-accent/40 bg-surface-2 p-8">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-good bg-good px-3 py-1 text-[0.6875rem] font-bold tracking-wide whitespace-nowrap text-canvas uppercase">
                  Cracked · latest
                </span>

                <div className="mb-4 flex items-center gap-2.5">
                  <span className="text-sm font-semibold tracking-tight text-text">
                    {brand.name} v{latestBuild.version}
                  </span>
                  <CrackedStamp />
                </div>

                <p className="font-mono text-sm text-muted">
                  {latestBuild.size} · {latestBuild.loader} · released {latestBuild.date}
                </p>

                <ul className="mt-8 flex flex-col gap-3">
                  {["License check removed", "No account, no login, no key", "All 82+ modules unlocked", "Every future build free"].map(
                    (f) => (
                      <li key={f} className="flex items-start gap-3 text-[0.9375rem]">
                        <Check className="mt-0.5 size-4 shrink-0 text-good" strokeWidth={2.5} />
                        <span className="text-muted">{f}</span>
                      </li>
                    ),
                  )}
                </ul>

                <a
                  href={downloadUrl(latestBuild.file)}
                  download
                  className="mt-9 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-good bg-good px-6 text-[0.9375rem] font-semibold text-canvas transition-all duration-200 ease-[var(--ease-out-soft)] hover:brightness-110 active:translate-y-px"
                >
                  Download cracked v{latestBuild.version} (.jar)
                </a>

                <p className="mt-4 text-center font-mono text-xs text-faint">
                  {latestBuild.file}
                </p>
              </div>
            </Reveal>

            {/* What's included + archive */}
            <Reveal delay={0.08} className="lg:col-span-3">
              <div className="panel flex h-full flex-col p-8">
                <h3 className="h3 text-text">What&apos;s included</h3>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {included.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[0.9375rem]">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2.5} />
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* ── 8. REVIEWS ───────────────────────────────────────────── */}
        <Section id="reviews">
          <Reveal>
            <div className="flex flex-col items-center gap-6">
              <SectionHeading title="What our users say" />
              <Badge tone="good">
                <span className="font-bold">W</span>
                <span>100% Suggest</span>
              </Badge>
            </div>
          </Reveal>

          <div className="marquee-row mt-14 flex flex-col gap-4">
            <MarqueeRow direction="left" duration={46}>
              {reviews.map((review, i) => (
                <figure key={`a-${i}`} className="panel flex w-80 shrink-0 flex-col gap-4 p-5">
                  <blockquote className="text-[0.9375rem] leading-relaxed text-text">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="text-[0.6875rem] font-semibold tracking-wide text-faint uppercase">
                    Cracked build
                  </figcaption>
                </figure>
              ))}
            </MarqueeRow>

            <MarqueeRow direction="right" duration={58}>
              {reviews.map((review, i) => (
                <figure key={`b-${i}`} className="panel flex w-80 shrink-0 flex-col gap-4 p-5">
                  <blockquote className="text-[0.9375rem] leading-relaxed text-text">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="text-[0.6875rem] font-semibold tracking-wide text-faint uppercase">
                    Cracked build
                  </figcaption>
                </figure>
              ))}
            </MarqueeRow>
          </div>
        </Section>

        {/* ── 9. DISCORD CTA ───────────────────────────────────────── */}
        <Section className="pt-0">
          <Reveal>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[20px] border border-border bg-surface-2 px-6 py-16 text-center md:px-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(24rem 14rem at 0% 50%, color-mix(in oklab, var(--color-accent) 20%, transparent), transparent 70%), radial-gradient(24rem 14rem at 100% 50%, color-mix(in oklab, var(--color-accent-2) 16%, transparent), transparent 70%)",
                }}
              />
              <div className="relative flex flex-col items-center gap-4">
                <h2 className="h2 max-w-[22ch] text-text">
                  Join {stats.discordMembers} players
                </h2>
                <p className="lede max-w-[46ch]">
                  Every new cracked build posted free the moment it lands. Real feedback,
                  instant support, zero cost.
                </p>
                <a
                  href={brand.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex h-12 items-center justify-center rounded-[10px] border border-accent bg-accent px-7 text-[0.9375rem] font-semibold text-canvas transition-colors hover:bg-accent-2"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* ── 10. FAQ ──────────────────────────────────────────────── */}
        <Section id="faq" className="pt-0">
          <Reveal>
            <SectionHeading title="Frequently asked questions" />
          </Reveal>
          <Reveal delay={0.08} className="mt-12 flex justify-center">
            <Accordion items={faqs} />
          </Reveal>
        </Section>
      </main>
      <Footer />
    </>
  );
}
