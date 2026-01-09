import Link from "next/link";

export default function RootLanguageGate() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-bg text-fg">
      <div className="pointer-events-none absolute inset-0">
        <div className="home-gold-gradient absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,hsl(var(--accent2)/0.08),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center gap-8 px-6 py-16 text-center">
        <div className="page-stagger">
          <p className="text-sm text-muted">Writer Portfolio Template</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Elige tu idioma / Choose your language
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-base text-muted md:text-lg">
            Sitio estático en Next.js con TypeScript + Tailwind, tres temas y traducciones sin
            librerías.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/es/"
              className="rounded-xl border border-border bg-card px-6 py-3 text-center text-sm font-medium shadow-soft transition hover:-translate-y-0.5 hover:border-accent2 hover:text-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Español
            </Link>
            <Link
              href="/en/"
              className="rounded-xl border border-border bg-card px-6 py-3 text-center text-sm font-medium shadow-soft transition hover:-translate-y-0.5 hover:border-accent2 hover:text-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
