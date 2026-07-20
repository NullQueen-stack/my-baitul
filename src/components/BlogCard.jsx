import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiCalendar } from 'react-icons/fi'

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-card flex flex-col"
    >
      <div className="h-52 overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className="eyebrow">{post.category}</span>
        <h3 className="font-display font-bold text-lg text-navy-900 leading-snug">{post.title}</h3>
        <p className="text-sm text-ink/60 leading-relaxed line-clamp-3">{post.excerpt}</p>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-navy-900/8">
          <span className="flex items-center gap-1 text-xs text-ink/50">
            <FiCalendar /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
          <Link to={`/blog/${post.slug}`} className="flex items-center gap-1 text-sm font-semibold text-skyline-600">
            Read <FiArrowUpRight />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
