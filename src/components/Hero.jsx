const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDfwJcZ-1jiH-byrIpJJA7PFWnfaSlE-Zyh3z4HkXGb3h9xUduaU67HrYX8v1b8EYMaMkPz9RfQcHNkYyL7hu5vbMW_c_Bm1sVxyuXHKV4qTPZxzhbD4480jfLvJQMgdlxZrpvZUkLXChk7grxWjbjz0SGgFAxBBxZ228HSLXNKSnvCIwHV4T7_8dQPSGEHpp-DYHpTSX8VTds7p6J6Dx4KbAfzme5DA0b6dE1SHEUlocBO8Ci-xzXSUimK0EpyGAszqmtTjigEvzo';

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[860px] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Современная гидропонная ферма с листовой зеленью под управляемым освещением"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-fade dark:bg-hero-fade-dark" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl px-6 py-24 md:grid-cols-2">
        <div className="space-y-8">
          <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tighter text-on-background dark:text-white md:text-6xl">
            Нейроагроном — интеллектуальная система управления{' '}
            <span className="text-primary-container dark:text-emerald-400">гидропонными</span>{' '}
            установками
          </h1>

          <p className="max-w-lg text-xl font-medium text-slate-700 dark:text-slate-200 md:text-2xl">
            Для малого и среднего агробизнеса. Автоматизация, которая окупается.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#gallery"
              className="will-change-transform [backface-visibility:hidden] [transform:translateZ(0)] rounded-xl bg-primary-container px-8 py-4 text-lg font-bold text-on-primary-container transition-transform hover:scale-[0.98] active:scale-[0.98]"
            >
              Смотреть демо
            </a>
            <a
              href="https://vk.com/neuralagronom"
              target="_blank"
              rel="noopener noreferrer"
              className="will-change-transform [backface-visibility:hidden] [transform:translateZ(0)] flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-on-surface transition-transform hover:scale-[0.98] active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              Вступить в группу ВКонтакте
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
