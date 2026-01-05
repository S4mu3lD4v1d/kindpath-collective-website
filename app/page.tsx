import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from './components/GlassPanel'
import ButtonCard from './components/ButtonCard'
import PillButton from './components/PillButton'

export const metadata: Metadata = {
  title: 'KindPath Collective | KindEarth Platform',
}

export default function Home() {
  const tools = [
    {
      title: 'KindEarth Platform',
      description: 'Modelling policy stress, drift, and ecological constraint (scenario exploration, not prediction).',
      href: '/tools/kindearth-platform',
    },
    {
      title: 'Pilot Operations Tools',
      description: 'Scoping, tracking, tapering, and reporting.',
      href: '/tools/pilot-operations',
    },
    {
      title: 'Community Digital Libraries',
      description: 'Local data ownership, provenance, changelogs.',
      href: '/tools/community-digital-libraries',
    },
    {
      title: 'Life-Field Tool',
      description: 'Current reality vs ideal reality mapping for pilots and practitioners.',
      href: '/tools/life-field-tool',
    },
  ]

  const metrics = [
    { title: 'Policy Stress', href: '/platform/policy-stress' },
    { title: 'Ecological Constraint', href: '/platform/ecological-constraint' },
    { title: 'Trust Liquidity', href: '/platform/trust-liquidity' },
    { title: 'Drift Metrics', href: '/platform/drift-metrics' },
  ]

  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-16 text-center">
        <span className="inline-flex items-center rounded-full bg-amber/10 px-3 py-1 text-xs font-semibold text-amber">
          Pilot Program Open
        </span>
        <h1 className="mt-6 text-4xl leading-tight font-semibold text-[color:var(--kp-ink)] md:text-5xl md:leading-snug">
          <span className="text-[color:var(--kp-ink)]">KindPath Collective</span> is building KindEarth — a digital platform for
          ethical social-policy forecasting and community-led pilots.
        </h1>
        <p className="mt-5 text-lg text-[color:var(--kp-ink-soft)] md:text-xl">
          KindEarth helps communities and institutions see upstream pressure early, restore coherence, and run pilots that are measurable, reversible, and sovereignty-first.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
          <a
            href="/join-pilot"
            className="rounded-full bg-amber px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--kp-mist)]"
          >
            Join the Pilot
          </a>
          <a
            href="/platform"
            className="rounded-full border border-[color:var(--kp-ink)]/20 px-5 py-3 text-sm font-semibold text-[color:var(--kp-ink)] transition hover:border-[color:var(--kp-ink)] hover:text-[color:var(--kp-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--kp-mist)]"
          >
            View the Platform
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <GlassPanel className="p-8 sm:p-10">
          <header className="mb-8">
            <div className="flex items-center justify-center gap-6">
              <img
                src="/brand/collective-mark-128.png"
                alt="KindPath mark"
                className="hidden sm:block h-14 w-14 rounded-full opacity-90"
              />
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-[color:var(--kp-ink)]">
                  What we&apos;re building
                </h2>
                <p className="mt-2 text-sm text-[color:var(--kp-ink-muted)]">
                  A suite of tools for sovereignty, clarity, and ethical forecasting.
                </p>
              </div>
              <img
                src="/brand/kindearth-mark.svg"
                alt="KindEarth mark"
                className="hidden sm:block h-14 w-14 opacity-90"
              />
            </div>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            {tools.map((tool) => (
              <ButtonCard
                key={tool.title}
                href={tool.href}
                title={tool.title}
                description={tool.description}
              />
            ))}
          </div>
        </GlassPanel>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <GlassPanel className="p-8 sm:p-10">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--kp-ink)] md:text-4xl">Making Upstream Conditions Legible</h2>
              <p className="mt-4 text-base text-[color:var(--kp-ink-soft)]">
                KindPath exists because systems often assume demand is linear — but in real life, stress compounds and costs go convex.
              </p>
              <p className="mt-3 text-base text-[color:var(--kp-ink-soft)]">
                KindEarth is designed to make upstream conditions legible: drift, contradiction accumulation, ecological constraint, and trust liquidity — before collapse forces expensive crisis responses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <PillButton key={metric.title} href={metric.href}>
                  {metric.title}
                </PillButton>
              ))}
            </div>
          </div>
        </GlassPanel>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <GlassPanel className="flex flex-col items-center gap-4 p-10 text-center">
          <h3 className="text-3xl font-semibold text-[color:var(--kp-ink)]">Proof of Build</h3>
          <p className="text-base text-[color:var(--kp-ink-soft)]">
            We operate with transparency. Explore our code and documentation.
          </p>
          <div className="flex flex-col gap-3 md:flex-row">
            <Link
              href="/build/github-kpth"
              className="rounded-full border border-[color:var(--kp-ink)]/20 bg-white/60 px-5 py-3 text-sm font-semibold text-[color:var(--kp-ink)] transition hover:border-[color:var(--kp-ink)]/40 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--kp-mist)]"
            >
              GitHub Repo KPTH
            </Link>
            <Link
              href="/build/architecture-roadmap"
              className="rounded-full border border-[color:var(--kp-ink)]/20 bg-white/60 px-5 py-3 text-sm font-semibold text-[color:var(--kp-ink)] transition hover:border-[color:var(--kp-ink)]/40 hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--kp-mist)]"
            >
              Architecture + Roadmap
            </Link>
          </div>
        </GlassPanel>
      </section>

      <section className="bg-[#7fd36b]">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:gap-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/40 text-xl">🛡️</div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[color:var(--kp-ink)]">Governance & Safeguards</h3>
            <p className="text-sm md:text-base text-[color:var(--kp-ink-soft)]">
              We don&apos;t build surveillance tools. We don&apos;t score people. Consent and refusal are structural. Communities retain ownership and interpretive authority.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h3 className="text-2xl font-semibold text-[color:var(--kp-ink)]">Ready to explore ethical pilots?</h3>
        <p className="mt-3 text-base text-[color:var(--kp-ink-soft)]">
          If you&apos;re exploring pilots, evaluation, collaboration, or partnership — join the pilot interest list.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/join-pilot"
            className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--kp-mist)]"
          >
            Join the Pilot Interest List
          </a>
        </div>
      </section>
    </main>
  )
}
