import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you', '/thank-you-booking'],
    },
    sitemap: 'https://tintmarketingpros.com/sitemap.xml',
  }
}
