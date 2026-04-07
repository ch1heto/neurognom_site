function Header({ links }) {
  const visibleLinks = links
    .filter(
      ({ label, href }) =>
        label !== 'Связаться с нами' &&
        label !== 'Contact Us' &&
        href !== '#how-it-works',
    )
    .map((link) =>
      link.href === '#about'
        ? { ...link, href: '#how-it-works', label: 'Коротко о проекте' }
        : link,
    );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/98 shadow-sm transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <a
          href="#hero"
          className="font-headline text-2xl font-bold tracking-tight text-white transition-colors hover:text-emerald-400"
        >
          Нейроагроном
        </a>

        <nav className="hidden flex-row items-center gap-8 md:flex">
          {visibleLinks.map(({ href, label, accent }) => (
            <a
              key={label}
              href={href}
              className={[
                'bg-transparent p-0 font-headline text-sm font-bold text-slate-200 transition-colors duration-200 hover:text-emerald-400',
                accent ? 'text-emerald-400' : '',
              ].join(' ')}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
