const stats = [
  { value: '120+', label: 'Projects delivered' },
  { value: '15 yrs', label: 'Industry experience' },
  { value: '60+', label: 'Team specialists' },
];

export default function Header() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200">
            Precision fabrication • civil works • maintenance
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built for uptime, safety, and scale.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-300">
            From structural fabrication to turnkey plant support, we deliver dependable industrial work that keeps operations moving.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Request a quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -right-8 bottom-6 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative w-full rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-sky-950/30 backdrop-blur-md">
            <div className="rounded-[1.5rem] bg-slate-900 p-5 ring-1 ring-white/10">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Live project</p>
                  <h2 className="mt-2 text-xl font-bold text-white">Plant upgrade</h2>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                  On schedule
                </span>
              </div>

              <div className="mt-6 space-y-5">
                <div className="rounded-2xl bg-slate-800/80 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Fabrication progress</span>
                    <span className="font-semibold text-sky-300">82%</span>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-700">
                    <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-800/80 p-4">
                    <p className="text-sm text-slate-400">Safety</p>
                    <p className="mt-2 text-3xl font-black text-white">99%</p>
                  </div>
                  <div className="rounded-2xl bg-slate-800/80 p-4">
                    <p className="text-sm text-slate-400">Delivery</p>
                    <p className="mt-2 text-3xl font-black text-white">12 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
