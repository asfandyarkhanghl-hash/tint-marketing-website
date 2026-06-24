export interface CaseStudy {
  slug: string
  shopName: string
  city: string
  state: string
  niche: string
  problem: string
  problemDetail: string
  strategy: string[]
  results: { metric: string; label: string }[]
  timeline: { month: string; description: string }[]
  quote: string
  quoteName: string
  revenue: string
  resultMetric: string
  resultLabel: string
  metaTitle: string
  metaDescription: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'supreme-auto-tint-dallas',
    shopName: 'Supreme Auto Tint',
    city: 'Dallas',
    state: 'TX',
    niche: 'Automotive Tint',
    problem: '$0 from Google. Relying 100% on referrals.',
    problemDetail:
      'Supreme Auto Tint had been in business for 6 years, built entirely on word-of-mouth. The owner, Marcus, knew he was leaving money on the table — but every time he tried Google Ads on his own, he burned through $500 with nothing to show for it. His website was buried on page 4. His Google Business Profile had 11 reviews and no photos. Competitors with inferior work were dominating his local market.',
    strategy: [
      'Built a hyper-local Google Ads campaign targeting "ceramic tint Dallas", "auto window tint near me", and 23 other high-intent keywords specific to the DFW market',
      'Added 47 negative keywords to eliminate tire-kickers searching for DIY tutorials and tint law information',
      'Optimized his Google Business Profile with professional photos, service descriptions, and a review generation system',
      'Created a conversion-focused landing page with before/after galleries, pricing transparency, and a click-to-call CTA',
      'Set up automated lead notification so Marcus could respond within 2 minutes of every inquiry',
    ],
    results: [
      { metric: '127', label: 'Leads in 60 days' },
      { metric: '$38K', label: 'Revenue added' },
      { metric: '3 weeks', label: 'Booked out' },
      { metric: '$11', label: 'Cost per lead' },
    ],
    timeline: [
      {
        month: 'Week 1–2',
        description:
          'Account audit, keyword research, competitor analysis. Built campaign structure and landing page. Set up conversion tracking.',
      },
      {
        month: 'Week 3–4',
        description:
          'Campaign launched. First 18 leads came in within 12 days. Refined ad copy based on click-through data. Started Google Maps optimization.',
      },
      {
        month: 'Month 2',
        description:
          'Hit stride. 109 additional leads. Marcus hired a second installer. Google Maps position moved from #9 to #3 for "window tint Dallas".',
      },
    ],
    quote:
      "I spent 6 years building this business on referrals alone. In 60 days with Tint Marketing Pro, I generated more leads than I got in the entire previous year. I'm now booked 3 weeks out and had to bring on another installer. I only wish I'd found these guys sooner.",
    quoteName: 'Marcus T., Owner',
    revenue: '$38,000 in 60 days',
    resultMetric: '127 leads',
    resultLabel: 'in first 60 days',
    metaTitle: 'Supreme Auto Tint Dallas Case Study — 127 Leads in 60 Days',
    metaDescription:
      'How Supreme Auto Tint in Dallas went from $0 Google revenue to 127 leads and $38K in 60 days with Tint Marketing Pro.',
  },
  {
    slug: 'crystal-clear-tint-phoenix',
    shopName: 'Crystal Clear Tint',
    city: 'Phoenix',
    state: 'AZ',
    niche: 'Ceramic & Residential Tint',
    problem: 'Spending $2,000/mo on ads with no tracking, no ROI data.',
    problemDetail:
      "Crystal Clear Tint was spending $2,000 every month on Google Ads managed by a general marketing agency. The agency sent them a monthly PDF report full of impressions and click counts — but Sandra, the owner, had no idea which clicks turned into actual paying customers. She suspected most of her budget was being wasted on irrelevant searches, but couldn't prove it. Her Google Maps listing was stuck at position #7, and her cost per lead was somewhere north of $80.",
    strategy: [
      'Audited their existing Google Ads account — found 62% of spend was going to non-converting keywords like "window tint removal" and "how to tint windows"',
      'Rebuilt the campaign from scratch with 31 tint-specific keywords, proper match types, and aggressive negative keyword lists',
      'Reduced monthly ad spend from $2,000 to $900 while tripling conversion volume',
      'Implemented call tracking and form tracking so every lead source was visible in a live dashboard',
      'Ran a 90-day Google Maps optimization campaign — photos, Q&A, citation cleanup, and review velocity push',
    ],
    results: [
      { metric: '3x', label: 'Lead volume increase' },
      { metric: '#1', label: 'Google Maps ranking' },
      { metric: '$22K/mo', label: 'Revenue added' },
      { metric: '55%', label: 'Ad spend reduction' },
    ],
    timeline: [
      {
        month: 'Week 1–2',
        description:
          'Full account audit revealed massive waste. Paused 14 underperforming ad groups. Built new campaign structure with tint-specific ad copy.',
      },
      {
        month: 'Month 1',
        description:
          'New campaigns launched at $900/mo (down from $2,000). Lead volume increased immediately. Installed call tracking to attribute every lead to a source.',
      },
      {
        month: 'Month 2–3',
        description:
          'Google Maps position climbed from #7 to #1 for "ceramic tint Phoenix". Organic leads started flowing. Revenue stabilized at $22K/month in new business.',
      },
    ],
    quote:
      "I was paying twice as much for a quarter of the results. The first thing Tint Marketing Pro did was show me exactly where my money was going — and 62% of it was being wasted. They cut my spend in half and tripled my leads. Now I can see every single lead source in a dashboard. I'll never work with a generic agency again.",
    quoteName: 'Sandra R., Owner',
    revenue: '$22K/month added',
    resultMetric: '#1 Maps',
    resultLabel: 'ceramic tint Phoenix',
    metaTitle: 'Crystal Clear Tint Phoenix Case Study — #1 Google Maps Ranking',
    metaDescription:
      'How Crystal Clear Tint in Phoenix cut ad spend 55%, tripled leads, and reached #1 on Google Maps for "ceramic tint Phoenix".',
  },
  {
    slug: 'elite-tint-pros-atlanta',
    shopName: 'Elite Tint Pros',
    city: 'Atlanta',
    state: 'GA',
    niche: 'Automotive & Commercial Tint',
    problem: 'Invisible on Google Maps. Local competitor dominated the map pack.',
    problemDetail:
      "Elite Tint Pros was stuck at position #12 on Google Maps — essentially invisible. A competitor two miles away had locked down the top spot and was getting the lion's share of calls. James, the owner, was doing excellent work — 5-star reviews, premium films, clean shop — but none of that mattered because nobody could find him. His website had no local SEO optimization, and his Google Business Profile was missing half its information.",
    strategy: [
      'Complete Google Business Profile overhaul — added 45 professional photos, updated all service categories, wrote keyword-rich descriptions, and set up weekly Google Posts',
      'Built a citation profile across 52 local directories with consistent NAP (Name, Address, Phone) data',
      'Launched a review generation system that increased review velocity from 1 per month to 8 per month',
      'Created 6 location-specific service pages targeting "window tint Atlanta", "ceramic tint Buckhead", "auto tint Marietta" and surrounding areas',
      'Set up a Google Ads campaign to drive immediate leads while the organic rankings built up',
    ],
    results: [
      { metric: '#2', label: 'Google Maps position' },
      { metric: '6x', label: 'Weekly call volume' },
      { metric: '47 days', label: 'To reach top 3' },
      { metric: '$19K/mo', label: 'Revenue increase' },
    ],
    timeline: [
      {
        month: 'Week 1–2',
        description:
          'Google Business Profile audit and overhaul. Professional photo upload. Citation cleanup across 52 directories. Review generation system installed.',
      },
      {
        month: 'Month 1',
        description:
          'Google Maps position moved from #12 to #5. Google Ads campaign launched as a bridge. First month generated 34 leads from ads alone.',
      },
      {
        month: 'Day 47',
        description:
          'Hit the Google Maps top 3. Organic calls surged. James went from 5 calls per week to 30+ calls per week. Started turning down jobs due to capacity.',
      },
    ],
    quote:
      "I went from 5 calls a week to 30+ calls a week. That's not an exaggeration — I counted. My competitor had been dominating Google Maps for years, and Tint Marketing Pro got me into the top 3 in 47 days. I actually had to start a waiting list. The ROI on this is insane.",
    quoteName: 'James K., Owner',
    revenue: '$19K/month increase',
    resultMetric: '30+ calls/week',
    resultLabel: 'up from 5 calls/week',
    metaTitle: 'Elite Tint Pros Atlanta Case Study — From Invisible to Top 3 Maps',
    metaDescription:
      'How Elite Tint Pros in Atlanta went from position #12 to #2 on Google Maps in 47 days and 6x their call volume.',
  },
]
