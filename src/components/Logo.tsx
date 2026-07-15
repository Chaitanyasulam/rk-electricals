interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: LogoProps) {
  const nameSize =
    size === 'lg'
      ? 'text-lg md:text-xl'
      : size === 'sm'
        ? 'text-sm'
        : 'text-base md:text-lg'

  const taglineSize =
    size === 'lg' ? 'text-xs' : size === 'sm' ? 'text-[0.6rem]' : 'text-[0.7rem]'

  return (
    <div className="flex flex-col leading-tight">
      <span className={`font-serif font-semibold tracking-wide text-charcoal ${nameSize}`}>
        RK Electricals Private Limited
      </span>
      <span className={`mt-0.5 tracking-[0.12em] text-gold-600 uppercase ${taglineSize}`}>
        Distribution Transformer Manufacturer
      </span>
    </div>
  )
}
