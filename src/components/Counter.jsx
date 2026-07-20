import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Counter({ value, suffix = '', label, duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      setDisplay(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
      else setDisplay(value)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center gap-1"
    >
      <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
        {display}
        {suffix}
      </span>
      <span className="text-sm text-white/60 tracking-wide">{label}</span>
    </motion.div>
  )
}
