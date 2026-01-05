import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Digital Libraries | KindEarth',
  description: 'Community Digital Libraries support local data ownership, provenance, and changelogs.',
}

export default function CommunityDigitalLibraries() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Tools</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">Community Digital Libraries</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            Community Digital Libraries support local data ownership, provenance, and changelogs.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            Libraries are built around community governance, not extraction. Each library carries consent notes,
            interpretive context, and a clear provenance trail.
          </p>
          <p>
            The goal is to protect narrative integrity while still making data usable for pilots and evaluation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How it&apos;s used in KindEarth</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
            <li>Store local datasets with versioned changelogs.</li>
            <li>Attach consent and governance notes to every entry.</li>
            <li>Share exports with clear provenance and ownership signals.</li>
          </ul>
        </section>

        <p className="text-sm font-semibold text-[color:var(--kp-ink)]">Status: Concept validation</p>

        <Link href="/" className="text-sm font-semibold text-[color:var(--kp-ink)] hover:text-[color:var(--kp-amber)]">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
