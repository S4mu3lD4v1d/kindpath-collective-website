import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../../components/GlassPanel'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Drift Metrics | KindEarth Platform',
  description: 'Drift metrics track the gap between stated intent and lived reality over time.',
}

export default function DriftMetrics() {
  return (
    <PageShell
      title="Drift Metrics"
      eyebrow="Platform Metric"
      description="Drift metrics track the gap between stated intent and lived reality over time."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          Drift shows when conditions, incentives, or assumptions shift. It is an early-warning signal, not a failure
          label, that helps pilots adapt before trust erodes.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The metric stays interpretable and locally owned so communities decide what drift means and how to respond.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Compare pilot intent with outcomes across milestones.</li>
          <li>Flag areas where assumptions diverge from field data.</li>
          <li>Support adaptive design without punitive scoring.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Keep pilots aligned with intent</h3>
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
