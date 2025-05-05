"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import IntroAnimation from "../components/IntroAnimation";

const Home: React.FC = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);

    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationDone(true);

            // Fade in hero section
            gsap.to(heroRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
            });

            // Animate heading, para, and button
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                headingRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1 }
            )
                .fromTo(
                    paraRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1 },
                    "-=0.6"
                )
                .fromTo(
                    buttonRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1 },
                    "-=0.6"
                );
        }, 2500); // Match timing with IntroAnimation duration

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="min-h-screen bg-black relative">
            {/* Intro Animation */}
            <IntroAnimation />

            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-gradient-to-r from-black to-teal-900/30 opacity-0"
            >
                <div className="max-w-3xl">
                    {/* Heading */}
                    <h1
                        ref={headingRef}
                        className="text-white text-5xl md:text-7xl font-bold leading-tight"
                    >
                        Front-End Developer and Creator
                    </h1>

                    {/* Subtext */}
                    <p
                        ref={paraRef}
                        className="text-white/70 text-lg md:text-xl mt-4"
                        suppressHydrationWarning
                    >
                        I am
                        <span className="backdrop-blur-sm rounded-[12px] px-[11px] py-[3px] mr-[4px] text-white bg-[#9595951a] border-[#9595954d] border border-solid ml-2">
                            Rao Asad Mehmood
                        </span>
                        , a Front-End Developer, where I build responsive and dynamic web
                        experiences. I create innovative projects.
                    </p>

                    {/* About Me Button */}
                    <div ref={buttonRef} className="mt-8">
                        <Link href="/about">
                            <button className="flex items-center gap-3 bg-[#04151496] backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-wider">
                                <span className="w-9 h-9 rounded-[12px] px-[11px] py-[6px] text-white bg-[#9595951a] border-[#9595954d] border border-solid backdrop-blur-sm flex items-center justify-center">
                                    <span className="text-xs">RAM</span>
                                </span>
                                About Me
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
