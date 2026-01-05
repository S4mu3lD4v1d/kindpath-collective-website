import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Policy Stress | KindEarth Platform',
  description: 'Policy stress describes cumulative pressure on institutions when upstream conditions outpace policy capacity.',
}

export default function PolicyStress() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Platform Metric</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">Policy Stress</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            Policy stress describes cumulative pressure on institutions when upstream conditions outpace policy capacity.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            KindEarth treats stress as a field condition rather than a blame story. The signal looks at congestion, delays,
            and contradictory demands that build when response time is slower than lived reality.
          </p>
          <p>
            The intent is to surface earlier intervention windows where reversible pilots can reduce harm and long-run cost
            convexity, without turning communities into data points.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How it&apos;s used in KindEarth</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
            <li>Compare policy load to response capacity across time periods.</li>
            <li>Flag compounding friction before crisis escalation.</li>
            <li>Support scenario exploration with community interpretation.</li>
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
