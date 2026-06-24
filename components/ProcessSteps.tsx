'use client'

import { motion } from 'framer-motion'
import { Search, Target, Zap } from 'lucide-react'

const steps = [
  { icon: Search, number: '01', title: 'Tint Intelligence Audit', description: 'We map every keyword your local competitors rank for, every ad they\'re running, every backlink they have. You see the full battlefield before we spend a dollar.' },
  { icon: Target, number: '02', title: 'Precision Traffic System', description: 'We run Google Ads with tint-specific negative keywords that eliminate 60%+ of wasted spend. Every dollar targets someone ready to book.' },
  { icon: Zap, number: '03', title: 'The 5-Minute Follow-Up', description: 'When a lead comes in, our system notifies you and auto-sends a response within 5 minutes. Speed wins. The first shop to respond gets the job 78% of the time.' },
]

export default function ProcessSteps() {
  return (
    <section className="py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent-light text-sm font-bold uppercase tracking-widest mb-3">Our Method</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            The Tint Marketing Pro <span className="accent-gradient">Method</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-20 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.5 }} className="relative text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6 relative">
                <step.icon className="w-7 h-7 text-accent-light" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red text-white text-xs font-bold flex items-center justify-center">{step.number}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 bg-white/5 border border-accent/20 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <p className="text-red font-bold text-lg mb-3">We Promise This:</p>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            If you don&apos;t see a measurable increase in qualified leads within 30 days, you pay nothing. Zero. No fine print.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
