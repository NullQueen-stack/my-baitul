import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { clients } from '../data/misc'

export default function ClientLogoSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={4000}
      loop
      slidesPerView={2}
      spaceBetween={40}
      breakpoints={{
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      allowTouchMove={false}
    >
      {[...clients, ...clients].map((c, i) => (
        <SwiperSlide key={`${c}-${i}`}>
          <div className="h-20 flex items-center justify-center rounded-xl border border-navy-900/8 bg-white text-navy-800/70 font-display font-semibold text-sm px-4 text-center grayscale hover:grayscale-0 transition-all">
            {c}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
