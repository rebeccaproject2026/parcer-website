import { Link } from 'react-router-dom';
import type { View } from '../types';

interface PrivacyPolicyProps {
  go?: (view: View) => void;
}

export function PrivacyPolicy({ go: _go }: PrivacyPolicyProps) {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Header Banner */}
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
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 md:p-14 shadow-[0_15px_45px_rgba(51,65,85,0.08)] space-y-10 text-[15px] sm:text-[16px] leading-relaxed text-slate-700">

            {/* 1. Introduction */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                1. Introduction
              </h2>
              <p>
                This privacy policy sets out how Parcer uses and protects any information that you give Parcer when you use this website/mobile application for Customers and Driver Partners.
              </p>
              <p>
                This Privacy Policy (&ldquo;<strong className="font-semibold text-slate-900">Policy</strong>&rdquo;) explains how <strong className="font-semibold text-slate-900">Tiny Script Soft Tech Pvt. Ltd</strong>, a company incorporated under the laws of India (&ldquo;<strong className="font-semibold text-slate-900">Parcer</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">Company</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">we</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">us</strong>&rdquo; or &ldquo;<strong className="font-semibold text-slate-900">our</strong>&rdquo;), collects, uses, stores, discloses and otherwise processes personal data when you access or use Parcer&rsquo;s mobile applications, website, web portal, APIs and any other related services (collectively, the &ldquo;<strong className="font-semibold text-slate-900">Platform</strong>&rdquo; or &ldquo;<strong className="font-semibold text-slate-900">Services</strong>&rdquo;).
              </p>
              <p>
                This Policy applies to customers, consignors, consignees, recipients, drivers, delivery partners, vehicle owners, business users, authorized representatives and other individuals who interact with the Platform (collectively, &ldquo;<strong className="font-semibold text-slate-900">you</strong>&rdquo; or &ldquo;<strong className="font-semibold text-slate-900">your</strong>&rdquo;).
              </p>
              <p>
                The Policy is intended to be read together with our{' '}
                <Link
                  to="/terms-conditions"
                  className="font-semibold text-[#389c8e] hover:underline cursor-pointer"
                >
                  Terms &amp; Conditions (User)
                </Link>
                ,{' '}
                <Link
                  to="/terms-partner"
                  className="font-semibold text-[#389c8e] hover:underline cursor-pointer"
                >
                  Terms &amp; Conditions (Partner)
                </Link>
                ,{' '}
                <Link
                  to="/refund-policy"
                  className="font-semibold text-[#389c8e] hover:underline cursor-pointer"
                >
                  Cancellation and Refund Policy
                </Link>{' '}
                and any other notices presented to you at the time of collection or use of personal data.
              </p>
              <p>
                By using our services and application, you will be regarded as having read and accepted this Policy. You must not use this platform if you do not accept this Policy.
              </p>
              <p>
                By using our Apps and the Services, you agree and consent to the collection, transfer, use, storage, disclosure and sharing of your information as described and collected by us in accordance with this Policy.
              </p>
              <p className="bg-slate-50 border-l-4 border-amber-500 p-4 rounded-r-lg font-medium text-slate-800 text-sm sm:text-base">
                Our Policy may change from time to time without notice. Please review this policy periodically for any changes.
              </p>
            </section>

            {/* 2. Legal Framework */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                2. Legal Framework
              </h2>
              <p>
                Depending on the nature of the processing and the services offered, our processing of personal data may be subject to applicable Indian laws, including the Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;), the Digital Personal Data Protection Rules, 2025, the Information Technology Act, 2000 and applicable rules, directions and sector-specific requirements, as amended or replaced from time to time.
              </p>
            </section>

            {/* 3. Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                3. Information We Collect
              </h2>
              <p>
                We may collect only information that is reasonably necessary for the Services, depending on the features you use.
              </p>

              <div className="space-y-5 pt-2">
                <div className="rounded-2xl bg-slate-50/80 p-5 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    3.1 Information provided directly by customers
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>Full Name, mobile number, email address.</li>
                    <li>Pickup and drop-off addresses, location details, landmarks and delivery instructions.</li>
                    <li>Consignor and consignee/recipient information, including names and contact numbers where you provide them.</li>
                    <li>Booking details, vehicle/service selected, goods or shipment information, package dimensions/weight/category where applicable, and special handling instructions.</li>
                    <li>Billing, invoice and transaction information. Payment card, UPI or bank information may be processed directly by authorized payment service providers where applicable.</li>
                    <li>Communications with us, including support requests, complaints, feedback, survey responses and information provided during customer service interactions.</li>
                    <li>Information you voluntarily provide for promotions, referrals or other Platform features.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50/80 p-5 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    3.2 Information collected from drivers / delivery partners
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>Full Name, mobile number, email address, photograph/profile image and address/contact details.</li>
                    <li>Identity and KYC information, such as government-issued identification such as Aadhaar, PAN and other verification information where required.</li>
                    <li>Driving licence, vehicle registration certificate (RC), insurance policy, permit, fitness/pollution certificates (PUC) and other vehicle or regulatory documents where applicable.</li>
                    <li>Bank/payment settlement information and tax-related information necessary for partner payouts and statutory compliance.</li>
                    <li>Vehicle information such as registration number, type, model and service category.</li>
                    <li>Location information, trip/route information, job status and operational activity required to provide and monitor delivery services.</li>
                    <li>Information arising from verification, fraud prevention, safety checks or background checks, where lawfully obtained and applicable.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50/80 p-5 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    3.3 Information collected automatically
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>Device type, operating system, application version, crash logs, screen size, device identifiers, IP address, mobile network/carrier and other diagnostic information.</li>
                    <li>Approximate or precise location information (GPS), subject to device permissions and the features being used.</li>
                    <li>App activity, session information, crash logs, diagnostics, performance information and interaction with Platform features.</li>
                    <li>Log information such as access times, pages/screens viewed, actions taken, referring sources and similar technical data.</li>
                    <li>Cookies, SDKs and similar technologies on our website or Platform, where applicable.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50/80 p-5 border border-slate-100">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    3.4 Information from third parties
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>Payment gateways, banks and financial service providers.</li>
                    <li>Identity/KYC, document verification, fraud prevention and background verification providers.</li>
                    <li>Maps, geolocation, address validation, communication, cloud, analytics and other technology service providers.</li>
                    <li>Business customers or organizations that create bookings or provide information about authorized users.</li>
                    <li>Other users, including customers or recipients, where they provide information necessary to complete a shipment.</li>
                    <li>Government authorities, regulators or law enforcement agencies where permitted or required by law.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. How We Use Personal Data */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                4. How We Use Personal Data
              </h2>
              <p>We may process personal data for the following purposes, as applicable:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Create and manage user and driver/delivery partner accounts.</li>
                <li>Accept, confirm, assign, dispatch, track and complete bookings and deliveries.</li>
                <li>Match customer bookings with suitable drivers, vehicles or delivery partners.</li>
                <li>Provide live tracking, estimated arrival information, route optimization, pickup/drop-off assistance and delivery status updates.</li>
                <li>Enable communication between customers, recipients, drivers and our support team, including calls, SMS, in-app chat or masked communication where available.</li>
                <li>Process payments, invoices, refunds, credits, partner settlements and reconciliation.</li>
                <li>Verify identity, eligibility, vehicle documents and partner credentials.</li>
                <li>Maintain platform safety, prevent fraud, misuse, unauthorized access, fake bookings, payment abuse and other unlawful or harmful activity.</li>
                <li>Provide customer support, resolve disputes, investigate complaints and improve service quality.</li>
                <li>Send service-related communications, including booking confirmations, OTPs, alerts, delivery updates, security messages and transactional notifications.</li>
                <li>Send promotional or marketing communications where permitted and, where required, based on your consent or communication preferences.</li>
                <li>Analyze usage, diagnose technical issues, conduct research and improve Platform functionality, reliability and user experience.</li>
                <li>Comply with applicable laws, court orders, regulatory requirements, tax requirements and lawful requests from public authorities.</li>
                <li>Establish, exercise or defend legal claims and protect our rights, users, property and Services.</li>
              </ul>
            </section>

            {/* 5. Security */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                5. Security
              </h2>
              <p>
                We are committed to ensuring that your information is protected in accordance with the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, the Aadhaar Act, 2016, and other applicable Indian laws.
              </p>
              <p>
                We collect and retain only the data necessary to perform our services and comply with legal obligations.
              </p>
              <p>
                All sensitive personal data is encrypted during transmission and at rest using industry-standard encryption protocols.
              </p>
              <p>
                We use secure servers with robust firewalls, encryption techniques and authentication procedures to maintain the security of your online session and to protect the accounts and systems from unauthorized access.
              </p>
              <p>
                Our platform transmits information such as your Registration Information for this platform or Account Credentials securely. We ensure our databases are protected from general employee access both physically and logically. We encrypt your password so that your password cannot be recovered, even by us. You acknowledge that no method of transmission over the Internet, or method of electronic storage, is 100% secure; therefore, we cannot guarantee its absolute security. If you have any questions about security on our application, you can contact us on the email provided in the contact us segment on our website.
              </p>
              <p>
                In case of account deletion, withdrawal of consent, deactivation of account or cessation of services, certain personal data may continue to remain stored in our Company&rsquo;s backup systems, archival records or disaster recovery mechanisms for such period as may be reasonably required for operational, security, legal, regulatory or compliance purposes in accordance with applicable law.
              </p>
            </section>

            {/* 6. Location Information */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                6. Location Information
              </h2>
              <p>
                Location is an important part of an on-demand logistics service. Depending on your role and the features you use, we may process precise or approximate location information.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl bg-slate-50/80 p-5 border border-slate-100 space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">
                    6.1 Customers
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                    <li>To identify or confirm pickup and drop-off locations.</li>
                    <li>To improve address accuracy, routing and estimated arrival times.</li>
                    <li>To show delivery progress where the feature is enabled.</li>
                    <li>To assist customer support and resolve delivery-related issues.</li>
                    <li>To detect suspicious activity and improve safety.</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50/80 p-5 border border-slate-100 space-y-2">
                  <h3 className="text-base font-semibold text-slate-900">
                    6.2 Drivers / Delivery Partners
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                    <li>To identify nearby delivery opportunities and assign jobs.</li>
                    <li>To enable live trip tracking and delivery status.</li>
                    <li>To calculate or validate routes, distance, ETA and operational metrics.</li>
                    <li>To provide safety, fraud prevention and service quality functions.</li>
                    <li>To resolve disputes relating to pickup, transit or delivery.</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-[15px]">
                Location collection may occur while the Platform is in use and, where required for the driver/delivery workflow or another feature that you have enabled, may occur in the background subject to the permissions granted through your device and applicable law. You may disable device location permissions, but doing so may make some Services unavailable or less accurate.
              </p>
            </section>

            {/* 7. Calls, Messages and Communications */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                7. Calls, Messages and Communications
              </h2>
              <p>
                To facilitate bookings and deliveries, we may enable communication between customers, recipients, drivers and our support personnel. Depending on the Platform design, communications may use phone calls, SMS, in-app chat, push notifications, email or masked/relay calling.
              </p>
              <p>
                We may process communication metadata and, where legally permitted and clearly disclosed, record or retain certain communications for safety, quality, fraud prevention, dispute resolution and training purposes. Where recording is used, we will provide an appropriate notice where required.
              </p>
            </section>

            {/* 8. Cookies and Tracking Technologies */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                8. Cookies and Tracking Technologies
              </h2>
              <p>
                A cookie is a small file which asks permission to be placed on your computer&rsquo;s hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
              </p>
              <p>
                Our website and applications may use cookies, mobile SDKs, software libraries, pixels and similar technologies to maintain sessions, remember preferences, measure performance, understand usage, prevent fraud and improve the Services. Third-party analytics, crash reporting, mapping and communication providers may use similar technologies in accordance with their own policies.
              </p>
              <p>
                You can control certain device or browser permissions and cookie settings. By disabling certain technologies, you may still use our application, but your ability to use some features or areas of our application may be limited.
              </p>
            </section>

            {/* 9. How We Share Personal Data */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                9. How We Share Personal Data
              </h2>
              <p>
                We do not sell your personal data as a standalone commercial product. We may disclose or make available personal data where reasonably necessary for the following categories of recipients:
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mt-4">
                <table className="min-w-full text-left text-sm text-slate-700">
                  <thead className="bg-slate-100/90 text-slate-900 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-6">Recipient / Category</th>
                      <th className="py-3.5 px-4 sm:px-6">Examples</th>
                      <th className="py-3.5 px-4 sm:px-6">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">Drivers / Delivery Partners</td>
                      <td className="py-3.5 px-4 sm:px-6">Assigned driver, delivery partner or vehicle operator</td>
                      <td className="py-3.5 px-4 sm:px-6">Complete booking, pickup, transit, delivery and related communication</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">Customers / Recipients</td>
                      <td className="py-3.5 px-4 sm:px-6">Consignor, consignee or authorized business user</td>
                      <td className="py-3.5 px-4 sm:px-6">Facilitate shipment and delivery coordination</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">Payment &amp; Financial Providers</td>
                      <td className="py-3.5 px-4 sm:px-6">Payment gateway, bank, payout provider</td>
                      <td className="py-3.5 px-4 sm:px-6">Payments, refunds, settlements and reconciliation</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">Technology Providers</td>
                      <td className="py-3.5 px-4 sm:px-6">Cloud hosting, maps, analytics, messaging, SMS, email, crash monitoring</td>
                      <td className="py-3.5 px-4 sm:px-6">Operate and improve the Platform</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">Verification &amp; Safety Providers</td>
                      <td className="py-3.5 px-4 sm:px-6">KYC, document, fraud and background-check providers</td>
                      <td className="py-3.5 px-4 sm:px-6">Identity, eligibility, safety and fraud prevention</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">Professional Advisors</td>
                      <td className="py-3.5 px-4 sm:px-6">Legal, accounting, audit, insurance and consultants</td>
                      <td className="py-3.5 px-4 sm:px-6">Professional and legal services</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-slate-900">Authorities</td>
                      <td className="py-3.5 px-4 sm:px-6">Courts, regulators, law enforcement or government bodies</td>
                      <td className="py-3.5 px-4 sm:px-6">Legal compliance, investigations and lawful requests</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 10. Information Displayed to Other Users */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                10. Information Displayed to Other Users
              </h2>
              <p>
                To provide the Services, certain limited information may be shown to other participants in a booking. For example, a customer may see a driver&rsquo;s name, profile image, vehicle information, rating and/or approximate location, while a driver may receive the pickup/drop details and limited customer or recipient contact information needed to complete the delivery. We seek to limit such disclosures to information reasonably necessary for the transaction and safety.
              </p>
            </section>

            {/* 11. Payments and Financial Information */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                11. Payments and Financial Information
              </h2>
              <p>
                Where online payments are supported, payments may be processed through third-party payment gateways or financial service providers. We may receive transaction identifiers, payment status, masked payment information and related reconciliation information. We generally do not need to store full card credentials when those credentials are handled directly by the payment provider.
              </p>
              <p>
                Payment providers may process your information under their own privacy policies and terms. You should review the applicable provider&rsquo;s privacy notice before using a payment method.
              </p>
            </section>

            {/* 12. Data Retention */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                12. Data Retention
              </h2>
              <p>
                We retain personal data only for as long as reasonably necessary for the purposes described in this Policy, to provide the Services, maintain business and transaction records, comply with legal, tax, accounting and regulatory requirements, resolve disputes, enforce agreements, prevent fraud and protect our rights.
              </p>
              <p>
                Different categories of data may have different retention periods. When personal data is no longer required, we may delete, anonymize or securely dispose of it, subject to legal or operational requirements that require continued retention.
              </p>
            </section>

            {/* 13. Data Security */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                13. Data Security
              </h2>
              <p>
                We maintain reasonable technical and organizational safeguards designed to protect personal data against unauthorized access, disclosure, alteration, loss, misuse or destruction. Depending on the nature of the data and risk, safeguards may include encryption in transit, access controls, authentication, logging, monitoring, secure development practices, vendor controls, backups and incident-response procedures.
              </p>
              <p>
                No method of transmission or storage is completely secure. You are responsible for protecting your login credentials, OTP and device and for notifying us promptly if you suspect unauthorized access to your account.
              </p>
            </section>

            {/* 14. Data Breach / Security Incident */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                14. Data Breach / Security Incident
              </h2>
              <p>
                If we become aware of a personal data breach that requires notification under applicable law, we will take reasonable steps to contain, investigate and remediate the incident and provide notifications to affected individuals and/or authorities as required by applicable law.
              </p>
            </section>

            {/* 15. Your Rights and Choices */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                15. Your Rights and Choices
              </h2>
              <p>
                Subject to applicable law and any limitations or exemptions under that law, you may have rights relating to your personal data, including the ability to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Request information about the personal data we process about you and how it is used.</li>
                <li>Request correction or updating of inaccurate or incomplete personal data.</li>
                <li>Request deletion/erasure of personal data where permitted by applicable law and where retention is not otherwise required.</li>
                <li>Withdraw consent where processing is based on consent. Withdrawal will not affect processing already lawfully carried out before withdrawal, and some Services may no longer be available if the required data is withdrawn.</li>
                <li>Opt out of certain promotional communications by using the unsubscribe/opt-out mechanism provided in the communication or contacting us.</li>
                <li>Nominate another individual to exercise applicable rights on your behalf where permitted by applicable law.</li>
                <li>Lodge a complaint or grievance regarding our processing of personal data.</li>
              </ul>
              <p className="pt-1">
                To exercise applicable rights, contact us using the details in Section 20. We may need to verify your identity before completing a request. We will respond within the period required by applicable law.
              </p>
            </section>

            {/* 16. Account Deletion */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                16. Account Deletion
              </h2>
              <p>
                Where the Platform provides an account-deletion function, you may request deletion through the applicable in-app or account settings. Alternatively, contact us using the details below.
              </p>
              <p>
                Deletion of an account does not necessarily mean immediate deletion of every record. We may retain information that we are required or permitted to retain for legal compliance, fraud prevention, dispute resolution, financial recordkeeping, security or other lawful purposes.
              </p>
            </section>

            {/* 17. Children's Privacy */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                17. Children&rsquo;s Privacy
              </h2>
              <p>
                The Services are intended for use by anyone above the age of 18 and are not directed at children. We do not knowingly request or collect personal data from children except where permitted and handled in accordance with applicable law. If you believe a child has provided personal data to us without appropriate authorization, please contact us so that we can investigate and take appropriate action.
              </p>
              <p>
                If we find that a customer under 18 has submitted personal data without proper authorization, we will take appropriate steps to delete the account and data in accordance with applicable laws.
              </p>
            </section>

            {/* 18. Third-Party Services and Links */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                18. Third-Party Services and Links
              </h2>
              <p>
                The Platform may integrate with or contain links to third-party websites, applications and services, including maps, payment services, communication tools, identity verification services and social or other platforms.
              </p>
              <p>
                However, once you have used these links to leave our site, you should note that we do not have any control over that other website which may also be in form of a banner advertisement.
              </p>
              <p>
                Their collection and use of personal data is governed by their respective privacy policies. We are not responsible for the privacy practices of third parties that we do not control.
              </p>
            </section>

            {/* 19. Changes to this Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                19. Changes to this Privacy Policy
              </h2>
              <p>
                We may update this Policy from time to time to reflect changes in our Services, technology, legal requirements or privacy practices. When changes are material, we may provide an appropriate notice through the Platform, email, SMS, push notification or another legally permissible method. The updated Policy will state its revised effective date.
              </p>
            </section>

            {/* 20. Contact, Grievance and Privacy Requests */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                20. Contact, Grievance and Privacy Requests
              </h2>
              <p>
                For questions, privacy requests, complaints or concerns regarding this Policy or our processing of personal data, please contact:
              </p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 space-y-4 text-slate-800">
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
                    <a href="mailto:support@theparcer.com" className="text-blue-600 hover:underline font-medium">
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

            {/* 21. Platform-Specific Privacy Notice */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                21. Platform-Specific Privacy Notice
              </h2>
              <p>
                The Platform may consist of separate customer, driver/delivery partner and administrative applications. Each application may collect different categories of data based on its functionality. Where a feature requires additional personal data or a new purpose, we may provide an additional or just-in-time privacy notice and, where required, obtain consent before processing the data.
              </p>
            </section>

            {/* 22. Important Operational Disclosures */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                22. Important Operational Disclosures
              </h2>
              <ul className="list-disc pl-5 space-y-2.5 text-slate-700">
                <li>
                  If a customer provides another person&rsquo;s contact details, the customer is responsible for ensuring that the information is provided lawfully and that the person can be informed where required.
                </li>
                <li>
                  Drivers and delivery partners must use customer and recipient information only for legitimate delivery-related purposes and must not retain, copy, sell, disclose or misuse such information.
                </li>
                <li>
                  Business customers may act as the controller/data fiduciary for certain personal data they submit to the Platform. In such cases, the business customer is responsible for having an appropriate legal basis and notices for its own processing.
                </li>
                <li>
                  Ratings, reviews, complaints and safety reports may be retained and used to maintain service quality, safety and fraud prevention.
                </li>
                <li>
                  Aggregated or anonymized information that no longer identifies an individual may be used for analytics, service improvement, research and business planning.
                </li>
              </ul>
            </section>

            {/* 23. Acceptance */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                23. Acceptance
              </h2>
              <p>
                By accessing or using the Platform, you acknowledge that you have read this Policy. Where applicable law requires consent for a particular processing activity, we will request consent through an appropriate mechanism. If you do not agree with the applicable terms of this Policy, you should not use the relevant feature or Service.
              </p>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
