"use client";

import { useMemo } from "react";

export function Marquee({ locale }: { locale: "es" | "en" }) {
  const items = useMemo(() => {
    const base =
      locale === "en"
        ? [
            "New drops every Thursday",
            "Season update live",
            "Featured creators",
            "Tournament weekend",
            "Patch notes",
            "Community highlights",
          ]
        : [
            "Novedades cada jueves",
            "Temporada actualizada",
            "Creadores destacados",
            "Fin de semana de torneo",
            "Notas del parche",
            "Lo mejor de la comunidad",
          ];
    return [...base, ...base];
  }, [locale]);

  return (
    <div className="overflow-hidden border-y bg-surface">
      <div className="flex w-[200%] gap-3 py-3 ndg-marquee">
        {items.map((t, idx) => (
          <div
            key={`${t}-${idx}`}
            className="inline-flex items-center gap-3 px-4 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70"
          >
            <span className="size-1.5 rounded-full bg-[color:var(--color-neon-2)] shadow-[0_0_18px_color-mix(in_oklab,var(--color-neon-2)_70%,transparent)]" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

