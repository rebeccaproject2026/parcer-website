import { Link } from 'react-router-dom';
import type { View } from '../types';

interface RefundPolicyProps {
  go?: (view: View) => void;
}

export function RefundPolicy({ go: _go }: RefundPolicyProps) {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Header Banner */}
      <section className="relative bg-[#334155] px-5 pt-32 pb-24 md:pt-40 md:pb-28 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
            Cancellation &amp; Refund Policy
          </h1>
        </div>
      </section>

      {/* Main Content Floating Card */}
      <section className="relative z-10 px-5 pb-20 lg:px-8 -mt-12 md:-mt-16">
        <div className="mx-auto max-w-[960px]">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 md:p-14 shadow-[0_15px_45px_rgba(51,65,85,0.08)] space-y-10 text-[15px] sm:text-[16px] leading-relaxed text-slate-700">

            {/* 1. Purpose and Scope */}
            <section className="space-y-4">
              <div className="inline-block rounded-full bg-[#389c8e]/15 px-3.5 py-1 text-xs font-bold text-[#20695f]">
                Policy Overview
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                1. Purpose and Scope
              </h2>
              <p>
                This Cancellation &amp; Refund Policy (&ldquo;<strong className="font-semibold text-slate-900">Policy</strong>&rdquo;) explains when a Parcer customer (&ldquo;<strong className="font-semibold text-slate-900">User</strong>&rdquo;, &ldquo;<strong className="font-semibold text-slate-900">you</strong>&rdquo; or &ldquo;<strong className="font-semibold text-slate-900">your</strong>&rdquo;) may cancel a booking, when cancellation charges may apply, when a refund may be available, and how refunds and payment disputes are handled.
              </p>
              <p>
                This Policy applies to delivery and local goods transportation bookings made through the Parcer mobile application, website or other official Parcer channels. It forms part of Parcer&rsquo;s{' '}
                <Link
                  to="/terms-conditions"
                  className="font-bold text-[#389c8e] hover:underline cursor-pointer"
                >
                  Customer/User Terms &amp; Conditions
                </Link>{' '}
                and should be read together with the{' '}
                <Link
                  to="/privacy-policy"
                  className="font-bold text-[#389c8e] hover:underline cursor-pointer"
                >
                  Privacy Policy
                </Link>
                , Wallet/Payment Policy and service-specific terms.
              </p>
              <p className="bg-slate-50 border-l-4 border-[#389c8e] p-4 rounded-r-lg font-medium text-slate-800 text-sm sm:text-base">
                By placing a booking or making a payment through Parcer, you acknowledge and agree to this Policy.
              </p>
            </section>

            {/* 2. Key Principles */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                2. Key Principles
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Cancellation eligibility depends on the stage of the booking when the cancellation is requested.</li>
                <li>The applicable cancellation charge, if any, will be displayed or communicated through the Platform where reasonably practicable.</li>
                <li>After a Service Partner accepts a booking, begins travelling, reaches pickup, or the service starts, cancellation may result in a charge or no refund.</li>
                <li>A User-caused failed delivery, including an incorrect address, unreachable location or unavailable recipient, may not qualify for a full refund.</li>
                <li>Where Parcer cancels a booking for reasons not attributable to the User, Parcer will generally seek to provide a refund or appropriate alternative remedy, subject to circumstances and applicable law.</li>
                <li>Mandatory consumer rights and remedies are not excluded by this Policy.</li>
              </ul>
            </section>

            {/* 3. Cancellation by the User */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                3. Cancellation by the User
              </h2>
              <div className="space-y-4 pt-2">
                <div className="rounded-2xl bg-slate-50/80 p-5 border border-slate-100 space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    3.1 Before Service Partner Assignment / Acceptance
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-700">
                    Where the Platform allows cancellation before a Service Partner has accepted the booking, the User may generally cancel without a cancellation fee. If payment has already been collected, the eligible amount will be refunded according to this Policy.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50/80 p-5 border border-slate-100 space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    3.2 After Assignment / Acceptance
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-700">
                    If the User cancels after a Service Partner has accepted the booking, has been notified, or is travelling to pickup, a cancellation fee may apply. The fee may be a fixed amount, percentage, service fee or other amount shown in the Platform.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50/80 p-5 border border-slate-100 space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    3.3 After Pickup / Service Commencement
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-700">
                    Once the Service Partner reaches pickup, Goods are handed over, the trip starts, or the service otherwise commences, cancellation will generally not qualify for a refund of the completed or attempted service. Applicable trip, waiting, return or other charges may remain payable.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Cancellation Due to Customer / Recipient Issues */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                4. Cancellation Due to Customer / Recipient Issues
              </h2>
              <p>Cancellation or delivery failure may occur due to customer-related factors, including:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {[
                  'Incorrect, incomplete or unreachable pickup/drop address;',
                  'Incorrect or unreachable contact details;',
                  'User or recipient unavailable during the applicable waiting period;',
                  'Recipient refuses the Goods without a valid service-related reason;',
                  'Goods materially differ from booking information;',
                  'Goods are prohibited, unsafe, oversized, overweight or inadequately packaged;',
                  'User requests an unlawful or unsafe service;',
                  'Any other User-caused circumstance preventing completion.',
                ].map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-slate-50 p-3 text-xs sm:text-sm text-slate-700 border border-slate-100">
                    <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-sm sm:text-[15px] pt-1">
                In these circumstances, Parcer may charge applicable cancellation, waiting, return, handling, toll, parking or other costs. A refund may not be available for amounts attributable to service already attempted or performed.
              </p>
            </section>

            {/* 5. Cancellation by Parcer */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                5. Cancellation by Parcer
              </h2>
              <p>The Company reserves the right to cancel delivery services at its sole discretion for reasons including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                <li>No available Service Partner or vehicle;</li>
                <li>Incorrect or incomplete booking information;</li>
                <li>Inability to contact User or recipient;</li>
                <li>Prohibited, unsafe or unsuitable Goods;</li>
                <li>Vehicle capacity, weight or route limitations;</li>
                <li>Safety or operational concerns;</li>
                <li>Technical, payment or Platform issues;</li>
                <li>Road closures, severe traffic, weather or vehicle failure;</li>
                <li>Force majeure or circumstances beyond reasonable control.</li>
              </ul>
              <p className="pt-2 text-slate-700">
                Where Parcer cancels a prepaid booking for a reason not attributable to the User, Parcer will generally provide a refund of the eligible amount or, where appropriate and accepted by the User, rescheduling or service credit, subject to applicable law.
              </p>
            </section>

            {/* 6. Refund Eligibility */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                6. Refund Eligibility
              </h2>
              <div className="space-y-3">
                <p>
                  Users booking the Parcer service may be required to pay a non-refundable advance at the time of booking. This advance secures your slot and begins the process of service partner assignment.
                </p>
                <p className="font-semibold text-[#20695f] bg-[#e0f5f2] p-3.5 rounded-xl border border-[#8ed8d0]/60">
                  If Parcer fails to assign a service partner due to operational limitations or unavailability, the full advance shall be refunded to the original payment method.
                </p>
                <p>
                  A refund is not automatically available merely because a User changes their mind, does not use the service after booking, misses the pickup/delivery window, or causes the service to fail.
                </p>
                <p>
                  In case of any refunds under special circumstances (after retaining the penalty amount), all such refunds shall be credited to the User&rsquo;s account as per the payment mechanism opted by the User within <strong className="font-semibold text-slate-900">5-7 business days</strong>, or in case of cash on delivery orders, the refund will be credited to the User&rsquo;s Parcer Account/wallet and the User may use such amount for future services on the platform.
                </p>
              </div>
            </section>

            {/* 7. Generally Non-Refundable / Deductible Amounts */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                7. Generally Non-Refundable / Deductible Amounts
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Applicable cancellation fees;</li>
                <li>Waiting charges caused by User/recipient;</li>
                <li>Completed or attempted delivery charges;</li>
                <li>Return, handling, parking, toll or extra-distance charges caused by User/recipient;</li>
                <li>Charges related to prohibited, unsafe, overweight, oversized or inadequately packaged Goods;</li>
                <li>Promotional credits, coupons and referral rewards unless expressly stated otherwise;</li>
                <li>Properly incurred third-party charges that cannot be recovered where the User caused the cancellation.</li>
              </ul>
            </section>

            {/* 8. Refund Calculation */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                8. Refund Calculation
              </h2>
              <p>
                Where a refund is approved, Parcer may deduct applicable cancellation fees, completed-service charges, waiting/return/handling charges, taxes that cannot be reversed, or other properly payable amounts before calculating the net refund.
              </p>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 text-sm text-slate-700">
                <span className="font-semibold text-slate-900 block mb-1">Example:</span>
                If a prepaid booking is cancelled after Service Partner assignment and a cancellation fee is shown in the Platform, the eligible refund will generally be the amount paid less that fee and other properly incurred charges.
              </div>
            </section>

            {/* 9. Refund Method */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                9. Refund Method
              </h2>
              <p>All refunds shall be credited as follows:</p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li><strong className="font-semibold text-slate-900">Original Payment Channel:</strong> Credited back to the source account/card/UPI where technically and legally possible.</li>
                <li><strong className="font-semibold text-slate-900">Parcer Wallet Payments:</strong> Eligible refunds may be returned to the Wallet unless applicable law, payment method or policy requires another method.</li>
                <li><strong className="font-semibold text-slate-900">Cash Bookings:</strong> Where a refund is due, Parcer may use an available digital method or Wallet after verification, subject to applicable law.</li>
                <li><strong className="font-semibold text-slate-900">Promotional Credits:</strong> May be restored as credits rather than cash where the promotion permits.</li>
              </ul>
            </section>

            {/* 10. Refund Processing Time */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                10. Refund Processing Time
              </h2>
              <p>
                Once approved, Parcer will normally initiate a refund within <strong className="font-semibold text-slate-900">5–7 business days</strong> unless a different period is required by a payment provider, investigation or applicable law. The time for funds to appear in the bank/card/payment account depends on the relevant provider.
              </p>
              <p>
                If a refund does not appear after the expected period, contact Support with the booking ID and payment reference.
              </p>
            </section>

            {/* 11. Failed, Duplicate or Reversed Transactions */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                11. Failed, Duplicate or Reversed Transactions
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>If payment appears successful but no booking is created, report it with the payment reference.</li>
                <li>Confirmed duplicate charges will be investigated and the duplicate amount refunded through the applicable channel.</li>
                <li>A failed transaction that is temporarily shown as debited may be reversed automatically by the bank/payment provider.</li>
                <li>Users should verify booking/payment status before making repeated payments.</li>
                <li>Users may need to cooperate with the payment provider or bank in transaction investigations.</li>
              </ul>
            </section>

            {/* 12. Cash Payment Bookings */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                12. Cash Payment Bookings
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>For cash bookings, the User must pay through the cash-payment flow communicated by Parcer.</li>
                <li>If a cancellation fee becomes applicable, Parcer may record it as outstanding.</li>
                <li>Outstanding charges may be collected on a subsequent booking or other permitted payment method.</li>
                <li>Parcer may restrict further bookings until outstanding amounts are settled, subject to law.</li>
                <li>If a cash booking qualifies for a refund, Parcer may credit it to the Wallet or another permitted method after verification.</li>
              </ul>
            </section>

            {/* 13. Wallet Refunds and Credits */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                13. Wallet Refunds and Credits
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Where an eligible refund is credited to the Parcer Wallet, it may be used for future eligible Parcer services subject to the Wallet/Payment Policy.</li>
                <li>Refund credits may not be withdrawn as cash unless the Wallet Policy and law permit it.</li>
                <li>Promotional credits are different from refundable paid balances and may have separate expiry/usage conditions.</li>
                <li>Treatment of remaining balances after account suspension or closure is governed by the Wallet/Payment Policy and applicable law.</li>
              </ul>
            </section>

            {/* 14. Promotions, Coupons and Referral Benefits */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                14. Promotions, Coupons and Referral Benefits
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Promotions are subject to their individual conditions.</li>
                <li>Unless expressly stated otherwise, promotional benefits are non-transferable and non-refundable.</li>
                <li>If a booking using a promotion is cancelled, the promotional portion may not be restored.</li>
                <li>Parcer may withdraw or adjust benefits obtained through fraud, abuse or multiple accounts.</li>
              </ul>
            </section>

            {/* 15. Refund Request Procedure */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                15. Refund Request Procedure &amp; Dispute Resolution
              </h2>
              <p>
                If the User encounters or faces any issues with the service, they may contact the customer support team at{' '}
                <a href="mailto:support@theparcer.com" className="font-semibold text-[#389c8e] hover:underline">
                  support@theparcer.com
                </a>
                . While refunds are not offered automatically, the Company will investigate and, if feasible, provide an alternative solution, such as rescheduling the delivery or issuing a service credit.
              </p>
              <p>
                Any disputes arising from the services provided or this Policy shall be governed by the laws of India. The courts of <strong className="font-semibold text-slate-900">Ahmedabad, Gujarat</strong> shall have exclusive jurisdiction over any legal disputes or claims related to the services.
              </p>
            </section>

            {/* 16. Third-Party Payment Providers */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                16. Third-Party Payment Providers
              </h2>
              <p>
                Payments may be processed through gateways, banks, card networks, UPI providers or other payment services. Refund initiation and posting may therefore depend on those providers. Parcer will reasonably assist with issues within its control.
              </p>
            </section>

            {/* 17. Customer Acknowledgement */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                17. Customer Acknowledgement
              </h2>
              <p className="font-medium text-slate-800">
                By placing a booking, making a payment or using Parcer, you acknowledge that you have read and understood this Policy and agree to the cancellation, refund, payment and dispute procedures described above.
              </p>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}
