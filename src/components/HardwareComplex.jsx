import AppIcon from './AppIcon';

function HardwareComplex({ cards, sensors }) {
  return (
    <section id="technology" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div id="about" className="scroll-mt-24 space-y-12">
            <div>
              <div className="accent-chip mb-4">Аппаратная надежность</div>
              <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
                Программно-аппаратный комплекс
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant dark:text-slate-300">
                Мы разработали решение полного цикла для бизнеса: от точных датчиков промышленного класса до облачной платформы аналитики. Система автоматизирует рутину и помогает масштабировать проект без потери контроля.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {sensors.map(({ icon, label }) => (
                <article key={label} className="saas-card border-t-2 border-t-emerald-500 p-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300">
                      <AppIcon name={icon} className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{label}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cards.map(({ icon, title, description }) => (
              <article key={title} className="saas-card border-t-2 border-t-emerald-500">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300">
                  <AppIcon name={icon} className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HardwareComplex;
