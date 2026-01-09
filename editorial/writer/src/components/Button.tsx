import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg shadow-soft hover:-translate-y-0.5 hover:brightness-105",
  secondary:
    "border border-border bg-card text-fg shadow-soft hover:-translate-y-0.5 hover:border-accent2 hover:text-accent2",
  ghost: "text-fg hover:text-accent2"
};

export function Button({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  const className = `${base} ${variants[variant]}`;
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

