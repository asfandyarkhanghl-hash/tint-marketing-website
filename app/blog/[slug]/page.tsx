import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, User } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'
import { ArticleSchema } from '@/components/SchemaMarkup'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `https://tintmarketingpros.online/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://tintmarketingpros.online/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.metaDescription,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        slug={post.slug}
        datePublished={post.date}
      />

      <article className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-muted text-xs">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted mb-12 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <div className="prose-custom">
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) {
                return <h2 key={i} className="font-display text-2xl md:text-3xl font-bold text-text mt-12 mb-6">{block.replace('## ', '')}</h2>
              }
              if (block.startsWith('### ')) {
                return <h3 key={i} className="font-display text-xl font-bold text-text mt-8 mb-4">{block.replace('### ', '')}</h3>
              }
              if (block.startsWith('> ')) {
                return (
                  <blockquote key={i} className="border-l-4 border-accent pl-6 py-3 my-8 bg-surface rounded-r-xl">
                    <p className="text-text italic">{block.replace('> ', '')}</p>
                  </blockquote>
                )
              }
              if (block.startsWith('| ')) {
                return <div key={i} className="overflow-x-auto my-8 bg-surface border border-border rounded-xl p-6"><p className="text-muted text-sm whitespace-pre-wrap font-mono">{block}</p></div>
              }
              if (block.startsWith('- ') || block.startsWith('1. ')) {
                const items = block.split('\n').filter(Boolean)
                return (
                  <ul key={i} className="space-y-2 my-6 pl-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-muted leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2.5" />
                        <span>{item.replace(/^[-\d.]\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                )
              }

              const formatted = block
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text font-semibold">$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')

              return <p key={i} className="text-muted leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: formatted }} />
            })}
          </div>

          {/* Inline CTA */}
          <div className="my-16 bg-surface border-2 border-accent/30 rounded-2xl p-8 text-center">
            <h3 className="font-display text-2xl font-bold mb-3">
              Want us to handle this for you?
            </h3>
            <p className="text-muted mb-6">
              Start your free 14-day trial. We build and launch everything while you focus on tinting.
            </p>
            <Link
              href="/free-trial"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-lg transition-all"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-accent/30 transition-all"
              >
                <span className="text-accent text-xs font-semibold">{rp.category}</span>
                <h3 className="font-bold text-text mt-2 mb-2 group-hover:text-accent transition-colors text-sm">
                  {rp.title}
                </h3>
                <p className="text-muted text-xs">{rp.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
