export default function About() {
  return (
    <section id="about" className="bg-warm-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src="/images/factory.jpg"
              alt="Transformer manufacturing facility"
              className="w-full rounded-sm object-cover shadow-lg"
              style={{ aspectRatio: '4/5' }}
            />
            <img
              src="/images/manufacturing.jpg"
              alt="Electrical equipment production"
              className="absolute -bottom-8 -right-4 w-48 rounded-sm border-4 border-warm-white object-cover shadow-xl md:w-56"
              style={{ aspectRatio: '1/1' }}
            />
            <div className="absolute -top-4 -left-4 h-24 w-24 border-l-2 border-t-2 border-gold-400" />
          </div>

          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-gold-400" />
              <span className="section-label">Who We Are</span>
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              A name partners trust, built on quality
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              RK Electricals Private Limited is a dedicated manufacturer of distribution
              transformers, operating from our own production facility with end-to-end
              control over winding, core assembly, tank fabrication, oil filling, and
              testing. Every unit is built to meet the exacting specifications demanded
              by power distribution companies and private sector clients.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              With an annual manufacturing output of approximately{' '}
              <strong className="text-charcoal">5,000 transformers</strong>, we maintain
              the capacity to fulfil large government tenders and commercial orders
              without compromising on build quality or delivery schedules.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { num: '01', title: 'In-house Production', desc: 'Complete manufacturing under one roof' },
                { num: '02', title: 'Routine Testing', desc: 'Every unit tested before dispatch' },
                { num: '03', title: 'Partner Approved', desc: 'Empanelled with 25+ trusted partners' },
                { num: '04', title: 'Timely Delivery', desc: 'Consistent supply for bulk orders' },
              ].map((item) => (
                <div key={item.num} className="border-l-2 border-gold-300 pl-4">
                  <p className="text-xs font-semibold tracking-widest text-gold-500">{item.num}</p>
                  <p className="mt-1 font-semibold text-charcoal">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
