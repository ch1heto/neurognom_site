const economicsCards = [
  {
    title: 'Стоимость оборудования',
    value: '130,000 ₽',
    description: 'Комплект датчиков и контроллеров на 1 установку',
    highlight: true,
  },
  {
    title: 'ПО / Поддержка',
    value: '20,000 ₽',
    description: 'Ежегодная лицензия на ПО и аналитику',
  },
  {
    title: 'План (Год 1)',
    value: '3 проекта',
    description: 'Фокус на Уральский и Приволжский регионы',
  },
  {
    title: 'Выручка (Цель)',
    value: '400,000 ₽',
    description: 'Прогноз на первый этап внедрения',
  },
];

function Economics() {
  return (
    <section id="economics-project" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
          Экономика проекта
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {economicsCards.map(({ title, value, description, highlight }) => (
            <article
              key={title}
              className={[
                'rounded-[2rem] border p-8 transition-colors',
                highlight
                  ? 'border-emerald-300/40 bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 dark:border-emerald-400/20 dark:bg-emerald-600'
                  : 'border-white/40 bg-surface-container-lowest shadow-glass dark:border-white/10 dark:bg-white/5 dark:shadow-none',
              ].join(' ')}
            >
              <p
                className={[
                  'mb-6 text-sm font-semibold uppercase tracking-[0.18em]',
                  highlight ? 'text-emerald-50/90' : 'text-slate-500 dark:text-slate-400',
                ].join(' ')}
              >
                {title}
              </p>
              <p
                className={[
                  'mb-4 font-headline text-4xl font-bold tracking-tight',
                  highlight ? 'text-white' : 'text-on-background dark:text-slate-50',
                ].join(' ')}
              >
                {value}
              </p>
              <p className={highlight ? 'text-emerald-50/90' : 'text-on-surface-variant dark:text-slate-300'}>
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Economics;
