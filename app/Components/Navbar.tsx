"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  // Phone number from CV 
  const phoneNumber = "+923147865460";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled || isOpen ? "py-3 bg-[#020617]/90 backdrop-blur-xl border-b border-blue-500/10" : "py-5 bg-transparent"
      }`}
    >
      <motion.div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500 origin-left z-50" style={{ scaleX }} />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <a href="#home" onClick={scrollToTop} className="flex items-center gap-3 group cursor-pointer relative z-[110]">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000" />
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-slate-950 border border-blue-500/50 text-blue-500 font-black text-sm sm:text-base transition-transform group-hover:scale-105">
              UN
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xs sm:text-sm font-black tracking-tighter uppercase leading-none">Umar</span>
            <span className="text-[8px] sm:text-[10px] text-blue-500 font-mono font-bold tracking-widest uppercase">Developer</span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-slate-900/50 border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="px-5 py-2 text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-400 hover:bg-blue-500/5 rounded-full transition-all duration-300">
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-4 relative z-[110]">
          {/* Desktop Socials & Call Link */}
          <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-4">
            <a 
              href={`tel:${phoneNumber}`} 
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-[10px] font-bold uppercase tracking-widest"
            >
              <Phone size={14} />
              Let's Talk
            </a>
            <a href="http://linkedin.com/in/umar-nadeem-118181398" target="_blank" className="text-slate-400 hover:text-blue-500 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/umar_n24?igsh=cWdicHV6ZmUxeDNi&utm_source=qr" target="_blank" className="text-slate-400 hover:text-pink-500 transition-colors">
              <Instagram size={18} />
            </a>
          </div>

          {/* Mobile "Call Me" Button (Hidden on Desktop) */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${phoneNumber}`}
            className="flex md:hidden items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-[10px] font-black uppercase text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Call Me
          </motion.a>

          {/* MOBILE MENU TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg bg-slate-900 border border-white/10 text-white">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} className="fixed inset-0 z-[100] h-screen w-full bg-[#020617] p-8 md:hidden flex flex-col justify-center items-center">
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-black uppercase tracking-tighter text-white hover:text-blue-500 transition-colors">{link.name}</a>
              ))}
              
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-2xl font-black uppercase tracking-tighter text-blue-400 mt-4">
                <Phone size={24} />
                Call Me
              </a>

              <div className="flex gap-8 mt-4">
                <Linkedin size={28} className="text-blue-500" />
                <Instagram size={28} className="text-pink-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;