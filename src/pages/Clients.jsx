import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Testimonials from '../components/Testimonials'
import { clients, testimonials } from '../data/misc'
import { industries } from '../data/services'

export default function Clients() {
  return (
    <>
      <PageHero
        title="Our Clients"
        subtitle="Trusted by government bodies, industrial operators and private developers across Kuwait."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
        crumbs={[{ label: 'Clients' }]}
      />

      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle eyebrow="Who We Work With" title="Organisations that trust Baitul" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {clients.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="h-24 flex items-center justify-center rounded-2xl border border-navy-900/8 bg-navy-50/60 text-navy-800 font-display font-semibold text-sm text-center px-4"
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-50/40">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle eyebrow="Sectors" title="Industries we've delivered for" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {industries.map((ind, i) => {
              const Icon = ind.icon
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex flex-col items-center gap-3 bg-white rounded-2xl p-6 text-center shadow-card"
                >
                  <Icon className="text-3xl text-navy-800" />
                  <span className="text-xs font-medium text-navy-900">{ind.title}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle eyebrow="Success Stories" title="What our clients say" />
          <Testimonials />
        </div>
      </section>
    </>
  )
}
