import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

// Quick links data
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact-section-animated' },
];

// Social media links data
const socialLinks = [
  { icon: FaGithub, href: "https://github.com/RaoAsadMehmood/", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/rao-asad-mehmood/", label: "LinkedIn" },
//   { icon: FaTwitter, href: "https://twitter.com/raoasadmehmood", label: "Twitter" },
  { icon: FaEnvelope, href: "mailto:rao.asad.mehmood.dev@example.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white/80 border-t border-indigo-900/40 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-indigo-900/30 pb-10">
          
          {/* Column 1: Logo and Mission */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-widest font-caveat">RAO ASAD MEHMOOD</h3>
            <p className="text-sm text-white/60">
              Building intelligent <b>AI Agents</b> and high-performance <b>Full-Stack Web Platforms</b>. Automation meets execution.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-indigo-400 uppercase tracking-wider">Explore</h4>
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
          
          {/* Column 3: Social/Connect */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-indigo-400 uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={item.label}
                  className="text-white/70 hover:text-indigo-400 transition-colors duration-200"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 4: Expertise Summary */}
          <div className="space-y-4 hidden md:block">
            <h4 className="text-base font-semibold text-indigo-400 uppercase tracking-wider">Expertise</h4>
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