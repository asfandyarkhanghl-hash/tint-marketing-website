import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { BreadcrumbSchema } from '@/components/SchemaMarkup'

export interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [
    { name: 'Home', url: 'https://tintmarketingpros.online' },
    ...items.map((item) => ({
      name: item.name,
      url: `https://tintmarketingpros.online${item.href}`,
    })),
  ]

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          </li>
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-300" />
              {i === items.length - 1 ? (
                <span className="text-text font-medium">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
