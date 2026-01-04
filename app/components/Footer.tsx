import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-slate-700">
            © {year} <span className="font-medium">KindPath Foundation</span>. Built by{" "}
            <span className="font-medium">KindPath Collective</span>. Powered by{" "}
            <span className="font-medium">KindEarth</span>.
          </p>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-slate-700">
            <Link className="hover:underline" href="/privacy">Privacy</Link>
            <Link className="hover:underline" href="/terms">Terms</Link>
            <Link className="hover:underline" href="/disclaimer">Disclaimer</Link>
            <Link className="hover:underline" href="/acknowledgement">Acknowledgement</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
