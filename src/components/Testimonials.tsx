"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const testimonials = [
    { quote: "Qoozr made my study mornings feel manageable again.", name: "Maya Zong", role: "Student" },
    { quote: "The weekly insights are what sold me. They show exactly where I fall off and help me adjust without feeling guilty.", name: "Daniel Perez", role: "Software Engineer" },
    { quote: "This is the first study app that doesn't overwhelm me. Everything feels calm, structured, and intentional.", name: "Andre Lewis", role: "University Student" },
    { quote: "I used to ignore reminders from other apps, but these feel calm and well-timed.", name: "Ethan Miller", role: "Gym Trainer" },
    { quote: "Focus blocks changed the way I study. I get more done in two hours now than what used to take half a day.", name: "Laura Kim", role: "Product Designer" },
    { quote: "The simple visuals and progress cues make it easy to stay consistent every day.", name: "Kevin Brooks", role: "Tutor" },
    { quote: "It's the first study app that doesn't overwhelm me.", name: "Hannah Lee", role: "Content Writer" },
    { quote: "I actually stick to my study routines now. Small steps finally add up.", name: "Priya Shah", role: "Marketing Specialist" },
    { quote: "Feels tailored to my day and keeps me motivated.", name: "Sofia Martinez", role: "UX Researcher" },
];

const avatarColors = [
    "bg-primary", "bg-accent", "bg-[#9000ff]", "bg-[#0059ff]",
    "bg-[#12a70a]", "bg-[#ff00a1]", "bg-[#ff9803]", "bg-primary", "bg-accent",
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-[#131515] overflow-hidden relative">
            {/* Background Glow Image */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                <img src="/images/bg-glows.png" className="w-full h-full object-cover" alt="" />
            </div>

            <div className="framer-container relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-8"
                >
                    <div className="bg-white/5 border border-white/10 rounded-full px-5 py-2 text-[14px] font-bold text-white/60 tracking-wide uppercase">
                        A closer look
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[48px] md:text-[64px] lg:text-[72px] leading-[1] font-medium text-white tracking-tighter text-center mb-6"
                >
                    How students use Qoozr every day
                </motion.h2>

                {/* Rating */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-4"
                >
                    <div className="flex items-center gap-2 text-white/60 text-[15px]">
                        <span className="text-white font-bold text-[18px]">4.5/5</span>
                        <span>·</span>
                        <span>(Trusted by 10,000+ users)</span>
                    </div>
                </motion.div>

                {/* Avatar row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center mb-16"
                >
                    <div className="flex -space-x-2">
                        {avatarColors.slice(0, 6).map((color, i) => (
                            <div
                                key={i}
                                className={`w-10 h-10 rounded-full ${color} border-2 border-[#131515] flex items-center justify-center text-white text-[13px] font-bold`}
                            >
                                {testimonials[i].name.charAt(0)}
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#131515] flex items-center justify-center text-white/60 text-[11px] font-bold">
                            +3k
                        </div>
                    </div>
                </motion.div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="relative h-full"
                        >
                            <div className="relative h-full rounded-2xl border border-white/10 p-2 md:p-3">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative h-full flex flex-col justify-between bg-[#1a1c1c] backdrop-blur-sm rounded-xl p-7 hover:bg-white/[0.08] transition-colors overflow-hidden border border-white/5">
                                    <div>
                                        <p className="text-white/70 text-[15px] leading-relaxed mb-6 font-medium italic">
                                            &ldquo;{t.quote}&rdquo;
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-9 h-9 rounded-full ${avatarColors[i]} flex items-center justify-center text-white text-[13px] font-bold`}>
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-white text-[14px] font-bold">{t.name}</p>
                                            <p className="text-white/40 text-[12px]">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View all */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <button className="text-white/50 hover:text-white text-[15px] font-medium transition-colors underline underline-offset-4">
                        View all Reviews
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
