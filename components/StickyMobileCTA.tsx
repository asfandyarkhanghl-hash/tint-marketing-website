'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarCheck, ArrowRight } from 'lucide-react'

const HIDDEN_PATHS = ['/free-trial', '/book', '/thank-you', '/thank-you-booking']

export default function StickyMobileCTA() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (HIDDEN_PATHS.some((p) => pathname?.startsWith(p))) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-3 py-3"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          <div className="flex items-center gap-2">
            <Link
              href="/book"
              className="flex-1 inline-flex items-center justify-center gap-1.5 border-2 border-accent/20 text-accent font-semibold text-sm px-4 py-3 rounded-xl transition-all active:scale-95"
            >
              <CalendarCheck className="w-4 h-4" />
              Book a Call
            </Link>
            <Link
              href="/free-trial"
              className="btn-shine flex-1 inline-flex items-center justify-center gap-1.5 bg-accent text-white font-bold text-sm px-4 py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-accent/20"
            >
              Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
