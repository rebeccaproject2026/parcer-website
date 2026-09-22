import { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import type { View } from '../../types';
import { driverAppSteps } from '../../data/appGlimpses';
import { PhoneMockup } from './PhoneMockup';

interface HowSectionProps {
  go: (view: View) => void;
}

export function HowSection({ go }: HowSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const spacerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isManualScrolling = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const steps = driverAppSteps;
  const activeStep = steps[activeIndex] || steps[0];

  // Natural scroll listener: dynamically updates activeStep as user scrolls through spacers
  useEffect(() => {
    const handleScroll = () => {
      if (isManualScrolling.current) return;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const stickyTopOffset = 100;
      const scrolledInside = -(rect.top - stickyTopOffset);
      const totalScrollable = rect.height - window.innerHeight;

      if (scrolledInside >= 0 && totalScrollable > 0) {
        const progress = Math.min(
          Math.max(scrolledInside / totalScrollable, 0),
          0.999
        );
        const newIndex = Math.min(
          Math.floor(progress * steps.length),
          steps.length - 1
        );
        setActiveIndex(newIndex);
      } else if (scrolledInside < 0) {
        setActiveIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [steps.length]);

  const handleStepClick = (idx: number) => {
    setActiveIndex(idx);
    isManualScrolling.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      isManualScrolling.current = false;
    }, 850);

    if (sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const stickyTopOffset = 100;
      const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;

      if (totalScrollable > 0) {
        const targetProgress = idx === 0 ? 0 : (idx + 0.3) / steps.length;
        const targetScroll = sectionTop - stickyTopOffset + targetProgress * totalScrollable;
        window.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="bg-gradient-to-b from-[#f8fafc] via-[#f0f9f8] to-[#f8fafc] relative w-full "
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-12 lg:gap-16 relative z-[9] p-5 md:px-8 lg:px-12 mx-auto pt-[60px] xl:pt-[90px] pb-[100px] md:pb-[180px]">
        {/* Left Column: Clean Sticky Phone Preview (Without bulky green border) */}
        <div className="hidden lg:flex sticky top-[100px] 2xl:top-[120px] h-fit justify-center items-center">
          <div className="relative w-[300px] 2xl:w-[330px] transition-all duration-300 ease-in-out">
            {/* Subtle soft backdrop glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#389c8e]/20 via-[#389c8e]/10 to-transparent rounded-[60px] blur-2xl -z-10" />
            <PhoneMockup activeStep={activeStep} tab="customer" />
          </div>
        </div>

        {/* Right Column: Clean, Minimal Image-focused Content */}
        <div className="w-full lg:max-w-[520px]">
          <div className="lg:sticky top-[120px] 2xl:top-[160px] flex flex-col z-[10]">
            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#389c8e] mb-2.5">
              Application Glimpses
            </span>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-8">
              How Parcer Works
            </h2>

            {/* Mobile View Phone Preview (Below lg screens) */}
            <div className="lg:hidden block w-full mb-8">
              <div className="flex justify-center">
                <div className="w-[280px]">
                  <PhoneMockup activeStep={activeStep} tab="customer" />
                </div>
              </div>
            </div>

            {/* Active Step Content (Clean typography, no buttons or heavy cards) */}
            <div
              key={activeStep.id}
              className="relative transition-all duration-300 animate-fadeIn"
            >
              {/* Step Number & Indicator Line */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl sm:text-4xl font-black text-[#389c8e] tracking-tight">
                  {activeStep.number}
                </span>
                <div className="h-[2px] w-12 bg-[#389c8e]/40" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Step {activeIndex + 1} of {steps.length}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-3 leading-snug">
                {activeStep.title}
              </h3>

              {/* Step Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                {activeStep.text}
              </p>

              {/* Minimal Progress Step Indicators (Dots) */}
              <div className="flex items-center gap-2 mt-8">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleStepClick(idx)}
                    aria-label={`Go to step ${idx + 1}`}
                    className="group relative flex items-center justify-center p-2 cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === idx
                        ? 'w-8 bg-[#389c8e] shadow-sm'
                        : 'w-2.5 bg-slate-300 group-hover:bg-[#389c8e]/60 group-hover:w-4'
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Spacer Scroll Track */}
          <div className="hidden lg:block relative mt-[140px]">
            {steps.map((_, index) => (
              <div
                key={index}
                ref={(el) => (spacerRefs.current[index] = el)}
                data-index={index}
                className="h-[300px] lg:h-[360px] w-full pointer-events-none"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

