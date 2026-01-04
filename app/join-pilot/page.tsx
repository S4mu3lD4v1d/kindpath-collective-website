import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the Pilot | KindPath Collective',
  description: 'Express your interest in running a pilot, collaborating, or partnering with KindPath Collective.',
}

export default function JoinPilot() {
  return (
    <main className="bg-sand">
      <div className="max-w-3xl mx-auto px-4 py-14 space-y-10">
        <header className="text-center space-y-3">
          <p className="text-xs font-semibold text-amber uppercase tracking-wide">Join Pilot</p>
          <h1 className="text-4xl font-semibold text-primary">Join the Pilot</h1>
          <p className="text-lg text-[color:var(--kp-slate-600)]">
            Express your interest in running a pilot, collaborating, or partnering with KindPath Collective.
          </p>
        </header>

        <section className="card p-8">
          <h2 className="text-2xl font-semibold text-primary">Expression of Interest</h2>
          <p className="mt-2 mb-6 text-sm text-[color:var(--kp-slate-600)]">Tell us a bit about yourself and what you&apos;re looking for.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[color:var(--kp-slate-700)] mb-1">Name</label>
              <input type="text" className="w-full rounded-lg border border-[color:var(--kp-cloud)] bg-white px-3 py-2 focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[color:var(--kp-slate-700)] mb-1">Email</label>
              <input type="email" className="w-full rounded-lg border border-[color:var(--kp-cloud)] bg-white px-3 py-2 focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[color:var(--kp-slate-700)] mb-1">Organization</label>
              <input type="text" className="w-full rounded-lg border border-[color:var(--kp-cloud)] bg-white px-3 py-2 focus:border-primary focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[color:var(--kp-slate-700)] mb-1">I am interested in...</label>
              <select className="w-full rounded-lg border border-[color:var(--kp-cloud)] bg-white px-3 py-2 focus:border-primary focus:outline-none">
                <option>Select an option</option>
                <option>Running a pilot</option>
                <option>Collaborating</option>
                <option>Partnering</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[color:var(--kp-slate-700)] mb-1">Message (Optional)</label>
              <textarea className="w-full rounded-lg border border-[color:var(--kp-cloud)] bg-white px-3 py-2 focus:border-primary focus:outline-none" rows={4}></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-dark"
            >
              Submit Expression of Interest
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
