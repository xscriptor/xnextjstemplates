import type { ReactNode } from "react";

export function Card({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <p className="text-sm font-semibold">{title}</p>
      <div className="mt-3 text-sm text-muted">{children}</div>
    </div>
  );
}

