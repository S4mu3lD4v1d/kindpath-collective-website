import Link from 'next/link'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/platform', label: 'Platform' },
  { href: '/team', label: 'Team' },
  { href: '/projects', label: 'Projects' },
  { href: '/governance', label: 'Governance' },
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
        {/* Brand (top-left logo + name) */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/brand/collective-mark.svg"
            alt="KindPath Collective"
            className="h-9 w-9"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[color:var(--kp-ink)]">
              KindPath Collective
            </div>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[color:var(--kp-ink)]/80">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[color:var(--kp-ink)] hover:underline decoration-[color:var(--kp-amber)] underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/#pilot"
          className="btn-primary"
        >
          Join the Pilot
        </Link>
      </div>
    </nav>
  )
}
