import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Governance & Safeguards | KindPath Collective',
  description: 'KindPath is sovereignty-first by design. Consent, refusal, data ownership, and interpretability are structural requirements.',
}

export default function Governance() {
  return (
    <main className="bg-sand">
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-12">
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Governance</p>
          <h1 className="text-4xl font-semibold text-[color:var(--kp-moss)]">Governance & Safeguards</h1>
          <p className="text-lg text-[color:var(--kp-slate-600)]">
            KindPath is sovereignty-first by design. Consent, refusal, data ownership, and interpretability are structural requirements.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-moss)]">Non-negotiables</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'Informed Consent', body: 'Consent is informed, specific, revocable, and recorded.' },
              { title: 'Right to Refusal', body: 'Refusal is a valid outcome — without penalty.' },
              { title: 'Community Ownership', body: 'Communities retain ownership and interpretive authority.' },
              { title: 'No Black Boxes', body: 'No black-box decisioning. Algorithms must be interpretable.' },
              { title: 'No Scoring Humans', body: 'Metrics are field indicators, not moral judgements.' },
              { title: 'Auditable Exports', body: 'Exports are auditable and portable.' },
            ].map((item) => (
              <div key={item.title} className="card p-5 shadow-none border-[color:var(--kp-fog)]">
                <h3 className="font-semibold text-[color:var(--kp-moss)] mb-1">{item.title}</h3>
                <p className="text-sm text-[color:var(--kp-slate-700)]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--kp-moss)]">Governance Documentation</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {['Data Sovereignty Policy', 'Consent & Refusal Framework', 'Ethics Boundaries'].map((doc) => (
              <div key={doc} className="card p-4 text-center text-sm font-semibold text-[color:var(--kp-moss)] shadow-none border-[color:var(--kp-fog)]">
                {doc}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
