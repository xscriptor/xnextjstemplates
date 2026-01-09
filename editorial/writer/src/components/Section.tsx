import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20">
      <div className="page-stagger flex flex-col gap-6">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-widest text-accent2">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 font-[var(--font-serif)] text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
