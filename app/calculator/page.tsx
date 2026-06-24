import type { Metadata } from 'next'
import ProfitCalculator from '@/components/ProfitCalculator'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ROI & Profit Calculator for Window Tint Shops',
  description: 'Calculate your tint shop profit, ROI, and revenue potential. Input your service charges, tint costs, lead volume, and marketing budget to see your real numbers.',
  keywords: ['tint shop profit calculator', 'window tint ROI calculator', 'tint business revenue calculator', 'tint shop marketing ROI'],
  alternates: {
    canonical: 'https://tintmarketingpros.online/calculator',
  },
}

export default function CalculatorPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Free Tool</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Tint Shop <span className="accent-gradient">Profit Calculator</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Plug in your real numbers — service charges, material costs, lead volume, and marketing budget — and see exactly how much profit your shop should be generating.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProfitCalculator />
        </div>
      </section>

      <section className="py-24 section-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Want Us to Hit Those Numbers <span className="accent-gradient">For You?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            We guarantee 30–40 qualified leads per month. Start your free 14-day trial and we handle everything — ads, CRM, follow-up, booking.
          </p>
          <Link href="/free-trial" className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-accent/20">
            Start My Free Trial <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
