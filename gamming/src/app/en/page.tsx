import Link from "next/link";
import { Container } from "@/components/Container";
import { HeroShowcase } from "@/components/HeroShowcase";
import { Marquee } from "@/components/Marquee";

export default function HomeEn() {
  return (
    <div className="bg-background text-foreground">
      <HeroShowcase locale="en" />
      <Marquee locale="en" />

      <section className="border-b">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
                FEATURED GAMES
              </div>
              <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                Big covers, glow cards and punchy hover states
              </h2>
              <p className="text-pretty text-lg leading-8 text-foreground/70">
                Built for a bold portal: collections, tags, patch notes and fast CTAs.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/en/games"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90"
                >
                  View all
                </Link>
                <Link
                  href="/en/news"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
                >
                  Latest news
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "NEON RUNNER", meta: "Action · 2026", tag: "New" },
                { title: "DUST RIOT", meta: "Open world · 2025", tag: "Season" },
                { title: "VOLT TACTICS", meta: "Tactics · 2024", tag: "Competitive" },
                { title: "ECHO CITY", meta: "Narrative · 2024", tag: "Story" },
              ].map((g, idx) => (
                <div
                  key={g.title}
                  className={[
                    "group relative overflow-hidden rounded-3xl border bg-surface p-6 transition hover:-translate-y-0.5 hover:bg-muted",
                    idx % 3 === 0
                      ? "shadow-[0_0_0_0_color-mix(in_oklab,var(--color-neon-2)_40%,transparent)] hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-2)_16%,transparent)]"
                      : idx % 3 === 1
                        ? "shadow-[0_0_0_0_color-mix(in_oklab,var(--color-neon-1)_40%,transparent)] hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-1)_16%,transparent)]"
                        : "shadow-[0_0_0_0_color-mix(in_oklab,var(--color-neon-3)_40%,transparent)] hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-3)_16%,transparent)]",
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
                      Open
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
                A news hub with pace and contrast
              </h2>
              <p className="text-pretty text-lg leading-8 text-foreground/70">
                Editorial cards, support CTA and community highlights.
              </p>
              <Link
                href="/en/support"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
              >
                Go to support
              </Link>
            </div>

            <div className="grid gap-4">
              {[
                { title: "Patch notes 1.6", desc: "Balance, performance and QoL changes." },
                { title: "Season drop", desc: "New modes, maps and cosmetics." },
                { title: "Community stories", desc: "Clips, creators and weekly challenges." },
              ].map((n) => (
                <div
                  key={n.title}
                  className="rounded-3xl border bg-surface p-6 transition hover:bg-muted"
                >
                  <div className="text-base font-semibold">{n.title}</div>
                  <div className="mt-2 text-sm leading-6 text-foreground/70">{n.desc}</div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground/80">
                    <span>Read</span>
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

