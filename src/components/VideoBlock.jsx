import AppIcon from './AppIcon';

const projectItems = [
  {
    number: '01',
    title: 'Миссия',
    description: 'Сделать промышленное сити-фермерство доступным и безопасным.',
  },
  {
    number: '02',
    title: 'Технологии',
    description: 'Локальная обработка на базе ESP32 и нейросетевая аналитика на сервере.',
  },
  {
    number: '03',
    title: 'Экономика',
    description: 'Окупаемость за счет снижения потерь и оптимизации ресурсов.',
  },
];

function VideoBlock() {
  return (
    <section id="how-it-works" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
        <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900 shadow-[0_24px_56px_rgba(2,6,23,0.28)]">
          <video
            src="/promo-video.mov"
            controls
            muted
            playsInline
            className="w-full h-full object-cover rounded-[2rem]"
          >
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </div>

        <div className="saas-card border-t-2 border-t-emerald-500 sm:p-10">
          <h2 className="mb-8 font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
            Коротко о проекте
          </h2>

          <div className="space-y-6">
            {projectItems.map(({ number, title, description }) => (
              <div
                key={number}
                className="flex gap-4 border-b border-slate-200/80 pb-6 last:border-b-0 last:pb-0 dark:border-slate-800"
              >
                <div className="min-w-12 pt-0.5 font-headline text-lg font-bold tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                  {number}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-on-background dark:text-slate-50">
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed text-on-surface-variant dark:text-slate-300">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoBlock;
