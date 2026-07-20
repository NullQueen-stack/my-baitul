import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCheck, FiArrowUpRight } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import FAQ from '../components/FAQ'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const related = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.short}
        image={service.banner}
        crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]}
      />

      <section className="py-24 bg-white">
        <div className="container-x grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2 flex flex-col gap-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-ink/65 leading-relaxed text-lg"
            >
              {service.description}
            </motion.p>

            <div>
              <h3 className="font-display font-bold text-xl text-navy-900 mb-5">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 bg-navy-50/60 rounded-xl p-4">
                    <FiCheck className="text-skyline-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-ink/70">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {service.faqs?.length > 0 && (
              <div>
                <h3 className="font-display font-bold text-xl text-navy-900 mb-5">Frequently Asked Questions</h3>
                <FAQ faqs={service.faqs} />
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-5">
            <div className="bg-navy-950 rounded-3xl p-8 text-white sticky top-28">
              <h4 className="font-display font-bold text-lg mb-3">Discuss Your Project</h4>
              <p className="text-white/65 text-sm mb-6 leading-relaxed">
                Tell us about your requirements and our engineering team will respond with a scoped proposal.
              </p>
              <Button as="link" to="/contact" variant="primary" icon={FiArrowUpRight} className="w-full">
                Request a Quote
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-24 bg-navy-50/40">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle eyebrow="Related Services" title="Explore more of what we do" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
