import Link from "next/link";
import { Container } from "@/components/Container";

export default function HomeEn() {
  return (
    <div className="relative">
      <section className="border-b">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border bg-surface px-3 py-1 text-xs font-medium text-foreground/75">
                Catalog · Authors · Submissions
              </div>
              <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                Contemporary literature with careful editing
              </h1>
              <p className="text-pretty text-lg leading-8 text-foreground/75">
                X Editorial is a template for publishing houses: catalog, authors, press,
                submissions and contact. A paper-and-ink inspired design with a classic type
                voice.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/en/catalog"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
                >
                  Browse catalog
                </Link>
                <Link
                  href="/en/submissions"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
                >
                  Submissions
                </Link>
              </div>
              <div className="grid gap-3 rounded-3xl border bg-surface p-5 sm:grid-cols-3">
                {[
                  { k: "12", v: "Collections" },
                  { k: "80+", v: "Titles (demo)" },
                  { k: "2016", v: "Since" },
                ].map((s) => (
                  <div key={s.v} className="space-y-1">
                    <div className="text-2xl font-semibold tracking-tight">{s.k}</div>
                    <div className="text-xs text-foreground/70">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border bg-surface p-8 shadow-sm">
                <div className="text-xs font-semibold tracking-[0.2em] text-foreground/60">
                  HIGHLIGHTS
                </div>
                <div className="mt-6 grid gap-4">
                  {[
                    { title: "The Map of Silences", meta: "Novel · 2025 · Umbral Collection" },
                    { title: "Letters from the Shore", meta: "Poetry · 2024 · Bronze Collection" },
                    { title: "Essays on Memory", meta: "Essay · 2023 · Archive Collection" },
                  ].map((b) => (
                    <div key={b.title} className="rounded-2xl border bg-background p-4">
                      <div className="text-lg font-semibold tracking-tight">{b.title}</div>
                      <div className="mt-1 text-sm text-foreground/70">{b.meta}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand)_14%,var(--color-surface)),color-mix(in_oklab,var(--color-accent)_14%,var(--color-surface)))] p-5">
                  <div className="text-base font-semibold tracking-tight">Press & media kit</div>
                  <div className="mt-1 text-sm text-foreground/75">
                    Demo area for press notes, kits and reviews.
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/en/about"
                      className="inline-flex h-10 items-center justify-center rounded-full border bg-surface px-5 text-sm font-semibold transition hover:bg-muted"
                    >
                      About the house
                    </Link>
                    <Link
                      href="/en/contact"
                      className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b">
        <Container className="py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
                Editorial approach
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Curation, design and author care
              </h2>
              <p className="text-foreground/75">
                Sections designed to convey seriousness: process, standards, awards,
                distribution and press.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Editing", desc: "Critical reading, copyediting and editorial consistency." },
                { title: "Design", desc: "Layout and covers with a sober, timeless identity." },
                { title: "Publicity", desc: "Press notes, events and catalog strategy." },
                { title: "Distribution", desc: "Bookstores, fairs and digital channels (demo)." },
              ].map((c) => (
                <div key={c.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
                  <div className="text-base font-semibold">{c.title}</div>
                  <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
                FAQ
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Questions for readers and authors
              </h2>
              <p className="text-foreground/75">
                Reusable block to answer submissions, timelines, formats and events.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  q: "Do you accept manuscripts year-round?",
                  a: "It depends on each call. Check Submissions for dates and requirements.",
                },
                {
                  q: "Do you publish only fiction?",
                  a: "No. We include fiction, poetry and essay depending on the line (demo).",
                },
                {
                  q: "How can I request press or review copies?",
                  a: "Contact us and share your outlet, audience and deadlines.",
                },
              ].map((f) => (
                <div key={f.q} className="rounded-3xl border bg-surface p-6">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm leading-6 text-foreground/70">{f.a}</div>
                </div>
              ))}
              <div className="rounded-3xl border bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand)_12%,var(--color-surface)),color-mix(in_oklab,var(--color-accent)_12%,var(--color-surface)))] p-6">
                <div className="text-base font-semibold tracking-tight">Pitch a project</div>
                <div className="mt-2 text-sm text-foreground/75">
                  Use this CTA as the entry point for authors and agents.
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/en/submissions"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
                  >
                    View submissions
                  </Link>
                  <Link
                    href="/en/contact"
                    className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

