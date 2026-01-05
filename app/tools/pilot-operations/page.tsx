import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../../components/GlassPanel'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Pilot Operations Tools | KindEarth',
  description: 'Pilot Operations Tools support scoping, tracking, tapering, and reporting for reversible pilots.',
}

export default function PilotOperations() {
  return (
    <PageShell
      title="Pilot Operations Tools"
      eyebrow="Tools"
      description="Pilot Operations Tools support scoping, tracking, tapering, and reporting for reversible pilots."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          This toolkit keeps pilot boundaries, milestones, and taper points visible to everyone involved. It prioritizes
          clarity and shared accountability rather than surveillance.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The tools are designed to make pilots reversible, measurable, and easy to interpret by the communities they
          serve.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Define scope, checkpoints, and clear exit criteria.</li>
          <li>Track updates and governance decisions transparently.</li>
          <li>Generate reporting exports that stay auditable.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Start a pilot with clear guardrails</h3>
          <p className="text-sm text-[color:var(--kp-ink-soft)]">Join the pilot list and see how operations tooling fits.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/join-pilot" className="btn-primary">Join the Pilot</Link>
          <Link href="/tools/kindearth-platform" className="btn-secondary">KindEarth Platform</Link>
        </div>
      </GlassPanel>
    </PageShell>
  )
}
