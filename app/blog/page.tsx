'use client'

import { useState } from 'react'
import { blogPosts } from '@/lib/blog-data'
import BlogCard from '@/components/BlogCard'

const categories = ['All', 'Google Ads', 'SEO', 'Local Ranking', 'Business Tips']

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      <section className="pt-32 pb-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-surface2 text-muted hover:text-text border border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
