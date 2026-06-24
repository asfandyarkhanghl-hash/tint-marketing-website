'use client'

import { motion } from 'framer-motion'
import { Zap, Clock, Brain, Shield, Eye, Smartphone } from 'lucide-react'

const features = [
  { icon: Brain, title: 'AI-Powered Lead Qualification', description: 'Our AI scores every lead in under 30 seconds. Service type, vehicle, budget, and urgency — all analyzed before your team picks up the phone.', highlight: 'Prioritize ceramic tint leads automatically' },
  { icon: Clock, title: '5-Minute Response Guarantee', description: 'When a lead comes in, our system auto-texts them, notifies your team, and routes to the AI chatbot if nobody answers. Speed wins.', highlight: 'Average response: 2.3 minutes' },
  { icon: Zap, title: 'Automation That Runs Your Shop', description: 'Appointment confirmations, review request texts, re-engagement campaigns for past customers, and missed-call auto-callbacks.', highlight: '15+ automated workflows included' },
  { icon: Smartphone, title: 'Mobile Dashboard', description: 'Check leads, listen to call recordings, see your pipeline, and track revenue from your phone. Push notifications on every new lead.', highlight: 'Real-time notifications on every lead' },
  { icon: Eye, title: 'Total Transparency', description: 'Every dollar tracked. Every lead attributed. Every campaign measured. See cost per lead, cost per booked job, and ROI in real-time.', highlight: 'No black-box reporting' },
  { icon: Shield, title: 'Results Guarantee', description: 'If you do not see a measurable increase in qualified leads within 30 days, you pay nothing. Zero. No fine print.', highlight: 'Risk-free for your tint shop' },
]

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-red text-sm font-bold uppercase tracking-widest mb-3">Why Tint Shops Choose Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Built Different. <span className="accent-gradient">Built for Tint.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 group hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <f.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{f.description}</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red" />
                <span className="text-red text-xs font-semibold">{f.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
