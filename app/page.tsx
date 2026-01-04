import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KindPath Collective | KindEarth Platform',
}

export default function Home() {
  const tools = [
    {
      title: 'KindEarth Platform',
      description: 'Modelling policy stress, drift, and ecological constraint (scenario exploration, not prediction).',
    },
    {
      title: 'Pilot Operations Tools',
      description: 'Scoping, tracking, tapering, and reporting.',
    },
    {
      title: 'Community Digital Libraries',
      description: 'Local data ownership, provenance, changelogs.',
    },
    {
      title: 'Life-Field Tool',
      description: 'Current reality vs ideal reality mapping for pilots and practitioners.',
    },
  ]

  const metrics = [
    { title: 'Policy Stress' },
    { title: 'Ecological Constraint' },
    { title: 'Trust Liquidity' },
    { title: 'Drift Metrics' },
  ]

  return (
    <main className="bg-sand">
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-16 text-center">
        <span className="inline-flex items-center rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber">
          Pilot Program Open
        </span>
        <h1 className="mt-6 text-4xl leading-tight font-semibold text-forest md:text-5xl md:leading-snug">
          <span className="text-[color:var(--kp-moss)]">KindPath Collective</span> is building KindEarth — a digital platform for
          ethical social-policy forecasting and community-led pilots.
        </h1>
        <p className="mt-5 text-lg text-[color:var(--kp-slate-600)] md:text-xl">
          KindEarth helps communities and institutions see upstream pressure early, restore coherence, and run pilots that are measurable, reversible, and sovereignty-first.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
          <a
            href="/join-pilot"
            className="rounded-full bg-amber px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-forest"
          >
            Join the Pilot
          </a>
          <a
            href="/platform"
            className="rounded-full border border-forest/30 px-5 py-3 text-sm font-semibold text-forest transition hover:border-forest hover:text-forest"
          >
            View the Platform
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-forest md:text-4xl">What we&apos;re building</h2>
          <p className="mt-3 text-base text-[color:var(--kp-slate-600)]">A suite of tools for sovereignty, clarity, and ethical forecasting.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <div key={tool.title} className="card p-6 text-left">
              <h3 className="text-xl font-semibold text-forest mb-2">{tool.title}</h3>
              <p className="text-sm text-[color:var(--kp-slate-600)]">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid gap-10 px-4 pb-16 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-forest md:text-4xl">Making Upstream Conditions Legible</h2>
          <p className="mt-4 text-base text-[color:var(--kp-slate-700)]">
            KindPath exists because systems often assume demand is linear — but in real life, stress compounds and costs go convex.
          </p>
          <p className="mt-3 text-base text-[color:var(--kp-slate-700)]">
            KindEarth is designed to make upstream conditions legible: drift, contradiction accumulation, ecological constraint, and trust liquidity — before collapse forces expensive crisis responses.
          </p>
        </div>
        <div className="card grid grid-cols-2 gap-3 p-4 sm:p-6">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="flex h-24 flex-col items-center justify-center rounded-xl border border-[color:var(--kp-fog)] bg-white text-center shadow-soft/50"
            >
              <p className="text-sm font-semibold text-forest">{metric.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="card flex flex-col items-center gap-4 p-10 text-center">
          <h3 className="text-3xl font-semibold text-[color:var(--kp-moss)]">Proof of Build</h3>
          <p className="text-base text-[color:var(--kp-slate-600)]">
            We operate with transparency. Explore our code and documentation.
          </p>
          <div className="flex flex-col gap-3 md:flex-row">
            <a
              href="https://github.com/kindpath"
              className="rounded-full border border-[color:rgba(54,63,24,0.3)] px-5 py-3 text-sm font-semibold text-[color:var(--kp-moss)] transition hover:border-[color:var(--kp-moss)] hover:text-[color:var(--kp-amber)]"
            >
              GitHub Repo KPTH
            </a>
            <a
              href="/platform"
              className="rounded-full border border-[color:rgba(54,63,24,0.3)] px-5 py-3 text-sm font-semibold text-[color:var(--kp-moss)] transition hover:border-[color:var(--kp-moss)] hover:text-[color:var(--kp-amber)]"
            >
              Architecture + Roadmap
            </a>
          </div>
        </div>
      </section>

      <section className="bg-river text-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:gap-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl">🛡️</div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Governance & Safeguards</h3>
            <p className="text-sm md:text-base text-white/90">
              We don&apos;t build surveillance tools. We don&apos;t score people. Consent and refusal are structural. Communities retain ownership and interpretive authority.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h3 className="text-2xl font-semibold text-[color:var(--kp-moss)]">Ready to explore ethical pilots?</h3>
        <p className="mt-3 text-base text-[color:var(--kp-slate-600)]">
          If you&apos;re exploring pilots, evaluation, collaboration, or partnership — join the pilot interest list.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/join-pilot"
            className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-forest"
          >
            Join the Pilot Interest List
          </a>
        </div>
      </section>
    </main>
  )
}
