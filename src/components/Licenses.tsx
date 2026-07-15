import Marquee from './Marquee'

const licenses = [
  {
    title: 'BIS License (IS 1180)',
    body: 'Mandatory certification under IS 1180 (Part 1) for oil-immersed distribution transformers supplied across India.',
    tag: 'Mandatory',
  },
  {
    title: 'ISO 9001:2015',
    body: 'Quality Management System certification for design, production, inspection, and continuous improvement.',
    tag: 'Quality',
  },
  {
    title: 'NABL Certified',
    body: 'National Accreditation Board for Testing and Calibration Laboratories — accredited in-house testing for routine and type tests.',
    tag: 'Testing',
  },
  {
    title: 'ERDA Certified',
    body: 'Electrical Research and Development Association certification validating design standards and performance testing protocols.',
    tag: 'Research',
  },
  {
    title: 'Factory License',
    body: 'Registration under the Factories Act, 1948 for industrial manufacturing and worker safety compliance.',
    tag: 'Manufacturing',
  },
  {
    title: 'GST Registration',
    body: 'Goods and Services Tax registration for legal supply to utilities, contractors, dealers, and commercial buyers.',
    tag: 'Tax & Trade',
  },
  {
    title: 'MSME / Udyam Registration',
    body: 'MSME registration for government tender eligibility, subsidies, and priority sector benefits.',
    tag: 'Government',
  },
  {
    title: 'MSME / Udyam Registration',
    body: 'MSME registration for government tender eligibility, subsidies, and priority sector benefits.',
    tag: 'Government',
  },

  {
    title: 'Pollution Control Consent',
    body: 'CTE and CTO from the State Pollution Control Board for oil handling and environmental compliance.',
    tag: 'Environment',
  },
  {
    title: 'CEIG Approval',
    body: 'Chief Electrical Inspector to Government approval for manufacturing and testing of electrical equipment.',
    tag: 'Safety',
  },
  {
    title: 'DISCOM Vendor Empanelment',
    body: 'Approved vendor with APSPDCL, APCPDCL, APEPDCL, TSSPDCL, and TSEPPDCL for tenders and direct supply.',
    tag: 'Supply',
  },
  {
    title: 'BEE Energy Efficiency',
    body: 'Bureau of Energy Efficiency compliance for energy-efficient transformer designs under the Energy Conservation Act.',
    tag: 'Efficiency',
  },
  {
    title: 'Trade License',
    body: 'Municipal trade license for operating the manufacturing unit from registered premises.',
    tag: 'Local',
  },
]

const row1 = licenses.slice(0, 3)
const row2 = licenses.slice(3, 6)

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
