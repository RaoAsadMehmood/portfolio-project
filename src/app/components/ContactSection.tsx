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
        <p className="text-lg md:text-xl font-medium text-gray-400 mb-4 contact-element">(003)</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 contact-element">
          Seeking to enhance your business with exceptional front-end development expertise?
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-gray-200 mb-12 contact-element">
          Let&apos; connect and discuss your development needs.
        </p>
        {/* Contact button with animation */}
        <a href="mailto:your-email@example.com" className="inline-block px-8 py-4 border border-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 contact-element">
          hello@example.com
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
