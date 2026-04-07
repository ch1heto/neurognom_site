function Footer({ content }) {
  const visibleLinks = content.links.filter(
    ({ label }) => label !== 'Связаться с нами' && label !== 'Contact Us',
  );

  return (
    <footer
      id="contacts"
      className="border-t border-slate-200 bg-slate-100 text-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-7xl mx-auto">
        <div className="w-full text-center md:w-auto md:text-left">
          <div className="mb-2 font-headline text-xl font-bold text-slate-900 dark:text-white">
            {content.brand}
          </div>
          <p className="text-slate-500 dark:text-slate-400">{content.tagline}</p>
        </div>

        <div className="mt-8 flex items-center gap-8 md:mt-0 md:justify-end">
          {visibleLinks.map(({ href, label, external }) => (
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
    </footer>
  );
}

export default Footer;
