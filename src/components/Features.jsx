import AppIcon from './AppIcon';

function Features() {
  return (
    <section id="economy" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="accent-chip mb-4">Преимущества платформы</div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
            Ключевые преимущества
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4 md:grid-rows-[minmax(0,1fr)_minmax(0,1fr)_auto]">
          <article className="saas-card border-t-2 border-t-emerald-500 md:col-span-2 md:row-span-2">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300">
                  Экономический эффект
                </p>
                <h3 className="max-w-sm font-headline text-5xl font-bold leading-none tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                  Снижение затрат на 15%
                </h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    ЭФФЕКТИВНОСТЬ УДОБРЕНИЙ
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    ЭКОНОМИЯ РЕСУРСОВ
                  </span>
                </div>
              </div>
              <p className="mt-10 max-w-md text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Точные сценарии управления помогают сократить расход воды, энергии и рабочего времени без ущерба для урожая.
              </p>
            </div>
          </article>

          <article className="saas-card border-t-2 border-t-emerald-500 md:col-span-2 md:col-start-3 md:row-start-1">
            <div className="flex h-full items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300">
                <AppIcon name="personOff" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Минимум фактора</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Меньше ручных ошибок и больше стабильности в ежедневной эксплуатации установки.
                </p>
              </div>
            </div>
          </article>

          <article className="saas-card border-t-2 border-t-emerald-500 md:col-span-2 md:col-start-3 md:row-start-2">
            <div className="flex h-full items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300">
                <AppIcon name="monitoring" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">24/7 Мониторинг</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Показатели установки доступны непрерывно, а критические отклонения видны заранее.
                </p>
              </div>
            </div>
          </article>

          <article className="saas-card border-t-2 border-t-emerald-500 md:col-span-4 md:row-start-3">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">
                  Рост бизнеса
                </p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Масштабируемость для бизнеса</h3>
                <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
                  Платформа подходит и для одной установки, и для сети промышленных модулей с единым сценарием управления и аналитики.
                </p>
              </div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300">
                <AppIcon name="scale" className="h-8 w-8" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Features;
