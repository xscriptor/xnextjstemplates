import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Catálogo",
};

const books = [
  { title: "El mapa de los silencios", author: "Isabel R.", tag: "Novela", year: "2025" },
  { title: "Cartas desde la ribera", author: "Tomás L.", tag: "Poesía", year: "2024" },
  { title: "Ensayos sobre la memoria", author: "Clara M.", tag: "Ensayo", year: "2023" },
  { title: "La casa de los nombres", author: "E. S.", tag: "Novela", year: "2022" },
] as const;

export default function CatalogoPage() {
  return (
    <Container className="py-14 sm:py-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
            Catálogo
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight">
            Obras seleccionadas para lectores exigentes
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/75">
            Este listado es demostrativo. Puedes convertirlo en un catálogo real con CMS más
            adelante.
          </p>
        </div>
        <Link
          href="/contacto"
          className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
        >
          Solicitar prensa
        </Link>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {books.map((b) => (
          <div key={b.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="text-lg font-semibold tracking-tight">{b.title}</div>
              <div className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground/75">
                {b.tag}
              </div>
            </div>
            <div className="mt-2 text-sm text-foreground/70">
              {b.author} · {b.year}
            </div>
            <div className="mt-5 grid gap-2 text-sm text-foreground/75 sm:grid-cols-2">
              <div className="rounded-2xl border bg-background px-4 py-3">
                Edición y corrección
              </div>
              <div className="rounded-2xl border bg-background px-4 py-3">Cubierta y arte</div>
              <div className="rounded-2xl border bg-background px-4 py-3">Ficha técnica</div>
              <div className="rounded-2xl border bg-background px-4 py-3">Reseñas (demo)</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

