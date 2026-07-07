import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of the Tint Marketing Pro website and marketing services for window tint shops.',
  alternates: {
    canonical: 'https://tintmarketingpros.online/terms-of-service',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Terms of Service', href: '/terms-of-service' }]} />
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted text-sm mb-12">Last updated: July 2026</p>

        <div className="prose-custom space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">1. Services</h2>
            <p className="text-muted leading-relaxed">
              Tint Marketing Pro (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) provides marketing services exclusively to window tint businesses, including Google Ads management, local SEO and Google Maps ranking, social media marketing, lead management/CRM setup, and AI automation systems (&ldquo;Services&rdquo;). Specific deliverables and scope are agreed upon during onboarding or in a separate service agreement.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">2. Free Trial</h2>
            <p className="text-muted leading-relaxed">
              Our 14-day free trial provides access to a defined scope of Services at no cost, as described at the time of signup. No credit card is required to begin the trial. At the end of the trial period, continued use of Services requires enrollment in a paid plan.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">3. No Long-Term Contracts</h2>
            <p className="text-muted leading-relaxed">
              Paid plans are billed month-to-month. Either party may cancel with written notice (email is sufficient) before the next billing cycle. Ad spend that has already been submitted to Google, Meta, or other platforms on your behalf is non-refundable once spent, as it is paid directly to those platforms.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">4. Results Guarantee</h2>
            <p className="text-muted leading-relaxed">
              Where a results guarantee is advertised (for example, &ldquo;no measurable improvement in 30 days, no payment&rdquo;), the specific terms, metrics, and conditions of that guarantee will be confirmed in writing during onboarding. Marketing results are influenced by factors outside our control, including market competition, seasonality, and your business&apos;s pricing, reviews, and responsiveness to leads.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">5. Payment</h2>
            <p className="text-muted leading-relaxed">
              Management fees are billed on a recurring monthly basis. Advertising spend on third-party platforms (Google Ads, Meta Ads, etc.) is separate from our management fee and is billed or authorized directly for those platforms.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">6. Client Responsibilities</h2>
            <p className="text-muted leading-relaxed">
              You are responsible for providing accurate business information, timely feedback on campaigns and creative, and reasonable follow-up with leads generated on your behalf. Delayed lead follow-up on your end can materially affect the results of our Services.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">7. Limitation of Liability</h2>
            <p className="text-muted leading-relaxed">
              To the fullest extent permitted by law, Tint Marketing Pro is not liable for indirect, incidental, or consequential damages arising from the use of our Services. Our total liability for any claim is limited to the fees paid for the Services in the month the claim arose.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">8. Changes to These Terms</h2>
            <p className="text-muted leading-relaxed">
              We may update these Terms of Service from time to time. Continued use of our website or Services after changes are posted constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
