import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'SEO for Window Tint Shops',
  description: 'Long-term SEO for window tint shops. We rank your site for "window tint [city]" and high-intent searches. Page 1 rankings in 60 days.',
  keywords: [
    'window tint SEO',
    'tint shop search engine optimization',
    'window tinting website ranking',
    'local SEO tint business',
    'tint shop organic traffic',
    'window tint content marketing',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/services/seo',
  },
  openGraph: {
    title: 'SEO for Window Tint Shops',
    description: 'Long-term SEO for window tint shops. Page 1 rankings in 60 days. Content, backlinks, and technical SEO that compound.',
    url: 'https://tintmarketingpros.online/services/seo',
    type: 'website',
  },
}

const pillars = [
  { title: 'Technical SEO', items: ['Site speed optimization', 'Mobile-first architecture', 'Schema markup for local businesses', 'Core Web Vitals compliance'] },
  { title: 'Content Strategy', items: ['Tint-specific keyword research', 'Service pages for every offering', 'Location pages for your service area', 'Monthly blog content targeting buyer questions'] },
  { title: 'Local Citations', items: ['52+ directory submissions', 'NAP consistency audit', 'Industry-specific directories (IWFA, auto)', 'Monthly citation monitoring'] },
  { title: 'Link Building', items: ['Local business partnerships', 'Auto dealer referral links', 'Community sponsorship mentions', 'Guest posts on automotive blogs'] },
]

const calendar = [
  { month: 'Month 1', content: '"Best Window Tint Types for [City] Heat", "How Much Does Ceramic Tint Cost?"' },
  { month: 'Month 2', content: '"Ceramic vs Carbon Tint: Complete Guide", "[City] Window Tint Laws Explained"' },
  { month: 'Month 3', content: '"Why Professional Tint Beats DIY", "Top 5 Benefits of Ceramic Window Film"' },
]

export default function SEOPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">SEO</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Window Tint SEO — <span className="accent-gradient">Rank Without Paying Per Click</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed mb-8">
              Organic traffic compounds over time. We build your tint shop&apos;s authority on Google so you get free leads month after month.
            </p>
            <div className="bg-surface border border-accent/20 rounded-xl p-6 inline-block">
              <p className="text-sm text-muted mb-1">Track record</p>
              <p className="font-display text-4xl font-bold text-accent">Page 1 in under 60 days</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            How Window Tint SEO Is <span className="accent-gradient">Different</span>
          </h2>
          <p className="text-muted text-lg mb-12 max-w-2xl">
            Generic SEO agencies optimize for volume keywords. Tint shops need hyper-local, high-intent keywords that target buyers in your specific city and service area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Generic Agency Targets', items: ['window tint', 'window film', 'car tinting'], bad: true },
              { label: 'What We Target', items: ['ceramic tint Dallas TX', 'auto tint shop near Plano', 'best window tint installer DFW'], bad: false },
            ].map((col) => (
              <div key={col.label} className={`rounded-2xl p-8 border ${col.bad ? 'bg-red-50 border-red-200' : 'bg-accent/5 border-accent/20'}`}>
                <h3 className={`font-bold mb-4 ${col.bad ? 'text-red' : 'text-accent'}`}>{col.label}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-muted text-sm flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${col.bad ? 'bg-red' : 'bg-accent'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            The 4 Pillars We <span className="accent-gradient">Optimize</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-surface border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-text mb-4">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Sample Content <span className="accent-gradient">Calendar</span>
          </h2>
          <div className="space-y-4">
            {calendar.map((c) => (
              <div key={c.month} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4">
                <span className="text-accent font-bold text-sm uppercase tracking-wider w-24 flex-shrink-0">{c.month}</span>
                <p className="text-muted text-sm">{c.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Start Ranking <span className="accent-gradient">Organically</span>
          </h2>
          <p className="text-muted text-center mb-10">Free 14-day trial includes a full SEO audit of your website and competitors.</p>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
