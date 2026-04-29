"use client";

import { motion } from "framer-motion";
import { Search, BrainCircuit, Trophy } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Pick Your Subject",
        description: "Choose from 30+ subjects and 400+ subtopics tailored to your age and local curriculum.",
        color: "bg-primary/10 text-primary"
    },
    {
        icon: BrainCircuit,
        title: "Snap or Quiz",
        description: "Use Snap & Solve for instant homework help, or take a personalized AI quiz to build your knowledge.",
        color: "bg-accent/10 text-accent"
    },
    {
        icon: Trophy,
        title: "Master the Topic",
        description: "Track your Brain Power and subject mastery scores as you build your personal study library.",
        color: "bg-blue-500/10 text-blue-500"
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-[#f7f7f7]">
            <div className="framer-container">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="pill-badge mb-6 mx-auto"
                    >
                        Three simple steps
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[48px] md:text-[64px] font-black leading-tight text-text-main"
                    >
                        How <span className="text-primary italic">Qoozr</span> works.
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-14 rounded-[48px] shadow-framer flex flex-col items-center text-center border border-transparent hover:border-border/50 hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className={`w-24 h-24 rounded-[32px] ${step.color} flex items-center justify-center mb-10 shadow-sm border border-white group-hover:scale-110 transition-transform duration-500`}>
                                <step.icon className="w-10 h-10" />
                            </div>
                            <div className="bg-black/5 px-4 py-1.5 rounded-full text-[12px] font-bold text-text-muted mb-6 tracking-wide uppercase">
                                Step 0{index + 1}
                            </div>
                            <h3 className="text-[28px] md:text-[32px] font-medium mb-6 text-text-main leading-tight tracking-tight">{step.title}</h3>
                            <p className="text-[18px] text-text-muted leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
