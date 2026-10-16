import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CrackedStamp } from "@/components/Logo";
import { ModuleBrowser } from "@/components/ModuleBrowser";
import { Reveal } from "@/components/ui/Reveal";
import { modules } from "@/data/modules";

export const metadata: Metadata = {
  title: "Cracked Krypton Modules — All 82+ Unlocked, Free",
  description: `Every one of the ${modules.length} modules in the Cracked Krypton client, fully unlocked with no key, plus live per-module detection status updated with every patch.`,
  alternates: { canonical: "/features" },
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="shell">
          <Reveal>
            <div className="flex max-w-3xl flex-col gap-5">
              <span className="flex items-center gap-2.5">
                <span className="eyebrow">Cracked Krypton</span>
                <CrackedStamp />
              </span>
              <h1 className="display text-[3rem] md:text-[4.5rem]">
                All 82+ Modules <span className="text-good">Unlocked</span>
              </h1>
              <p className="lede">
                Every module in the cracked build, free of any key or tier. Full list with live
                detection status.
              </p>
            </div>
          </Reveal>

          <ModuleBrowser />
        </div>
      </main>
      <Footer />
    </>
  );
}
