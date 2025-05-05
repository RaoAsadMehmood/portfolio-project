// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Book, Image, Menu, X } from "lucide-react"; // Icons

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems: { name: string; path: string; icon: React.ReactNode }[] = [
    { name: "", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Work", path: "/work", icon: <Briefcase size={20} /> },
    { name: "Blog", path: "/blog", icon: <Book size={20} /> },
    
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');

        /* Hover Effect for Links */
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
        //   background-color: #ff4040; /* Reddish tone */
          transition: width 0.3s ease-in-out;
        }
        .nav-link:hover::before {
          width: 100%;
        }
      `}</style>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-0 right-0 mx-4 z-50 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 shadow-lg flex justify-between items-center"
      >
        {/* Logo on Left Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span
            style={{ fontFamily: "'Caveat', cursive" }}
            className="text-4xl text-white"
          >
            <Link href="/">Rao Asad Mehmood</Link>
          </span>
        </motion.div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Links Section for Desktop */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden md:flex gap-6 items-center bg-black/20 backdrop-blur-sm rounded-full px-4 py-2"
        >
          {navItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <span
                  className={`nav-link text-white text-sm uppercase tracking-wider px-3 py-2 rounded-full transition-all duration-300 ${
                    currentPath === item.path ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                >
                  {item.icon}
                  {item.name && <span>{item.name}</span>}
                </span>
              </Link>
            </li>
          ))}
        </motion.ul>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed top-16 left-0 right-0 mx-4 z-40 bg-black/30 backdrop-blur-md rounded-lg px-6 py-4 shadow-lg"
        >
          <ul className="flex flex-col gap-4 items-center">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path} onClick={toggleMenu}>
                  <span
                    className={`nav-link text-white text-sm uppercase tracking-wider px-3 py-2 rounded-full transition-all duration-300 ${
                      currentPath === item.path ? "bg-white/20" : "hover:bg-white/10"
                    }`}
                  >
                    {item.icon}
                    {item.name && <span>{item.name}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;