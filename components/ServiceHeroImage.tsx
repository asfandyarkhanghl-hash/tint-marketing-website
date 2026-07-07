import Image from 'next/image'

type ServiceHeroImageProps = {
  src: string
  alt: string
  priority?: boolean
}

export default function ServiceHeroImage({ src, alt, priority = false }: ServiceHeroImageProps) {
  return (
    <div className="mt-12 lg:mt-0">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-black/20">
        <Image
          src={src}
          alt={alt}
          width={1586}
          height={992}
          priority={priority}
          sizes="(min-width: 1024px) 44vw, 100vw"
          className="aspect-[16/10] w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
      </div>
    </div>
  )
}
