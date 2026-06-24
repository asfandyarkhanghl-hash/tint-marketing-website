'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Marcus T.', location: 'Phoenix, AZ', text: "I've worked with 3 marketing agencies before. None of them understood window tinting. Tint Marketing Pro knew exactly what keywords our customers use, what makes them click, and how to convert them. Month 1 was eye-opening." },
  { name: 'Sandra R.', location: 'Dallas, TX', text: "They promised results in 14 days. I got my first 12 leads in 9 days. The follow-up automation alone is worth the price." },
  { name: 'James K.', location: 'Miami, FL', text: "I went from invisible on Google Maps to the #2 spot in my city in under 2 months. My schedule is packed." },
  { name: 'David L.', location: 'Houston, TX', text: "Every other agency gave me generic reports. These guys told me exactly which keywords were making me money and which were wasting my budget. Total transparency." },
  { name: 'Priya M.', location: 'Charlotte, NC', text: "The free trial converted me instantly. I had nothing to lose, and within the first week I could see the machine working. Haven't looked back." },
]

export default function TestimonialCarousel() {
  const doubled = [...testimonials, ...testimonials]
  return (
    <section className="py-24 section-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center text-white">
          What Shop Owners <span className="accent-gradient">Say</span>
        </h2>
      </div>
      <div className="relative">
        <motion.div className="flex gap-6 w-max" animate={{ x: ['0%', '-50%'] }} transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' } }}>
          {doubled.map((t, i) => (
            <div key={i} className="w-[380px] flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
