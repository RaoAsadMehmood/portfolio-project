"use client"; // This directive is crucial for client-side interactivity in Next.js

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins once when the module loads
gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null); // Create a ref to attach to the section element

  useLayoutEffect(() => {
    // Create a GSAP context to manage animations. This ensures animations are
    // properly cleaned up when the component unmounts, preventing memory leaks.
    const ctx = gsap.context(() => {
      // Animate elements with the class 'contact-element'
      gsap.from(".contact-element", {
        opacity: 0,       // Start with opacity 0 (fully transparent)
        y: 50,            // Start 50 pixels below their final position
        duration: 1,      // Animation duration of 1 second
        ease: "power3.out", // Easing function for a smooth, natural feel
        stagger: 0.2,     // Stagger the animation of each element by 0.2 seconds
        scrollTrigger: {
          trigger: sectionRef.current, // The section itself (referenced by sectionRef) is the trigger
          start: "top 80%",          // Animation starts when the top of the section is 80% down the viewport
          // markers: true, // Uncomment this line for debugging ScrollTrigger behavior in development
        },
      });
    }, sectionRef); // Scope the GSAP context to the sectionRef

    // Cleanup function: revert all animations created within this context
    // when the component unmounts or dependencies change (empty array means unmount)
    return () => ctx.revert();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <section
      className="w-full py-24 px-6 md:px-12 lg:px-24 bg-black text-white flex items-center justify-center min-h-screen"
      id="contact-section-animated" // ID for potential external targeting (e.g., hash links)
      ref={sectionRef} // Assign the ref to the section element for GSAP to target
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-xl font-medium text-gray-400 mb-4 contact-element">(003)</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 contact-element">
          Seeking to enhance your business with exceptional front-end development expertise?
        </h2>
        <p className="text-2xl md:text-3xl font-semibold text-gray-200 mb-12 contact-element">
          Let&apos; connect and discuss your development needs.
        </p>
        {/* Contact Button: Please place your desired contact button HTML here. */}
        {/* Make sure to add the class 'contact-element' to your button for it to be animated by GSAP. */}
        {/* Example of a contact button: */}
        <a href="mailto:your-email@example.com" className="inline-block px-8 py-4 border border-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 contact-element">
          hello@example.com
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
