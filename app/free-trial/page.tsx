import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Star } from 'lucide-react'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Start Your Free 14-Day Trial',
  description: 'Free 14-day trial for window tint shop marketing. Google Ads campaign built and launched, Google Maps optimization started, lead tracking set up. No credit card.',
}

const included = [
  'Full competitor analysis for your city',
  'Google Ads campaign built & launched',
  'Google Maps optimization started',
  'Lead tracking dashboard set up',
]

const steps = [
  { step: '1', text: 'You submit the form below (takes 60 seconds)' },
  { step: '2', text: 'We call you within 5 minutes from a US number' },
  { step: '3', text: 'Quick 10-minute discovery call — we learn about your shop' },
  { step: '4', text: 'Your free trial campaign launches within 48 hours' },
]

const miniTestimonials = [
  { name: 'Marcus T.', location: 'Phoenix, AZ', text: 'First 12 leads in 9 days. The free trial was a no-brainer.' },
  { name: 'Sandra R.', location: 'Dallas, TX', text: 'They cut my ad spend in half and tripled my leads. Started with the trial.' },
  { name: 'James K.', location: 'Miami, FL', text: 'I had nothing to lose. Within the first week I could see it working.' },
]

export default function FreeTrialPage() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-8">
            <Link href="/">
              <Image src="/images/logo.png" alt="Tint Marketing Pro" width={180} height={50} className="h-10 w-auto" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted mb-12">
            {['No contracts', 'No credit card', 'Tint shops only', 'Results in 14 days'].map((pill) => (
              <span key={pill} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Start Your Free <span className="accent-gradient">14-Day Trial</span>
            </h1>

            <div className="mb-10">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text mb-4">What&apos;s included — free</h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text mb-4">What happens after you submit</h2>
              <div className="space-y-3">
                {steps.map((s) => (
                  <div key={s.step} className="flex items-start gap-4 bg-surface border border-border rounded-xl p-4">
                    <span className="bg-accent text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{s.step}</span>
                    <p className="text-muted text-sm">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {miniTestimonials.map((t) => (
                <div key={t.name} className="bg-surface border border-border rounded-xl p-5">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted text-sm mb-2">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-text text-xs font-medium">{t.name} <span className="text-muted font-normal">— {t.location}</span></p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-surface border border-border rounded-2xl p-8 sticky top-28">
              <h2 className="font-display text-2xl font-bold text-center mb-6">
                Get Your Free Trial
              </h2>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
