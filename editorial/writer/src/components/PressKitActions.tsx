"use client";

import Link from "next/link";

import type { Lang } from "@/app/[lang]/dictionaries";

export function PressKitActions({ lang }: { lang: Lang }) {
  return (
    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 hover:border-accent2 hover:text-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {lang === "en" ? "Print / Save PDF" : "Imprimir / Guardar PDF"}
      </button>
      <Link
        href={`/${lang}/#contact`}
        className="rounded-xl bg-accent px-4 py-2 text-center text-sm font-semibold text-bg shadow-soft transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {lang === "en" ? "Contact" : "Contacto"}
      </Link>
    </div>
  );
}

