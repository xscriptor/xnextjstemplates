"use client";

import { useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light" | "mono";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "mono" || stored === "dark") return stored;
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("theme", theme);
}

export function ThemeToggle({
  labels
}: {
  labels: { theme: string; dark: string; light: string; mono: string };
}) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    applyTheme(t);
  }, []);

  const next = useMemo(() => {
    const order: Theme[] = ["dark", "light", "mono"];
    const index = order.indexOf(theme);
    return order[(index + 1) % order.length];
  }, [theme]);

  const label =
    theme === "dark" ? labels.dark : theme === "light" ? labels.light : labels.mono;

  return (
    <button
      type="button"
      onClick={() => {
        const n = next;
        setTheme(n);
        applyTheme(n);
      }}
      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-fg shadow-soft transition hover:-translate-y-0.5 hover:border-accent2 hover:text-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={labels.theme}
      title={`${labels.theme}: ${label}`}
    >
      <span className="h-2 w-2 rounded-full bg-accent" />
      <span className="hidden sm:inline">{labels.theme}</span>
      <span className="text-muted">{label}</span>
    </button>
  );
}

