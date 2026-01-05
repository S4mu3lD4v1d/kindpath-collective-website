import type { Metadata } from 'next'
import GlassPanel from '../components/GlassPanel'
import PageShell from '../components/PageShell'

export const metadata: Metadata = {
  title: 'Projects | KindPath Collective',
  description: 'Explore the projects documenting the living build of KindEarth platform.',
}

export default function Projects() {
  const projects = [
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
      cta: { label: 'View Toolkit', href: '/tools/pilot-operations' },
    },
    {
      title: 'Whitepaper + Field Kit',
      body: 'Foundational documentation on prevention economics and upstream systems intervention.',
      status: 'Published',
      cta: { label: 'Explore KindEarth', href: '/kindearth' },
    },
    {
      title: 'Policy Treasury Brief',
      body: 'Economic modelling for government treasury departments regarding cost convexity.',
      status: 'Drafting',
      cta: { label: 'Review Roadmap', href: '/build/architecture-roadmap' },
    },
    {
      title: 'Life-Field Prototype',
      body: 'Experimental mapping tool for practitioner reality vs ideal state.',
      status: 'Concept',
      cta: { label: 'Explore Tool', href: '/tools/life-field-tool' },
    },
  ]

  return (
    <PageShell
      title="Proof of Build"
      eyebrow="Projects"
      description="These projects document the living build: platform development, pilot scaffolds, and open collaboration artefacts. We share progress carefully and favour integrity over hype."
      align="center"
    >
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <GlassPanel key={project.title} className="p-6 space-y-3">
            <h2 className="text-lg font-semibold text-[color:var(--kp-ink)]">{project.title}</h2>
            <p className="text-sm text-[color:var(--kp-ink-soft)]">{project.body}</p>
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--kp-ink-muted)]">Status: {project.status}</p>
            <a href={project.cta.href} className="btn-secondary w-fit">
              {project.cta.label}
            </a>
          </GlassPanel>
        ))}
      </section>
    </PageShell>
  )
}
