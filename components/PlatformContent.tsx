'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Bot, CalendarCheck, Filter, UserCheck, BarChart3, GitBranch,
  Phone, MessageSquare, Mail, Star, Globe, Megaphone,
  CheckCircle2, Smartphone, Clock, Users, FileText, CreditCard,
  Repeat, Shield, Zap, Share2, PhoneIncoming, PhoneMissed,
  MessagesSquare, Brain, Eye, LineChart, PieChart, TrendingUp,
  MousePointerClick, Workflow, Send, ArrowRight
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import PlatformHero from './PlatformHero'
import PlatformPipeline from './PlatformPipeline'
import LeadForm from './LeadForm'

function FeatureSection({
  badge, title, titleAccent, subtitle, features, cols = 3,
}: {
  badge: string; title: string; titleAccent: string; subtitle: string;
  features: { icon: LucideIcon; title: string; desc: string }[];
  cols?: number;
}) {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.04),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{badge}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            {title} <span className="accent-gradient">{titleAccent}</span>
          </h2>
          <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${cols === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-5`}>
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.4 }}
              className="glass-card rounded-2xl p-7 group transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <f.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-base font-bold text-text mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const crmFeatures = [
  { icon: Users, title: 'Contact Management', desc: 'Full customer database with vehicle history, tint preferences, service records, and lifetime value tracking. Tag and segment by service type, vehicle, or location.' },
  { icon: MessagesSquare, title: 'Unified Inbox', desc: 'Every conversation in one place — SMS, email, Facebook Messenger, Instagram DMs, Google Business Messages, and WhatsApp. Never miss a lead message again.' },
  { icon: Phone, title: 'Call Tracking & Recording', desc: 'Every inbound call tracked to its ad source. Calls recorded for training and quality. See exactly which campaigns drive phone calls and booked jobs.' },
  { icon: PhoneMissed, title: 'Missed Call Text-Back', desc: 'When you miss a call mid-install, our system auto-texts the caller within 30 seconds: "Hey, we just missed your call — how can we help?" Recovers 40%+ of missed leads.' },
  { icon: GitBranch, title: 'Visual Sales Pipelines', desc: 'Drag-and-drop pipeline from New Lead → Qualified → Quoted → Booked → Completed. Custom stages, deal values, and automated stage progression based on actions.' },
  { icon: FileText, title: 'Estimates & Invoicing', desc: 'Send professional quotes with line items, discounts, and tax calculations. Convert quotes to invoices in one click. Auto-reminders for unpaid invoices. Accept online payments.' },
]

const automationFeatures = [
  { icon: Bot, title: 'AI Chatbot (24/7)', desc: 'An AI assistant on your website that answers tint questions ("How much is ceramic tint for a Tesla Model 3?"), captures lead info, and books appointments — even at 2 AM.' },
  { icon: Brain, title: 'AI Voice Agent', desc: 'Handles inbound calls when your team is busy. Qualifies the lead, answers pricing questions, and books the appointment directly into your calendar. Sounds human, works 24/7.' },
  { icon: CalendarCheck, title: 'Auto Booking', desc: 'Leads book directly into your calendar from your website, chatbot, or text conversation. Syncs with Google Calendar and Outlook. Bay-level scheduling so you never double-book.' },
  { icon: Filter, title: 'Auto Lead Filtering', desc: 'AI identifies and removes spam, tire-kickers, and out-of-area inquiries before they reach your team. Only qualified, ready-to-book leads make it to your pipeline.' },
  { icon: UserCheck, title: 'Auto Lead Qualification', desc: 'Every lead scored instantly by service type (ceramic vs carbon), vehicle, budget range, and urgency. High-value leads get flagged for priority follow-up.' },
  { icon: Workflow, title: 'Workflow Automation Engine', desc: 'Visual drag-and-drop workflow builder with 50+ triggers and actions. Auto-send texts, emails, voicemail drops, tag contacts, move pipeline stages, and notify your team — all on autopilot.' },
  { icon: Clock, title: '5-Minute Follow-Up', desc: 'When a lead comes in, they get an instant text. Your team gets a push notification. If nobody responds in 5 minutes, the AI chatbot takes over. Speed wins — we guarantee it.' },
  { icon: Repeat, title: 'Re-Engagement Campaigns', desc: 'Automated sequences that re-engage past customers at the right time: "It has been 18 months since your tint install — time for a checkup?" Drives repeat business and referrals.' },
]

const marketingFeatures = [
  { icon: Mail, title: 'Email Marketing', desc: 'Drag-and-drop email builder with templates designed for tint shops. Automated drip campaigns, newsletters, and promotional blasts. Full analytics on opens, clicks, and conversions.' },
  { icon: Send, title: 'SMS & MMS Marketing', desc: 'Bulk text campaigns with personalization. Send before/after photos via MMS. Automated appointment reminders, review requests, and promotional texts.' },
  { icon: Share2, title: 'Social Media Planner', desc: 'Schedule posts across Facebook, Instagram, LinkedIn, and Google Business Profile from one calendar. Queue before/after photos, promotions, and educational content.' },
  { icon: MousePointerClick, title: 'Funnels & Landing Pages', desc: 'Build high-converting landing pages for Google Ads without a developer. Drag-and-drop builder with mobile-optimized templates designed for tint shop conversions.' },
  { icon: Globe, title: 'Website Builder', desc: 'Full website builder with SEO tools, blog, and custom domains. No need for WordPress or Wix. Your website, CRM, and marketing all live in one platform.' },
  { icon: Megaphone, title: 'Ad Manager', desc: 'Launch and manage Google Ads and Facebook/Instagram Ads directly from the platform. See ad performance alongside lead and revenue data in one dashboard.' },
]

const reputationFeatures = [
  { icon: Star, title: 'Automated Review Requests', desc: 'Auto-text customers 2 hours after their tint job with a direct link to leave a Google review. Customizable timing, messaging, and follow-up frequency.' },
  { icon: MessageSquare, title: 'AI Review Responses', desc: 'AI generates professional, personalized responses to every Google review — positive and negative — within minutes. Saves hours and keeps your reputation spotless.' },
  { icon: Eye, title: 'Review Monitoring Dashboard', desc: 'Track review volume, average rating, and review velocity across Google, Facebook, and Yelp. Get alerts when new reviews come in. Monitor competitor review trends.' },
]

const reportingFeatures = [
  { icon: BarChart3, title: 'Lead Source Attribution', desc: 'See exactly which channel — Google Ads, organic search, Facebook, referral, walk-in — generated each lead, appointment, and dollar of revenue.' },
  { icon: LineChart, title: 'Campaign Performance', desc: 'Real-time dashboards showing cost per lead, cost per booked job, and ROI by campaign, keyword, and ad creative. No more guessing which ads work.' },
  { icon: PieChart, title: 'Pipeline Analytics', desc: 'Conversion rates at every pipeline stage. See where leads drop off, how long deals take to close, and which service types generate the most revenue.' },
  { icon: TrendingUp, title: 'Revenue Reporting', desc: 'Monthly, quarterly, and annual revenue reports tied to marketing source. Know your exact ROI on every dollar spent. Forecast revenue based on pipeline data.' },
  { icon: PhoneIncoming, title: 'Call Analytics', desc: 'Call volume by hour, day, and week. Average call duration, missed call rate, and first-call resolution tracking. Listen to recorded calls for quality assurance.' },
  { icon: Smartphone, title: 'Mobile App & Notifications', desc: 'Full-featured mobile app with real-time push notifications on every new lead. Check your pipeline, listen to calls, and respond to messages from anywhere.' },
]

const integrations = [
  'Google Calendar', 'Outlook', 'Google Ads', 'Facebook Ads', 'Instagram',
  'Google Business Profile', 'QuickBooks', 'Stripe', 'PayPal', 'Zapier',
  'Google Analytics', 'Facebook Messenger', 'WhatsApp',
]

export default function PlatformContent() {
  return (
    <>
      <PlatformHero />

      {/* Replace your tools */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.03),transparent,rgba(37,99,235,0.03))]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="glass-card rounded-2xl p-10 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Replace <span className="accent-gradient">12+ Tools</span> With One Platform
            </h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              Stop paying for a CRM, email tool, SMS platform, chatbot, calendar app, funnel builder, review tool, and call tracker separately. Everything lives in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['CRM', 'Email Marketing', 'SMS Marketing', 'AI Chatbot', 'Calendar Booking', 'Funnel Builder', 'Website Builder', 'Review Management', 'Call Tracking', 'Pipeline Management', 'Invoicing', 'Social Planner'].map((tool) => (
                <span key={tool} className="bg-accent/5 border border-accent/15 text-accent text-xs font-medium px-4 py-2 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PlatformPipeline />

      <FeatureSection badge="CRM" title="Your Entire Customer Relationship," titleAccent="In One Place"
        subtitle="Full contact management, unified inbox, call tracking, pipelines, and invoicing — designed for the way tint shops actually work."
        features={crmFeatures} />

      <FeatureSection badge="Automation" title="Set It Up Once." titleAccent="It Runs Forever."
        subtitle="AI chatbots, auto-booking, lead scoring, follow-up sequences, and workflow automation that eliminates manual work from your shop."
        features={automationFeatures} cols={4} />

      <FeatureSection badge="Marketing" title="Every Marketing Channel," titleAccent="One Dashboard"
        subtitle="Email, SMS, social media, landing pages, funnels, and ad management — all connected to your CRM so you see the full picture."
        features={marketingFeatures} />

      {/* Reputation */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.04),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Reputation Management</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              5-Star Reviews, <span className="accent-gradient">On Autopilot</span>
            </h2>
            <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
              Automate review requests, respond with AI, and monitor your online reputation — all from one dashboard.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reputationFeatures.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="glass-card rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                  <f.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-text mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection badge="Reporting & Analytics" title="Data That Actually" titleAccent="Means Something"
        subtitle="Revenue attribution, campaign ROI, pipeline analytics, call tracking, and mobile dashboards — so you know exactly where every dollar goes."
        features={reportingFeatures} />

      {/* Integrations */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.03),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Integrations</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Connects With Everything <span className="accent-gradient">You Use</span>
          </h2>
          <p className="text-muted mb-12 max-w-xl mx-auto">
            200+ native integrations plus Zapier support for anything else. Your platform talks to every tool in your stack.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((name) => (
              <span key={name} className="glass-card rounded-xl px-5 py-3 text-sm text-text font-medium">{name}</span>
            ))}
            <span className="glass-card rounded-xl px-5 py-3 text-sm text-accent font-medium">+ 200 more</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            Ready to Run Your Shop <span className="accent-gradient">On Autopilot?</span>
          </h2>
          <p className="text-muted text-center mb-10 text-lg">
            Start your free 14-day trial. We set up your CRM, automations, and campaigns — all included.
          </p>
          <div className="glass-card rounded-2xl p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  )
}
