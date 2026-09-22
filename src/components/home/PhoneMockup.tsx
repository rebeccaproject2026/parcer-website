import { useState, useEffect } from 'react';
import {
  Wifi,
  Battery,
  Signal,
  MapPin,
  Navigation,
  CheckCircle2,
  ShieldCheck,
  Star,
  ArrowRight,
  Sparkles,
  Phone,
  Volume2,
  Clock,
  CircleDollarSign,
  Truck,
  Bike,
} from 'lucide-react';
import type { AppStep } from '../../data/appGlimpses';

interface PhoneMockupProps {
  activeStep: AppStep;
  tab: 'driver' | 'customer';
}

export function PhoneMockup({ activeStep, tab }: PhoneMockupProps) {
  const [imageError, setImageError] = useState(false);

  // Reset image error state when activeStep changes to retry loading new image
  useEffect(() => {
    setImageError(false);
  }, [activeStep.id]);

  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px] select-none">
      {/* Outer Phone Frame (Titanium Pro Style) */}
      <div className="relative overflow-hidden rounded-[50px] border-[10px] border-[#1b2533] bg-[#0f172a] p-1.5 shadow-[0_25px_60px_-12px_rgba(15,23,42,0.35),0_0_0_1px_rgba(255,255,255,0.1)]">
        {/* Screen Bezel Container */}
        <div className="relative aspect-[9/18.5] w-full overflow-hidden rounded-[38px] bg-slate-50 text-slate-800 flex flex-col justify-between">
          {/* Real Screenshot Layer */}
          {!imageError ? (
            <img
              src={activeStep.image}
              alt={activeStep.title}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover object-top transition-opacity duration-300"
            />
          ) : (
            <div className="flex h-full flex-col justify-between bg-gradient-to-b from-[#f2f9f8] via-white to-[#f4f7f6]">
              {/* iOS Top Status Bar & Dynamic Island (Fallback Mode) */}
              <div className="relative z-30 flex items-center justify-between px-6 pt-3 pb-2 bg-transparent text-slate-800">
                <span className="text-xs font-bold tracking-tight">9:41</span>
                <div className="absolute left-1/2 top-2.5 h-4 w-20 -translate-x-1/2 rounded-full bg-black shadow-inner flex items-center justify-end px-2">
                  <div className="h-2 w-2 rounded-full bg-[#1b2533]/80" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-800">
                  <Signal size={12} strokeWidth={2.5} />
                  <Wifi size={12} strokeWidth={2.5} />
                  <Battery size={13} strokeWidth={2.5} />
                </div>
              </div>

              {/* Fallback Interactive High-Fidelity Parcer In-App Screen */}
              <div className="flex flex-1 flex-col justify-between p-4 text-left transition-all duration-500 animate-fadeIn">
                {/* App Brand Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <div className="h-6 w-6 rounded-lg bg-[#389c8e] flex items-center justify-center text-white font-extrabold text-[11px] shadow-sm">
                      P
                    </div>
                    <span className="font-extrabold text-sm tracking-tight text-[#1e293b]">
                      parcer
                    </span>
                    <span className="rounded bg-[#e6f5f2] px-1.5 py-0.5 text-[9px] font-bold text-[#389c8e] uppercase">
                      {tab === 'driver' ? 'Partner' : 'Express'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-slate-600">Online</span>
                  </div>
                </div>

                {/* Dynamic Screen Mockup Content according to screenType */}
                <div className="my-auto py-2">
                  {/* Driver Step 1: Duty On */}
                  {activeStep.screenType === 'driver-duty' && (
                    <div className="space-y-3 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-[#389c8e] shadow-md border-2 border-emerald-300">
                        <Sparkles size={28} className="animate-spin" style={{ animationDuration: '6s' }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">Duty Status: Active</h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">Searching high-demand pickups nearby</p>
                      </div>
                      <div className="rounded-2xl bg-white p-3 shadow-sm border border-emerald-100 text-left text-[11px] space-y-1.5">
                        <div className="flex justify-between font-semibold text-slate-600">
                          <span>Today's Target:</span>
                          <span className="text-[#389c8e] font-bold">₹1,500 / ₹2,000</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-[#389c8e] h-full w-3/4 rounded-full" />
                        </div>
                        <div className="text-[10px] text-slate-400 text-right">Target on track</div>
                      </div>
                    </div>
                  )}

                  {/* Driver Step 2: Instant Request */}
                  {activeStep.screenType === 'driver-request' && (
                    <div className="rounded-2xl bg-white p-3.5 shadow-md border-2 border-[#389c8e]/40 animate-pulse space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[9px] font-bold text-rose-600">
                          ⚡ INCOMING ORDER
                        </span>
                        <span className="text-sm font-extrabold text-[#389c8e]">₹180</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-slate-700">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-[#389c8e] shrink-0" />
                          <span className="truncate font-semibold">Navrangpura Hub (0.8 km)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Navigation size={12} className="text-amber-500 shrink-0" />
                          <span className="truncate font-semibold">SG Highway (6.2 km total)</span>
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#e6f5f2] py-2 text-center text-xs font-bold text-[#389c8e]">
                        Tap to Accept (14s)
                      </div>
                    </div>
                  )}

                  {/* Driver Step 3: Route to Pickup */}
                  {activeStep.screenType === 'driver-route' && (
                    <div className="space-y-2">
                      <div className="relative h-28 w-full rounded-xl bg-slate-200 overflow-hidden border border-slate-300">
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-70"
                          style={{ backgroundImage: "url('/services-map-bg.jpg')" }}
                        />
                        <div className="absolute top-2 left-2 rounded-lg bg-white/95 px-2 py-1 text-[10px] font-bold text-slate-700 shadow-sm">
                          📍 4 mins away
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-7 w-7 rounded-full bg-[#389c8e] text-white flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                            <Bike size={15} />
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white p-2.5 border border-slate-100 shadow-sm text-[11px] flex justify-between items-center">
                        <div>
                          <div className="font-bold text-slate-800">Sender: Prime Retail</div>
                          <div className="text-[10px] text-slate-400">Order #PC-8812</div>
                        </div>
                        <div className="h-7 w-7 rounded-full bg-emerald-50 text-[#389c8e] flex items-center justify-center">
                          <Phone size={13} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Driver Step 4: OTP Verification */}
                  {activeStep.screenType === 'driver-otp' && (
                    <div className="rounded-2xl bg-white p-3.5 shadow-sm border border-slate-100 text-center space-y-2.5">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f5f2] text-[#389c8e]">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-slate-800">Confirm Parcel Loading</h4>
                        <p className="text-[10px] text-slate-400">Ask sender for 4-digit start OTP</p>
                      </div>
                      <div className="flex justify-center gap-2">
                        {['4', '9', '2', '1'].map((n, i) => (
                          <div
                            key={i}
                            className="h-9 w-8 rounded-lg border-2 border-[#389c8e] bg-[#f2f9f8] flex items-center justify-center font-extrabold text-sm text-[#389c8e]"
                          >
                            {n}
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl bg-[#389c8e] py-1.5 text-[11px] font-bold text-white">
                        Start Trip Now
                      </div>
                    </div>
                  )}

                  {/* Driver Step 5: Navigation to Drop */}
                  {activeStep.screenType === 'driver-navigate' && (
                    <div className="space-y-2">
                      <div className="rounded-xl bg-[#1e293b] p-2.5 text-white flex items-center justify-between text-xs font-bold">
                        <div className="flex items-center gap-2">
                          <Navigation size={14} className="text-[#5bbdb9] animate-spin" />
                          <span>Turn right in 200m</span>
                        </div>
                        <span className="text-emerald-400">12 mins</span>
                      </div>
                      <div className="relative h-24 rounded-xl bg-slate-200 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-70"
                          style={{ backgroundImage: "url('/services-map-bg.jpg')" }}
                        />
                        <div className="absolute bottom-2 left-2 rounded bg-black/75 px-2 py-0.5 text-[9px] text-white">
                          Speed: 38 km/h (Clear Traffic)
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Driver Step 6: Delivered Confirmation */}
                  {activeStep.screenType === 'driver-delivered' && (
                    <div className="rounded-2xl bg-white p-3.5 shadow-sm border border-emerald-200 text-center space-y-2">
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckCircle2 size={24} />
                      </div>
                      <h4 className="font-bold text-xs text-slate-800">Trip Completed!</h4>
                      <div className="text-lg font-black text-[#389c8e]">₹180.00</div>
                      <p className="text-[10px] text-slate-500">Receiver OTP verified & goods delivered safely.</p>
                      <div className="rounded-xl bg-slate-100 py-1.5 text-[10px] font-bold text-slate-700">
                        Ready for Next Trip
                      </div>
                    </div>
                  )}

                  {/* Driver Step 7: Earnings Wallet */}
                  {activeStep.screenType === 'driver-earnings' && (
                    <div className="rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-3.5 text-white shadow-md space-y-2.5">
                      <div className="flex justify-between items-center text-[10px] text-slate-300">
                        <span>Today's Total Payout</span>
                        <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-emerald-400 font-bold">Payouts Active</span>
                      </div>
                      <div className="text-2xl font-black tracking-tight text-emerald-400">₹1,850.00</div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] bg-white/10 p-2 rounded-xl">
                        <div>Trips: <span className="font-bold">8 Completed</span></div>
                        <div>Hours: <span className="font-bold">5.5 hrs</span></div>
                      </div>
                      <div className="rounded-xl bg-[#389c8e] py-1.5 text-center text-[11px] font-bold text-white shadow-sm">
                        Instant Bank Transfer
                      </div>
                    </div>
                  )}

                  {/* Customer Step 1: Locations */}
                  {activeStep.screenType === 'customer-location' && (
                    <div className="space-y-2.5">
                      <div className="rounded-2xl bg-white p-3 shadow-sm border border-slate-100 space-y-2 text-[11px]">
                        <div className="flex items-center gap-2 border-b border-slate-100 pb-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#389c8e]" />
                          <span className="font-semibold text-slate-700 truncate">Navrangpura, Ahmedabad</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                          <span className="font-semibold text-slate-700 truncate">Satellite Hub, SG Road</span>
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#e6f5f2] p-2 text-center text-[10px] font-bold text-[#389c8e]">
                        📍 Estimated Distance: 5.4 km (16 mins)
                      </div>
                    </div>
                  )}

                  {/* Customer Step 2: Vehicle Selection */}
                  {activeStep.screenType === 'customer-vehicle' && (
                    <div className="space-y-1.5">
                      <div className="rounded-xl bg-white p-2 border-2 border-[#389c8e] shadow-sm flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Bike size={18} className="text-[#389c8e]" />
                          <div>
                            <div className="font-bold text-slate-800">2 Wheeler</div>
                            <div className="text-[9px] text-slate-400">Up to 20 kg</div>
                          </div>
                        </div>
                        <div className="font-extrabold text-[#389c8e]">₹65</div>
                      </div>
                      <div className="rounded-xl bg-white p-2 border border-slate-100 shadow-sm flex items-center justify-between text-xs opacity-75">
                        <div className="flex items-center gap-2">
                          <Truck size={18} className="text-slate-500" />
                          <div>
                            <div className="font-bold text-slate-700">3 Wheeler</div>
                            <div className="text-[9px] text-slate-400">Up to 500 kg</div>
                          </div>
                        </div>
                        <div className="font-bold text-slate-700">₹190</div>
                      </div>
                    </div>
                  )}

                  {/* Customer Step 3: Match */}
                  {activeStep.screenType === 'customer-match' && (
                    <div className="rounded-2xl bg-white p-3.5 shadow-sm border border-slate-100 text-center space-y-2">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f5f2] text-[#389c8e] font-bold text-sm">
                        RK
                      </div>
                      <div>
                        <h4 className="font-bold text-xs text-slate-800">Rajesh Kumar Matched</h4>
                        <div className="flex items-center justify-center gap-1 text-[10px] text-amber-500 font-semibold">
                          <Star size={10} fill="currentColor" /> 4.9 (420+ trips)
                        </div>
                      </div>
                      <div className="rounded-xl bg-emerald-50 py-1.5 text-[10px] font-bold text-emerald-700">
                        🛵 Arriving at pickup in 3 mins
                      </div>
                    </div>
                  )}

                  {/* Customer Step 4: Tracking */}
                  {activeStep.screenType === 'customer-tracking' && (
                    <div className="space-y-2">
                      <div className="relative h-24 rounded-xl bg-slate-200 overflow-hidden border border-slate-200">
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-70"
                          style={{ backgroundImage: "url('/services-map-bg.jpg')" }}
                        />
                        <div className="absolute top-2 left-2 rounded bg-[#389c8e] text-white px-2 py-0.5 text-[9px] font-bold">
                          Live Tracking
                        </div>
                      </div>
                      <div className="rounded-xl bg-white p-2 border border-slate-100 shadow-sm text-[10px] text-slate-600 flex justify-between">
                        <span>Status: <b>On the way to Drop</b></span>
                        <span className="text-[#389c8e] font-bold">Share Link</span>
                      </div>
                    </div>
                  )}

                  {/* Customer Step 5: Receipt */}
                  {activeStep.screenType === 'customer-receipt' && (
                    <div className="rounded-2xl bg-white p-3 shadow-sm border border-emerald-100 text-center space-y-1.5">
                      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckCircle2 size={18} />
                      </div>
                      <h4 className="font-bold text-xs text-slate-800">Package Delivered</h4>
                      <div className="text-sm font-extrabold text-slate-800">Total Paid: ₹65</div>
                      <div className="flex justify-center gap-1 text-amber-400 py-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={12} fill="currentColor" />
                        ))}
                      </div>
                      <div className="text-[9px] text-slate-400">Invoice sent to your registered WhatsApp</div>
                    </div>
                  )}
                </div>

                {/* Bottom App Navigation Bar */}
                <div className="border-t border-slate-100 pt-2 flex justify-around text-slate-400 text-[9px] font-medium">
                  <div className="text-[#389c8e] font-bold flex flex-col items-center">
                    <div className="h-1 w-4 rounded-full bg-[#389c8e] mb-0.5" />
                    Home
                  </div>
                  <div>Orders</div>
                  <div>Wallet</div>
                  <div>Profile</div>
                </div>
              </div>

              {/* iOS Bottom Home Indicator Bar */}
              <div className="relative z-30 pb-2 pt-1 flex justify-center bg-transparent">
                <div className="h-1 w-28 rounded-full bg-slate-400/80" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Dynamic Badge below the phone */}
      <div className="mt-4 flex justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/95 px-4 py-1.5 text-xs font-bold text-[#389c8e] shadow-lg backdrop-blur transition-all duration-300">
          <span className="h-2 w-2 rounded-full bg-[#389c8e] animate-ping" />
          {activeStep.badgeText}
        </div>
      </div>
    </div>
  );
}
