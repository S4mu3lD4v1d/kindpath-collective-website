import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../../components/GlassPanel'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Architecture + Roadmap | KindPath Collective',
  description: 'Architecture notes and roadmap milestones for KindEarth.',
}

export default function ArchitectureRoadmap() {
  return (
    <PageShell
      title="Architecture + Roadmap"
      eyebrow="Build"
      description="Architecture notes and roadmap milestones help partners understand how KindEarth evolves."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          We document the platform as a living system: modules, data flows, governance constraints, and service
          boundaries. This makes it easier for pilot teams to see where their work fits.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The roadmap focuses on safety, interoperability, and interpretability before expansion or automation.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Track platform milestones and pilot readiness.</li>
          <li>Clarify service boundaries and governance rules.</li>
          <li>Align partner expectations before deployment.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Review the roadmap with us</h3>
          <p className="text-sm text-[color:var(--kp-ink-soft)]">Join the pilot list or explore the build overview.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/build" className="btn-secondary">Proof of Build</Link>
          <Link href="/join-pilot" className="btn-primary">Join the Pilot</Link>
        </div>
      </GlassPanel>
    </PageShell>
  )
}
