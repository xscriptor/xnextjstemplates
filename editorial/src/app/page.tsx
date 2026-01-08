import Link from "next/link";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <div className="relative">
      <section className="border-b">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border bg-surface px-3 py-1 text-xs font-medium text-foreground/75">
                Catálogo · Autores · Convocatorias
              </div>
              <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                Literatura contemporánea con edición cuidadosa
              </h1>
              <p className="text-pretty text-lg leading-8 text-foreground/75">
                X Editorial es una plantilla para editoriales: catálogo, autores, prensa,
                convocatorias y contacto. Diseño inspirado en papel y tinta, con tipografía
                clásica.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/catalogo"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
                >
                  Explorar catálogo
                </Link>
                <Link
                  href="/convocatorias"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
                >
                  Convocatorias
                </Link>
              </div>
              <div className="grid gap-3 rounded-3xl border bg-surface p-5 sm:grid-cols-3">
                {[
                  { k: "12", v: "Colecciones" },
                  { k: "80+", v: "Títulos (demo)" },
                  { k: "2016", v: "Desde" },
                ].map((s) => (
                  <div key={s.v} className="space-y-1">
                    <div className="text-2xl font-semibold tracking-tight">{s.k}</div>
                    <div className="text-xs text-foreground/70">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border bg-surface p-8 shadow-sm">
                <div className="text-xs font-semibold tracking-[0.2em] text-foreground/60">
                  DESTACADOS
                </div>
                <div className="mt-6 grid gap-4">
                  {[
                    {
                      title: "El mapa de los silencios",
                      meta: "Novela · 2025 · Colección Umbral",
                    },
                    {
                      title: "Cartas desde la ribera",
                      meta: "Poesía · 2024 · Colección Bronce",
                    },
                    {
                      title: "Ensayos sobre la memoria",
                      meta: "Ensayo · 2023 · Colección Archivo",
                    },
                  ].map((b) => (
                    <div key={b.title} className="rounded-2xl border bg-background p-4">
                      <div className="text-lg font-semibold tracking-tight">{b.title}</div>
                      <div className="mt-1 text-sm text-foreground/70">{b.meta}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand)_14%,var(--color-surface)),color-mix(in_oklab,var(--color-accent)_14%,var(--color-surface)))] p-5">
                  <div className="text-base font-semibold tracking-tight">
                    Prensa y dossier editorial
                  </div>
                  <div className="mt-1 text-sm text-foreground/75">
                    Sección demo para notas, kits de prensa y reseñas.
                  </div>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/about"
                      className="inline-flex h-10 items-center justify-center rounded-full border bg-surface px-5 text-sm font-semibold transition hover:bg-muted"
                    >
                      Conocer la editorial
                    </Link>
                    <Link
                      href="/contacto"
                      className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
                    >
                      Contactar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b">
        <Container className="py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
                Filosofía editorial
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Curaduría, diseño y acompañamiento al autor
              </h2>
              <p className="text-foreground/75">
                Secciones pensadas para transmitir seriedad: procesos, estándares, premios,
                distribución y prensa.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Edición",
                  desc: "Lectura crítica, corrección, estilo y coherencia editorial.",
                },
                {
                  title: "Diseño",
                  desc: "Maquetación y cubiertas con identidad sobria y atemporal.",
                },
                {
                  title: "Difusión",
                  desc: "Notas de prensa, presentaciones y estrategia de catálogo.",
                },
                {
                  title: "Distribución",
                  desc: "Librerías, ferias y canales digitales (contenido demo).",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-3xl border bg-surface p-6 shadow-sm">
                  <div className="text-base font-semibold">{c.title}</div>
                  <div className="mt-2 text-sm leading-6 text-foreground/70">{c.desc}</div>
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
                Preguntas frecuentes para lectores y autores
              </h2>
              <p className="text-foreground/75">
                Bloque reutilizable para resolver dudas sobre envíos, tiempos, formatos y
                eventos.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  q: "¿Aceptan manuscritos durante todo el año?",
                  a: "Depende de la convocatoria. Consulta la sección de Convocatorias para fechas y requisitos.",
                },
                {
                  q: "¿Publican solo ficción?",
                  a: "No. Incluimos narrativa, poesía y ensayo según línea editorial (demo).",
                },
                {
                  q: "¿Cómo puedo solicitar prensa o reseña?",
                  a: "Escríbenos desde Contacto y comparte el medio, audiencia y plazos.",
                },
              ].map((f) => (
                <div key={f.q} className="rounded-3xl border bg-surface p-6">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm leading-6 text-foreground/70">{f.a}</div>
                </div>
              ))}
              <div className="rounded-3xl border bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand)_12%,var(--color-surface)),color-mix(in_oklab,var(--color-accent)_12%,var(--color-surface)))] p-6">
                <div className="text-base font-semibold tracking-tight">
                  ¿Quieres proponer un proyecto?
                </div>
                <div className="mt-2 text-sm text-foreground/75">
                  Usa esta llamada a la acción como punto de entrada para autores y agentes.
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/convocatorias"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition hover:opacity-95"
                  >
                    Ver convocatorias
                  </Link>
                  <Link
                    href="/contacto"
                    className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-semibold transition hover:bg-muted"
                  >
                    Contactar
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
