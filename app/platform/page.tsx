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
          <h1 className="text-4xl font-semibold text-primary">KindEarth Platform</h1>
          <p className="text-lg text-slate-600">
            A digital-native platform for modelling policy stress, ecological constraint, and field coherence — and supporting sovereignty-first pilots.
          </p>
          <p className="text-sm text-slate-500">Current stage: Prototype / Pilot-readiness build</p>
        </header>

        <section className="card p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-primary">Business Description</h2>
            <p className="mt-3 text-base text-slate-700">
            KindPath Collective builds KindEarth: a platform that helps communities and institutions understand upstream conditions (drift, stress, contradiction accumulation), coordinate earlier, and reduce long-run cost convexity through ethical, reversible pilots.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-primary">Who it&apos;s for</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Community pilot teams and practitioners</li>
                <li>• Social impact evaluators and consultants</li>
                <li>• Government innovation units and policy labs</li>
                <li>• Researchers on prevention economics and systems governance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Explicit Stage</h3>
              <p className="mt-2 text-sm text-slate-700">Current stage: Prototype / Pilot-readiness build.</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Core Modules</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="card p-4 shadow-none border-[#e8f4f1]">
                <h4 className="font-semibold text-primary">Pilot Operations Layer</h4>
                <p className="text-sm text-slate-600">Milestones, tapering checkpoints, reporting exports.</p>
              </div>
              <div className="card p-4 shadow-none border-[#e8f4f1]">
                <h4 className="font-semibold text-primary">Digital Library Tool</h4>
                <p className="text-sm text-slate-600">Community-owned libraries with provenance and consent-aware sharing.</p>
              </div>
              <div className="card p-4 shadow-none border-[#e8f4f1]">
                <h4 className="font-semibold text-primary">Ecological Evaluation Tool</h4>
                <p className="text-sm text-slate-600">Place-based ecological context, mapping, constraints/capacity outputs.</p>
              </div>
              <div className="card p-4 shadow-none border-[#e8f4f1]">
                <h4 className="font-semibold text-primary">Analysis Worker</h4>
                <p className="text-sm text-slate-600">Background processing for indexing, checks, and interpretable signals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-primary">Evidence & Architecture</h2>
          <p className="text-base text-slate-700">
            We maintain an active prototype repository, architecture documentation, roadmap, and governance posture.
          </p>
          <div className="rounded-xl bg-[#eef5f3] p-8 text-center text-sm text-slate-600">
            System architecture diagram (placeholder)
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/kindpath" className="rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:border-primary">
              Platform Repository (KPTH)
            </a>
            <a href="/roadmap" className="rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:border-primary">
              Technical Roadmap
            </a>
            <a href="/governance" className="rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:border-primary">
              Governance & Safeguards
            </a>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-primary">Interested in deploying KindEarth?</h2>
          <a
            href="/join-pilot"
            className="mt-4 inline-flex items-center rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
          >
            Express Interest (EOI)
          </a>
        </section>
      </div>
    </main>
  )
}
