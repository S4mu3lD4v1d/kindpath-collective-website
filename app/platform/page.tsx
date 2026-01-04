import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KindEarth Platform | KindPath Collective',
  description: 'A digital-native platform for modelling policy stress, ecological constraint, and field coherence — and supporting sovereignty-first pilots.',
}

export default function Platform() {
  return (
    <main className="bg-sand">
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-12">
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Platform</p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="/brand/kindearth-mark.svg"
              alt="KindEarth mark"
              className="h-12 w-12 opacity-90"
            />
            <h1 className="text-4xl font-semibold text-forest">KindEarth Platform</h1>
          </div>
          <p className="text-lg text-[color:var(--kp-slate-600)]">
            A digital-native platform for modelling policy stress, ecological constraint, and field coherence — and supporting sovereignty-first pilots.
          </p>
          <p className="text-sm text-[color:var(--kp-slate-500)]">Current stage: Prototype / Pilot-readiness build</p>
        </header>

        <section className="card p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-forest">Business Description</h2>
            <p className="mt-3 text-base text-[color:var(--kp-slate-700)]">
            KindPath Collective builds KindEarth: a platform that helps communities and institutions understand upstream conditions (drift, stress, contradiction accumulation), coordinate earlier, and reduce long-run cost convexity through ethical, reversible pilots.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-forest">Who it&apos;s for</h3>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--kp-slate-700)]">
                <li>• Community pilot teams and practitioners</li>
                <li>• Social impact evaluators and consultants</li>
                <li>• Government innovation units and policy labs</li>
                <li>• Researchers on prevention economics and systems governance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-forest">Explicit Stage</h3>
              <p className="mt-2 text-sm text-[color:var(--kp-slate-700)]">Current stage: Prototype / Pilot-readiness build.</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-forest">Core Modules</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="card p-4 shadow-none border-[color:var(--kp-fog)]">
                <h4 className="font-semibold text-forest">Pilot Operations Layer</h4>
                <p className="text-sm text-[color:var(--kp-slate-600)]">Milestones, tapering checkpoints, reporting exports.</p>
              </div>
              <div className="card p-4 shadow-none border-[color:var(--kp-fog)]">
                <h4 className="font-semibold text-forest">Digital Library Tool</h4>
                <p className="text-sm text-[color:var(--kp-slate-600)]">Community-owned libraries with provenance and consent-aware sharing.</p>
              </div>
              <div className="card p-4 shadow-none border-[color:var(--kp-fog)]">
                <h4 className="font-semibold text-forest">Ecological Evaluation Tool</h4>
                <p className="text-sm text-[color:var(--kp-slate-600)]">Place-based ecological context, mapping, constraints/capacity outputs.</p>
              </div>
              <div className="card p-4 shadow-none border-[color:var(--kp-fog)]">
                <h4 className="font-semibold text-forest">Analysis Worker</h4>
                <p className="text-sm text-[color:var(--kp-slate-600)]">Background processing for indexing, checks, and interpretable signals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-forest">Evidence & Architecture</h2>
          <p className="text-base text-[color:var(--kp-slate-700)]">
            We maintain an active prototype repository, architecture documentation, roadmap, and governance posture.
          </p>
          <div className="rounded-xl bg-[color:var(--kp-foam)] p-8 text-center text-sm text-[color:var(--kp-slate-600)]">
            System architecture diagram (placeholder)
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/kindpath" className="rounded-full border border-forest/30 px-4 py-2 text-sm font-semibold text-forest hover:border-forest">
              Platform Repository (KPTH)
            </a>
            <a href="/roadmap" className="rounded-full border border-forest/30 px-4 py-2 text-sm font-semibold text-forest hover:border-forest">
              Technical Roadmap
            </a>
            <a href="/governance" className="rounded-full border border-forest/30 px-4 py-2 text-sm font-semibold text-forest hover:border-forest">
              Governance & Safeguards
            </a>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-forest">Interested in deploying KindEarth?</h2>
          <a
            href="/join-pilot"
            className="mt-4 inline-flex items-center rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-forest"
          >
            Express Interest (EOI)
          </a>
        </section>
      </div>
    </main>
  )
}
