import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  { name: 'Google Ads', href: '/services/google-ads' },
  { name: 'SEO', href: '/services/seo' },
  { name: 'Shop Ranking', href: '/services/shop-ranking' },
  { name: 'Social Media', href: '/services/social-media' },
]

const resourceLinks = [
  { name: 'Platform & CRM', href: '/platform' },
  { name: 'Blog', href: '/blog' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Free Trial', href: '/free-trial' },
]

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Book a Call', href: '/book' },
]

export default function Footer() {
  return (
    <footer className="section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Image src="/images/logo.png" alt="Tint Marketing Pro" width={160} height={45} className="h-9 w-auto mb-4 brightness-0 invert" />
            <p className="text-slate-400 text-sm leading-relaxed">
              The only marketing agency built exclusively for window tint shops.
              More leads. More appointments. More growth.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-slate-400">
            {['No Contracts', 'Results Guaranteed', 'Tint Shops Only'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Tint Marketing Pro. All rights reserved.</p>
        </div>
        <p className="mt-6 text-center text-xs text-slate-600">
          Results vary by market. Case study results represent individual client outcomes.
        </p>
      </div>
    </footer>
  )
}
