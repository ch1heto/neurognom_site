function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[860px] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.avif"
          alt="Hydroponics setup"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[4px] z-0"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-3xl space-y-8">
          <div className="accent-chip">Платформа для промышленной гидропоники</div>

          <h1 className="font-headline text-5xl font-bold leading-tight tracking-tight text-slate-50 md:text-6xl">
            Нейроагроном помогает управлять гидропонными установками спокойно, точно и без лишних потерь.
          </h1>

          <p className="max-w-2xl text-xl font-medium leading-relaxed text-slate-50 md:text-2xl">
            Профессиональная система мониторинга и аналитики для малого и среднего агробизнеса с понятным интерфейсом и надежной автоматизацией.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#how-it-works"
              className="pressable-crisp select-none rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_34px_rgba(5,150,105,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 active:scale-95"
            >
              Обзор проекта
            </a>
            <a
              href="https://vk.com/neuralagronom"
              target="_blank"
              rel="noopener noreferrer"
              className="pressable-crisp flex select-none items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white border-none shadow-lg shadow-emerald-900/20 transition-all px-8 py-4 text-lg font-semibold active:scale-95"
            >
              Вступить в группу вк
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
