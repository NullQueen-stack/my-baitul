import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Reusable Button component.
 * variant: 'primary' | 'secondary' | 'ghost' | 'outline'
 * as: 'link' (react-router) | 'a' (external) | 'button'
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display font-semibold text-sm tracking-wide transition-all duration-300 whitespace-nowrap'

  const variants = {
    primary: 'bg-gold-400 text-navy-900 hover:bg-gold-300 shadow-card',
    secondary: 'bg-navy-800 text-white hover:bg-navy-700 shadow-card',
    outline: 'border border-white/40 text-white hover:bg-white/10 backdrop-blur',
    ghost: 'text-navy-800 hover:text-skyline-600',
  }

  const cls = `${base} ${variants[variant] || variants.primary} ${className}`

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2"
    >
      {children}
      {Icon && <Icon className="text-base" />}
    </motion.span>
  )

  if (as === 'link' && to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    )
  }

  if (as === 'a' && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  )
}
