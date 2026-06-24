import type { Metadata } from 'next'
import PlatformContent from '@/components/PlatformContent'

export const metadata: Metadata = {
  title: 'CRM & Automation Platform for Tint Shops',
  description: 'All-in-one CRM, AI chatbot, auto-booking, lead management, and reporting for window tint shops. Replace 12+ tools with one platform.',
  keywords: [
    'tint shop CRM',
    'window tint business automation',
    'tint shop lead management',
    'window tint booking software',
    'tint shop reputation management',
    'tint business reporting dashboard',
  ],
  alternates: {
    canonical: 'https://tintmarketingpros.online/platform',
  },
  openGraph: {
    title: 'CRM & Automation Platform for Tint Shops',
    description: 'All-in-one CRM, AI chatbot, auto-booking, lead management, and reporting built for window tint shops.',
    url: 'https://tintmarketingpros.online/platform',
    type: 'website',
  },
}

export default function PlatformPage() {
  return <PlatformContent />
}
