import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Call Confirmed',
  robots: { index: false, follow: false },
}

export default function ThankYouBookingPage() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center pt-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="text-6xl mb-8">📅</div>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Your Call Is <span className="accent-gradient">Confirmed!</span>
        </h1>

        <p className="text-xl text-muted mb-8">
          Check your email for your calendar invite. We&apos;ll come prepared with your full market analysis and competitor breakdown.
        </p>

        <div className="bg-surface border border-border rounded-2xl p-8 text-left">
          <h2 className="font-bold text-xl mb-6 text-center">3 Things to Have Ready</h2>
          <ul className="space-y-4">
            {[
              "Your current monthly ad budget (or zero if you haven't started)",
              "Your biggest competitor in your city (we'll analyze them live)",
              'Your main service — auto tint, residential, or commercial',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-accent text-xl">→</span>
                <p className="text-muted">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-muted mt-8">
          Need to reschedule? Reply to your calendar confirmation email.
        </p>
      </div>
    </div>
  )
}
