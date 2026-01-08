import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactEnPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Contact
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Press, bookstores, authors and readers
          </h1>
          <p className="text-pretty text-lg leading-8 text-foreground/75">
            This form is frontend-only. You can connect it to your backend, email or CRM.
          </p>
          <div className="rounded-3xl border bg-surface p-6 text-sm text-foreground/75">
            <div className="font-semibold text-foreground">Quick routes</div>
            <div className="mt-3 grid gap-2">
              <Link className="text-brand hover:opacity-90" href="/en/catalog">
                Catalog
              </Link>
              <Link className="text-brand hover:opacity-90" href="/en/submissions">
                Submissions
              </Link>
              <Link className="text-brand hover:opacity-90" href="/en/about">
                About the house
              </Link>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border bg-surface p-6 shadow-sm">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <input
                id="name"
                name="name"
                className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-brand/30 transition focus:ring-4"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-brand/30 transition focus:ring-4"
                placeholder="you@email.com"
                autoComplete="email"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="topic" className="text-sm font-semibold">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                className="h-11 rounded-2xl border bg-background px-4 text-sm outline-none ring-brand/30 transition focus:ring-4"
                defaultValue="press"
              >
                <option value="press">Press / review</option>
                <option value="bookstores">Bookstores / distribution</option>
                <option value="authors">Authors / agents</option>
                <option value="readers">Readers</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="min-h-32 rounded-2xl border bg-background px-4 py-3 text-sm outline-none ring-brand/30 transition focus:ring-4"
                placeholder="Tell us what you need…"
              />
            </div>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
            >
              Send (demo)
            </button>
            <div className="text-xs text-foreground/60">
              By submitting you accept our{" "}
              <Link className="text-brand hover:opacity-90" href="/en/legal/terms">
                terms
              </Link>{" "}
              and{" "}
              <Link className="text-brand hover:opacity-90" href="/en/legal/privacy">
                privacy
              </Link>
              .
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

