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
        'shadow-[0_12px_24px_-20px_rgba(27,43,31,0.35)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
