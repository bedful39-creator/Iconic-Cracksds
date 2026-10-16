"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";

export interface AccordionItem {
  q: string;
  a: string;
}

/**
 * Single-open accordion built on native <details>/<summary> so it degrades
 * correctly without JS. Framer Motion animates the panel height; the
 * open/closed state is mirrored in React to drive the +/− indicator.
 */
export function Accordion({ items }: { items: readonly AccordionItem[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const baseId = useId();
  const reduce = useReducedMotion();

  return (
    <div className="flex w-full max-w-3xl flex-col gap-3">
      {items.map((item) => {
        const id = `${baseId}-${item.q.replace(/\W+/g, "-").toLowerCase()}`;
        const isOpen = open === id;

        return (
          <details
            key={item.q}
            id={id}
            name="faq"
            open={isOpen}
            onToggle={(e) => setOpen(e.currentTarget.open ? id : null)}
            className="panel px-6 open:border-accent-deep"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
              <span className="h3 text-[0.9375rem] text-text md:text-base">{item.q}</span>
              <span
                className="grid size-7 shrink-0 place-items-center rounded-full border border-border text-accent transition-colors duration-200 group-open:border-accent"
                aria-hidden="true"
              >
                <motion.span
                  animate={{ rotate: isOpen ? 135 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="grid place-items-center"
                >
                  <Plus className="size-3.5" strokeWidth={2.5} />
                </motion.span>
              </span>
            </summary>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-[0.9375rem] leading-relaxed text-muted">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </details>
        );
      })}
    </div>
  );
}
