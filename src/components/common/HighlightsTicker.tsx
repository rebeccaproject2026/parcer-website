import { BadgePercent, Bike, Clock, MapPin, ShieldCheck, Zap } from 'lucide-react';

const items = [
  { text: 'Instant On-Demand Booking', icon: Zap, color: 'text-[#f4c95d]' },
  { text: 'Live GPS Route Tracking', icon: MapPin, color: 'text-[#389c8e]' },
  { text: '100% Verified Driver Partners', icon: ShieldCheck, color: 'text-[#5bbdb9]' },
  { text: 'Zero Hidden Charges & Transparent Rates', icon: BadgePercent, color: 'text-[#f4c95d]' },
  { text: 'Fast 2-Wheeler Doorstep Delivery', icon: Bike, color: 'text-[#389c8e]' },
  { text: 'Quick Pickup in 10 Min', icon: Clock, color: 'text-[#5bbdb9]' },
];

export function HighlightsTicker() {
  return (
    <div className="relative overflow-hidden border-y border-slate-100 bg-gradient-to-r from-[#eef9f7] via-[#f9fcfa] to-[#eef9f7] py-3.5">
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 text-xs font-bold text-slate-700 sm:text-sm"
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm ${item.color}`}>
                <Icon size={14} />
              </span>
              <span>{item.text}</span>
              <span className="text-slate-300 ml-4 font-normal">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
