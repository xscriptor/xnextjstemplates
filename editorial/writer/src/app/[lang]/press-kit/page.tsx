import Link from "next/link";

import { getDictionary, normalizeLang } from "@/app/[lang]/dictionaries";
import { getContent } from "@/app/[lang]/content";
import { Container } from "@/components/Container";
import { PressKitActions } from "@/components/PressKitActions";

export default async function PressKitPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang = normalizeLang(resolved.lang);
  const dict = getDictionary(lang);
  const { books } = getContent(lang);

  const brand = lang === "en" ? "Author Name" : "Nombre de Autor/a";

  return (
    <Container>
      <div className="py-14 md:py-20">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
              Press kit
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              {brand}
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              {dict.meta.description}
            </p>
          </div>
          <PressKitActions lang={lang} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="aspect-[4/5] w-full rounded-xl border border-border bg-bg" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent2">
                {lang === "en" ? "Quick bio" : "Bio breve"}
              </p>
              <p className="mt-2 text-sm text-muted">
                {lang === "en"
                  ? "Writer of fiction and essays. Works with themes of memory, place and attention."
                  : "Escritora/or de narrativa y ensayo. Trabaja temas de memoria, lugar y atención."}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                {lang === "en" ? "Contact" : "Contacto"}
              </p>
              <div className="mt-3 space-y-2 text-sm text-muted">
                <p>
                  <span className="font-semibold text-fg">{dict.ui.email}:</span>{" "}
                  <a className="text-accent2 hover:underline" href="mailto:hello@writer.com">
                    hello@writer.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-fg">{dict.ui.location}:</span>{" "}
                  Buenos Aires · Madrid
                </p>
                <p>
                  <span className="font-semibold text-fg">Web:</span>{" "}
                  <Link className="text-accent2 hover:underline" href={`/${lang}/`}>
                    {lang === "en" ? "Home" : "Inicio"}
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                {lang === "en" ? "Highlights" : "Destacados"}
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-muted md:grid-cols-2">
                <li className="rounded-xl border border-border bg-bg px-4 py-3">
                  {lang === "en" ? "Residency · 2023" : "Residencia · 2023"}
                </li>
                <li className="rounded-xl border border-border bg-bg px-4 py-3">
                  {lang === "en" ? "Grant · 2022" : "Beca · 2022"}
                </li>
                <li className="rounded-xl border border-border bg-bg px-4 py-3">
                  {lang === "en" ? "Festivals & talks" : "Festivales y charlas"}
                </li>
                <li className="rounded-xl border border-border bg-bg px-4 py-3">
                  {lang === "en" ? "Workshops" : "Talleres"}
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                {lang === "en" ? "Selected books" : "Libros seleccionados"}
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                {books.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-xl border border-border bg-bg px-4 py-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-semibold text-fg">{b.title}</p>
                      <p className="text-xs font-semibold text-muted">{b.year}</p>
                    </div>
                    <p className="mt-1 text-xs text-muted">{b.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                {lang === "en" ? "Note" : "Nota"}
              </p>
              <p className="mt-3 text-sm text-muted">
                {lang === "en"
                  ? "Use your browser print dialog to save this page as PDF."
                  : "Usa el diálogo de impresión del navegador para guardar como PDF."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
