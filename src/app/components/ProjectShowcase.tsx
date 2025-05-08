"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState, MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Application",
    image: "/images/Untitled design (1).png",
    link: "https://e-commerce-website-by-raoasadmehmood.netlify.app/",
  },
  {
    title: "Automation Services Website",
    image: "/images/Untitled design (4).png",
    link: "https://e-com-hyped-project.vercel.app/",
  },
  {
    title: "E-Commerce Store built with Sanity CMS",
    image: "/images/Untitled design (3).png",
    link: "https://e-commerce-clone-rho.vercel.app/",
  },
];

const ProjectShowcase = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [cursorLabel, setCursorLabel] = useState("");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".card").forEach((el: any) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: MouseEvent, title: string) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setCursorLabel("View Project");
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  const handleClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-black" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-16 text-center">
          My Projects
        </h2>

        <div className="space-y-12">
          {projects.map(({ title, image, link }, i) => (
            <div
              key={i}
              className="card relative group overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-[#0c0c0c] cursor-none"
              onMouseMove={(e) => handleMouseMove(e, title)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(link)}
            >
              <div className="w-full h-[500px] md:h-[700px] max-w-[1200px] mx-auto relative">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/90 via-black/60 to-transparent opacity-80 transition-opacity duration-500" />
                {/* Mobile Button — shown only on mobile */}
                <div className="absolute inset-0 flex items-center justify-center md:hidden">
                  <button
                    onClick={() => handleClick(link)}
                    className="text-white px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-base font-semibold tracking-wider uppercase hover:bg-white/20 transition-all duration-300"
                  >
                    View Project
                  </button>
                </div>


                {/* Custom Cursor Label — shown only on desktop */}
                {showCursor && (
                  <div
                    className="absolute pointer-events-none z-30 text-white text-sm font-semibold bg-white/10 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md uppercase tracking-wider transition hidden md:block"
                    style={{
                      left: cursorPos.x,
                      top: cursorPos.y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {cursorLabel}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;