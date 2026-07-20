import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar, FiUser, FiCheckCircle } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />

  const related = projects.filter((p) => p.slug !== slug && p.category === project.category).slice(0, 3)

  const meta = [
    { icon: FiMapPin, label: 'Location', value: project.location },
    { icon: FiCalendar, label: 'Year', value: project.year },
    { icon: FiUser, label: 'Client', value: project.client },
  ]

  return (
    <>
      <PageHero
        title={project.title}
        subtitle={project.summary}
        image={project.cover}
        crumbs={[{ label: 'Projects', to: '/projects' }, { label: project.title }]}
      />

      <section className="py-24 bg-white">
        <div className="container-x grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="grid sm:grid-cols-2 gap-4 rounded-3xl overflow-hidden">
              {project.gallery.map((img, i) => (
                <motion.img
                  key={img + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  src={img}
                  alt={project.title}
                  className={`w-full object-cover rounded-2xl ${i === 0 ? 'sm:col-span-2 h-80' : 'h-56'}`}
                />
              ))}
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-navy-900 mb-3">Project Overview</h3>
              <p className="text-ink/65 leading-relaxed">{project.summary}</p>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-navy-900 mb-4">Scope of Work</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.scope.map((s) => (
                  <div key={s} className="flex items-center gap-3 bg-navy-50/60 rounded-xl p-4">
                    <FiCheckCircle className="text-skyline-500 shrink-0" />
                    <span className="text-sm text-ink/70">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div className="bg-navy-950 rounded-3xl p-8 text-white sticky top-28 flex flex-col gap-5">
              <span className="eyebrow text-skyline-300">Project Details</span>
              {meta.map((m) => (
                <div key={m.label} className="flex items-start gap-3">
                  <m.icon className="text-gold-300 mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-white/50">{m.label}</p>
                    <p className="text-sm font-medium">{m.value}</p>
                  </div>
                </div>
              ))}
              <span className="inline-block w-fit text-xs font-semibold tracking-wide uppercase bg-white/10 px-3 py-1.5 rounded-full">
                {project.category}
              </span>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-24 bg-navy-50/40">
          <div className="container-x flex flex-col gap-14">
            <SectionTitle eyebrow="Related Projects" title={`More in ${project.category}`} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
