import { Link } from 'react-router-dom';
import type { View } from '../types';

interface TermsConditionsPartnerProps {
  go?: (view: View) => void;
}

export function TermsConditionsPartner({ go: _go }: TermsConditionsPartnerProps) {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Header Banner */}
      <section className="relative bg-[#334155] px-5 pt-32 pb-24 md:pt-40 md:pb-28 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
            Terms &amp; Conditions (Partner)
          </h1>
        </div>
      </section>

      {/* Main Content Floating Card */}
      <section className="relative z-10 px-5 pb-20 lg:px-8 -mt-12 md:-mt-16">
        <div className="mx-auto max-w-[960px]">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 md:p-14 shadow-[0_15px_45px_rgba(51,65,85,0.08)] space-y-12 text-[15px] sm:text-[16px] leading-relaxed text-slate-700">

            {/* Quick Switcher Tab / Notice */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div className="text-xs sm:text-sm text-slate-500">
                Looking for Customer / User Terms?{' '}
                <Link
                  to="/terms-conditions"
                  className="font-semibold text-[#389c8e] hover:underline"
                >
                  View Terms &amp; Conditions (User) &rarr;
                </Link>
              </div>
            </div>

            {/* 1. Acceptance and Scope */}
            <div className="space-y-4 rounded-2xl bg-slate-50/80 p-5 sm:p-6 border border-slate-200/90">
              <div className="inline-block rounded-full bg-[#389c8e]/15 px-3.5 py-1 text-xs font-bold text-[#20695f]">
                1. Acceptance and Scope
              </div>
              <p>
                These Driver / Delivery Partner / Service Partner Terms &amp; Conditions (&ldquo;<strong className="font-semibold text-slate-900">Partner Terms</strong>&rdquo;) govern registration, access to and use of the Parcer driver/delivery-partner application and the performance of delivery services through Parcer. The registered person is referred to as the &ldquo;<strong className="font-semibold text-slate-900">Service Partner</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">Partner</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">Driver</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">Rider</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">you</strong>&rdquo; or &ldquo;<strong className="font-semibold text-slate-900">your</strong>&rdquo;. By registering, completing onboarding, clicking &ldquo;I Agree&rdquo;, accepting an order, going online, or otherwise using the Partner Platform, you agree to these Partner Terms, the{' '}
                <Link to="/privacy-policy" className="font-semibold text-[#389c8e] hover:underline">
                  Parcer Privacy Policy
                </Link>
                , applicable operational policies, payout/commission rules, safety policies and booking-specific instructions.
              </p>
              <p>
                These Terms are intended for independent delivery/service partners. They do not create an employment relationship unless a separate written agreement expressly provides otherwise. Nothing in these Terms removes any non-waivable statutory right or obligation.
              </p>
              <p className="font-semibold text-rose-700 bg-rose-50/80 p-3.5 rounded-xl border border-rose-200 text-sm sm:text-[15px]">
                If you do not accept any of these terms and conditions please do not use this platform or avail any of the services being provided therein. Your acceptance to these terms and conditions shall operate as a binding agreement between you and the Company in respect of the services of the platform. If you do not agree to the aforesaid paragraph, please do not proceed further on this Platform.
              </p>
            </div>

            {/* 2. Definitions */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                2. Definitions
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mt-3">
                <table className="min-w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-100/90 text-slate-900 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6 w-1/3">Term</th>
                      <th className="py-3.5 px-4 sm:px-6">Meaning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">Partner</td>
                      <td className="py-3.5 px-4 sm:px-6">A person approved by Parcer to provide delivery/transport services through the Platform.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">User / Customer</td>
                      <td className="py-3.5 px-4 sm:px-6">A person or business requesting delivery of Goods through Parcer.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">Booking / Order</td>
                      <td className="py-3.5 px-4 sm:px-6">A delivery request made by a User and offered or assigned to a Partner.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">Goods</td>
                      <td className="py-3.5 px-4 sm:px-6">Eligible parcel, package or items accepted for transportation.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">Partner Wallet</td>
                      <td className="py-3.5 px-4 sm:px-6">The in-app balance/earnings ledger used to record eligible Partner earnings, adjustments and other amounts.</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">Platform</td>
                      <td className="py-3.5 px-4 sm:px-6">Parcer applications, websites, dashboards and related systems made available to Partners.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* PART A: General Terms And Conditions Service Partners */}
            <div className="space-y-10 border-t-2 border-slate-100 pt-6">
              <div className="border-l-4 border-[#389c8e] pl-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#389c8e]">Part A</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  General Terms And Conditions Service Partners
                </h2>
              </div>

              {/* General Terms Sub-sections */}
              <div className="space-y-6 rounded-2xl bg-slate-50/50 p-5 sm:p-7 border border-slate-200">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                  General Terms
                </h3>

                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900">License to Access and Use the Parcer Platform</h4>
                  <p className="text-slate-700">
                    Parcer grants you a limited, non-exclusive, non-transferable, revocable license to use the Platform solely for providing goods transportation services, conditional on compliance with these Terms, Privacy Policy, and applicable policies. You may access the Platform only on supported devices and must install required updates. Copying, modifying, reverse engineering, or misusing the Platform is prohibited.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-200/60 pt-4">
                  <h4 className="font-bold text-slate-900">Service Partner Account Creation and Responsibilities</h4>
                  <p className="text-slate-700">
                    To use the Platform, you must register by providing accurate information, including name, contact details, identification, vehicle details, and required licenses. Parcer may verify this information. False or inaccurate details may lead to account suspension or termination. You are responsible for all account activity and must maintain login credential confidentiality.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-200/60 pt-4">
                  <h4 className="font-bold text-slate-900">Confidentiality and Data Privacy Obligations</h4>
                  <p className="text-slate-700">
                    You consent to Parcer collecting, using, storing, and processing your personal and operational data (e.g., name, contact, location, vehicle details, trip history) as per the{' '}
                    <Link to="/privacy-policy" className="font-semibold text-[#389c8e] hover:underline">
                      Privacy Policy
                    </Link>
                    . Parcer may use third-party analytics tools for performance, fraud detection, and service optimization. You must not disclose confidential Platform information (e.g., user data, pricing, operations) unless required by law.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-200/60 pt-4">
                  <h4 className="font-bold text-slate-900">No Sharing of Account or Credentials</h4>
                  <p className="text-slate-700">
                    Your account is personal and non-transferable. Sharing or allowing others to use your account is prohibited and may lead to suspension or legal action. You must report unauthorized account use to Parcer immediately, or you will be liable for any misuse.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-200/60 pt-4">
                  <h4 className="font-bold text-slate-900">Compliance with Applicable Laws</h4>
                  <p className="text-slate-700">
                    You must comply with all local, state, and central laws, including those governing transport, licensing, safety, and data protection. You are responsible for maintaining valid vehicle documentation, licenses, permits, and insurance. Parcer is not liable for your legal violations.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-200/60 pt-4">
                  <h4 className="font-bold text-slate-900">Electronic Communication Consent</h4>
                  <p className="text-slate-700">
                    You consent to receive communications from Parcer via email, SMS, calls, push notifications, or in-app alerts for transactional, service-related, or promotional purposes. You cannot opt out of essential service communications while registered.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-200/60 pt-4">
                  <h4 className="font-bold text-slate-900">Limited Platform Access and Proprietary Rights</h4>
                  <p className="text-slate-700">
                    Parcer owns all rights to the Platform, including content, designs, software, and branding. Your use does not grant intellectual property rights. Misuse or unauthorized commercial exploitation of the Platform may result in legal action.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-200/60 pt-4">
                  <h4 className="font-bold text-slate-900">Automatic Availability Activation</h4>
                  <p className="text-slate-700">
                    To enhance service efficiency and help Service Partners receive more booking opportunities, Parcer may, at its discretion, mark a Service Partner’s account as “Online” once per day through automated systems.
                  </p>
                  <p className="text-slate-700">
                    Service Partners retain full control over their availability and may switch their status to “Offline” at any time within the application.
                  </p>
                  <p className="text-slate-700">
                    If a Service Partner does not wish to be included in this automated availability feature, they may opt out by notifying Parcer through in-app support or other official communication channels.
                  </p>
                  <p className="text-slate-700 font-medium">
                    This feature does not affect the Service Partner’s independence, earnings, or contractual relationship with Parcer.
                  </p>
                </div>
              </div>

              {/* 2. Parcer Platform and Partner Relationship */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. Parcer Platform and Partner Relationship
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Parcer operates a technology platform that facilitates connections between Users and available delivery Partners. Parcer may provide order allocation, routing, tracking, payment collection, customer support and settlement functions.</li>
                  <li>Unless a separate written agreement states otherwise, the Partner is responsible for performing accepted services lawfully and professionally.</li>
                  <li>Partner earnings, commissions, incentives, fees and settlement rules are governed by the applicable commercial schedule and information shown in the Partner app.</li>
                  <li>The Partner must not represent that they are an employee, legal agent or authorized representative of Parcer except as expressly permitted.</li>
                  <li>The Partner may choose when to go online and, subject to law and Platform rules, whether to accept an offered booking.</li>
                  <li>After acceptance, the Partner is expected to complete the booking unless a legitimate safety, legal, operational or other permitted reason prevents completion.</li>
                </ul>
              </section>

              {/* 3. Eligibility and Onboarding */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Eligibility and Onboarding
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>You must meet the minimum legal age and eligibility requirements applicable to the vehicle and service.</li>
                  <li>Provide accurate identity, address, mobile, bank/payment, emergency-contact and other onboarding information.</li>
                  <li>Complete KYC, background, vehicle and document checks required by Parcer.</li>
                  <li>Keep all submitted information and documents current and valid.</li>
                  <li>Do not register or operate another person's Partner account.</li>
                  <li>Promptly report expired, cancelled or invalid documents.</li>
                </ul>
              </section>

              {/* 4. Required Documents and Legal Compliance */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Required Documents and Legal Compliance
                </h3>
                <p className="text-slate-700">
                  The Partner must maintain all documents, permits, approvals and authorizations required for the vehicle and services performed:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Valid driving licence appropriate for the vehicle class and use.</li>
                  <li>Valid RC and commercial/goods-carriage authorization where legally required.</li>
                  <li>Valid motor vehicle insurance and legally required third-party/commercial coverage.</li>
                  <li>PUC, fitness certificate, permit, tax receipt and other applicable transport documents.</li>
                  <li>Identity/KYC and verified bank documents requested by Parcer.</li>
                  <li>Any local, municipal, state or national approvals required for the service.</li>
                </ul>
              </section>

              {/* 5. Vehicle Eligibility, Safety and Maintenance */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  5. Vehicle Eligibility, Safety and Maintenance
                </h3>
                <p className="text-slate-700">
                  As a registered service partners on the Parcer platform, you agree to comply with the following vehicle usage guidelines:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>You must own or have legal authorization to operate the vehicle used for deliveries and ensure it is not restricted from commercial use. Assigning or renting the vehicle for Platform use without Parcer’s approval is prohibited.</li>
                  <li>Use only a vehicle approved for the Partner account and relevant service category.</li>
                  <li>The Partner shall hold a valid driving license and all necessary permits.</li>
                  <li>Keep the vehicle roadworthy, legally registered and suitable for the Goods and route.</li>
                  <li>Service Partners must maintain vehicles and equipment to ensure safety, legality, and operational readiness. Non-compliance may result in penalties or deactivation.</li>
                  <li>Perform reasonable pre-trip checks including brakes, tyres, lights, horn, mirrors and visible condition.</li>
                  <li>Partners must maintain respectful and courteous behaviour toward customer and other road users, and ensure the vehicle is kept clean, operational, and presentable at all times.</li>
                  <li>You must not consume or possess alcohol, narcotics, or illegal substances during service hours.</li>
                </ul>

                <div className="rounded-2xl bg-amber-50/60 p-5 border border-amber-200 space-y-3 mt-4">
                  <h4 className="font-bold text-amber-900">Insurance</h4>
                  <p className="text-sm sm:text-[15px] text-slate-700">
                    All vehicles operating on the Parcer Platform must be covered by valid and active third-party motor insurance, as required under applicable law. It is the sole responsibility of the Pilot/Partner to maintain up-to-date insurance coverage and provide proof of such insurance to the Company whenever requested.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200 space-y-3 mt-3">
                  <h4 className="font-bold text-slate-900">Limitations of Parcer’s Liability</h4>
                  <p className="text-sm sm:text-[15px] text-slate-700">
                    Parcer shall not be held liable for any personal injury, loss, accidental or property damage resulting from the Pilot/Partner’s conduct, negligence, or non-compliance with applicable laws and Parcer’s policies. Any loss of income or earnings caused by temporary suspension or permanent account deactivation due to investigations, accidents, or policy violations.
                  </p>
                  <p className="text-sm sm:text-[15px] text-slate-700">
                    To the maximum extent permitted by applicable law, under no circumstances shall Parcer, its affiliates, directors, officers, employees, agents, licensors, or subcontractors be liable to the user or passenger or any third party for any direct, indirect, incidental, special, exemplary, punitive, or consequential damages, including but not limited to loss of profits, loss of business, loss of data, business interruption, or reputational harm, arising out of or in connection with this Agreement or the use or inability to use the services, even if advised of the possibility of such damages.
                  </p>
                </div>
              </section>

              {/* 6. Vehicle Categories and Capacity */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  6. Vehicle Categories and Capacity
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Parcer may support two-wheelers initially and, as introduced, three-wheelers, mini-trucks/tempos and other suitable goods vehicles.</li>
                  <li>Accept only bookings compatible with the registered vehicle's capacity and category.</li>
                  <li>Do not overload or carry Goods exceeding permitted dimensions, weight or safe handling limits.</li>
                  <li>Do not attempt to complete a booking with an unsuitable vehicle.</li>
                  <li>Parcer may change or restrict vehicle categories and eligibility based on operational or legal requirements.</li>
                </ul>
              </section>

              {/* 7. Suspension, Deactivation and Termination */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  7. Suspension, Deactivation and Termination
                </h3>
                <p className="text-slate-700">
                  Parcer may suspend, restrict or deactivate an account where reasonably necessary to protect Users, Partners, the Platform or the public, including for:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                  {[
                    'Invalid/expired documents or failed verification',
                    'Unsafe or reckless driving',
                    'Fraud, theft, cash/wallet manipulation or falsification',
                    'GPS/Platform manipulation',
                    'Unauthorized account sharing',
                    'Prohibited-goods violations',
                    'Serious substantiated complaints, harassment or violence',
                    'Repeated abandonment/cancellation of accepted bookings',
                    'Material breach of these Terms or applicable law',
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3 text-xs sm:text-sm text-slate-700 border border-slate-100">
                      <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
                <p className="pt-2 text-slate-700">
                  Where practicable, Parcer may provide notice and an opportunity to explain or appeal. Immediate suspension may be used for safety, fraud prevention or legal compliance. Termination does not extinguish legitimate reconciliation, confidentiality, indemnity, liability or other surviving obligations.
                </p>

                <div className="rounded-2xl bg-rose-50/70 p-5 border border-rose-200/80 space-y-2 mt-3">
                  <h4 className="font-bold text-rose-950">Upon deactivation/suspension:</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-[15px] text-rose-900">
                    <li>All trips are cancelled without compensation</li>
                    <li>Platform access is revoked</li>
                    <li>Pending dues are withheld until review</li>
                    <li>You remain liable for prior violations</li>
                    <li>Use of Parcer branding post-termination is prohibited</li>
                    <li>Parcer property must be returned</li>
                  </ul>
                </div>
              </section>

              {/* 8. Limitation of Platform Liability */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  8. Limitation of Platform Liability
                </h3>
                <p className="text-slate-700">
                  To the maximum extent permitted by law, Parcer will not be liable for indirect, incidental, special or consequential losses arising from Platform use or events outside Parcer's reasonable control. Any liability cap must be subject to mandatory law and any separate written commercial agreement. No clause excludes liability that cannot legally be excluded.
                </p>
              </section>

              {/* 9. Customer Conduct and Partner Safety */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  9. Customer Conduct and Partner Safety
                </h3>
                <p className="text-slate-700">All Partners must:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Maintain respectful and non-discriminatory conduct.</li>
                  <li>Not threaten, abuse, harass, intimidate or assault Users or third parties.</li>
                  <li>Not make unwanted sexual comments, advances or requests.</li>
                  <li>Not operate while impaired by alcohol or intoxicating substances.</li>
                  <li>Not use a phone while driving in a manner prohibited by law.</li>
                  <li>If a situation becomes unsafe, move to a safe location and contact emergency services/Parcer support as appropriate.</li>
                  <li>Report serious safety incidents, threats or criminal conduct promptly.</li>
                </ul>
              </section>

              {/* 10. Partner App and Account Security */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  10. Partner App and Account Security
                </h3>
                <p className="text-slate-700">All Partners must:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Use only official Parcer applications and supported devices.</li>
                  <li>Keep passwords, PINs and OTPs confidential.</li>
                  <li>Not allow another person to use your Partner account.</li>
                  <li>Not manipulate GPS, mock locations, device identifiers, order status or delivery events.</li>
                  <li>Not use bots, modified applications or unauthorized technical methods.</li>
                  <li>Report account compromise or unauthorized activity immediately.</li>
                </ul>
              </section>

              {/* 11. Pickup Procedure */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  11. Pickup Procedure
                </h3>
                <p className="text-slate-700">All Partners agree to follow proper pickup procedure:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Proceed safely and lawfully to the pickup location.</li>
                  <li>Mark/confirm arrival through the Partner app when within required GPS proximity.</li>
                  <li>Complete applicable OTP or verification steps.</li>
                  <li>Check that Goods reasonably correspond to booking information and can be safely transported.</li>
                  <li>Refuse prohibited, dangerous, leaking, grossly misdeclared, unsafe, overweight or unsuitable Goods.</li>
                  <li>Secure Goods before starting the trip.</li>
                  <li>Use the in-app exception/support process when a pickup problem cannot reasonably be resolved.</li>
                </ul>
              </section>

              {/* 12. Prohibited Goods and Refusal Rights */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  12. Prohibited Goods and Refusal Rights
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>The Partner must not knowingly transport Goods prohibited by Parcer policy or applicable law, including explosives, weapons, ammunition, narcotic/contraband items, dangerous chemicals, hazardous materials, illegal/stolen/counterfeit goods and unsafe fuels.</li>
                  <li>Do not unnecessarily open or inspect parcels.</li>
                  <li>Do not transport leaking, dangerous or unstable Goods.</li>
                  <li>Report suspected prohibited or unsafe Goods through Partner support.</li>
                  <li>Never conceal or alter Goods information to complete a booking.</li>
                </ul>
              </section>

              {/* 13. Delivery, Recipient Verification and Proof of Delivery */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  13. Delivery, Recipient Verification and Proof of Delivery
                </h3>
                <p className="text-slate-700">The Partner must:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Follow the destination and instructions shown in the Platform.</li>
                  <li>Use OTP, recipient confirmation, photograph, signature, GPS event or other required proof of delivery.</li>
                  <li>Never falsely mark an order picked up, delivered, cancelled or completed.</li>
                  <li>Do not hand Goods to an unauthorized person where verification is required.</li>
                  <li>If recipient is unavailable or refuses delivery, follow the failed-delivery/return process.</li>
                  <li>Never retain, sell, open, use, consume or dispose of User Goods except as expressly instructed or permitted by law.</li>
                </ul>
              </section>

              {/* 14. Platform Conduct and Operational Compliance */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  14. Platform Conduct and Operational Compliance
                </h3>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Vehicle Breakdown Protocol</h4>
                    <p className="text-slate-700 text-sm sm:text-[15px]">
                      In the event of a vehicle breakdown, inform the Parcer Support Team immediately via the in-app Help section or emergency helpline. Service Partners are expected to assist in ensuring a smooth resolution. Consistent or deliberate negligence in maintaining vehicle condition may lead to penalties or deactivation.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">Prohibition on Taking Business Offline</h4>
                    <p className="text-slate-700 text-sm sm:text-[15px]">
                      Engaging with customers outside the Parcer platform for direct business transactions is strictly prohibited. Violators may face monetary penalties, suspension, or permanent deactivation.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5 border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2">App Functionality and Malfunction Protocol</h4>
                    <p className="text-slate-700 text-sm sm:text-[15px]">
                      Service Partners must use the most updated version of the Parcer Partner Application on a compatible smartphone. Report any app malfunctions promptly through in-app support or the Parcer helpline. Unauthorized manipulation or exploiting technical glitches is prohibited and will result in immediate action.
                    </p>
                  </div>
                </div>
              </section>

              {/* 15. Cash Collection and Payment Handling */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  15. Cash Collection and Payment Handling
                </h3>
                <p className="text-slate-700">The Partner must:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Collect only the amount displayed or authorized by Parcer.</li>
                  <li>Do not demand unauthorized fees, fuel charges, tips or other amounts.</li>
                  <li>Do not falsely mark cash as collected or unpaid.</li>
                  <li>If the User disputes the amount, use the support process rather than confrontation.</li>
                  <li>Account for and settle collected cash according to Parcer's settlement rules.</li>
                </ul>
              </section>

              {/* 16. Partner Earnings, Commission and Wallet */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  16. Partner Earnings, Commission and Wallet
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Eligible earnings may be credited to the Partner Wallet/earnings ledger after completion and verification.</li>
                  <li>Parcer may deduct its agreed platform/service commission and other lawful charges.</li>
                  <li>The exact commission, fees, incentives and payout rules will be shown in the Partner app or commercial policy.</li>
                  <li>The Wallet may record gross earnings, commission, adjustments, cash reconciliation and net payable amounts.</li>
                  <li>Earnings may be held or adjusted for legitimate cancellation, dispute, chargeback, fraud or accounting review.</li>
                  <li>Parcer may correct amounts credited in error.</li>
                  <li>Do not manipulate trips, fares, cash, wallet balances or incentives.</li>
                </ul>
              </section>

              {/* 17. Withdrawal and Bank Settlement */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  17. Withdrawal and Bank Settlement
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Where Parcer permits withdrawal of eligible Partner Wallet balances, withdrawals will be processed to the verified bank account or other permitted account.</li>
                  <li>Bank details must be accurate and verified.</li>
                  <li>Minimum withdrawal amount, settlement cycle, limits and charges will be displayed in the Partner app or payout policy.</li>
                  <li>Parcer may delay a withdrawal for fraud review, chargeback, reconciliation, legal compliance or verification.</li>
                  <li>Parcer is not responsible for delays caused by incorrect bank details or bank/payment-network processing, except as required by law.</li>
                  <li>Payouts can be requested anytime, processed within 24–48 hours, subject to banking timelines.</li>
                </ul>
              </section>

              {/* 18. Incentives, Bonuses and Promotions */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  18. Incentives, Bonuses and Promotions
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Incentives and bonuses are subject to their published conditions.</li>
                  <li>Parcer may withhold or reverse benefits obtained through fraud, duplicate accounts, artificial trips, collusion or GPS manipulation.</li>
                  <li>Promotional earnings do not create a continuing entitlement after the promotion ends.</li>
                </ul>
              </section>

              {/* 19. Confidentiality and User Information */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  19. Confidentiality and User Information
                </h3>
                <p className="text-slate-700">
                  The Partner may receive User names, phone numbers, addresses, pickup/drop locations, order details and delivery instructions. This information is confidential and may be used only to perform the relevant service.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Do not save, sell, publish or share User information for unrelated purposes.</li>
                  <li>Do not contact Users after completion except for legitimate service/support/lawful purposes.</li>
                  <li>Do not use User data for personal marketing or solicitation.</li>
                  <li>Protect screenshots, call records, addresses and delivery information from unauthorized access.</li>
                </ul>
              </section>

              {/* 20. Ratings, Complaints and Performance */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  20. Ratings, Complaints and Performance
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Users may provide ratings or complaints. Parcer may review these together with trip records, support interactions and other evidence.</li>
                  <li>A low rating alone does not necessarily establish misconduct.</li>
                  <li>Repeated substantiated complaints, unsafe behavior, fraud or poor compliance may lead to coaching, warnings, restrictions or deactivation.</li>
                  <li>Partners may raise disputes and provide evidence through support.</li>
                </ul>
              </section>

              {/* 21. Account Closure */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  21. Account Closure
                </h3>
                <p className="text-slate-700">
                  A Partner may request account closure through the designated support process. Closure may require completion of active bookings, cash reconciliation, pending disputes and settlement. Eligible remaining balances will be handled under the payout/Wallet policy and applicable law.
                </p>
              </section>

              {/* 22. Taxes and Statutory Deductions */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  22. Taxes and Statutory Deductions
                </h3>
                <p className="text-slate-700">
                  The Partner is responsible for tax compliance applicable to their earnings/business, including GST and income-tax obligations where applicable. Parcer may make TDS or other statutory deductions where required and provide applicable statements/certificates.
                </p>
              </section>

              {/* 23. Indemnity */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  23. Indemnity
                </h3>
                <p className="text-slate-700">
                  To the extent permitted by law, the Partner agrees to indemnify and hold harmless Parcer, its affiliates, directors, officers, employees, Users and service providers against claims, losses, damages, fines, penalties and reasonable expenses arising from the Partner's breach, unlawful conduct, negligent operation, prohibited Goods, unauthorized collection, misuse of the Platform or violation of third-party rights. Mandatory statutory protections remain unaffected.
                </p>
              </section>

              {/* 24. Force Majeure */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  24. Force Majeure
                </h3>
                <p className="text-slate-700">
                  Parcer will not be responsible for Platform delay/unavailability caused by events beyond reasonable control, including severe weather, floods, earthquakes, fire, civil disturbance, government restrictions, road closures, telecommunications/power failures, major cyber incidents or other force majeure events.
                </p>
              </section>

              {/* 25. Intellectual Property and Platform License */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  25. Intellectual Property and Platform License
                </h3>
                <p className="text-slate-700">
                  Parcer owns or licenses its software, trademarks, branding and interface. The Partner receives a limited, revocable, non-exclusive right to use the Partner app for authorized services.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Do not copy, reverse engineer, modify, scrape or interfere with the Platform except as permitted by law.</li>
                  <li>Do not use Parcer branding outside approved materials.</li>
                  <li>Do not represent unofficial websites/social accounts as official Parcer channels.</li>
                </ul>
              </section>

              {/* 26. Dispute Resolution and Governing Law */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  26. Dispute Resolution and Governing Law
                </h3>
                <p className="text-slate-700">
                  These Partner Terms are governed by the laws of India. Partners should first use Parcer support/grievance procedures. Subject to mandatory statutory rights, disputes will be subject to the competent courts at Ahmedabad, Gujarat, India. Nothing prevents a Partner from exercising a non-waivable statutory remedy.
                </p>
              </section>

              {/* 27. Changes to These Terms */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  27. Changes to These Terms
                </h3>
                <p className="text-slate-700">
                  Parcer may update these Terms, payout policies and safety requirements to reflect changes in services, technology, law or operations. Material changes will be communicated through the Platform or another appropriate method where required. Continued use after the effective date constitutes acceptance to the extent permitted by law.
                </p>
              </section>

              {/* 28. General Provisions */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  28. General Provisions
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>If any provision is invalid or unenforceable, the remainder continues to the extent permitted by law.</li>
                  <li>Failure to enforce a provision immediately does not waive the right to enforce it later.</li>
                  <li>These Terms, Privacy Policy, payout/commission policy, safety policies and incorporated Partner policies form the agreement governing Platform use.</li>
                  <li>The Partner may not assign this agreement or delegate accepted bookings without written authorization.</li>
                  <li>Confidentiality, reconciliation, indemnity, liability and dispute provisions intended to survive will continue after termination.</li>
                </ul>
              </section>

              {/* 29. Partner Acknowledgement */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  29. Partner Acknowledgement
                </h3>
                <p className="font-medium text-slate-800">
                  By selecting &ldquo;I Agree&rdquo;, completing onboarding, going online, accepting a booking or using the Partner Platform, you confirm that:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>You have read and understood these Terms;</li>
                  <li>Your information and documents are accurate and current;</li>
                  <li>You have the legal right and required documents to operate the registered vehicle;</li>
                  <li>You will follow traffic, safety, transport, tax and other laws;</li>
                  <li>You will not knowingly transport prohibited or unsafe Goods;</li>
                  <li>You will handle Goods, cash and User information responsibly;</li>
                  <li>You understand the commission, earnings, Wallet and withdrawal rules;</li>
                  <li>You will follow Parcer operational and support procedures.</li>
                </ul>
              </section>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
