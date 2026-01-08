import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Authors",
};

const authors = [
  { name: "Isabel R.", line: "Narrative and memory" },
  { name: "Tomás L.", line: "Contemporary poetry" },
  { name: "Clara M.", line: "Essay and archive" },
  { name: "E. S.", line: "Short fiction" },
] as const;

export default function AuthorsPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Authors
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Voices and trajectories in the catalog
          </h1>
          <p className="text-pretty text-lg leading-8 text-foreground/75">
            Use this page to present bios, awards, press and upcoming events.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/en/catalog"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
            >
              View books
            </Link>
            <Link
              href="/en/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
            >
              Press
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {authors.map((a) => (
            <div key={a.name} className="rounded-3xl border bg-surface p-6 shadow-sm">
              <div className="text-base font-semibold">{a.name}</div>
              <div className="mt-2 text-sm text-foreground/70">{a.line}</div>
              <div className="mt-5 rounded-2xl bg-muted p-4 text-xs text-foreground/70">
                Bio, works and links (demo)
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

