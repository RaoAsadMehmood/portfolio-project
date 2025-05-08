"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

const IntroAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [isMounted, setIsMounted] = useState(false); // <-- ✅ Step 1

    useEffect(() => {
        setIsMounted(true); // ✅ Step 2: Set true on mount
    }, []);

    useEffect(() => {
        if (isMounted && typeof window !== "undefined") {
            Splitting();

            const tl = gsap.timeline();

            tl.from(".char", {
                x: "random(-100, 100)",
                y: "random(-100, 100)",
                rotate: "random(-90, 90)",
                filter: "blur(20px)",
                opacity: 0,
                ease: "power3.out",
                duration: 1.5,
                stagger: {
                    amount: 2,
                },
            }).to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 0.5,
                onComplete: () => {
                    if (containerRef.current) {
                        containerRef.current.style.display = "none";
                    }
                },
            });
        }
    }, [isMounted]); // ✅ dependency mein isMounted

    if (!isMounted) return null; // ✅ no rendering on server

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
            <h1
                ref={textRef}
                className="text-white text-[2.5rem] md:text-[4.5rem] font-semibold text-center px-4 font-[EB Garamond]"
                data-splitting
                style={{ fontFamily: "'Caveat', cursive" }}
            >
                Rao Asad Mehmood
            </h1>
        </div>
    );
};

export default IntroAnimation;
