import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | KindPath Collective',
  description: 'Explore the projects documenting the living build of KindEarth platform.',
}

export default function Projects() {
  return (
    <main className="bg-sand">
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-10">
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Projects</p>
          <h1 className="text-4xl font-semibold text-river">Proof of Build</h1>
          <p className="text-lg text-[color:var(--kp-slate-600)]">
            These projects document the living build: platform development, pilot scaffolds, and open collaboration artefacts.
            We share progress carefully and favour integrity over hype.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'KPTH Platform Prototype',
              body: 'The core KindEarth platform repository. Open-source prototype for policy stress modelling.',
              status: 'Active prototype',
              cta: { label: 'View on GitHub', href: 'https://github.com/kindpath' },
            },
            {
              title: 'Pilot-in-a-Box',
              body: 'Scaffolding and toolkits for running community-led pilots with sovereignty baked in.',
              status: 'In development',
              cta: { label: 'View Toolkit', href: '#' },
            },
            {
              title: 'Whitepaper + Field Kit',
              body: 'Foundational documentation on prevention economics and upstream systems intervention.',
              status: 'Published',
              cta: { label: 'Read Paper', href: '#' },
            },
            {
              title: 'Policy Treasury Brief',
              body: 'Economic modelling for government treasury departments regarding cost convexity.',
              status: 'Drafting',
              cta: { label: 'View Brief', href: '#' },
            },
            {
              title: 'Life-Field Prototype',
              body: 'Experimental mapping tool for practitioner reality vs ideal state.',
              status: 'Concept',
              cta: { label: 'Explore', href: '#' },
            },
          ].map((project) => (
            <div key={project.title} className="card p-6 space-y-3">
              <h2 className="text-xl font-semibold text-river">{project.title}</h2>
              <p className="text-sm text-[color:var(--kp-slate-600)]">{project.body}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-amber">Status: {project.status}</p>
              <a
                href={project.cta.href}
                className="inline-flex w-fit items-center rounded-full border border-river/30 px-4 py-2 text-sm font-semibold text-river hover:border-river"
              >
                {project.cta.label}
              </a>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}
