import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Autores",
};

const authors = [
  { name: "Isabel R.", line: "Narrativa y memoria" },
  { name: "Tomás L.", line: "Poesía contemporánea" },
  { name: "Clara M.", line: "Ensayo y archivo" },
  { name: "E. S.", line: "Ficción breve" },
] as const;

export default function AutoresPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Autores
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Voces y trayectorias del catálogo
          </h1>
          <p className="text-pretty text-lg leading-8 text-foreground/75">
            Usa esta página para presentar biografías, premios, prensa y próximos eventos.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/catalogo"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
            >
              Ver libros
            </Link>
            <Link
              href="/contacto"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
            >
              Prensa
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {authors.map((a) => (
            <div key={a.name} className="rounded-3xl border bg-surface p-6 shadow-sm">
              <div className="text-base font-semibold">{a.name}</div>
              <div className="mt-2 text-sm text-foreground/70">{a.line}</div>
              <div className="mt-5 rounded-2xl bg-muted p-4 text-xs text-foreground/70">
                Biografía, obras y enlaces (demo)
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

