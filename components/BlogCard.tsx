import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import type { BlogPost } from '@/lib/blog-data'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-accent/30 hover:shadow-md transition-all block"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={post.featuredImage.src}
          alt={post.featuredImage.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-muted text-xs">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <h3 className="font-display text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-1 text-sm text-accent font-medium group-hover:gap-2 transition-all">
          Read Article <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  )
}
