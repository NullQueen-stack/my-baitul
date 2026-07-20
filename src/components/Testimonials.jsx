import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaQuoteLeft } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials } from '../data/misc'

export default function Testimonials() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      spaceBetween={32}
      slidesPerView={1}
      breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
      className="!pb-14"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.name}>
          <div className="glass-light rounded-3xl p-8 h-full flex flex-col gap-5 shadow-card">
            <FaQuoteLeft className="text-3xl text-gold-400" />
            <p className="text-ink/70 leading-relaxed text-sm">{t.quote}</p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-navy-900/10">
              <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
              <div>
                <p className="font-display font-semibold text-navy-900 text-sm">{t.name}</p>
                <p className="text-xs text-ink/50">{t.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
