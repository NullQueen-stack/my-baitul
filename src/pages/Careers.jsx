import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiClock, FiCheck, FiX } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import { jobOpenings, benefits } from '../data/misc'

export default function Careers() {
  const [applyingTo, setApplyingTo] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        title="Careers at Baitul"
        subtitle="Build your career with a team that engineers Kuwait's infrastructure and technology."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
        crumbs={[{ label: 'Careers' }]}
      />

      <section className="py-24 bg-white">
        <div className="container-x grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <SectionTitle align="left" eyebrow="Open Positions" title="Current openings" />
            <div className="flex flex-col gap-4">
              {jobOpenings.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-navy-50/60 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h4 className="font-display font-bold text-navy-900">{job.title}</h4>
                    <p className="text-sm text-ink/60 mt-1 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-ink/50">
                      <span className="flex items-center gap-1"><FiBriefcase /> {job.department}</span>
                      <span className="flex items-center gap-1"><FiMapPin /> {job.location}</span>
                      <span className="flex items-center gap-1"><FiClock /> {job.type}</span>
                    </div>
                  </div>
                  <Button variant="secondary" onClick={() => { setApplyingTo(job); setSubmitted(false) }} className="shrink-0">
                    Apply Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-5">
            <div className="bg-navy-950 rounded-3xl p-8 text-white sticky top-28">
              <h4 className="font-display font-bold text-lg mb-4">Why Work With Us</h4>
              <ul className="flex flex-col gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-white/75">
                    <FiCheck className="text-gold-300 mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <AnimatePresence>
        {applyingTo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-950/70 flex items-center justify-center px-4"
            onClick={() => setApplyingTo(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-lg w-full relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setApplyingTo(null)}
                className="absolute top-6 right-6 text-ink/40 hover:text-ink text-xl"
                aria-label="Close"
              >
                <FiX />
              </button>

              {submitted ? (
                <div className="flex flex-col items-center text-center gap-3 py-8">
                  <span className="w-16 h-16 rounded-full bg-skyline-100 text-skyline-600 flex items-center justify-center text-2xl">
                    <FiCheck />
                  </span>
                  <h3 className="font-display font-bold text-xl text-navy-900">Application Received</h3>
                  <p className="text-sm text-ink/60">We'll review your application for {applyingTo.title} and be in touch.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-xl text-navy-900 mb-1">Apply — {applyingTo.title}</h3>
                  <p className="text-sm text-ink/50 mb-6">{applyingTo.department} · {applyingTo.location}</p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input required placeholder="Full Name" className="rounded-xl border border-navy-900/12 px-4 py-3 text-sm outline-none focus:border-skyline-400" />
                    <input required type="email" placeholder="Email Address" className="rounded-xl border border-navy-900/12 px-4 py-3 text-sm outline-none focus:border-skyline-400" />
                    <input required type="tel" placeholder="Phone Number" className="rounded-xl border border-navy-900/12 px-4 py-3 text-sm outline-none focus:border-skyline-400" />
                    <input type="text" placeholder="LinkedIn / Portfolio URL (optional)" className="rounded-xl border border-navy-900/12 px-4 py-3 text-sm outline-none focus:border-skyline-400" />
                    <textarea rows={4} placeholder="Tell us why you're a good fit" className="rounded-xl border border-navy-900/12 px-4 py-3 text-sm outline-none focus:border-skyline-400 resize-none" />
                    <Button type="submit" variant="primary" className="w-full">Submit Application</Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
