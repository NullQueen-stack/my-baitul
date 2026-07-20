import { motion } from 'framer-motion'

export default function Timeline({ items = [] }) {
  return (
    <div className="relative pl-8 sm:pl-0">
      <div className="absolute left-[7px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400 via-skyline-400 to-transparent sm:-translate-x-1/2" />
      <div className="flex flex-col gap-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
              i % 2 === 0 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <span className="absolute left-0 sm:left-1/2 top-1 sm:top-1/2 w-3.5 h-3.5 rounded-full bg-gold-400 ring-4 ring-gold-100 sm:-translate-x-1/2 sm:-translate-y-1/2" />
            <div className="sm:w-1/2" />
            <div className={`sm:w-1/2 bg-white rounded-2xl shadow-card p-6 ${i % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'}`}>
              <span className="text-skyline-500 font-display font-bold text-sm">{item.year}</span>
              <h4 className="font-display font-bold text-navy-900 mt-1">{item.title}</h4>
              <p className="text-sm text-ink/60 mt-2 leading-relaxed">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
