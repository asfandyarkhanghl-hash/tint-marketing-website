'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, ChevronDown, Search, MapPin, TrendingUp, Share2, Users, Bot, ArrowRight } from 'lucide-react'

const services = [
  { name: 'Google Ads', href: '/services/google-ads', icon: Search, desc: 'Precision PPC that fills your schedule' },
  { name: 'SEO', href: '/services/seo', icon: TrendingUp, desc: 'Rank for buyer-intent searches' },
  { name: 'Shop Ranking', href: '/services/shop-ranking', icon: MapPin, desc: 'Top 3 on Google Maps' },
  { name: 'Social Media', href: '/services/social-media', icon: Share2, desc: 'Before/after content that converts' },
  { name: 'Lead Management', href: '/services/lead-management', icon: Users, desc: 'CRM & call tracking, unified' },
  { name: 'AI Systems', href: '/services/ai-systems', icon: Bot, desc: '24/7 chatbot & voice agent' },
]

const navLinks = [
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Platform', href: '/platform' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  const { scrollYProgress } = useScroll()
  const progressWidth = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-border shadow-[0_1px_20px_rgba(15,23,42,0.06)]'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-accent via-accent-light to-accent"
        style={{ scaleX: progressWidth }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              <Image
                src="/images/optimized/logo.png"
                alt="Tint Marketing Pro"
                width={180}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => { setServicesOpen(true); setHovered(link.name) }}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="relative flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-text transition-colors rounded-lg"
                  >
                    {hovered === link.name && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-accent/8 rounded-lg"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                    <ChevronDown className={`relative z-10 w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] bg-white/95 backdrop-blur-xl border border-border rounded-2xl shadow-[0_20px_50px_-12px_rgba(15,23,42,0.18)] overflow-hidden p-3"
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {services.map((service, i) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.03, duration: 0.2 }}
                            >
                              <Link
                                href={service.href}
                                className="group flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-accent/5 transition-colors"
                              >
                                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:border-accent transition-colors">
                                  <service.icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-text">{service.name}</p>
                                  <p className="text-xs text-muted mt-0.5">{service.desc}</p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-2 pt-3 border-t border-border/60 px-3">
                          <Link href="/services" className="inline-flex items-center gap-1.5 text-accent text-xs font-bold hover:gap-2.5 transition-all">
                            View all services <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHovered(link.name)}
                  className="relative px-4 py-2.5 text-sm font-medium text-text-secondary hover:text-text transition-colors rounded-lg"
                >
                  {hovered === link.name && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-accent/8 rounded-lg"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              )
            )}
            <Link
              href="/free-trial"
              className="btn-shine ml-3 inline-flex items-center gap-1.5 bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Get Free Trial
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-text p-2 rounded-lg hover:bg-accent/5 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) =>
                link.hasDropdown ? (
                  <motion.div key={link.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }} className="space-y-1 pb-2">
                    <Link href={link.href} className="block text-lg font-semibold text-text py-2" onClick={() => setMobileOpen(false)}>
                      {link.name}
                    </Link>
                    <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-accent/20">
                      {services.map((service) => (
                        <Link key={service.name} href={service.href} className="flex items-center gap-2.5 pl-3 py-2 text-sm text-muted hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
                          <service.icon className="w-4 h-4 text-accent/70" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key={link.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link href={link.href} className="block text-lg font-semibold text-text py-2.5" onClick={() => setMobileOpen(false)}>
                      {link.name}
                    </Link>
                  </motion.div>
                )
              )}
              <Link href="/free-trial" className="btn-shine block text-center bg-accent text-white font-bold px-6 py-3.5 rounded-xl mt-4 shadow-lg shadow-accent/20" onClick={() => setMobileOpen(false)}>
                Get Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
