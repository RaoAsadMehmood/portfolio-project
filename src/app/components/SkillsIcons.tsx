"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Web Development Icons
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiPython, SiSanity, SiMongodb, SiOpenai } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiN8N } from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { SiClaude } from "react-icons/si";
import { SiMake } from "react-icons/si";



const icons = [
  // --- CORE WEB TECH ---
  { icon: <IoLogoHtml5 size={120} />, label: "HTML5 / (Structure) " },
  { icon: <IoLogoCss3 size={120} />, label: "CSS3 / (Styling) " },
  { icon: <FaJsSquare size={120} />, label: "JavaScript / (Programming Language) " },
  { icon: <BiLogoTypescript size={120} />, label: "TypeScript / (Programming Language) " },
  
  // --- FRAMEWORKS & STYLING ---
  { icon: <SiTailwindcss size={120} />, label: "Tailwind CSS / (Styling)" },
  { icon: <FaReact size={120} />, label: "React" },
  { icon: <RiNextjsLine size={120} />, label: "Next.js " },
  { icon: <TbBrandFramerMotion size={120} />, label: "Framer Motion / (Animation)" },

  // --- FULL-STACK & BACKEND ---
  { icon: <SiPython size={120} />, label: "Python / (Programming Language) " },
  { icon: <IoLogoNodejs size={120} />, label: "Node.js (Backend)" }, // NEW: Backend Runtime
  { icon: <SiMongodb size={120} />, label: "MongoDB (Database)" }, // NEW: Database
  { icon: <SiSanity size={120} />, label: "Sanity (CMS)" },
  
  // --- AGENTIC AI & LLM ---
  { icon: <SiN8N size={120} />, label: "n8n (Workflow Automation)" }, // NEW: Workflow 
  { icon: <SiMake size={120} />, label: "Make (Integromat) Automation" }, // NEW: Workflow
  { icon: <SiOpenai size={120} />, label: "OpenAI / LLM Integration" }, // NEW: AI Agents/LLMs
  { icon: <RiGeminiFill size={120} />, label: "Google Gemini / LLM Integration" }, // NEW: Google Gemini
  { icon: <SiClaude size={120} />, label: "Anthropic Claude / LLM Integration" }, // NEW: Anthropic Claude
];

export default function SkillsIcons() {
  const labelRef = useRef<HTMLDivElement>(null);
  const [hoverLabel, setHoverLabel] = useState("");

  useEffect(() => {
    const label = labelRef.current;

    if (!label) return;

    gsap.set(label, { opacity: 0, scale: 0.8 }); // Initial state

    const moveLabel = (e: MouseEvent) => {
      gsap.to(label, {
        x: e.clientX + 20,
        y: e.clientY + 20,
        duration: 0.1,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", moveLabel);
    return () => window.removeEventListener("mousemove", moveLabel);
  }, []);

  const showLabel = (text: string) => {
    setHoverLabel(text);
    gsap.to(labelRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: "power1.out",
    });
  };

  const hideLabel = () => {
    gsap.to(labelRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      ease: "power1.out",
    });
  };

  return (
    <div className="relative">
      {/* Floating Label (Mouse Follower) */}
      <div
        ref={labelRef}
        className="fixed top-0 left-0 z-50 px-3 py-1 bg-white text-black text-sm rounded-md pointer-events-none font-medium shadow-md"
      >
        {hoverLabel}
      </div>

      {/* Icon Grid */}
      <div className="flex justify-center items-center gap-8 flex-wrap py-10">
        {icons.map(({ icon, label }, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-110 cursor-pointer text-white/50 hover:text-white"
            onMouseEnter={() => showLabel(label)}
            onMouseLeave={hideLabel}
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}