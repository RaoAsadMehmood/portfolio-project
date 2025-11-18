"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaCode, FaBriefcase, FaEnvelope, FaUser, FaHammer, FaChevronDown } from 'react-icons/fa';

// Define navigation links with icons and correct targets
const navLinks = [
  // Scroll Sections (on the homepage)
  { name: 'Skills', href: '#skills', icon: FaCode, isRoute: false },
  { name: 'Projects', href: '#projects', icon: FaBriefcase, isRoute: false },
  // Using the correct ID for the Contact section
  { name: 'Contact', href: '#contact-section-animated', icon: FaEnvelope, isRoute: false }, 
  
  // External Pages (New Routes)
  { name: 'About', href: '/about', icon: FaUser, isRoute: true },
  { name: 'Work', href: '/work', icon: FaHammer, isRoute: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const goTo = (target: string) => {
    const isHash = target.startsWith("#");
    const isHome = pathname === "/";

    if (isHash) {
      if (isHome) {
        // Scroll only if on the homepage
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If not on the homepage, navigate to the homepage and include the hash
        router.push("/" + target);
      }
      setOpen(false);
      return;
    }

    // For absolute routes (like /about or /work)
    router.push(target);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        
        {/* LOGO: Styled RA Logo using Caveat font */}
        <div 
          className="font-caveat text-3xl md:text-4xl cursor-pointer tracking-wider"
          onClick={() => goTo("/")}
        >
          <span className="text-indigo-400">R</span>A<sub className="text-base font-sans font-light text-white/50 ml-1">DEV</sub>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-lg tracking-wide">
          {navLinks.map(link => (
            <button 
              key={link.name} 
              onClick={() => goTo(link.href)} 
              className="group flex items-center gap-2 hover:text-indigo-400 transition-colors duration-200"
            >
              <link.icon className="text-indigo-400 transition-transform duration-300 group-hover:scale-110" size={16} />
              {link.name}
            </button>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE NAV DROPDOWN */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100 border-t border-white/10' : 'max-h-0 opacity-0'
        } bg-black/90`}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map(link => (
            <button 
              key={link.name} 
              onClick={() => goTo(link.href)} 
              className="text-left text-xl py-2 flex items-center gap-4 hover:text-indigo-400 transition-colors duration-200"
            >
              <link.icon className="text-indigo-400" size={20} />
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}