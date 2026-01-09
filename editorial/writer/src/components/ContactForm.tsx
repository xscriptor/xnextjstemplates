"use client";

import { useMemo, useState } from "react";

import type { Lang } from "@/app/[lang]/dictionaries";

type Labels = {
  name: string;
  email: string;
  message: string;
  send: string;
};

function buildMailto({
  to,
  subject,
  body
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const params = new URLSearchParams({
    subject,
    body
  });
  return `mailto:${to}?${params.toString()}`;
}

export function ContactForm({ lang, labels }: { lang: Lang; labels: Labels }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subject = useMemo(() => {
    if (lang === "en") return "Writer portfolio contact";
    return "Contacto desde portafolio";
  }, [lang]);

  return (
    <form
      className="rounded-2xl border border-border bg-card p-6 shadow-soft"
      onSubmit={(e) => {
        e.preventDefault();
        const body = [
          `${labels.name}: ${name}`.trim(),
          `${labels.email}: ${email}`.trim(),
          "",
          message.trim()
        ]
          .filter(Boolean)
          .join("\n");

        const href = buildMailto({
          to: "hello@writer.com",
          subject,
          body
        });

        window.location.href = href;
      }}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent2">
            {labels.name}
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-xl border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder={lang === "en" ? "Your name" : "Tu nombre"}
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent2">
            {labels.email}
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="email@domain.com"
            inputMode="email"
          />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-2 text-sm">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent2">
          {labels.message}
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-32 resize-y rounded-xl border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          placeholder={lang === "en" ? "Tell me about your idea…" : "Cuéntame tu idea…"}
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-medium text-bg shadow-soft transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:w-auto"
      >
        {labels.send}
      </button>
    </form>
  );
}

