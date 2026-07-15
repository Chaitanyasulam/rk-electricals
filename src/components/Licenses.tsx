import Marquee from './Marquee'

const licenses = [
  {
    title: 'BIS License (IS 1180)',
    logo: '/certifications/bis.svg',
    body: 'Certified under IS 1180 (Part 1) for manufacturing oil-immersed distribution transformers.',
    tag: 'Mandatory',
  },
  {
    title: 'ISO 9001:2015',
    logo: '/certifications/iso9001.svg',
    body: 'Quality Management System certification ensuring consistent manufacturing excellence.',
    tag: 'Quality',
  },
  {
    title: 'ISO 14001:2015',
    logo: '/certifications/iso14001.svg',
    body: 'Environmental Management System certification for sustainable manufacturing.',
    tag: 'Environment',
  },
  {
    title: 'ISO 45001:2018',
    logo: '/certifications/iso45001.svg',
    body: 'Occupational Health & Safety Management System certification.',
    tag: 'Safety',
  },
  {
    title: 'ERDA Certified',
    logo: '/certifications/erda.svg',
    body: 'Electrical Research and Development Association certified testing and validation.',
    tag: 'Testing',
  },
  {
    title: 'BEE 5-Star Rated',
    logo: '/certifications/bee5star.svg',
    body: 'Manufacturing Bureau of Energy Efficiency 5-Star rated distribution transformers.',
    tag: 'Energy',
  },
  {
    title: 'BEE 2-Star Rated',
    logo: '/certifications/bee2star.svg',
    body: 'Manufacturing BEE 2-Star rated distribution transformers.',
    tag: 'Energy',
  },
  {
    title: 'Pollution Control Board',
    logo: '/certifications/pollution.svg',
    body: 'Environmental approvals from the State Pollution Control Board.',
    tag: 'Compliance',
  },
]

const row1 = licenses.slice(0, 3)
const row2 = licenses.slice(3, 6)
const row3 = licenses.slice(6, 9)
const row4 = licenses.slice(6, 12)
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
