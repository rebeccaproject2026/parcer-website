import type { View } from '../types';

interface TermsConditionsProps {
  go: (view: View) => void;
}

export function TermsConditions({ go }: TermsConditionsProps) {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Header Banner */}
      <section className="relative bg-[#334155] px-5 pt-32 pb-24 md:pt-40 md:pb-28 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
            Terms &amp; Conditions
          </h1>
        </div>
      </section>

      {/* Main Content Floating Card */}
      <section className="relative z-10 px-5 pb-20 lg:px-8 -mt-12 md:-mt-16">
        <div className="mx-auto max-w-[960px]">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 md:p-14 shadow-[0_15px_45px_rgba(51,65,85,0.08)] space-y-12 text-[15px] sm:text-[16px] leading-relaxed text-slate-700">

            {/* Preamble / Introduction Box */}
            <div className="space-y-4 rounded-2xl bg-slate-50/80 p-5 sm:p-6 border border-slate-200/90">
              <div className="inline-block rounded-full bg-[#389c8e]/15 px-3.5 py-1 text-xs font-bold text-[#20695f]">
                Customer / User Agreement
              </div>
              <p>
                These Customer / User Terms &amp; Conditions (&ldquo;<strong className="font-semibold text-slate-900">Terms</strong>&rdquo;) govern your access to and use of the Parcer mobile application, website, customer support channels and related services (collectively, the &ldquo;<strong className="font-semibold text-slate-900">Platform</strong>&rdquo;). The Platform is operated by <strong className="font-semibold text-slate-900">TINY SCRIPT SOFT TECH PRIVATE LIMITED</strong> (&ldquo;<strong className="font-semibold text-slate-900">Parcer</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">Company</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">we</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">us</strong>&rdquo; or &ldquo;<strong className="font-semibold text-slate-900">our</strong>&rdquo;).
              </p>
              <p>
                By registering an account, placing a booking, requesting a service, making a payment, or otherwise using the Platform, you agree to be legally bound by these Terms, the Parcer Privacy Policy and any other policy or service-specific terms displayed on the Platform.
              </p>
              <p className="font-semibold text-slate-900">
                If you do not agree to these Terms, you must not use the Platform or Services.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 border-t border-slate-200 pt-3">
                These Terms constitute an electronic record and may be accepted electronically. No physical or digital signature is required, except where required by applicable law.
              </p>
            </div>

            {/* PART A: General Terms And Conditions */}
            <div className="space-y-10 border-t-2 border-slate-100 pt-6">
              <div className="border-l-4 border-[#389c8e] pl-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#389c8e]">Part A</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  General Terms And Conditions
                </h2>
              </div>

              {/* 1. General Rules */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. General Rules
                </h3>
                <ul className="list-disc pl-5 space-y-2.5 text-slate-700">
                  <li>
                    By using the Platform, you agree to comply with all applicable laws, regulations, and rules of your local jurisdiction, as well as those applicable under Indian law. You are responsible for ensuring that your use of the Platform does not violate any local, state, national, or international laws.
                  </li>
                  <li>
                    Except as otherwise expressly provided in this Agreement there shall be no third-party beneficiaries to this Agreement. This Agreement constitutes the entire agreement, subject to specific provisions herein, between you and the company and governs your use of the Platform and the Services, superseding any prior agreements or any communication written or oral by any mode between you and the company with respect to the Platform and/or the Services.
                  </li>
                  <li>
                    You are solely responsible for any content you upload, post, or otherwise transmit via the Platform. This includes, but is not limited to, text, images, videos, and any other media. By uploading or posting content, you grant Parcer a worldwide, royalty-free, and non-exclusive license to use, display, and distribute that content in connection with the services provided on the Platform.
                  </li>
                </ul>
              </section>

              {/* 2. Definitions */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. Definitions
                </h3>
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
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">User / Customer / You</td>
                        <td className="py-3 px-4 sm:px-6">A person, business, institution or other entity using Parcer to request or receive eligible delivery services.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">Service Partner / Driver</td>
                        <td className="py-3 px-4 sm:px-6">An independent delivery/service provider who accepts and performs a booking through Parcer. Driver-specific obligations are governed by separate Service Partner Terms.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">Booking</td>
                        <td className="py-3 px-4 sm:px-6">A request for delivery or transportation submitted through the Platform and accepted/confirmed through the Platform.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">Goods</td>
                        <td className="py-3 px-4 sm:px-6">The parcel, package, item or other eligible goods submitted for transportation.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">Pickup</td>
                        <td className="py-3 px-4 sm:px-6">The location from which the Goods are collected.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">Drop / Delivery Location</td>
                        <td className="py-3 px-4 sm:px-6">The destination where the Goods are intended to be delivered.</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50">
                        <td className="py-3 px-4 sm:px-6 font-semibold text-slate-900">Services</td>
                        <td className="py-3 px-4 sm:px-6">On-demand local goods delivery and related services made available through Parcer.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 3. Eligibility and Account Registration */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Eligibility and Account Registration
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>You must be at least 18 years old and legally capable of entering into a binding agreement, unless Parcer expressly permits a different arrangement in compliance with applicable law.</li>
                  <li>If you use Parcer on behalf of a business or another person, you represent that you are authorized to do so and that the relevant person/entity will comply with these Terms.</li>
                  <li>You must provide accurate, current and complete information during registration and booking.</li>
                  <li>Account registration may require mobile-number verification through OTP or another authentication method.</li>
                  <li>You are responsible for protecting OTPs, passwords and other account credentials and for activity performed through your account.</li>
                  <li>You hereby agree that the company may contact you either electronically, through phone or through its online and offline centers or associates, to understand your interest in the selected services and to fulfill your demand. You also agree that the company / the platform reserves the right to make your details available to its partners and affiliates and you may be contacted by such partners and affiliates for information through email, telephone, SMS and/or any other mode of communication.</li>
                  <li>You must promptly notify Parcer if you suspect unauthorized access, fraud or misuse of your account.</li>
                </ul>
              </section>

              {/* 4. Parcer Platform and Services */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Parcer Platform and Services
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Parcer is a technology platform that facilitates on-demand local goods delivery by connecting Users with available Service Partners. Depending on the location, vehicle availability and operational model, Parcer may offer delivery using two-wheelers vehicle categories.</li>
                  <li>Service availability depends on the pickup location, drop location, operating hours, vehicle availability, road conditions and other operational factors.</li>
                  <li>Vehicle type may be selected by the User where the Platform permits; Parcer may recommend or assign a suitable vehicle based on the Goods, route, capacity and availability.</li>
                  <li>Unless expressly included in a selected service, packaging, loading, unloading, dismantling, assembly, labour and special handling are not included.</li>
                  <li>The Platform may use third-party technology and service providers for maps, payments, communications, identity verification, analytics and other functions.</li>
                  <li>The User shall be bound by the Terms of Use and all copyright policies and other applicable laws for any purpose regardless of whether the User is availing any paid services or not. Content hosted on the platform is licensed, and not sold to the User. The company reserves the right to introduce additional terms in future as may be mandated by compliant authorities and/or otherwise.</li>
                  <li>Users may use the company&rsquo;s Applications/portal only on Supported Devices that are compatible with the software. To access the application, Users may be required to download, install and run certain software, updates and upgrades thereto, owned or controlled by the company and/or its service provider(s).</li>
                  <li>Parcer may add, remove, modify or temporarily suspend vehicle categories, service areas, features or service types, subject to applicable law.</li>
                </ul>
              </section>

              {/* 5. Privacy and Personal Data */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  5. Privacy and Personal Data
                </h3>
                <p>
                  Parcer&rsquo;s collection and use of personal data is governed by the{' '}
                  <button
                    onClick={() => go('privacy-policy')}
                    className="font-bold text-[#389c8e] hover:underline cursor-pointer"
                  >
                    Parcer Privacy Policy
                  </button>
                  , which forms part of the overall terms governing use of the Platform.
                </p>
                <p>
                  The Privacy Policy explains the categories of personal data collected, purposes of processing, sharing, retention, user rights, security measures and contact details for privacy-related requests. Please read the Privacy Policy before using the Platform.
                </p>
              </section>

              {/* 6. Proprietary Rights */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  6. Proprietary Rights
                </h3>
                <p>
                  You acknowledge and agree that the company owns all legal rights, titles and interests in and to the Platform and the Services offered herein, including any intellectual property rights which subsist in the Platform, technology, other intellectual property rights and/or the Services (whether those rights are registered or not, and wherever in the world those rights exist).
                </p>
                <p>
                  The trademarks, logos, designs and service marks (&ldquo;Marks&rdquo;) displayed on this application/website are the property of the Company and shall always remain the sole property of the Company. You do not have the right to use any of the company&rsquo;s trade names, trademarks, service marks, logos, domain names, and other distinctive brand features.
                </p>
                <p>
                  You are strictly prohibited to modify, copy, alter, change, distribute, display, publish, transform, transfigure and/or mutate any part of the Platform and/or the Services outside the platform in any unauthorized manner.
                </p>
              </section>

              {/* 7. Intellectual Property and Limited License */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  7. Intellectual Property and Limited License
                </h3>
                <p>
                  Parcer grants you a limited, non-exclusive, non-transferable, revocable right to use the Platform for its intended lawful purpose.
                </p>
                <p className="font-semibold text-slate-900">By using the Platform, you agree not to:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Use this Platform or its contents for any purpose other than as defined in the Platform;</li>
                  <li>Make any speculative, false, or fraudulent transaction or any transaction in anticipation of demand;</li>
                  <li>Use, post etc., any content which is defamatory, obscene, pornographic, pedophilic, invasive of another&rsquo;s privacy, insulting or harassing on the basis of gender, libelous, racially or ethnically objectionable, relating or encouraging money laundering or gambling, or otherwise contrary to the laws in force;</li>
                  <li>Breach any restrictions or guidelines that may be imposed by competent authorities from time to time;</li>
                  <li>Remove any proprietary notices or labels on the Site or Site Content.</li>
                </ul>
              </section>

              {/* 8. User Responsibilities */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  8. User Responsibilities
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Provide truthful and complete information about the Goods, including quantity, approximate weight, size, value where requested and any special handling requirement.</li>
                  <li>Use suitable packaging and secure the Goods before pickup.</li>
                  <li>Ensure the sender has the right and authority to hand over the Goods and that the recipient is authorized to receive them.</li>
                  <li>Provide accurate pickup/drop addresses, contact numbers and access instructions.</li>
                  <li>Be available, or ensure an authorized person is available, at pickup and delivery.</li>
                  <li>Comply with applicable laws, traffic/safety requirements and Parcer instructions.</li>
                  <li>Do not ask a Service Partner to carry prohibited Goods, overload a vehicle, take an unsafe route or violate any law.</li>
                  <li>Pay all applicable charges, including delivery fees, taxes, waiting, cancellation, toll, parking, extra-stop, return or other charges where applicable.</li>
                </ul>
              </section>

              {/* 9. Indemnity */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  9. Indemnity
                </h3>
                <p>
                  To the extent permitted by law, you agree to indemnify and hold harmless Parcer, its affiliates, directors, officers, employees and service providers against claims, losses, damages, penalties, costs and reasonable expenses arising from your breach of these Terms, unlawful use of the Platform, prohibited Goods, inaccurate declarations, misuse of Services or violation of another person&rsquo;s rights.
                </p>
              </section>

              {/* 10. Electronic Communications */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  10. Electronic Communications
                </h3>
                <p>
                  By using the Platform, you consent to receive service-related communications electronically through app notifications, SMS, email, telephone, WhatsApp or other available channels as appropriate.
                </p>
                <p>
                  Transactional communications may include booking confirmations, driver assignment, pickup/delivery updates, payment notifications, support messages and security alerts.
                </p>
              </section>

              {/* 11. Links and Browser Extension */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  11. Links and Browser Extension
                </h3>
                <p>
                  The Platform or third parties may provide links to other World Wide Web sites or third-party resources. Such third-party contents and links are provided solely for your convenience and information only. Parcer has no control over such sites and resources and is not responsible or liable for any third-party content, goods or services.
                </p>
              </section>

              {/* 12. Customer Calls */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  12. Customer Calls
                </h3>
                <p>
                  Telephone calls that you make to our customer service help line or calls made by our support desk may be monitored or recorded for training, quality assurance and security purposes under careful supervision.
                </p>
              </section>

              {/* 13. Legal Compliance Acknowledgement */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  13. Legal Compliance Acknowledgement
                </h3>
                <p>The Customer agrees to comply with all applicable Indian laws, including but not limited to:</p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                  <li>The Consumer Protection Act, 2019</li>
                  <li>The Information Technology Act, 2000 and Rules thereunder</li>
                  <li>The Motor Vehicles Act, 1988</li>
                  <li>Applicable GST and TDS regulations</li>
                  <li>Local municipal and transport authority rules and safety norms</li>
                  <li>GST under Reverse Charge Mechanism, where applicable, on transportation services</li>
                </ul>
              </section>

              {/* 14. Changes to These Terms */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  14. Changes to These Terms
                </h3>
                <p>
                  Parcer may update these Terms to reflect changes in Services, technology, business practices or applicable law. For material changes, Parcer will provide notice through the Platform, email, app notification or another appropriate method. Continued use after the effective date constitutes acceptance.
                </p>
              </section>

              {/* 15. Grievance Redressal and Customer Support */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  15. Grievance Redressal and Customer Support
                </h3>
                <p>
                  For booking issues, payment disputes, delivery complaints, safety concerns or other grievances, contact Parcer through the in-app support system or:
                </p>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 space-y-4 text-slate-800">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500">Company</span>
                      <span className="font-semibold text-slate-900">Tiny Script Soft Tech Pvt. Ltd.</span>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500">Privacy / Grievance Officer</span>
                      <span className="font-semibold text-slate-900">Madhubhai Chaudhari</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200/80 pt-4">
                    <div>
                      <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500">Email</span>
                      <a href="mailto:support@theparcer.com" className="text-[#389c8e] hover:underline font-semibold">
                        support@theparcer.com
                      </a>
                    </div>
                    <div>
                      <span className="block text-xs uppercase tracking-wider font-semibold text-slate-500">Registered Office</span>
                      <span className="text-sm text-slate-700 leading-normal">
                        SHED NO.118, GAJANAN INDUSTRIAL HUB-2, OPP.RAMWADI BRIDGE, GIDC VATVA, AHMEDABAD, GUJARAT - 382445.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* PART B: Additional Terms And Conditions */}
            <div className="space-y-10 border-t-2 border-slate-100 pt-8">
              <div className="border-l-4 border-[#f4c95d] pl-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Part B</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Additional Terms And Conditions
                </h2>
              </div>

              {/* 1. Vehicle, Goods Description, Weight, Size and Capacity */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  1. Vehicle, Goods Description, Weight, Size and Capacity
                </h3>
                <div className="rounded-2xl bg-amber-50/50 p-5 border border-amber-200/60 space-y-3">
                  <h4 className="font-bold text-amber-900">Two-Wheelers (motorcycles/scooters) Specifications:</h4>
                  <p className="text-slate-700 text-sm sm:text-[15px]">
                    This category includes motorcycles and scooters used for both (a) delivery of small to medium parcels and (b) transportation of passengers (where permitted under applicable regulations). For goods, 2-Wheelers offer faster transit and have a load capacity generally up to 20 kg. For passenger transport, only one (1) passenger is permitted per vehicle. All riders and passengers are required to follow safety regulations, including helmet use, adherence to traffic laws, and any additional safety requirements prescribed by authorities.
                  </p>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>The User is solely responsible for accurately declaring the nature, quantity, dimensions and approximate weight of the Goods. Parcer and/or the Service Partner may refuse or cancel a booking where the actual Goods materially differ from the booking information.</li>
                  <li>Goods must remain within the stated capacity and dimensions of the selected vehicle/service.</li>
                  <li>Oversized, overweight, unstable, leaking, inadequately packed or unsafe Goods may be refused.</li>
                  <li>Where the actual Goods require a different vehicle or service, the booking may be changed or cancelled and additional charges may apply where applicable.</li>
                  <li>Any loading/unloading assistance, if offered, is subject to stated manpower, weight and safety limits.</li>
                </ul>
              </section>

              {/* 2. Loss, Damage, Shortage and Claims */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  2. Loss, Damage, Shortage and Claims
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Any loss, damage, shortage, tampering or delivery issue should be reported to Parcer as soon as reasonably possible through in-app support or the designated support channel.</li>
                  <li>Parcer may request booking details, photographs, invoices, proof of value, packaging photographs and other evidence reasonably required to investigate a claim.</li>
                  <li>Parcer shall not be liable for any direct, consequential, incidental, accidental or indirect damages (including loss of income, delay, or emotional distress) arising from the use of the delivery and transportation service or misuse of the service.</li>
                </ul>
              </section>

              {/* 3. Prohibited and Restricted Goods */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  3. Prohibited and Restricted Goods
                </h3>
                <p className="font-semibold text-rose-700 bg-rose-50 p-3.5 rounded-xl border border-rose-200">
                  You must not use Parcer to transport Goods that are illegal, hazardous, dangerous, restricted or prohibited under applicable law or under Parcer policy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {[
                    'Explosives, fireworks, ammunition, firearms, weapons and weapon components.',
                    'Narcotic drugs, psychotropic substances, contraband and other unlawful items.',
                    'Flammable, corrosive, toxic, radioactive, infectious, biohazardous substances.',
                    'Fuel, petrol, diesel, kerosene, LPG cylinders, compressed gases without permit.',
                    'Cash, currency, negotiable instruments, securities, passports, credit/debit cards.',
                    'Gold, bullion, diamonds, precious stones, jewellery and high-value valuables.',
                    'Perishable or temperature-sensitive goods where the service is unsuitable.',
                    'Liquids, semi-liquids, gases, leaking items likely to damage vehicles.',
                    'Live animals, livestock, plants or plant material where prohibited.',
                    'Human remains, organs, blood, biomedical waste or regulated biological materials.',
                    'Alcoholic beverages, intoxicants, tobacco/nicotine products where prohibited.',
                    'Pornographic/obscene material where prohibited by applicable law.',
                    'Stolen goods, counterfeit goods, illegal imports/exports.',
                    'Any item that cannot safely be carried within legal and operational limits.',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3 text-xs sm:text-sm text-slate-700 border border-slate-100">
                      <span className="h-2 w-2 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 4. Valuable and Fragile Goods */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  4. Valuable and Fragile Goods
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Parcer&rsquo;s ordinary delivery service is intended for eligible everyday goods and is not automatically an insured courier service for the full value of Goods.</li>
                  <li>Do not send cash, jewellery, bullion, precious stones or other high-value items unless Parcer expressly confirms that the applicable service accepts them.</li>
                  <li>Fragile items must be packaged to withstand ordinary road transportation. Glass, electronics and other delicate items may be refused where packaging or vehicle suitability is inadequate.</li>
                  <li>For valuable Goods, the User should arrange appropriate insurance or protection where available and legally appropriate.</li>
                </ul>
              </section>

              {/* 5. Packaging, Loading and Unloading */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  5. Packaging, Loading and Unloading
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>The User is responsible for safe and suitable packaging unless the Platform expressly states that packaging is included.</li>
                  <li>The User must ensure that Goods are securely closed, wrapped, boxed or otherwise prepared for ordinary transportation.</li>
                  <li>Unless a selected service expressly includes labour assistance, the User/recipient is responsible for loading and unloading.</li>
                  <li>Damage attributable to inadequate packaging, inherent defects, inaccurate declarations or customer handling/instructions may not be eligible for compensation, subject to applicable law.</li>
                </ul>
              </section>

              {/* 6. Fares, Taxes and Additional Charges */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  6. Fares, Taxes and Additional Charges
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>The fare displayed on the Platform depends on distance, vehicle category, demand, Goods characteristics, service area and other applicable factors.</li>
                  <li>The applicable estimated or final fare will be shown before booking wherever reasonably practicable.</li>
                  <li>Additional charges may apply for waiting, extra distance, additional stops, tolls, parking, return trips, or changes requested by the User.</li>
                  <li>GST and other statutory taxes/levies will be charged where applicable.</li>
                  <li>The User must not make unauthorized side payments or attempt to bypass Parcer charges.</li>
                </ul>
              </section>

              {/* 7. Payment Methods and Parcer Wallet */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  7. Payment Methods and Parcer Wallet
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Parcer may provide payment through an in-app wallet, online payment gateway, cash payment to the Service Partner, or other methods made available in the Platform.</li>
                  <li>Where Wallet payment is selected, the applicable amount may be deducted from the User&rsquo;s available wallet balance.</li>
                  <li>Where cash payment is selected, the User must pay the amount due through the permitted cash flow shown by Parcer.</li>
                  <li>Online transactions are processed through payment providers and may be subject to their applicable terms.</li>
                  <li>Failed, reversed, disputed or unauthorized transactions do not automatically extinguish the User&rsquo;s payment obligation.</li>
                </ul>
              </section>

              {/* 8. Cancellation, Modification and Refunds */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  8. Cancellation, Modification and Refunds
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>The User may cancel a booking through the Platform, subject to the cancellation rules displayed at the time of booking.</li>
                  <li>Cancellation before Service Partner acceptance may be free where the Platform states so.</li>
                  <li>Cancellation after assignment/acceptance or after the Service Partner has started travelling to the pickup point may attract a cancellation fee.</li>
                  <li>Waiting or cancellation charges may apply where the User, sender or recipient is unavailable or not ready.</li>
                  <li>
                    Refunds, where applicable, will be processed according to the{' '}
                    <button
                      onClick={() => go('refund-policy')}
                      className="font-semibold text-[#389c8e] hover:underline cursor-pointer"
                    >
                      Parcer Refund &amp; Cancellation Policy
                    </button>{' '}
                    and the payment method used.
                  </li>
                </ul>
              </section>

              {/* 9. Failed Delivery, Refused Delivery and Return */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  9. Failed Delivery, Refused Delivery and Return
                </h3>
                <p>
                  A delivery may fail or be delayed because of an incorrect/unreachable address, recipient unavailability, prohibited Goods, overweight/oversized Goods, traffic, weather, vehicle breakdown, safety concerns or other circumstances.
                </p>
                <p>
                  If the recipient refuses or is unavailable to receive the Goods, Goods may be returned to the pickup location or handled through another reasonable process. The User may be responsible for applicable return, waiting, storage, handling, parking, or toll costs.
                </p>
              </section>

              {/* 10. Delivery Confirmation and Proof of Delivery */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  10. Delivery Confirmation and Proof of Delivery
                </h3>
                <p>
                  Parcer may use OTP, app confirmation, GPS event, recipient confirmation, signature, photograph or another digital proof-of-delivery method. The User should verify delivery status through the Platform and report any discrepancy promptly.
                </p>
              </section>

              {/* 11. Service Partner Interaction and Safety */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  11. Service Partner Interaction and Safety
                </h3>
                <p>
                  Users must treat Service Partners respectfully and must not threaten, abuse, harass, discriminate against or assault them. Users must not request unsafe driving, overloading, illegal transport or violation of traffic laws.
                </p>
              </section>

              {/* 12. Platform Use Rules */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  12. Platform Use Rules
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Use Parcer only for lawful purposes and legitimate bookings.</li>
                  <li>Do not create fake, duplicate or fraudulent accounts.</li>
                  <li>Do not manipulate fares, ratings, promotions, wallet balances, referral benefits, delivery records or support processes.</li>
                  <li>Do not impersonate another person or provide false information.</li>
                  <li>Do not use automated tools, scraping, bots or unauthorized access methods against the Platform.</li>
                  <li>Do not introduce malicious code, interfere with Platform infrastructure or attempt to bypass security controls.</li>
                </ul>
              </section>

              {/* 13. Technology, Maps, GPS and Availability */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  13. Technology, Maps, GPS and Availability
                </h3>
                <p>
                  Parcer relies on mobile devices, GPS, maps, telecommunications networks, payment systems and third-party technology. Routes, distances and ETAs shown in the Platform are estimates and may differ from actual road conditions.
                </p>
              </section>

              {/* 14. Third-Party Services */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  14. Third-Party Services
                </h3>
                <p>
                  The Platform may integrate third-party maps, payment gateways, communications, analytics, identity verification, insurance or other services. Such services may be governed by separate terms and privacy practices.
                </p>
              </section>

              {/* 15. Suspension and Termination */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  15. Suspension and Termination
                </h3>
                <p>
                  Parcer may suspend, restrict or terminate access to an account or booking where reasonably necessary to protect Users, Service Partners, the Platform or third parties, including suspected fraud, unlawful activity, non-payment, misuse, safety risks or material breach of these Terms.
                </p>
              </section>

              {/* 16. Limitation of Liability */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  16. Limitation of Liability
                </h3>
                <p>
                  To the maximum extent permitted by applicable law, Parcer will not be liable for indirect, incidental, special, exemplary or consequential losses such as loss of profits, business opportunity, reputation or data arising from use of the Platform or Services.
                </p>
              </section>

              {/* 17. Force Majeure */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  17. Force Majeure
                </h3>
                <p>
                  Parcer will not be responsible for delay or failure caused by circumstances beyond its reasonable control, including severe weather, floods, earthquakes, fire, epidemic/pandemic events, strikes, civil unrest, war, government restrictions, road closures, telecommunications or power failures, or vehicle accidents.
                </p>
              </section>

              {/* 18. Governing Law and Dispute Resolution */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  18. Governing Law and Dispute Resolution
                </h3>
                <p>
                  These Terms are governed by the laws of India. Users should first contact Parcer support to attempt to resolve any complaint or dispute. Disputes arising from these Terms will be subject to the jurisdiction of the competent courts at Gujarat, India.
                </p>
              </section>

              {/* 19. Customer Acknowledgement */}
              <section className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
                  19. Customer Acknowledgement
                </h3>
                <p className="font-medium text-slate-800">
                  By selecting &ldquo;I Agree&rdquo;, creating an account, confirming a booking or using Parcer, you acknowledge that:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                  <li>You have read and understood these Terms;</li>
                  <li>The information you provide about yourself and the Goods is accurate;</li>
                  <li>You will not send prohibited or unlawful Goods;</li>
                  <li>You understand that delivery times are estimates;</li>
                  <li>You will pay applicable charges;</li>
                  <li>You will comply with applicable laws and Platform rules; and</li>
                  <li>You have reviewed the Privacy Policy and other policies applicable to your use of Parcer.</li>
                </ul>
              </section>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
