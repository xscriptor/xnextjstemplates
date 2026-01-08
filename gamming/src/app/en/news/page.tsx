import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Newswire",
};

export default function NewsEnPage() {
  return (
    <div className="ndg-bg">
      <Container className="py-14 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
              NEWSWIRE
            </div>
            <h1 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Drops, patches and community
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/70">
              Portal structure: big headlines, editorial cards and fast CTAs.
            </p>
          </div>
          <Link
            href="/en/games"
            className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
          >
            View games
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Patch 1.6: performance",
              body: "FPS improvements, faster loads and matchmaking tuning.",
            },
            {
              title: "Weekly drop: skins & challenges",
              body: "Streak rewards, quests and limited cosmetics.",
            },
            {
              title: "Community: featured clips",
              body: "Weekly selection of plays, fails and edits.",
            },
          ].map((p, idx) => (
            <article
              key={p.title}
              className={[
                "group relative overflow-hidden rounded-3xl border bg-surface p-6 transition hover:bg-muted",
                idx === 0
                  ? "hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-2)_16%,transparent)]"
                  : idx === 1
                    ? "hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-1)_16%,transparent)]"
                    : "hover:shadow-[0_0_0_8px_color-mix(in_oklab,var(--color-neon-3)_16%,transparent)]",
              ].join(" ")}
            >
              <div className="absolute inset-0 opacity-50 ndg-bg" />
              <div className="relative">
                <div className="text-base font-semibold">{p.title}</div>
                <p className="mt-2 text-sm leading-6 text-foreground/70">{p.body}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground/80">
                  <span>Read</span>
                  <span className="text-[color:var(--color-neon-2)] transition group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] border bg-surface p-7 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                STATUS
              </div>
              <div className="text-2xl font-semibold tracking-tight">Services operational</div>
              <div className="text-sm leading-6 text-foreground/70">
                Demo status block for servers/services. Helps reduce duplicate tickets.
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                href="/en/support"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Help center
              </Link>
              <Link
                href="/en/studio"
                className="inline-flex h-11 items-center justify-center rounded-full border bg-background/50 px-6 text-sm font-semibold transition hover:bg-muted"
              >
                Meet the studio
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

