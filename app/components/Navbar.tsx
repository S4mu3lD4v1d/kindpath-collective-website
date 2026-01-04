import Link from 'next/link'

export default function Navbar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/platform', label: 'Platform' },
    { href: '/team', label: 'Team' },
    { href: '/projects', label: 'Projects' },
    { href: '/governance', label: 'Governance' },
  ]

  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--kp-mist)] bg-white/95 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-primary hover:text-primary-dark">
          KindPath Collective
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm text-[color:var(--kp-slate-600)]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/join-pilot"
          className="rounded-full bg-amber px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
        >
          Join the Pilot
        </Link>
      </div>
    </header>
  )
}
