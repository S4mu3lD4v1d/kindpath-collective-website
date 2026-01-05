import type { ReactNode } from 'react'

interface PageShellProps {
  title: string
  eyebrow?: string
  description?: string
  align?: 'left' | 'center'
  children: ReactNode
}

export default function PageShell({ title, eyebrow, description, align = 'left', children }: PageShellProps) {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 py-14 space-y-10">
        <header className={align === 'center' ? 'space-y-3 text-center' : 'space-y-3'}>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--kp-ink-muted)]">{eyebrow}</p>
          ) : null}
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">{title}</h1>
          {description ? (
            <p className="text-lg text-[color:var(--kp-ink-soft)]">{description}</p>
          ) : null}
        </header>
        {children}
      </div>
    </main>
  )
}
