import type { ReactNode } from 'react';
import type { View } from '../../types';

interface SubpageProps {
  eyebrow: string;
  title: string;
  text: string;
  bgType?: string;
  children: ReactNode;
  go?: (view: View) => void;
}

export function Subpage({
  eyebrow,
  title,
  text,
  children,
}: SubpageProps) {
  return (
    <main className="pt-[76px]">
      {/* Sleek Modern Subpage Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f8faf9] via-[#fcfeff] to-white px-5 pt-16 pb-16 lg:pt-20 lg:pb-20 lg:px-8 text-center border-b border-slate-100">
        
        {/* Subtle Modern Dot-Matrix Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(#9dd8cf 1.2px, transparent 1.2px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Ambient Soft Radial Lighting */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[340px] w-[580px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#cbeef8]/35 via-[#dff5f0]/25 to-transparent blur-3xl" />

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-[840px]">
          {/* Eyebrow Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#389c8e] shadow-sm backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#389c8e] animate-pulse" />
            <span>{eyebrow}</span>
          </div>

          {/* Large Clean Title */}
          <h1 className="text-3xl font-extrabold leading-[1.12] tracking-[-0.045em] text-[#334155] sm:text-4xl lg:text-[48px]">
            {title}
          </h1>

          {/* Description Subtext */}
          <p className="mx-auto mt-4 max-w-[620px] text-base leading-8 text-slate-500 sm:text-[17px]">
            {text}
          </p>
        </div>
      </section>

      {children}
    </main>
  );
}
