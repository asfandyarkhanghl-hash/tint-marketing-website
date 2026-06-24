import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = [
    'ceramic-tint-vs-carbon-tint-marketing',
    'window-tint-shop-google-maps-ranking',
    'google-ads-for-window-tint-shops',
    'window-tint-shop-marketing-plan',
    'window-tint-keywords-seo',
    'tint-shop-lead-follow-up',
    'residential-window-tint-marketing',
    'window-tint-shop-reviews',
  ]

  const caseStudySlugs = [
    'supreme-auto-tint-dallas',
    'crystal-clear-tint-phoenix',
    'elite-tint-pros-atlanta',
  ]

  return [
    { url: 'https://tintmarketingpros.com', lastModified: new Date(), priority: 1.0 },
    { url: 'https://tintmarketingpros.com/free-trial', lastModified: new Date(), priority: 0.95 },
    { url: 'https://tintmarketingpros.com/book', lastModified: new Date(), priority: 0.9 },
    { url: 'https://tintmarketingpros.com/services', lastModified: new Date(), priority: 0.85 },
    { url: 'https://tintmarketingpros.com/services/google-ads', lastModified: new Date(), priority: 0.85 },
    { url: 'https://tintmarketingpros.com/services/seo', lastModified: new Date(), priority: 0.85 },
    { url: 'https://tintmarketingpros.com/services/shop-ranking', lastModified: new Date(), priority: 0.85 },
    { url: 'https://tintmarketingpros.com/services/social-media', lastModified: new Date(), priority: 0.85 },
    { url: 'https://tintmarketingpros.com/platform', lastModified: new Date(), priority: 0.9 },
    { url: 'https://tintmarketingpros.com/about', lastModified: new Date(), priority: 0.7 },
    { url: 'https://tintmarketingpros.com/case-studies', lastModified: new Date(), priority: 0.8 },
    ...caseStudySlugs.map((slug) => ({
      url: `https://tintmarketingpros.com/case-studies/${slug}`,
      lastModified: new Date(),
      priority: 0.75 as const,
    })),
    { url: 'https://tintmarketingpros.com/blog', lastModified: new Date(), priority: 0.75 },
    ...blogSlugs.map((slug) => ({
      url: `https://tintmarketingpros.com/blog/${slug}`,
      lastModified: new Date(),
      priority: 0.7 as const,
    })),
  ]
}
