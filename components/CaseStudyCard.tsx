import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CaseStudyCardProps { slug: string; shopName: string; city: string; problem: string; resultMetric: string; resultLabel: string }

export default function CaseStudyCard({ slug, shopName, city, problem, resultMetric, resultLabel }: CaseStudyCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 group">
      <div className="mb-6">
        <h3 className="font-display text-xl font-bold">{shopName}</h3>
        <p className="text-muted text-sm">{city}</p>
      </div>
      <p className="text-muted text-sm mb-6">{problem}</p>
      <div className="mb-8">
        <p className="font-display text-4xl font-bold text-accent">{resultMetric}</p>
        <p className="text-muted text-xs uppercase tracking-wider mt-1">{resultLabel}</p>
      </div>
      <Link href={`/case-studies/${slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors group-hover:gap-3">
        Read Full Story <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
