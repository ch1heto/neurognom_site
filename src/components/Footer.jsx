function Footer({ content }) {
  return (
    <footer
      id="contacts"
      className="border-t border-slate-200/80 bg-white/85 text-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/92"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-8 py-12 md:flex-row">
        <div>
          <div className="mb-2 font-headline text-xl font-bold text-slate-900 dark:text-white">
            {content.brand}
          </div>
          <p className="text-slate-500 dark:text-slate-400">{content.tagline}</p>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex gap-8">
            {content.links.map(({ href, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="font-headline text-sm text-slate-600 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
