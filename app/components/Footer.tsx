export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-neutral-600">
            © {year}{" "}
            <span className="font-semibold text-neutral-800">KindPath Foundation</span>
            <span className="mx-2 text-[#B09958]">|</span>
            <span className="font-semibold text-[#436F87]">KindPath Collective</span>
            <span className="mx-2 text-[#B09958]">|</span>
            <span className="font-semibold text-[#1F2812]">KindEarth</span>
          </p>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-neutral-600">
            <a className="hover:text-neutral-900" href="/legal/privacy">Privacy</a>
            <a className="hover:text-neutral-900" href="/legal/terms">Terms</a>
            <a className="hover:text-neutral-900" href="/legal/disclaimer">Disclaimer</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
