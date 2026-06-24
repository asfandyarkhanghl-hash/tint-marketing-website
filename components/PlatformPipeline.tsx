'use client'

import { motion } from 'framer-motion'

const stages = [
  {
    label: 'New Lead',
    color: 'border-blue-500',
    dot: 'bg-blue-500',
    leads: [
      { name: 'John D.', vehicle: 'Tesla Model 3', service: 'Ceramic Tint', value: '$650' },
      { name: 'Maria S.', vehicle: 'BMW X5', service: 'Full Vehicle', value: '$800' },
      { name: 'Tyler R.', vehicle: 'Honda Accord', service: 'Carbon Tint', value: '$350' },
    ],
  },
  {
    label: 'AI Qualified',
    color: 'border-yellow-500',
    dot: 'bg-yellow-500',
    leads: [
      { name: 'Sarah M.', vehicle: 'Audi Q7', service: 'Ceramic + PPF', value: '$1,200' },
      { name: 'Kevin L.', vehicle: 'Ford F-150', service: 'Full Ceramic', value: '$550' },
    ],
  },
  {
    label: 'Quote Sent',
    color: 'border-purple-500',
    dot: 'bg-purple-500',
    leads: [
      { name: 'Amanda R.', vehicle: 'Mercedes GLE', service: 'Ceramic Tint', value: '$700' },
      { name: 'Chris B.', vehicle: 'Residential — 12 windows', service: 'Solar Film', value: '$2,400' },
    ],
  },
  {
    label: 'Booked',
    color: 'border-green-500',
    dot: 'bg-green-500',
    leads: [
      { name: 'David P.', vehicle: 'Toyota Camry', service: 'Carbon Tint', value: '$380' },
    ],
  },
  {
    label: 'Completed',
    color: 'border-accent',
    dot: 'bg-accent',
    leads: [
      { name: 'Lisa K.', vehicle: 'Range Rover', service: 'Full Ceramic', value: '$900' },
      { name: 'Mark W.', vehicle: 'Porsche 911', service: 'Ceramic + Windshield', value: '$1,100' },
    ],
  },
]

export default function PlatformPipeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.04),transparent_50%)]" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Sales Pipeline
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            See Every Deal from{' '}
            <span className="accent-gradient">Lead to Revenue</span>
          </h2>
          <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
            Visual, drag-and-drop pipeline with automated stage progression. Leads move through your pipeline automatically based on actions they take.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto pb-4"
        >
          <div className="flex gap-4 min-w-[900px]">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-1 min-w-[200px]"
              >
                <div className={`glass-card rounded-2xl p-5 border-t-2 ${stage.color}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${stage.dot}`} />
                      <span className="text-xs font-semibold text-text">{stage.label}</span>
                    </div>
                    <span className="text-[10px] text-muted bg-surface2/50 rounded-full px-2 py-0.5">
                      {stage.leads.length}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {stage.leads.map((lead, j) => (
                      <motion.div
                        key={lead.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05 }}
                        className="bg-surface/60 border border-border/50 rounded-xl p-3 hover:border-accent/20 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-[9px] text-accent font-bold">
                            {lead.name[0]}
                          </div>
                          <span className="text-xs font-medium text-text">{lead.name}</span>
                        </div>
                        <p className="text-[10px] text-muted">{lead.vehicle}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[9px] text-muted">{lead.service}</span>
                          <span className="text-[10px] font-bold text-accent">{lead.value}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
