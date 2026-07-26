import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceHeroImage from '@/components/ServiceHeroImage'
import Reveal from '@/components/Reveal'
import { ServiceSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Social Media Marketing for Tint Shops',
  description: 'Meta Ads and social media marketing for window tint shops. Before/after content, retargeting, and 3x ROAS average. Turn scrollers into bookings.',
  keywords: [
    'tint shop social media marketing',
    'window tint Facebook Ads',
    'tint shop Instagram marketing',
    'window tint Meta Ads',
    'tint shop retargeting',
    'social media tint business',
    'window film facebook ads',
    'window tint social media agency',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/services/social-media',
  },
  openGraph: {
    title: 'Social Media Marketing for Tint Shops',
    description: 'Meta Ads and social media marketing for window tint shops. Before/after content, retargeting, and 3x ROAS average.',
    url: 'https://tintmarketingpros.online/services/social-media',
    type: 'website',
  },
}

export default function SocialMediaPage() {
  return (
    <>
      <ServiceSchema
        name="Social Media Marketing for Window Tint Shops"
        description="Meta Ads, before/after content strategy, and retargeting campaigns built for window tint shops."
        url="https://tintmarketingpros.online/services/social-media"
      />

      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'Social Media', href: '/services/social-media' }]} />
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div className="max-w-3xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Social & Retargeting</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                Turn Scrollers Into <span className="accent-gradient">Bookings</span>
              </h1>
              <p className="text-muted text-xl leading-relaxed">
                Before/after tint photos stop thumbs. Meta Ads with retargeting bring back the 97% of visitors who leave your site without calling. We handle the creative, targeting, and optimization.
              </p>
            </div>
            <ServiceHeroImage
              src="/images/services/social-media-tint-shop.jpg"
              alt="Marketer capturing before and after window tint content in an installation bay"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Why Social Media Works for <span className="accent-gradient">Tint Shops</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Visual Product', detail: 'Window tint and window film transformations are inherently shareable. Before/after photos generate 3x more engagement than text posts for our clients.' },
              { title: 'Local Targeting', detail: 'Meta Ads let us target homeowners and car enthusiasts within a 15-mile radius of your shop. No wasted impressions on people outside your service area.' },
              { title: 'Retargeting Power', detail: '97% of website visitors leave without booking. Retargeting ads follow them on Instagram and Facebook, keeping your shop top-of-mind until they are ready.' },
            ].map((item) => (
              <div key={item.title} className="card-hover bg-white border border-slate-200 rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-text mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-24 bg-primary">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            What We <span className="accent-gradient">Handle</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Content Creation', items: ['Before/after photo templates', 'Educational carousel posts', 'Short-form video editing', 'Seasonal promotion graphics'] },
              { title: 'Paid Advertising', items: ['Meta Ads (Facebook + Instagram)', 'Lookalike audience targeting', 'Retargeting pixel setup', 'A/B testing ad creative'] },
              { title: 'Community Management', items: ['Comment responses', 'DM handling and lead routing', 'Review sharing on social', 'Local community engagement'] },
              { title: 'Reporting & Analytics', items: ['Monthly performance reports', 'Cost per lead tracking', 'Audience growth metrics', 'Content performance analysis'] },
            ].map((category) => (
              <div key={category.title} className="card-hover bg-surface border border-border rounded-2xl p-8">
                <h3 className="font-display text-lg font-bold text-accent mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4 text-center">Related Reading</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/window-tint-facebook-ads-strategy" className="card-hover group flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all">
              <span className="text-sm font-semibold text-text">Facebook &amp; Instagram ads playbook</span>
              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/blog/email-sms-marketing-window-tint-film-businesses" className="card-hover group flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all">
              <span className="text-sm font-semibold text-text">Email &amp; SMS marketing for tint &amp; film businesses</span>
              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <Reveal className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Get More <span className="accent-gradient">Eyes on Your Work</span>
          </h2>
          <p className="text-muted text-center mb-10">Start your free trial and we will set up your retargeting pixel and first ad campaign.</p>
          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <LeadForm />
          </div>
        </Reveal>
      </section>
    </>
  )
}
