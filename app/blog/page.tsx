import type { Metadata } from 'next'
import { blogPosts } from '@/lib/blog-data'
import BlogListClient from '@/components/BlogListClient'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog — Window Tint Marketing Insights',
  description: 'Actionable guides on Google Ads, SEO, Google Maps ranking, lead management, and AI systems written specifically for window tint shop owners.',
  keywords: [
    'window tint marketing blog',
    'tint shop marketing tips',
    'window tint SEO guide',
    'tint shop lead generation blog',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/blog',
  },
  openGraph: {
    title: 'Blog — Window Tint Marketing Insights',
    description: 'Actionable guides on Google Ads, SEO, Google Maps ranking, lead management, and AI systems written specifically for window tint shop owners.',
    url: 'https://tintmarketingpros.online/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Blog</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Window Tint <span className="accent-gradient">Marketing Insights</span>
          </h1>
          <p className="text-muted text-xl max-w-2xl">
            Actionable guides, keyword strategies, and growth tactics written specifically for tint shop owners.
          </p>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogListClient posts={blogPosts} />
        </div>
      </section>
    </>
  )
}
