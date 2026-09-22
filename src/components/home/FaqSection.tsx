import { ChevronDown } from 'lucide-react';
import { faqs } from '../../data/faqs';
import { SectionIntro } from '../common/SectionIntro';

interface FaqSectionProps {
  activeFaq: number | null;
  setActiveFaq: (index: number | null) => void;
}

export function FaqSection({ activeFaq, setActiveFaq }: FaqSectionProps) {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-[900px] gap-12 md:grid-cols-[0.7fr_1.3fr]">
        <SectionIntro
          eyebrow="Need to know"
          title="Questions, answered."
          text="Everything you need to feel confident before your first booking."
        />
        <div>
          {faqs.map(({ question, answer }, index) => (
            <div key={question} className="border-b border-slate-200">
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-bold text-[#334155]"
              >
                <span>{question}</span>
                <ChevronDown
                  size={17}
                  className={`shrink-0 text-[#389c8e] transition-transform ${
                    activeFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  activeFaq === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm leading-6 text-slate-500">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
