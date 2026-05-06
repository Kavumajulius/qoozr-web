import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "End-User License Agreement (EULA) — Qoozr",
    description: "Read the End-User License Agreement for Qoozr mobile application.",
};

export default function EULAPage() {
    const sections = [
        {
            title: "1. Acknowledgement",
            content: [
                "You and the Developer acknowledge that this EULA is concluded between you and the Developer only, and not with Apple Inc. (\"Apple\"). The Developer, not Apple, is solely responsible for the Licensed Application and the content thereof. This EULA does not provide for usage rules for the Licensed Application that are in conflict with the Apple Media Services Terms and Conditions as of the Effective Date (which you acknowledge you have had the opportunity to review)."
            ],
        },
        {
            title: "2. Scope of License",
            content: [
                "The license granted to you for the Licensed Application is limited to a non-transferable license to use the Licensed Application on any Apple-branded Products that you own or control and as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions, except that such Licensed Application may be accessed and used by other accounts associated with the purchaser via Family Sharing or volume purchasing."
            ],
        },
        {
            title: "3. Maintenance and Support",
            content: [
                "The Developer is solely responsible for providing any maintenance and support services with respect to the Licensed Application, as specified in this EULA or as required under applicable law. You and the Developer acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed Application."
            ],
        },
        {
            title: "4. Warranty",
            content: [
                "The Developer is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. In the event of any failure of the Licensed Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the Licensed Application to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Licensed Application, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be the Developer’s sole responsibility."
            ],
        },
        {
            title: "5. Product Claims",
            content: [
                "You and the Developer acknowledge that the Developer, not Apple, is responsible for addressing any claims of the End-User or any third party relating to the Licensed Application or the End-User’s possession and/or use of that Licensed Application, including, but not limited to:",
                [
                    "product liability claims;",
                    "any claim that the Licensed Application fails to conform to any applicable legal or regulatory requirement; and",
                    "claims arising under consumer protection, privacy, or similar legislation, including in connection with the Licensed Application’s use of the HealthKit and HomeKit frameworks (if applicable)."
                ],
                "This EULA does not limit the Developer's liability to the End-User beyond what is permitted by applicable law."
            ],
        },
        {
            title: "6. Intellectual Property Rights",
            content: [
                "You and the Developer acknowledge that, in the event of any third party claim that the Licensed Application or the End-User’s possession and use of that Licensed Application infringes that third party’s intellectual property rights, the Developer, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim."
            ],
        },
        {
            title: "7. Legal Compliance",
            content: [
                "You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties."
            ],
        },
        {
            title: "8. Developer Name and Address",
            content: [
                "Any questions, complaints or claims with respect to the Licensed Application should be directed to:",
                [
                    "Developer: Kavuma Kigere Julius",
                    "Address: P.O. Box 71261 Clock Tower, Kampala Uganda",
                    "Email: support@qoozrapp.com",
                    "Telephone: +256 782352873"
                ]
            ],
        },
        {
            title: "9. Third Party Terms of Agreement",
            content: [
                "You must comply with applicable third-party terms of agreement when using the Licensed Application (e.g., your wireless data service agreement). You must not be in violation of your wireless data service agreement when using the Licensed Application."
            ],
        },
        {
            title: "10. Third Party Beneficiary",
            content: [
                "You and the Developer acknowledge and agree that Apple, and Apple’s subsidiaries, are third party beneficiaries of this EULA, and that, upon your acceptance of the terms and conditions of this EULA, Apple will have the right (and will be deemed to have accepted the right) to enforce this EULA against you as a third party beneficiary thereof."
            ],
        },
        {
            title: "11. Subscription Terms (Auto-Renewable)",
            content: [
                "Qoozr offers auto-renewable subscriptions to unlock premium \"Pro\" features. By subscribing to Qoozr Pro, you agree to the following:",
                [
                    "Subscription Titles: Qoozr Pro Monthly, Qoozr Pro Annual, or Qoozr Pro Trial (3-Day Trial).",
                    "Subscription Length: Subscriptions are available on a monthly or annual basis.",
                    "Price: The price of the subscription is clearly displayed within the Licensed Application at the time of purchase.",
                    "Auto-Renewal: Your subscription will automatically renew at the end of each billing cycle (monthly or annually) unless you cancel it at least 24 hours before the end of the current period.",
                    "Billing: Payment will be charged to your Apple ID account at the confirmation of purchase or after the expiration of the 3-Day Free Trial (if applicable).",
                    "Cancellation: You can manage and cancel your subscription at any time via your App Store Account Settings.",
                    "Privacy: Your use of the application is also governed by our Privacy Policy, which can be found at: https://qoozrapp.com/privacy-policy"
                ]
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/30">
                <div className="framer-container flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-2 group">
                        <img 
                            src="/images/logo.png" 
                            alt="Qoozr Logo" 
                            className="w-12 h-12 object-contain drop-shadow-sm transition-transform group-hover:scale-105"
                        />
                        <span className="text-xl font-bold tracking-tight text-text-main">Qoozr</span>
                    </Link>
                    <Link
                        href="/"
                        className="text-[15px] font-bold text-text-muted hover:text-text-main transition-colors flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-40 pb-16 bg-[#0e1010]">
                <div className="framer-container max-w-[760px] mx-auto text-center">
                    <div className="inline-block bg-white/10 border border-white/10 rounded-full px-5 py-2 text-[13px] font-bold text-white/50 mb-8 tracking-wide uppercase">
                        Last Updated: May 6, 2026
                    </div>
                    <h1 className="text-[56px] md:text-[72px] leading-[1] font-medium tracking-tighter text-white mb-8">
                        End-User License <span className="text-accent italic">Agreement</span>
                    </h1>
                    <p className="text-[18px] text-white/50 leading-relaxed mx-auto max-w-[600px]">
                        This EULA is a legal agreement between you and Kavuma Kigere Julius for the use of the Qoozr mobile application.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-24">
                <div className="framer-container max-w-[800px] mx-auto">
                    <div className="space-y-20">
                        {sections.map((section, i) => (
                            <div key={i} className="border-b border-border/20 pb-20 last:border-none">
                                <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center">
                                    <span className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center text-[15px] font-bold flex-shrink-0">
                                        {i + 1}
                                    </span>
                                    <h2 className="text-[32px] font-medium text-text-main tracking-tight">{section.title}</h2>
                                </div>
                                <div className="px-4 flex flex-col items-center gap-6">
                                    {section.content.map((block, idx) => (
                                        Array.isArray(block) ? (
                                            <div key={idx} className="w-full max-w-[640px] flex justify-center">
                                                <ul className="list-disc pl-6 text-left text-[16px] text-text-muted leading-relaxed space-y-3 w-fit">
                                                    {block.map((item, itemIdx) => (
                                                        <li key={itemIdx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            <p key={idx} className="text-[16px] text-text-muted leading-relaxed text-center max-w-[680px]">
                                                {block}
                                            </p>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Acceptance */}
                    <div className="mt-20 border-t border-border/20 pt-20 text-center">
                        <p className="text-[18px] font-medium text-text-main mb-4">
                            By using Qoozr, you signify your acceptance of this EULA.
                        </p>
                    </div>

                    {/* Contact Box */}
                    <div className="mt-20 bg-[#f9f9f9] rounded-[32px] p-12 border border-border/30 text-center flex flex-col items-center">
                        <h3 className="text-[24px] font-medium text-text-main mb-4">Have questions about our EULA?</h3>
                        <p className="text-[16px] text-text-muted leading-relaxed mb-8 max-w-[500px]">
                            We're dedicated to ensuring you fully understand these agreements. Reach out to our support team at any time for clarification.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="mailto:support@qoozrapp.com"
                                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-[15px] hover:scale-[1.02] active:scale-95 transition-all"
                            >
                                Contact Support
                            </a>
                            <Link
                                href="/privacy-policy"
                                className="inline-flex items-center gap-2 bg-white border border-border text-text-main px-8 py-4 rounded-full font-bold text-[15px] hover:bg-[#f7f7f7] transition-all"
                            >
                                View Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="border-t border-border/30 py-10">
                <div className="framer-container text-center">
                    <p className="text-[14px] text-text-muted/40 font-medium">© 2026 Qoozr. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}
