export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <img
          src="/images/hero-transformer.jpg"
          alt="Electrical power infrastructure"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-white via-warm-white/92 to-warm-white/40" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl leading-[1.08] text-charcoal md:text-6xl lg:text-[4.25rem]">
            Engineering power for{' '}
            <span className="gold-text italic">every connection</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            RK Electricals Private Limited designs and manufactures oil-immersed distribution
            transformers up to <strong className="text-charcoal">500 KVA</strong> — trusted by
            <strong className="text-charcoal"> 6 partners</strong>, supplying contractors and the
            residential &amp; commercial sector with over{' '}
            <strong className="text-charcoal">5,000 units every year</strong>.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#products"
              className="gold-gradient rounded-sm px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-md transition-opacity hover:opacity-90"
            >
              Our Transformers
            </a>
            <a
              href="#licenses"
              className="rounded-sm border border-gold-400/60 bg-white/60 px-8 py-3.5 text-sm font-semibold tracking-wide text-charcoal backdrop-blur-sm transition-colors hover:border-gold-500 hover:bg-white"
            >
              Certifications
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-gold-200/80 bg-gold-200/80 sm:grid-cols-3 lg:max-w-4xl">
          {[
            { value: '500', suffix: ' KVA', label: 'Maximum Rating' },
            { value: '5,000+', suffix: '+', label: 'Annual Output' },
            { value: '10+', suffix: '', label: 'Trusted Partners' },
            { value: '125+', suffix: ' CR', label: 'Annual Turnover' },
            { value: '150+', suffix: '+', label: 'Employees' },
            { value: 'BIS', suffix: '', label: 'IS 1180 Certified' },
          ].map((stat) => (
            <div key={stat.label} className="bg-warm-white px-5 py-5">
              <p className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                {stat.value}
                <span className="text-gold-500">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-xs tracking-wide text-muted uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
