import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Support",
};

export default function SupportEnPage() {
  return (
    <div className="ndg-bg">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
              SUPPORT
            </div>
            <h1 className="text-balance font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight sm:text-5xl">
              Fast help with high-contrast UI
            </h1>
            <p className="text-pretty text-lg leading-8 text-foreground/70">
              Blocks for status, FAQs, guides and a demo contact form.
            </p>
            <div className="rounded-[28px] border bg-surface p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/60">
                STATUS
              </div>
              <div className="mt-2 text-lg font-semibold">Operational</div>
              <div className="mt-2 text-sm leading-6 text-foreground/70">
                Matchmaking, profiles and downloadable content working (demo).
              </div>
            </div>
          </div>

          <form className="rounded-[28px] border bg-surface p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="topic" className="text-sm font-semibold">
                  Topic
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-[color:color-mix(in_oklab,var(--color-neon-2)_30%,transparent)] transition focus:ring-4"
                  defaultValue="account"
                >
                  <option value="account">Account</option>
                  <option value="purchase">Purchases</option>
                  <option value="performance">Performance</option>
                  <option value="bug">Bug</option>
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-[color:color-mix(in_oklab,var(--color-neon-2)_30%,transparent)] transition focus:ring-4"
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="min-h-32 rounded-2xl border bg-background px-4 py-3 text-sm outline-none ring-[color:color-mix(in_oklab,var(--color-neon-2)_30%,transparent)] transition focus:ring-4"
                  placeholder="Describe the issue…"
                />
              </div>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition hover:opacity-90"
              >
                Submit (demo)
              </button>
              <div className="text-xs text-foreground/60">
                You can also check{" "}
                <Link
                  className="text-[color:var(--color-neon-2)] hover:opacity-90"
                  href="/en/news"
                >
                  patch notes
                </Link>{" "}
                or{" "}
                <Link
                  className="text-[color:var(--color-neon-2)] hover:opacity-90"
                  href="/en/games"
                >
                  game pages
                </Link>
                .
              </div>
            </div>
          </form>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-3">
            <div className="inline-flex items-center rounded-full border bg-surface px-4 py-2 text-xs font-semibold tracking-[0.22em] text-foreground/70">
              FAQ
            </div>
            <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight">
              Common questions
            </h2>
            <p className="text-sm leading-6 text-foreground/70">
              Interactive accordion ready for long FAQs without visual noise.
            </p>
          </div>
          <FaqAccordion
            items={[
              {
                q: "How do I recover my account?",
                a: "Sign in with your email and use the recovery flow (demo). Connect this block to your backend.",
              },
              {
                q: "I have lag or stuttering. What should I do?",
                a: "Update drivers, lower shadows and try windowed mode. Add your real guide here.",
              },
              {
                q: "Where can I find patch notes?",
                a: "We post updates, balance and hotfixes in Newswire.",
              },
            ]}
          />
        </div>
      </Container>
    </div>
  );
}
