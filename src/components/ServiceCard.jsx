import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl p-8 shadow-card border border-navy-900/5 flex flex-col gap-5 overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-skyline-100 to-gold-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center text-gold-300 text-2xl group-hover:bg-gold-400 group-hover:text-navy-900 transition-colors duration-300">
        <Icon />
      </div>
      <div className="relative flex flex-col gap-2">
        <h3 className="font-display font-bold text-xl text-navy-900">{service.title}</h3>
        <p className="text-sm text-ink/60 leading-relaxed">{service.short}</p>
      </div>
      <Link
        to={`/services/${service.slug}`}
        className="relative inline-flex items-center gap-1 text-sm font-semibold text-skyline-600 group-hover:gap-2 transition-all"
      >
        Read More <FiArrowUpRight />
      </Link>
    </motion.div>
  )
}
