import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import Reveal from '@/components/Reveal'
import { FAQPageSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Pricing — Window Tint Shop Marketing Packages',
  description: 'Transparent pricing for window tint shop marketing: lead generation, lead management, and AI systems. No contracts, results guaranteed, free 14-day trial.',
  keywords: [
    'window tint marketing agency pricing',
    'window tint marketing cost',
    'tint shop marketing packages',
    'how much does tint shop marketing cost',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/pricing',
  },
  openGraph: {
    title: 'Pricing — Window Tint Shop Marketing Packages',
    description: 'Transparent pricing for lead generation, lead management, and AI systems built for window tint shops. No contracts, results guaranteed.',
    url: 'https://tintmarketingpros.online/pricing',
    type: 'website',
  },
}

const tiers = [
  {
    name: 'Starter',
    audience: 'For 1–2 installer shops just getting off referrals',
    price: '$697',
    period: '/mo management + ad spend',
    features: [
      'Google Ads or Google Maps ranking (choose one)',
      'Lead management CRM with call tracking',
      '5-minute automated follow-up texts',
      'Monthly performance report',
      'No contract — cancel anytime',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Growth',
    audience: 'For 3–5 installer shops ready to dominate their market',
    price: '$1,497',
    period: '/mo management + ad spend',
    features: [
      'Google Ads + Google Maps ranking + SEO',
      'Full lead management CRM & sales pipeline',
      'AI chatbot + automated lead qualification',
      'Social media & retargeting campaigns',
      'Weekly performance calls',
      'No contract — cancel anytime',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Scale',
    audience: 'For multi-location shops and regional operators',
    price: 'Custom',
    period: 'based on locations & ad spend',
    features: [
      'Everything in Growth, per location',
      'AI voice agent for inbound calls',
      'Dedicated account strategist',
      'Cross-location reporting & attribution',
      'Priority support',
    ],
    cta: 'Book a Strategy Call',
    highlighted: false,
  },
]

const faqs = [
  { q: 'Is ad spend included in these prices?', a: 'No — the price above is our management fee. Ad spend goes directly to Google or Meta and is billed separately, so you always see exactly where every dollar goes.' },
  { q: 'Do you require a contract?', a: 'No. Every plan is month-to-month. We do not lock clients into annual contracts because we believe results — not paperwork — should keep you here.' },
  { q: 'What happens during the free trial?', a: 'We build and launch your campaign, set up your CRM, and start driving leads for 14 days at zero cost. You see real leads and calls before you commit to a paid plan.' },
  { q: 'Can I switch plans later?', a: 'Yes. Most shops start on Starter or Growth and move up as lead volume increases and they add installers or locations.' },
]

export default function PricingPage() {
  return (
    <>
      <FAQPageSchema items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Pricing', href: '/pricing' }]} />
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Pricing</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Straightforward Pricing. <span className="accent-gradient">No Contracts.</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              Every plan includes lead generation, lead management, and a path to AI automation. Start with a free 14-day trial — you only pay once you see real leads.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  tier.highlighted
                    ? 'bg-primary border-2 border-accent shadow-xl shadow-accent/10 relative'
                    : 'bg-white border border-slate-200'
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h2 className="font-display text-2xl font-bold mb-2">{tier.name}</h2>
                <p className="text-muted text-sm mb-6">{tier.audience}</p>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-accent">{tier.price}</span>
                  <span className="text-muted text-sm block mt-1">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.cta === 'Book a Strategy Call' ? '/book' : '/free-trial'}
                  className={`inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-lg transition-all ${
                    tier.highlighted
                      ? 'bg-accent hover:bg-accent-dark text-white'
                      : 'border border-accent text-accent hover:bg-accent hover:text-white'
                  }`}
                >
                  {tier.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-sm mt-10">
            Curious what window film and tint shop owners typically budget by size? Read our{' '}
            <Link href="/blog/window-tint-shop-marketing-cost" className="text-accent font-semibold hover:underline">
              realistic marketing budget guide
            </Link>.
          </p>
        </Reveal>
      </section>

      <section className="py-24 bg-primary">
        <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
            Pricing <span className="accent-gradient">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-surface border border-border rounded-xl p-6">
                <h3 className="font-bold text-text mb-2">{f.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4 text-center">Related Reading</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/what-results-should-tint-marketing-agency-deliver" className="group flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all">
              <span className="text-sm font-semibold text-text">What results should you actually expect?</span>
              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/blog/choosing-a-window-tint-marketing-agency" className="group flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all">
              <span className="text-sm font-semibold text-text">12 questions to ask before you sign</span>
              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <Reveal className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Try It Free for <span className="accent-gradient">14 Days</span>
          </h2>
          <p className="text-muted text-center mb-10">No credit card. No commitment. Just real leads.</p>
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <LeadForm />
          </div>
        </Reveal>
      </section>
    </>
  )
}
