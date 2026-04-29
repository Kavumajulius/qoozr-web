"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, Camera, Clock, Zap, Award, BarChart } from "lucide-react";
import ScrollFloat from "./ScrollFloat";

type CardData = {
    type: "text";
    title: string;
    icon: any;
    color: string;
    bg: string;
} | {
    type: "image";
    image: string;
};

const row1: CardData[] = [
    { type: "image", image: "/images/habit-girl.png" },
    { type: "text", title: "Personalized AI Quiz", icon: Brain, color: "text-purple-500", bg: "bg-purple-50" },
    { type: "image", image: "/images/habit-notebook.png" },
    { type: "text", title: "Snap & Solve", icon: Camera, color: "text-orange-500", bg: "bg-orange-50" },
    { type: "image", image: "/images/habit-evening.png" },
    { type: "text", title: "Daily Streaks", icon: Clock, color: "text-blue-500", bg: "bg-blue-50" },
];

const row2: CardData[] = [
    { type: "text", title: "5-Min Sprints", icon: Zap, color: "text-cyan-500", bg: "bg-cyan-50" },
    { type: "image", image: "/images/habit-library.png" },
    { type: "text", title: "QuickScore", icon: Award, color: "text-emerald-500", bg: "bg-emerald-50" },
    { type: "image", image: "/images/habit-coffee.png" },
    { type: "text", title: "Brain Power Rating", icon: BarChart, color: "text-violet-500", bg: "bg-violet-50" },
    { type: "image", image: "/images/habit-writing.png" },
];

const MarqueeRow = ({ items, direction = "left" }: { items: CardData[], direction?: "left" | "right" }) => {
    return (
        <div className="flex overflow-hidden py-4 select-none">
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-6 px-3"
            >
                {[...items, ...items, ...items].map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-[260px] aspect-square rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-shadow duration-500 border border-black/5 bg-white"
                    >
                        {item.type === "text" ? (
                            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
                                <div className={`w-20 h-20 rounded-[32px] ${item.bg} flex items-center justify-center shadow-sm`}>
                                    <item.icon className={`w-10 h-10 ${item.color}`} />
                                </div>
                                <span className="text-[22px] font-bold text-text-main tracking-tight leading-tight block whitespace-normal">
                                    {item.title}
                                </span>
                            </div>
                        ) : (
                            <Image
                                src={item.image}
                                alt="Study Habit"
                                fill
                                className="object-cover"
                                sizes="260px"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] to-transparent pointer-events-none" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default function DailyHabits() {
    return (
        <section id="study-goals" className="py-32 bg-white overflow-hidden">
            <div className="framer-container">
                {/* Refined Headline */}
                <div className="max-w-[1020px] mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-[48px] md:text-[72px] lg:text-[84px] leading-[1] font-medium text-text-main tracking-tighter mb-10">
                            <ScrollFloat stagger={0.025} animationDuration={1.1} ease="power3.out">
                                Set your
                            </ScrollFloat>
                            <span className="inline-block">&nbsp;</span>
                            <span className="inline-flex items-center justify-center w-16 h-10 md:w-24 md:h-14 bg-[#f0f0f0] rounded-full mx-2 align-middle border border-border/20 shadow-inner overflow-hidden"><span className="text-2xl md:text-3xl">🎯</span></span>
                            <span className="inline-block">&nbsp;</span>
                            <ScrollFloat stagger={0.025} animationDuration={1.1} ease="power3.out">
                                study goals and let AI guide you to
                            </ScrollFloat>
                            <span className="inline-block">&nbsp;</span>
                            <span className="inline-flex items-center justify-center w-16 h-10 md:w-24 md:h-14 bg-[#f0f0f0] rounded-full mx-2 align-middle border border-border/20 shadow-inner overflow-hidden"><span className="text-2xl md:text-3xl">🏆</span></span>
                            <span className="inline-block">&nbsp;</span>
                            <ScrollFloat stagger={0.025} animationDuration={1.1} ease="power3.out">
                                every milestone.
                            </ScrollFloat>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[18px] md:text-[22px] text-text-muted font-medium"
                    >
                        Thousands of students are already hitting their study goals with QOOZR.
                    </motion.p>
                </div>

                {/* Dual Marquee Cards */}
                <div className="space-y-4">
                    <MarqueeRow items={row1} direction="left" />
                    <MarqueeRow items={row2} direction="right" />
                </div>
            </div>
        </section>
    );
}
