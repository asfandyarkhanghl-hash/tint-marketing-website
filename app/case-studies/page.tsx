import type { Metadata } from 'next'
import CaseStudyCard from '@/components/CaseStudyCard'
import CTABanner from '@/components/CTABanner'
import { caseStudies } from '@/lib/case-studies-data'

export const metadata: Metadata = {
  title: 'Case Studies — Real Tint Shop Results',
  description: 'See how we helped window tint shops across the US generate more leads, rank on Google Maps, and grow revenue. Real data, real shops.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Proof</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Real Shops. <span className="accent-gradient">Real Results.</span>
          </h1>
          <p className="text-muted text-xl max-w-2xl">
            Every case study below is a real tint shop that came to us with a real problem. Here is exactly what we did and what happened.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      <CTABanner />
    </>
  )
}
