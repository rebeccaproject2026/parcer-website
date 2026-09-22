import { Sparkles } from 'lucide-react';
import { SectionIntro } from '../common/SectionIntro';

const testimonials: [string, string, string][] = [
  [
    '“Parcer made our daily store transfers feel effortless. We know exactly when stock will arrive.”',
    'Meera Shah',
    'Operations, Nook Market',
  ],
  [
    '“The booking was clear, the driver was professional, and the price was exactly what I expected.”',
    'Rohan Menon',
    'Homeowner, Bengaluru',
  ],
  [
    '“We finally have one dependable way to handle our last-mile deliveries across the city.”',
    'Aisha Kapoor',
    'Founder, Daily Rituals',
  ],
];

export function TestimonialSection() {
  return (
    <section className="bg-[#f7fbfa] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <SectionIntro
          eyebrow="Loved by movers"
          title="What our customers say."
          centered
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map(([quote, name, role]) => (
            <div
              key={name}
              className="rounded-[24px] bg-white p-7 shadow-[0_10px_30px_rgba(51,65,85,0.05)]"
            >
              <div className="mb-6 flex gap-1 text-[#eab84f]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Sparkles key={star} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="min-h-[108px] text-[15px] leading-7 text-slate-600">
                {quote}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dff2ee] text-sm font-bold text-[#389c8e]">
                  {name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#334155]">{name}</div>
                  <div className="text-xs text-slate-400">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
