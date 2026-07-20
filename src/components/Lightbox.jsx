import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  if (index === null) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center px-4"
        onClick={onClose}
      >
        <button
          className="absolute top-6 right-6 text-white/80 hover:text-white text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          <FiX />
        </button>
        <button
          className="absolute left-4 sm:left-8 text-white/70 hover:text-white text-3xl"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous image"
        >
          <FiChevronLeft />
        </button>
        <motion.img
          key={images[index]}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          src={images[index]}
          alt=""
          onClick={(e) => e.stopPropagation()}
          className="max-h-[80vh] max-w-full rounded-xl shadow-2xl object-contain"
        />
        <button
          className="absolute right-4 sm:right-8 text-white/70 hover:text-white text-3xl"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next image"
        >
          <FiChevronRight />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
