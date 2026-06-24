import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Social Media & Retargeting for Tint Shops — Turn Scrollers Into Bookings',
  description: 'Meta Ads and social media marketing designed for window tint shops. Before/after content, retargeting, and converting Instagram browsers into bookings.',
}

export default function SocialMediaPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Social & Retargeting</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Turn Scrollers Into <span className="accent-gradient">Bookings</span>
            </h1>
            <p className="text-muted text-xl leading-relaxed">
              Before/after tint photos stop thumbs. Meta Ads with retargeting bring back the 97% of visitors who leave your site without calling. We handle the creative, targeting, and optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Why Social Media Works for <span className="accent-gradient">Tint Shops</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Visual Product', detail: 'Window tint transformations are inherently shareable. Before/after photos generate 3x more engagement than text posts for our clients.' },
              { title: 'Local Targeting', detail: 'Meta Ads let us target homeowners and car enthusiasts within a 15-mile radius of your shop. No wasted impressions on people outside your service area.' },
              { title: 'Retargeting Power', detail: '97% of website visitors leave without booking. Retargeting ads follow them on Instagram and Facebook, keeping your shop top-of-mind until they are ready.' },
            ].map((item) => (
              <div key={item.title} className="bg-surface2 border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-text mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            What We <span className="accent-gradient">Handle</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Content Creation', items: ['Before/after photo templates', 'Educational carousel posts', 'Short-form video editing', 'Seasonal promotion graphics'] },
              { title: 'Paid Advertising', items: ['Meta Ads (Facebook + Instagram)', 'Lookalike audience targeting', 'Retargeting pixel setup', 'A/B testing ad creative'] },
              { title: 'Community Management', items: ['Comment responses', 'DM handling and lead routing', 'Review sharing on social', 'Local community engagement'] },
              { title: 'Reporting & Analytics', items: ['Monthly performance reports', 'Cost per lead tracking', 'Audience growth metrics', 'Content performance analysis'] },
            ].map((category) => (
              <div key={category.title} className="bg-surface border border-border rounded-2xl p-8">
                <h3 className="font-display text-lg font-bold text-accent mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Get More <span className="accent-gradient">Eyes on Your Work</span>
          </h2>
          <p className="text-muted text-center mb-10">Start your free trial and we will set up your retargeting pixel and first ad campaign.</p>
          <div className="bg-surface2 border border-border rounded-2xl p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
