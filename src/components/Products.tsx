const products = [
  {
    range: '16 KVA',
    phase: 'Single Phase',
    use: 'Rural feeders & small residential loads',
    image: '/images/electrical-plant.jpg',
  },
  {
    range: '25 – 63 KVA',
    phase: 'Three Phase',
    use: 'Urban distribution & commercial establishments',
    image: '/images/power-grid.jpg',
  },
  {
    range: '100 – 160 KVA',
    phase: 'Three Phase',
    use: 'Industrial parks & municipal supply lines',
    image: '/images/factory.jpg',
  },
  {
    range: '200 – 315 KVA',
    phase: 'Three Phase',
    use: 'Heavy commercial loads & feeder stations',
    image: '/images/hero-transformer.jpg',
  },
  {
    range: '400 – 500 KVA',
    phase: 'Three Phase',
    use: 'Large substations & high-capacity distribution',
    image: '/images/power-grid.jpg',
  },
]

const specs = [
  "Oil-immersed, naturally cooled (ONAN) distribution transformers",
  "Capacity range: Up to 500 kVA",
  "Voltage class: 11 kV primary / 433 V secondary (custom voltage ratios available)",
  "Three-phase, 50 Hz AC supply",
  "Copper wound windings with electrolytic-grade copper conductors",
  "CRGO (Cold Rolled Grain Oriented) silicon steel core for low no-load losses",
  "Energy-efficient designs compliant with BEE 2-Star and 5-Star ratings",
  "Manufactured in accordance with IS 1180 (Part 1): 2014 and latest BIS standards",
  "Hermetically sealed or conservator-type construction",
  "Conservator tank with silica gel breather for moisture control",
  "Buchholz relay for internal fault protection (where applicable)",
  "Magnetic oil level gauge (MOG) with oil level indicator",
  "Pressure Relief Valve (PRV) for enhanced operational safety",
  "Off-Circuit Tap Changer (OCTC) for voltage adjustment",
  "Porcelain or polymer outdoor bushings",
  "Radiator cooling system for efficient heat dissipation",
  "Heavy-duty fabricated mild steel tank with anti-corrosion surface treatment",
  "High-quality transformer oil conforming to IS 335",
  "Lifting lugs, jacking pads, towing holes, and earthing terminals provided",
  "Suitable for indoor and outdoor installations",
  "Routine tests conducted as per IS 2026 and IS 1180 before dispatch",
  "Type-tested design validated by ERDA",
  "Insulation Resistance (IR), Turns Ratio (TTR), Winding Resistance, and High Voltage tests performed",
  "Each transformer supplied with routine test certificates, guarantee test reports, and operation & maintenance manual",
]

export default function Products() {
  return (
    <section id="products" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="mx-auto flex w-fit items-center gap-4">
            <div className="h-px w-10 bg-gold-400" />
            <span className="section-label">Product Range</span>
            <div className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">
            Distribution Transformers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Manufactured from 16 KVA up to 500 KVA for power distribution networks,
            contractors, and residential &amp; commercial installations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.range}
              className="group overflow-hidden rounded-sm border border-gold-200/80 bg-warm-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.range} distribution transformer`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <p className="absolute bottom-4 left-4 font-serif text-3xl font-semibold text-white">
                  {product.range}
                </p>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold tracking-wide text-gold-600 uppercase">
                  {product.phase}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{product.use}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-sm border border-gold-200/80 bg-warm-white p-8 md:p-10">
          <h3 className="font-serif text-2xl text-charcoal">Technical Specifications</h3>
          <div className="gold-line mt-4 mb-8" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {specs.map((spec) => (
              <li key={spec} className="flex items-start gap-3 text-sm text-charcoal-light">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
