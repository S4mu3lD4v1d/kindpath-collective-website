import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#e4f1ef] bg-white">
      <div className="max-w-6xl mx-auto grid gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-sm font-semibold text-primary">Platform</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/platform" className="hover:text-primary">Overview</Link></li>
            <li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
            <li><Link href="/governance" className="hover:text-primary">Governance</Link></li>
            <li><a href="https://github.com/kindpath" className="hover:text-primary">GitHub</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-primary">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-primary">Disclaimer</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
            <li><Link href="/acknowledgement" className="hover:text-primary">Acknowledgement</Link></li>
          </ul>
        </div>
        <div className="text-sm text-slate-600">
          <p className="font-semibold text-primary">KindPath Collective</p>
          <p>Building KindEarth — sovereignty-first tools for ethical pilots.</p>
          <p className="mt-2">sam@kindpathcollective.org</p>
          <p className="mt-4 text-xs text-slate-500">© 2026 KindPath Collective. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
