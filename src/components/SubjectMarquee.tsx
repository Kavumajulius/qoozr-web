"use client";

import { motion } from "framer-motion";

const subjects = [
    "Mathematics", "Physics", "Chemistry", "Biology", "History",
    "Geography", "Literature", "Economics", "Computer Science",
    "Philosophy", "Psychology", "Sociology", "Art History",
    "Music Theory", "World Languages", "Political Science"
];

export default function SubjectMarquee() {
    return (
        <div className="py-20 relative overflow-hidden group">
            {/* Side Fades - Matches Framer "Fade Left/Right" */}
            <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-[#f7f7f7] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-gradient-to-l from-[#f7f7f7] to-transparent z-10 pointer-events-none" />

            <div className="flex flex-col gap-8">
                {/* Top Ticker - Scrolls Left */}
                <div className="flex overflow-hidden grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                    <motion.div
                        animate={{ x: [0, -2000] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex items-center gap-5 px-5"
                    >
                        {[...subjects, ...subjects, ...subjects].map((subject, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-white px-6 py-4 rounded-[20px] shadow-framer whitespace-nowrap"
                            >
                                <div className="w-8 h-8 bg-primary-glow rounded-full flex items-center justify-center">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                </div>
                                <span className="text-[17px] font-semibold text-text-main tracking-tight">#{subject}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Ticker - Scrolls Right (Reverse) */}
                <div className="flex overflow-hidden grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                    <motion.div
                        animate={{ x: [-2000, 0] }}
                        transition={{
                            duration: 45,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex items-center gap-5 px-5"
                    >
                        {[...subjects, ...subjects, ...subjects].map((subject, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 bg-white px-6 py-4 rounded-[20px] shadow-framer whitespace-nowrap"
                            >
                                <div className="w-8 h-8 bg-accent-glow rounded-full flex items-center justify-center">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                </div>
                                <span className="text-[17px] font-semibold text-text-main tracking-tight">#{subject}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
