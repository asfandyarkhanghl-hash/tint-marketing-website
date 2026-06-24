import type { Metadata } from 'next'
import { Shield, Eye, Target } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'About Tint Marketing Pro',
  description: 'We exclusively serve window tint shops with Google Ads, SEO, and Maps ranking. 63+ tint shops served. Learn our story and values.',
  keywords: [
    'about tint marketing pro',
    'window tint marketing agency',
    'tint shop marketing specialists',
    'niche marketing agency tint',
    'window tint advertising experts',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/about',
  },
  openGraph: {
    title: 'About Tint Marketing Pro',
    description: 'We exclusively serve window tint shops with Google Ads, SEO, and Maps ranking. 63+ tint shops served nationwide.',
    url: 'https://tintmarketingpros.online/about',
    type: 'website',
  },
}

const values = [
  { icon: Target, title: 'Niche Expertise', description: 'We know your keywords, your customers, your seasonality. We have managed campaigns for 63+ tint shops and have more tint industry data than any general agency ever will.' },
  { icon: Eye, title: 'Radical Transparency', description: 'You see every dollar spent, every lead generated, every keyword performing. No black-box reports. No vanity metrics. You log into your dashboard and see exactly what is happening.' },
  { icon: Shield, title: 'Results or Nothing', description: 'If you do not see measurable improvement in 30 days, you do not pay. We do not lock you into contracts because we do not need to — our results keep clients around.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">About Us</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            We Only Work With Window Tint Shops. <span className="accent-gradient">That&apos;s the Point.</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-muted text-xl leading-relaxed mb-6">
            Window tint shops do exceptional work — ceramic installs, carbon applications, PPF layering — but most of them struggle with one thing: getting the phone to ring consistently.
          </p>
          <p className="text-muted text-xl leading-relaxed">
            We exist to fix that. Tint Marketing Pro is the only marketing agency in the country built from the ground up for window tint businesses. Every keyword we target, every ad we write, every optimization we make is informed by years of data from tint shops across 23 states.
          </p>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8">The Founding Story</h2>
          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              In 2021, our founder was running a general digital marketing agency. One of his clients was a ceramic tint installer in Phoenix — a shop doing outstanding work on high-end vehicles.
            </p>
            <p>
              The problem was obvious: a generic agency was managing his Google Ads using the same playbook they used for plumbers, dentists, and lawyers. The keywords were wrong. The negative keyword list was nonexistent. The landing page was his homepage. He was burning $1,500 a month with nothing to show for it.
            </p>
            <p>
              We rebuilt everything from scratch. Tint-specific keywords. A negative keyword list of 47 terms that eliminated DIY and informational traffic. A landing page built to convert tint buyers.
            </p>
            <p className="text-text font-medium">
              Within 30 days, his cost per lead dropped from $80 to $12. He was booking 3 weeks out. His phone would not stop ringing.
            </p>
            <p>
              That result led to a second tint shop, then a third. Each time, the same pattern emerged: tint shops have completely unique marketing needs that generic agencies cannot address. Different keywords, different customer behavior, different seasonality, different conversion paths.
            </p>
            <p>
              So we made a decision: stop working with every other industry and go all-in on window tint. We closed out our other clients, renamed the agency, and built Tint Marketing Pro.
            </p>
            <p className="text-text font-medium">
              Today we serve 63+ tint shops across 23 states. Our average cost per lead is $12. Our average client stays for 14 months — not because of contracts, but because of results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="accent-gradient">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-text mb-3">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold mb-8">Who We Are <span className="accent-gradient">Not</span> For</h2>
          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-2xl p-8">
              <h3 className="font-bold text-text mb-2">If you are a PPF-only shop</h3>
              <p className="text-muted text-sm">We can help, but our system is built for tint-first businesses. If window tinting is a significant part of your revenue, we are a great fit. If you do exclusively PPF with no tint, we may not be the best match.</p>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-8">
              <h3 className="font-bold text-text mb-2">If you want slow, polite updates and no accountability</h3>
              <p className="text-muted text-sm">We send you real data, not fluff. If a campaign is not working, we tell you directly and change course immediately. We are not interested in collecting a retainer while your phone stays quiet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Our <span className="accent-gradient">Results Guarantee</span>
          </h2>
          <div className="bg-white border-2 border-accent/30 rounded-2xl p-10 max-w-2xl mx-auto">
            <p className="text-text text-xl leading-relaxed">
              If you do not see a measurable increase in qualified leads within 30 days of working with us, you pay nothing. Zero. No fine print. No exceptions.
            </p>
            <p className="text-muted text-sm mt-6">
              We can make this guarantee because we have done this 63 times and we know the playbook works. Your market is not different — it is just untapped.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
