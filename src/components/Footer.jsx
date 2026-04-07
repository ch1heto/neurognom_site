function Footer({ content }) {
  return (
    <footer
      id="contacts"
      className="rounded-t-[2rem] bg-surface-container-low text-sm transition-colors duration-300 dark:bg-slate-900"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-8 py-12 md:flex-row">
        <div>
          <div className="mb-2 font-headline text-xl font-bold text-emerald-700 dark:text-emerald-400">
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
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="text-slate-500 transition-colors hover:text-emerald-500 dark:text-slate-400"
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
