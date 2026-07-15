import { type ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  reverse?: boolean
  pauseOnHover?: boolean
}

export default function Marquee({
  children,
  speed = 105,
  reverse = false,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={`marquee-wrapper overflow-hidden ${pauseOnHover ? 'marquee-pause-hover' : ''}`}
    >
      <div
        className={`marquee-track flex w-max gap-4 ${reverse ? 'marquee-reverse' : ''}`}
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 gap-4">{children}</div>
        <div className="flex shrink-0 gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
