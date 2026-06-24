import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { caseStudies } from '@/lib/case-studies-data'
import CTABanner from '@/components/CTABanner'

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title: cs.metaTitle,
    description: cs.metaDescription,
    keywords: [
      `${cs.shopName} case study`,
      `window tint marketing ${cs.city}`,
      `tint shop ${cs.niche.toLowerCase()}`,
      'window tint marketing results',
      'tint shop lead generation case study',
    ],
    alternates: {
      canonical: `https://tintmarketingpros.online/case-studies/${slug}`,
    },
    openGraph: {
      title: cs.metaTitle,
      description: cs.metaDescription,
      url: `https://tintmarketingpros.online/case-studies/${slug}`,
      type: 'article',
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()

  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-muted hover:text-accent text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">{cs.niche}</span>
            <span className="text-muted text-sm">{cs.city}, {cs.state}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">{cs.shopName}</h1>
          <p className="text-muted text-xl">{cs.problem}</p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cs.results.map((r) => (
              <div key={r.label} className="text-center bg-white border border-slate-200 rounded-xl p-6">
                <p className="font-display text-3xl font-bold text-accent">{r.metric}</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8">The Situation</h2>
          <p className="text-muted leading-relaxed text-lg">{cs.problemDetail}</p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8">The Strategy</h2>
          <ul className="space-y-4">
            {cs.strategy.map((s, i) => (
              <li key={i} className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-6">
                <span className="bg-accent text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                <p className="text-muted text-sm leading-relaxed">{s}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8">Timeline</h2>
          <div className="space-y-4">
            {cs.timeline.map((t) => (
              <div key={t.month} className="flex flex-col md:flex-row md:items-start gap-4 bg-surface border border-border rounded-xl p-6">
                <span className="text-accent font-bold text-sm w-24 flex-shrink-0">{t.month}</span>
                <p className="text-muted text-sm">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="border-l-4 border-accent pl-8 py-4">
            <p className="text-text text-lg md:text-xl leading-relaxed italic mb-4">
              &ldquo;{cs.quote}&rdquo;
            </p>
            <cite className="text-accent font-semibold not-italic">{cs.quoteName}</cite>
          </blockquote>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
