import { Truck } from 'lucide-react';
import { SectionIntro } from '../common/SectionIntro';

export function TrackingSection() {
  return (
    <section className="bg-[#334155] px-5 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          eyebrow="Technology you can feel"
          title="Stay in control from pickup to delivery."
          text="Know who is carrying your goods, where they are and what happens next — all from one clear trip view."
        />
        <div className="rounded-[28px] bg-[#425469] p-4 shadow-2xl sm:p-6">
          <div className="rounded-[20px] bg-[#eef5f4] p-5 text-[#334155] sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Trip in progress
                </div>
                <div className="mt-1 text-xl font-bold">Parcer #PC-2489</div>
              </div>
              <div className="rounded-full bg-[#dff2ee] px-3 py-2 text-xs font-bold text-[#389c8e]">
                On the way
              </div>
            </div>
            <div className="relative my-8 h-36 overflow-hidden rounded-2xl bg-[#d9e8e7]">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'linear-gradient(35deg, transparent 47%, #9cc5c0 48%, #9cc5c0 49%, transparent 50%), linear-gradient(145deg, transparent 47%, #9cc5c0 48%, #9cc5c0 49%, transparent 50%)',
                  backgroundSize: '90px 70px',
                }}
              />
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 500 144"
                fill="none"
              >
                <path
                  d="M35 113C105 90 111 29 205 50C300 70 315 113 455 35"
                  stroke="#389c8e"
                  strokeWidth="4"
                  strokeDasharray="9 8"
                />
                <circle cx="35" cy="113" r="7" fill="#334155" />
                <circle cx="455" cy="35" r="7" fill="#f4c95d" />
              </svg>
              <div className="absolute left-[42%] top-[26%] rounded-full bg-[#389c8e] p-2 text-white shadow-lg">
                <Truck size={15} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-slate-400">Pickup</div>
                <div className="mt-1 font-bold">Indiranagar</div>
              </div>
              <div>
                <div className="text-slate-400">Driver</div>
                <div className="mt-1 font-bold">Arjun K.</div>
              </div>
              <div>
                <div className="text-slate-400">ETA</div>
                <div className="mt-1 font-bold">18 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
