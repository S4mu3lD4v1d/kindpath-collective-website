import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team | KindPath Collective',
  description: 'Meet the team behind KindPath Collective building KindEarth.',
}

export default function Team() {
  return (
    <main className="bg-sand">
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-12">
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Team</p>
          <h1 className="text-4xl font-semibold text-primary">KindPath Collective</h1>
          <p className="text-lg text-slate-600">
            KindPath Collective is founded and led in Australia by a small team building a sovereignty-first platform for ethical pilots and prevention economics.
          </p>
        </header>

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
            <div key={member.name} className="card p-6 text-center">
              <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-[#e8f4f1] text-3xl text-primary">
                {member.initials}
              </div>
              <h2 className="text-2xl font-semibold text-primary">{member.name}</h2>
              <p className="text-amber-600 font-semibold mb-3">{member.role}</p>
              <h3 className="text-sm font-semibold text-slate-700 mb-2">{member.focus}</h3>
              <ul className="space-y-1 text-left text-sm text-slate-700">
                {member.bullets.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Seeking Collaborators</h2>
          <p className="text-base text-slate-600">
            We are actively looking for mission-aligned collaborators to help scale our impact.
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {['Full-stack Engineers (Rust/React)', 'Systems Ecologists', 'Pilot Coordinators'].map((role) => (
              <div key={role} className="card p-4 text-sm font-semibold text-primary shadow-none border-[#e8f4f1]">
                {role}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
