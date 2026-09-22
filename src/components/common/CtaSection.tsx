import { useState, useRef, useEffect } from 'react';
import { Download, PackageCheck } from 'lucide-react';
import type { View } from '../../types';

interface CtaSectionProps {
  go: (view: View) => void;
}

export function CtaSection({ go }: CtaSectionProps) {
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDownloadOptions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="ready-to-move" className="px-5 pb-6 lg:px-8 scroll-mt-20">
      <div className="relative mx-auto max-w-[1100px] rounded-[32px] bg-[#5bbdb9] px-7 py-14 text-center sm:px-12 sm:py-16">
        {/* Background Decorative Rings */}
        <div className="absolute inset-0 overflow-hidden rounded-[32px] pointer-events-none">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-28 -left-12 h-64 w-64 rounded-full border-[35px] border-white/10" />
        </div>

        <div className="relative z-10">
          <div className="mx-auto mb-5 w-fit rounded-full bg-white/20 p-3 text-white">
            <PackageCheck size={22} />
          </div>
          <h2 className="text-4xl font-bold tracking-[-0.055em] text-white sm:text-5xl">
            Ready to move your goods?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-white/80">
            Get reliable transportation whenever and wherever you need it.
          </p>

          <div className="mt-8 flex flex-col justify-center items-center gap-4 sm:flex-row">
            {/* Download Button with Dropdown Popover */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setShowDownloadOptions((prev) => !prev)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#334155] px-7 py-4 text-sm font-bold text-white shadow-lg transition duration-200 hover:bg-[#243142] hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Download size={17} className="text-[#8ed8d0]" />
                <span>Download App</span>
              </button>

              {/* iOS and Android Options Popup */}
              {showDownloadOptions && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-[270px] sm:w-[290px] rounded-2xl bg-white p-3.5 shadow-[0_20px_50px_rgba(15,23,42,0.35)] border border-slate-100 z-50 text-left">
                  <div className="px-2 py-1 mb-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 text-center">
                    Choose Your Platform
                  </div>

                  <div className="space-y-2">
                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowDownloadOptions(false)}
                      className="flex items-center justify-center rounded-xl p-1 transition hover:bg-slate-50 border border-slate-100 hover:border-slate-200 shadow-sm"
                    >
                      <img
                        src="/app-store.svg"
                        alt="Download on App Store"
                        className="h-11 w-auto object-contain"
                      />
                    </a>

                    <a
                      href="https://play.google.com/store"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setShowDownloadOptions(false)}
                      className="flex items-center justify-center rounded-xl p-1 transition hover:bg-slate-50 border border-slate-100 hover:border-slate-200 shadow-sm"
                    >
                      <img
                        src="/play-store.svg"
                        alt="Get it on Google Play"
                        className="h-11 w-auto object-contain"
                      />
                    </a>
                  </div>

                  {/* Bottom caret arrow */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full -mt-[1px] border-8 border-transparent border-t-white" />
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => go('contact')}
              className="rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10 hover:border-white cursor-pointer"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
