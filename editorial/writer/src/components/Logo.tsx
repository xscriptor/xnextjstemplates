import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 140 28"
      width="120"
      height="24"
      role="img"
      aria-label="XW"
      {...props}
    >
      <path
        d="M10 6 L24 22 M24 6 L10 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M34 6 L40 22 L48 10 L56 22 L62 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M76 18 C86 10, 96 10, 106 18"
        stroke="hsl(var(--accent2) / 1)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="116" cy="18" r="3" fill="hsl(var(--accent) / 1)" />
      <path
        d="M74 22 H126"
        stroke="hsl(var(--border) / 1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

