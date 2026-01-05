import type { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
}

export default function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={[
        'rounded-2xl border backdrop-blur-md',
        'bg-[color:var(--kp-panel)] border-[color:var(--kp-panel-border)] shadow-[var(--kp-shadow)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
