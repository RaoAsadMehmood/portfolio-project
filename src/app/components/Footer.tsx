"use client";

import React, { useRef, useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { gsap } from "gsap";

const currentYear = new Date().getFullYear();

// Navigation links
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact-section-animated" },
];

// Social links
const socialLinks = [
  { icon: FaGithub, href: "https://github.com/RaoAsadMehmood/", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/rao-asad-mehmood/", label: "LinkedIn" },
  { icon: FaFacebookF, href: "https://www.facebook.com/raoasadmhmood", label: "Facebook" },
  { icon: FaInstagram, href: "https://instagram.com/raoasadmhmood", label: "Instagram" },
  { icon: FaEnvelope, href: "mailto:rao.asad.mehmood.dev@gmail.com", label: "Email" },
];

const Footer = () => {
  const iconRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    iconRefs.current.forEach((el) => {
      if (!el) return;

      // Hover in animation
      el.addEventListener("mouseenter", () => {
        gsap.to(el, {
          scale: 1.18,
          y: -4,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      // Hover out animation
      el.addEventListener("mouseleave", () => {
        gsap.to(el, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <footer className="w-full bg-[#0a0a0a] text-white/80 border-t border-indigo-900/40 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-indigo-900/30 pb-10">

          {/* Column 1: Logo + Mission */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-widest font-caveat">
              RAO ASAD MEHMOOD
            </h3>

            <p className="text-sm text-white/60">
              Building intelligent <b>AI Agents</b> and high-performance 
              <b> Full-Stack Web Platforms</b>. Automation meets execution.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-indigo-400 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-indigo-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Icons (GSAP Animated) */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-indigo-400 uppercase tracking-wider">
              Connect
            </h4>

            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  ref={(el) => {
                    iconRefs.current[index] = el;
                    return undefined;
                  }}
                  className="h-[24px] w-[24px] flex items-center justify-center 
                             text-white/70 hover:text-indigo-400 
                             transition-colors duration-200 cursor-pointer"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Expertise */}
          <div className="space-y-4 hidden md:block">
            <h4 className="text-base font-semibold text-indigo-400 uppercase tracking-wider">
              Expertise
            </h4>

            <ul className="space-y-2 text-sm text-white/70">
              <li>AI Automation & LLMs</li>
              <li>Full-Stack Development</li>
              <li>Performance Optimization</li>
              <li>UX & GSAP Animation</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-sm text-white/50">
          &copy; {currentYear} Rao Asad Mehmood. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
