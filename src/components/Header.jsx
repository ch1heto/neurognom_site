import ThemeToggle from './ThemeToggle';

function Header({ links, theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/88">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <a
          href="#hero"
          className="font-headline text-2xl font-bold tracking-tight text-slate-900 transition-colors hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400"
        >
          Нейроагроном
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label, accent }) => (
            <a
              key={label}
              href={href}
              className={[
                'font-headline text-sm font-medium tracking-[0.01em] text-slate-600 transition-colors duration-200 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400',
                accent ? 'text-emerald-600 dark:text-emerald-400' : '',
              ].join(' ')}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;
