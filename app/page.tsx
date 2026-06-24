import { AlertTriangle, MapPin, Clock, PhoneCall, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import ResultsCounter from '@/components/ResultsCounter'
import ProcessSteps from '@/components/ProcessSteps'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import FAQAccordion from '@/components/FAQAccordion'
import LeadForm from '@/components/LeadForm'
import { OrganizationSchema, FAQSchema } from '@/components/SchemaMarkup'
import HeroSection from '@/components/HeroSection'
import ServicesGrid from '@/components/ServicesGrid'
import CRMShowcase from '@/components/CRMShowcase'
import FeaturesGrid from '@/components/FeaturesGrid'
import LeadMathSection from '@/components/LeadMathSection'

const painPoints = [
  { icon: AlertTriangle, title: 'Your phone should be ringing 30+ times a month', description: 'Most tint shops get 5–10 leads a month and call it "normal." It is not. With the right system, 30–40 qualified leads per month is the baseline — not the ceiling.' },
  { icon: MapPin, title: '73% of your leads are going to competitors', description: 'If you are not in the Google Maps top 3, you are invisible. Those customers are not going without tint — they are going to the shop that shows up first.' },
  { icon: Clock, title: 'Every missed call is $350+ walking out the door', description: 'You miss a call while tinting a car, they call the next shop. The average tint job is $350–$800. Lose 5 calls a week and that is $7,000/month gone.' },
]

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <FAQSchema />

      <HeroSection />
      <ResultsCounter />

      {/* Lead Promise Banner with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent rounded-3xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14 text-white relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-dark via-accent to-transparent lg:to-accent/80" />
                <div className="relative">
                  <PhoneCall className="w-10 h-10 mb-4 text-white/80" />
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                    We Guarantee 30–40 Qualified Leads Per Month
                  </h2>
                  <p className="text-white/80 text-lg mb-6">
                    Not impressions. Not clicks. Actual people calling your shop, filling out your form,
                    and ready to book a tint job. If we don&apos;t deliver, you don&apos;t pay.
                  </p>
                  <Link href="/free-trial" className="inline-flex items-center justify-center bg-white text-accent font-bold px-8 py-4 rounded-xl text-lg hover:bg-slate-50 transition-all">
                    Start Getting Leads <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <Image
                  src="/images/owner-leads.png"
                  alt="Tint shop owner excited about new lead notifications coming in on his phone"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-red text-sm font-bold uppercase tracking-widest mb-3">The Real Problem</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              You Are Losing <span className="red-gradient">$10K+/Month</span> in Missed Leads
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
        </div>
      </section>

      <LeadMathSection />
      <ServicesGrid />

      {/* CRM Section with Real Image */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Your Command Center</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                See Every Lead, Call & Dollar — <span className="accent-gradient">In One Dashboard</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Total Leads. Appointments booked. Revenue generated. Calls recorded. All tracked back to the exact ad that brought them in. No guesswork, no black-box reporting.
              </p>
              <div className="space-y-4">
                {[
                  '127 leads tracked with full source attribution',
                  '63 appointments booked automatically',
                  '$24,680 in revenue — every dollar traced to its campaign',
                  '89 calls recorded and scored for quality',
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
                  src="/images/owner-dashboard.png"
                  alt="Tint shop owner viewing CRM dashboard showing 127 total leads, 63 appointments, $24,680 revenue, and 89 calls with lead tracking charts"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Reporting Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200">
                <Image
                  src="/images/call-report.png"
                  alt="Call reporting dashboard showing 42 total calls with 95.24% answered rate and average call duration of 2 minutes 22 seconds"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Call Tracking & Reporting</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                42 Calls This Week. <span className="accent-gradient">95% Answered.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                This is real data from one of our tint shop clients last week. Every call tracked, recorded, and attributed to its source. You see exactly which campaigns drive phone calls — and which ones waste money.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '42', label: 'Calls this week' },
                  { value: '95%', label: 'Answer rate' },
                  { value: '2m 22s', label: 'Avg. call duration' },
                  { value: '34', label: 'First-time callers' },
                ].map((s) => (
                  <div key={s.label} className="bg-surface border border-slate-200 rounded-xl p-4 text-center">
                    <p className="font-display text-2xl font-bold text-accent">{s.value}</p>
                    <p className="text-xs text-muted font-medium mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CRMShowcase />
      <FeaturesGrid />

      {/* Shop Interior Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Built for Shops Like Yours</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                From 5 Calls a Week to <span className="accent-gradient">30+ Calls a Week</span>
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
                <p>In 2021, we started working with a ceramic tint installer in Phoenix. He did incredible work — ceramic, carbon, PPF — but his phone was silent.</p>
                <p>We rebuilt his entire system: tint-specific keywords, Google Maps domination, a 5-minute lead response system, and an AI chatbot that booked appointments at 2 AM.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 my-8">
                {[
                  { before: '5', after: '30+', label: 'Calls/Week' },
                  { before: '$80', after: '$12', label: 'Cost Per Lead' },
                  { before: '0', after: '127', label: 'Leads in 60 Days' },
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
                <p className="font-display text-xl font-bold text-text">&ldquo;I went from hoping for referrals to turning down jobs because I&apos;m booked out 3 weeks.&rdquo;</p>
                <cite className="text-accent text-sm font-semibold mt-2 block not-italic">— Marcus T., Phoenix AZ</cite>
              </blockquote>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200">
                <Image
                  src="/images/shop-interior.png"
                  alt="Busy tint shop interior with multiple vehicles being tinted including Tesla and Porsche"
                  width={700}
                  height={470}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-200">
                <Image
                  src="/images/shop-floor.png"
                  alt="Professional window tint shop floor with BMW, Tesla, and SUV lined up for tinting"
                  width={700}
                  height={350}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Stats Dashboard Visual */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Real-Time Analytics</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Your Growth, <span className="accent-gradient">Visualized</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
            Every lead, appointment, and dollar tracked in real-time. This is what your dashboard looks like after 60 days with us.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-200 max-w-3xl mx-auto">
            <Image
              src="/images/stats-dashboard.png"
              alt="Marketing dashboard showing 847 leads, 236 appointments, $128,420 revenue with growth charts and channel breakdown for a tint shop"
              width={900}
              height={550}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Case Studies</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Shops That Went From Quiet to <span className="accent-gradient">Fully Booked</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard slug="supreme-auto-tint-dallas" shopName="Supreme Auto Tint" city="Dallas, TX" problem="$0 from Google. Relying 100% on referrals." resultMetric="127 leads" resultLabel="in first 60 days" />
            <CaseStudyCard slug="crystal-clear-tint-phoenix" shopName="Crystal Clear Tint" city="Phoenix, AZ" problem="Spending $2,000/mo on ads with no tracking." resultMetric="#1 Maps" resultLabel="ceramic tint Phoenix" />
            <CaseStudyCard slug="elite-tint-pros-atlanta" shopName="Elite Tint Pros" city="Atlanta, GA" problem="Invisible on Google Maps. Competitor dominated." resultMetric="30+ calls/wk" resultLabel="up from 5 calls/week" />
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <FAQAccordion />

      {/* Final CTA */}
      <section className="py-24 section-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
