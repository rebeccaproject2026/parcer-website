import { CheckCircle2, Globe2, MapPin, ShieldCheck, Sparkles, Truck, UserRound, Zap } from 'lucide-react';
import type { View } from '../types';
import { Subpage } from '../components/layout/Subpage';
import { HighlightsTicker } from '../components/common/HighlightsTicker';
import { CtaSection } from '../components/common/CtaSection';

interface AboutProps {
  go: (view: View) => void;
}

const coreValues: [string, string, typeof ShieldCheck][] = [
  [
    'Trust & Safety First',
    'Every package, furniture piece, or business order is handled with verified checks and safe drivers.',
    ShieldCheck,
  ],
  [
    'Empowering Local Drivers',
    'We believe in fair transparent earnings and steady trips for vehicle partners.',
    UserRound,
  ],
  [
    'Hyper-Local Network',
    'Optimized routing designed around the pulse of city streets, tight lanes, and busy markets.',
    MapPin,
  ],
];

const stats = [
  { value: '10,000+', label: 'Deliveries Completed' },
  { value: '500+', label: 'Verified Partners' },
  { value: '99.4%', label: 'On-Time Rate' },
  { value: '4.9 / 5', label: 'Customer Rating' },
];

export function About({ go }: AboutProps) {
  return (
    <Subpage
      go={go}
      eyebrow="About Parcer"
      title="A Better Way to Move."
      text="Building dependable, tech-enabled goods transportation for people and businesses across India."
    >
      <HighlightsTicker />

      <section className="px-5 pt-20 pb-8 lg:px-8">
        <div className="mx-auto max-w-[1100px] space-y-20">
          {/* Mission & Vision */}
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-[26px] border border-slate-100 bg-white p-8 shadow-[0_10px_35px_rgba(51,65,85,0.05)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e1f3ef] text-[#389c8e]">
                <Globe2 size={26} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#334155]">Our Mission</h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                To simplify city goods movement as easily as sending a chat message. Accessible 24/7, fair-priced, and powered by trusted local driver partners.
              </p>
            </div>
            <div className="rounded-[26px] border border-slate-100 bg-white p-8 shadow-[0_10px_35px_rgba(51,65,85,0.05)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1d4] text-[#c08a1b]">
                <Sparkles size={26} />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-[#334155]">Our Vision</h2>
              <p className="mt-4 text-sm leading-7 text-slate-500">
                A world where every small business, household, and vendor moves materials without stress, backed by smart dispatch technology and live tracking.
              </p>
            </div>
          </div>

          {/* Stats Bar */}
          {/* <div className="grid grid-cols-2 gap-4 rounded-[28px] bg-white p-6 shadow-[0_10px_35px_rgba(51,65,85,0.06)] border border-slate-100 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-3">
                <div className="text-3xl font-extrabold text-[#389c8e] tracking-tight">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{s.label}</div>
              </div>
            ))}
          </div> */}

          {/* Core Philosophy Banner */}
          <div className="relative overflow-hidden rounded-[30px] bg-[#334155] p-8 text-white sm:p-14">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
            <div className="max-w-2xl relative z-10">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8ed8d0]">
                Why Parcer Stands Out
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                Technology that brings clarity and reliability to Indian roads.
              </h2>
              <p className="mt-5 leading-8 text-white/70">
                No hidden negotiations, no extra driver charges. Clear upfront pricing, verified vehicle checks, and live trip link sharing for complete peace of mind.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {coreValues.map(([title, text, Icon]) => (
              <div key={title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f5f2] text-[#389c8e] mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-lg text-[#334155]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>

          <CtaSection go={go} />
        </div>
      </section>
    </Subpage>
  );
}
