"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Lightbulb } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-[150px] pb-[200px] overflow-hidden bg-[#0e1010]">
            {/* High-Fidelity Background Human Element + Glow */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    fill
                    className="object-cover object-[75%]"
                    alt="Hero Background"
                    priority
                />
                {/* Dark gradients for content readability - matching the reference's left-side darkness */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e1010] via-[#0e1010]/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0e1010] z-10" />
            </div>

            {/* Visual mask for smooth transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-white via-white/80 to-transparent z-20" />

            <div className="framer-container text-center relative z-20">
                {/* New Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-12"
                >
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 flex items-center justify-center text-white/90 text-[14px] font-medium shadow-2xl">
                        <span>New: Quick-Scan is here!</span>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-[64px] md:text-[90px] lg:text-[120px] leading-[0.85] mb-12 text-white font-medium tracking-tighter"
                >
                    Learn <span className="text-white/30 italic">Smarter</span>.<br />
                    Scan <span className="text-white">Everything</span>.
                </motion.h1>

                {/* Hero Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="max-w-[650px] mx-auto text-[18px] md:text-[22px] text-white/50 leading-relaxed mb-14 tracking-tight"
                >
                    Your 24/7 AI-powered study companion. Solve homework instantly with <span className="text-white font-medium">Snap & Solve</span>, and take personalized quizzes tailored to your age, level, and country.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="flex justify-center mb-32"
                >
                    <Link
                        href="#how-it-works"
                        className="bg-white text-black px-12 py-5 rounded-full font-bold text-[17px] flex items-center gap-3 hover:scale-[1.05] active:scale-95 transition-all shadow-xl shadow-white/5 group"
                    >
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center group-hover:rotate-12 transition-transform">
                            <Lightbulb className="w-3.5 h-3.5 text-white" />
                        </div>
                        How it works
                    </Link>
                </motion.div>

                {/* Mockup Area */}
                <div className="relative max-w-[800px] mx-auto mt-20">
                    {/* Floating Card: Scan & Solve */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-12 top-20 z-20 hidden lg:block"
                    >
                        <div className="bg-white rounded-[24px] p-6 shadow-2xl flex items-center gap-4 border border-border/50">
                            <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <div className="text-[14px] font-bold text-black font-sans">Scan & Solve</div>
                                <div className="text-[12px] text-text-muted font-sans">Instant AI answers</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Central Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative z-10 mx-auto w-[320px] aspect-[9/18.5] bg-black rounded-[50px] border-[8px] border-[#222] shadow-framer overflow-hidden"
                    >
                        <div className="absolute top-0 inset-x-0 h-7 bg-white z-30 flex justify-center items-end pb-1">
                            <div className="w-20 h-4 bg-black/10 rounded-full" />
                        </div>
                        <img
                            src="/images/qoozrappscreens/home.png"
                            alt="Qoozr App Mockup"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Floating Card: Study Paths */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute -right-12 top-40 z-20 hidden lg:block"
                    >
                        <div className="bg-white rounded-[24px] p-6 shadow-2xl flex items-center gap-4 border border-border/50">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                </svg>
                            </div>
                            <div className="text-left font-sans">
                                <div className="text-[14px] font-bold text-black tracking-tight">Study Paths</div>
                                <div className="text-[12px] text-text-muted">Personalized for you</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* App Rating Pill */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute left-1/2 bottom-[-100px] -translate-x-1/2 z-30 bg-white shadow-framer rounded-full px-8 py-3.5 flex items-center gap-3 border border-border/10 whitespace-nowrap"
                    >
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-3.5 h-3.5 text-accent fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-[13px] font-bold text-black font-sans">4.9 Rating (based on 2k+ reviews)</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
