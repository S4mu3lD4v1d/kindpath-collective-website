import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../components/GlassPanel'
import PageShell from '../components/PageShell'

export const metadata: Metadata = {
  title: 'KindPath Foundation | KindPath Collective',
  description: 'Governance, stewardship, and safeguards for KindEarth pilots.',
}

export default function Foundation() {
  return (
    <PageShell
      title="KindPath Foundation"
      eyebrow="Foundation"
      description="Governance, stewardship, and safeguards for KindEarth pilots."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The Foundation anchors the non-negotiables: consent, refusal, community ownership, and interpretability. It
          ensures pilots remain sovereignty-first, reversible, and accountable to place.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          Governance is structural, not optional. The Foundation sets the boundaries within which KindEarth operates.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Define consent and refusal protocols for every pilot.</li>
          <li>Ensure governance documentation is visible and auditable.</li>
          <li>Maintain community interpretive authority over data outputs.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Review governance with us</h3>
          <p className="text-sm text-[color:var(--kp-ink-soft)]">Explore safeguards or join the pilot list.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/governance" className="btn-secondary">Governance & Safeguards</Link>
          <Link href="/join-pilot" className="btn-primary">Join the Pilot</Link>
        </div>
      </GlassPanel>
    </PageShell>
  )
}
