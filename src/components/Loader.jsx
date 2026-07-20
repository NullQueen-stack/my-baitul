import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] bg-navy-950 flex flex-col items-center justify-center gap-4"
        >
          <motion.span
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-skyline-400 flex items-center justify-center font-display font-extrabold text-navy-900 text-xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            B
          </motion.span>
          <span className="text-white/50 text-xs tracking-[0.3em] uppercase">Baitul</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
