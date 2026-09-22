import { ArrowRight, CheckCircle2, PackageCheck, Truck } from 'lucide-react';
import type { View } from '../../types';

interface DualPersonaSectionProps {
  go: (view: View, anchor?: string) => void;
}

export function DualPersonaSection({ go }: DualPersonaSectionProps) {
  return (
    <section className="bg-[#f7fbfa] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-[1140px]">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#389c8e]">
            Built for Everyone
          </div>
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#334155] sm:text-4xl">
            Choose how you want to use Parcer
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Whether you need to transport goods for personal or business use, or want to earn as a parcer partner.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Card 1: For Customers / Businesses */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white bg-white p-8 shadow-[0_12px_40px_rgba(51,65,85,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(51,65,85,0.12)]">
            <div className="absolute right-[-20px] top-[-20px] h-36 w-36 rounded-full bg-[#e5f5f2] opacity-60" />
            <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e5f5f2] text-[#389c8e]">
                <PackageCheck size={28} />
              </div>
              <div className="inline-block rounded-full bg-[#dff2ee] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#389c8e]">
                For Shippers & Businesses
              </div>
              <h3 className="mt-4 text-2xl font-bold text-[#334155]">
                Need to Move Goods?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Book a fast 2-Wheeler courier within seconds. Transparent upfront pricing, verified delivery partners, and live GPS route tracking.
              </p>

              <div className="my-6 space-y-3 border-y border-slate-100 py-5">
                {[
                  'Instant on-demand pickup in under 10 minutes',
                  'Live real-time rider tracking from start to drop',
                  'Dedicated door-to-door courier delivery for everyone',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 sm:text-sm">
                    <CheckCircle2 size={16} className="shrink-0 text-[#389c8e]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="relative z-10 mt-6">
              <button
                type="button"
                onClick={() => go('home', 'ready-to-move')}
                className="btn-shimmer flex w-full items-center justify-center gap-2 rounded-full bg-[#389c8e] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(56,156,142,0.3)] transition-all duration-300 hover:bg-[#2e8276] hover:shadow-[0_6px_22px_rgba(56,156,142,0.45)] hover:-translate-y-0.5 active:scale-98 cursor-pointer"
              >
                <span>Book a Vehicle</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 2: For Driver Partners */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#d6ede8] bg-gradient-to-br from-[#ffffff] to-[#eef9f7] p-8 shadow-[0_12px_40px_rgba(56,156,142,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(56,156,142,0.15)]">
            <div className="absolute right-[-20px] top-[-20px] h-36 w-36 rounded-full bg-[#fdeec3] opacity-50" />
            <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff2d2] text-[#d49f24]">
                <Truck size={28} />
              </div>
              <div className="inline-block rounded-full bg-[#fef3db] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#b88514]">
                For Delivery Partners
              </div>
              <h3 className="mt-4 text-2xl font-bold text-[#334155]">
                Earn with Parcer Partner
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Turn your 2-Wheeler into a high-earning asset. Enjoy regular trip requests, fast daily payouts, and flexible work timings.
              </p>

              <div className="my-6 space-y-3 border-y border-slate-200/60 py-5">
                {[
                  'High earnings with complete transparency on every trip',
                  'Instant daily payouts directly to your bank account',
                  'Continuous delivery requests across high-demand zones',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-600 sm:text-sm">
                    <CheckCircle2 size={16} className="shrink-0 text-[#389c8e]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="relative z-10 mt-6">
              <button
                type="button"
                onClick={() => go('home', 'ready-to-move')}
                className="btn-shimmer flex w-full items-center justify-center gap-2 rounded-full bg-[#d49f24] px-6 py-3.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(212,159,36,0.3)] transition-all duration-300 hover:bg-[#b88514] hover:shadow-[0_6px_22px_rgba(212,159,36,0.45)] hover:-translate-y-0.5 active:scale-98 cursor-pointer"
              >
                <span>Join as a Parcer Partner</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
