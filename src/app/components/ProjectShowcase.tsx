"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState, MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Extended project data to include description and tech stack
const projects = [
  {
    title: "Bandage Store",
    image: "/images/Untitled design (1).png",
    link: "https://e-commerce-website-by-raoasadmehmood.netlify.app/",
    description: "A full-featured e-commerce platform with product listings, a shopping cart, and user authentication for a smooth shopping experience.",
    techStack: "HTML5, CSS3, JavaScript, Firebase",
  },
  {
    title: "ECOM Hyped | One Stop Shop for all Automation needs",
    image: "/images/Untitled design (4).png",
    link: "https://e-com-hyped-project.vercel.app/",
    description: "A brand revamp that showcases various automation services for Amazon | ETSY | Shopify | TikTok  ",
    techStack: "Next.js, Tailwind CSS, Framer Motion, Contact Form API",
  },
  {
    title: "E-Commerce Store with Sanity CMS",
    image: "/images/Untitled design (3).png",
    link: "https://e-commerce-clone-rho.vercel.app/",
    description: "A sturdy e-commerce store created with Sanity CMS for efficient product management and a highly responsive user interface.",
    techStack: "Next.js, Tailwind CSS, Sanity CMS, TypeScript, ",
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

  const handleMouseMove = (e: MouseEvent) => { // Removed title parameter as it's not needed for the custom cursor anymore
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setCursorLabel("View Project"); // Still shows "View Project" on hover
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
          {projects.map(({ title, image, link, description, techStack }, i) => (
            <div
              key={i}
              className="card relative group overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-[#0c0c0c] cursor-none"
              onMouseMove={handleMouseMove} // Simplified
              onMouseLeave={handleMouseLeave}
              // Removed direct onClick from here to allow for the overlay button click
            >
              <div className="w-full h-[500px] md:h-[700px] max-w-[1200px] mx-auto relative">
                <Image
                  src={image}
                  alt={title}
                  layout="fill"
                  // objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-700 ease-in-out object-cover"
                />

                {/* Existing Overlay for initial image darkening */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/90 via-black/60 to-transparent opacity-80 transition-opacity duration-500" />

                {/* NEW: Project Details Overlay - visible on desktop hover */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10 hidden md:block">
                  <h3 className="text-3xl font-bold mb-2">{title}</h3>
                  <p className="text-lg mb-4 text-gray-300">
                    {description}
                  </p>
                  <p className="text-base font-semibold text-teal-300 mb-6">
                    Tech Stack: <span className="font-normal text-gray-200">{techStack}</span>
                  </p>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleClick(link); }}
                    className="text-white px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-base font-semibold tracking-wider uppercase hover:bg-white/20 transition-all duration-300"
                  >
                    View Live Project
                  </button>
                </div>

                {/* Mobile Button - shown only on mobile and acts as the primary click target */}
                <div className="absolute inset-0 flex items-center justify-center md:hidden z-10">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleClick(link); }}
                    className="text-white px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-base font-semibold tracking-wider uppercase hover:bg-white/20 transition-all duration-300"
                  >
                    View Project
                  </button>
                </div>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;