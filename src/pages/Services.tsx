import { ArrowRight, BadgeCheck, Box, Briefcase, Building2, Check, Clock, ShieldCheck, Sparkles, Truck, Zap } from 'lucide-react';
import type { View } from '../types';
import { serviceItems } from '../data/services';
import { Subpage } from '../components/layout/Subpage';
import { HighlightsTicker } from '../components/common/HighlightsTicker';
import { CtaSection } from '../components/common/CtaSection';

interface ServicesProps {
  go: (view: View) => void;
}

export function Services({ go }: ServicesProps) {
  return (
    <Subpage
      go={go}
      eyebrow="Our Services"
      title="Built for Every Move."
      text="From single parcels to full truckloads, book the right vehicle at honest per-km rates."
    >
      <HighlightsTicker />

      <section className="px-5 pt-20 pb-8 lg:px-8">
        <div className="mx-auto max-w-[1100px] space-y-20">
          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {serviceItems.map((service, index) => (
              <div
                key={service.title}
                className="group flex flex-col justify-between rounded-[28px] border border-slate-100 bg-white p-8 shadow-[0_12px_35px_rgba(51,65,85,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(51,65,85,0.1)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 aspect-square shrink-0 self-start items-center justify-center rounded-2xl bg-[#e6f5f2] text-[#389c8e] shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <service.icon size={24} />
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-[#334155]">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.text} Get matched with the closest verified vehicle, view upfront fare estimates, and monitor real-time delivery status.
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs font-semibold text-slate-400">Available across city hubs</span>
                  <button
                    onClick={() => go('contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#389c8e] transition group-hover:gap-2.5"
                  >
                    Book This Service <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Business & Enterprise Tier */}
          <div className="rounded-[30px] border border-[#bce7e1] bg-gradient-to-br from-[#f2f9f8] to-[#ffffff] p-8 sm:p-12 shadow-[0_15px_40px_rgba(56,156,142,0.08)]">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#dff2ee] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#389c8e]">
                  <Building2 size={13} /> Parcer For Business
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[#334155] sm:text-3xl">
                  Dedicated Logistics Layer for Retailers & D2C Brands
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Customized monthly billing, dedicated account manager, prioritized vehicle dispatch, and bulk multi-drop delivery optimization.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2"><Check size={15} className="text-[#389c8e]" /> Monthly invoicing & GST</div>
                  <div className="flex items-center gap-2"><Check size={15} className="text-[#389c8e]" /> API & bulk orders</div>
                  <div className="flex items-center gap-2"><Check size={15} className="text-[#389c8e]" /> Guaranteed vehicle SLA</div>
                  <div className="flex items-center gap-2"><Check size={15} className="text-[#389c8e]" /> Priority customer support</div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 text-center">
                <div className="text-xs font-bold uppercase text-slate-400">Corporate & Vendor Fleet</div>
                <div className="mt-2 text-2xl font-extrabold text-[#334155]">Custom Rates</div>
                <p className="mt-2 text-xs text-slate-500 leading-5">Talk to our enterprise logistics team for specialized pricing.</p>
                <button
                  onClick={() => go('contact')}
                  className="mt-5 w-full rounded-full bg-[#389c8e] py-3 text-xs font-bold text-white transition hover:bg-[#2e8276]"
                >
                  Contact Business Team
                </button>
              </div>
            </div>
          </div>

          <CtaSection go={go} />
        </div>
      </section>
    </Subpage>
  );
}
