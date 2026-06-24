'use client'

import { useState } from 'react'

export default function ROICalculator() {
  const [budget, setBudget] = useState(1000)
  const costPerLead = 12
  const conversionRate = 0.45
  const avgJobValue = 400

  const estimatedLeads = Math.round(budget / costPerLead)
  const estimatedJobs = Math.round(estimatedLeads * conversionRate)
  const estimatedRevenue = estimatedJobs * avgJobValue
  const roi = Math.round(((estimatedRevenue - budget) / budget) * 100)

  return (
    <div className="bg-surface border border-border rounded-2xl p-8">
      <div className="mb-8">
        <label className="block text-sm font-medium text-text mb-3">
          Monthly Ad Budget: <span className="text-accent font-bold">${budget.toLocaleString()}</span>
        </label>
        <input
          type="range"
          min={300}
          max={5000}
          step={100}
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent"
        />
        <div className="flex justify-between text-xs text-muted mt-2">
          <span>$300</span>
          <span>$5,000</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-slate-100 rounded-xl p-6 text-center">
          <p className="font-display text-3xl font-bold text-text">{estimatedLeads}</p>
          <p className="text-muted text-xs uppercase tracking-wider mt-1">Estimated Leads</p>
        </div>
        <div className="bg-slate-100 rounded-xl p-6 text-center">
          <p className="font-display text-3xl font-bold text-text">{estimatedJobs}</p>
          <p className="text-muted text-xs uppercase tracking-wider mt-1">Estimated Jobs</p>
        </div>
        <div className="bg-slate-100 rounded-xl p-6 text-center">
          <p className="font-display text-3xl font-bold text-accent">${estimatedRevenue.toLocaleString()}</p>
          <p className="text-muted text-xs uppercase tracking-wider mt-1">Estimated Revenue</p>
        </div>
        <div className="bg-slate-100 rounded-xl p-6 text-center">
          <p className="font-display text-3xl font-bold text-green-600">{roi}%</p>
          <p className="text-muted text-xs uppercase tracking-wider mt-1">Return on Ad Spend</p>
        </div>
      </div>

      <p className="text-muted text-xs text-center mt-6">
        Based on $12 avg. cost per lead, 45% booking rate, and $400 avg. job value. Results vary by market.
      </p>
    </div>
  )
}
