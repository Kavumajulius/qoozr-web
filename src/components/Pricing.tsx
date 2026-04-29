"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
    {
        name: "Standard",
        price: "$0",
        description: "Perfect for casual learners and quick problem solving.",
        features: [
            "Access to 5 Basic Subjects",
            "10 Scans per day",
            "Community Support",
            "Standard Quiz Mode",
        ],
        buttonText: "Start Free",
        featured: false,
    },
    {
        name: "Qoozr+",
        price: "$9.99",
        description: "The ultimate tool for academic excellence.",
        features: [
            "Unlock 30+ Premium Subjects",
            "Unlimited Scans & Solutions",
            "AI Personalized Tutor",
            "Offline Mode & PDF Exports",
            "Priority AI Response",
        ],
        buttonText: "Get Qoozr Pro",
        featured: true,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="framer-container">
                <div className="text-center mb-20 text-balance">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="pill-badge mb-6 mx-auto"
                    >
                        Simple, Transparent Pricing
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[48px] md:text-[64px] font-black leading-tight text-text-main"
                    >
                        Choose the plan that fits your <span className="text-primary italic">learning</span> journey.
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className={`p-14 rounded-[40px] flex flex-col ${tier.featured
                                    ? "bg-text-main text-white shadow-framer"
                                    : "bg-[#f7f7f7] text-text-main"
                                }`}
                        >
                            <div className="flex justify-between items-start mb-10">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black tracking-tighter">{tier.price}</span>
                                        <span className={`${tier.featured ? "text-white/60" : "text-text-muted"} font-medium`}>/month</span>
                                    </div>
                                </div>
                                {tier.featured && (
                                    <span className="bg-primary text-white text-[12px] font-bold px-4 py-1.5 rounded-full">POPULAR</span>
                                )}
                            </div>

                            <p className={`${tier.featured ? "text-white/80" : "text-text-muted"} mb-12 italic text-[18px]`}>
                                "{tier.description}"
                            </p>

                            <ul className="space-y-5 mb-14 flex-1">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-4">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${tier.featured ? "bg-white/10 text-primary" : "bg-white text-primary"
                                            }`}>
                                            <Check className="w-4 h-4" />
                                        </div>
                                        <span className="text-[17px] font-medium opacity-90">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-5 rounded-[20px] font-bold transition-all duration-300 text-[18px] ${tier.featured
                                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                                    : "bg-white text-text-main hover:bg-white/80 shadow-framer"
                                }`}>
                                {tier.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
