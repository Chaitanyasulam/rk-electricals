import Marquee from './Marquee'
const licenses = [
  {
    title: 'BIS License (IS 1180)',
    body: 'Mandatory certification under IS 1180 (Part 1) for oil-immersed distribution transformers supplied across India.',
    tag: 'Mandatory',
  },
  {
    title: 'ISO 9001:2015',
    body: 'Quality Management System certification ensuring consistent product quality, customer satisfaction, and continual improvement in manufacturing processes.',
    tag: 'Quality',
  },
  {
    title: 'ISO 14001:2015',
    body: 'Environmental Management System certification demonstrating our commitment to sustainable manufacturing practices, pollution prevention, and environmental responsibility.',
    tag: 'Environment',
  },
  {
    title: 'ISO 45001:2018',
    body: 'Occupational Health and Safety Management System certification ensuring a safe, healthy, and compliant workplace for employees and visitors.',
    tag: 'Safety',
  },
  {
    title: 'NABL Certified',
    body: 'National Accreditation Board for Testing and Calibration Laboratories (NABL) accredited testing facilities for routine, type, and special transformer tests.',
    tag: 'Testing',
  },
  {
    title: 'ERDA Certified',
    body: 'Electrical Research and Development Association (ERDA) certification validating transformer design, performance, reliability, and testing standards.',
    tag: 'Research',
  },
  {
    title: 'BEE 5-Star Rated Transformers',
    body: 'Manufacturing Bureau of Energy Efficiency (BEE) 5-Star rated distribution transformers designed for maximum energy efficiency and reduced technical losses.',
    tag: 'Energy',
  },
  {
    title: 'BEE 2-Star Rated Transformers',
    body: 'Manufacturing BEE 2-Star rated distribution transformers compliant with Bureau of Energy Efficiency performance standards.',
    tag: 'Energy',
  },
  {
    title: 'Factory License',
    body: 'Licensed manufacturing facility operating under the Factories Act with full compliance for industrial operations and worker safety.',
    tag: 'Manufacturing',
  },
  {
    title: 'GST Registration',
    body: 'Goods and Services Tax registration enabling compliant supply of transformers to utilities, industries, contractors, and government organizations.',
    tag: 'Tax & Trade',
  },
  {
    title: 'MSME / Udyam Registration',
    body: 'Government-recognized MSME registration providing eligibility for government tenders, subsidies, and various industrial support schemes.',
    tag: 'Government',
  },
  {
    title: 'Pollution Control Consent',
    body: 'Consent to Establish (CTE) and Consent to Operate (CTO) obtained from the State Pollution Control Board for environmentally compliant manufacturing.',
    tag: 'Environment',
  },
  {
    title: 'CEIG Approval',
    body: 'Approval from the Chief Electrical Inspector to Government (CEIG) for manufacturing, inspection, and testing of electrical equipment.',
    tag: 'Safety',
  },
  {
    title: 'DISCOM Vendor Empanelment',
    body: 'Empanelled supplier for state power distribution companies, enabling participation in utility tenders and direct transformer supply.',
    tag: 'Supply',
  },
  {
    title: 'Trade License',
    body: 'Valid municipal trade license authorizing manufacturing operations from our registered industrial premises.',
    tag: 'Local',
  },
]

const row1 = licenses.slice(0, 5)
const row2 = licenses.slice(5, 10)


function LicenseCard({
  title,
  body,
  tag,
}: {
  title: string
  body: string
  tag: string
}) {
  return (
    <div className="w-80 shrink-0 rounded-sm border border-gold-200/80 bg-warm-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-semibold text-charcoal">{title}</h3>
        <span className="rounded-sm bg-gold-100 px-2 py-0.5 text-[0.65rem] font-semibold tracking-wider text-gold-700 uppercase">
          {tag}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  )
}

export default function Licenses() {
  return (
    <section id="licenses" className="overflow-hidden bg-warm-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="mx-auto flex w-fit items-center gap-4">
            <div className="h-px w-10 bg-gold-400" />
            <span className="section-label">Compliance</span>
            <div className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
            Licenses &amp; Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            RK Electricals Private Limited maintains all regulatory approvals and
            certifications required for manufacturing and supplying distribution
            transformers across India.
          </p>
        </div>

        <div className="relative mt-14 space-y-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-warm-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-warm-white to-transparent" />

          <Marquee speed={45}>
            {row1.map((license) => (
              <LicenseCard key={license.title} {...license} />
            ))}
          </Marquee>

          <Marquee speed={50} reverse>
            {row2.map((license) => (
              <LicenseCard key={license.title} {...license} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
