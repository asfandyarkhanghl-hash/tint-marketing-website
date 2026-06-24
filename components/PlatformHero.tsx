'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function PlatformHero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.04] rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: 'linear-gradient(rgba(37,99,235,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent text-xs font-semibold tracking-wide">ALL-IN-ONE PLATFORM</span>
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            CRM, Automation &<br />
            Reporting Built for{' '}
            <span className="accent-gradient glow-text">Tint Shops</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            AI chatbot, auto-booking, lead qualification, sales pipelines, reputation management,
            invoicing, and campaign analytics — one platform that replaces 12 tools.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/free-trial"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-accent/25 glow-box"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center border border-border-light text-text hover:border-accent/40 hover:bg-accent/5 font-semibold px-8 py-4 rounded-xl text-lg transition-all"
            >
              See a Live Demo
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {['Replaces 12+ tools', 'Set up in 48 hours', 'No contracts', 'Mobile app included'].map((pill) => (
              <span key={pill} className="flex items-center gap-1.5 text-xs text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="glow-border rounded-2xl overflow-hidden bg-surface p-1">
            <div className="bg-[#0B0B1E] rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-surface2 rounded-md px-3 py-1 text-xs text-muted/50 text-center max-w-xs mx-auto">
                    app.tintmarketingpro.com/dashboard
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'New Leads Today', value: '14', change: '+23%', color: 'text-accent' },
                    { label: 'Appointments', value: '8', change: '+12%', color: 'text-green-400' },
                    { label: 'Revenue (MTD)', value: '$47,200', change: '+31%', color: 'text-accent' },
                    { label: 'Review Rating', value: '4.9★', change: '+0.2', color: 'text-yellow-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-surface2/50 border border-border rounded-xl p-4">
                      <p className="text-muted text-[10px] uppercase tracking-wider">{stat.label}</p>
                      <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                      <p className="text-green-400 text-[10px] mt-1">{stat.change} ↑</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Pipeline mini */}
                  <div className="bg-surface2/30 border border-border rounded-xl p-4 md:col-span-2">
                    <p className="text-muted text-[10px] uppercase tracking-wider mb-3">Pipeline — This Week</p>
                    <div className="flex gap-2">
                      {[
                        { stage: 'New', count: 12, w: 'w-full' },
                        { stage: 'Qualified', count: 8, w: 'w-4/5' },
                        { stage: 'Quoted', count: 5, w: 'w-3/5' },
                        { stage: 'Booked', count: 3, w: 'w-2/5' },
                      ].map((s) => (
                        <div key={s.stage} className="flex-1">
                          <div className="h-16 bg-accent/10 border border-accent/20 rounded-lg flex items-end p-2">
                            <div className={`${s.w} bg-accent/30 rounded h-full`} />
                          </div>
                          <p className="text-[9px] text-muted text-center mt-1">{s.stage} ({s.count})</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent activity */}
                  <div className="bg-surface2/30 border border-border rounded-xl p-4">
                    <p className="text-muted text-[10px] uppercase tracking-wider mb-3">Live Activity</p>
                    <div className="space-y-2">
                      {[
                        { text: 'New lead from Google Ads', time: '2m ago', dot: 'bg-accent' },
                        { text: 'Appointment booked', time: '8m ago', dot: 'bg-green-500' },
                        { text: '5-star review received', time: '15m ago', dot: 'bg-yellow-500' },
                        { text: 'Invoice paid — $450', time: '22m ago', dot: 'bg-purple-500' },
                        { text: 'AI chatbot qualified lead', time: '31m ago', dot: 'bg-accent' },
                      ].map((a, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${a.dot} flex-shrink-0`} />
                          <p className="text-[10px] text-text/80 flex-1 truncate">{a.text}</p>
                          <p className="text-[9px] text-muted flex-shrink-0">{a.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
