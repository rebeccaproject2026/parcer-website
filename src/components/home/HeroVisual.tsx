import { Award, Sparkles, Zap } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-[460px] w-full max-w-[560px] items-center justify-center lg:h-[540px]">
      {/* Background Circular & Organic Aura */}
      <div className="absolute h-[380px] w-[380px] rounded-full bg-gradient-to-br from-[#fef5df] via-[#e5f5f2] to-[#d3eee9] shadow-[0_20px_60px_rgba(56,156,142,0.14)] lg:h-[470px] lg:w-[470px]" />
      <div className="absolute h-[340px] w-[340px] rounded-full border border-white/60 bg-gradient-to-tr from-white/40 to-transparent backdrop-blur-[2px] lg:h-[420px] lg:w-[420px]" />

      {/* Decorative concentric wavy ring lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 560 540"
        fill="none"
      >
        <circle
          cx="280"
          cy="270"
          r="230"
          stroke="#bce7e1"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <path
          d="M70 200 Q 150 90 280 120 T 490 220"
          stroke="#f4c95d"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M90 380 Q 220 460 360 410 T 510 320"
          stroke="#76c8bf"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
      </svg>

      {/* Main 3D Delivery Rider Vector Image */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          src="/delivery-rider.png"
          alt="Parcer Delivery Rider"
          className="h-[360px] w-auto max-w-full object-contain drop-shadow-[0_20px_35px_rgba(51,65,85,0.22)] transition-transform duration-500 hover:scale-105 lg:h-[450px]"
        />
      </div>

      {/* Floating Card 1: Middle-Left "Express Delivery" */}
      <div className="absolute -left-3 top-[32%] z-20 flex animate-float items-center gap-3 rounded-2xl border border-slate-100/90 bg-white/95 px-4 py-3 shadow-[0_14px_35px_rgba(51,65,85,0.12)] backdrop-blur-md sm:-left-5 sm:top-[34%]">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e5f5f2] to-[#d2eee8] text-[#389c8e] shadow-inner">
          <Zap size={22} className="drop-shadow-sm fill-[#389c8e]/20" />
        </div>
        <div>
          <div className="flex items-center gap-1 text-[13px] font-bold text-[#334155]">
            Express Delivery
            <Sparkles size={13} className="text-[#f4c95d]" fill="currentColor" />
          </div>
          <div className="text-[11px] font-semibold text-slate-400">
            Instant Door-to-Door
          </div>
        </div>
      </div>

      {/* Floating Card 2: Top-Right "Delivery Partner" */}
      <div className="absolute -right-2 top-6 z-20 flex animate-float-slow items-center gap-3 rounded-2xl border border-slate-100/90 bg-white/95 px-4 py-2.5 shadow-[0_14px_35px_rgba(51,65,85,0.12)] backdrop-blur-md sm:right-2 sm:top-10">
        <div className="relative">
          <img
            src="/driver-avatar.png"
            alt="Bessie Cooper"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-[#5bbdb9]"
          />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#389c8e]" />
        </div>
        <div>
          <div className="text-[13px] font-bold text-[#334155]">
            Bessie Cooper
          </div>
          <div className="flex items-center gap-1 text-[11px] font-semibold text-[#389c8e]">
            <Award size={13} /> Verified Driver
          </div>
        </div>
      </div>
    </div>
  );
}
