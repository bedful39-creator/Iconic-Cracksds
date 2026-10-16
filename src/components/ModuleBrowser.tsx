"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  categories,
  modules,
  statusMeta,
  type ModuleCategory,
  type ModuleStatus,
} from "@/data/modules";

type Filter = "All Modules" | ModuleCategory;

const FILTERS: Filter[] = ["All Modules", ...categories];

export function ModuleBrowser() {
  const [filter, setFilter] = useState<Filter>("All Modules");
  const reduce = useReducedMotion();

  // Every count on this page derives from the dataset — nothing hardcoded.
  const counts = useMemo(() => {
    const byStatus = { undetected: 0, risk: 0, detected: 0 } as Record<ModuleStatus, number>;
    const byCategory = {} as Record<ModuleCategory, number>;

    for (const m of modules) {
      byStatus[m.status] += 1;
      byCategory[m.category] = (byCategory[m.category] ?? 0) + 1;
    }
    return { byStatus, byCategory, total: modules.length };
  }, []);

  const visible = useMemo(
    () => (filter === "All Modules" ? modules : modules.filter((m) => m.category === filter)),
    [filter],
  );

  const summary = (Object.keys(counts.byStatus) as ModuleStatus[]).map((status) => ({
    status,
    count: counts.byStatus[status],
  }));

  return (
    <>
      {/* ── Stat chips, computed ──────────────────────────────────── */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {summary.map(({ status, count }) => {
          const meta = statusMeta[status];
          return (
            <span
              key={status}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-semibold ${meta.chip}`}
            >
              <span className={`size-1.5 rounded-full ${meta.dot}`} />
              <span className="tabular-nums">{count}</span>
              <span className="font-medium opacity-80">{meta.label}</span>
            </span>
          );
        })}
      </div>

      {/* ── Filter tabs ───────────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Module categories"
        className="mt-14 flex snap-x gap-2 overflow-x-auto pb-2 [mask-image:linear-gradient(to_right,#000_88%,transparent)] md:justify-center md:overflow-visible md:[mask-image:none]"
      >
        {FILTERS.map((f) => {
          const active = f === filter;
          const n = f === "All Modules" ? counts.total : (counts.byCategory[f] ?? 0);

          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={`relative shrink-0 snap-start rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                active ? "text-canvas" : "text-muted hover:text-text"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="module-tab"
                  className="absolute inset-0 rounded-full border border-accent bg-accent"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative">
                {f}
                <span className={`ml-1.5 text-xs tabular-nums ${active ? "opacity-70" : "text-faint"}`}>
                  {n}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Grid ──────────────────────────────────────────────────── */}
      <motion.div
        layout
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((m, i) => {
            const meta = statusMeta[m.status];
            return (
              <motion.article
                key={`${m.category}-${m.name}`}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: reduce ? 0 : 0.28,
                  delay: reduce ? 0 : (i % 12) * 0.025,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="panel panel-hover flex flex-col gap-2.5 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="h3 text-[0.9375rem] text-text">{m.name}</h3>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5 text-[0.625rem] font-semibold whitespace-nowrap ${meta.chip}`}
                    title={meta.label}
                  >
                    <span className={`size-1 rounded-full ${meta.dot}`} />
                    {meta.label}
                  </span>
                </div>
                <p className="text-[0.8125rem] leading-relaxed text-muted">{m.description}</p>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* ── Live footer count ─────────────────────────────────────── */}
      <p className="mt-10 text-center text-sm text-faint tabular-nums">
        Showing {visible.length} of {counts.total} modules
      </p>
    </>
  );
}
