import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Founders — Qoozr",
    description: "Meet the passionate team behind Qoozr, the AI-powered learning platform helping students master any subject.",
};

export default function FoundersPage() {

    return (
        <main className="min-h-screen bg-white">
            {/* Navbar back link */}
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
            <section className="pt-40 pb-24 bg-white">
                <div className="framer-container text-center max-w-[700px] mx-auto">
                    <div className="inline-block bg-black/5 border border-border/50 rounded-full px-5 py-2 text-[14px] font-bold text-text-muted mb-8 tracking-wide uppercase">
                        Our Vision
                    </div>
                    <h1 className="text-[56px] md:text-[72px] leading-[1] font-medium tracking-tighter text-text-main mb-8">
                        The heart behind <span className="text-primary italic">Qoozr</span>
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-text-muted leading-relaxed">
                        Qoozr was born from a shared belief: that education is the most powerful tool we have to transform the world.
                    </p>
                </div>
            </section>

            {/* Founder Note Section */}
            <section className="pb-40">
                <div className="framer-container">
                    {/* Founder Note */}
                    <div className="max-w-[850px] mx-auto bg-[#f9f9f9] rounded-[48px] p-12 md:p-20 border border-border/30 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
                        
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 text-primary">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            
                            <h2 className="text-[32px] md:text-[40px] font-medium text-text-main tracking-tight leading-[1.2] mb-8">
                                A Note from the <span className="text-primary italic">Founders</span>
                            </h2>
                            
                            <div className="space-y-6 text-[18px] md:text-[20px] text-text-muted leading-relaxed font-medium">
                                <p>
                                    At Qoozr, we believe that education is the ultimate lever for human potential. Our journey began with a simple but profound realization: that quality learning shouldn&apos;t just be about passing tests, but about unlocking doors.
                                </p>
                                <p className="text-text-main">
                                    We are on a mission to <span className="text-primary">accelerate social and financial abundance</span> through quality learning that our app facilitates. By putting a world-class, AI-powered tutor in every student&apos;s pocket, we are breaking down the barriers that have historically limited opportunity.
                                </p>
                                <p>
                                    When students master subjects faster and more deeply, they don&apos;t just improve their grades — they expand their horizons. They gain the confidence to build, the knowledge to lead, and the tools to create a more abundant future for themselves and their communities.
                                </p>
                            </div>
                            
                            <div className="mt-12 flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <div className="w-12 h-12 bg-primary rounded-full border-4 border-[#f9f9f9] flex items-center justify-center text-white font-bold text-xs">K</div>
                                    <div className="w-12 h-12 bg-accent rounded-full border-4 border-[#f9f9f9] flex items-center justify-center text-white font-bold text-xs">Q</div>
                                </div>
                                <div>
                                    <p className="text-[15px] font-bold text-text-main">Kavuma & The Team</p>
                                    <p className="text-[13px] text-text-muted font-medium uppercase tracking-wider">Founding Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Statement (Existing Black Card) */}
                    <div className="max-w-[850px] mx-auto mt-24 text-center bg-[#0e1010] rounded-[40px] p-16">
                        <p className="text-[13px] font-bold text-white/30 uppercase tracking-wider mb-6">Our Mission</p>
                        <p className="text-[28px] md:text-[36px] leading-[1.3] font-medium text-white tracking-tight">
                            &ldquo;We believe AI can be the world&apos;s greatest tutor — personalized, patient, and always available for every student who needs it.&rdquo;
                        </p>
                        <p className="text-[16px] text-white/40 mt-8 font-medium">— The Qoozr Founders</p>
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
