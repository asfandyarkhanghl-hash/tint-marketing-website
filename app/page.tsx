import { AlertTriangle, MapPin, Clock, ArrowRight, ArrowDown, Target, Users, Bot, Phone, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ResultsCounter from '@/components/ResultsCounter'
import ProcessSteps from '@/components/ProcessSteps'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import FAQAccordion from '@/components/FAQAccordion'
import LeadForm from '@/components/LeadForm'
import { OrganizationSchema, FAQSchema, LocalBusinessSchema } from '@/components/SchemaMarkup'
import HeroSection from '@/components/HeroSection'
import ServicesGrid from '@/components/ServicesGrid'
import LeadMathSection from '@/components/LeadMathSection'
import BeforeAfterGallery from '@/components/BeforeAfterGallery'

const pillars = [
  { number: '01', icon: Target, title: 'Lead Generation', description: 'Google Ads, Google Maps ranking, SEO, and social media that put your shop in front of buyers actively searching for tint and window film services.', href: '/services' },
  { number: '02', icon: Users, title: 'Lead Management', description: 'Every call recorded, every lead tracked, every dollar attributed. A CRM and follow-up system that makes sure nobody slips through the cracks.', href: '/services/lead-management' },
  { number: '03', icon: Bot, title: 'AI Systems', description: 'A 24/7 AI chatbot and voice agent that answers questions, filters tire-kickers, and books appointments — even while you sleep.', href: '/services/ai-systems' },
]

const painPoints = [
  { icon: AlertTriangle, title: 'Your phone should be ringing 30+ times a month', description: 'Most tint shops get 5–10 leads a month and call it "normal." It is not. With the right system, 30–40 qualified leads per month is the baseline — not the ceiling.' },
  { icon: MapPin, title: 'Most of your leads are going to competitors', description: 'If you are not in the Google Maps top 3, you are far less visible. Those customers are not going without tint — they are going to the shop that shows up first.' },
  { icon: Clock, title: 'Every missed call is $350+ walking out the door', description: 'You miss a call while tinting a car, they call the next shop. The average tint job is $350–$800. Lose 5 calls a week and that is real revenue gone every month.' },
]

const platformHighlights = [
  { icon: Bot, title: 'AI Lead Scoring', desc: 'Every lead scored by service, vehicle, and urgency in under 30 seconds.' },
  { icon: Clock, title: '5-Minute Follow-Up', desc: 'Auto-text and team alert the moment a lead comes in — no cold leads.' },
  { icon: Phone, title: 'Call Tracking & Recording', desc: 'Every inbound call recorded and tagged to the exact campaign that drove it.' },
  { icon: Shield, title: 'Results Guarantee', desc: 'No measurable increase in qualified leads in 30 days? You do not pay.' },
]

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQSchema />

      <HeroSection />
      <ResultsCounter />

      {/* Problem Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red text-sm font-bold uppercase tracking-widest mb-3">The Real Problem</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              You Are Losing Revenue <span className="red-gradient">Every Single Week</span>
            </h2>
            <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
              Most tint shop owners don&apos;t realize how many customers they are losing every day to bad marketing, slow follow-up, and invisible Google listings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-red/30 hover:shadow-lg hover:shadow-red/5 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-red/5 border border-red/10 flex items-center justify-center mb-6">
                  <point.icon className="w-6 h-6 text-red" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3">{point.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Bridge into solution */}
          <div className="mt-16 flex flex-col items-center">
            <ArrowDown className="w-6 h-6 text-slate-300 mb-4" />
            <p className="font-display text-xl md:text-2xl font-bold text-center max-w-xl">
              Here&apos;s how we fix all three — with one connected system, not three separate vendors.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Pillar System — the spine of the page */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">How We Grow Your Shop</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              One System, <span className="accent-gradient">Three Connected Pillars</span>
            </h2>
            <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
              Most agencies stop at ads. We built a complete system that generates leads, manages them until they book, and automates the parts you cannot do manually.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group relative bg-surface border border-slate-200 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-display text-2xl font-bold text-accent/25">{pillar.number}</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{pillar.description}</p>
                <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
                {i < pillars.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-6 h-6 text-slate-300" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LeadMathSection />
      <ServicesGrid />

      {/* Platform in Action — consolidated proof module */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Your Command Center</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                See Every Lead, Call & Dollar — <span className="accent-gradient">In One Dashboard</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Leads, appointments, revenue, and calls — all tracked back to the exact ad, keyword, or post that brought them in. No guesswork, no black-box reporting.
              </p>
              <div className="space-y-4">
                {[
                  'Every lead tracked with full source attribution',
                  'Appointments booked automatically, synced to your calendar',
                  'Revenue traced back to the campaign that earned it',
                  'Every call recorded and scored for quality',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-text-secondary text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/platform" className="inline-flex items-center gap-2 text-accent font-bold mt-8 hover:gap-3 transition-all">
                Explore Full Platform <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-200">
                <Image
                  src="/images/optimized/owner-dashboard.jpg"
                  alt="Example CRM dashboard for a window tint shop showing lead tracking, appointments, revenue, and call volume charts"
                  width={700}
                  height={500}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-muted text-xs mt-3">Example dashboard view — your data, your campaigns, your numbers</p>
            </div>
          </div>

          {/* Condensed feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {platformHighlights.map((f) => (
              <div key={f.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-sm mb-1.5">{f.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterGallery />

      {/* Shop Interior Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Built for Shops Like Yours</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                From a Few Calls a Week to <span className="accent-gradient">a Full Schedule</span>
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
                <p>We started this agency working with a ceramic tint installer in Phoenix. He did incredible work — ceramic, carbon, PPF — but his phone barely rang.</p>
                <p>We rebuilt his entire system: tint-specific keywords, Google Maps optimization, a 5-minute lead response system, and an AI chatbot that booked appointments even after close.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 my-8">
                {[
                  { before: 'Few', after: '30+', label: 'Calls/Week' },
                  { before: 'High', after: 'Low', label: 'Cost Per Lead' },
                  { before: 'Slow', after: 'Fast', label: 'Booking Speed' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-surface border border-slate-200 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-red line-through text-sm">{stat.before}</span>
                      <span className="text-accent font-display text-2xl font-bold">{stat.after}</span>
                    </div>
                    <p className="text-xs text-muted font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-accent pl-6 py-3 bg-accent/5 rounded-r-xl">
                <p className="font-display text-xl font-bold text-text">&ldquo;I went from hoping for referrals to turning down jobs because I&apos;m booked out weeks in advance.&rdquo;</p>
                <cite className="text-accent text-sm font-semibold mt-2 block not-italic">— Tint shop owner, Phoenix AZ</cite>
              </blockquote>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200">
                <Image
                  src="/images/optimized/shop-interior.jpg"
                  alt="Busy tint shop interior with multiple vehicles being tinted including Tesla and Porsche"
                  width={700}
                  height={470}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-200">
                <Image
                  src="/images/optimized/shop-floor.jpg"
                  alt="Professional window tint shop floor with BMW, Tesla, and SUV lined up for tinting"
                  width={700}
                  height={350}
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Marketing Results & Case Studies</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Shops That Went From Quiet to <span className="accent-gradient">Fully Booked</span>
            </h2>
            <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
              That&apos;s the process. Here&apos;s what it produced for real window tint and window film businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard slug="supreme-auto-tint-dallas" shopName="Supreme Auto Tint" city="Dallas, TX" problem="$0 from Google. Relying 100% on referrals." resultMetric="127 leads" resultLabel="in first 60 days" />
            <CaseStudyCard slug="crystal-clear-tint-phoenix" shopName="Crystal Clear Tint" city="Phoenix, AZ" problem="Spending $2,000/mo on ads with no tracking." resultMetric="#1 Maps" resultLabel="ceramic tint Phoenix" />
            <CaseStudyCard slug="elite-tint-pros-atlanta" shopName="Elite Tint Pros" city="Atlanta, GA" problem="Invisible on Google Maps. Competitor dominated." resultMetric="30+ calls/wk" resultLabel="up from 5 calls/week" />
          </div>
          <div className="text-center mt-12">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
              See All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <FAQAccordion />

      {/* Final CTA */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-accent-light" />
            <span className="text-accent-light text-xs font-bold uppercase tracking-widest">Ready When You Are</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white mb-3">
            Stop Losing Leads.
          </h2>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
            <span className="accent-gradient">Start Booking 30+ Jobs/Month.</span>
          </h3>
          <p className="text-slate-400 text-center mb-10 text-lg">
            Free 14-day trial. We build your campaigns, set up your CRM, and start driving leads — before you pay a dollar.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
