"use client";

import { motion } from "framer-motion";

const subjectCards = [
    { name: "Mathematics", size: "md:col-span-2 md:row-span-2", color: "bg-[#EBF8FF] text-[#2B6CB0]", icon: "📐" },
    { name: "Physics", size: "md:col-span-1 md:row-span-1", color: "bg-[#FAF5FF] text-[#6B46C1]", icon: "⚛️" },
    { name: "Biology", size: "md:col-span-1 md:row-span-2", color: "bg-[#F0FFF4] text-[#2F855A]", icon: "🌿" },
    { name: "Chemistry", size: "md:col-span-1 md:row-span-1", color: "bg-[#FFF5F5] text-[#C53030]", icon: "🧪" },
    { name: "History", size: "md:col-span-2 md:row-span-1", color: "bg-[#FFFAF0] text-[#C05621]", icon: "📜" },
    { name: "Economics", size: "md:col-span-1 md:row-span-1", color: "bg-[#E6FFFA] text-[#2C7A7B]", icon: "📊" },
];

export default function SubjectGrid() {
    return (
        <section id="subjects" className="py-32 bg-white">
            <div className="framer-container">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="pill-badge mb-6 mx-auto"
                    >
                        Vibrant Library
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[48px] md:text-[64px] font-medium leading-[1] text-text-main tracking-tight"
                    >
                        30+ Subjects to <span className="text-primary italic">Explore</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[18px] md:text-[20px] text-text-muted mt-8 max-w-[600px] mx-auto leading-relaxed"
                    >
                        Master any curriculum with our comprehensive, AI-enhanced subject library designed for modern students.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[760px]">
                    {subjectCards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -8, rotate: i % 2 === 0 ? 1 : -1 }}
                            className={`${card.size} ${card.color.split(' ')[0]} rounded-[48px] p-12 flex flex-col justify-between border border-transparent hover:border-black/5 hover:shadow-2xl transition-all duration-500 group cursor-pointer`}
                        >
                            <div className="text-6xl group-hover:scale-110 transition-transform duration-500 ease-out">{card.icon}</div>
                            <div className={`text-[32px] font-medium tracking-tight leading-tight ${card.color.split(' ')[1]}`}>{card.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
