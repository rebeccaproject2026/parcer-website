import { ArrowUpRight, MapPin, Navigation, Truck } from 'lucide-react';
import type { View } from '../../types';
import { serviceItems } from '../../data/services';
import { SectionIntro } from '../common/SectionIntro';
import { ServiceCard } from './ServiceCard';

interface ServicesSectionProps {
  go: (view: View) => void;
}

export function ServicesSection({ go }: ServicesSectionProps) {
  return (
    <section id="services" className="relative overflow-hidden bg-[#f6f9f8] px-5 py-24 lg:px-8 scroll-mt-20">
      {/* Real City Street Navigation Map Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply"
        style={{ backgroundImage: "url('/services-map-bg.jpg')" }}
      />

      {/* Map Vignette Gradients for Text Contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f6f9f8]/70 via-white/40 to-[#f6f9f8]/85" />

      {/* Parcer Interactive Live Map Indicators (Pins & GPS Radar Pulse) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Parcer Delivery Partner Marker (Positioned comfortably in top-left margin) */}
        <div className="absolute left-4 sm:left-8 lg:left-12 xl:left-16 top-6 sm:top-8 hidden lg:block">
          <div className="relative flex flex-col items-center">
            <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#389c8e] shadow-md border border-emerald-100">
              <Truck size={13} /> Parcer 2W Fleet (3 mins)
            </div>
            <div className="h-7 w-7 rounded-full bg-[#389c8e] text-white flex items-center justify-center shadow-lg border-2 border-white mt-1">
              <MapPin size={15} />
            </div>
          </div>
        </div>

        {/* Parcer Live GPS Dispatch Center (Moved down and shifted left away from the screen edge) */}
        <div className="absolute right-8 sm:right-14 lg:right-20 xl:right-28 top-12 sm:top-14 lg:top-16 hidden lg:block">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-20 w-20 rounded-full bg-blue-500/15 animate-ping" />
            <div className="h-14 w-14 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="h-5 w-5 rounded-full border-2 border-white bg-blue-600 shadow-md flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            </div>
            <div className="absolute top-15 whitespace-nowrap rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-[#334155] shadow-md border border-slate-100">
              📍 Parcer Dispatch Center
            </div>
          </div>
        </div>

        {/* Parcer Active Pickup Marker (Far Bottom Left Corner) */}
        <div className="absolute left-6 sm:left-10 lg:left-16 bottom-8 sm:bottom-10 hidden xl:block">
          <div className="relative flex flex-col items-center">
            <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-[#e07559] shadow-md border border-rose-100">
              <Navigation size={11} className="text-[#e07559]" /> Active Pickup #PC-89
            </div>
            <div className="h-6 w-6 rounded-full bg-[#e07559] text-white flex items-center justify-center shadow-lg border-2 border-white mt-1">
              <MapPin size={13} />
            </div>
          </div>
        </div>

        {/* Parcer Express Delivery Marker (Far Bottom Right Corner) */}
        <div className="absolute right-8 sm:right-12 lg:right-20 bottom-8 sm:bottom-10 hidden xl:block">
          <div className="relative flex flex-col items-center">
            <div className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-[#334155] shadow-md border border-slate-100">
              ⚡ Express Delivery Hub
            </div>
            <div className="h-6 w-6 rounded-full bg-[#389c8e] text-white flex items-center justify-center shadow-lg border-2 border-white mt-1">
              <MapPin size={13} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-[1100px]">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionIntro
            eyebrow="What We Offer"
            title="Services Built For You."
          />
          <button
            onClick={() => go('services')}
            className="mb-1 inline-flex items-center gap-2 text-sm font-bold text-[#389c8e] hover:gap-3 transition-all"
          >
            View all services <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Services Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              className={
                index === 3
                  ? 'lg:translate-x-[calc(50%+12px)]'
                  : index === 4
                  ? 'lg:translate-x-[calc(50%+12px)]'
                  : ''
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
