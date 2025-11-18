"use client";

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTerminal, FaRobot, FaRocket, FaCode } from 'react-icons/fa';
import Navbar from '../components/Navbar'
import SpotlightGradientSection from '../components/SpotLightBackground'
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    // Animate elements with 'about-element' class when section enters viewport
    const ctx = gsap.context(() => {
      gsap.from(".about-element", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
    <SpotlightGradientSection />
       <Navbar/>
    <section
      className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] text-white"
      id="about-me"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header/Title */}
        <div className="max-w-4xl about-element">
          <p className="text-white/80 text-lg md:text-xl tracking-wider text-left mb-2">
            (004) <sub className="text-white/50 text-sm">About Me & Philosophy</sub>
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Building the Future, Line by Line.
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Column 1: Image & Highlight Card */}
          <div className="lg:col-span-1 space-y-10">
            
            {/* Image Placeholder */}
            {/* <div className="about-element bg-indigo-900/30 border border-indigo-700/50 p-6 rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-indigo-500/20">
              <div className="aspect-square w-full bg-gray-800 rounded-2xl flex items-center justify-center border-4 border-gray-700">
                <FaCode size={80} className="text-indigo-400 opacity-60" />
              </div>
              <p className="text-center text-sm font-medium text-white/60 mt-4">
                [Placeholder: Replace this with your Profile Picture]
              </p>
            </div> */}

            {/* Quick Fact Card */}
            <div className="about-element space-y-4 p-6 bg-gray-900 rounded-3xl border border-gray-700/50">
                <h4 className="text-xl font-bold text-indigo-400 flex items-center gap-3"><FaRocket /> My Core Drive</h4>
                <p className="text-sm text-white/70">
                    My work is driven by two principles: <b>Automation</b> for efficiency and <b>Optimization</b> for speed. If a task is repetitive, an agent should handle it. If a user is waiting, the web should load faster.
                </p>
            </div>
          </div>
          
          {/* Column 2 & 3: Detailed Bio */}
          <div className="lg:col-span-2 space-y-10">

            {/* Section 1: Agentic AI Specialization */}
            <div className="about-element space-y-4">
              <h3 className="text-3xl font-bold text-indigo-400 flex items-center gap-3">
                <FaRobot /> Agentic AI & Intelligent Automation
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
              I am an expert in designing, developing, and deploying <b>intelligent AI agents</b>. By harnessing the power of large language models (LLMs) and advanced prompt engineering,
               I create autonomous systems that expertly handle complex business processes. This includes driving data synthesis and analysis, making automated decisions,
                and executing workflows with precision. My commitment is to build scalable, reliable, and measurable automation that empowers organizations to optimize their human resources effectively.
              </p>
              <ul className="list-disc list-inside text-white/70 pl-5 space-y-1">
                  <li>Custom LLM Tool Integration (APIs, Databases)</li>
                  <li>Autonomous Workflow Design (Multi-step reasoning)</li>
                  {/* <li>Security and Observability in Agent Frameworks</li> */}
              </ul>
            </div>

            {/* Divider */}
            <div className="about-element w-full h-px bg-gray-700/50"></div>

            {/* Section 2: Full-Stack Web Development */}
            <div className="about-element space-y-4">
              <h3 className="text-3xl font-bold text-teal-400 flex items-center gap-3">
                <FaTerminal /> High-Performance Full-Stack Development
              </h3>
              <p className="text-lg leading-relaxed text-white/90">
                As a passionate Full-Stack developer, my foundation lies in creating robust, scalable, and highly aesthetic web applications. I prioritize clean architecture (Next.js/React, Node.js), exceptional performance (Core Web Vitals), and dynamic user experiences powered by modern techniques like GSAP for fluid motion. I bridge the gap between powerful AI agents and engaging user interfaces.
              </p>
              <ul className="list-disc list-inside text-white/70 pl-5 space-y-1">
                  <li>Frontend Mastery: React, Next.js, TypeScript, Tailwind CSS</li>
                  <li>Backend Resilience: Node.js, Databases (MongoDB/SQL)</li>
                  <li>Advanced Interaction Design (GSAP, Framer Motion)</li>
              </ul>
            </div>

            <button className='float-btn px-10 py-4 bg-indigo-700 rounded-full text-lg font-bold text-white shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:bg-indigo-600 border border-indigo-700 hover:border-indigo-600'>
  <a
    href="mailto:rao.asad.mehmood.dev@example.com"
    className="contact-element inline-block"
  >
    Let&apos;s Connect & Discuss Your Project Now
  </a>
</button>

          </div>

        </div>
      
          </div>
          </section>
    <Footer />
    </>
  );
};

export default AboutSection;