import { PackageCheck } from 'lucide-react';
import type { View } from '../../types';

interface CtaSectionProps {
  go: (view: View) => void;
}

export function CtaSection({ go }: CtaSectionProps) {
  return (
    <section id="ready-to-move" className="px-5 pb-6 lg:px-8 scroll-mt-20">
      <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[32px] bg-[#5bbdb9] px-7 py-14 text-center sm:px-12 sm:py-16">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
        <div className="absolute -bottom-28 -left-12 h-64 w-64 rounded-full border-[35px] border-white/10" />
        <div className="relative">
          <div className="mx-auto mb-5 w-fit rounded-full bg-white/20 p-3 text-white">
            <PackageCheck size={22} />
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.055em] text-white sm:text-5xl">
            Ready to move your goods?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-white/80">
            Get reliable transportation whenever and wherever you need it.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#334155] px-6 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#334155]"
            >
              Get started
            </a>
            <button
              onClick={() => go('contact')}
              className="rounded-full border border-white/40 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
