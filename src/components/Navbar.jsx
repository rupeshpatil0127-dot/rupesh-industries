const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Rupesh Industries home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-black text-white shadow-lg shadow-slate-900/20">
            RI
          </div>
          <div>
            <span className="block text-lg font-black tracking-tight text-slate-900">Rupesh</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Industries
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 sm:inline-flex"
          >
            Get a quote
          </a>
          <button
            type="button"
            className="inline-flex rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm md:hidden"
            aria-label="Open navigation menu"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M2.5 5a1.25 1.25 0 0 1 1.25-1.25h12.5A1.25 1.25 0 0 1 17.5 5 1.25 1.25 0 0 1 16.25 6.25H3.75A1.25 1.25 0 0 1 2.5 5Zm0 5a1.25 1.25 0 0 1 1.25-1.25h12.5A1.25 1.25 0 0 1 17.5 10a1.25 1.25 0 0 1-1.25 1.25H3.75A1.25 1.25 0 0 1 2.5 10Zm0 5a1.25 1.25 0 0 1 1.25-1.25h12.5A1.25 1.25 0 0 1 17.5 15a1.25 1.25 0 0 1-1.25 1.25H3.75A1.25 1.25 0 0 1 2.5 15Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
