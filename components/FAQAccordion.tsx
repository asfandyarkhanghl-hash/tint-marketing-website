'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { question: 'Do you work with all types of businesses?', answer: 'No. We exclusively serve window tint shops. This means everything we do is built specifically for your industry — your keywords, your seasonality, your customer behavior. That specialization is what makes our results possible.' },
  { question: 'What does "free trial" mean exactly?', answer: 'We run your Google Ads or SEO campaign for 14 days at zero cost to you. No credit card required. No commitment. You see real results — actual leads and calls — before spending a dollar.' },
  { question: 'How fast do I get results?', answer: 'Most clients see their first leads within 7–14 days of campaign launch. Google Maps ranking improvements typically show in 30–60 days. We set realistic expectations upfront based on your specific market.' },
  { question: "What if I don't see results?", answer: "We have a simple results guarantee: if you don't see measurable improvement in 30 days, you don't pay. No contracts, no fine print. We only win when you win." },
  { question: 'Do I need a website?', answer: "We prefer to work with your existing site, but it's not required. If you don't have one, we can build a high-converting landing page as part of your onboarding — designed specifically for tint shop customers." },
  { question: 'What cities and states do you work in?', answer: 'We work with tint shops across the entire United States. Local market research is included in your onboarding — we analyze your specific city, competitors, and keyword landscape before launching anything.' },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
          Frequently Asked <span className="accent-gradient">Questions</span>
        </h2>
        <p className="text-muted text-center mb-12">Everything you need to know before getting started.</p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                <span className="font-semibold text-text pr-4">{faq.question}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-accent flex-shrink-0" /> : <Plus className="w-5 h-5 text-muted flex-shrink-0" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <div className="px-6 pb-5"><p className="text-muted text-sm leading-relaxed">{faq.answer}</p></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
