import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Products",
};

const products = [
  {
    title: "Digital account",
    desc: "Balances, transfers and reconciliation with enterprise controls.",
    points: ["Roles & permissions", "Reports & exports", "Limits & approvals"],
  },
  {
    title: "Payments",
    desc: "Clear flows for collections and payouts: cards, transfers and recurring payments.",
    points: ["Flexible checkout", "Webhooks (integrable)", "Conversion metrics"],
  },
  {
    title: "Crypto & custody",
    desc: "Secure product story for digital assets: custody, wallets and risk control.",
    points: ["Per-asset policies", "Withdrawal controls", "Event-level audit trails"],
  },
] as const;

export default function ProductsPageEn() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Products
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Ready sections for banking, payments and crypto
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
            Use these cards as product highlights and expand with deeper pages later.
          </p>
        </div>
        <Link
          href="/en/pricing"
          className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
        >
          View pricing
        </Link>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
            <div className="text-base font-semibold">{p.title}</div>
            <div className="mt-2 text-sm leading-6 text-foreground/70">{p.desc}</div>
            <div className="mt-5 space-y-3 text-sm text-foreground/75">
              {p.points.map((x) => (
                <div key={x} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-flex size-2 rounded-full bg-brand" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand)_14%,var(--color-surface)),color-mix(in_oklab,var(--color-accent)_12%,var(--color-surface)))] p-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-2">
            <div className="text-xl font-semibold tracking-tight">
              Turn visits into conversations
            </div>
            <div className="text-sm text-foreground/75">
              CTA designed for B2B sales, onboarding or partnerships.
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/en/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
            >
              Request a demo
            </Link>
            <Link
              href="/en/security"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

