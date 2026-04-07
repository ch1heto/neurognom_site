const economicsCards = [
  {
    title: 'Стоимость оборудования',
    value: '130,000 ₽',
    description: 'Комплект датчиков и контроллеров на 1 установку',
  },
  {
    title: 'ПО / Поддержка',
    value: '20,000 ₽',
    description: 'Ежегодная лицензия на ПО и аналитику',
  },
  {
    title: 'План на первый год',
    value: '3 проекта',
    description: 'Фокус на Уральский и Приволжский регионы',
  },
  {
    title: 'Целевая выручка',
    value: '400,000 ₽',
    description: 'Прогноз на первый этап внедрения',
  },
];

function Economics() {
  return (
    <section id="economics-project" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="accent-chip mb-4">Финансовая модель</div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
            Экономика проекта
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {economicsCards.map(({ title, value, description }) => (
            <article key={title} className="saas-card border-t-2 border-t-emerald-500">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                {title}
              </p>
              <p className="mb-4 font-headline text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                {value}
              </p>
              <p className="text-slate-600 dark:text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Economics;
