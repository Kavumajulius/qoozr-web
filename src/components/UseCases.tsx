"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "./ScrollFloat";

const useCases = [
    {
        tab: "Students",
        image: "/images/habit-girl.png",
        badges: ["Exam Prep", "AI Quiz"],
        description: "Perfect for students preparing for exams who need targeted practice and instant help with tough homework problems.",
        stat: "Exam readiness",
        statValue: "94%",
        features: ["Snap & Solve", "Mastery Tracking", "7-Language Support"],
        cardText: "Your AI exam prep companion — practice smarter, not harder",
    },
    {
        tab: "Self-Learners",
        image: "/images/habit-library.png",
        badges: ["Skill Building", "Deep Work"],
        description: "For those building new skills at their own pace. Build a personal study library of AI-powered solutions.",
        stat: "Skill retention",
        statValue: "89%",
        features: ["Custom Quizzes", "Study Library", "Offline Access"],
        cardText: "Build skills at your own pace with personalized AI quizzes",
    },
    {
        tab: "Lifelong Learners",
        image: "/images/habit-notebook.png",
        badges: ["Stay Sharp", "Daily Habit"],
        description: "Stay mentally sharp with 5-minute study sprints and daily Brain Power tracking across 30+ subjects.",
        stat: "Daily Engagement",
        statValue: "92%",
        features: ["5-Minute Sprints", "Brain Power Stats", "30+ Subjects"],
        cardText: "Keep your mind sharp with daily 5-minute learning sprints",
    },
    {
        tab: "Parents",
        image: "/images/habit-evening.png",
        badges: ["Family Support", "Age-Smart"],
        description: "Support your child's education with age-appropriate content tailored to their local school curriculum.",
        stat: "Child Progress",
        statValue: "88%",
        features: ["Age-Smart Levels", "Local Curriculum", "Progress Reports"],
        cardText: "Support your child's learning journey with age-appropriate content",
    },
    {
        tab: "Enthusiasts",
        image: "/images/habit-library.png",
        badges: ["Knowledge", "Global"],
        description: "For curious minds exploring 400+ subtopics globally. Access localized content from 100+ countries.",
        stat: "Global Knowledge",
        statValue: "100+",
        features: ["100+ Countries", "400+ Subtopics", "AI Explanations"],
        cardText: "Explore global knowledge with AI-powered explanations",
    },
];

export default function UseCases() {
    const [activeTab, setActiveTab] = useState(0);
    const active = useCases[activeTab];

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center mb-8"
                >
                    <div className="bg-black/5 border border-black/5 rounded-full px-5 py-2 text-[14px] font-bold text-black/40 tracking-wide uppercase">
                        Fits every lifestyle
                    </div>
                </motion.div>

                {/* Headline */}
                <h2 className="text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] font-medium text-black tracking-tighter text-center mb-16 px-4">
                    <ScrollFloat stagger={0.025} animationDuration={1.1} ease="power3.out">
                        Adapted for the way you
                    </ScrollFloat>
                    <span className="inline-block">&nbsp;</span>
                    <span className="italic opacity-60">
                        <ScrollFloat stagger={0.04} animationDuration={1.2} ease="power3.out">
                            learn
                        </ScrollFloat>
                    </span>
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {useCases.map((uc, i) => (
                        <button
                            key={uc.tab}
                            onClick={() => setActiveTab(i)}
                            className={`px-8 py-4 rounded-full text-[15px] font-bold transition-all duration-300 ${activeTab === i
                                ? "bg-black text-white shadow-xl scale-105"
                                : "bg-[#f7f7f7] text-black/40 hover:bg-[#eee] border border-black/5"
                                }`}
                        >
                            {uc.tab}
                        </button>
                    ))}
                </div>

                {/* Content Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[1000px] mx-auto"
                    >
                        <div className="bg-white rounded-[56px] shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-black/5 overflow-hidden flex flex-col relative">

                            {/* Card Top: Image */}
                            <div className="relative h-[450px] md:h-[550px] overflow-hidden">
                                <img
                                    src={active.image}
                                    alt={active.tab}
                                    className="w-full h-full object-cover"
                                />

                                {/* Blurry Gradient Transition Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-white via-white/80 to-transparent z-10 backdrop-blur-3xl"
                                    style={{
                                        maskImage: 'linear-gradient(to top, black 25%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to top, black 25%, transparent 100%)'
                                    }}
                                />

                                {/* Floating Badges */}
                                <div className="absolute top-10 left-10 flex flex-wrap gap-2 z-20">
                                    {active.badges.map((badge, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-[12px] font-bold text-white tracking-wide uppercase"
                                        >
                                            {badge}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card Bottom: Content */}
                            <div className="px-10 pb-16 md:px-16 md:pb-20 -mt-40 relative z-20">
                                <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
                                    <div className="flex-1">
                                        <h3 className="text-[36px] md:text-[52px] font-medium text-black tracking-tight leading-[1.1] mb-8">
                                            {active.tab === "Students" ? "Real-Time Mastery Tracking" :
                                                active.tab === "Self-Learners" ? "Personalized Skill Building" :
                                                    active.tab === "Lifelong Learners" ? "Daily Brain Power Sprints" :
                                                        active.tab === "Parents" ? "Curriculum-Aligned Learning" :
                                                            "Global Knowledge Exploration"}
                                        </h3>

                                        <p className="text-[18px] md:text-[20px] text-black/50 leading-relaxed mb-10 max-w-[540px]">
                                            {active.description}
                                        </p>

                                        {/* Decorative Card */}
                                        <div className="bg-black rounded-[24px] p-6 mb-10">
                                            <p className="text-[16px] md:text-[18px] text-white text-center font-medium leading-relaxed">
                                                {active.cardText}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2">
                                            {active.features.map((f) => (
                                                <span
                                                    key={f}
                                                    className="px-4 py-2 bg-[#f7f7f7] border border-black/5 rounded-full text-[13px] font-bold text-black/60"
                                                >
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stat card */}
                                    <div className="flex-shrink-0 w-full lg:w-[260px] lg:mt-4">
                                        <div className="bg-[#f7f7f7] rounded-[32px] p-8 border border-black/5">
                                            <p className="text-[13px] text-black/40 font-bold mb-3 uppercase tracking-wider">{active.stat}</p>
                                            <p className="text-[64px] font-bold text-black leading-none mb-6">{active.statValue}</p>
                                            <div className="flex items-end gap-2 h-16">
                                                {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${h}%` }}
                                                        transition={{ delay: i * 0.05 + 0.3, duration: 0.8, ease: "easeOut" }}
                                                        className="flex-1 bg-black rounded-full opacity-20"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}