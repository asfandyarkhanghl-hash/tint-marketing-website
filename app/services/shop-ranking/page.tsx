import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Google Maps Ranking for Window Tint Shops — Dominate the Local Pack',
  description: 'We get window tint shops ranked in Google\'s top 3 map results. 73% of local tint bookings come from Google Maps. Claim your spot.',
}

const optimizationSteps = [
  { step: '01', title: 'Category & Description Optimization', detail: 'We set the right primary and secondary categories and write a keyword-rich business description.' },
  { step: '02', title: 'Photo Upload & Optimization', detail: 'We upload 50+ professional photos with geo-tagged metadata and descriptive filenames.' },
  { step: '03', title: 'Review Generation System', detail: 'Automated review request texts sent 2 hours after every job, plus in-shop QR codes.' },
  { step: '04', title: 'Citation Building (52+ directories)', detail: 'Consistent NAP data across Yelp, BBB, Angi, auto directories, and local business listings.' },
  { step: '05', title: 'Weekly Google Posts', detail: 'We publish before/after photos, promotions, and educational content as Google Posts.' },
  { step: '06', title: 'Q&A Section Seeding', detail: 'We populate the Q&A section with common customer questions and keyword-rich answers.' },
  { step: '07', title: 'Service & Product Listings', detail: 'Every tint product and service you offer gets its own listing with descriptions and pricing.' },
]

const timeline = [
  { week: 'Week 1–2', description: 'GBP audit, optimization, initial photo upload, citation submissions begin.' },
  { week: 'Week 3–4', description: 'Review generation launches, Google Posts start, Q&A populated. First ranking movement visible.' },
  { week: 'Month 2', description: 'Citations indexed, review velocity building. Expect 2–5 position improvement.' },
  { week: 'Month 3', description: 'Compounding effect kicks in. Most shops reach top 5. Top 3 achievable in moderate-competition markets.' },
]

export default function ShopRankingPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Google Maps</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Google Maps Ranking — <span className="accent-gradient">Dominate the Local Pack</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed mb-8">
              73% of local tint bookings come from the Google Maps top 3. If you are not there, your competitors are taking your customers.
            </p>
            <div className="bg-surface border border-accent/20 rounded-xl p-6 inline-block">
              <p className="font-display text-4xl font-bold text-accent">73%</p>
              <p className="text-sm text-muted">of local tint bookings come from Maps top 3</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Google Maps Is Your <span className="accent-gradient">Most Valuable Asset</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { stat: '68%', label: 'of clicks go to top 3 map results' },
              { stat: '4x', label: 'more calls for shops in the map pack' },
              { stat: '$0', label: 'cost per lead from organic Maps traffic' },
            ].map((item) => (
              <div key={item.label} className="text-center bg-surface2 border border-border rounded-2xl p-8">
                <p className="font-display text-5xl font-bold text-accent">{item.stat}</p>
                <p className="text-muted text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Our 7-Step <span className="accent-gradient">Optimization Process</span>
          </h2>
          <div className="space-y-6">
            {optimizationSteps.map((step) => (
              <div key={step.step} className="flex items-start gap-6 bg-surface border border-border rounded-xl p-6">
                <span className="font-display text-2xl font-bold text-accent/30 flex-shrink-0">{step.step}</span>
                <div>
                  <h3 className="font-bold text-text mb-1">{step.title}</h3>
                  <p className="text-muted text-sm">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            What to Expect: <span className="accent-gradient">Week by Week</span>
          </h2>
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.week} className="flex flex-col md:flex-row md:items-center gap-4 bg-surface border border-border rounded-xl p-6">
                <span className="text-accent font-bold text-sm uppercase tracking-wider w-28 flex-shrink-0">{t.week}</span>
                <p className="text-muted text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Claim Your <span className="accent-gradient">Map Pack Spot</span>
          </h2>
          <p className="text-muted text-center mb-10">We start optimizing your Google Maps presence on day one of your free trial.</p>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
