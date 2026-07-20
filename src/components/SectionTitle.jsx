import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, body, align = 'center', light = false }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 max-w-2xl ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-3xl sm:text-4xl font-bold leading-tight ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {body && (
        <p className={`text-base leading-relaxed ${light ? 'text-white/70' : 'text-ink/60'}`}>{body}</p>
      )}
    </motion.div>
  )
}
