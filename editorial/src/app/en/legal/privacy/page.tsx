import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyEnPage() {
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
          Demo text. Replace with your real policy and review with legal counsel.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {[
          {
            title: "Data we collect",
            body: "Contact information, usage metrics and communication data depending on forms.",
          },
          {
            title: "Purpose",
            body: "Answer inquiries, manage press/events and improve the site.",
          },
          {
            title: "Retention",
            body: "We keep data as long as needed to fulfill requests and meet obligations.",
          },
          {
            title: "Security",
            body: "Best practices for access and storage. Adjust to match your real infrastructure.",
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

