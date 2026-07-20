import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group relative rounded-3xl overflow-hidden shadow-card"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
        <span className="absolute top-4 left-4 text-xs font-semibold tracking-wide uppercase bg-white/15 backdrop-blur text-white px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
        <h3 className="font-display font-bold text-lg text-white">{project.title}</h3>
        <p className="flex items-center gap-1 text-xs text-white/70">
          <FiMapPin /> {project.location}
        </p>
        <Link
          to={`/projects/${project.slug}`}
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        >
          View Project <FiArrowUpRight />
        </Link>
      </div>
    </motion.div>
  )
}
