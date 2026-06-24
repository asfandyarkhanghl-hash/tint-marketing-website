import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import LeadForm from '@/components/LeadForm'
import ROICalculator from '@/components/ROICalculator'

export const metadata: Metadata = {
  title: 'Google Ads for Window Tint Shops — Fill Your Schedule in 14 Days',
  description: 'Precision Google Ads campaigns built exclusively for window tint shops. We target "ceramic tint near me" and convert clicks into booked jobs.',
}

const keywordTable = [
  { intent: 'High buyer intent', keywords: '"ceramic tint near me", "window tint [city]", "car window tint cost"', color: 'text-green-400' },
  { intent: 'Service specific', keywords: '"3M window tint", "llumar tint near me", "ceramic window film"', color: 'text-accent-light' },
  { intent: 'Negative (we exclude)', keywords: '"window tint removal diy", "how to tint windows", "window tint law"', color: 'text-red-400' },
]

const failures = [
  { title: 'They target generic keywords', detail: 'Phrases like "window film" or "tinting" attract DIY searchers, not buyers. You pay $3–$5 per click for someone who will never call.' },
  { title: 'They ignore negative keywords', detail: 'Without a tint-specific negative keyword list, 60% of your ad spend goes to people searching for tint laws, removal guides, and Amazon products.' },
  { title: 'They send traffic to your homepage', detail: 'Your homepage has navigation, blog links, and about sections. A dedicated landing page converts 3–5x better for paid traffic.' },
]

export default function GoogleAdsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Google Ads</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Google Ads for Window Tint Shops — <span className="accent-gradient">Fill Your Schedule in 14 Days</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed mb-8">
              We build precision campaigns that target buyers actively searching for tint services in your city. No wasted clicks, no generic keywords, no guesswork.
            </p>
            <div className="bg-surface border border-accent/20 rounded-xl p-6 inline-block">
              <p className="text-sm text-muted mb-1">Average across our clients</p>
              <p className="font-display text-4xl font-bold text-accent">$12 cost per lead</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Why Generic Google Ads <span className="accent-gradient">Fail</span> for Tint Shops
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {failures.map((f, i) => (
              <div key={i} className="bg-surface2 border border-border rounded-2xl p-8">
                <span className="text-accent font-display text-5xl font-bold opacity-20">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl font-bold text-text mt-4 mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Our Tint-Specific <span className="accent-gradient">Keyword Strategy</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-text uppercase tracking-wider">Intent</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-text uppercase tracking-wider">Keyword Examples</th>
                </tr>
              </thead>
              <tbody>
                {keywordTable.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className={`py-4 px-6 font-medium ${row.color}`}>{row.intent}</td>
                    <td className="py-4 px-6 text-muted text-sm">{row.keywords}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Campaign Structure <span className="accent-gradient">Breakdown</span>
          </h2>
          <p className="text-muted text-lg mb-12 max-w-2xl">
            We do not dump 100 keywords into one ad group. Every campaign is structured for maximum relevance and minimum waste.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Campaign 1: High-Intent Tint', groups: ['Ceramic tint keywords', 'General tint keywords', 'Brand-specific searches (3M, XPEL, Llumar)'] },
              { name: 'Campaign 2: Service-Specific', groups: ['Residential tint keywords', 'Commercial tint keywords', 'Vehicle-specific keywords'] },
            ].map((campaign) => (
              <div key={campaign.name} className="bg-surface border border-border rounded-2xl p-8">
                <h3 className="font-display text-lg font-bold text-accent mb-4">{campaign.name}</h3>
                <ul className="space-y-3">
                  {campaign.groups.map((group) => (
                    <li key={group} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted text-sm">{group}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">
            ROI <span className="accent-gradient">Calculator</span>
          </h2>
          <p className="text-muted text-center mb-12">
            See what Google Ads could do for your tint shop.
          </p>
          <ROICalculator />
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Ready to Get <span className="accent-gradient">$12 Leads?</span>
          </h2>
          <p className="text-muted text-center mb-10">
            Start your free 14-day Google Ads trial. We build and launch your campaign at zero cost.
          </p>
          <div className="bg-surface2 border border-border rounded-2xl p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
