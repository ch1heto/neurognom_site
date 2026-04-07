const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuApfKBlaQ9KM3aZPL8WmxvK8AiRMzM6ppCFWkJRZSgZ1xOadUChd-Y3F2ooRxyBKnZXKJTDjYzze4RJyAX5Jr9GeECG37mnKlr0yZP05oYlG2HQg465-4p0gajvzUlo7aHtlIoIuWUzfPu83D1oyb1xrmwd2_SNZwR9DDot1pVmRKpsUiXKUM5N6kRzVrPh0EIbNgb36LSC_ATaTfviPibBQEukn9ZtFeXhIDc4YK3DCSrMxOTZaZ34_zKQdjhxXYoc4EAaF-CA-AQ';

const heroMetrics = [
  {
    value: '48 часов',
    label: 'раннего предупреждения о рисках для урожая',
  },
  {
    value: '24/7',
    label: 'контроль параметров установки и состояния раствора',
  },
  {
    value: '15%',
    label: 'потенциал снижения затрат на ресурсы и обслуживание',
  },
];

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[860px] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Современная гидропонная установка в чистой промышленной теплице"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/88 to-white/18 dark:from-slate-950/92 dark:via-slate-950/76 dark:to-slate-950/18" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
        <div className="space-y-8">
          <div className="accent-chip">Платформа для промышленной гидропоники</div>

          <h1 className="max-w-3xl font-headline text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl">
            Нейроагроном помогает управлять гидропонными установками спокойно, точно и без лишних потерь.
          </h1>

          <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-200 md:text-2xl">
            Профессиональная система мониторинга и аналитики для малого и среднего агробизнеса с понятным интерфейсом и надежной автоматизацией.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#gallery"
              className="pressable-crisp select-none rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_34px_rgba(5,150,105,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 active:scale-95"
            >
              Смотреть демо
            </a>
            <a
              href="#contacts"
              className="pressable-crisp flex select-none items-center gap-2 rounded-xl border border-slate-300 bg-white/96 px-8 py-4 text-lg font-semibold text-slate-700 shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 active:scale-95 dark:border-slate-700 dark:bg-slate-900/92 dark:text-slate-200 dark:hover:border-emerald-700 dark:hover:text-emerald-400"
            >
              Связаться с нами
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {heroMetrics.map(({ value, label }) => (
            <article
              key={value}
              className="surface-card pressable-crisp border-t-2 border-t-emerald-500 p-5 active:scale-[0.985]"
            >
              <div className="text-2xl font-headline font-bold text-slate-900 dark:text-white">{value}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
