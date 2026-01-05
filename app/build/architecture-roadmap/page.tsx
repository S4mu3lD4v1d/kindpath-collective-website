import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Architecture + Roadmap | KindPath Collective',
  description: 'Architecture notes and roadmap milestones for KindEarth.',
}

export default function ArchitectureRoadmap() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Build</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">Architecture + Roadmap</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            Architecture notes and roadmap milestones help partners understand how KindEarth evolves.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            We document the platform as a living system: modules, data flows, governance constraints, and service
            boundaries. This makes it easier for pilot teams to see where their work fits.
          </p>
          <p>
            The roadmap focuses on safety, interoperability, and interpretability before expansion or automation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How it&apos;s used in KindEarth</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
            <li>Track platform milestones and pilot readiness.</li>
            <li>Clarify service boundaries and data governance rules.</li>
            <li>Align partner expectations before deployment.</li>
          </ul>
        </section>

        <p className="text-sm font-semibold text-[color:var(--kp-ink)]">Status: Active prototyping</p>

        <div className="flex flex-col gap-2">
          <Link href="/build" className="text-sm font-semibold text-[color:var(--kp-ink)] hover:text-[color:var(--kp-amber)]">
            Back to Proof of Build
          </Link>
          <Link href="/" className="text-sm font-semibold text-[color:var(--kp-ink)] hover:text-[color:var(--kp-amber)]">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
