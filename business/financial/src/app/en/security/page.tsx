import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Security",
};

const controls = [
  {
    title: "Encryption",
    desc: "TLS in transit and encryption at rest. A clear and auditable posture.",
  },
  {
    title: "Access",
    desc: "MFA, roles, least privilege and periodic access reviews.",
  },
  {
    title: "Audit",
    desc: "User traceability, event logs and monitoring for incident response.",
  },
  {
    title: "Resilience",
    desc: "Backups, continuity and recovery to ensure availability and data safety.",
  },
] as const;

export default function SecurityPageEn() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
          Security
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Designed to communicate trust and compliance
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
          A starting point for sales, security and compliance teams. Replace with your real
          controls and documentation.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {controls.map((c) => (
          <div key={c.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
            <div className="text-base font-semibold">{c.title}</div>
            <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
            <div className="mt-5 rounded-2xl bg-muted p-4 text-xs text-foreground/70">
              Replace this block with real data, diagrams, SLAs or links.
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/en/contact"
          className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
        >
          Talk to security
        </Link>
        <Link
          href="/en/legal/terms"
          className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
        >
          Terms
        </Link>
      </div>
    </Container>
  );
}

