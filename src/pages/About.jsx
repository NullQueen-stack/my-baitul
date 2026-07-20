import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import Timeline from '../components/Timeline'
import Counter from '../components/Counter'
import { company, stats, values } from '../data/company'
import { achievements, certifications, team } from '../data/misc'

export default function About() {
  return (
    <>
      <PageHero
        title="About Baitul"
        subtitle="Nearly three decades of engineering, construction and technology delivery across Kuwait and the GCC."
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1600&auto=format&fit=crop"
        crumbs={[{ label: 'About' }]}
      />

      {/* Company story */}
      <section className="py-24 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
            alt="Baitul project site"
            className="rounded-3xl shadow-card w-full h-[440px] object-cover"
          />
          <div className="flex flex-col gap-6">
            <SectionTitle
              align="left"
              eyebrow="Our Story"
              title={`Founded in ${company.founded}, built on precision`}
              body="Baitul began as a civil contracting firm in Kuwait City and has since grown into a multi-disciplinary engineering group spanning construction, electromechanical works, industrial services and enterprise technology. Every division shares the same operating principle: deliver what was promised, on time, to standard."
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-navy-950 rounded-2xl p-8">
              {stats.map((s) => (
                <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-navy-50/40">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle eyebrow="What Drives Us" title="Mission, Vision & Values" />
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-card"
              >
                <h3 className="font-display font-bold text-xl text-navy-900 mb-3">{v.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle eyebrow="Leadership" title="Management team" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center flex flex-col items-center gap-3"
              >
                <img src={member.avatar} alt={member.name} className="w-28 h-28 rounded-2xl object-cover shadow-card" />
                <h4 className="font-display font-semibold text-navy-900">{member.name}</h4>
                <p className="text-xs text-ink/50">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Achievements */}
      <section className="py-24 bg-navy-50/40">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle eyebrow="Milestones" title="Our journey so far" />
          <Timeline items={achievements} />
        </div>
      </section>

      {/* Certificates */}
      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-10">
          <SectionTitle eyebrow="Certifications" title="Quality you can verify" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {certifications.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-3 bg-navy-50/60 rounded-2xl p-6"
              >
                <FiAward className="text-3xl text-gold-500" />
                <span className="text-sm font-semibold text-navy-900">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
