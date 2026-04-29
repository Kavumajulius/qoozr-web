import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Founders — Qoozr",
    description: "Meet the passionate team behind Qoozr, the AI-powered learning platform helping students master any subject.",
};

export default function FoundersPage() {
    const founders = [
        {
            name: "Founder Name",
            role: "CEO & Co-Founder",
            bio: "A passionate educator and technologist with a vision to democratize quality learning through artificial intelligence. Previously worked on EdTech solutions that reached over 500,000 students globally.",
            image: null,
            initials: "FN",
            color: "bg-primary",
        },
        {
            name: "Founder Name",
            role: "CTO & Co-Founder",
            bio: "A seasoned software engineer with deep expertise in machine learning and mobile development. Believes that the right technology can fundamentally transform how people learn and grow.",
            image: null,
            initials: "FN",
            color: "bg-accent",
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Navbar back link */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/30">
                <div className="framer-container flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-primary rounded-[10px] flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
                            Q
                        </div>
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
                        The Team
                    </div>
                    <h1 className="text-[56px] md:text-[72px] leading-[1] font-medium tracking-tighter text-text-main mb-8">
                        Meet the <span className="text-primary italic">founders</span> of Qoozr
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-text-muted leading-relaxed">
                        Qoozr was born from a shared belief: that every student deserves a smarter, more personalized way to learn. We built the tool we wished we had.
                    </p>
                </div>
            </section>

            {/* Founders Grid */}
            <section className="pb-40">
                <div className="framer-container">
                    <div className="grid md:grid-cols-2 gap-10 max-w-[900px] mx-auto">
                        {founders.map((founder, i) => (
                            <div
                                key={i}
                                className="bg-[#f9f9f9] rounded-[40px] p-10 border border-border/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                            >
                                {/* Avatar */}
                                <div className={`w-20 h-20 ${founder.color} rounded-[24px] flex items-center justify-center text-white text-3xl font-bold mb-8 shadow-lg`}>
                                    {founder.initials}
                                </div>

                                <p className="text-[13px] font-bold text-text-muted/50 uppercase tracking-wider mb-2">{founder.role}</p>
                                <h2 className="text-[32px] font-medium text-text-main tracking-tight mb-6">{founder.name}</h2>
                                <p className="text-[16px] text-text-muted leading-relaxed">{founder.bio}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mission Statement */}
                    <div className="max-w-[800px] mx-auto mt-24 text-center bg-[#0e1010] rounded-[40px] p-16">
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
