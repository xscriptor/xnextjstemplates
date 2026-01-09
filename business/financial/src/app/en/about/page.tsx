import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Company",
};

export default function AboutPageEn() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            About Xtrust
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            A credible narrative for a modern financial brand
          </h1>
          <p className="text-pretty text-lg leading-8 text-foreground/75">
            This page is designed for fintech, digital banking or crypto. Replace the content
            with your story, team and real metrics.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/en/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
            >
              Talk to the team
            </Link>
            <Link
              href="/en/security"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
            >
              View security
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            {
              title: "Mission",
              desc: "Make money and digital assets manageable with clarity, control and trust.",
            },
            {
              title: "Vision",
              desc: "Turn enterprise financial operations into something simple, secure and verifiable.",
            },
            {
              title: "Values",
              desc: "Security, transparency, resilience and user focus.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border bg-surface p-6 shadow-sm">
              <div className="text-sm font-semibold">{c.title}</div>
              <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {[
          { k: "2019", v: "Founded" },
          { k: "120+", v: "Customers (demo)" },
          { k: "15", v: "Countries (demo)" },
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

