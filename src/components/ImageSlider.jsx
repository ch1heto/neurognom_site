function ImageSlider({ items }) {
  return (
    <section
      id="gallery"
      className="overflow-hidden bg-surface-container-low/90 py-24 transition-colors duration-300 dark:bg-slate-900/70"
    >
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
          Галерея проекта
        </h2>
      </div>

      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8">
        {items.map(({ title, src, alt, widthClass }) => (
          <article
            key={title}
            className={`group relative h-[500px] min-w-[85vw] snap-start overflow-hidden rounded-[2.5rem] shadow-2xl sm:h-[520px] ${widthClass}`}
          >
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent p-6 text-white">
              <h3 className="font-headline text-2xl font-bold tracking-tight">{title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ImageSlider;
