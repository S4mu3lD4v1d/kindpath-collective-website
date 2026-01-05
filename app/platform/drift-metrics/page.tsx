import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Drift Metrics | KindEarth Platform',
  description: 'Drift metrics track the gap between stated intent and lived reality over time.',
}

export default function DriftMetrics() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Platform Metric</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">Drift Metrics</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            Drift metrics track the gap between stated intent and lived reality over time.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            KindEarth makes drift visible so that pilots can adapt before trust erodes. Drift is not failure; it is an
            early-warning signal that conditions, incentives, or assumptions have shifted.
          </p>
          <p>
            The metric stays interpretable and locally owned, so communities can decide what drift means and how to respond.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How it&apos;s used in KindEarth</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
            <li>Compare pilot intent with outcomes across milestones.</li>
            <li>Flag areas where assumptions diverge from field data.</li>
            <li>Support adaptive design without punitive scoring.</li>
          </ul>
        </section>

        <p className="text-sm font-semibold text-[color:var(--kp-ink)]">Status: Active prototyping</p>

        <Link href="/" className="text-sm font-semibold text-[color:var(--kp-ink)] hover:text-[color:var(--kp-amber)]">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
