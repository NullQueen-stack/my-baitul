import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus } from 'react-icons/fi'

export default function FAQ({ faqs = [] }) {
  const [open, setOpen] = useState(0)

  if (!faqs.length) return null

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="rounded-2xl border border-navy-900/10 overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-navy-50/50 transition-colors"
            >
              <span className="font-display font-semibold text-navy-900">{f.q}</span>
              <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-skyline-500 text-xl shrink-0">
                <FiPlus />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-white"
                >
                  <p className="px-6 pb-5 text-sm text-ink/60 leading-relaxed">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
