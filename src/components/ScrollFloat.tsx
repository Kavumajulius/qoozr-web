"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
    children: string;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
    className?: string;
}

export default function ScrollFloat({
    children,
    animationDuration = 1,
    ease = "back.inOut(2)",
    scrollStart = "center bottom+=50%",
    scrollEnd = "bottom bottom-=40%",
    stagger = 0.03,
    className = "",
}: ScrollFloatProps) {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const chars = container.querySelectorAll<HTMLElement>(".sf-char");

        // Use gsap.set to establish initial state — avoids any conflict with
        // React's inline style rendering (which caused some chars to stay hidden)
        gsap.set(chars, { opacity: 0, y: 40, filter: "blur(10px)" });

        const ctx = gsap.context(() => {
            gsap.to(chars, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration: animationDuration,
                ease,
                stagger,
                scrollTrigger: {
                    trigger: container,
                    start: scrollStart,
                    end: scrollEnd,
                    scrub: false,
                },
            });
        }, container);

        return () => ctx.revert();
    }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

    // Split text preserving spaces — use a regular space character (not &nbsp;)
    // so GSAP can select and animate every single span uniformly
    const words = children.split(" ");

    return (
        <span ref={containerRef} className={`inline ${className}`}>
            {words.map((word, wi) => (
                <span 
                    key={wi} 
                    className="inline-block whitespace-nowrap"
                    style={{ marginRight: wi < words.length - 1 ? "0.25em" : "0" }}
                >
                    {word.split("").map((char, ci) => (
                        <span key={ci} className="sf-char inline-block">
                            {char}
                        </span>
                    ))}
                </span>
            ))}
        </span>
    );
}
