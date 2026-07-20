import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Six integrated divisions covering the full lifecycle of engineering, industrial and technology projects."
        image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
        crumbs={[{ label: 'Services' }]}
      />
      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-14">
          <SectionTitle
            eyebrow="What We Offer"
            title="Services built around accountability"
            body="Each division is led by certified specialists, but all work under one project management structure — so you get a single point of contact no matter how complex the scope."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
