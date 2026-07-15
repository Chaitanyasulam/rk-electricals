import Marquee from './Marquee'

const clients = [
  {
    abbr: 'APSPDCL',
    name: 'Andhra Pradesh Southern Power Distribution Company Ltd.',
  },
  {
    abbr: 'APCPDCL',
    name: 'Andhra Pradesh Central Power Distribution Company Ltd.',
  },
  {
    abbr: 'APEPDCL',
    name: 'Andhra Pradesh Eastern Power Distribution Company Ltd.',
  },
  {
    abbr: 'TSSPDCL',
    name: 'Telangana Southern Power Distribution Company Ltd.',
  },
  {
    abbr: 'TSNPDCL',
    name: 'Telangana State Northern Power Distribution Company Ltd.',
  },
  {
    abbr: 'BESCOM',
    name: 'Bengaluru Electricity Supply Company.',
  },
  {
    abbr: 'GESCOM',
    name: 'Gulbarga Electricity Supply Company.',
  },
  
  {
    abbr: 'RESCOM',
    name: 'Residential & Commercial Sector',
  },
 
  {
    abbr: 'HESCOM',
    name: 'Hubli Electricity Supply Company Limited',
  },
]

function PartnerCard({ abbr, name }: { abbr: string; name: string }) {
  return (
    <div className="flex w-72 shrink-0 items-center gap-5 rounded-sm border border-gold-200/80 bg-warm-white px-6 py-5 shadow-sm">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-gold-300 bg-gold-50">
        <span className="text-[0.65rem] font-bold tracking-wide text-gold-700">{abbr}</span>
      </div>
      <p className="text-sm font-medium leading-snug text-charcoal">{name}</p>
    </div>
  )
}

export default function Clients() {
  return (
    <section id="clients" className="overflow-hidden bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="mx-auto flex w-fit items-center gap-4">
            <div className="h-px w-10 bg-gold-400" />
            <span className="section-label">Supply Network</span>
            <div className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
            Trusted Partners
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            An approved supplier to leading power distribution companies and the
            residential &amp; commercial sector across the region.
          </p>
        </div>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent" />
        <Marquee speed={40}>
          {clients.map((client) => (
            <PartnerCard key={client.abbr} {...client} />
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="gold-line mt-16" />

        <div className="mt-12 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {[
            { value: '5,000', suffix: '+', label: 'Units per year' },
            { value: '125+', suffix: ' CR', label: 'Annual turnover' },
            { value: '150', suffix: '+', label: 'Employees' },
            { value: '25+', suffix: '', label: 'Trusted partners' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">
                {stat.value}
                <span className="text-gold-500">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
