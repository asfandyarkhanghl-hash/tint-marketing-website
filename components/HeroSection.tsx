'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, PhoneCall, Users, MapPin, DollarSign } from 'lucide-react'

const proofPoints = [
  { icon: PhoneCall, value: '30–40', label: 'Leads/Month', sub: 'Guaranteed minimum' },
  { icon: Users, value: '3x', label: 'More Walk-Ins', sub: 'Average increase' },
  { icon: MapPin, value: 'Top 3', label: 'Google Maps', sub: 'In 30–60 days' },
  { icon: DollarSign, value: '$12', label: 'Per Lead', sub: 'Average cost' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(#1D4ED8 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-red/5 border border-red/15 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-2 h-2 bg-red rounded-full animate-pulse" />
                <span className="text-red text-xs font-bold tracking-wide uppercase">Limited spots — 5 cities left this month</span>
              </motion.div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-[64px] font-bold leading-[1.08]">
                We Get Your
                <br />
                Tint Shop
                <br />
                <span className="accent-gradient">30–40 Leads</span>
                <br />
                Every Month.
              </h1>

              <p className="mt-6 text-lg text-text-secondary max-w-lg leading-relaxed">
                More phone calls. More walk-ins. More booked appointments.
                We fill your schedule with <strong className="text-text">real customers ready to buy</strong> — not
                tire-kickers, not spam, not &ldquo;just browsing.&rdquo;
              </p>

              <div className="mt-8 grid grid-cols-4 gap-3">
                {proofPoints.map((p, i) => (
                  <motion.div key={p.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-surface border border-slate-200 rounded-xl p-3 text-center"
                  >
                    <p.icon className="w-4 h-4 text-accent mx-auto mb-1.5" />
                    <p className="font-display text-xl font-bold text-accent leading-none">{p.value}</p>
                    <p className="text-[10px] font-semibold text-text mt-1">{p.label}</p>
                    <p className="text-[9px] text-muted">{p.sub}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                className="mt-6 bg-accent/5 border border-accent/10 rounded-xl px-5 py-3 inline-flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">Average client invests $500–$1,500/mo in ad spend</p>
                  <p className="text-xs text-muted">Returns $8,000–$25,000/mo in booked jobs</p>
                </div>
              </motion.div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/free-trial" className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-accent/20">
                  Get My 30+ Leads/Month <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/book" className="inline-flex items-center justify-center border-2 border-dark/10 text-text hover:border-accent hover:text-accent font-semibold px-8 py-4 rounded-xl text-lg transition-all">
                  See If You Qualify
                </Link>
              </div>

              <div className="mt-5 flex flex-wrap gap-5">
                {['No contracts ever', '14-day free trial', 'Pay only for results', 'Tint shops only'].map((pill) => (
                  <span key={pill} className="flex items-center gap-1.5 text-xs text-muted font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />{pill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/60">
              <Image
                src="/images/optimized/hero-leads.jpg"
                alt="Tint shop owner receiving new leads on phone with lead notifications and growth chart showing 127 new leads this month"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-xl shadow-lg px-5 py-4 animate-float"
            >
              <p className="text-[10px] text-muted font-semibold uppercase tracking-wider">This Month</p>
              <p className="font-display text-3xl font-bold text-accent">42 Leads</p>
              <p className="text-green-600 text-xs font-semibold">+87% vs last month</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
