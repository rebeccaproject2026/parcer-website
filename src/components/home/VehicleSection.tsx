import { Clock3 } from 'lucide-react';
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
                <div className="relative mb-6 flex h-48 items-center justify-center rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] p-4 transition-colors duration-300 group-hover:from-[#eef8f6] group-hover:to-[#e3f4f1]">
                  <div className="absolute bottom-3 left-1/2 h-2.5 w-36 -translate-x-1/2 rounded-full bg-slate-400/20 blur-[2px]" />
                  <img
                    src={image}
                    alt={name}
                    className="relative z-10 max-h-36 w-auto max-w-[85%] object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                  />
                </div>

                {/* Header & Status Badge */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#334155]">{name}</h3>
                  {active ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e5f5f2] px-3 py-1 text-[11px] font-bold text-[#389c8e]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#389c8e] animate-pulse" />
                      Available
                    </span>
                  ) : (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500">
                      Coming soon
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {text}
                </p>
              </div>

              {/* Action Button */}
              {!active && (
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <Clock3 size={14} /> Notify me when launched
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
