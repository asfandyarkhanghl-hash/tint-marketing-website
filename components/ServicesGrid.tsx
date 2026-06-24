'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, MapPin, TrendingUp, Share2, Bot, CalendarCheck, Filter, UserCheck, BarChart3, GitBranch, ArrowRight } from 'lucide-react'

const services = [
  { icon: Search, title: 'Google Ads', description: 'Precision campaigns targeting "ceramic tint near me" with tint-specific negative keywords that eliminate 60%+ waste.', href: '/services/google-ads', stat: '$12 avg. cost per lead' },
  { icon: MapPin, title: 'Google Maps Ranking', description: 'We get you into the top 3 map pack where 73% of local tint bookings happen.', href: '/services/shop-ranking', stat: 'Top 3 in 30–60 days' },
  { icon: TrendingUp, title: 'SEO & Website Ranking', description: 'Long-term organic traffic from buyer-intent keywords your competitors ignore entirely.', href: '/services/seo', stat: 'Page 1 in under 60 days' },
  { icon: Share2, title: 'Social Media & Retargeting', description: 'Before/after content and Meta Ads that retarget the 97% who browse but never book.', href: '/services/social-media', stat: '3x return on ad spend' },
  { icon: Bot, title: 'AI Chatbot for Tint Shops', description: 'A 24/7 AI assistant on your website that answers tint questions, captures lead info, and books appointments while you sleep.', href: '/platform', stat: 'Captures leads 24/7' },
  { icon: CalendarCheck, title: 'Auto Booking System', description: 'Leads book directly into your calendar. No phone tag, no back-and-forth texts. Syncs with your shop schedule in real-time.', href: '/platform', stat: '40% faster booking rate' },
  { icon: Filter, title: 'Auto Lead Filtering', description: 'Our AI filters out tire-kickers, spam, and low-intent inquiries so your team only sees qualified, ready-to-book leads.', href: '/platform', stat: 'Eliminates 80% of junk' },
  { icon: UserCheck, title: 'Auto Lead Qualification', description: 'Every lead gets scored by service type, budget, vehicle, and urgency. High-value ceramic tint leads get flagged for priority.', href: '/platform', stat: 'AI-scored in 30 seconds' },
  { icon: BarChart3, title: 'CRM & Call Reporting', description: 'Full CRM with call recording, lead source tracking, and revenue attribution. See exactly which campaigns drive revenue.', href: '/platform', stat: 'Every lead tracked' },
  { icon: GitBranch, title: 'Sales Pipelines', description: 'Visual pipeline from new lead → qualified → quoted → booked → completed. Drag-and-drop with automated stage triggers.', href: '/platform', stat: 'Full deal visibility' },
]

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Everything Your Tint Shop Needs to <span className="accent-gradient">Dominate</span>
          </h2>
          <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">Marketing, automation, and lead management — built from the ground up for window tint businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.4 }}>
              <Link href={service.href} className="block bg-white border border-slate-200 rounded-2xl p-7 h-full group transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-[10px] text-accent font-semibold bg-accent/5 border border-accent/10 rounded-full px-2.5 py-1">{service.stat}</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">View All Services <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </section>
  )
}
