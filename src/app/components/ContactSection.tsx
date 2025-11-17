"use client";

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    // Animate elements with 'contact-element' class when section enters viewport
    const ctx = gsap.context(() => {
      gsap.from(".contact-element", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="w-full py-24 px-6 md:px-12 lg:px-24 bg-black text-white flex items-center justify-center min-h-screen"
      id="contact-section-animated"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl font-medium text-gray-400 mb-4 contact-element">(003) Ready?</p>

        {/* Updated Heading to reflect AI/Web focus */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 contact-element">
          Ready to automate complex workflows or launch your next scalable web platform?
        </h2>

        {/* Updated Description */}
        <p className="text-xl md:text-2xl font-semibold text-gray-200 mb-12 contact-element">
          Partner with me to design and deploy intelligent <b>AI Agents</b>, or build your high-performance full-stack application from scratch.
        </p>

        {/* Updated Contact Button with animation class: animate-pulse-slow */}
        <a
          href="mailto:rao.asad.mehmood.dev@example.com"
          className="contact-element inline-block px-10 py-4 bg-indigo-700 rounded-full text-lg font-bold text-white shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:bg-indigo-600 border border-indigo-700 hover:border-indigo-600"
        >
          Let's Discuss Your Project Now
        </a>


      </div>
    </section>
  );
};

export default ContactSection;