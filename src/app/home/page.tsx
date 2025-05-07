"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import SkillsIcons from "../components/SkillsIcons";

const IntroAnimation = dynamic(() => import("../components/IntroAnimation"), {
    ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paraRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    const [animationDone, setAnimationDone] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationDone(true);

            gsap.to(heroRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
            });

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

            if (skillsRef.current) {
                gsap.fromTo(
                    skillsRef.current,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: skillsRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );

                gsap.to(skillsRef.current, {
                    backgroundPosition: "100% 0",
                    ease: "none",
                    scrollTrigger: {
                        trigger: skillsRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                });
            }
        }, 2500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className="overflow-x-hidden">


                <IntroAnimation />
                <div className="min-h-screen bg-black relative">
                    <Navbar />
                    <section
                        ref={heroRef}
                        className="min-h-screen flex items-center justify-center px-4 md:px-8 bg-gradient-to-r from-black to-teal-900/30 opacity-0"
                    >
                        <div className="max-w-3xl">
                            <h1
                                ref={headingRef}
                                className="text-white text-5xl md:text-7xl font-bold leading-tight"
                            >
                                Front-End Developer and Creator
                            </h1>

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

                {/* Skills Section */}
                <section
                    ref={skillsRef}
                    className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-l from-black to-teal-900/30 bg-[length:200%_200%] bg-left transition-all duration-1000"
                >
                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-white/80 text-lg md:text-xl tracking-wider text-left">
                            (001) <sub className="text-white/50 text-sm">Skills</sub>
                        </p>
                        <p className="text-white text-2xl md:text-3xl font-semibold leading-relaxed text-left">
                            I specialize in building complex, high-performance websites from
                            scratch. My workflow is built on a modern and optimized tech stack
                            that I&apos;ve polished through real-world projects and consistent
                            experimentation.
                        </p>

                        <SkillsIcons />
                    </div>
                </section>

                <section
                    className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-l from-black to-teal-900/30 bg-[length:200%_200%] bg-right transition-all duration-1000"
                >
                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-white/80 text-lg md:text-xl tracking-wider text-left">
                            (002) <sub className="text-white/50 text-sm">Projects</sub>
                        </p>
                        <p className="text-white text-2xl md:text-3xl font-semibold leading-relaxed text-left">
                            Talented frontend web developer focused on building interactive digital experiences to help businesses grow.
                            Work closely with clients or assist agencies globally.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
