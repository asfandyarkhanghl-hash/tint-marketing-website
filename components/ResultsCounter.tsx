'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedNumber({ value, suffix = '', prefix = '', duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = value / (duration * 60)
    const timer = setInterval(() => { start += increment; if (start >= value) { setCount(value); clearInterval(timer) } else { setCount(Math.floor(start)) } }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, value, duration])
  return <span ref={ref} className="font-display text-5xl md:text-6xl font-bold text-white">{prefix}{count.toLocaleString()}{suffix}</span>
}

function DecimalCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  useEffect(() => {
    if (!isInView) return
    let start = 0
    const increment = value / 120
    const timer = setInterval(() => { start += increment; if (start >= value) { setCount(value); clearInterval(timer) } else { setCount(Math.round(start * 10) / 10) } }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isInView, value])
  return <span ref={ref} className="font-display text-5xl md:text-6xl font-bold text-white">{prefix}{count.toFixed(1)}{suffix}</span>
}

const stats = [
  { value: 12400, suffix: '+', label: 'Leads Generated for Tint Shops' },
  { value: 63, label: 'Tint Shops We Manage' },
  { value: 2.3, prefix: '$', suffix: 'M+', label: 'In Revenue Driven to Clients' },
  { value: 38, label: 'Avg. Leads Per Client/Month' },
]

export default function ResultsCounter() {
  return (
    <section className="py-16 section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top tagline */}
        <p className="text-center text-sm text-accent-light font-semibold uppercase tracking-widest mb-10">
          Real numbers. Real tint shops. No fluff.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`text-center ${i < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}
            >
              {stat.value % 1 !== 0 ? (
                <DecimalCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              ) : (
                <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              )}
              <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-medium max-w-[160px] mx-auto">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
