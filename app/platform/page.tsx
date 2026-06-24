import type { Metadata } from 'next'
import PlatformContent from '@/components/PlatformContent'

export const metadata: Metadata = {
  title: 'CRM, Automation & Reporting Platform for Tint Shops',
  description: 'All-in-one CRM, AI chatbot, auto-booking, lead management, reputation management, and reporting — built for window tint shops. Replace 12+ tools with one platform.',
}

export default function PlatformPage() {
  return <PlatformContent />
}
