import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Pricing",
};

const plans = [
  {
    name: "Starter",
    price: "$49",
    desc: "Solid narrative with core sections.",
    items: ["Full home page", "Products", "Basic SEO"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$149",
    desc: "For active marketing and sales motion.",
    items: ["Security", "Pricing", "Contact + legal"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Tailored for brand, compliance and scale.",
    items: ["Brand tokens", "Modular structure", "Implementation support"],
    featured: false,
  },
] as const;

export default function PricingPageEn() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
          Pricing
        </div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight">
          Simple plans, no surprises
        </h1>
        <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
          Update copy, numbers and benefits for your offer. Styles are suited for financial
          services and enterprise.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={[
              "rounded-3xl border bg-surface p-6 shadow-sm",
              p.featured ? "ring-2 ring-brand/40" : "",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <div className="text-base font-semibold">{p.name}</div>
              {p.featured ? (
                <div className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-foreground">
                  Recommended
                </div>
              ) : null}
            </div>
            <div className="mt-3 text-4xl font-semibold tracking-tight">
              {p.price}
              {p.price.startsWith("$") ? (
                <span className="text-base font-medium text-foreground/70">/mo</span>
              ) : null}
            </div>
            <div className="mt-2 text-sm text-foreground/70">{p.desc}</div>
            <div className="mt-6 space-y-3 text-sm text-foreground/75">
              {p.items.map((x) => (
                <div key={x} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-flex size-2 rounded-full bg-accent" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
            <Link
              href="/en/contact"
              className={[
                "mt-8 inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-medium transition",
                p.featured
                  ? "bg-brand text-brand-foreground hover:opacity-95"
                  : "border bg-background hover:bg-muted",
              ].join(" ")}
            >
              Choose plan
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border bg-surface p-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <div className="space-y-2">
            <div className="text-xl font-semibold tracking-tight">Need something custom?</div>
            <div className="text-sm text-foreground/75">
              Customize visual identity, navigation and compliance copy.
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/en/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
            >
              Contact sales
            </Link>
            <Link
              href="/en/security"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-background px-6 text-sm font-medium transition hover:bg-muted"
            >
              Security
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

