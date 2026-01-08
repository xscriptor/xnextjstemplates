import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Catalog",
};

const books = [
  { title: "The Map of Silences", author: "Isabel R.", tag: "Novel", year: "2025" },
  { title: "Letters from the Shore", author: "Tomás L.", tag: "Poetry", year: "2024" },
  { title: "Essays on Memory", author: "Clara M.", tag: "Essay", year: "2023" },
  { title: "The House of Names", author: "E. S.", tag: "Novel", year: "2022" },
] as const;

export default function CatalogPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Catalog
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Selected works for demanding readers
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
            This list is demo content. You can later turn it into a real catalog with a CMS.
          </p>
        </div>
        <Link
          href="/en/contact"
          className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
        >
          Request press
        </Link>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {books.map((b) => (
          <div key={b.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="text-lg font-semibold tracking-tight">{b.title}</div>
              <div className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground/75">
                {b.tag}
              </div>
            </div>
            <div className="mt-2 text-sm text-foreground/70">
              {b.author} · {b.year}
            </div>
            <div className="mt-5 grid gap-2 text-sm text-foreground/75 sm:grid-cols-2">
              <div className="rounded-2xl border bg-background px-4 py-3">Editing</div>
              <div className="rounded-2xl border bg-background px-4 py-3">Cover & art</div>
              <div className="rounded-2xl border bg-background px-4 py-3">Tech sheet</div>
              <div className="rounded-2xl border bg-background px-4 py-3">Reviews (demo)</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

