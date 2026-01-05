import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../components/GlassPanel'
import PageShell from '../components/PageShell'

export const metadata: Metadata = {
  title: 'KindEarth | KindPath Collective',
  description: 'KindEarth is the KindPath Collective platform for ethical social-policy forecasting and community-led pilots.',
}

export default function KindEarth() {
  return (
    <PageShell
      title="KindEarth"
      eyebrow="Platform"
      description="KindEarth is the KindPath Collective platform for ethical social-policy forecasting and community-led pilots."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-3">
          <img src="/brand/kindearth-mark.png" alt="KindEarth mark" className="h-10 w-10" />
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        </div>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          KindEarth makes upstream conditions legible—policy stress, ecological constraint, trust liquidity, and drift—so
          pilots can respond earlier and more ethically. It is built for scenario exploration, not prediction.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The platform prioritizes consent, interpretability, and community ownership, keeping pilots reversible and
          measurable.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Translate upstream signals into shared scenario narratives.</li>
          <li>Run pilots with transparent governance and auditability.</li>
          <li>Hold pilots accountable to local interpretation and consent.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Explore KindEarth in practice</h3>
          <p className="text-sm text-[color:var(--kp-ink-soft)]">Review the platform or join the pilot list.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/platform" className="btn-secondary">Platform Overview</Link>
          <Link href="/join-pilot" className="btn-primary">Join the Pilot</Link>
        </div>
      </GlassPanel>
    </PageShell>
  )
}
