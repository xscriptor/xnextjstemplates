import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";

export default function HomeEn() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_25%_15%,color-mix(in_oklab,var(--color-brand)_18%,transparent),transparent_55%),radial-gradient(700px_circle_at_75%_35%,color-mix(in_oklab,var(--color-accent)_16%,transparent),transparent_58%)]" />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border bg-surface px-3 py-1 text-sm text-foreground/80">
                <span className="inline-flex size-2 rounded-full bg-accent" />
                Compliance, security and production-ready design
              </div>
              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Digital banking and crypto with a trusted experience
                </h1>
                <p className="text-pretty text-lg leading-8 text-foreground/75">
                  Xtrust is a complete fintech template: landing, product, security,
                  pricing and contact. Built with Next.js + TypeScript + Tailwind.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/en/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground shadow-sm transition hover:opacity-95"
                >
                  Request a demo
                </Link>
                <Link
                  href="/en/products"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium text-foreground/90 transition hover:bg-muted"
                >
                  View products
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 rounded-2xl border bg-surface p-4 sm:grid-cols-4">
                {[
                  { k: "99.99%", v: "Target uptime" },
                  { k: "< 200ms", v: "UX latency" },
                  { k: "SOC2", v: "Compatible framework" },
                  { k: "24/7", v: "Support" },
                ].map((item) => (
                  <div key={item.v} className="space-y-1">
                    <div className="text-base font-semibold">{item.k}</div>
                    <div className="text-xs text-foreground/70">{item.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(450px_circle_at_25%_20%,color-mix(in_oklab,var(--color-brand)_22%,transparent),transparent_60%),radial-gradient(450px_circle_at_75%_60%,color-mix(in_oklab,var(--color-accent)_22%,transparent),transparent_60%)] blur-2xl" />
              <div className="rounded-3xl border bg-surface p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BrandMark className="size-10" />
                    <div className="leading-tight">
                      <div className="text-sm font-semibold">Xtrust Dashboard</div>
                      <div className="text-xs text-foreground/65">
                        Real-time financial overview
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-xs text-foreground/70">
                    Updated now
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border bg-background p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-foreground/70">Total balance</div>
                      <div className="text-xs text-foreground/65">USD</div>
                    </div>
                    <div className="mt-2 text-3xl font-semibold tracking-tight">
                      $ 128,450.22
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[72%] rounded-full bg-brand" />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-foreground/65">
                      <span>Liquidity</span>
                      <span>72%</span>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { title: "Business Account", value: "$ 84,120.07", tag: "Banking" },
                      { title: "Crypto Wallet", value: "$ 44,330.15", tag: "Custody" },
                    ].map((card) => (
                      <div
                        key={card.title}
                        className="rounded-2xl border bg-background p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">{card.title}</div>
                          <div className="rounded-full bg-muted px-2 py-0.5 text-xs text-foreground/65">
                            {card.tag}
                          </div>
                        </div>
                        <div className="mt-2 text-xl font-semibold">{card.value}</div>
                        <div className="mt-2 text-xs text-foreground/65">
                          Reports, limits and role-based control
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b">
        <Container className="py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-foreground/70">
              Built for organizations that prioritize trust and compliance.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
              {["AurumPay", "NorthLedger", "AtlasBank", "BlueHarbor", "KryptonX", "Veridian"].map(
                (name) => (
                  <div
                    key={name}
                    className="flex items-center justify-center rounded-full border bg-surface px-4 py-2 text-xs font-medium text-foreground/75"
                  >
                    {name}
                  </div>
                ),
              )}
            </div>
          </div>
        </Container>
      </section>

      <section id="features" className="border-b">
        <Container className="py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
                Key features
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Everything a modern fintech expects
              </h2>
              <p className="text-foreground/75">
                Ready-to-use sections for product storytelling, trust and conversion.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Security by design",
                  desc: "MFA, encryption, audit trails and least-privilege principles.",
                },
                {
                  title: "Payments & transfers",
                  desc: "Clear flows for banking rails, cards and crypto.",
                },
                {
                  title: "Business controls",
                  desc: "Roles, limits, approvals and reports for teams.",
                },
                {
                  title: "Consistent experience",
                  desc: "Standard palette, typography and responsive layout.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border bg-surface p-5 shadow-sm"
                >
                  <div className="text-base font-semibold">{f.title}</div>
                  <div className="mt-2 text-sm leading-6 text-foreground/70">
                    {f.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b">
        <Container className="py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <h2 className="text-3xl font-semibold tracking-tight">
                Trust backed by real practices
              </h2>
              <p className="text-foreground/75">
                Present your security posture clearly. This section can map to SOC2/ISO27001,
                KYC/AML and internal policies.
              </p>
              <div className="grid gap-3">
                {[
                  "Encryption in transit and at rest",
                  "Monitoring and alerts with traceability",
                  "Access controls and key rotation",
                  "Business continuity and recovery",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-flex size-2 rounded-full bg-brand" />
                    <div className="text-sm text-foreground/75">{t}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/en/security"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
                >
                  View security
                </Link>
                <Link
                  href="/en/legal/privacy"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
                >
                  Privacy
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "KYC/AML", desc: "Documentable and verifiable flows." },
                { title: "Custody", desc: "Policies and per-asset controls." },
                { title: "Audit", desc: "User-level logs and events." },
                { title: "Availability", desc: "Architecture for resilience." },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border bg-surface p-5 shadow-sm">
                  <div className="text-sm font-semibold">{c.title}</div>
                  <div className="mt-2 text-sm text-foreground/70">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="pricing" className="border-b">
        <Container className="py-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
                Pricing
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Clear plans to grow with your business
              </h2>
              <p className="max-w-2xl text-foreground/75">
                Update copy, numbers and features for your model. Responsive by default.
              </p>
            </div>
            <Link
              href="/en/pricing"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
            >
              Compare plans
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$49",
                desc: "Ideal for MVPs and early users.",
                items: ["Landing + product", "Base components", "Trust sections"],
              },
              {
                name: "Growth",
                price: "$149",
                desc: "For teams with onboarding and active sales.",
                items: ["Complete pages", "Security section", "Contact form"],
                featured: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "For compliance, SSO and scaling.",
                items: ["Legal + policies", "Ready structure", "UI customization"],
              },
            ].map((p) => (
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
                      Most popular
                    </div>
                  ) : null}
                </div>
                <div className="mt-3 text-4xl font-semibold tracking-tight">
                  {p.price}
                  {p.price.startsWith("$") ? (
                    <span className="text-base font-medium text-foreground/70">/mo</span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                <div className="mt-6 space-y-3 text-sm text-foreground/75">
                  {p.items.map((i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex size-2 rounded-full bg-accent" />
                      <span>{i}</span>
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
                  Talk to sales
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b">
        <Container className="py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
                Testimonials
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Credibility-focused messaging
              </h2>
              <p className="text-foreground/75">
                Add social proof to accelerate decisions. Replace names and roles with real ones.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  quote:
                    "The security structure and compliance copy saved us weeks of work.",
                  name: "Marina F.",
                  role: "Head of Risk",
                },
                {
                  quote:
                    "A sober, modern design with a clear narrative for product and sales.",
                  name: "Diego R.",
                  role: "VP Growth",
                },
              ].map((t) => (
                <div key={t.name} className="rounded-2xl border bg-surface p-5 shadow-sm">
                  <div className="text-sm leading-6 text-foreground/80">“{t.quote}”</div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-foreground/65">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
                FAQ
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Reduce friction with answers
              </h2>
              <p className="text-foreground/75">
                Reuse this block across pricing or onboarding pages.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  q: "Does this include a backend or payment integrations?",
                  a: "No. This template is 100% frontend. You can connect your APIs or providers later.",
                },
                {
                  q: "Can I change the brand and palette?",
                  a: "Yes. Colors are centralized in globals.css and components use consistent tokens.",
                },
                {
                  q: "Is it mobile-optimized?",
                  a: "Yes. Sections, grids and navigation are responsive across breakpoints.",
                },
              ].map((f) => (
                <div key={f.q} className="rounded-2xl border bg-surface p-5">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm text-foreground/70">{f.a}</div>
                </div>
              ))}
              <div className="rounded-3xl border bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand)_14%,var(--color-surface)),color-mix(in_oklab,var(--color-accent)_12%,var(--color-surface)))] p-6">
                <div className="text-base font-semibold">Ready to present your product?</div>
                <div className="mt-2 text-sm text-foreground/75">
                  Use this as a final CTA to convert visits into leads.
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/en/contact"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/en/about"
                    className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

