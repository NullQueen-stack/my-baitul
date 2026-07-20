import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi'
import { company } from '../data/company'
import Button from './Button'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/clients', label: 'Clients' },
  { to: '/careers', label: 'Careers' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/90 backdrop-blur-lg shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-skyline-400 flex items-center justify-center font-display font-extrabold text-navy-900">
            B
          </span>
          <span className="font-display font-bold text-lg text-white">{company.name}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? 'text-navy-900 bg-white' : 'text-white/85 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-white/85 text-sm hover:text-white"
          >
            <FiPhoneCall /> {company.phone}
          </a>
          <Button as="link" to="/contact" variant="primary">
            Get a Quote
          </Button>
        </div>

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-navy-900/97 backdrop-blur-lg mt-4"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive ? 'text-navy-900 bg-white' : 'text-white/85 hover:bg-white/10'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Button as="link" to="/contact" variant="primary" className="mt-3 w-full" onClick={() => setOpen(false)}>
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
