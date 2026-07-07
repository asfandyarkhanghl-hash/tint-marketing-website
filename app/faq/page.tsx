import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABanner from '@/components/CTABanner'
import { FAQPageSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'FAQ — Window Tint Shop Marketing Questions Answered',
  description: 'Answers to the real questions window tint shop owners ask about marketing, lead generation, lead management, AI systems, pricing, and growing a tint business.',
  keywords: [
    'window tint marketing FAQ',
    'tint shop marketing questions',
    'mobile window tint marketing',
    'tint shop CRM questions',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/faq',
  },
  openGraph: {
    title: 'FAQ — Window Tint Shop Marketing Questions Answered',
    description: 'Answers to the real questions window tint shop owners ask about marketing, lead generation, lead management, AI systems, and growing a tint business.',
    url: 'https://tintmarketingpros.online/faq',
    type: 'website',
  },
}

const categories = [
  {
    title: 'Getting Started',
    faqs: [
      { q: 'Do you work with all types of businesses?', a: 'No. We exclusively serve window tint shops — automotive, residential, and commercial. Everything we build is informed by tint-specific keywords, seasonality, and customer behavior, which is why generic marketing agencies struggle to get tint shops real results.' },
      { q: 'What does the free 14-day trial actually include?', a: 'We build and launch your Google Ads or SEO campaign, set up your lead management CRM with call tracking, and start generating real leads — all before you pay a dollar. No credit card required to start.' },
      { q: 'Do I need an existing website?', a: 'No. We prefer to work with your current site, but if you do not have one, we build a high-converting landing page designed specifically for tint shop customers as part of onboarding.' },
      { q: 'Do you require a long-term contract?', a: 'No. Every plan is month-to-month. We do not believe in locking shop owners into annual contracts — our results are what keep clients around, not paperwork.' },
      { q: 'What if I do not see results?', a: 'We have a simple guarantee: if you do not see measurable improvement in 30 days, you do not pay. No fine print.' },
    ],
  },
  {
    title: 'Lead Generation (Google Ads, SEO, Maps, Social)',
    faqs: [
      { q: 'How much does Google Ads cost for a tint shop?', a: 'Most of our clients spend $500–$2,500/month in ad spend depending on shop size and market competitiveness, generating leads at an average cost of $12 each after our tint-specific negative keyword strategy eliminates wasted clicks.' },
      { q: 'How long does it take to rank in Google Maps?', a: 'Most shops see meaningful movement in 30–60 days and reach the top 3 map pack within 60–90 days, assuming consistent review generation and Google Business Profile activity.' },
      { q: 'Is SEO worth it if I am already running Google Ads?', a: 'Yes — SEO is what reduces your dependence on paid ads over time. Ads generate leads immediately; SEO builds a free, compounding lead source that keeps paying off even if you pause your ad budget.' },
      { q: 'Do you handle Facebook and Instagram ads too?', a: 'Yes. We run Meta Ads with before/after creative and retargeting campaigns that bring back the 97% of visitors who browse your site or profile but do not book right away.' },
      { q: 'What cities and states do you work in?', a: 'We work with tint shops across the entire United States, including mobile and multi-location operators. Local market and competitor research is included in onboarding.' },
    ],
  },
  {
    title: 'Lead Management & AI Systems',
    faqs: [
      { q: 'What is lead management, and why do I need it if I already get leads?', a: 'Lead management is everything that happens after a lead comes in — tracking, follow-up, and conversion. Most tint shops lose 60%+ of leads not because of bad marketing, but because of slow follow-up and no system to track them. Fixing that often doubles booking rates without spending another dollar on ads.' },
      { q: 'Will an AI chatbot sound robotic to my customers?', a: 'No. The AI is trained on your shop\'s specific services, pricing ranges, and tone, and it hands off to a real person the moment a conversation needs a human touch. Most customers cannot tell the difference between the AI and your front desk for routine questions.' },
      { q: 'What happens to a lead if I miss their call?', a: 'Our missed-call text-back system automatically texts the caller within 30 seconds so they hear from your shop before they call the next one. This alone recovers 40%+ of leads that would otherwise be lost.' },
      { q: 'Can I see which marketing channel is actually generating revenue?', a: 'Yes. Every lead, call, and booked job is tracked back to its exact source — Google Ads, Maps, organic search, social, or referral — so you know precisely where to spend your next marketing dollar.' },
      { q: 'Do I need technical skills to use the CRM or AI tools?', a: 'No. We build, configure, and maintain everything for you. You log into a dashboard to see leads, appointments, and revenue — you do not touch any technical settings.' },
    ],
  },
  {
    title: 'Running a Tint Business',
    faqs: [
      { q: 'I run a mobile tint business with no storefront. Can you still help?', a: 'Yes — this is one of our most common client types. We set your Google Business Profile up correctly as a service-area business (not a storefront), build location pages for every city or neighborhood you cover, and target ads geographically instead of around a fixed address.' },
      { q: 'What should I do about my slow season?', a: 'Slow months (typically November–February for most markets) are when smart shops shift ad spend toward residential and commercial tint, build SEO content, and catch up on review generation — so the pipeline is full when peak season hits. See our slow-season guide for a full month-by-month plan.' },
      { q: 'I am a one-person shop. Should I even be running ads?', a: 'It depends on your capacity. If you are already booked out, more leads just create frustration. We help shops match lead volume to actual install capacity, and plan ahead for when it is time to hire your first installer.' },
      { q: 'How do I market to Tesla and EV owners specifically?', a: 'EV owners spend roughly 2x more per job and rarely negotiate on price. We build dedicated landing pages and target brand- and model-specific keywords (e.g., "Tesla Model 3 tint near me") to capture this higher-value segment.' },
      { q: 'Can you help with reviews and reputation, not just ads?', a: 'Yes. Review velocity is one of the top Google Maps ranking factors. We set up automated review requests, respond to reviews on your behalf, and monitor your reputation across Google, Facebook, and Yelp.' },
      { q: 'I am opening a second location. Does anything change?', a: 'Yes — multi-location shops need separate Google Business Profiles, location-specific landing pages, and consolidated reporting so you can compare performance across shops. Our Scale plan is built for exactly this.' },
    ],
  },
  {
    title: 'Pricing & Logistics',
    faqs: [
      { q: 'How much should I budget for marketing overall?', a: 'Most single-location shops spend $1,000–$2,500/month total (management plus ad spend) during peak season and scale down in the off-season. See our full pricing breakdown for tier details.' },
      { q: 'Is ad spend included in your management fee?', a: 'No. Ad spend is billed directly by Google or Meta and is separate from our management fee, so you always know exactly what is going where.' },
      { q: 'How do I get started?', a: 'Start a free 14-day trial or book a strategy call. We will research your market, review your current marketing, and recommend which pillar — lead generation, lead management, or AI systems — to prioritize first.' },
    ],
  },
]

export default function FAQPage() {
  const allFaqs = categories.flatMap((c) => c.faqs)

  return (
    <>
      <FAQPageSchema items={allFaqs.map((f) => ({ question: f.q, answer: f.a }))} />

      <section className="pt-32 pb-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} />
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">FAQ</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Questions Tint Shop Owners <span className="accent-gradient">Actually Ask</span>
          </h1>
          <p className="text-muted text-xl leading-relaxed">
            From lead generation to AI automation to running a mobile-only operation — real answers to the questions that come up before shop owners work with us.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((category) => (
            <div key={category.title}>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">{category.title}</h2>
              <div className="space-y-4">
                {category.faqs.map((f) => (
                  <div key={f.q} className="bg-white border border-slate-200 rounded-xl p-6">
                    <h3 className="font-bold text-text mb-2">{f.q}</h3>
                    <p className="text-muted text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-muted">
            Still have a question? <Link href="/book" className="text-accent font-semibold hover:underline">Book a strategy call</Link> and we will answer it directly.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
