'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const pathname = usePathname()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const formData = new FormData(e.currentTarget)
    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '')
    formData.append('subject', 'New Free Trial Request — Tint Marketing Pro')
    formData.append('from_name', 'Tint Marketing Pro Website')
    formData.append('redirect', 'false')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const data = await res.json()
      if (data.success) { setStatus('success'); window.location.href = '/thank-you' } else { setStatus('error') }
    } catch { setStatus('error') }
  }

  const inputClass = "w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
  const darkInputClass = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"

  const isDark = typeof window !== 'undefined' && document.querySelector('.section-dark')

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="page_source" value={pathname} />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div>
        <label className="block text-sm font-semibold mb-1.5">First Name <span className="text-red">*</span></label>
        <input name="first_name" required className={inputClass} placeholder="Your first name" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1.5">Tint Shop Name <span className="text-red">*</span></label>
        <input name="business_name" required className={inputClass} placeholder="e.g. Supreme Auto Tint" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1.5">City & State <span className="text-red">*</span></label>
        <input name="city_state" required className={inputClass} placeholder="e.g. Dallas, TX" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1.5">Current Monthly Ad Budget</label>
        <select name="ad_budget" className={inputClass}>
          <option value="no_budget">No budget yet</option>
          <option value="under_500">Under $500/month</option>
          <option value="500_1500">$500 – $1,500/month</option>
          <option value="1500_3000">$1,500 – $3,000/month</option>
          <option value="3000_plus">$3,000+/month</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1.5">Biggest Challenge Right Now</label>
        <select name="biggest_challenge" className={inputClass}>
          <option value="not_enough_leads">Not enough leads</option>
          <option value="maps_ranking">Poor Google Maps ranking</option>
          <option value="wasting_budget">Wasting ad budget</option>
          <option value="dont_know">Don&apos;t know where to start</option>
        </select>
      </div>

      <button type="submit" disabled={status === 'loading'}
        className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 px-6 rounded-lg text-base transition-all disabled:opacity-60 hover:shadow-lg hover:shadow-accent/25 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (<><Loader2 className="w-5 h-5 animate-spin" />Sending...</>) : 'Get My Free Trial — We Call You in 5 Minutes'}
      </button>

      {status === 'error' && <p className="text-center text-red text-sm">Something went wrong. Please try again or book a call instead.</p>}
      <p className="text-center text-muted text-sm">No contracts. No credit card. 100% free to start.</p>
    </form>
  )
}
