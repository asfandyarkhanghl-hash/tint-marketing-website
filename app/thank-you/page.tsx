import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You — We Are Calling You Now',
  robots: { index: false, follow: false },
}

const steps = [
  { step: '1', text: 'We call you from a US number within 5 minutes' },
  { step: '2', text: 'Quick 10-minute discovery — we learn about your shop & market' },
  { step: '3', text: 'We show you your competitor gap analysis live on the call' },
  { step: '4', text: "If it's a fit — your free trial launches same day" },
]

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center pt-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <span className="text-5xl">✓</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          You&apos;re In! <span className="accent-gradient">We&apos;re Calling You Now.</span>
        </h1>

        <p className="text-xl text-muted mb-8">
          Our team has your request and will call you within 5 minutes. Keep your phone nearby — we&apos;re already pulling up your market data.
        </p>

        <div className="bg-surface border border-accent/30 rounded-2xl p-8 mb-8">
          <p className="text-accent font-bold text-lg mb-2">Estimated Call Time</p>
          <p className="font-display text-6xl font-bold text-white">5 min</p>
          <p className="text-muted mt-2">or less</p>
        </div>

        <div className="text-left space-y-4 mb-10">
          <h2 className="font-display text-2xl font-bold text-center mb-6">What Happens Next</h2>
          {steps.map((item) => (
            <div key={item.step} className="flex items-start gap-4 bg-surface border border-border rounded-xl p-4">
              <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </span>
              <p className="text-text">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="text-muted mb-4">Prefer to pick a specific time?</p>
        <Link
          href="/book"
          className="inline-block border border-accent text-accent px-8 py-3 rounded-lg hover:bg-accent hover:text-white transition-all"
        >
          Book a Calendar Slot Instead
        </Link>
      </div>
    </div>
  )
}
