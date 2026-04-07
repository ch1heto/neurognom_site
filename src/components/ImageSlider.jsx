function ImageSlider({ items }) {
  return (
    <section
      id="gallery"
      className="overflow-hidden bg-slate-50/85 py-24 transition-colors duration-300 dark:bg-slate-950/60"
    >
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <div className="accent-chip mb-4">Визуальные материалы</div>
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
          Галерея проекта
        </h2>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8">
        {items.map(({ title, src, alt, widthClass }) => (
          <article
            key={title}
            className={`group relative h-[500px] min-w-[85vw] snap-start overflow-hidden rounded-[2.5rem] border border-slate-200/80 shadow-[0_18px_48px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:shadow-[0_18px_48px_rgba(2,6,23,0.28)] sm:h-[520px] ${widthClass}`}
          >
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/72 via-slate-950/24 to-transparent p-6 text-white">
              <h3 className="font-headline text-2xl font-bold tracking-tight">{title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ImageSlider;
