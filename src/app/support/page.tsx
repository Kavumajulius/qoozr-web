import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customer Support — Qoozr: AI Tutor & Quiz",
    description: "Need help with Qoozr: AI Tutor & Quiz? Contact our support team for technical assistance, billing inquiries, or privacy requests.",
};

export default function SupportPage() {
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
                        Qoozr: AI Tutor & Quiz
                    </div>
                    <h1 className="text-[56px] md:text-[72px] leading-[1] font-medium tracking-tighter text-white mb-8">
                        Customer <span className="text-accent italic">Support</span>
                    </h1>
                    <p className="text-[18px] text-white/50 leading-relaxed mx-auto max-w-[600px]">
                        We&apos;re here to help you get the most out of your learning journey. Choose a support channel below to get started.
                    </p>
                </div>
            </section>

            {/* Support Channels */}
            <section className="py-24">
                <div className="framer-container max-w-[900px] mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Email Support */}
                        <div className="bg-[#f9f9f9] rounded-[40px] p-10 border border-border/30 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-[28px] font-medium text-text-main tracking-tight mb-4">Email Support</h2>
                            <p className="text-[16px] text-text-muted leading-relaxed mb-10">
                                For technical issues, subscription help, or general inquiries, our team is ready to assist you.
                            </p>
                            <a 
                                href="mailto:support@qoozrapp.com"
                                className="w-full md:w-auto inline-flex items-center justify-center bg-black text-white px-10 py-5 rounded-full font-bold text-[16px] hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-black/10 min-h-[56px] min-w-[200px]"
                            >
                                Email support@qoozrapp.com
                            </a>
                        </div>

                        {/* Privacy Inquiries */}
                        <div className="bg-[#f9f9f9] rounded-[40px] p-10 border border-border/30 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h2 className="text-[28px] font-medium text-text-main tracking-tight mb-4">Privacy Inquiries</h2>
                            <p className="text-[16px] text-text-muted leading-relaxed mb-10">
                                Contact us regarding your personal data, account deletion requests, or privacy concerns.
                            </p>
                            <a 
                                href="mailto:privacyinquiry@qoozrapp.com"
                                className="w-full md:w-auto inline-flex items-center justify-center bg-white border border-border text-text-main px-10 py-5 rounded-full font-bold text-[16px] hover:bg-[#f7f7f7] active:scale-95 transition-all min-h-[56px] min-w-[200px]"
                            >
                                Email Privacy Team
                            </a>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-20 text-center">
                        <p className="text-[14px] text-text-muted font-medium uppercase tracking-widest mb-4">Response Time</p>
                        <p className="text-[18px] text-text-main font-medium">
                            We aim to respond to all inquiries within <span className="text-primary italic">24-48 hours</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer bottom */}
            <div className="border-t border-border/30 py-10">
                <div className="framer-container text-center">
                    <p className="text-[14px] text-text-muted/40 font-medium">© 2026 Qoozr. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}
