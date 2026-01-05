import type { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
}

export default function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={[
        'rounded-2xl border border-black/5 bg-white/55 backdrop-blur-md',
        'shadow-sm',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
