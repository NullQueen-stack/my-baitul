import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Lightbox from '../components/Lightbox'
import { galleryCategories, galleryPhotos, galleryVideos } from '../data/gallery'

export default function Gallery() {
  const [tab, setTab] = useState('photo')
  const [filter, setFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)

  const filtered = filter === 'All' ? galleryPhotos : galleryPhotos.filter((p) => p.category === filter)
  const images = filtered.map((p) => p.src)

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual look at our sites, workshops and the people behind every project."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600&auto=format&fit=crop"
        crumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-12">
          <SectionTitle eyebrow="Media" title="Photo & video gallery" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex gap-2 bg-navy-50 rounded-full p-1.5 w-fit">
              {['photo', 'video'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium capitalize transition-colors ${
                    tab === t ? 'bg-navy-900 text-white' : 'text-navy-700'
                  }`}
                >
                  {t} Gallery
                </button>
              ))}
            </div>

            {tab === 'photo' && (
              <div className="flex flex-wrap gap-2">
                {galleryCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                      filter === cat ? 'bg-gold-400 text-navy-900' : 'bg-navy-50 text-navy-700 hover:bg-navy-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {tab === 'photo' ? (
            <div className="columns-2 sm:columns-3 gap-4 space-y-4">
              {filtered.map((p, i) => (
                <motion.button
                  key={p.src + i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  onClick={() => setLightboxIndex(i)}
                  className="block w-full rounded-2xl overflow-hidden break-inside-avoid group"
                >
                  <img
                    src={p.src}
                    alt=""
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.button>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryVideos.map((v, i) => (
                <motion.button
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => setActiveVideo(v.url)}
                  className="relative rounded-2xl overflow-hidden group h-56"
                >
                  <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy-950/40 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-gold-400 text-navy-900 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <FiPlay className="ml-0.5" />
                    </span>
                  </div>
                  <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium text-left">{v.title}</p>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </section>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((i) => (i - 1 + images.length) % images.length)}
        onNext={() => setLightboxIndex((i) => (i + 1) % images.length)}
      />

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={activeVideo}
              title="Gallery video"
              className="w-full h-full rounded-xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}
