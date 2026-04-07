function VideoBlock() {
  return (
    <section id="how-it-works" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
          Как это работает
        </h2>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl">
          <div className="relative aspect-video w-full bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_24%),linear-gradient(180deg,#0f172a_0%,#020617_100%)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                aria-label="Воспроизвести видео"
                className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105"
              >
                <span className="material-symbols-filled text-5xl">play_arrow</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoBlock;
