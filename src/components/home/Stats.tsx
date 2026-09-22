export function Stats() {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 divide-x divide-slate-100 px-5 py-8 sm:grid-cols-4 lg:px-8">
        <Stat value="10K+" label="Deliveries completed" />
        <Stat value="500+" label="Verified drivers" />
        <Stat value="50+" label="Service areas" />
        <Stat value="4.9/5" label="Customer rating" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-3 text-center sm:px-6">
      <div className="text-2xl font-bold tracking-[-0.04em] text-[#334155] sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">
        {label}
      </div>
    </div>
  );
}
