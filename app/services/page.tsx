import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, MapPin, TrendingUp, Share2, ArrowRight } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Marketing Services for Window Tint Shops',
  description: 'Google Ads, Local SEO, Google Maps ranking, and social media marketing built exclusively for window tint shops. See what we offer.',
}

const services = [
  {
    icon: Search,
    title: 'Google Ads for Tint Shops',
    description: 'Precision-targeted campaigns that put your shop in front of buyers searching "ceramic tint near me" and "window tint [your city]". We use tint-specific negative keywords to eliminate 60% of wasted spend.',
    stats: 'Average $12 cost per lead',
    href: '/services/google-ads',
  },
  {
    icon: MapPin,
    title: 'Google Maps Ranking (Local SEO)',
    description: 'We optimize your Google Business Profile, build citations, and generate reviews to get you into the top 3 map pack — where 73% of local tint bookings happen.',
    stats: 'Top 3 within 30–60 days',
    href: '/services/shop-ranking',
  },
  {
    icon: TrendingUp,
    title: 'Shop SEO & Website Ranking',
    description: 'Long-term organic traffic strategy targeting keywords your competitors overlook. Content, backlinks, and technical SEO that compound month over month.',
    stats: 'Page 1 rankings in 60 days',
    href: '/services/seo',
  },
  {
    icon: Share2,
    title: 'Social Media & Retargeting',
    description: 'Before/after content, Meta Ads for lookalike audiences, and retargeting campaigns that bring back visitors who browsed but never booked.',
    stats: '3x return on ad spend average',
    href: '/services/social-media',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Marketing Built for <span className="accent-gradient">Tint Shops</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              Every service we offer was designed from the ground up for window tint businesses. No templates. No generic playbooks. Just strategies that work for your industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col md:flex-row items-start gap-8 bg-surface2 border border-border rounded-2xl p-8 md:p-12 hover:border-accent/30 transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-text mb-3">{service.title}</h2>
                      <p className="text-muted leading-relaxed mb-4">{service.description}</p>
                      <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full">
                        {service.stats}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
