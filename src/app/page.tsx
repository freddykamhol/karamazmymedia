import ClientActions from "./ui/client-actions";

export default function Home() {
  const newUrl = "https://katechnologies.de";

  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-[#06070b] text-zinc-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.45),rgba(99,102,241,0)_60%)] blur-2xl" />
        <div className="absolute -bottom-52 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.20),rgba(16,185,129,0)_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_15%,rgba(255,255,255,0.10),rgba(255,255,255,0)_55%)]" />
      </div>

      <main className="relative mx-auto w-full max-w-4xl px-5 py-16 sm:px-6 sm:py-24">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_1px_0_rgba(255,255,255,0.08)_inset] backdrop-blur-xl sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.6)]" />
            Neue Adresse
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Wir sind umgezogen.
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg">
            Karam Azmy Media findest du ab sofort unter{" "}
            <span className="font-semibold text-zinc-50">katechnologies.de</span>.
            Bitte aktualisiere deine Lesezeichen.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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

            <ClientActions url={newUrl} />
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium text-zinc-200">Neue Website</p>
                <p className="mt-1 font-mono text-sm text-zinc-100">{newUrl}</p>
              </div>
              <p className="text-xs leading-5 text-zinc-400 sm:max-w-xs sm:text-right">
                Tipp: Kopiere den Link oder speichere ihn als Lesezeichen.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} · Karam Azmy Media
        </footer>
      </main>
    </div>
  );
}
