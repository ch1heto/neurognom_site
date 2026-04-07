function Features() {
  return (
    <section id="economy" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
          Преимущества платформы
        </h2>

        <div className="bento-grid">
          <article className="relative col-span-1 flex flex-col justify-between overflow-hidden rounded-[2rem] bg-primary p-10 text-white md:col-span-2 md:row-span-2">
            <div className="absolute right-[-10%] top-[-20%] h-64 w-64 rounded-full bg-primary-container blur-[80px] opacity-40 transition-opacity hover:opacity-60" />
            <div className="relative z-10">
              <span className="mb-4 block text-7xl font-extrabold tracking-tighter">15%</span>
              <h3 className="mb-4 text-3xl font-bold leading-tight">Снижение затрат</h3>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-md">
                  Эффективность удобрений
                </span>
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-md">
                  Экономия ресурсов
                </span>
              </div>
            </div>
            <p className="relative z-10 mt-8 text-emerald-100/85">
              Оптимизация каждого миллилитра раствора и каждого ватта электроэнергии за счет
              точных алгоритмов ИИ.
            </p>
          </article>

          <article className="col-span-1 flex flex-col items-center justify-center rounded-[2rem] bg-surface-container-high p-8 text-center transition-colors dark:bg-white/5">
            <span className="material-symbols-filled mb-4 text-5xl text-primary-container dark:text-emerald-400">
              person_off
            </span>
            <h3 className="text-xl font-bold text-on-background dark:text-slate-50">
              Минимум человеческого фактора
            </h3>
          </article>

          <article className="col-span-1 flex flex-col items-center justify-center rounded-[2rem] bg-surface-container-high p-8 text-center transition-colors dark:bg-white/5">
            <span className="material-symbols-filled mb-4 text-5xl text-primary-container dark:text-emerald-400">
              monitoring
            </span>
            <h3 className="text-xl font-bold text-on-background dark:text-slate-50">
              24/7 Мониторинг
            </h3>
          </article>

          <article className="col-span-1 flex items-center justify-between gap-6 rounded-[2rem] border-2 border-emerald-100 bg-emerald-50 p-8 transition-colors dark:border-emerald-900/30 dark:bg-emerald-950/20 md:col-span-2">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-on-background dark:text-slate-50">
                B2B Масштабируемость
              </h3>
              <p className="text-on-surface-variant dark:text-slate-300">
                От одной установки до целого тепличного комплекса под единым управлением.
              </p>
            </div>
            <span className="material-symbols-outlined hidden text-6xl text-emerald-600 dark:text-emerald-400 sm:block">
              rebase_edit
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Features;
