import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_25%_15%,color-mix(in_oklab,var(--color-brand)_18%,transparent),transparent_55%),radial-gradient(700px_circle_at_75%_35%,color-mix(in_oklab,var(--color-accent)_16%,transparent),transparent_58%)]" />
        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border bg-surface px-3 py-1 text-sm text-foreground/80">
                <span className="inline-flex size-2 rounded-full bg-accent" />
                Cumplimiento, seguridad y diseño listo para producción
              </div>
              <div className="space-y-4">
                <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Banca digital y cripto con una experiencia de confianza
                </h1>
                <p className="text-pretty text-lg leading-8 text-foreground/75">
                  Xtrust es una plantilla completa para fintech: landing, producto,
                  seguridad, precios y contacto. Construida en Next.js + TypeScript +
                  Tailwind.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground shadow-sm transition hover:opacity-95"
                >
                  Solicitar demo
                </Link>
                <Link
                  href="/products"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium text-foreground/90 transition hover:bg-muted"
                >
                  Ver productos
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 rounded-2xl border bg-surface p-4 sm:grid-cols-4">
                {[
                  { k: "99.99%", v: "Uptime objetivo" },
                  { k: "< 200ms", v: "Latencia UX" },
                  { k: "SOC2", v: "Marco compatible" },
                  { k: "24/7", v: "Soporte" },
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
                        Resumen financiero en tiempo real
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-xs text-foreground/70">
                    Actualizado ahora
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border bg-background p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-foreground/70">Balance total</div>
                      <div className="text-xs text-foreground/65">USD</div>
                    </div>
                    <div className="mt-2 text-3xl font-semibold tracking-tight">
                      $ 128,450.22
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[72%] rounded-full bg-brand" />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-foreground/65">
                      <span>Liquidez</span>
                      <span>72%</span>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { title: "Cuenta Empresa", value: "$ 84,120.07", tag: "Banca" },
                      { title: "Cartera Cripto", value: "$ 44,330.15", tag: "Custodia" },
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
                          Reportes, límites y control por rol
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
              Diseñado para organizaciones que priorizan confianza y cumplimiento.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
              {["AurumPay", "NorthLedger", "AtlasBank", "BlueHarbor", "KryptonX", "Veridian"]
                .map((name) => (
                  <div
                    key={name}
                    className="flex items-center justify-center rounded-full border bg-surface px-4 py-2 text-xs font-medium text-foreground/75"
                  >
                    {name}
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="features" className="border-b">
        <Container className="py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div className="space-y-3">
              <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75">
                Funcionalidades clave
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Todo lo que espera una fintech moderna
              </h2>
              <p className="text-foreground/75">
                Secciones listas para presentar producto, confianza y conversión. Componentes
                reutilizables y tipados.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Seguridad por diseño",
                  desc: "MFA, cifrado, auditoría y principios de mínimo privilegio.",
                },
                {
                  title: "Pagos y transferencias",
                  desc: "Flujos claros para banca, tarjetas, SPEI/SEPA y cripto.",
                },
                {
                  title: "Controles empresariales",
                  desc: "Roles, límites, aprobaciones y reportes para equipos.",
                },
                {
                  title: "Experiencia consistente",
                  desc: "Paleta estándar, tipografía y layout responsive.",
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
                Confianza respaldada por prácticas reales
              </h2>
              <p className="text-foreground/75">
                Presenta tu postura de seguridad con claridad. Esta sección sirve como base
                para SOC2/ISO27001, KYC/AML y políticas internas.
              </p>
              <div className="grid gap-3">
                {[
                  "Cifrado en tránsito y en reposo",
                  "Monitoreo y alertas con trazabilidad",
                  "Controles de acceso y rotación de claves",
                  "Continuidad operativa y recuperación",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-flex size-2 rounded-full bg-brand" />
                    <div className="text-sm text-foreground/75">{t}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/security"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
                >
                  Ver seguridad
                </Link>
                <Link
                  href="/legal/privacy"
                  className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
                >
                  Privacidad
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "KYC/AML", desc: "Flujos documentables y verificables." },
                { title: "Custodia", desc: "Políticas y controles por activo." },
                { title: "Auditoría", desc: "Registros y eventos por usuario." },
                { title: "Disponibilidad", desc: "Arquitectura para resiliencia." },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border bg-surface p-5 shadow-sm"
                >
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
                Precios
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Planes claros para crecer con tu negocio
              </h2>
              <p className="max-w-2xl text-foreground/75">
                Ajusta copy, cifras y características según tu modelo. Todo el diseño es
                responsive y consistente.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
            >
              Comparar planes
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$49",
                desc: "Ideal para MVP y pruebas con usuarios.",
                items: ["Landing + producto", "Componentes base", "Secciones de confianza"],
              },
              {
                name: "Growth",
                price: "$149",
                desc: "Para equipos con onboarding y ventas activas.",
                items: ["Páginas completas", "Sección seguridad", "Formulario contacto"],
                featured: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "Adecuado para compliance, SSO y escalamiento.",
                items: ["Legal + políticas", "Arquitectura lista", "Personalización UI"],
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
                      Más popular
                    </div>
                  ) : null}
                </div>
                <div className="mt-3 text-4xl font-semibold tracking-tight">
                  {p.price}
                  {p.price.startsWith("$") ? (
                    <span className="text-base font-medium text-foreground/70">/mes</span>
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
                  href="/contact"
                  className={[
                    "mt-8 inline-flex h-11 w-full items-center justify-center rounded-full px-6 text-sm font-medium transition",
                    p.featured
                      ? "bg-brand text-brand-foreground hover:opacity-95"
                      : "border bg-background hover:bg-muted",
                  ].join(" ")}
                >
                  Hablar con ventas
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
                Testimonios
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Mensajes que transmiten credibilidad
              </h2>
              <p className="text-foreground/75">
                Incluye validación social para acelerar decisiones. Ajusta nombres y cargos
                según tu caso real.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  quote:
                    "La estructura de seguridad y el contenido de compliance nos ahorraron semanas.",
                  name: "Marina F.",
                  role: "Head of Risk",
                },
                {
                  quote:
                    "Un diseño sobrio, moderno y con una narrativa clara para producto y ventas.",
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
                Preguntas frecuentes para reducir fricción
              </h2>
              <p className="text-foreground/75">
                Puedes reutilizar este bloque en pricing o onboarding.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  q: "¿Esto incluye backend o integración de pagos?",
                  a: "No. Esta template es 100% frontend. Puedes conectar tus APIs o proveedores más adelante.",
                },
                {
                  q: "¿Puedo cambiar la marca y paleta?",
                  a: "Sí. Las variables de color están en globals.css y los componentes usan tokens consistentes.",
                },
                {
                  q: "¿Está optimizada para móvil?",
                  a: "Sí. Secciones, grid y navegación responden a diferentes tamaños de pantalla.",
                },
              ].map((f) => (
                <div key={f.q} className="rounded-2xl border bg-surface p-5">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <div className="mt-2 text-sm text-foreground/70">{f.a}</div>
                </div>
              ))}
              <div className="rounded-3xl border bg-[linear-gradient(135deg,color-mix(in_oklab,var(--color-brand)_14%,var(--color-surface)),color-mix(in_oklab,var(--color-accent)_12%,var(--color-surface)))] p-6">
                <div className="text-base font-semibold">¿Listo para presentar tu producto?</div>
                <div className="mt-2 text-sm text-foreground/75">
                  Usa este bloque como CTA final para convertir visitas en leads.
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-6 text-sm font-medium text-brand-foreground transition hover:opacity-95"
                  >
                    Contactar
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex h-11 items-center justify-center rounded-full border bg-surface px-6 text-sm font-medium transition hover:bg-muted"
                  >
                    Conocer más
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
