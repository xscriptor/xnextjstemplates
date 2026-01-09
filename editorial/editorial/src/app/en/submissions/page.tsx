import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Submissions",
};

export default function SubmissionsPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
          Submissions
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Manuscript calls and guidelines (demo)
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
          This page is ready to communicate requirements, deadlines and editorial policy.
          Demo content.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {[
          {
            title: "Fiction · Umbral",
            desc: "Novel or short story collection. 40–120k words. Open theme.",
            date: "Closes: Sep 30, 2026",
          },
          {
            title: "Poetry · Bronze",
            desc: "Unpublished collection. Flexible length. PDF submission.",
            date: "Closes: Oct 15, 2026",
          },
          {
            title: "Essay · Archive",
            desc: "Literary or cultural essay. Include a proposed outline.",
            date: "Closes: Nov 20, 2026",
          },
          {
            title: "Translation",
            desc: "Projects with clear rights. Attach sample and context.",
            date: "By invitation",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="text-base font-semibold">{c.title}</div>
              <div className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground/75">
                {c.date}
              </div>
            </div>
            <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/en/contact"
                className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
              >
                Send a question
              </Link>
              <Link
                href="/en/legal/terms"
                className="inline-flex h-10 items-center justify-center rounded-full border bg-background px-5 text-sm font-semibold transition hover:bg-muted"
              >
                Policy (demo)
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

