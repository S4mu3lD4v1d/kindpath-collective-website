import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trust Liquidity | KindEarth Platform',
  description: 'Trust liquidity reflects how easily trust can move across a field to support action and repair.',
}

export default function TrustLiquidity() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Platform Metric</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">Trust Liquidity</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            Trust liquidity reflects how easily trust can move across a field to support action and repair.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            KindEarth treats trust as a shared capacity, not a sentiment. When trust is liquid, communities can coordinate,
            share risk, and recover quickly. When it is frozen, even well-funded pilots fail.
          </p>
          <p>
            The signal is built with local consent and interpretation, highlighting where relationships, governance, or
            transparency need reinforcement.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How it&apos;s used in KindEarth</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
            <li>Map trust pathways across institutions, community groups, and pilots.</li>
            <li>Surface friction points where transparency or governance is thin.</li>
            <li>Guide repair work before scale or deployment.</li>
          </ul>
        </section>

        <p className="text-sm font-semibold text-[color:var(--kp-ink)]">Status: Active prototyping</p>

        <Link href="/" className="text-sm font-semibold text-[color:var(--kp-ink)] hover:text-[color:var(--kp-amber)]">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
