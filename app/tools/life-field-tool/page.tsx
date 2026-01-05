import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Life-Field Tool | KindEarth',
  description: 'The Life-Field Tool maps current reality versus ideal reality for pilots and practitioners.',
}

export default function LifeFieldTool() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Tools</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">Life-Field Tool</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            The Life-Field Tool maps current reality versus ideal reality for pilots and practitioners.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            The tool creates a shared picture of lived conditions, desired outcomes, and the distance between them. It is
            designed for participatory use, not top-down scoring.
          </p>
          <p>
            The result is a grounded narrative map that helps pilots hold clarity without collapsing nuance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How it&apos;s used in KindEarth</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
            <li>Facilitate community workshops and practitioner intake.</li>
            <li>Document current state, desired state, and friction points.</li>
            <li>Anchor pilot hypotheses in lived reality.</li>
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
