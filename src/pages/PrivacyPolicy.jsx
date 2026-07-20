import PageHero from '../components/PageHero'
import { company } from '../data/company'

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We may collect personal information such as your name, email address, phone number and company details when you submit a contact form, request a quote, or apply for a position through our website.',
  },
  {
    title: '2. How We Use Your Information',
    body: 'Information collected is used to respond to inquiries, process job applications, provide requested services, and improve our website experience. We do not sell your personal information to third parties.',
  },
  {
    title: '3. Cookies',
    body: 'Our website may use cookies to improve browsing experience and analyse site traffic. You can disable cookies through your browser settings at any time.',
  },
  {
    title: '4. Data Security',
    body: 'We implement reasonable administrative and technical safeguards to protect the information you share with us from unauthorised access, disclosure or misuse.',
  },
  {
    title: '5. Third-Party Links',
    body: 'Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those external sites.',
  },
  {
    title: '6. Your Rights',
    body: 'You may request access to, correction of, or deletion of your personal data held by us by contacting us using the details below.',
  },
  {
    title: '7. Changes to This Policy',
    body: 'We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.',
  },
  {
    title: '8. Contact Us',
    body: `If you have questions about this privacy policy, please contact us at ${company.email} or ${company.phone}.`,
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: January 2026"
        crumbs={[{ label: 'Privacy Policy' }]}
      />
      <section className="py-24 bg-white">
        <div className="container-x max-w-3xl flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h3 className="font-display font-bold text-lg text-navy-900 mb-2">{s.title}</h3>
              <p className="text-ink/65 leading-relaxed text-sm">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
