import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        fg: "hsl(var(--fg) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        accent2: "hsl(var(--accent2) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 12px 30px -14px hsl(var(--shadow) / 0.55)"
      }
    }
  },
  plugins: []
} satisfies Config;

