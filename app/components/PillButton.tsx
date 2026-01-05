import type { ReactNode } from 'react'
import Link from 'next/link'

interface PillButtonProps {
  href: string
  children: ReactNode
  className?: string
}

export default function PillButton({ href, children, className }: PillButtonProps) {
  return (
    <Link
      href={href}
      className={[
        'flex items-center justify-center rounded-full border border-[color:var(--kp-panel-border)]',
        'bg-white/50 px-4 py-2 text-center text-xs font-semibold text-[color:var(--kp-ink-soft)]',
        'transition hover:border-black/20 hover:bg-white/65',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--kp-mist)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Link>
  )
}
