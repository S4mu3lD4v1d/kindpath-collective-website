import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../components/GlassPanel'
import PageShell from '../components/PageShell'

export const metadata: Metadata = {
  title: 'Build Transparency | KindPath Collective',
  description: 'Explore KindPath Collective build transparency, code, and architecture documentation.',
}

export default function Build() {
  return (
    <PageShell
      title="Proof of Build"
      eyebrow="Build"
      description="We operate with transparency. Explore our code, architecture notes, and roadmap artifacts."
    >
      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">What this is</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          This space is for people who want to see how KindEarth is built, what is shipping now, and how governance and
          safety requirements are embedded in the work.
        </p>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          We keep documentation concise and accessible so pilots can assess fit without a technical deep dive.
        </p>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 space-y-3">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">How we use it in pilots</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--kp-ink-soft)]">
          <li>Share build status and architecture context with partners.</li>
          <li>Clarify governance commitments before pilot launch.</li>
          <li>Align on what is experimental versus pilot-ready.</li>
        </ul>
      </GlassPanel>

      <GlassPanel className="p-6 sm:p-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[color:var(--kp-ink)]">Explore build resources</h3>
          <p className="text-sm text-[color:var(--kp-ink-soft)]">Access the repo, roadmap, and documentation.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/build/github-kpth" className="btn-secondary">GitHub Repo KPTH</Link>
          <Link href="/build/architecture-roadmap" className="btn-secondary">Architecture + Roadmap</Link>
          <Link href="/join-pilot" className="btn-primary">Join the Pilot</Link>
        </div>
      </GlassPanel>
    </PageShell>
  )
}
