import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function Breadcrumb({ crumbs = [] }) {
  return (
    <nav className="flex items-center gap-2 text-xs text-white/60">
      <Link to="/" className="hover:text-white transition-colors">Home</Link>
      {crumbs.map((c, i) => (
        <span key={i} className="flex items-center gap-2">
          <FiChevronRight />
          {c.to ? (
            <Link to={c.to} className="hover:text-white transition-colors">{c.label}</Link>
          ) : (
            <span className="text-skyline-300">{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
