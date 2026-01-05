import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'KindEarth Platform | Tools',
  description: 'KindEarth is the core platform for ethical policy forecasting and sovereignty-first pilots.',
}

export default function KindEarthPlatform() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Tools</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">KindEarth Platform</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            KindEarth is the core platform for ethical policy forecasting and sovereignty-first pilots.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            It connects upstream signals with practical pilot operations, translating field conditions into understandable
            scenarios without predictive scoring. The platform prioritizes consent, interpretability, and local ownership
            of data.
          </p>
          <p>
            KindEarth is designed to keep communities in the loop, so pilots remain reversible, measurable, and grounded in
            lived reality.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How it&apos;s used in KindEarth</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
            <li>Aggregate policy stress, drift, trust liquidity, and ecological constraints.</li>
            <li>Run scenario exploration with community-facing summaries.</li>
            <li>Anchor pilots in governance, consent, and auditability.</li>
          </ul>
        </section>

        <p className="text-sm font-semibold text-[color:var(--kp-ink)]">Status: Pilot-ready build</p>

        <Link href="/" className="text-sm font-semibold text-[color:var(--kp-ink)] hover:text-[color:var(--kp-amber)]">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
