const heroImage =
  'https://images.pexels.com/photos/4199758/pexels-photo-4199758.jpeg?auto=compress&cs=tinysrgb&w=2400';

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[860px] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Свежая зелень в лотке гидропонной установки"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-10 bg-slate-900/18" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/92 via-white/78 to-white/10 dark:from-slate-950/82 dark:via-slate-950/66 dark:to-slate-950/22" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-3xl space-y-8">
          <div className="accent-chip">Платформа для промышленной гидропоники</div>

          <h1 className="font-headline text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl">
            Нейроагроном помогает управлять гидропонными установками спокойно, точно и без лишних потерь.
          </h1>

          <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-200 md:text-2xl">
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
      </div>
    </section>
  );
}

export default Hero;
