"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
    {
        q: "What exactly is QOOZR and how does it work?",
        a: "QOOZR is an AI-powered study companion designed to help you quiz smarter and solve homework instantly. You can scan any question for a step-by-step breakdown or take personalized AI quizzes tailored specifically to your age, level, and country.",
    },
    {
        q: "How does the Snap & Solve feature work?",
        a: "Just snap a photo of any problem. QOOZR instantly reads and identifies it, providing accurate, step-by-step solutions in 7 languages (English, Spanish, French, German, Korean, Japanese, and Portuguese). It's designed to teach you the reasoning, not just give the answer.",
    },
    {
        q: "What age groups and levels are supported?",
        a: "QOOZR is age-smart. We offer customized content for four distinct age groups: 6–9, 10–13, 14–17, and 18+. Whether you're in primary school or a lifelong learner, the content is built for your level.",
    },
    {
        q: "Is the content relevant to my country's curriculum?",
        a: "Yes. QOOZR provides locally relevant questions for 100+ countries. A History quiz in Kenya or France is built around your specific local curriculum—it's never a one-size-fits-all approach.",
    },
    {
        q: "What subjects does QOOZR cover?",
        a: "We support 30+ subjects including Math, Science, History, Geography, Philosophy, Computer Science, and more. Across these subjects, we have over 400+ focused subtopics for deep, targeted learning.",
    },
    {
        q: "What is QuickScore and Brain Power?",
        a: "QuickScore is your personal progress dashboard. It tracks your mastery scores across all topics and calculates your overall 'Brain Power' rating, which grows with every study session and helps you see your progress in real time.",
    },
    {
        q: "Can I save my solutions for later review?",
        a: "Absolutely. With our Bookmark & Build feature, you can save any scanned solution or quiz answer to your personal study library, making it easy to review before exams, even when you're offline.",
    },
    {
        q: "How does QOOZR fit into a busy schedule?",
        a: "We designed QOOZR for real life. Our 5-minute study sprints use a micro-learning approach that maximizes retention without the overwhelm, making it perfect for commutes, breaks, or spare moments.",
    },
    {
        q: "Is my data safe with QOOZR?",
        a: "Privacy is a top priority. Your study history and personal data are encrypted and protected. We are built with safety in mind for all age groups. For more details, you can review our Privacy Policy.",
    },
    {
        q: "How do I get started?",
        a: "Download QOOZR from the App Store, create your profile, and select your age group and country. You'll be ready to start your personalized learning journey in under a minute.",
    },
];


export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-[#f7f7f7]">
            <div className="framer-container max-w-[800px]">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="pill-badge mb-6 mx-auto"
                    >
                        Support & Help
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[40px] md:text-[56px] font-black leading-tight text-text-main"
                    >
                        Frequently Asked <span className="text-primary italic">Questions</span>.
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-framer transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-8 md:p-10 flex items-center justify-between text-left group"
                            >
                                <span className="text-[20px] md:text-[22px] font-bold text-text-main leading-tight group-hover:text-primary transition-colors">
                                    {faq.q}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? "bg-primary text-white" : "bg-[#f7f7f7] text-text-main"
                                        }`}
                                >
                                    <Plus className="w-5 h-5" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-8 md:px-10 pb-10">
                                            <p className="text-[18px] text-text-muted leading-relaxed max-w-[90%]">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
