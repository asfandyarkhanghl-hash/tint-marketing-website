import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CaseStudyCard from '@/components/CaseStudyCard'
import CTABanner from '@/components/CTABanner'
import Breadcrumbs from '@/components/Breadcrumbs'
import Reveal from '@/components/Reveal'
import { caseStudies } from '@/lib/case-studies-data'

export const metadata: Metadata = {
  title: 'Case Studies — Real Marketing Results for Tint Shops',
  description: 'See real marketing results from window tint shops across the US — more leads, higher Google Maps rankings, and real revenue growth. Real data, real shops.',
  keywords: [
    'window tint marketing case studies',
    'window tint marketing results',
    'window tint advertising case study',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/case-studies',
  },
  openGraph: {
    title: 'Case Studies — Real Marketing Results for Tint Shops',
    description: 'See real marketing results from window tint shops across the US — more leads, higher Google Maps rankings, and real revenue growth.',
    url: 'https://tintmarketingpros.online/case-studies',
    type: 'website',
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Case Studies', href: '/case-studies' }]} />
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Proof</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Real Shops. <span className="accent-gradient">Real Results.</span>
          </h1>
          <p className="text-muted text-xl max-w-2xl">
            Every case study below is a real tint shop or window film business that came to us with a real problem. Here is exactly what we did and what happened.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <CaseStudyCard
                key={cs.slug}
                slug={cs.slug}
                shopName={cs.shopName}
                city={`${cs.city}, ${cs.state}`}
                problem={cs.problem}
                resultMetric={cs.resultMetric}
                resultLabel={cs.resultLabel}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4 text-center">Related Reading</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/how-to-get-more-leads-window-tint-shop" className="group flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all">
              <span className="text-sm font-semibold text-text">7 proven ways to get more tint shop leads</span>
              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="group flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all">
              <span className="text-sm font-semibold text-text">See the full system behind these results</span>
              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
