import { Link } from 'react-router-dom'
import { FiPhoneCall, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaLinkedinIn, FaInstagram, FaXTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa6'
import { company } from '../data/company'
import { services } from '../data/services'

const socialIcons = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  x: FaXTwitter,
  facebook: FaFacebookF,
  youtube: FaYoutube,
}

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white/70 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
      <div className="container-x relative py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-skyline-400 flex items-center justify-center font-display font-extrabold text-navy-900">
              B
            </span>
            <span className="font-display font-bold text-lg text-white">{company.name}</span>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">{company.shortDesc}</p>
          <div className="flex items-center gap-3 pt-2">
            {Object.entries(company.social).map(([key, url]) => {
              const Icon = socialIcons[key]
              if (!Icon) return null
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-skyline-400 hover:text-navy-900 hover:border-skyline-400 transition-colors"
                  aria-label={key}
                >
                  <Icon className="text-sm" />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {['About', 'Projects', 'Gallery', 'Careers', 'Blog', 'Privacy Policy'].map((label) => (
              <li key={label}>
                <Link
                  to={`/${label === 'Privacy Policy' ? 'privacy-policy' : label.toLowerCase()}`}
                  className="hover:text-skyline-300 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-skyline-300 transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 shrink-0 text-skyline-400" /> {company.address}
            </li>
            <li className="flex items-center gap-2">
              <FiPhoneCall className="shrink-0 text-skyline-400" /> {company.phone}
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="shrink-0 text-skyline-400" /> {company.email}
            </li>
            <li className="flex items-center gap-2">
              <FiClock className="shrink-0 text-skyline-400" /> {company.workingHours}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} {company.fullName}. All rights reserved.</p>
          <p>Designed &amp; built with precision in Kuwait.</p>
        </div>
      </div>
    </footer>
  )
}
