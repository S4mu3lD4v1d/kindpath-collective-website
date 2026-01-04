export const metadata = { title: "Disclaimer" };

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Disclaimer</h1>
      <p className="mt-6 text-neutral-700">
        KindPath materials are shared in good faith for research, discussion, and community-led learning.
        Nothing on this site constitutes legal, medical, financial, or professional advice.
      </p>
      <p className="mt-4 text-neutral-700">
        Any modelling outputs or forecasts (KindEarth) are experimental and should be treated as decision-support,
        not decision authority.
      </p>
    </main>
  );
}
