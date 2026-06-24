'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowDown, DollarSign, Phone, Calendar, TrendingUp } from 'lucide-react'

export default function LeadMathSection() {
  return (
    <section className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-accent-light text-sm font-bold uppercase tracking-widest mb-3">The Lead Math</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Here&apos;s What <span className="accent-gradient">30 Leads/Month</span> Looks Like
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-xl mx-auto">
            Real numbers from our average tint shop client. This is not a best-case scenario — this is the typical outcome.
          </p>
        </div>

        {/* The Funnel */}
        <div className="max-w-lg mx-auto">
          {[
            { icon: DollarSign, label: 'You invest', value: '$500–$1,500/mo', sub: 'in Google Ads spend', color: 'border-slate-500' },
            { icon: Phone, label: 'We generate', value: '30–40 leads', sub: 'calls, forms, and chat inquiries', color: 'border-accent' },
            { icon: Calendar, label: 'You book', value: '15–20 appointments', sub: 'at ~50% booking rate', color: 'border-blue-400' },
            { icon: TrendingUp, label: 'You earn', value: '$6,000–$16,000', sub: 'at $400 avg. ticket × 15–20 jobs', color: 'border-green-500' },
          ].map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className={`bg-white/5 border ${step.color} rounded-2xl p-6 flex items-center gap-5`}>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">{step.label}</p>
                  <p className="font-display text-2xl md:text-3xl font-bold text-white">{step.value}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{step.sub}</p>
                </div>
              </div>
              {i < 3 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="w-5 h-5 text-slate-600" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ROI callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center max-w-lg mx-auto"
        >
          <p className="text-accent-light text-sm font-bold uppercase tracking-wider mb-2">That&apos;s a return of</p>
          <p className="font-display text-5xl md:text-6xl font-bold text-white">5x – 10x</p>
          <p className="text-slate-400 mt-2">on every dollar you spend with us</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 text-sm mb-4">What would 30+ new customers a month do for your shop?</p>
          <Link href="/free-trial" className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-accent/20">
            Get My 30+ Leads/Month <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
