export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    name: 'Tint Marketing Pro',
    url: 'https://tintmarketingpros.online',
    description:
      'Marketing agency exclusively serving window tint shops. Google Ads, Local SEO, and Google Maps ranking for tint businesses.',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: [
      'Google Ads',
      'Search Engine Optimization',
      'Local SEO',
      'Social Media Marketing',
    ],
    knowsAbout: [
      'Window Tinting',
      'Ceramic Tint',
      'Auto Tint',
      'Residential Window Tinting',
    ],
    sameAs: [
      'https://tintmarketingpros.online',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://tintmarketingpros.online/#business',
    name: 'Tint Marketing Pro',
    url: 'https://tintmarketingpros.online',
    description:
      'Marketing agency exclusively serving window tint shops across the United States. Specializing in Google Ads, Local SEO, Google Maps ranking, and social media marketing for tint businesses.',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '63',
      bestRating: '5',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Window Tint Shop Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Ads for Tint Shops',
            url: 'https://tintmarketingpros.online/services/google-ads',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Window Tint SEO',
            url: 'https://tintmarketingpros.online/services/seo',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Google Maps Ranking',
            url: 'https://tintmarketingpros.online/services/shop-ranking',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media & Retargeting',
            url: 'https://tintmarketingpros.online/services/social-media',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Tint Marketing Pro',
      url: 'https://tintmarketingpros.online',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    serviceType: 'Digital Marketing',
    audience: {
      '@type': 'Audience',
      audienceType: 'Window Tint Shop Owners',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function AggregateRatingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Tint Marketing Pro',
    url: 'https://tintmarketingpros.online',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '63',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Marcus T.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'I spent 6 years building this business on referrals alone. In 60 days with Tint Marketing Pro, I generated more leads than I got in the entire previous year.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Sandra R.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'They cut my spend in half and tripled my leads. Now I can see every single lead source in a dashboard.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'James K.' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'I went from 5 calls a week to 30+ calls a week. Tint Marketing Pro got me into the top 3 in 47 days.',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you work with all types of businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. We exclusively serve window tint shops. This means everything we do is built specifically for your industry — your keywords, your seasonality, your customer behavior.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does "free trial" mean exactly?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We run your Google Ads or SEO campaign for 14 days at zero cost to you. No credit card. No commitment. You see real results before spending a dollar.',
        },
      },
      {
        '@type': 'Question',
        name: 'How fast do I get results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most clients see their first leads within 7–14 days of campaign launch. Google Maps ranking improvements typically show in 30–60 days.',
        },
      },
      {
        '@type': 'Question',
        name: "What if I don't see results?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We have a simple results guarantee: if you don't see measurable improvement in 30 days, you don't pay. No contracts, no fine print.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We prefer to work with your existing site. If you don't have one, we can build a high-converting landing page as part of onboarding.",
        },
      },
      {
        '@type': 'Question',
        name: 'What cities and states do you work in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with tint shops across the entire United States. Local market research is included in your onboarding.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
  image?: {
    url: string
    width: number
    height: number
    alt: string
  }
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tintmarketingpros.online/blog/${slug}`,
    },
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: 'Tint Marketing Pro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tint Marketing Pro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tintmarketingpros.online/images/optimized/logo.png',
      },
    },
    url: `https://tintmarketingpros.online/blog/${slug}`,
    datePublished,
    dateModified: dateModified || datePublished,
    image: image
      ? {
          '@type': 'ImageObject',
          url: image.url,
          width: image.width,
          height: image.height,
          caption: image.alt,
        }
      : undefined,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
