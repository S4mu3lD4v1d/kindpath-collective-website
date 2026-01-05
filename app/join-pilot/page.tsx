import type { Metadata } from 'next'
import GlassPanel from '../components/GlassPanel'
import PageShell from '../components/PageShell'

export const metadata: Metadata = {
  title: 'Join the Pilot | KindPath Collective',
  description: 'Express your interest in running a pilot, collaborating, or partnering with KindPath Collective.',
}

export default function JoinPilot() {
  return (
    <PageShell
      title="Join the Pilot"
      eyebrow="Join Pilot"
      description="Express your interest in running a pilot, collaborating, or partnering with KindPath Collective."
      align="center"
    >
      <GlassPanel className="p-8">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">Expression of Interest</h2>
        <p className="mt-2 mb-6 text-sm text-[color:var(--kp-ink-soft)]">Tell us a bit about yourself and what you&apos;re looking for.</p>
        <form className="space-y-4 text-left">
          <div>
            <label className="block text-sm font-semibold text-[color:var(--kp-ink)] mb-1">Name</label>
            <input type="text" className="w-full rounded-lg border border-[color:var(--kp-panel-border)] bg-white/70 px-3 py-2 focus:border-[color:var(--kp-ink-muted)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[color:var(--kp-ink)] mb-1">Email</label>
            <input type="email" className="w-full rounded-lg border border-[color:var(--kp-panel-border)] bg-white/70 px-3 py-2 focus:border-[color:var(--kp-ink-muted)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[color:var(--kp-ink)] mb-1">Organization</label>
            <input type="text" className="w-full rounded-lg border border-[color:var(--kp-panel-border)] bg-white/70 px-3 py-2 focus:border-[color:var(--kp-ink-muted)] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[color:var(--kp-ink)] mb-1">I am interested in...</label>
            <select className="w-full rounded-lg border border-[color:var(--kp-panel-border)] bg-white/70 px-3 py-2 focus:border-[color:var(--kp-ink-muted)] focus:outline-none">
              <option>Select an option</option>
              <option>Running a pilot</option>
              <option>Collaborating</option>
              <option>Partnering</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[color:var(--kp-ink)] mb-1">Message (Optional)</label>
            <textarea className="w-full rounded-lg border border-[color:var(--kp-panel-border)] bg-white/70 px-3 py-2 focus:border-[color:var(--kp-ink-muted)] focus:outline-none" rows={4}></textarea>
          </div>
          <button type="submit" className="w-full btn-primary">
            Submit Expression of Interest
          </button>
        </form>
      </GlassPanel>
    </PageShell>
  )
}
