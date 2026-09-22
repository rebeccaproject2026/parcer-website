import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Clock, Headphones, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import type { View } from '../types';
import { Subpage } from '../components/layout/Subpage';
import { HighlightsTicker } from '../components/common/HighlightsTicker';

interface ContactProps {
  go: (view: View) => void;
}

const reasons = [
  '📦 Book a Vehicle / Move Goods',
  '🚚 Join as Parcer Partner',
  // '🏢 Business & Enterprise Fleet',
  // '💬 General Query & Support',
];

export function Contact({ go }: ContactProps) {
  const [selectedReason, setSelectedReason] = useState(reasons[0]);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <Subpage
      go={go}
      bgType="contact"
      eyebrow="We Are Here 24/7"
      title="Let’s get moving."
      text="Have a delivery need, enterprise shipment, or want to register your commercial vehicle? Reach out and our local support team will assist you immediately."
    >
      <HighlightsTicker />

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-[1060px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Contact Details Box */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="relative overflow-hidden rounded-[28px] bg-[#334155] p-8 text-white shadow-[0_15px_40px_rgba(51,65,85,0.15)] border border-slate-700/50">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold text-[#8ed8d0] border border-white/10">
                  <Headphones size={13} /> Immediate Assistance
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight">Talk to the Parcer Team</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Direct dispatch helpline & support across all operating cities.
                </p>

                <div className="mt-7 space-y-4 text-sm">
                  {/* Customer Support */}
                  <div className="flex items-center gap-3.5 rounded-2xl bg-white/[0.05] p-3 border border-white/5 transition hover:bg-white/[0.08]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#389c8e]/20 text-[#8ed8d0] border border-[#389c8e]/30">
                      <Phone size={17} />
                    </div>
                    <div>
                      <div className="text-[11px] text-white/50 font-medium">Customer Support</div>
                      <a href="tel:9316535015" className="font-bold text-white hover:text-[#8ed8d0] transition text-sm">
                        +91 93165 35015
                      </a>
                    </div>
                  </div>

                  {/* Email Support */}
                  <div className="flex items-center gap-3.5 rounded-2xl bg-white/[0.05] p-3 border border-white/5 transition hover:bg-white/[0.08]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#389c8e]/20 text-[#8ed8d0] border border-[#389c8e]/30">
                      <Mail size={17} />
                    </div>
                    <div>
                      <div className="text-[11px] text-white/50 font-medium">Email Support</div>
                      <a href="mailto:Support@theparser.com" className="font-bold text-white hover:text-[#8ed8d0] transition text-sm">
                        Support@theparser.com
                      </a>
                    </div>
                  </div>

                  {/* Head Office Address */}
                  <div className="flex items-start gap-3.5 rounded-2xl bg-white/[0.05] p-3 border border-white/5 transition hover:bg-white/[0.08]">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#389c8e]/20 text-[#8ed8d0] border border-[#389c8e]/30 mt-0.5">
                      <MapPin size={17} />
                    </div>
                    <div>
                      <div className="text-[11px] text-white/50 font-medium">Head Office</div>
                      <div className="font-semibold text-white/95 leading-snug text-xs sm:text-[13px] mt-0.5">
                        607, The Plutus, Opp. Ashka Hospital, Sargasan, Gandhinagar, Gujarat 382419
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Driver Partner Onboarding Note */}
            <div className="rounded-[24px] border border-[#bce7e1] bg-gradient-to-br from-[#f2faf8] to-[#e8f6f3] p-6 text-[#334155] shadow-sm">
              <div className="flex items-center gap-2.5 font-bold text-sm text-[#389c8e]">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#dff2ee] text-[#389c8e]">
                  <Truck size={15} />
                </div>
                <span>Parcer Partner Direct Onboarding</span>
              </div>
              <p className="mt-2.5 text-xs leading-5 text-slate-600 pl-9.5">
                Own a 2 Wheeler, 3 Wheeler or Mini Truck? Attach your vehicle today and start earning.
              </p>
            </div>
          </div>

          {/* Right Form Card */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-slate-100 bg-white p-7 shadow-[0_15px_45px_rgba(51,65,85,0.06)] sm:p-9"
          >
            {sent ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e1f3ef] text-[#389c8e]">
                  <Check size={32} />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-[#334155]">
                  Inquiry Received!
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  Thank you for reaching out. Our dispatch / support executive will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full border border-slate-200 px-6 py-2.5 text-xs font-bold text-[#389c8e] hover:border-[#389c8e] transition"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="text-xs font-bold text-slate-600 mb-2">Select Purpose</div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {reasons.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setSelectedReason(r)}
                        className={`rounded-xl px-3.5 py-2.5 text-left text-xs font-semibold transition-all duration-200 ${selectedReason === r
                          ? 'bg-[#389c8e] text-white shadow-sm scale-[1.02]'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                          }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full Name" placeholder="Your name" />
                  <Field label="Mobile Number" placeholder="+91 93165 35015" />
                  <Field label="Email Address" placeholder="Support@theparser.com" type="email" />
                  <Field label="City / Location" placeholder="e.g. Surat, Bengaluru" />
                </div>

                <label className="mt-4 block text-xs font-bold text-slate-600">
                  Message / Shipment Details
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what you want to transport, preferred vehicle, or your vehicle details..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-[#5bbdb9] focus:ring-4 focus:ring-[#dff2ee]"
                  />
                </label>

                <button
                  type="submit"
                  className="btn-shimmer mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#389c8e] px-5 py-4 text-sm font-bold text-white shadow-[0_4px_14px_rgba(56,156,142,0.3)] transition hover:bg-[#2e8276] hover:shadow-[0_6px_22px_rgba(56,156,142,0.45)]"
                >
                  Send Inquiry Now <ArrowRight size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </Subpage>
  );
}

function Field({
  label,
  placeholder,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block text-xs font-bold text-slate-600">
      {label}
      <input
        required
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-normal outline-none transition focus:border-[#5bbdb9] focus:ring-4 focus:ring-[#dff2ee]"
      />
    </label>
  );
}
