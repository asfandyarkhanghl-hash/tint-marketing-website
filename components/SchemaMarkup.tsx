export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MarketingAgency',
    name: 'Tint Marketing Pro',
    url: 'https://tintmarketingpros.com',
    description:
      'Marketing agency exclusively serving window tint shops. Google Ads, Local SEO, and Google Maps ranking for tint businesses.',
    areaServed: 'United States',
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
}: {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Organization',
      name: 'Tint Marketing Pro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tint Marketing Pro',
    },
    url: `https://tintmarketingpros.com/blog/${slug}`,
    datePublished,
    dateModified: dateModified || datePublished,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
