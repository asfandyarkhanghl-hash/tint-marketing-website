import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Strategy Call',
  description: '20-minute strategy call with Tint Marketing Pro. We analyze your market, show you competitor data, and build your growth plan. No sales pressure.',
}

export default function BookPage() {
  return (
    <div className="min-h-screen bg-primary pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          Book Your <span className="accent-gradient">Free Strategy Call</span>
        </h1>
        <p className="text-muted text-center mb-12 text-lg max-w-2xl mx-auto">
          20 minutes. We analyze your market, show you what your competitors are doing, and build your custom growth plan. No sales pressure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { emoji: '🎯', title: 'Market Analysis', desc: 'We show you exactly where your shop sits vs competitors on Google' },
            { emoji: '📊', title: 'Custom Strategy', desc: 'You leave with a real plan, not a sales pitch' },
            { emoji: '🚀', title: 'Free Trial Offer', desc: "If we're a fit, we start your free 14-day trial on the call" },
          ].map((item) => (
            <div key={item.title} className="bg-surface border border-border rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-semibold mb-2 text-text">{item.title}</h3>
              <p className="text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-surface rounded-2xl overflow-hidden border border-border p-8">
          <div className="text-center">
            <p className="text-muted mb-4">
              Calendar booking will be available once Cal.com is configured.
            </p>
            <p className="text-sm text-muted mb-8">
              Set your <code className="text-accent">NEXT_PUBLIC_CAL_USERNAME</code> environment variable to enable the calendar embed.
            </p>
            <a
              href="/free-trial"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-lg transition-all"
            >
              Or Start Your Free Trial Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
