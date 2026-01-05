import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../../components/GlassPanel'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Community Digital Libraries | KindEarth',
  description: 'Community Digital Libraries support local data ownership, provenance, and changelogs.',
}

export default function CommunityDigitalLibraries() {
  return (
    <PageShell
      title="Community Digital Libraries"
      eyebrow="Tools"
      description="Community Digital Libraries support local data ownership, provenance, and changelogs."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          Libraries are built around community governance rather than extraction. Each entry includes provenance,
          consent notes, and interpretive context so that data stays accountable to place.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The system protects narrative integrity while still supporting pilots and evaluation.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Store datasets with versioned changelogs and provenance trails.</li>
          <li>Attach consent and governance notes to every entry.</li>
          <li>Share exports with clear ownership signals.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Keep data sovereignty intact</h3>
          <p className="text-sm text-[color:var(--kp-ink-soft)]">Join the pilot list and see the library workflow.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/join-pilot" className="btn-primary">Join the Pilot</Link>
          <Link href="/tools/kindearth-platform" className="btn-secondary">KindEarth Platform</Link>
        </div>
      </GlassPanel>
    </PageShell>
  )
}
