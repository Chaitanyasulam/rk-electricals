const galleryImages = [
  { src: '/images/hero-transformer.jpg', alt: 'Power distribution infrastructure' },
  { src: '/images/factory.jpg', alt: 'Manufacturing facility' },
  { src: '/images/electrical-plant.jpg', alt: 'Electrical plant operations' },
  { src: '/images/power-grid.jpg', alt: 'Power grid and distribution network' },
  { src: '/images/manufacturing.jpg', alt: 'Industrial manufacturing floor' },
]

export default function Gallery() {
  return (
    <section className="bg-charcoal py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="section-label text-gold-400">Our Facility</span>
          <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
            Built for precision manufacturing
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-sm">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ minHeight: '280px' }}
            />
          </div>
          {galleryImages.slice(1).map((img) => (
            <div key={img.src} className="overflow-hidden rounded-sm">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ minHeight: '136px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
