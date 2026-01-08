"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = useMemo(() => (pathname?.startsWith("/en") ? "en" : "es"), [pathname]);

  const groups = useMemo(() => {
    if (locale === "en") {
      return [
        {
          title: "Explore",
          items: [
            { href: "/en/games", label: "Games" },
            { href: "/en/news", label: "Newswire" },
            { href: "/en/studio", label: "Studio" },
          ],
        },
        {
          title: "Support",
          items: [{ href: "/en/support", label: "Help center" }],
        },
      ] as const;
    }
    return [
      {
        title: "Explorar",
        items: [
          { href: "/games", label: "Juegos" },
          { href: "/news", label: "Newswire" },
          { href: "/studio", label: "Estudio" },
        ],
      },
      {
        title: "Soporte",
        items: [{ href: "/support", label: "Centro de ayuda" }],
      },
    ] as const;
  }, [locale]);

  return (
    <footer className="border-t">
      <div className="ndg-bg">
        <Container className="py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-2xl border bg-surface text-foreground">
                  <BrandMark className="size-6" />
                </span>
                <div className="leading-tight">
                  <div className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.12em]">
                    XGame
                  </div>
                  <div className="text-xs text-foreground/70">
                    {locale === "en"
                      ? "A loud, interactive gaming template."
                      : "Una plantilla gaming llamativa e interactiva."}
                  </div>
                </div>
              </div>
              <p className="max-w-md text-sm leading-6 text-foreground/70">
                {locale === "en"
                  ? "Designed for bold homepages: showcases, news hubs and game catalogs with neon glow."
                  : "Diseñada para homepages potentes: showcases, news hubs y catálogos con glow neón."}
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-foreground/60">
                {["Next.js", "TypeScript", "Tailwind", "ES/EN", "Light/Dark"].map((t) => (
                  <span key={t} className="rounded-full border bg-surface px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {groups.map((g) => (
                <div key={g.title} className="space-y-3">
                  <div className="text-sm font-semibold">{g.title}</div>
                  <div className="grid gap-2">
                    {g.items.map((i) => (
                      <Link
                        key={i.href}
                        href={i.href}
                        className="text-sm text-foreground/70 transition hover:text-foreground"
                      >
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} XGame Games</div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-muted px-3 py-1">
                {locale === "en" ? "Demo content" : "Contenido demo"}
              </span>
              <span className="rounded-full bg-muted px-3 py-1">
                {locale === "en" ? "No backend" : "Sin backend"}
              </span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

