import { Sparkles } from 'lucide-react';
import type { View } from '../../types';
import { SectionIntro } from '../common/SectionIntro';

interface VehicleSectionProps {
  go: (view: View) => void;
}

interface VehicleItem {
  name: string;
  text: string;
  image: string;
  active: boolean;
}

const vehicles: VehicleItem[] = [
  {
    name: '2 Wheeler',
    text: 'Small parcels, documents, gifts and instant city runs',
    image: '/2 WHEELER.png',
    active: true,
  },
  {
    name: '3 Wheeler',
    text: 'Groceries, cartons, daily inventory and bulk stock',
    image: '/3 WHEELER.png',
    active: false,
  },
  {
    name: 'Mini Truck',
    text: 'Furniture, appliances and larger commercial loads',
    image: '/Truck.png',
    active: false,
  },
];

export function VehicleSection({ go }: VehicleSectionProps) {
  return (
    <section className="bg-[#f9fbfb] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <SectionIntro
          eyebrow="The Right Fit Fleet"
          title="Choose Your Vehicle."
          text="From a small envelope to bulk commercial goods, match your load with the right vehicle."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {vehicles.map(({ name, text, image, active }) => (
            <div
              key={name}
              className="group relative flex flex-col justify-between rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(51,65,85,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#5bbdb9] hover:shadow-[0_20px_45px_rgba(56,156,142,0.12)]"
            >
              <div>
                {/* Vehicle Image Stage */}
                <div className="relative mb-6 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] p-4 transition-colors duration-300 group-hover:from-[#eef8f6] group-hover:to-[#e3f4f1]">
                  {/* Status Badge for Active Vehicles (Top Right) */}
                  {active && (
                    <span className="absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-[#389c8e] px-3.5 py-1 text-[11px] font-bold text-white shadow-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      Available
                    </span>
                  )}

                  {/* Creative Frosted Glass Coming Soon Overlay for Inactive Vehicles */}
                  {!active && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/15 backdrop-blur-[3px] transition-all duration-300 group-hover:bg-slate-900/20">
                      <div className="relative inline-flex items-center gap-2 rounded-full border border-white/35 bg-[#334155]/90 px-4 py-2 shadow-[0_10px_25px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 group-hover:scale-105 group-hover:border-[#5bbdb9]/70 group-hover:shadow-[0_12px_32px_rgba(56,156,142,0.3)]">
                        {/* Animated Radar Pulse Dot */}
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f4c95d] opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f4c95d]" />
                        </span>

                        <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white">
                          Coming Soon
                        </span>

                        <Sparkles size={13} className="text-[#f4c95d] transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                    </div>
                  )}

                  {/* Ground Shadow */}
                  <div className={`absolute bottom-3 left-1/2 h-2.5 w-36 -translate-x-1/2 rounded-full bg-slate-400/20 blur-[2px] ${!active ? 'opacity-35' : ''}`} />

                  {/* Vehicle Image */}
                  <img
                    src={image}
                    alt={name}
                    className={`relative z-10 max-h-36 w-auto max-w-[85%] object-contain drop-shadow-md transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 ${
                      !active ? 'filter blur-[1.8px] opacity-70 grayscale-[25%]' : ''
                    }`}
                  />
                </div>

                {/* Header */}
                <h3 className="text-xl font-bold text-[#334155]">{name}</h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
