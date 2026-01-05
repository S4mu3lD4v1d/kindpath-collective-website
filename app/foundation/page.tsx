import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../components/GlassPanel'

export const metadata: Metadata = {
  title: 'KindPath Foundation | KindPath Collective',
  description: 'Governance, stewardship, and safeguards for KindEarth pilots.',
}

export default function Foundation() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-4 py-14">
        <GlassPanel className="p-8 sm:p-10">
          <h1 className="text-3xl font-semibold text-[color:var(--kp-ink)]">KindPath Foundation</h1>
          <p className="mt-4 text-base text-[color:var(--kp-ink-soft)]">
            Governance, stewardship, and safeguards for KindEarth pilots.
          </p>
          <p className="mt-3 text-sm text-[color:var(--kp-ink-muted)]">
            The Foundation anchors the non-negotiables: consent, refusal, community ownership, and interpretability.
          </p>
          <div className="mt-6">
            <Link
              href="/governance"
              className="text-sm font-semibold text-[color:var(--kp-ink)] hover:text-[color:var(--kp-forest)]"
            >
              View Governance & Safeguards
            </Link>
          </div>
        </GlassPanel>
      </div>
    </main>
  )
}
