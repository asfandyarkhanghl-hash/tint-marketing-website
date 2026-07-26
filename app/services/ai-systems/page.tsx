import type { Metadata } from 'next'
import Link from 'next/link'
import { Bot, Filter, UserCheck, Clock, MessagesSquare, Brain, ArrowRight } from 'lucide-react'
import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceHeroImage from '@/components/ServiceHeroImage'
import Reveal from '@/components/Reveal'
import { ServiceSchema } from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'AI Systems for Window Tint Shops',
  description: 'A 24/7 AI chatbot and automated lead qualification built for window tint shops. Capture, filter, and book leads while you are in the bay or asleep.',
  keywords: [
    'AI chatbot for window tint shops',
    'AI lead qualification tint shop',
    'automated appointment booking tint shop',
    'AI for tint business',
    'window tint AI assistant',
    'automated lead filtering tint shop',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/services/ai-systems',
  },
  openGraph: {
    title: 'AI Systems for Window Tint Shops',
    description: 'A 24/7 AI assistant that answers tint questions, qualifies leads, and books appointments — even at 2 AM.',
    url: 'https://tintmarketingpros.online/services/ai-systems',
    type: 'website',
  },
}

const problems = [
  { title: 'Your shop closes. Search traffic does not.', detail: 'People research window tint at night, on weekends, between meetings. If nobody answers, they move to the next result on Google.' },
  { title: 'You waste hours on tire-kickers', detail: 'DIY researchers, out-of-area inquiries, and price shoppers who never book eat up time your team should spend on real customers.' },
  { title: 'Every lead needs the same repetitive questions answered', detail: '"How much for a Tesla Model 3?" "Do you do ceramic?" "What is your warranty?" Answering the same 10 questions all day is not a good use of an installer\'s time.' },
]

const features = [
  { icon: Bot, title: '24/7 AI Chatbot', desc: 'Lives on your website and answers tint-specific questions — pricing ranges, film types, warranty details — in your shop\'s voice, then captures contact info and books the appointment.' },
  { icon: Brain, title: 'AI Voice Agent', desc: 'Picks up calls when your team is busy tinting. Qualifies the caller, answers common questions, and books directly into your calendar. Sounds natural, works around the clock.' },
  { icon: Filter, title: 'Automated Lead Filtering', desc: 'AI screens out spam, DIY researchers, and out-of-service-area inquiries before they ever reach your team, so your pipeline only has real, bookable leads in it.' },
  { icon: UserCheck, title: 'Automated Lead Qualification', desc: 'Every lead is scored in seconds by service type, vehicle, budget signal, and urgency. Ceramic tint inquiries on a Tesla get flagged for priority callback automatically.' },
  { icon: MessagesSquare, title: 'AI Review Responses', desc: 'AI drafts a professional, personalized reply to every Google review — good or bad — within minutes, so your reputation stays active without eating your evenings.' },
  { icon: Clock, title: 'Instant Follow-Up Handoff', desc: 'If a human does not respond to a new lead within 5 minutes, the AI system takes over the conversation automatically so the lead never goes cold.' },
]

const faqs = [
  { q: 'Will an AI chatbot sound robotic to my customers?', a: 'No — it is trained on your shop\'s services, pricing ranges, and tone, and it hands off to a real person the moment a conversation needs a human touch.' },
  { q: 'Do I need any technical skills to run this?', a: 'No. We build, train, and maintain the AI system for you. You just get the booked appointments and qualified leads in your dashboard.' },
  { q: 'Will it replace my front desk person?', a: 'It replaces the after-hours gap and the repetitive Q&A, not your team. Most shops use it to make sure no lead is ever unanswered, day or night.' },
]

export default function AiSystemsPage() {
  return (
    <>
      <ServiceSchema
        name="AI Systems for Window Tint Shops"
        description="24/7 AI chatbot, voice agent, and automated lead qualification and filtering built specifically for window tint shops."
        url="https://tintmarketingpros.online/services/ai-systems"
      />

      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.06),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'AI Systems', href: '/services/ai-systems' }]} />
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
            <div className="max-w-3xl">
              <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">AI Systems</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                An AI Assistant That Never <span className="accent-gradient">Clocks Out</span>
              </h1>
              <p className="text-muted text-xl leading-relaxed mb-8">
                A 24/7 AI chatbot and voice agent that answers tint questions, filters out tire-kickers, qualifies real buyers, and books appointments for tint and window film shops — while you are mid-install or asleep.
              </p>
              <div className="bg-surface border border-accent/20 rounded-xl p-6 inline-block">
                <p className="text-sm text-muted mb-1">Coverage</p>
                <p className="font-display text-4xl font-bold text-accent">24/7 lead capture</p>
              </div>
            </div>
            <ServiceHeroImage
              src="/images/services/ai-systems-tint-shop.jpg"
              alt="Window tint shop owner reviewing after-hours AI lead capture on a laptop"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            The Gap AI Systems <span className="accent-gradient">Close</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((f, i) => (
              <div key={i} className="card-hover bg-white border border-slate-200 rounded-2xl p-8">
                <span className="text-accent font-display text-5xl font-bold opacity-20">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-xl font-bold text-text mt-4 mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-24 bg-primary">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">What&apos;s Included</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Built-In <span className="accent-gradient">AI Automation</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-hover glass-card rounded-2xl p-7">
                <div className="icon-pop w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-24 bg-slate-50">
        <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
            Common <span className="accent-gradient">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="card-hover bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-text mb-2">{f.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted mt-10">
            Curious how it actually works? Read{' '}
            <Link href="/blog/ai-chatbot-for-window-tint-shops" className="text-accent font-semibold hover:underline">how AI chatbots book jobs while you sleep</Link>, or explore the{' '}
            <Link href="/platform" className="text-accent font-semibold hover:underline">full platform</Link>.
          </p>
        </Reveal>
      </section>

      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4 text-center">Related Reading</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/ai-chatbot-for-window-tint-shops" className="card-hover group flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all">
              <span className="text-sm font-semibold text-text">How AI chatbots book jobs while you sleep</span>
              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services/lead-management" className="card-hover group flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-accent/30 hover:shadow-md transition-all">
              <span className="text-sm font-semibold text-text">See how AI plugs into your CRM</span>
              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <Reveal className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Let AI Cover the Hours <span className="accent-gradient">You Cannot</span>
          </h2>
          <p className="text-muted text-center mb-10">
            We build and train your AI system during your free 14-day trial — at no cost.
          </p>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <LeadForm />
          </div>
        </Reveal>
      </section>
    </>
  )
}
