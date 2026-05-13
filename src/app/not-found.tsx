import GlassShell from "./ui/glass-shell";

export default function NotFound() {
  const newUrl = "https://katechnologies.de";

  return (
    <GlassShell
      badge="404"
      title="Seite nicht gefunden."
      description={
        <>
          Diese Seite gibt es hier nicht (mehr). Du findest uns jetzt unter{" "}
          <span className="font-semibold text-zinc-50">katechnologies.de</span>.
        </>
      }
      footer={
        <>
          © {new Date().getFullYear()} · Karam Azmy Media
        </>
      }
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href={newUrl}
          className="group inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition hover:shadow-[0_14px_40px_rgba(255,255,255,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto"
          rel="noopener noreferrer"
        >
          Weiter zu KATechnologies
          <span className="ml-2 translate-x-0 opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100">
            →
          </span>
        </a>
      </div>
    </GlassShell>
  );
}

