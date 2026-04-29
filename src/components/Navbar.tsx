"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
    { label: "Features", id: "features" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Study Goals", id: "study-goals" },
    { label: "FAQ", id: "faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = useCallback((id: string) => {
        setMenuOpen(false);
        const el = document.getElementById(id);
        if (!el) return;
        const offset = 100; // account for fixed navbar height
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-[1000] flex justify-center px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex items-center justify-between w-full max-w-[780px] px-6 py-1.5 rounded-[24px] transition-all duration-500 ${scrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-framer border border-primary/10"
                    : "bg-white backdrop-blur-md border border-black/5 shadow-sm"
                    }`}
            >
                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <img 
                        src="/images/logo.png" 
                        alt="Qoozr Logo" 
                        className="w-14 h-14 object-contain drop-shadow-sm transition-transform group-hover:scale-105"
                    />
                    <span className="text-xl font-bold tracking-tight text-black hidden sm:block drop-shadow-sm">Qoozr</span>
                </Link>

                {/* Center: Desktop Navigation */}
                <div className="hidden md:flex items-center rounded-full px-2 py-1 gap-1">
                    {navLinks.map(({ label, id }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="text-[14px] font-bold text-text-muted hover:text-foreground hover:bg-black/5 px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer"
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Right: App Store Buttons + Mobile Menu */}
                <div className="flex items-center gap-3 shrink-0">
                    {/* App Store */}
                    <Link
                        href="#"
                        className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-black text-white hover:scale-105 transition-transform"
                        aria-label="App Store"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-1.99.77-3.28.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                    </Link>


                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1.5 w-5">
                            <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                            <span className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-[calc(100%+8px)] left-4 right-4 max-w-[1100px] mx-auto bg-white/95 backdrop-blur-xl rounded-[20px] shadow-xl border border-black/5 p-4 md:hidden"
                >
                    {navLinks.map(({ label, id }) => (
                        <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="w-full text-left px-5 py-4 rounded-[14px] text-[16px] font-medium text-text-main hover:bg-black/5 transition-colors"
                        >
                            {label}
                        </button>
                    ))}
                    <div className="flex gap-3 mt-3 px-5 pb-2">
                        <Link href="#" className="flex-1 bg-black text-white text-center py-3 rounded-full text-[14px] font-bold">App Store</Link>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
