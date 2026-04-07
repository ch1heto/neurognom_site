import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryItems = [
  {
    src: '/gallery-1.jpg',
    alt: 'Фотография гидропонной установки с зеленью',
  },
  {
    src: '/gallery-2.jpg',
    alt: 'Фотография промышленной гидропоники',
  },
  {
    src: '/gallery-3.jpg',
    alt: 'Фотография зелени в системе выращивания',
  },
  {
    src: '/gallery-4.jpg',
    alt: 'Фотография оборудования для гидропоники',
  },
  {
    src: '/gallery-5.jpg',
    alt: 'Фотография урожая в гидропонном модуле',
  },
];

function ImageSlider() {
  return (
    <section id="gallery" className="scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-20">
        <div className="mb-10">
          <div className="accent-chip mb-4">Фотографии проекта</div>
          <h2 className="font-headline text-4xl font-bold tracking-tight text-on-background dark:text-slate-50">
            Галерея проекта
          </h2>
        </div>

        <div className="relative md:px-6">
          <button
            type="button"
            aria-label="Предыдущий слайд"
            className="gallery-prev absolute top-1/2 -left-14 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/80 p-3 text-white shadow-xl backdrop-blur-md transition-all hover:bg-emerald-500 md:flex"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.gallery-prev',
              nextEl: '.gallery-next',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            className="w-full relative"
          >
            {galleryItems.map(({ src, alt }) => (
              <SwiperSlide key={src} className="!h-auto pb-12">
                <div className="w-full">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-80 md:h-96 object-cover rounded-[2rem] border border-slate-700/50"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Следующий слайд"
            className="gallery-next absolute top-1/2 -right-14 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/80 p-3 text-white shadow-xl backdrop-blur-md transition-all hover:bg-emerald-500 md:flex"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;
