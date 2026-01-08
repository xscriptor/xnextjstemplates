import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          background: 'var(--color-background)',
          text: 'var(--color-text)',
          accent: 'var(--color-accent)',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'fade-in': 'fadeIn var(--transition-normal) ease-in-out',
        'slide-up': 'slideUp var(--transition-normal) ease-out',
        'pulse-slow': 'pulse var(--transition-slow) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
export default config;
