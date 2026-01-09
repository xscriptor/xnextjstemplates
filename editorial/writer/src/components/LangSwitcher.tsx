import Link from "next/link";

import type { Lang } from "@/app/[lang]/dictionaries";

export function LangSwitcher({
  current,
  labels
}: {
  current: Lang;
  labels: { language: string };
}) {
  const other: Lang = current === "es" ? "en" : "es";
  const text = other === "es" ? "ES" : "EN";

  return (
    <Link
      href={`/${other}/`}
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-fg shadow-soft transition hover:-translate-y-0.5 hover:border-accent2 hover:text-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={labels.language}
      title={labels.language}
    >
      <span className="h-2 w-2 rounded-full bg-accent2" />
      <span className="hidden sm:inline">{labels.language}</span>
      <span className="text-muted">{text}</span>
    </Link>
  );
}

