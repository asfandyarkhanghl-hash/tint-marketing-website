import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Fill Your{' '}
          <span className="accent-gradient">Shop&apos;s Schedule?</span>
        </h2>
        <p className="text-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Start your free 14-day trial. We call you within 5 minutes of your submission.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/free-trial"
            className="bg-accent hover:bg-accent-dark text-white font-bold px-10 py-4 rounded-lg text-lg transition-all hover:shadow-xl hover:shadow-accent/25"
          >
            Start Your Free Trial
          </Link>
          <Link
            href="/book"
            className="border border-accent text-accent hover:bg-accent hover:text-white font-semibold px-10 py-4 rounded-lg text-lg transition-all"
          >
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  )
}
