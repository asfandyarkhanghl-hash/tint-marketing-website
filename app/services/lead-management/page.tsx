import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone, GitBranch, PhoneMissed, BarChart3, Users, ArrowRight } from 'lucide-react'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceHeroImage from '@/components/ServiceHeroImage'
import Reveal from '@/components/Reveal'
import { ServiceSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Lead Management & CRM for Window Tint Shops',
  description: 'Stop losing leads to slow follow-up and messy spreadsheets. Lead management, call tracking, and sales pipelines built for window tint shops.',
  keywords: [
    'lead management software for tint shops',
    'window tint shop CRM',
    'tint shop lead tracking',
    'call tracking window tint',
    'sales pipeline tint shop',
    'tint business lead management',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/services/lead-management',
  },
  openGraph: {
    title: 'Lead Management & CRM for Window Tint Shops',
    description: 'Every lead tracked, every call recorded, every dollar attributed. The lead management system built for tint shops.',
    url: 'https://tintmarketingpros.online/services/lead-management',
    type: 'website',
  },
}

const problems = [
  { title: 'Leads live in three different places', detail: 'A form submission here, a missed call there, a DM buried in Instagram. By the time you piece it together, the lead already booked with someone else.' },
  { title: 'Nobody follows up in time', detail: 'The average tint shop takes 47 minutes to respond to a new lead. 67% of those leads have already called a competitor by then.' },
  { title: 'You cannot see what is actually working', detail: 'Without lead-source attribution, you cannot tell if your $12 Google Ads lead or your $80 Facebook lead is the one that actually booked.' },
]

const features = [
  { icon: Users, title: 'Unified Lead Inbox', desc: 'Every call, form, text, and social DM lands in one place — tagged with its source. Nothing gets lost between your phone, your website, and your Instagram.' },
  { icon: Phone, title: 'Call Tracking & Recording', desc: 'Every inbound call is recorded and attributed to the exact ad or keyword that generated it. Audit lead quality and coach your front desk from real conversations.' },
  { icon: PhoneMissed, title: 'Missed Call Text-Back', desc: 'Mid-install and can\'t answer? The system auto-texts the caller within 30 seconds so they hear from you before they dial the next shop.' },
  { icon: GitBranch, title: 'Visual Sales Pipeline', desc: 'Drag-and-drop stages from New Lead → Qualified → Quoted → Booked → Completed. See exactly where every deal is stuck and follow up before it goes cold.' },
  { icon: BarChart3, title: 'Revenue Attribution', desc: 'Every booked job traced back to its campaign. See real cost-per-booking, not just cost-per-click. The same system tracks material costs, labor, and profit per job, so budget decisions are based on real numbers, not guesses.' },
  { icon: CheckCircle2, title: '5-Minute Follow-Up Automation', desc: 'New leads get an instant text acknowledging their inquiry and setting a callback expectation — the single highest-ROI change most shops ever make.' },
]

const stats = [
  { stat: '67%', label: 'of leads are lost to slow follow-up' },
  { stat: '3.2 min', label: 'average response time with our system' },
  { stat: '+40%', label: 'booking rate lift from missed-call text-back' },
]

export default function LeadManagementPage() {
  return (
    <>
      <ServiceSchema
        name="Lead Management & CRM for Window Tint Shops"
        description="Lead tracking, call recording, sales pipelines, and revenue attribution built specifically for window tint shops."
        url="https://tintmarketingpros.online/services/lead-management"
      />

      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'Lead Management', href: '/services/lead-management' }]} />
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div className="max-w-3xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Lead Management</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Every Lead Tracked. <span className="accent-gradient">Every Dollar Attributed.</span>
              </h1>
              <p className="text-muted text-xl leading-relaxed mb-8">
                Generating leads is only half the job. If they fall through the cracks between your phone, your website, and your notebook, your marketing budget is wasted. We build the system that catches, tracks, and converts every single one.
              </p>
              <div className="bg-surface border border-accent/20 rounded-xl p-6 inline-block">
                <p className="text-sm text-muted mb-1">Average lead response time with our system</p>
                <p className="font-display text-4xl font-bold text-accent">3.2 minutes</p>
              </div>
            </div>
            <ServiceHeroImage
              src="/images/services/lead-management-tint-shop.jpg"
              alt="Tint shop manager tracking calls and leads in a CRM dashboard"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Why Tint Shops <span className="accent-gradient">Bleed Leads</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((f, i) => (
              <div key={i} className="card-hover bg-white border border-slate-200 rounded-2xl p-8">
                <span className="text-accent font-display text-5xl font-bold opacity-20">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl font-bold text-text mt-4 mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-24 bg-primary">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">What&apos;s Included</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              The Lead Management <span className="accent-gradient">Toolkit</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-hover glass-card rounded-2xl p-7">
                <div className="icon-pop w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-24 bg-slate-50">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="card-hover text-center bg-white border border-slate-200 rounded-2xl p-8">
                <p className="font-display text-5xl font-bold text-accent">{s.stat}</p>
                <p className="text-muted text-sm mt-2">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted mt-10 max-w-2xl mx-auto">
            Want the full breakdown of how the CRM, pipelines, and automations work together for tint and window film shops? See the{' '}
            <Link href="/platform" className="text-accent font-semibold hover:underline">full platform tour</Link>, or read our{' '}
            <Link href="/blog/tint-shop-crm-automation-guide" className="text-accent font-semibold hover:underline">CRM & automation guide</Link>.
          </p>
        </Reveal>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4 text-center">Related Reading</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/tint-shop-crm-automation-guide" className="card-hover group flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all">
              <span className="text-sm font-semibold text-text">The complete CRM & automation guide</span>
              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/blog/tint-shop-lead-follow-up" className="card-hover group flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all">
              <span className="text-sm font-semibold text-text">Why shops lose 67% of leads (and the fix)</span>
              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <Reveal className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Stop Losing Leads <span className="accent-gradient">to Slow Follow-Up</span>
          </h2>
          <p className="text-muted text-center mb-10">
            We set up your full lead management system during your free 14-day trial — at no cost.
          </p>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <LeadForm />
          </div>
        </Reveal>
      </section>
    </>
  )
}
