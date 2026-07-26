import type { Metadata } from 'next'
import PlatformContent from '@/components/PlatformContent'

export const metadata: Metadata = {
  title: 'CRM & Automation Platform for Tint Shops',
  description: 'All-in-one CRM, AI chatbot, auto-booking, and lead management for window tint shops — with full reporting and analytics on every lead and dollar spent. Replace 12+ tools with one platform.',
  keywords: [
    'tint shop CRM',
    'window tint business automation',
    'tint shop lead management',
    'window tint booking software',
    'tint shop reputation management',
    'tint business reporting dashboard',
    'window tint marketing reporting',
    'window tint marketing analytics',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/platform',
  },
  openGraph: {
    title: 'CRM & Automation Platform for Tint Shops',
    description: 'All-in-one CRM, AI chatbot, auto-booking, lead management, and full reporting and analytics built for window tint shops.',
    url: 'https://tintmarketingpros.online/platform',
    type: 'website',
  },
}

export default function PlatformPage() {
  return <PlatformContent />
}
