import { FiPhoneCall, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import { company } from '../data/company'

const infoCards = [
  { icon: FiPhoneCall, label: 'Call Us', value: company.phone, href: `tel:${company.phone.replace(/\s/g, '')}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: company.whatsapp, href: `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, '')}` },
  { icon: FiMail, label: 'Email Us', value: company.email, href: `mailto:${company.email}` },
  { icon: FiMapPin, label: 'Visit Us', value: company.address, href: '#map' },
]

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a project or question? Reach out and our team will respond within one business day."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1600&auto=format&fit=crop"
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="py-24 bg-white">
        <div className="container-x flex flex-col gap-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {infoCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex flex-col gap-3 bg-navy-50/60 hover:bg-navy-900 group rounded-2xl p-6 transition-colors duration-300"
              >
                <span className="w-11 h-11 rounded-xl bg-navy-900 group-hover:bg-gold-400 text-gold-300 group-hover:text-navy-900 flex items-center justify-center text-lg transition-colors">
                  <c.icon />
                </span>
                <div>
                  <p className="text-xs text-ink/50 group-hover:text-white/60 transition-colors">{c.label}</p>
                  <p className="text-sm font-semibold text-navy-900 group-hover:text-white transition-colors break-words">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div className="flex flex-col gap-6">
              <SectionTitle align="left" eyebrow="Send a Message" title="Tell us about your project" />
              <ContactForm />
            </div>

            <div className="flex flex-col gap-6">
              <div id="map" className="rounded-3xl overflow-hidden shadow-card h-[340px]">
                <iframe
                  title="Baitul location map"
                  src={company.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="bg-navy-950 rounded-3xl p-8 text-white flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <FiClock className="text-gold-300 text-xl" />
                  <div>
                    <p className="text-xs text-white/50">Working Hours</p>
                    <p className="font-medium text-sm">{company.workingHours}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-gold-300 text-xl" />
                  <div>
                    <p className="text-xs text-white/50">Office Address</p>
                    <p className="font-medium text-sm">{company.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
