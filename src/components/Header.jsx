import ThemeToggle from './ThemeToggle';

function Header({ links, theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-surface/75 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-headline text-2xl font-extrabold tracking-tighter text-emerald-700 transition-colors dark:text-emerald-400"
        >
          Нейроагроном
        </a>

        <nav className="hidden items-center space-x-8 md:flex">
          {links.map(({ href, label, accent }) => (
            <a
              key={label}
              href={href}
              className={[
                'border-b-2 pb-1 text-sm font-semibold transition-colors duration-300',
                accent
                  ? 'border-emerald-500 text-emerald-700 dark:text-emerald-400'
                  : 'border-transparent text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400',
              ].join(' ')}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}

export default Header;
