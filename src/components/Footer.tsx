"use client";

import Link from "next/link";

export default function Footer() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        if (typeof window !== 'undefined' && window.location.pathname === '/') {
            e.preventDefault();
            const el = document.getElementById(id);
            if (!el) {
                window.location.href = `/#${id}`;
                return;
            }
            const offset = 100; // account for fixed navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <footer className="py-32 bg-white text-text-main overflow-hidden border-t border-border/50">
            <div className="framer-container">
                {/* Footer Header - Download Block */}
                <div className="text-center max-w-[600px] mx-auto mb-24">
                    <h2 className="text-[40px] md:text-[56px] leading-[1] font-medium tracking-tight mb-8">
                        The smarter way to <span className="text-primary italic">study</span> starts here.
                    </h2>
                    <p className="text-[18px] text-text-muted mb-10">
                        Join thousands of students mastering their subjects with QOOZR.
                    </p>

                    {/* Download Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="https://apps.apple.com/us/app/qoozr-ai-tutor-quiz/id6761049430"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-black text-white px-7 py-4 rounded-full font-bold text-[15px] hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-black/10"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Download for iPhone
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24">
                    {/* Brand Column - Left aligned, enlarged */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-4 mb-8 group">
                            <img 
                                src="/images/logo.png" 
                                alt="Qoozr Logo" 
                                className="w-32 h-32 object-contain transition-transform group-hover:scale-105"
                            />
                            <span className="text-6xl font-bold tracking-tight text-text-main">Qoozr</span>
                        </Link>
                        <p className="text-[16px] text-text-muted max-w-sm leading-relaxed">
                            The ultimate AI-powered study companion. Built to help you quiz smarter, solve homework instantly, and understand more deeply.
                        </p>
                    </div>

                    {/* Links Column - Left aligned */}
                    <div className="md:col-span-1">
                        <div className="grid grid-cols-2 gap-8 md:gap-16">
                            {/* Quick Links */}
                            <div>
                                <h5 className="text-[14px] font-bold text-text-muted/50 uppercase tracking-wider mb-8">Quick Links</h5>
                                <ul className="flex flex-col gap-4">
                                    <li><Link href="/#features" onClick={(e) => scrollToSection(e, 'features')} className="text-[16px] font-medium text-text-main hover:text-primary transition-colors">Features</Link></li>
                                    <li><Link href="/#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="text-[16px] font-medium text-text-main hover:text-primary transition-colors">How It Works</Link></li>
                                    <li><Link href="/#study-goals" onClick={(e) => scrollToSection(e, 'study-goals')} className="text-[16px] font-medium text-text-main hover:text-primary transition-colors">Study Goals</Link></li>
                                    <li><Link href="/#faq" onClick={(e) => scrollToSection(e, 'faq')} className="text-[16px] font-medium text-text-main hover:text-primary transition-colors">FAQs</Link></li>
                                </ul>
                            </div>

                            {/* Support - No duplicate FAQs */}
                            <div>
                                <h5 className="text-[14px] font-bold text-text-muted/50 uppercase tracking-wider mb-8">Support</h5>
                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <Link
                                            href="/founders"
                                            className="text-[16px] font-medium text-text-main hover:text-primary transition-colors"
                                        >
                                            Our Founders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/privacy-policy"
                                            className="text-[16px] font-medium text-text-main hover:text-primary transition-colors"
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/terms"
                                            className="text-[16px] font-medium text-text-main hover:text-primary transition-colors"
                                        >
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/support"
                                            className="text-[16px] font-medium text-text-main hover:text-primary transition-colors"
                                        >
                                            Customer Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-border/10">
                    <p className="text-[14px] text-text-muted/40 font-medium text-center">
                        © 2026 Qoozr. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
