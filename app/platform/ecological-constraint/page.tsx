import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../../components/GlassPanel'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Ecological Constraint | KindEarth Platform',
  description: 'Ecological constraint maps real-world limits and capacities that shape pilot viability.',
}

export default function EcologicalConstraint() {
  return (
    <PageShell
      title="Ecological Constraint"
      eyebrow="Platform Metric"
      description="Ecological constraint maps real-world limits and capacities that shape pilot viability."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          KindEarth centers place-based realities: water, land, infrastructure, transport, biodiversity, and community
          stewardship. Constraint is a design boundary that keeps pilots grounded and survivable.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The signal is interpreted with local knowledge so ecological context is not flattened into a single score.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Set feasibility boundaries for pilot scopes and timelines.</li>
          <li>Identify resource pinch points and local capacity thresholds.</li>
          <li>Document ecological tradeoffs alongside social outcomes.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Bring place-based reality into pilots</h3>
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
