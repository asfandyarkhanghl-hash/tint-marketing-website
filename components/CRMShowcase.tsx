'use client'

import { motion } from 'framer-motion'
import { Phone, MessageSquare, Users, BarChart3, GitBranch, Calendar, Bot, Zap } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const pipelineStages = [
  { label: 'New Lead', count: 12, color: 'bg-blue-500' },
  { label: 'Qualified', count: 8, color: 'bg-yellow-500' },
  { label: 'Quoted', count: 5, color: 'bg-purple-500' },
  { label: 'Booked', count: 3, color: 'bg-green-500' },
  { label: 'Completed', count: 14, color: 'bg-accent' },
]

const crmFeatures = [
  { icon: Phone, title: 'Call Recording & Tracking', desc: 'Every inbound call recorded and tagged to its ad source' },
  { icon: MessageSquare, title: 'AI Chat & SMS', desc: '24/7 AI chatbot qualifies leads and books appointments' },
  { icon: Users, title: 'Contact Management', desc: 'Full customer database with vehicle history and preferences' },
  { icon: BarChart3, title: 'Revenue Attribution', desc: 'See exactly which campaigns generate booked jobs and revenue' },
  { icon: GitBranch, title: 'Visual Pipelines', desc: 'Drag-and-drop pipeline from lead to completed job' },
  { icon: Calendar, title: 'Smart Scheduling', desc: 'Online booking synced with your shop calendar and bay availability' },
  { icon: Bot, title: 'Lead Scoring AI', desc: 'Every lead scored by service type, budget, vehicle, and urgency' },
  { icon: Zap, title: 'Automation Workflows', desc: 'Auto follow-up texts, review requests, and appointment reminders' },
]

export default function CRMShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Lead Management & CRM</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Your Entire Lead Pipeline, <span className="accent-gradient">Automated</span>
          </h2>
          <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">From the moment someone searches &ldquo;ceramic tint near me&rdquo; to the moment they leave a 5-star review — we track and manage every step.</p>
        </div>

        {/* Pipeline */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg font-bold">Sales Pipeline</h3>
              <span className="text-accent text-xs font-semibold bg-accent/5 border border-accent/10 rounded-full px-3 py-1">Live View</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {pipelineStages.map((stage, i) => (
                <motion.div key={stage.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex-1 min-w-[130px]">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${stage.color}`} />
                      <span className="text-xs text-muted font-medium">{stage.label}</span>
                    </div>
                    <p className="font-display text-3xl font-bold">{stage.count}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {crmFeatures.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-bold text-sm mb-1.5">{f.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/platform" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
            Explore Full Platform <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
