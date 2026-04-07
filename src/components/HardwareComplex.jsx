function HardwareComplex({ cards, sensors }) {
  return (
    <section id="technology" className="overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div id="about" className="space-y-12">
            <div>
              <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
                Программно-аппаратный комплекс
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant dark:text-slate-300">
                Мы разработали решение полного цикла для бизнеса: от точных датчиков
                промышленного класса до облачной платформы аналитики. Наша система берет на
                себя рутину, позволяя вам масштабировать бизнес.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {sensors.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center rounded-[1.75rem] border border-white/40 bg-surface-container-low p-6 text-center transition-transform hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                >
                  <span className="material-symbols-outlined mb-3 text-3xl text-primary dark:text-emerald-400">
                    {icon}
                  </span>
                  <span className="text-sm font-semibold text-on-background dark:text-slate-100">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {cards.map(({ icon, title, description }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-white/40 bg-surface-container-lowest p-8 shadow-glass transition-colors dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-xl dark:shadow-none"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container">
                  <span className="material-symbols-filled text-white">{icon}</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-on-background dark:text-slate-50">
                  {title}
                </h3>
                <p className="text-on-surface-variant dark:text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HardwareComplex;
