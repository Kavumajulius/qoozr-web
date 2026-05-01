import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Subscriptions Policy — Qoozr: AI Tutor & Quiz",
    description: "Learn about Qoozr's subscription plans, pricing, cancellation rules, and payment infrastructure.",
};

export default function SubscriptionsPolicyPage() {
    const sections = [
        {
            title: "The Subscription Infrastructure",
            content: [
                "All payments within Qoozr: AI Tutor & Quiz are securely processed through Apple's App Store and Google's Play Store. We use RevenueCat as our backend subscription management system to reliably deliver your premium access.",
                "Qoozr does not handle, process, or store raw credit card data or banking information. Your purchases are permanently mathematically linked to both your Store ID (Apple ID or Google Account) and your internal Qoozr Account ID."
            ],
        },
        {
            title: "Available Payment Plans",
            content: [
                "The app currently offers three specific entitlement tiers designed to fit your learning needs:",
                [
                    "7-Day Free Trial (Rolling to Monthly): Users can start with a 7-day free trial to fully test all premium features. If you do not cancel before the 7-day period ends, it automatically converts into a standard Monthly Auto-Renewing Subscription.",
                    "Monthly Pro Subscription: A standard auto-renewing monthly plan (dynamically priced, approx. $12.99 USD/month depending on your region).",
                    "Annual Pro Subscription: A discounted auto-renewing yearly plan billed once every 12 months (dynamically priced, approx. $109.99 USD/year depending on your region)."
                ]
            ],
        },
        {
            title: "What the Subscription Unlocks",
            content: [
                "Subscribing to any paid tier, or initiating the 7-day free trial, grants you \"Pro\" status across the platform. Qoozr Pro unlocks:",
                [
                    "Unlimited AI quiz generation across all available subjects",
                    "Advanced analytics, QuickScore tracking, and detailed performance insights",
                    "Zero restrictions on any core learning modules",
                    "Unlimited use of the AI Scan (Homework Helper) feature"
                ]
            ],
        },
        {
            title: "Cancellation Rules",
            content: [
                "We believe in keeping things simple and giving you complete control over your subscription:",
                [
                    "Cancel Anytime: You can cancel your active subscription or free trial at any time, with no hidden fees or penalties.",
                    "Where to Cancel: Because Apple and Google control the billing infrastructure, you must cancel your subscription directly through your device's native settings. For iOS users, go to your Apple ID Subscriptions. For Android users, go to your Google Play Subscriptions. Please note that the app itself does not have a direct \"cancel my subscription\" button, as this is governed and restricted by Apple and Google policies.",
                    "End of Billing Cycle Access: If you cancel your subscription, you are not immediately locked out. You will retain full, uninterrupted access to all Pro features until the exact expiration date of your current paid billing cycle (or the end of your 7-day trial)."
                ]
            ],
        },
        {
            title: "Restoring Purchases",
            content: [
                "Your Pro status is securely tied to your Store ID. If you delete the app, upgrade to a new phone, or log out of your account, you will never lose a subscription you paid for.",
                "Simply use the \"Restore Purchases\" button on the app's paywall screen. Qoozr will securely ping the App Store or Play Store, verify your active receipt via RevenueCat, and instantly restore your premium access at no additional charge, provided your plan has not expired."
            ],
        },
        {
            title: "Refunds",
            content: [
                "Because payments are processed directly by Apple and Google, Qoozr cannot issue refunds directly from our system.",
                "If you believe you were charged in error, or if you would like to request a refund for any reason, you must submit your request directly to Apple (via reportaproblem.apple.com) or Google Play Customer Support. Their respective support teams handle all refund decisions."
            ],
        }
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
                        Effective: May 1, 2026
                    </div>
                    <h1 className="text-[56px] md:text-[72px] leading-[1] font-medium tracking-tighter text-white mb-8">
                        Subscriptions <span className="text-primary italic">Policy</span>
                    </h1>
                    <p className="text-[18px] text-white/50 leading-relaxed mx-auto max-w-[600px]">
                        A transparent and comprehensive breakdown of how our payment plans, free trials, and subscription infrastructure work.
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
                                    <span className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center text-[15px] font-bold flex-shrink-0">
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

                    {/* Contact Box */}
                    <div className="mt-20 bg-[#f9f9f9] rounded-[32px] p-12 border border-border/30 text-center flex flex-col items-center">
                        <h3 className="text-[24px] font-medium text-text-main mb-4">Have billing questions?</h3>
                        <p className="text-[16px] text-text-muted leading-relaxed mb-8 max-w-[500px]">
                            If you have any questions about your subscription status, trials, or our billing infrastructure, our support team is ready to help.
                        </p>
                        <a
                            href="mailto:support@qoozrapp.com"
                            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold text-[15px] hover:scale-[1.02] active:scale-95 transition-all"
                        >
                            Contact Support
                        </a>
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
