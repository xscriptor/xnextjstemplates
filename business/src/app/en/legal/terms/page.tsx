import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPageEn() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
          Legal
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Terms and conditions (demo)
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
          Demo content. Replace with your real terms and review with legal counsel.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {[
          {
            title: "Service usage",
            body: "Users agree to use the service in compliance with law and applicable policies.",
          },
          {
            title: "Liability",
            body: "Define limitations based on jurisdiction, service type and commercial agreements.",
          },
          {
            title: "Billing",
            body: "Define charges, renewals, cancellations and refunds if applicable.",
          },
          {
            title: "Intellectual property",
            body: "Define licenses, trademarks and rights over content, software and materials.",
          },
        ].map((s) => (
          <section key={s.title} className="rounded-3xl border bg-surface p-6">
            <h2 className="text-base font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm leading-6 text-foreground/70">{s.body}</p>
          </section>
        ))}
      </div>
    </Container>
  );
}

