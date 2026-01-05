import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../../components/GlassPanel'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'Trust Liquidity | KindEarth Platform',
  description: 'Trust liquidity reflects how easily trust can move across a field to support action and repair.',
}

export default function TrustLiquidity() {
  return (
    <PageShell
      title="Trust Liquidity"
      eyebrow="Platform Metric"
      description="Trust liquidity reflects how easily trust can move across a field to support action and repair."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          Trust liquidity is shared capacity. When trust is liquid, communities coordinate, share risk, and recover
          quickly. When it is frozen, even well-funded pilots fail.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The signal is built with local consent and interpretation, highlighting where relationships or governance need
          reinforcement.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Map trust pathways across institutions and community groups.</li>
          <li>Surface friction points where transparency is thin.</li>
          <li>Guide repair work before scale or deployment.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Strengthen trust before scale</h3>
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
