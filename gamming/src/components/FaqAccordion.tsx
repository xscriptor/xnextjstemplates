"use client";

import { useMemo, useState } from "react";

type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const normalized = useMemo(() => items.map((i) => ({ ...i })), [items]);

  return (
    <div className="grid gap-3">
      {normalized.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <button
            key={item.q}
            type="button"
            className="rounded-3xl border bg-surface p-6 text-left transition hover:bg-muted"
            onClick={() => setOpen((v) => (v === idx ? null : idx))}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="text-sm font-semibold">{item.q}</div>
              <div
                className={[
                  "mt-0.5 inline-flex size-7 items-center justify-center rounded-full border bg-background/60 text-xs font-semibold transition",
                  isOpen ? "rotate-45" : "",
                ].join(" ")}
                aria-hidden="true"
              >
                +
              </div>
            </div>
            <div
              className={[
                "grid transition-[grid-template-rows,opacity] duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              ].join(" ")}
            >
              <div className="overflow-hidden">
                <div className="mt-3 text-sm leading-6 text-foreground/70">{item.a}</div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

