'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const services = [
  { name: 'Google Ads', href: '/services/google-ads' },
  { name: 'SEO', href: '/services/seo' },
  { name: 'Shop Ranking', href: '/services/shop-ranking' },
  { name: 'Social Media', href: '/services/social-media' },
]

const navLinks = [
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Platform', href: '/platform' },
  { name: 'ROI Calculator', href: '/calculator' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Tint Marketing Pro"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-sm font-medium text-muted hover:text-text transition-colors"
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-52 bg-white border border-border rounded-xl shadow-xl overflow-hidden"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 text-sm text-muted hover:text-text hover:bg-surface transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-text transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              href="/free-trial"
              className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Get Free Trial
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-text p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name} className="space-y-2">
                    <Link href={link.href} className="block text-lg font-medium text-text" onClick={() => setMobileOpen(false)}>
                      {link.name}
                    </Link>
                    <div className="pl-4 space-y-2 border-l-2 border-border">
                      {services.map((service) => (
                        <Link key={service.name} href={service.href} className="block text-sm text-muted hover:text-text" onClick={() => setMobileOpen(false)}>
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={link.name} href={link.href} className="block text-lg font-medium text-text" onClick={() => setMobileOpen(false)}>
                    {link.name}
                  </Link>
                )
              )}
              <Link href="/free-trial" className="block text-center bg-accent text-white font-semibold px-6 py-3 rounded-lg" onClick={() => setMobileOpen(false)}>
                Get Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
