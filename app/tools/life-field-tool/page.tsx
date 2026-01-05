import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../../components/GlassPanel'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Life-Field Tool | KindEarth',
  description: 'The Life-Field Tool maps current reality versus ideal reality for pilots and practitioners.',
}

export default function LifeFieldTool() {
  return (
    <PageShell
      title="Life-Field Tool"
      eyebrow="Tools"
      description="The Life-Field Tool maps current reality versus ideal reality for pilots and practitioners."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The Life-Field Tool creates a shared picture of lived conditions, desired outcomes, and the distance between
          them. It is designed for participatory use, not top-down scoring.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The output becomes a grounded narrative map that helps pilots hold clarity without collapsing nuance.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Facilitate community workshops and practitioner intake.</li>
          <li>Document current state, desired state, and friction points.</li>
          <li>Anchor pilot hypotheses in lived reality.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Build pilots from lived reality</h3>
          <p className="text-sm text-[color:var(--kp-ink-soft)]">Join the pilot list and explore participatory mapping.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/join-pilot" className="btn-primary">Join the Pilot</Link>
          <Link href="/tools/kindearth-platform" className="btn-secondary">KindEarth Platform</Link>
        </div>
      </GlassPanel>
    </PageShell>
  )
}
