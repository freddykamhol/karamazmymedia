type Props = {
  badge: string;
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

export default function GlassShell({ badge, title, description, children, footer }: Props) {
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
            {badge}
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {title}
          </h1>

          <div className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg">
            {description}
          </div>

          {children ? <div className="mt-9">{children}</div> : null}
        </div>

        {footer ? (
          <footer className="mt-10 text-center text-xs text-zinc-500">{footer}</footer>
        ) : null}
      </main>
    </div>
  );
}

