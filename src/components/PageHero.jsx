import { motion } from 'framer-motion'
import Breadcrumb from './Breadcrumb'

export default function PageHero({ title, subtitle, image, crumbs }) {
  return (
    <section className="relative pt-40 pb-24 bg-navy-950 overflow-hidden">
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
      )}
      <div className="absolute inset-0 bg-grid-fade" />
      <div className="absolute inset-0 blueprint-grid-fine opacity-50" />
      <div className="relative container-x flex flex-col gap-4">
        <Breadcrumb crumbs={crumbs} />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white font-display font-extrabold text-4xl sm:text-5xl max-w-2xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/65 max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
