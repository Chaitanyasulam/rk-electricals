interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const nameSize =
    size === 'lg'
      ? 'text-3xl md:text-5xl'
      : size === 'sm'
        ? 'text-xl'
        : 'text-2xl md:text-4xl'

  const taglineSize =
    size === 'lg'
      ? 'text-sm md:text-base'
      : size === 'sm'
        ? 'text-xs'
        : 'text-sm md:text-lg'

  return (
    <div className="flex flex-col leading-tight">
      <span className={`font-serif font-semibold tracking-wide text-charcoal ${nameSize}`}>
        RK Electricals Private Limited
      </span>

      <span className={`mt-1 tracking-[0.12em] text-gold-600 uppercase ${taglineSize}`}>
        Distribution Transformer Manufacturer
      </span>
    </div>
  )
}