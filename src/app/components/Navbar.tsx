"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Home, User, Briefcase, Book, Menu, X } from "lucide-react";
import { FaRegRegistered } from "react-icons/fa";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false); // close mobile menu if open

    const target = document.getElementById(targetId);
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target, offsetY: 80 }, // adjust offsetY for your fixed navbar height
        ease: "power2.inOut"
      });
    }
  };

  const navItems: { name: string; path: string; icon: React.ReactNode; anchor?: boolean }[] = [
    { name: "", path: "#", icon: <Home size={20} /> },
    { name: "About", path: "#about", icon: <User size={20} />, anchor: true },
    { name: "Work", path: "#projects", icon: <Briefcase size={20} />, anchor: true },
    // { name: "Blog", path: "/blog", icon: <Book size={20} /> },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          transition: width 0.3s ease-in-out;
        }

        .nav-link:hover::before {
          width: 100%;
        }
      `}</style>

      <nav
        ref={navRef}
        className="fixed left-0 right-0 mx-4 z-50 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 shadow-lg flex justify-between items-center"
      >
        {/* Logo */}
        <div className="flex ">
          <span
            style={{ fontFamily: "'Caveat', cursive" }}
            className="text-4xl text-white flex justify-center items-center gap-2"
          >
            <Link href="/">RAM.</Link>
            <span> <FaRegRegistered size={14} /></span>
          </span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
          {navItems.map((item) => (
            <li key={item.path}>
              {item.anchor ? (
                <a
                  href={item.path}
                  className="nav-link text-white text-sm uppercase tracking-wider px-3 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
                  onClick={e => handleSmoothScroll(e, item.path.replace('#', ''))}
                >
                  {item.icon}
                  {item.name && <span>{item.name}</span>}
                </a>
              ) : (
                <a
                  href="#"
                  className="nav-link text-white text-sm uppercase tracking-wider px-3 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
                  onClick={e => {
                    e.preventDefault();
                    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.inOut" });
                    setIsOpen(false);
                  }}
                >
                  {item.icon}
                  {item.name && <span>{item.name}</span>}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed top-16 left-0 right-0 mx-4 z-40 bg-black/30 backdrop-blur-md rounded-lg px-6 py-4 shadow-lg overflow-hidden"
        >
          <ul className="flex flex-col gap-4 items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                {item.anchor ? (
                  <a
                    href={item.path}
                    className="nav-link text-white text-sm uppercase tracking-wider px-3 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
                    onClick={e => handleSmoothScroll(e, item.path.replace('#', ''))}
                  >
                    {item.icon}
                    {item.name && <span>{item.name}</span>}
                  </a>
                ) : (
                  <a
                    href="#"
                    className="nav-link text-white text-sm uppercase tracking-wider px-3 py-2 rounded-full transition-all duration-300 hover:bg-white/10"
                    onClick={e => {
                      e.preventDefault();
                      gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.inOut" });
                      setIsOpen(false);
                    }}
                  >
                    {item.icon}
                    {item.name && <span>{item.name}</span>}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
