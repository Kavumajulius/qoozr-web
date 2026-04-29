"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollFloat from "./ScrollFloat";

const suggestions = [
    {
        title: "Snap & Solve",
        description: "Get instant step-by-step solutions for any problem.",
        image: "/images/smart_assist_sarah.png",
        badge: "AI-Powered",
        label: "Sarah - Medical Student"
    },
    {
        title: "QuickScore",
        description: "Real-time mastery tracking and Brain Power rating.",
        image: "/images/smart_assist_james.png",
        badge: "Smart Stats",
        label: "James - Graduate Student"
    },
    {
        title: "AI Study Library",
        description: "Save explanations to review anytime, even offline.",
        image: "/images/smart_assist_elena.png",
        badge: "Persistent",
        label: "Elena - Researcher"
    },
    {
        title: "5-Min Sprints",
        description: "Micro-learning sessions designed for your busy life.",
        image: "/images/smart_assist_mark.png",
        badge: "Fast Pace",
        label: "Mark - Barista & Learner"
    },
];

export default function SmartAssist() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="framer-container">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center mb-8"
                >
                    <div className="bg-black/5 border border-black/5 rounded-full px-5 py-2 text-[14px] font-bold text-black/40 tracking-wide uppercase">
                        Smarter learning, less thinking
                    </div>
                </motion.div>

                {/* Headline */}
                <h2 className="text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] font-medium text-black tracking-tighter text-center mb-6">
                    <ScrollFloat stagger={0.025} animationDuration={1.1} ease="power3.out">
                        AI suggestions that adjust to your
                    </ScrollFloat>
                    {" "}
                    <span className="opacity-60 italic">
                        <ScrollFloat stagger={0.03} animationDuration={1.2} ease="power3.out">
                            learning
                        </ScrollFloat>
                    </span>
                </h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center text-[18px] text-black/50 max-w-[540px] mx-auto mb-8"
                >
                    QOOZR puts a personal AI tutor in your pocket, tailored precisely to your age, level, and curriculum for 100+ countries.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center mb-20"
                >
                    <Link
                        href="#"
                        className="bg-black text-white px-8 py-4 rounded-full font-bold text-[15px] hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
                    >
                        See how suggestions work
                    </Link>
                </motion.div>

                {/* 2x2 Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                    {suggestions.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8 }}
                            className="relative aspect-[4/5] rounded-[48px] overflow-hidden group shadow-xl transition-shadow duration-500 cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={s.image}
                                alt={s.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

                            {/* Content */}
                            <div className="absolute inset-0 z-20 p-10 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-white/80 text-[14px] font-medium tracking-tight">
                                        {s.label.split(' - ')[0]} <span className="text-white/30 ml-1">- {s.label.split(' - ')[1]}</span>
                                    </span>
                                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 text-[11px] font-bold text-white tracking-wide uppercase">
                                        {s.badge}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[28px] font-bold text-white mb-3 tracking-tight leading-tight">{s.title}</h3>
                                    <p className="text-white/70 text-[16px] leading-relaxed font-medium max-w-[280px]">
                                        {s.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
