import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../../components/GlassPanel'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Policy Stress | KindEarth Platform',
  description: 'Policy stress describes cumulative pressure on institutions when upstream conditions outpace capacity.',
}

export default function PolicyStress() {
  return (
    <PageShell
      title="Policy Stress"
      eyebrow="Platform Metric"
      description="Policy stress describes cumulative pressure on institutions when upstream conditions outpace capacity."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          Policy stress is a field signal, not a blame story. It tracks congestion, delay, and contradiction that build
          when response time is slower than lived reality.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The goal is to surface earlier windows for reversible pilots that reduce harm and long-run cost convexity.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Compare policy load to response capacity over time.</li>
          <li>Flag compounding friction before crisis escalation.</li>
          <li>Support scenario exploration with community interpretation.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Explore policy stress in a pilot</h3>
          <p className="text-sm text-[color:var(--kp-ink-soft)]">Join the pilot list or review KindEarth metrics.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/join-pilot" className="btn-primary">Join the Pilot</Link>
          <Link href="/platform" className="btn-secondary">Platform Overview</Link>
        </div>
      </GlassPanel>
    </PageShell>
  )
}
