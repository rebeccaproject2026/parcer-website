import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Mail, Send, Sparkles } from 'lucide-react';
import type { View } from '../../types';

interface NewsletterOverlapProps {
  go: (view: View) => void;
}

export function NewsletterOverlap({ go }: NewsletterOverlapProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="relative z-20 px-5 lg:px-8">
      <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[30px] border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(51,65,85,0.12)] sm:p-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e5f5f2] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#389c8e]">
              <Sparkles size={13} className="text-[#f4c95d]" /> Stay Updated
            </div>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#334155] sm:text-3xl">
              Get city logistics offers & vehicle updates
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Subscribe to get seasonal business discounts, driver incentives, and new service zone launches.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="flex items-center gap-3 rounded-2xl bg-[#e5f5f2] p-4 text-xs font-bold text-[#389c8e]">
                <Check className="h-5 w-5 shrink-0 rounded-full bg-[#389c8e] p-1 text-white" />
                <span>Thank you! You have subscribed for Parcer updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
                <div className="flex w-full items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#389c8e] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#dff2ee]">
                  <Mail size={16} className="text-slate-400 shrink-0" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-transparent text-xs font-medium text-slate-700 placeholder:text-slate-400 focus:outline-none sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#334155] px-6 py-3.5 text-xs font-bold text-white transition hover:bg-[#389c8e]"
                >
                  Subscribe <Send size={13} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
