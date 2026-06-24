'use client'

import { motion } from 'framer-motion'

export default function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-75" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xl shadow-slate-200/50 p-1">
          <div className="bg-slate-50 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1 text-xs text-slate-400 text-center border border-slate-100">
                  dashboard.tintmarketingpro.com
                </div>
              </div>
            </div>

            <div className="p-5 bg-white space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-accent text-[10px] font-bold tracking-wider uppercase">TMP Dashboard</p>
                  <p className="text-slate-900 text-sm font-semibold mt-0.5">Monthly Overview</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-1 text-xs text-green-700 font-medium">
                  Live <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full ml-1 animate-pulse" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Leads', value: '847', change: '+23%' },
                  { label: 'Appointments', value: '236', change: '+18%' },
                  { label: 'Revenue', value: '$128K', change: '+31%' },
                ].map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.1 }}
                    className="bg-slate-50 border border-slate-100 rounded-xl p-3"
                  >
                    <p className="text-slate-500 text-[10px] uppercase tracking-wider">{s.label}</p>
                    <p className="text-slate-900 text-xl font-bold mt-1">{s.value}</p>
                    <p className="text-green-600 text-[10px] font-medium mt-0.5">{s.change} ↑</p>
                  </motion.div>
                ))}
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                className="bg-slate-50 border border-slate-100 rounded-xl p-4 h-28 relative overflow-hidden"
              >
                <p className="text-slate-500 text-[10px] uppercase tracking-wider mb-2">Lead Volume — 30 Days</p>
                <svg viewBox="0 0 400 60" className="w-full h-12">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path d="M0,50 Q30,45 60,40 T120,32 T180,28 T240,20 T300,16 T360,12 L400,8 L400,60 L0,60Z" fill="url(#chartGrad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} />
                  <motion.path d="M0,50 Q30,45 60,40 T120,32 T180,28 T240,20 T300,16 T360,12 L400,8" fill="none" stroke="#1D4ED8" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1.5, ease: "easeOut" }} />
                </svg>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="space-y-2">
                <p className="text-slate-500 text-[10px] uppercase tracking-wider">Recent Leads</p>
                {[
                  { name: 'John D.', service: 'Ceramic Tint — Tesla Model 3', time: 'Just now', status: 'New', statusColor: 'bg-blue-50 text-blue-700 border-blue-200' },
                  { name: 'Sarah M.', service: 'Full Vehicle — BMW X5', time: '3 min ago', status: 'Qualified', statusColor: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
                  { name: 'Mike R.', service: 'Residential — 8 Windows', time: '12 min ago', status: 'Booked', statusColor: 'bg-green-50 text-green-700 border-green-200' },
                ].map((lead, i) => (
                  <motion.div key={lead.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 + i * 0.15 }}
                    className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-lg px-3 py-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-[10px] text-accent font-bold">{lead.name[0]}</div>
                      <div>
                        <p className="text-slate-900 text-xs font-semibold">{lead.name}</p>
                        <p className="text-slate-500 text-[10px]">{lead.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${lead.statusColor}`}>{lead.status}</span>
                      <p className="text-slate-400 text-[9px] mt-0.5">{lead.time}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2, duration: 0.5 }}
        className="absolute -top-4 -right-4 md:right-[-20px] z-10"
      >
        <div className="bg-white border border-slate-200 shadow-lg rounded-xl px-4 py-3 animate-float">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </div>
            <div>
              <p className="text-slate-900 text-xs font-bold">New Lead</p>
              <p className="text-slate-500 text-[10px]">Window Tint Inquiry</p>
              <p className="text-red text-[9px] font-semibold">Just now</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
