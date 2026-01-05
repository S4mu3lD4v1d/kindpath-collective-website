import type { Metadata } from 'next'
import GlassPanel from '../components/GlassPanel'
import PageShell from '../components/PageShell'

export const metadata: Metadata = {
  title: 'Team | KindPath Collective',
  description: 'Meet the team behind KindPath Collective building KindEarth.',
}

export default function Team() {
  return (
    <PageShell
      title="KindPath Collective"
      eyebrow="Team"
      description="KindPath Collective is founded and led in Australia by a small team building a sovereignty-first platform for ethical pilots and prevention economics."
      align="center"
    >
      <section className="grid gap-8 md:grid-cols-2">
        {[
          {
            initials: 'SC',
            name: 'Sam Cross',
            role: 'Co-founder',
            focus: 'Platform & Systems Design',
            bullets: [
              'Platform and systems design (KindEarth / KindPath)',
              'Pilot methodology, measurement design, and reporting',
              'Community-first, non-extractive operating models',
              'Research synthesis across policy, ecology, and systems behaviour',
            ],
          },
          {
            initials: 'TR',
            name: 'Tris',
            role: 'Co-founder',
            focus: 'Practitioner & Pilot Support',
            bullets: [
              'Practitioner-facing design and pilot support',
              'Community engagement and lived-reality translation',
              'Education and field implementation support',
              'Practical pathway building',
            ],
          },
        ].map((member) => (
          <GlassPanel key={member.name} className="p-6 text-center">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/60 text-2xl text-[color:var(--kp-ink)]">
              {member.initials}
            </div>
            <h2 className="text-xl font-semibold text-[color:var(--kp-ink)]">{member.name}</h2>
            <p className="text-sm font-semibold text-[color:var(--kp-ink-muted)] mb-2">{member.role}</p>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-[color:var(--kp-ink-muted)] mb-2">{member.focus}</h3>
            <ul className="space-y-1 text-left text-sm text-[color:var(--kp-ink-soft)]">
              {member.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </GlassPanel>
        ))}
      </section>

      <GlassPanel className="p-6 sm:p-8 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-[color:var(--kp-ink)]">Seeking Collaborators</h2>
        <p className="text-sm text-[color:var(--kp-ink-soft)]">
          We are actively looking for mission-aligned collaborators to help scale our impact.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {['Full-stack Engineers (Rust/React)', 'Systems Ecologists', 'Pilot Coordinators'].map((role) => (
            <div key={role} className="rounded-full border border-[color:var(--kp-panel-border)] bg-white/50 px-4 py-2 text-xs font-semibold text-[color:var(--kp-ink)]">
              {role}
            </div>
          ))}
        </div>
      </GlassPanel>
    </PageShell>
  )
}
