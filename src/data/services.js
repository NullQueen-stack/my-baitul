import { FaHardHat, FaBolt, FaCogs, FaLaptopCode, FaOilCan, FaBuilding, FaTools, FaNetworkWired } from 'react-icons/fa'

export const services = [
  {
    slug: 'construction-contracting',
    title: 'Construction & Contracting',
    icon: FaHardHat,
    short: 'Turnkey civil construction for commercial, residential and government projects.',
    banner: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop',
    description:
      'Our construction division manages projects from foundation to finishing, coordinating design, procurement and site execution under one accountable team. We work across commercial towers, government facilities, warehousing and residential compounds.',
    features: [
      'Turnkey civil & structural works',
      'Pre-construction planning & value engineering',
      'Finishing, fit-out and MEP coordination',
      'Site safety management (HSE compliant)',
    ],
    faqs: [
      { q: 'Do you handle design-build contracts?', a: 'Yes, we offer both design-build and build-only contracting depending on project scope and client preference.' },
      { q: 'What project sizes do you take on?', a: 'From mid-size commercial fit-outs to multi-phase infrastructure builds exceeding KD 5 million.' },
    ],
  },
  {
    slug: 'electromechanical',
    title: 'Electromechanical Works',
    icon: FaBolt,
    short: 'HVAC, electrical distribution and mechanical systems for industrial and commercial facilities.',
    banner: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop',
    description:
      'We design, install and maintain electrical, HVAC and plumbing systems for facilities that cannot afford downtime — from data centres to processing plants — backed by certified technicians and MEW-approved practices.',
    features: [
      'Low & medium voltage electrical distribution',
      'HVAC design, installation & maintenance',
      'Fire fighting & fire alarm systems',
      'Preventive maintenance contracts',
    ],
    faqs: [
      { q: 'Are your teams MEW approved?', a: 'Yes, our electrical division is an approved contractor with the Ministry of Electricity and Water.' },
      { q: 'Do you offer annual maintenance contracts?', a: 'Yes, we offer scheduled AMC packages for commercial and industrial clients.' },
    ],
  },
  {
    slug: 'industrial-services',
    title: 'Industrial & Oil-Gas Services',
    icon: FaOilCan,
    short: 'Industrial maintenance, fabrication and support services for the oil, gas and power sectors.',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1600&auto=format&fit=crop',
    description:
      'Our industrial services division supports petrochemical, oil & gas and power clients with plant maintenance, mechanical fabrication and shutdown/turnaround support delivered to strict safety and quality standards.',
    features: [
      'Plant shutdown & turnaround support',
      'Mechanical fabrication & piping',
      'Rotating equipment maintenance',
      'Insulation & scaffolding services',
    ],
    faqs: [
      { q: 'Do you support emergency callouts?', a: 'Yes, our industrial response team is available 24/7 for critical plant issues.' },
    ],
  },
  {
    slug: 'it-technology-solutions',
    title: 'IT & Technology Solutions',
    icon: FaLaptopCode,
    short: 'Enterprise networks, systems integration and digital infrastructure for modern businesses.',
    banner: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    description:
      'Our technology division delivers structured cabling, networking, surveillance and enterprise IT infrastructure — bridging traditional engineering with the digital systems modern facilities depend on.',
    features: [
      'Structured cabling & networking',
      'CCTV & access control systems',
      'Data centre & server room build-out',
      'IT infrastructure support & managed services',
    ],
    faqs: [
      { q: 'Can you integrate IT works with a construction project?', a: 'Yes, our IT team coordinates directly with construction and electrical teams for a single point of accountability.' },
    ],
  },
  {
    slug: 'infrastructure-projects',
    title: 'Infrastructure Projects',
    icon: FaBuilding,
    short: 'Roads, utilities and public infrastructure delivered for government and municipal clients.',
    banner: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop',
    description:
      'We deliver public and private infrastructure works including road networks, drainage, utility corridors and site development — engineered for durability in Kuwait\'s climate.',
    features: [
      'Road & pavement construction',
      'Storm water & drainage networks',
      'Utility corridor installation',
      'Site grading & earthworks',
    ],
    faqs: [],
  },
  {
    slug: 'facilities-management',
    title: 'Facilities Management',
    icon: FaTools,
    short: 'Integrated hard and soft facilities management for commercial and industrial sites.',
    banner: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600&auto=format&fit=crop',
    description:
      'From MEP maintenance to soft services, our facilities management team keeps operations running smoothly with proactive, scheduled and responsive support.',
    features: [
      'Hard FM: MEP, civil & structural upkeep',
      'Soft FM: cleaning, landscaping, security coordination',
      'CAFM-based work order tracking',
      'SLA-driven response times',
    ],
    faqs: [],
  },
]

export const industries = [
  { title: 'Oil & Gas', icon: FaOilCan },
  { title: 'Power & Utilities', icon: FaBolt },
  { title: 'Government', icon: FaBuilding },
  { title: 'Commercial Real Estate', icon: FaHardHat },
  { title: 'Manufacturing', icon: FaCogs },
  { title: 'Telecom & IT', icon: FaNetworkWired },
]

export const whyChooseUs = [
  { title: 'Certified Quality', body: 'ISO 9001, 14001 & 45001 certified processes across every division.' },
  { title: '26+ Years Experience', body: 'Deep local expertise across Kuwait\'s toughest engineering environments.' },
  { title: 'Certified Team', body: 'Licensed engineers, MEW-approved technicians and safety-trained crews.' },
  { title: 'Innovation-Led', body: 'Modern methods, digital project tracking and continuous process improvement.' },
  { title: 'Client Satisfaction', body: 'A 96% client retention rate built on transparent delivery.' },
]
