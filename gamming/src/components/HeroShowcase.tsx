"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/Container";

type Slide = {
  title: string;
  subtitle: string;
  tag: string;
  href: string;
  cta: string;
  gradient: string;
};

export function HeroShowcase({ locale }: { locale: "es" | "en" }) {
  const slides = useMemo<Slide[]>(() => {
    if (locale === "en") {
      return [
        {
          title: "Neon heists. City nights.",
          subtitle: "A cinematic action playground with bold colors and sharp UI.",
          tag: "FEATURED",
          href: "/en/games",
          cta: "Explore games",
          gradient:
            "bg-[radial-gradient(900px_420px_at_20%_0%,color-mix(in_oklab,var(--color-neon-1)_55%,transparent),transparent_60%),radial-gradient(820px_420px_at_85%_35%,color-mix(in_oklab,var(--color-neon-2)_45%,transparent),transparent_62%),linear-gradient(135deg,rgba(0,0,0,0.55),transparent)]",
        },
        {
          title: "The news hits harder.",
          subtitle: "Drops, patch notes and community stories in one hub.",
          tag: "NEWSWIRE",
          href: "/en/news",
          cta: "Read updates",
          gradient:
            "bg-[radial-gradient(840px_440px_at_10%_20%,color-mix(in_oklab,var(--color-neon-3)_55%,transparent),transparent_62%),radial-gradient(720px_440px_at_80%_0%,color-mix(in_oklab,var(--color-neon-1)_42%,transparent),transparent_62%),linear-gradient(135deg,rgba(0,0,0,0.55),transparent)]",
        },
        {
          title: "Support, simplified.",
          subtitle: "Guides, status and tickets with a fast, gamer-first experience.",
          tag: "SUPPORT",
          href: "/en/support",
          cta: "Get support",
          gradient:
            "bg-[radial-gradient(900px_440px_at_70%_10%,color-mix(in_oklab,var(--color-neon-2)_55%,transparent),transparent_62%),radial-gradient(720px_440px_at_20%_70%,color-mix(in_oklab,var(--color-neon-3)_40%,transparent),transparent_62%),linear-gradient(135deg,rgba(0,0,0,0.55),transparent)]",
        },
      ];
    }
    return [
      {
        title: "Atracos neón. Noches de ciudad.",
        subtitle: "Acción cinematográfica con colores vivos e interfaz afilada.",
        tag: "DESTACADO",
        href: "/games",
        cta: "Ver juegos",
        gradient:
          "bg-[radial-gradient(900px_420px_at_20%_0%,color-mix(in_oklab,var(--color-neon-1)_55%,transparent),transparent_60%),radial-gradient(820px_420px_at_85%_35%,color-mix(in_oklab,var(--color-neon-2)_45%,transparent),transparent_62%),linear-gradient(135deg,rgba(0,0,0,0.55),transparent)]",
      },
      {
        title: "Noticias que pegan más fuerte.",
        subtitle: "Lanzamientos, parches y comunidad en un solo hub.",
        tag: "NEWSWIRE",
        href: "/news",
        cta: "Leer novedades",
        gradient:
          "bg-[radial-gradient(840px_440px_at_10%_20%,color-mix(in_oklab,var(--color-neon-3)_55%,transparent),transparent_62%),radial-gradient(720px_440px_at_80%_0%,color-mix(in_oklab,var(--color-neon-1)_42%,transparent),transparent_62%),linear-gradient(135deg,rgba(0,0,0,0.55),transparent)]",
      },
      {
        title: "Soporte, sin fricción.",
        subtitle: "Guías, estado y tickets con experiencia gamer-first.",
        tag: "SOPORTE",
        href: "/support",
        cta: "Ir a soporte",
        gradient:
          "bg-[radial-gradient(900px_440px_at_70%_10%,color-mix(in_oklab,var(--color-neon-2)_55%,transparent),transparent_62%),radial-gradient(720px_440px_at_20%_70%,color-mix(in_oklab,var(--color-neon-3)_40%,transparent),transparent_62%),linear-gradient(135deg,rgba(0,0,0,0.55),transparent)]",
      },
    ];
  }, [locale]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const s = slides[active];

  return (
    <section className="relative overflow-hidden border-b">
      <div className="absolute inset-0 ndg-bg" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-background)_15%,transparent),transparent_40%,color-mix(in_oklab,var(--color-background)_65%,transparent))]" />
      <Container className="relative py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
              <span className="size-2 rounded-full bg-[color:var(--color-neon-1)] shadow-[0_0_22px_color-mix(in_oklab,var(--color-neon-1)_70%,transparent)]" />
              <span>{s.tag}</span>
            </div>
            <h1 className="text-balance font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
              {s.title}
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-8 text-foreground/70">
              {s.subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={s.href}
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-sm font-semibold text-background transition hover:opacity-90"
              >
                {s.cta}
              </Link>
              <Link
                href={locale === "en" ? "/en/studio" : "/studio"}
                className="inline-flex h-12 items-center justify-center rounded-full border bg-surface px-7 text-sm font-semibold transition hover:bg-muted"
              >
                {locale === "en" ? "Our studio" : "Nuestro estudio"}
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-semibold text-foreground/60">
              {[
                locale === "en" ? "Cross-platform" : "Multiplataforma",
                locale === "en" ? "Seasonal content" : "Contenido por temporadas",
                locale === "en" ? "Creator tools" : "Herramientas para creadores",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border bg-surface px-4 py-2 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className={[
                "relative overflow-hidden rounded-[28px] border bg-surface shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--color-neon-1)_50%,transparent)]",
                "before:absolute before:inset-0 before:opacity-90 before:content-['']",
                s.gradient,
              ].join(" ")}
            >
              <div className="relative grid gap-4 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold tracking-[0.22em] text-foreground/60">
                    {locale === "en" ? "LIVE" : "EN VIVO"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-background/60 px-3 py-1 text-xs font-semibold text-foreground/70">
                    <span className="size-1.5 rounded-full bg-[color:var(--color-neon-2)] shadow-[0_0_18px_color-mix(in_oklab,var(--color-neon-2)_70%,transparent)]" />
                    <span>{locale === "en" ? "Update" : "Actualización"}</span>
                  </div>
                </div>

                <div className="grid gap-3 rounded-3xl border bg-background/40 p-5 backdrop-blur-sm">
                  <div className="text-lg font-semibold tracking-tight">
                    {locale === "en" ? "Featured drop" : "Drop destacado"}
                  </div>
                  <div className="text-sm leading-6 text-foreground/70">
                    {locale === "en"
                      ? "A clean, high-contrast UI kit for fast menus, bold typography and neon glow."
                      : "Un kit UI de alto contraste para menús rápidos, tipografía fuerte y glow neón."}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { k: "64", v: locale === "en" ? "Skins" : "Skins" },
                      { k: "12", v: locale === "en" ? "Modes" : "Modos" },
                      { k: "3", v: locale === "en" ? "Maps" : "Mapas" },
                    ].map((m) => (
                      <div
                        key={m.v}
                        className="rounded-2xl border bg-background/50 px-4 py-3 text-center"
                      >
                        <div className="text-xl font-semibold tracking-tight">{m.k}</div>
                        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/60">
                          {m.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        aria-label={locale === "en" ? "Select slide" : "Seleccionar slide"}
                        className={[
                          "h-2.5 w-10 rounded-full border transition",
                          idx === active
                            ? "bg-foreground/80"
                            : "bg-background/40 hover:bg-background/70",
                        ].join(" ")}
                        onClick={() => setActive(idx)}
                      />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-foreground/60">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(slides.length).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 -top-7 size-20 rounded-full bg-[color:var(--color-neon-2)] opacity-25 blur-2xl" />
            <div className="pointer-events-none absolute -left-8 -bottom-8 size-28 rounded-full bg-[color:var(--color-neon-1)] opacity-20 blur-2xl ndg-float" />
          </div>
        </div>
      </Container>
    </section>
  );
}

