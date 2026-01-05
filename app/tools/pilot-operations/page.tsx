import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pilot Operations Tools | KindEarth',
  description: 'Pilot Operations Tools support scoping, tracking, tapering, and reporting for reversible pilots.',
}

export default function PilotOperations() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Tools</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">Pilot Operations Tools</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            Pilot Operations Tools support scoping, tracking, tapering, and reporting for reversible pilots.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            This toolkit helps teams define boundaries, track progress, and document learning without turning pilots into
            surveillance. It keeps timeframes, milestones, and exit criteria visible and consent-aware.
          </p>
          <p>
            The focus is on clarity and coordination so pilots stay aligned with community intent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How it&apos;s used in KindEarth</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
            <li>Define pilot scope, milestones, and taper points.</li>
            <li>Record progress updates and governance decisions.</li>
            <li>Generate transparent reporting exports.</li>
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
