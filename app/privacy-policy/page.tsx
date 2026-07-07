import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Tint Marketing Pro collects, uses, and protects the information submitted through our website and marketing campaigns.',
  alternates: {
    canonical: 'https://tintmarketingpros.online/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted text-sm mb-12">Last updated: July 2026</p>

        <div className="prose-custom space-y-8">
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">1. Information We Collect</h2>
            <p className="text-muted leading-relaxed">
              When you submit a form on this website (free trial requests, strategy call bookings, or contact forms), we collect the information you provide directly — typically your name, business name, email address, phone number, and details about your window tint business. We also collect standard analytics data such as pages visited, referral source, device type, and approximate location through tools like Google Analytics.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">2. How We Use Your Information</h2>
            <p className="text-muted leading-relaxed">
              We use the information you provide to respond to your inquiry, deliver the services you request (Google Ads management, SEO, lead management/CRM setup, AI system configuration, and related marketing services), and to communicate with you about your account and campaigns. We do not sell your personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">3. Cookies & Analytics</h2>
            <p className="text-muted leading-relaxed">
              This site uses cookies and similar technologies for analytics (such as Google Analytics) and to measure the performance of advertising campaigns (such as Google Ads and Meta Ads conversion tracking). You can disable cookies through your browser settings, though some site functionality may be affected.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">4. Third-Party Services</h2>
            <p className="text-muted leading-relaxed">
              We use third-party platforms to operate our business and deliver services, including form processing providers, CRM and communication platforms, Google Ads, Google Business Profile, and Meta (Facebook/Instagram) advertising tools. These providers process data according to their own privacy policies and applicable data protection agreements.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">5. Data Retention</h2>
            <p className="text-muted leading-relaxed">
              We retain client and lead information for as long as necessary to provide our services and comply with legal and accounting obligations. You may request deletion of your information at any time by contacting us.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">6. Your Rights</h2>
            <p className="text-muted leading-relaxed">
              Depending on your location, you may have the right to access, correct, or delete the personal information we hold about you, or to opt out of certain communications. To exercise any of these rights, contact us using the details on our website.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-3">7. Changes to This Policy</h2>
            <p className="text-muted leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The &ldquo;Last updated&rdquo; date at the top of this page indicates when this policy was last revised.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
