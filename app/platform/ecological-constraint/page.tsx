import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ecological Constraint | KindEarth Platform',
  description: 'Ecological constraint maps the real-world limits and capacities that shape pilot viability.',
}

export default function EcologicalConstraint() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Platform Metric</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">Ecological Constraint</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            Ecological constraint maps the real-world limits and capacities that shape pilot viability.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            KindEarth centers place-based realities: water, land, infrastructure, transport, biodiversity, and community
            stewardship. Constraint is not a stop sign, it is a design boundary that keeps pilots grounded and survivable.
          </p>
          <p>
            The signal is interpreted with local knowledge so that ecological context is not flattened into a single score.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How it&apos;s used in KindEarth</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
            <li>Set feasibility boundaries for pilot scopes and timelines.</li>
            <li>Identify resource pinch points and local capacity thresholds.</li>
            <li>Document ecological tradeoffs alongside social outcomes.</li>
          </ul>
        </section>

        <p className="text-sm font-semibold text-[color:var(--kp-ink)]">Status: Concept validation</p>

        <Link href="/" className="text-sm font-semibold text-[color:var(--kp-ink)] hover:text-[color:var(--kp-amber)]">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
