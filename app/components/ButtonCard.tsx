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
        'group flex h-full flex-col justify-between gap-3 rounded-xl border',
        'border-[color:var(--kp-ink)]/10 bg-white/60 px-5 py-4 text-left',
        'transition hover:border-[color:var(--kp-ink)]/30 hover:bg-white/75',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber',
        'focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--kp-mist)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div>
        <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">{title}</h3>
        <p className="mt-2 text-sm text-[color:var(--kp-ink-muted)]">{description}</p>
      </div>
      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--kp-ink-muted)] group-hover:text-[color:var(--kp-amber)]">
        Explore &gt;
      </span>
    </Link>
  )
}
