import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { View } from '../types';
import { HeroVisual } from '../components/home/HeroVisual';
import { HighlightsTicker } from '../components/common/HighlightsTicker';
import { Stats } from '../components/home/Stats';
import { HowSection } from '../components/home/HowSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { VehicleSection } from '../components/home/VehicleSection';
import { DualPersonaSection } from '../components/home/DualPersonaSection';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { FaqSection } from '../components/home/FaqSection';
import { CtaSection } from '../components/common/CtaSection';
import { NewsletterOverlap } from '../components/common/NewsletterOverlap';

interface HomeProps {
  go: (view: View, anchor?: string) => void;
  activeFaq: number | null;
  setActiveFaq: (index: number | null) => void;
}

export function Home({ go, activeFaq, setActiveFaq }: HomeProps) {
  return (
    <main>
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fbfa] via-[#f7fbfa] to-white pt-32 lg:pt-36">
        {/* Subtle decorative background curves */}
        <div className="pointer-events-none absolute left-[-180px] top-10 h-[480px] w-[480px] rounded-full border border-[#b7e3dc]/50" />
        <div className="pointer-events-none absolute right-[-240px] top-16 h-[620px] w-[620px] rounded-full border border-[#b7e3dc]/40" />

        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-5 pb-16 lg:grid-cols-[1fr_1fr] lg:px-8 lg:pb-24">
          {/* Left Column Content */}
          <div className="relative z-10 max-w-xl">
            {/* Top Eyebrow with Line & Accent Sparkle */}
            <div className="mb-5 inline-flex items-center gap-2.5 text-sm font-bold tracking-tight text-[#334155]">
              <span className="h-1 w-9 rounded-full bg-[#f4c95d]" />
              <span>Welcome Goods Delivery Service</span>
              <div className="flex items-center text-[#f4c95d]">
                <Sparkles size={16} fill="currentColor" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-[46px] font-extrabold leading-[1.06] tracking-[-0.055em] text-[#334155] sm:text-[60px] lg:text-[70px]">
              Fastest Delivery <br />
              Easy <span className="text-[#389c8e]">Pickup</span>
            </h1>

            {/* Description Subtext */}
            <p className="mt-6 max-w-[490px] text-[16px] leading-8 text-slate-500 sm:text-[17px]">
              Reliable, convenient and technology-driven transportation for moving goods across the city — whenever you need it.
            </p>

            {/* App Store & Google Play Download Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  go('contact');
                }}
                className="transition-transform duration-200 hover:scale-105 active:scale-95 shadow-sm rounded-[27px]"
              >
                <img
                  src="/app-store.svg"
                  alt="Download on the App Store"
                  className="h-[46px] w-auto"
                />
              </a>

              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  go('contact');
                }}
                className="transition-transform duration-200 hover:scale-105 active:scale-95 shadow-sm rounded-[27px]"
              >
                <img
                  src="/play-store.svg"
                  alt="Get it on Google Play"
                  className="h-[46px] w-auto"
                />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[12px] font-semibold text-slate-500">
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-[#389c8e]" /> Verified drivers
              </span>
              <span className="flex items-center gap-2">
                <Clock3 size={16} className="text-[#389c8e]" /> On-time delivery
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#389c8e]" /> Safe goods guarantee
              </span>
            </div>
          </div>

          {/* Right Column Visual Graphic */}
          <HeroVisual />
        </div>
      </section>

      {/* Infinite Highlights Ticker */}
      <HighlightsTicker />

      {/* Stats Counter Bar */}
      {/* <Stats /> */}

      {/* How It Works Section */}
      <HowSection go={go} />

      {/* Services Grid Section */}
      <ServicesSection go={go} />

      {/* Vehicles Fleet Section (3 Vehicles) */}
      <VehicleSection go={go} />

      {/* Dual Persona Customer / Driver Cards */}
      <DualPersonaSection go={go} />

      {/* Testimonials */}
      {/* <TestimonialSection /> */}

      {/* Frequently Asked Questions */}
      <FaqSection activeFaq={activeFaq} setActiveFaq={setActiveFaq} />

      {/* Floating Newsletter & CTA */}
      <div className="space-y-12 pb-2">
        <NewsletterOverlap go={go} />
        <CtaSection go={go} />
      </div>
    </main>
  );
}
