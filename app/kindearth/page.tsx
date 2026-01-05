import type { Metadata } from 'next'
import Link from 'next/link'
import GlassPanel from '../components/GlassPanel'

export const metadata: Metadata = {
  title: 'KindEarth | KindPath Collective',
  description: 'KindEarth is the KindPath Collective platform for ethical social-policy forecasting and community-led pilots.',
}

export default function KindEarth() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-4 py-14">
        <GlassPanel className="p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <img
              src="/brand/kindearth-mark.svg"
              alt="KindEarth mark"
              className="h-10 w-10"
            />
            <h1 className="text-3xl font-semibold text-[color:var(--kp-ink)]">KindEarth</h1>
          </div>
          <p className="mt-4 text-base text-[color:var(--kp-ink-soft)]">
            KindEarth is the KindPath Collective platform for ethical social-policy forecasting and community-led pilots.
            It focuses on upstream conditions like policy stress, ecological constraint, and drift—making them legible without
            turning people into scores.
          </p>
          <p className="mt-3 text-sm text-[color:var(--kp-ink-muted)]">
            The platform is designed for consent, interpretability, and community ownership, with tools that keep pilots reversible
            and measurable.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/platform" className="btn-secondary">
              Explore the Platform
            </Link>
            <Link href="/tools/kindearth-platform" className="btn-secondary">
              KindEarth Tooling
            </Link>
          </div>
        </GlassPanel>
      </div>
    </main>
  )
}
