import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Juegos",
};

const games = [
  { title: "Neon Runner", line: "Acción en ciudad nocturna", tag: "Nuevo" },
  { title: "Dust Riot", line: "Mundo abierto con decisiones", tag: "Temporada" },
  { title: "Volt Tactics", line: "Táctico competitivo", tag: "Ranked" },
  { title: "Echo City", line: "Narrativo con estética retro-futurista", tag: "Historia" },
  { title: "Hyper Drift", line: "Carreras arcade y precisión", tag: "Speed" },
  { title: "Silent Sector", line: "Sigilo y misiones", tag: "Co-op" },
] as const;

export default function GamesPage() {
  return (
    <div className="ndg-bg">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
              JUEGOS
            </div>
            <h1 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Catálogo con cards y microinteracciones
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/70">
              Contenido demo para que sustituyas por tu catálogo real (CMS, API o estático).
            </p>
          </div>
          <Link
            href="/support"
            className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
          >
            Soporte
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g, idx) => (
            <div
              key={g.title}
              className={[
                "group relative overflow-hidden rounded-3xl border bg-surface p-6 transition hover:-translate-y-0.5 hover:bg-muted",
                idx % 3 === 0
                  ? "hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-2)_16%,transparent)]"
                  : idx % 3 === 1
                    ? "hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-1)_16%,transparent)]"
                    : "hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-3)_16%,transparent)]",
              ].join(" ")}
            >
              <div className="absolute inset-0 opacity-60 ndg-bg" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-semibold text-foreground/70 backdrop-blur">
                  <span className="size-1.5 rounded-full bg-[color:var(--color-neon-2)]" />
                  <span>{g.tag}</span>
                </div>
                <div className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[0.12em]">
                  {g.title.toUpperCase()}
                </div>
                <div className="mt-2 text-sm text-foreground/70">{g.line}</div>
                <div className="mt-6 grid grid-cols-2 gap-2 text-xs font-semibold text-foreground/70">
                  <div className="rounded-2xl border bg-background/55 px-4 py-3 backdrop-blur">
                    Trailer
                  </div>
                  <div className="rounded-2xl border bg-background/55 px-4 py-3 backdrop-blur">
                    Media
                  </div>
                  <div className="rounded-2xl border bg-background/55 px-4 py-3 backdrop-blur">
                    Capturas
                  </div>
                  <div className="rounded-2xl border bg-background/55 px-4 py-3 backdrop-blur">
                    Ficha
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

