import { getDictionary, normalizeLang } from "@/app/[lang]/dictionaries";
import { getContent } from "@/app/[lang]/content";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";

export default async function LangHome({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolved = await params;
  const lang = normalizeLang(resolved.lang);
  const dict = getDictionary(lang);
  const { books, excerpts, testimonials } = getContent(lang);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-bg py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-36 -top-36 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -right-32 -top-44 h-[30rem] w-[30rem] rounded-full bg-accent2/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,hsl(var(--accent2)/0.12),transparent_50%),radial-gradient(circle_at_85%_20%,hsl(var(--accent)/0.14),transparent_55%)]" />
        </div>

        <Container>
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
                {dict.hero.label}
              </p>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
                {dict.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base text-muted md:text-lg">
                {dict.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#books" variant="primary">
                  {dict.hero.ctaPrimary}
                </Button>
                <Button href="#writings" variant="secondary">
                  {dict.hero.ctaSecondary}
                </Button>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                  {dict.cards.focus}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-fg">Narrativa</span>
                    <span className="text-muted">·</span>
                    <span>Poética</span>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-fg">Ensayo</span>
                    <span className="text-muted">·</span>
                    <span>Crítica</span>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span className="text-fg">Lecturas</span>
                    <span className="text-muted">·</span>
                    <span>Talleres</span>
                  </li>
                </ul>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                    {dict.cards.availability}
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    {lang === "en"
                      ? "Available for talks, editing, and collaborations."
                      : "Disponible para charlas, edición y colaboraciones."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <Section id="about" eyebrow={dict.nav.about} title={dict.sections.aboutTitle}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <p className="text-base text-fg md:text-lg">{dict.sections.aboutLead}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                {dict.sections.aboutBody}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:col-span-5">
              <Card title={dict.cards.awards}>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between gap-3">
                    <span className="text-fg">Residencia literaria</span>
                    <span className="text-muted">2023</span>
                  </li>
                  <li className="flex items-center justify-between gap-3">
                    <span className="text-fg">Beca de creación</span>
                    <span className="text-muted">2022</span>
                  </li>
                  <li className="flex items-center justify-between gap-3">
                    <span className="text-fg">Finalista premio narrativa</span>
                    <span className="text-muted">2021</span>
                  </li>
                </ul>
              </Card>
              <Card title={lang === "en" ? "Contact" : "Contacto"}>
                <div className="space-y-2">
                  <p>
                    <span className="text-fg">{dict.ui.email}:</span>{" "}
                    <a
                      className="text-accent2 hover:underline"
                      href="mailto:hello@writer.com"
                    >
                      hello@writer.com
                    </a>
                  </p>
                  <p>
                    <span className="text-fg">{dict.ui.location}:</span>{" "}
                    <span>Buenos Aires · Madrid</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        <Section id="books" eyebrow={dict.nav.books} title={dict.sections.booksTitle}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {books.map((b) => (
              <article
                key={b.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-accent2"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">{b.title}</h3>
                  <span className="rounded-full border border-border bg-bg px-2 py-1 text-xs font-semibold text-muted">
                    {b.year}
                  </span>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-accent2">
                  {b.role}
                </p>
                <p className="mt-3 text-sm text-muted">{b.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-bg px-2 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="writings"
          eyebrow={dict.nav.writings}
          title={dict.sections.writingsTitle}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {excerpts.map((e) => (
              <article
                key={e.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                  {e.source}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{e.text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="services"
          eyebrow={dict.nav.services}
          title={dict.sections.servicesTitle}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold">{dict.services.speaking}</p>
              <p className="mt-2 text-sm text-muted">
                {lang === "en"
                  ? "Readings, conversations, festivals, book fairs and interviews."
                  : "Lecturas, conversaciones, festivales, ferias del libro y entrevistas."}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold">{dict.services.workshops}</p>
              <p className="mt-2 text-sm text-muted">
                {lang === "en"
                  ? "Short formats and deep dives: voice, structure and revision."
                  : "Formatos breves y profundos: voz, estructura y reescritura."}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold">{dict.services.editing}</p>
              <p className="mt-2 text-sm text-muted">
                {lang === "en"
                  ? "Editorial feedback, line editing and style consistency."
                  : "Devoluciones editoriales, edición de estilo y consistencia."}
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold">{dict.services.ghostwriting}</p>
              <p className="mt-2 text-sm text-muted">
                {lang === "en"
                  ? "Discreet support for projects that need an experienced hand."
                  : "Acompañamiento discreto para proyectos que necesitan oficio."}
              </p>
            </div>
          </div>
        </Section>

        <Section id="press" eyebrow={dict.nav.press} title={dict.sections.pressTitle}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <blockquote className="text-sm leading-relaxed text-fg">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between gap-4 text-xs text-muted">
                  <span className="font-semibold text-fg">{t.name}</span>
                  <span>{t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold">
                {lang === "en"
                  ? "Need a one-page press kit?"
                  : "¿Necesitas un press kit de una página?"}
              </p>
              <p className="mt-2 text-sm text-muted">
                {lang === "en"
                  ? "A clean page with bio, highlights and contact."
                  : "Una página limpia con bio, destacados y contacto."}
              </p>
            </div>
            <Button href={`/${lang}/press-kit/`} variant="secondary">
              {dict.ui.downloadPressKit}
            </Button>
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow={dict.nav.contact}
          title={dict.sections.contactTitle}
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <p className="text-base text-fg md:text-lg">{dict.contact.lead}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{dict.contact.note}</p>
              <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
                  {dict.ui.newsletter}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {lang === "en"
                    ? "Occasional notes about craft, readings and new releases."
                    : "Notas ocasionales sobre oficio, lecturas y novedades."}
                </p>
                <form className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <input
                    className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="email@domain.com"
                    inputMode="email"
                  />
                  <button
                    type="button"
                    className="rounded-xl bg-accent px-4 py-2 text-sm font-medium text-bg shadow-soft transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {dict.ui.subscribe}
                  </button>
                </form>
              </div>
            </div>
            <div className="md:col-span-7">
              <ContactForm lang={lang} labels={dict.ui} />
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}
