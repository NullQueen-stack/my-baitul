import { motion } from 'framer-motion'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import Button from './Button'
import Counter from './Counter'
import { company, stats } from '../data/company'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-navy-950">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
      >
        <source src="https://cdn.coverr.co/videos/coverr-construction-site-from-above-2632/1080p.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="absolute inset-0 blueprint-grid-fine opacity-60" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/4 right-[8%] w-64 h-64 rounded-full bg-skyline-400/10 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[6%] w-72 h-72 rounded-full bg-gold-400/10 blur-3xl"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="node-dot animate-pulse-slow" style={{ top: '22%', left: '18%' }} />
      <div className="node-dot animate-pulse-slow" style={{ top: '65%', left: '78%' }} />
      <div className="node-dot animate-pulse-slow" style={{ top: '40%', left: '85%' }} />

      <div className="relative h-full container-x flex flex-col justify-center gap-8 pt-20">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="eyebrow text-skyline-300"
        >
          Engineering · Industrial · IT Solutions — Kuwait &amp; the GCC
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-white font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl"
        >
          {company.tagline.split(',').map((part, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <span className="bg-gradient-to-r from-gold-300 to-skyline-300 bg-clip-text text-transparent">
                  {part.trim()}
                </span>
              ) : (
                `${part.trim()},`
              )}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-white/70 text-lg max-w-xl"
        >
          {company.shortDesc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <Button as="link" to="/services" variant="primary" icon={FiArrowRight}>
            Explore Our Services
          </Button>
          <Button as="link" to="/contact" variant="outline">
            Request a Consultation
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl pt-6 border-t border-white/10 mt-4"
        >
          {stats.map((s) => (
            <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <FiChevronDown />
      </motion.div>
    </section>
  )
}
