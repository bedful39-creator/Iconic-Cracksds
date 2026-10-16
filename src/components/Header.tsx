"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CrackedStamp, LogoMark } from "./Logo";
import { brand } from "@/lib/brand";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Modules", href: "/features" },
  { label: "Reviews", href: "/#reviews" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the sheet on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ease-[var(--ease-out-soft)] ${
          scrolled
            ? "border-border bg-canvas/70 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className={`shell flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-[4.5rem]"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark className="size-7" />
            <span className="text-[0.9375rem] font-semibold tracking-[-0.02em] text-text">
              {brand.wordmark}
            </span>
            <CrackedStamp className="hidden sm:inline-flex" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative rounded-[10px] px-3.5 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-[10px] bg-surface-2"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className={`relative ${active ? "text-text" : "text-muted hover:text-text"}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <Link
            href="/#download"
            className="hidden h-9 items-center gap-2 rounded-[10px] border border-accent bg-accent px-4 text-sm font-semibold text-canvas transition-colors hover:bg-accent-2 md:flex"
          >
            <Download className="size-4" />
            Free Download
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-[10px] border border-border bg-surface-2/60 text-text md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            className="fixed inset-0 z-40 bg-canvas/95 backdrop-blur-xl md:hidden"
          >
            <div className="shell flex h-full flex-col justify-center gap-1 pt-24">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: reduce ? 0 : 0.06 + i * 0.05,
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-border py-4 text-2xl font-semibold tracking-[-0.02em] text-text"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduce ? 0 : 0.3, duration: 0.35 }}
                className="mt-8"
              >
                <Link
                  href="/#download"
                  className="flex h-12 items-center justify-center gap-2 rounded-[10px] border border-accent bg-accent text-sm font-semibold text-canvas"
                >
                  <Download className="size-4" />
                  Free Download
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
