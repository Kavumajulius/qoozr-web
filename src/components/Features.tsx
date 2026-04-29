"use client";

import { motion } from "framer-motion";
import { Camera, BookOpen, Zap, Target, Sparkles, Layout } from "lucide-react";
import ScrollFloat from "./ScrollFloat";

const mainFeatures = [
    {
        title: "Snap & Solve",
        description: "Stuck on a problem? Just snap a photo. Point your camera at any homework question for instant, accurate, step-by-step AI solutions.",
        icon: Camera,
        color: "bg-accent/10 text-accent",
        image: "/images/feature-scan.png"
    },
    {
        title: "Personalized AI Quizzes",
        description: "Every quiz is unique. AI generates questions specifically for your level, local curriculum, and age group to ensure deep understanding.",
        icon: Target,
        color: "bg-primary/10 text-primary",
        image: "/images/feature-quiz.png"
    }
];

const featureGrid = [
    {
        title: "QuickScore Dashboard",
        description: "Track your Brain Power rating and mastery scores in real time.",
        icon: Zap,
        image: "/images/grid-guidance.png",
        badge: "Performance"
    },
    {
        title: "Age-Smart Content",
        description: "Tailored learning for ages 6–9, 10–13, 14–17, and 18+.",
        icon: BookOpen,
        image: "/images/grid-subjects.png",
        badge: "Targeted"
    },
    {
        title: "Localized Curriculum",
        description: "Relevant questions for 100+ countries in 7 languages.",
        icon: Layout,
        image: "/images/grid-anywhere.png",
        badge: "Global"
    },
    {
        title: "Personal Study Library",
        description: "Bookmark any solution or quiz to review anytime, even offline.",
        icon: Sparkles,
        image: "/images/grid-mastery.png",
        badge: "Premium"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-32 bg-white relative overflow-hidden">
            <div className="framer-container">
                {/* Section Header */}
                <div className="grid md:grid-cols-2 gap-12 mb-32 items-end">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-black/5 border border-border/50 rounded-full px-5 py-2 inline-flex items-center text-[14px] font-bold text-text-muted mb-8 tracking-wide uppercase"
                        >
                            Studies with structure
                        </motion.div>
                        <h2 className="text-[48px] md:text-[64px] lg:text-[72px] leading-[1] text-text-main font-medium tracking-tighter">
                            <ScrollFloat stagger={0.02} animationDuration={1.1} ease="power3.out">
                                The smarter way to
                            </ScrollFloat>
                            {" "}
                            <span className="text-primary italic">
                                <ScrollFloat stagger={0.03} animationDuration={1.2} ease="power3.out">
                                    study
                                </ScrollFloat>
                            </span>
                            {" "}
                            <ScrollFloat stagger={0.02} animationDuration={1.1} ease="power3.out">
                                starts here.
                            </ScrollFloat>
                        </h2>
                    </div>
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[18px] md:text-[20px] text-text-muted leading-relaxed max-w-[480px]"
                        >
                            Qoozr puts a personal AI tutor in your pocket, available 24/7 across 30+ subjects, tailored precisely to your level.
                        </motion.p>
                    </div>
                </div>

                {/* Main Features Alternating */}
                <div className="space-y-40 mb-40">
                    {mainFeatures.map((f, i) => (
                        <div key={f.title} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-20 md:gap-32`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                className="flex-1 w-full"
                            >
                                {/* Premium iPhone Mockup Frame */}
                                <div className="relative mx-auto w-full max-w-[400px]">
                                    <div className="relative aspect-[9/18.5] bg-black rounded-[54px] border-[10px] border-[#222] shadow-2xl overflow-hidden group">
                                        {/* Camera Notch */}
                                        <div className="absolute top-0 inset-x-0 h-8 bg-black z-30 flex justify-center items-end pb-1.5">
                                            <div className="w-24 h-5 bg-[#111] rounded-full" />
                                        </div>

                                        {/* Main App Image */}
                                        <img
                                            src={f.image}
                                            alt={f.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />

                                        {/* Inner Shadow Overlay */}
                                        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.4)] pointer-events-none" />
                                    </div>

                                    {/* Outer Decoration - Warm Glow */}
                                    <div className="absolute -inset-10 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 blur-[100px] -z-10 group-hover:opacity-100 opacity-60 transition-opacity" />
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                                className="flex-1"
                            >
                                <div className={`w-16 h-16 rounded-[24px] ${f.color} flex items-center justify-center mb-10 shadow-sm border border-white`}>
                                    <f.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-[36px] md:text-[48px] leading-tight mb-8 text-text-main font-medium tracking-tight">{f.title}</h3>
                                <p className="text-[18px] md:text-[22px] text-text-muted leading-relaxed">
                                    {f.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featureGrid.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="relative aspect-[4/5] rounded-[48px] overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500 hover:-translate-y-2 cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={f.image}
                                alt={f.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

                            {/* Content Overlays */}
                            <div className="absolute inset-0 z-20 pt-10 px-10 pb-10 flex flex-col justify-between">
                                {/* Top Badge */}
                                <div className="flex justify-end">
                                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 text-[12px] font-bold text-white tracking-wide uppercase">
                                        {f.badge}
                                    </div>
                                </div>

                                {/* Bottom Text */}
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                                        <f.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-[24px] font-bold text-white mb-2 tracking-tight leading-tight">{f.title}</h4>
                                    <p className="text-[14px] text-white/70 leading-relaxed font-medium">
                                        {f.description}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none mix-blend-overlay" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
