"use client";

import { motion } from "framer-motion";

const stats = [
    {
        value: "30+",
        label: "Subjects",
        sublabel: "From STEM to Humanities"
    },
    {
        value: "400+",
        label: "Subtopics",
        sublabel: "Deep learning focused"
    },
    {
        value: "100+",
        label: "Countries",
        sublabel: "Localized curriculum"
    },
    {
        value: "7",
        label: "Languages",
        sublabel: "Global accessibility"
    }
];

export default function Stats() {
    return (
        <section className="py-32 bg-[#131515] relative overflow-hidden">
            {/* Background Glow Image */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
                <img src="/images/bg-glows.png" className="w-full h-full object-cover" alt="" />
            </div>

            <div className="framer-container relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <div className="text-[64px] md:text-[80px] font-medium text-white leading-none mb-4 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-[20px] font-bold text-white mb-2 tracking-tight">
                                {stat.label}
                            </div>
                            <div className="text-[16px] text-white/50">
                                {stat.sublabel}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle separator line */}
            <div className="framer-container mt-32 relative z-10">
                <div className="h-[1px] w-full bg-white/10" />
            </div>
        </section>
    );
}
