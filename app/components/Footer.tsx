import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-[color:var(--kp-ink-muted)]">
              © {year} KindPath Foundation. Built by KindPath Collective. Powered by KindEarth.
            </p>

            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[color:var(--kp-ink-muted)]">
              <Link className="hover:underline" href="/privacy">Privacy</Link>
              <Link className="hover:underline" href="/terms">Terms</Link>
              <Link className="hover:underline" href="/disclaimer">Disclaimer</Link>
              <Link className="hover:underline" href="/acknowledgement">Acknowledgement</Link>
            </nav>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[color:var(--kp-ink-muted)]">
              <Link className="hover:underline" href="/foundation">KindPath Foundation</Link>
              <span aria-hidden="true">•</span>
              <Link className="hover:underline" href="/">KindPath Collective</Link>
              <span aria-hidden="true">•</span>
              <Link className="hover:underline" href="/kindearth">KindEarth</Link>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[color:var(--kp-ink-muted)]">
            <img
              src="/brand/kindearth-mark.svg"
              alt="KindEarth mark"
              className="h-10 w-10 opacity-90"
            />
            <span className="text-xs uppercase tracking-wide">KindEarth</span>
          </div>
        </div>
      </div>
      <div className="mt-2 text-xs opacity-60" data-build-stamp="true">Build: 2026-01-04 02:53 UTC</div>
</footer>
  );
}
