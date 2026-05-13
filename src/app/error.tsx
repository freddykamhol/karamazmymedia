"use client";

import { useEffect } from "react";
import GlassShell from "./ui/glass-shell";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const newUrl = "https://katechnologies.de";

  return (
    <GlassShell
      badge="Fehler"
      title="Etwas ist schiefgelaufen."
      description={
        <>
          Bitte versuche es erneut oder gehe direkt zu{" "}
          <span className="font-semibold text-zinc-50">katechnologies.de</span>.
        </>
      }
      footer="© Karam Azmy Media"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 sm:w-auto"
        >
          Erneut versuchen
        </button>
        <a
          href={newUrl}
          className="group inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition hover:shadow-[0_14px_40px_rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
          rel="noopener noreferrer"
        >
          Zu KATechnologies
          <span className="ml-2 translate-x-0 opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100">
            →
          </span>
        </a>
      </div>
    </GlassShell>
  );
}
