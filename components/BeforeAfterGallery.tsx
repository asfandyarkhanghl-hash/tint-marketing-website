import { ImageIcon } from 'lucide-react'

const galleryItems = [
  { label: 'Ceramic Tint — Sedan Side Window', filename: 'before-after-ceramic-sedan.jpg' },
  { label: 'Carbon Tint — SUV Rear Windows', filename: 'before-after-carbon-suv.jpg' },
  { label: 'Ceramic Tint — Tesla / EV', filename: 'before-after-tesla-ceramic.jpg' },
  { label: 'Paint Protection Film — Hood', filename: 'before-after-ppf-hood.jpg' },
  { label: 'Residential Window Film', filename: 'before-after-residential-film.jpg' },
  { label: 'Commercial Storefront Film', filename: 'before-after-commercial-film.jpg' },
]

export default function BeforeAfterGallery() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">See the Work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Real Transformations, <span className="accent-gradient">Real Results</span>
          </h2>
          <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
            From auto tint to residential and commercial window film — this is the work behind the numbers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.filename}
              className="aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-300 bg-white flex flex-col items-center justify-center text-center p-8"
            >
              <ImageIcon className="w-8 h-8 text-slate-300 mb-3" />
              <p className="font-semibold text-sm text-muted">{item.label}</p>
              <p className="text-xs text-slate-400 mt-1 font-mono">{item.filename}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
