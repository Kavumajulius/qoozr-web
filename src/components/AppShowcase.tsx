"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const checklistItems = [
    { label: "Mathematics quiz", done: true },
    { label: "Science review", done: true },
    { label: "History flashcards", done: false },
    { label: "Physics problems", done: true },
    { label: "English comprehension", done: false },
    { label: "Chemistry lab notes", done: true },
];

export default function AppShowcase() {
    return (
        <section className="relative py-0 overflow-hidden bg-[#0e1010]">
            {/* Background Glow Image - Refined Orange Theme */}
            <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none scale-110">
                <img src="/images/bg-glows.png" className="w-full h-full object-cover" alt="" />
            </div>

            {/* Gradient Overlay for transitions */}
            <div className="absolute top-0 inset-x-0 h-[200px] bg-gradient-to-b from-white to-transparent opacity-5 z-10" />

            <div className="framer-container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 py-32">
                    {/* Left — Phone Mockup Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 flex justify-center"
                    >
                        <div className="relative">
                            {/* Phone frame */}
                            <div className="w-[280px] h-[560px] bg-gradient-to-b from-[#1c1f1f] to-[#0e1010] rounded-[40px] border border-white/10 shadow-2xl shadow-black/50 p-1.5 overflow-hidden">
                                <img
                                    src="/images/qoozrappscreens/appshowcase.png"
                                    alt="Qoozr Showcase Mockup"
                                    className="w-full h-full object-cover rounded-[34px]"
                                />
                            </div>

                            {/* Floating rating badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute -bottom-6 -right-8 bg-white rounded-2xl px-5 py-3 shadow-xl shadow-black/20"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <span className="text-[13px] font-bold text-text-main">4.7</span>
                                    <span className="text-[11px] text-text-muted">(125 reviews)</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right — Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 max-w-[500px]"
                    >
                        <p className="text-white/50 text-[15px] font-medium mb-6">
                            Master your subjects with a system built for your pace. From personalized AI-powered quizzes to instant Scan & Solve answers, Qoozr helps you build progress that lasts.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-10">
                            <Link
                                href="https://apps.apple.com/us/app/qoozr-ai-tutor-quiz/id6761049430"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black px-7 py-4 rounded-full font-bold text-[15px] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2.5"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
                                Download for iPhone
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
