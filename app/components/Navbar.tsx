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
            src="/brand/collective-mark-64.png"
            alt="KindPath Collective"
            className="h-10 w-10 rounded-full"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[color:var(--kp-ink)]">
              KindPath Collective
            </div>
            <div className="text-[11px] tracking-wide text-[color:var(--kp-ink)]/70">
              <span>KindPath Foundation</span>
              <span className="px-2 opacity-40">|</span>
              <span>KindPath Collective</span>
              <span className="px-2 opacity-40">|</span>
              <span>KindEarth</span>
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
          className="rounded-full bg-[color:var(--kp-amber)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
        >
          Join the Pilot
        </Link>
      </div>
    </nav>
  )
}
