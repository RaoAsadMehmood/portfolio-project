"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
// import React, { useRef } from 'react';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "../components/Navbar";
import SkillsIcons from "../components/SkillsIcons";
import ProjectShowcase from "../components/ProjectShowcase";
import SpotlightGradientSection from "../components/SpotLightBackground";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

// Dynamically load IntroAnimation (no SSR)
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
            if (!heroRef.current) return;

            console.log("GSAP ran");

            gsap.set(heroRef.current, { autoAlpha: 0 });

            gsap.to(heroRef.current, {
                autoAlpha: 1,
                duration: 1,
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

            setAnimationDone(true); // hide IntroAnimation after it plays
        }, 2500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <SpotlightGradientSection />
            <div className="overflow-x-hidden">
                {!animationDone && <IntroAnimation />} {/* Only show until done */}
                <Navbar />

                {/* Hero Section */}
                <div className="min-h-screen bg-black relative">
                    <section
                        ref={heroRef}
                        className="min-h-screen flex items-center justify-center px-4 md:px-8 "
                        style={{ visibility: "hidden" }}
                    >


                        <div className="max-w-3xl">
                            <h1
                                ref={headingRef} // Assuming headingRef is defined in the parent component
                                className="text-white text-5xl md:text-7xl font-bold leading-tight"
                            >
                                Agentic AI Builder and Web Developer
                            </h1>

                            <p
                                ref={paraRef} // Assuming paraRef is defined in the parent component
                                className="text-white/70 text-lg md:text-xl mt-4"
                                suppressHydrationWarning
                            >
                                I am
                                <span className="backdrop-blur-sm rounded-[12px] px-[11px] py-[3px] mr-[4px] text-white bg-[#9595951a] border-[#9595954d] border border-solid ml-2">
                                    Rao Asad Mehmood
                                </span>
                                , a <b>Full-Stack Developer</b> specializing in building <b>intelligent AI Agents (Agentic AI)</b> and dynamic, high-performance web experiences.
                                I automate  workflows and create innovative projects.
                            </p>

                            <div ref={buttonRef} className="mt-8">

                                <Link href="/contact" passHref>
                                    <button
                                        className="flex items-center gap-3 bg-indigo-700 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-all duration-300 text-sm uppercase tracking-wider shadow-lg mr-4"
                                    >
                                        <span className="w-9 h-9 rounded-[12px] px-[11px] py-[6px] text-white bg-indigo-500/50 border-indigo-400 border border-solid backdrop-blur-sm flex items-center justify-center">
                                            <span className="text-xs">AI</span>
                                        </span>
                                        Discuss AI Agent Project
                                    </button>
                                </Link>

                                <Link href="/about" passHref>
                                    <button className="flex items-center gap-3 bg-[#04151496] backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-wider">
                                        <span className="w-9 h-9 rounded-[12px] px-[11px] py-[6px] text-white bg-[#9595951a] border-[#9595954d] border border-solid backdrop-blur-sm flex items-center justify-center">
                                            <span className="text-xs">AM</span>
                                        </span>
                                        About Me & Web Skills
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Skills Section */}
                <section
                    id="about"
                    ref={skillsRef} // Assuming skillsRef is defined
                    className="w-full py-16 px-6 md:px-12 lg:px-24 "
                >
                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-white/80 text-lg md:text-xl tracking-wider text-left">
                            (001) <sub className="text-white/50 text-sm">Skills & Focus</sub>
                        </p>
                        <p className="text-white text-2xl md:text-3xl font-semibold leading-relaxed text-left">
                            I am a <b>Dual Specialist</b>, dedicated to building intelligent <b>Agentic AI</b> solutions and robust, high-performance <b>Full-Stack Websites</b>.
                            My expertise lies in automating complex business logic using large language models (<b>LLMs</b>) and translating these powerful backend systems into
                            dynamic, optimized web experiences. I constantly refine my workflow through experimentation in both domains.
                        </p>
                        <div className="pt-4">
                            <a
                                href="/about"
                                className="inline-block px-8 py-3 bg-indigo-700 border border-indigo-600 rounded-full text-white font-semibold text-sm md:text-base tracking-wide shadow-lg hover:bg-indigo-600 hover:scale-[1.03] transition-all duration-300"
                            >
                                Read More About Me
                            </a>
                        </div>


                        <SkillsIcons /> {/* Assuming this component displays tech stack icons */}
                    </div>

                </section>

                {/* Projects Section */}
                <section id="projects" className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-l from-black to-teal-900/30 bg-[length:200%_200%] bg-right transition-all duration-1000">

                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-white/80 text-lg md:text-xl tracking-wider text-left">
                            (002) <sub className="text-white/50 text-sm">Projects & Automation</sub>
                        </p>
                        <p className="text-white text-2xl md:text-3xl font-semibold leading-relaxed text-left">
                            My portfolio features a mix of <b>Intelligent AI Agents</b> designed to automate complex business processes and <b>high-performance web solutions</b>
                             crafted for scale. I focus on using <b>AI Agents</b> for workflow optimization while building dynamic, interactive digital experiences that drive growth,
                            whether assisting clients, agencies, or internal ventures.
                        </p>
                    </div>
                    <ProjectShowcase />
                </section>

                <ContactSection />
            </div>
            
        </>
    );
};

export default Home;
