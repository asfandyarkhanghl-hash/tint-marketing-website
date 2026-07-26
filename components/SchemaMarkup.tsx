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
      'CRM & Lead Management',
      'AI Automation Systems',
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
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lead Management & CRM',
            url: 'https://tintmarketingpros.online/services/lead-management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Systems for Tint Shops',
            url: 'https://tintmarketingpros.online/services/ai-systems',
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
      {
        '@type': 'Question',
        name: 'I run a mobile tint business with no storefront. Can you still help?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We set your Google Business Profile up as a service-area business, build location pages for every city you cover, and run ads targeting the neighborhoods you actually serve.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does the AI system work — will it feel robotic to customers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The AI chatbot and voice agent are trained on your shop’s exact services, pricing ranges, and tone, and hand off to your team the moment a lead is ready to book.',
        },
      },
      {
        '@type': 'Question',
        name: 'What results should a tint marketing agency actually deliver?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At minimum: a documented number of qualified leads per month, cost-per-lead you can see in real time, call recordings tied to the campaign that generated them, and Google Maps ranking movement you can verify yourself. If an agency can\'t show you those four things in a dashboard, you\'re paying for guesswork.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I stop missing leads at my tint shop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Three things fix most missed-lead problems: automatic missed-call text-back so nobody who calls while you\'re tinting a car goes silent, a follow-up sequence that runs within 5 minutes of a new lead instead of hours later, and a single CRM inbox so leads from Google, Facebook, and your website all land in one place instead of getting lost across texts and voicemail.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with window film and PPF businesses, not just auto tint?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many of our clients install residential and commercial window film and paint protection film alongside auto tint. The lead generation, ranking, and CRM systems we build work the same way for window film dealers as they do for auto tint shops.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does full-funnel advertising mean for a tint shop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Full-funnel means covering every stage a customer goes through — Google Ads and Maps ranking to capture people actively searching, retargeting ads for people who visited but didn\'t book, and CRM follow-up to convert the leads you already have. Most shops only run the first stage and lose the other two.',
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

export function FAQPageSchema({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
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
