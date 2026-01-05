import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Build Transparency | KindPath Collective',
  description: 'Explore KindPath Collective build transparency, code, and architecture documentation.',
}

export default function Build() {
  return (
    <main>
      <div className="mx-auto max-w-4xl px-4 py-14 space-y-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Build</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-ink)]">Proof of Build</h1>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            We operate with transparency. Explore our code, architecture notes, and roadmap artifacts.
          </p>
        </header>

        <section className="space-y-3 text-[color:var(--kp-ink-soft)]">
          <p>
            This space is for people who want to see how KindEarth is built, what is shipping now, and how governance and
            safety requirements are embedded in the work.
          </p>
          <p>
            We keep documentation concise and accessible so pilots can assess fit without needing a technical deep dive.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">Explore build resources</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/build/github-kpth"
              className="btn-secondary"
            >
              GitHub Repo KPTH
            </Link>
            <Link
              href="/build/architecture-roadmap"
              className="btn-secondary"
            >
              Architecture + Roadmap
            </Link>
          </div>
        </section>

        <p className="text-sm font-semibold text-[color:var(--kp-ink)]">Status: Active prototyping</p>

        <Link href="/" className="text-sm font-semibold text-[color:var(--kp-ink)] hover:text-[color:var(--kp-amber)]">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
