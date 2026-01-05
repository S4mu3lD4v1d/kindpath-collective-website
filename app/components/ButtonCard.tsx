import Link from 'next/link'

interface ButtonCardProps {
  href: string
  title: string
  description: string
  className?: string
}

export default function ButtonCard({ href, title, description, className }: ButtonCardProps) {
  return (
    <Link
      href={href}
      className={[
        'group flex h-full flex-col justify-between gap-2 rounded-xl border',
        'border-[color:var(--kp-panel-border)] bg-white/50 px-4 py-3 text-left',
        'transition hover:border-black/20 hover:bg-white/65',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--kp-mist)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div>
        <h3 className="text-base font-semibold text-[color:var(--kp-ink)]">{title}</h3>
        <p className="mt-1 text-sm text-[color:var(--kp-ink-soft)]">{description}</p>
      </div>
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--kp-ink-muted)] group-hover:text-forest">
        Explore →
      </span>
    </Link>
  )
}
