import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GitHub Repo KPTH | KindPath Collective',
  description: 'KPTH is the primary repository for KindEarth and related tooling.',
}

export default function GitHubKPTH() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Build</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">GitHub Repo KPTH</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            KPTH is the primary repository for KindEarth and the broader KindPath Collective stack.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            The repository holds architecture notes, service scaffolding, and prototype implementations. It is the most
            transparent window into how we build, test, and document the platform.
          </p>
          <p>
            We keep the repo organized by domain so community partners can trace where tools and governance safeguards live.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How it&apos;s used in KindEarth</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
            <li>Review core services, interfaces, and pilot toolkits.</li>
            <li>Trace governance requirements in code and documentation.</li>
            <li>Follow build notes and architecture decisions.</li>
          </ul>
        </section>

        <p className="text-sm font-semibold text-[color:var(--kp-ink)]">Status: Active prototyping</p>

        <a
          href="https://github.com/kindpath"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center btn-secondary"
        >
          Visit the KPTH GitHub Repository
        </a>

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
