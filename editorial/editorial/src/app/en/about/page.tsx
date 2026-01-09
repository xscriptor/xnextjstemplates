import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutEnPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            About Aurea
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            A literary imprint built with editorial care
          </h1>
          <p className="text-pretty text-lg leading-8 text-foreground/75">
            This template is designed to present a publishing house with clarity and rigor:
            mission, catalog, authors and process. Replace the demo content with your real
            story.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/en/catalog"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
            >
              View catalog
            </Link>
            <Link
              href="/en/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            {
              title: "Mission",
              desc: "Publish works with rigor and support authors with a transparent editorial process.",
            },
            {
              title: "Lines",
              desc: "Fiction, poetry and essay with a demanding curation (demo content).",
            },
            {
              title: "Values",
              desc: "Care for the text, sober design, respect for readers and long-life backlist.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
              <div className="text-sm font-semibold">{c.title}</div>
              <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {[
          { k: "2016", v: "Founded" },
          { k: "80+", v: "Titles (demo)" },
          { k: "18", v: "Awards (demo)" },
        ].map((s) => (
          <div key={s.v} className="rounded-3xl border bg-surface p-6">
            <div className="text-3xl font-semibold tracking-tight">{s.k}</div>
            <div className="mt-1 text-sm text-foreground/70">{s.v}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}

