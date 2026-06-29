import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { caseStudies } from '@/lib/case-studies-data'

const baseUrl = 'https://tintmarketingpros.online'
const lastModified = new Date('2026-06-29')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/book',
    '/calculator',
    '/case-studies',
    '/free-trial',
    '/platform',
    '/services',
    '/services/google-ads',
    '/services/seo',
    '/services/shop-ranking',
    '/services/social-media',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [`${baseUrl}${post.featuredImage.src}`],
  })) satisfies MetadataRoute.Sitemap

  const caseStudyRoutes = caseStudies.map((caseStudy) => ({
    url: `${baseUrl}/case-studies/${caseStudy.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
    images: [`${baseUrl}/images/optimized/stats-dashboard.jpg`],
  })) satisfies MetadataRoute.Sitemap

  return [...staticRoutes, ...blogRoutes, ...caseStudyRoutes]
}
