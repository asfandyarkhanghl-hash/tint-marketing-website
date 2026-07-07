import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Search, MapPin, TrendingUp, Share2, Bot, Users, ArrowRight } from 'lucide-react'
import CTABanner from '@/components/CTABanner'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Window Tint Shop Marketing Services',
  description: 'Lead generation, lead management, and AI systems built exclusively for window tint shops — Google Ads, Local SEO, CRM, and AI chatbots. Free trial available.',
  keywords: [
    'window tint marketing services',
    'tint shop advertising',
    'window tint Google Ads',
    'tint shop SEO',
    'window tint lead generation',
    'tint shop lead management',
    'AI for tint shops',
    'tint business marketing',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/services',
  },
  openGraph: {
    title: 'Window Tint Shop Marketing Services',
    description: 'Lead generation, lead management, and AI systems built exclusively for window tint shops.',
    url: 'https://tintmarketingpros.online/services',
    type: 'website',
  },
}

const pillars = [
  {
    label: 'Pillar 1',
    title: 'Lead Generation',
    subtitle: 'Get found by buyers actively searching for tint services in your city.',
    services: [
      { icon: Search, title: 'Google Ads for Tint Shops', description: 'Precision-targeted campaigns that put your shop in front of buyers searching "ceramic tint near me" and "window tint [your city]". Tint-specific negative keywords eliminate 60% of wasted spend.', stats: 'Average $12 cost per lead', href: '/services/google-ads', image: '/images/services/google-ads-tint-shop.jpg', alt: 'Tint shop owner reviewing Google Ads performance beside a freshly tinted vehicle' },
      { icon: MapPin, title: 'Google Maps Ranking (Local SEO)', description: 'We optimize your Google Business Profile, build citations, and generate reviews to get you into the top 3 map pack — where 73% of local tint bookings happen.', stats: 'Top 3 within 30–60 days', href: '/services/shop-ranking', image: '/images/services/google-maps-tint-shop.jpg', alt: 'Window tint shop owner reviewing Google Maps rankings on a tablet' },
      { icon: TrendingUp, title: 'Shop SEO & Website Ranking', description: 'Long-term organic traffic strategy targeting keywords your competitors overlook. Content, backlinks, and technical SEO that compound month over month.', stats: 'Page 1 rankings in 60 days', href: '/services/seo', image: '/images/services/seo-tint-shop.jpg', alt: 'Tint shop owner planning local SEO content at the front desk' },
      { icon: Share2, title: 'Social Media & Retargeting', description: 'Before/after content, Meta Ads for lookalike audiences, and retargeting campaigns that bring back visitors who browsed but never booked.', stats: '3x return on ad spend average', href: '/services/social-media', image: '/images/services/social-media-tint-shop.jpg', alt: 'Marketer creating before and after window tint social content' },
    ],
  },
  {
    label: 'Pillar 2',
    title: 'Lead Management',
    subtitle: 'Catch, track, and convert every lead so your marketing spend never leaks.',
    services: [
      { icon: Users, title: 'Lead Management & CRM', description: 'Unified lead inbox, call tracking and recording, missed-call text-back, visual sales pipelines, and full revenue attribution — every lead tracked from first click to booked job.', stats: '3.2 min average response time', href: '/services/lead-management', image: '/images/services/lead-management-tint-shop.jpg', alt: 'Tint shop manager tracking calls and leads in a CRM dashboard' },
    ],
  },
  {
    label: 'Pillar 3',
    title: 'AI Systems',
    subtitle: 'Automate the follow-up, qualification, and booking work you cannot do at 2 AM.',
    services: [
      { icon: Bot, title: 'AI Systems for Tint Shops', description: 'A 24/7 AI chatbot and voice agent that answers tint questions, filters out tire-kickers, scores real buyers, and books appointments while you are mid-install or asleep.', stats: '24/7 lead capture', href: '/services/ai-systems', image: '/images/services/ai-systems-tint-shop.jpg', alt: 'Window tint shop owner reviewing AI lead capture after hours' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Marketing Built for <span className="accent-gradient">Tint Shops</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              Every service we offer falls into three pillars: get more leads, never lose a single one, and automate the busywork with AI. No templates. No generic playbooks. Just strategies that work for your industry.
            </p>
          </div>
        </div>
      </section>

      {pillars.map((pillar, pIndex) => (
        <section key={pillar.title} className={`py-24 ${pIndex % 2 === 0 ? 'bg-surface' : 'bg-primary'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">{pillar.label}</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">{pillar.title}</h2>
              <p className="text-muted text-lg max-w-2xl">{pillar.subtitle}</p>
            </div>
            <div className="space-y-8">
              {pillar.services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col md:flex-row items-start gap-8 bg-white border border-slate-200 rounded-2xl p-8 md:p-12 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-full md:w-64 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        width={1586}
                        height={992}
                        sizes="(min-width: 768px) 16rem, 100vw"
                        className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-sm">
                        <service.icon className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-text mb-3">{service.title}</h3>
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
      ))}

      <CTABanner />
    </>
  )
}
