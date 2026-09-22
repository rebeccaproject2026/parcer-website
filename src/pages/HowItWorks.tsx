import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  CreditCard,
  FileCheck,
  MapPin,
  Navigation,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  UserCheck,
  UserRound,
  Wallet,
} from 'lucide-react';
import type { View } from '../types';
import { Subpage } from '../components/layout/Subpage';
import { HighlightsTicker } from '../components/common/HighlightsTicker';
import { CtaSection } from '../components/common/CtaSection';

interface HowItWorksProps {
  go: (view: View) => void;
}

const customerSteps = [
  {
    title: 'Enter Pickup & Drop Locations',
    text: 'Set your precise pickup and destination addresses on the map or enter landmark details.',
    icon: MapPin,
  },
  {
    title: 'Select Suitable Vehicle',
    text: 'Choose between 2-Wheeler, 3-Wheeler, or Mini Truck based on your payload volume and weight.',
    icon: Truck,
  },
  {
    title: 'Instant Fare & Confirmation',
    text: 'Get transparent upfront pricing with zero hidden surge fees before confirming the booking.',
    icon: CreditCard,
  },
  {
    title: 'Driver Arrival & Safe Loading',
    text: 'A verified parcer partner arrives at your pickup location within minutes to load your goods securely.',
    icon: UserCheck,
  },
  {
    title: 'Real-Time Live Trip Tracking',
    text: 'Follow the live route progress and share the tracking link with the receiver for seamless handoff.',
    icon: Navigation,
  },
  {
    title: 'Successful Drop & Digital Proof',
    text: 'Goods safely delivered at the destination with digital OTP confirmation and trip summary.',
    icon: PackageCheck,
  },
];

const driverSteps = [
  {
    title: 'Register & Submit Documents',
    text: 'Provide basic identity and vehicle papers (RC, DL, Insurance) through our quick onboarding portal.',
    icon: FileCheck,
  },
  {
    title: 'Fast Document Verification',
    text: 'Our team verifies your profile within 24 hours so you can start accepting local trips immediately.',
    icon: ShieldCheck,
  },
  {
    title: 'Receive Instant Trip Requests',
    text: 'Turn on duty status in your area and accept profitable pickup requests that fit your vehicle.',
    icon: Sparkles,
  },
  {
    title: 'Direct Daily Bank Payouts',
    text: 'Enjoy maximum earnings and receive daily payouts credited directly to your bank account.',
    icon: Wallet,
  },
];

export function HowItWorks({ go }: HowItWorksProps) {
  const [tab, setTab] = useState<'customer' | 'driver'>('customer');

  const activeSteps = tab === 'customer' ? customerSteps : driverSteps;

  return (
    <Subpage
      go={go}
      bgType="how-it-works"
      eyebrow="The Parcer Workflow"
      title="Transparent, fast and predictable."
      text="Whether you are sending goods across the city or earning as a verified parcer partner, here is how the seamless process works."
    >
      <HighlightsTicker />

      <section className="px-5 pt-20 pb-8 lg:px-8">
        <div className="mx-auto max-w-[900px]">
          {/* Dual Tabs */}
          <div className="mb-14 flex justify-center">
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-100 p-1.5 shadow-inner">
              <button
                onClick={() => setTab('customer')}
                className={`rounded-full px-6 py-3 text-xs font-bold transition sm:text-sm ${tab === 'customer'
                  ? 'bg-white text-[#389c8e] shadow-sm'
                  : 'text-slate-600 hover:text-[#389c8e]'
                  }`}
              >
                📦 For Customers & Shippers
              </button>
              <button
                onClick={() => setTab('driver')}
                className={`rounded-full px-6 py-3 text-xs font-bold transition sm:text-sm ${tab === 'driver'
                  ? 'bg-white text-[#389c8e] shadow-sm'
                  : 'text-slate-600 hover:text-[#389c8e]'
                  }`}
              >
                🚚 For Driver Partners
              </button>
            </div>
          </div>

          {/* Steps Timeline */}
          <div className="space-y-6">
            {activeSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative flex gap-6 rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_8px_30px_rgba(51,65,85,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(51,65,85,0.08)] sm:p-7"
                >
                  <div className="flex h-14 w-14 aspect-square shrink-0 self-start items-center justify-center rounded-2xl bg-[#e5f5f2] text-[#389c8e] shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-[#389c8e] uppercase tracking-wider">
                        Step 0{index + 1}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="text-[11px] text-slate-400 font-medium">Quick & Simple</span>
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-[#334155] sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => go('contact')}
              className="inline-flex items-center gap-2 rounded-full bg-[#389c8e] px-8 py-4 text-sm font-bold text-white shadow-[0_4px_14px_rgba(56,156,142,0.3)] transition hover:bg-[#2e8276]"
            >
              {tab === 'customer' ? 'Book Your First Trip' : 'Join as Parcer Partner'} <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-20">
            <CtaSection go={go} />
          </div>
        </div>
      </section>
    </Subpage>
  );
}
