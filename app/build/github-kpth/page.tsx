import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../../components/GlassPanel'
import PageShell from '../../components/PageShell'

export const metadata: Metadata = {
  title: 'GitHub Repo KPTH | KindPath Collective',
  description: 'KPTH is the primary repository for KindEarth and related tooling.',
}

export default function GitHubKPTH() {
  return (
    <PageShell
      title="GitHub Repo KPTH"
      eyebrow="Build"
      description="KPTH is the primary repository for KindEarth and the broader KindPath Collective stack."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          The repository holds architecture notes, service scaffolding, and prototype implementations. It is the most
          transparent window into how we build, test, and document the platform.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          We keep the repo organized by domain so partners can trace where tools and safeguards live.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Review core services, interfaces, and pilot toolkits.</li>
          <li>Trace governance requirements in code and documentation.</li>
          <li>Follow architecture decisions and build notes.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Explore the open build</h3>
          <p className="text-sm text-[color:var(--kp-ink-soft)]">Jump to the repo or join a pilot conversation.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/kindpath"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Visit the KPTH GitHub Repository
          </a>
          <Link href="/join-pilot" className="btn-primary">Join the Pilot</Link>
        </div>
      </GlassPanel>
    </PageShell>
  )
}
