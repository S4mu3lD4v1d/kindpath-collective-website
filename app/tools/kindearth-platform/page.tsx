import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../../components/GlassPanel'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'KindEarth Platform | Tools',
  description: 'KindEarth is the core platform for ethical policy forecasting and sovereignty-first pilots.',
}

export default function KindEarthPlatform() {
  return (
    <PageShell
      title="KindEarth Platform"
      eyebrow="Tools"
      description="KindEarth is the core platform for ethical policy forecasting and sovereignty-first pilots."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          KindEarth links upstream conditions to practical pilot operations. It surfaces policy stress, drift, and
          ecological constraints without turning communities into scores or predictions.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The platform is designed for consent, interpretability, and local stewardship so that pilots remain reversible
          and aligned with community intent.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Translate upstream signals into scenario exploration, not prediction.</li>
          <li>Track pilot milestones alongside consent and governance requirements.</li>
          <li>Support shared interpretation between institutions and community teams.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Ready to explore a pilot?</h3>
          <p className="text-sm text-[color:var(--kp-ink-soft)]">Join the pilot list or review the platform details.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/join-pilot" className="btn-primary">Join the Pilot</Link>
          <Link href="/platform" className="btn-secondary">Platform Overview</Link>
        </div>
      </GlassPanel>
    </PageShell>
  )
}
