import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiCheck, FiPhoneCall, FiMail } from 'react-icons/fi'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import BlogCard from '../components/BlogCard'
import Testimonials from '../components/Testimonials'
import ClientLogoSlider from '../components/ClientLogoSlider'
import Button from '../components/Button'
import { services, industries, whyChooseUs } from '../data/services'
import { projects } from '../data/projects'
import { blogPosts } from '../data/misc'
import { company, stats, values } from '../data/company'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Company Introduction */}
      <section className="py-24 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card chamfer">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop"
                alt="Baitul engineering team on site"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-6 sm:right-2 bg-navy-900 rounded-2xl p-6 shadow-soft w-56">
              <p className="text-3xl font-display font-extrabold text-gold-300">{stats[0].value}+</p>
              <p className="text-xs text-white/70 mt-1">Years delivering engineering excellence across Kuwait</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <SectionTitle
              align="left"
              eyebrow="Who We Are"
              title="A trusted engineering & technology partner, built in Kuwait"
              body={company.shortDesc}
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-navy-50/60 rounded-2xl p-5">
                  <h4 className="font-display font-semibold text-navy-900 text-sm mb-2">{v.title}</h4>
                  <p className="text-xs text-ink/60 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
            <Button as="link" to="/about" variant="secondary" icon={FiArrowUpRight} className="self-start">
              More About Baitul
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-navy-50/40">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle
            eyebrow="What We Do"
            title="End-to-end engineering & technology services"
            body="From construction to enterprise IT, our divisions work together under one accountable team so clients get a single point of contact for complex, multi-disciplinary projects."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="container-x relative flex flex-col gap-14">
          <SectionTitle
            light
            eyebrow="Why Choose Baitul"
            title="Built on quality, safety and 26 years of delivery"
            body="Every project runs through the same disciplined process — certified people, tracked quality, and safety as a non-negotiable standard."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyChooseUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 flex flex-col gap-3"
              >
                <span className="w-9 h-9 rounded-full bg-gold-400/90 text-navy-900 flex items-center justify-center">
                  <FiCheck />
                </span>
                <h4 className="font-display font-semibold text-white text-sm">{w.title}</h4>
                <p className="text-xs text-white/60 leading-relaxed">{w.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionTitle
              align="left"
              eyebrow="Featured Work"
              title="Projects engineered to last"
              body="A snapshot of recent work across construction, electromechanical, industrial and IT divisions."
            />
            <Button as="link" to="/projects" variant="ghost" icon={FiArrowUpRight}>
              View All Projects
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-navy-50/40 border-y border-navy-900/5">
        <div className="container-x flex flex-col gap-8">
          <p className="text-center text-xs tracking-[0.2em] uppercase text-ink/40 font-semibold">
            Trusted by leading organisations across Kuwait
          </p>
          <ClientLogoSlider />
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle eyebrow="Industries We Serve" title="Purpose-built expertise across sectors" />
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
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center gap-3 bg-navy-50/60 hover:bg-navy-900 group rounded-2xl p-6 text-center transition-colors duration-300"
                >
                  <Icon className="text-3xl text-navy-800 group-hover:text-gold-300 transition-colors" />
                  <span className="text-xs font-medium text-navy-900 group-hover:text-white transition-colors">
                    {ind.title}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-50/40">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle eyebrow="Client Voices" title="What our clients say" />
          <Testimonials />
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionTitle align="left" eyebrow="Insights" title="Latest from the field" />
            <Button as="link" to="/blog" variant="ghost" icon={FiArrowUpRight}>
              Visit the Blog
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-28 bg-navy-950 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/50" />
        <div className="container-x relative flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <span className="eyebrow text-skyline-300">Let's Build Together</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 leading-tight">
              Have a project in mind? Let's talk engineering.
            </h2>
            <p className="text-white/65 mt-4">
              Reach out for a consultation and our team will respond within one business day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${company.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-2xl px-6 py-4 text-white hover:bg-white/15 transition-colors"
            >
              <FiPhoneCall className="text-xl text-gold-300" />
              <div className="text-left">
                <p className="text-xs text-white/60">Call Us</p>
                <p className="font-semibold text-sm">{company.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-2xl px-6 py-4 text-white hover:bg-white/15 transition-colors"
            >
              <FiMail className="text-xl text-gold-300" />
              <div className="text-left">
                <p className="text-xs text-white/60">Email Us</p>
                <p className="font-semibold text-sm">{company.email}</p>
              </div>
            </a>
            <Link to="/contact" className="flex items-center justify-center bg-gold-400 hover:bg-gold-300 text-navy-900 font-display font-semibold rounded-2xl px-6 py-4 transition-colors">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
