import Link from "next/link";
import { Container } from "@/components/Container";
import { HeroShowcase } from "@/components/HeroShowcase";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <HeroShowcase locale="es" />
      <Marquee locale="es" />

      <section className="border-b">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
                JUEGOS DESTACADOS
              </div>
              <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                Portadas grandes, cards con glow y hover agresivo
              </h2>
              <p className="text-pretty text-lg leading-8 text-foreground/70">
                Sección preparada para un catálogo visual tipo portal: colecciones, etiquetas,
                notas y llamados a la acción.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/games"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  Ver todos
                </Link>
                <Link
                  href="/news"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
                >
                  Últimas noticias
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "NEON RUNNER",
                  meta: "Acción · 2026",
                  tag: "Nuevo",
                  glow: "shadow-[0_0_0_0_color-mix(in_oklab,var(--color-neon-2)_40%,transparent)] hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-2)_16%,transparent)]",
                },
                {
                  title: "DUST RIOT",
                  meta: "Mundo abierto · 2025",
                  tag: "Temporada",
                  glow: "shadow-[0_0_0_0_color-mix(in_oklab,var(--color-neon-1)_40%,transparent)] hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-1)_16%,transparent)]",
                },
                {
                  title: "VOLT TACTICS",
                  meta: "Táctico · 2024",
                  tag: "Competitivo",
                  glow: "shadow-[0_0_0_0_color-mix(in_oklab,var(--color-neon-3)_40%,transparent)] hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-3)_16%,transparent)]",
                },
                {
                  title: "ECHO CITY",
                  meta: "Narrativo · 2024",
                  tag: "Historia",
                  glow: "shadow-[0_0_0_0_color-mix(in_oklab,var(--color-neon-2)_40%,transparent)] hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-2)_16%,transparent)]",
                },
              ].map((g) => (
                <div
                  key={g.title}
                  className={[
                    "group relative overflow-hidden rounded-3xl border bg-surface p-6 transition hover:-translate-y-0.5 hover:bg-muted",
                    g.glow,
                  ].join(" ")}
                >
                  <div className="absolute inset-0 opacity-60 ndg-bg" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-semibold text-foreground/70 backdrop-blur">
                      <span className="size-1.5 rounded-full bg-[color:var(--color-neon-1)]" />
                      <span>{g.tag}</span>
                    </div>
                    <div className="mt-5 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[0.16em]">
                      {g.title}
                    </div>
                    <div className="mt-2 text-sm text-foreground/70">{g.meta}</div>
                    <div className="mt-6 inline-flex h-10 items-center justify-center rounded-full border bg-background/60 px-5 text-sm font-semibold text-foreground/80 backdrop-blur transition group-hover:bg-background/80">
                      Ver ficha
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
                NEWSWIRE
              </div>
              <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                Un hub de noticias con ritmo y contraste
              </h2>
              <p className="text-pretty text-lg leading-8 text-foreground/70">
                Cards editoriales, CTA a soporte y llamadas a la comunidad.
              </p>
              <Link
                href="/support"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
              >
                Ir a soporte
              </Link>
            </div>

            <div className="grid gap-4">
              {[
                { title: "Notas del parche 1.6", desc: "Balance, rendimiento y calidad de vida." },
                { title: "Drop de temporada", desc: "Nuevos modos, mapas y cosméticos." },
                { title: "Historias de la comunidad", desc: "Clips, creadores y retos semanales." },
              ].map((n) => (
                <div
                  key={n.title}
                  className="rounded-3xl border bg-surface p-6 transition hover:bg-muted"
                >
                  <div className="text-base font-semibold">{n.title}</div>
                  <div className="mt-2 text-sm leading-6 text-foreground/70">{n.desc}</div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground/80">
                    <span>Leer</span>
                    <span className="text-[color:var(--color-neon-2)]">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
