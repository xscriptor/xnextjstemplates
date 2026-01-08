import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPageEn() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
          Legal
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Privacy policy (demo)
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
          Demo content. This is not legal advice. Replace with your real policy.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {[
          {
            title: "Data we collect",
            body: "Contact information, usage data and operational metrics depending on the service.",
          },
          {
            title: "Purpose",
            body: "Operate the service, improve security, provide support and comply with applicable regulations.",
          },
          {
            title: "Retention",
            body: "We keep data only as long as necessary to operate and meet legal obligations.",
          },
          {
            title: "Security",
            body: "Access controls, encryption and continuous monitoring to protect information.",
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

