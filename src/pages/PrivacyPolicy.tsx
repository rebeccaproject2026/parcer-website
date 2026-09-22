import type { View } from '../types';

interface PrivacyPolicyProps {
  go: (view: View) => void;
}

export function PrivacyPolicy({ go }: PrivacyPolicyProps) {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Blue / Dark Slate Header Banner */}
      <section className="relative bg-[#334155] px-5 pt-32 pb-24 md:pt-40 md:pb-28 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Main Content Floating Card */}
      <section className="relative z-10 px-5 pb-20 lg:px-8 -mt-12 md:-mt-16">
        <div className="mx-auto max-w-[960px]">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 md:p-14 shadow-[0_15px_45px_rgba(51,65,85,0.08)]">

            <div className="space-y-6 text-[15px] sm:text-[16px] leading-relaxed text-slate-700">
              <p>
                This privacy policy sets out how Parcer uses and protects any information that you give Parcer when you use this website/mobile application for Customers and Driver Partners.
              </p>

              <p>
                This Privacy Policy (&ldquo;<strong className="font-bold text-slate-900">Policy</strong>&rdquo;) explains how <strong className="font-bold text-slate-900">Tiny Script Soft Tech Pvt. Ltd</strong>, a company incorporated under the laws of India (&ldquo;<strong className="font-bold text-slate-900">Parcer</strong>&rdquo;, &ldquo;<strong className="font-bold text-slate-900">Company</strong>&rdquo;, &ldquo;<strong className="font-bold text-slate-900">we</strong>&rdquo;, &ldquo;<strong className="font-bold text-slate-900">us</strong>&rdquo; or &ldquo;<strong className="font-bold text-slate-900">our</strong>&rdquo;), collects, uses, stores, discloses and otherwise processes personal data when you access or use Parcer&rsquo;s mobile applications, website, web portal, APIs and any other related services (collectively, the &ldquo;<strong className="font-bold text-slate-900">Platform</strong>&rdquo; or &ldquo;<strong className="font-bold text-slate-900">Services</strong>&rdquo;).
              </p>

              <p>
                This Policy applies to customers, consignors, consignees, recipients, drivers, delivery partners, vehicle owners, business users, authorized representatives and other individuals who interact with the Platform (collectively, &ldquo;<strong className="font-bold text-slate-900">you</strong>&rdquo; or &ldquo;<strong className="font-bold text-slate-900">your</strong>&rdquo;).
              </p>

              <p>
                The Policy is intended to be read together with our <strong className="font-bold text-slate-900">Terms &amp; Conditions</strong>, <strong className="font-bold text-slate-900">Driver/Delivery Partner Terms</strong>, <strong className="font-bold text-slate-900">Cancellation and Refund Policy</strong> and any other notices presented to you at the time of collection or use of personal data.
              </p>

              <p>
                By using our services and application, you will be regarded as having read and accepted this Policy. You must not use this platform if you do not accept this Policy.
              </p>

              <p>
                By using our Apps and the Services, you agree and consent to the collection, transfer, use, storage, disclosure and sharing of your information as described and collected by us in accordance with this Policy.
              </p>

              <p className="border-t border-slate-100 pt-5 font-semibold text-slate-800">
                Our Policy may change from time to time without notice. Please review this policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
