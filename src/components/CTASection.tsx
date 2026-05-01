"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden bg-[#131515]">
            {/* Background Glow Image */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                <img src="/images/bg-glows.png" className="w-full h-full object-cover" alt="" />
            </div>

            <div className="framer-container relative z-10">
                {/* Scrolling headline effect */}
                <div className="mb-10 overflow-hidden">
                    {[0, 1, 2].map((i) => (
                        <motion.h2
                            key={i}
                            initial={{ opacity: i === 1 ? 1 : 0.15 }}
                            whileInView={{ opacity: i === 1 ? 1 : 0.15 }}
                            viewport={{ once: true }}
                            className={`text-[48px] md:text-[64px] lg:text-[80px] leading-[1] font-medium tracking-tighter text-center ${i === 1 ? "text-white" : "text-white/15"
                                }`}
                        >
                            The smarter way to study starts here
                        </motion.h2>
                    ))}
                </div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-[18px] text-white/50 max-w-[500px] mx-auto mb-12"
                >
                    Get personalized AI quizzes, Snap & Solve homework help, and build your Brain Power.
                </motion.p>

                {/* Download buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-0"
                >
                    <Link
                        href="https://apps.apple.com/us/app/qoozr-ai-tutor-quiz/id6761049430"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black px-8 py-4 rounded-full font-bold text-[15px] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2.5"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                        Download for iPhone
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
