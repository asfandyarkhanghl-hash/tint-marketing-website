'use client'

import { useState } from 'react'
import type { BlogPost } from '@/lib/blog-data'
import BlogCard from '@/components/BlogCard'

const categories = ['All', 'Google Ads', 'SEO', 'Local Ranking', 'Business Tips', 'Social Media']

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-accent text-white'
                : 'bg-white text-muted hover:text-text border border-slate-200'
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
    </>
  )
}
