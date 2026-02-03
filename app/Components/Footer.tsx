"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowUp, 
  Cpu, 
  ShieldCheck, 
  Globe
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020617] pt-20 pb-10 overflow-hidden border-t border-blue-500/10">
      
      {/* 1. CYBER HORIZON GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-blue-600/10 blur-[60px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-1 space-y-6">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
                UN
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-white">Umar</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Architecting high-performance digital ecosystems with precision, passion, and modern engineering standards.
            </p>
          </div>

          {/* QUICK LINKS - Updated Hrefs to match Page IDs */}
          <div className="md:col-span-1">
            <h4 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SYSTEM STATUS */}
          <div className="md:col-span-1">
            <h4 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">System Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <Cpu size={14} className="text-blue-600" />
                <span className="font-mono">UPTIME: 99.9%</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <ShieldCheck size={14} className="text-blue-600" />
                <span className="font-mono">SECURE PROTOCOL</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <Globe size={14} className="text-blue-600" />
                <span className="font-mono">REMOTE_OPS: ACTIVE</span>
              </div>
            </div>
          </div>

          {/* SOCIAL CONNECT */}
          <div className="md:col-span-1">
            <h4 className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={18} />, href: "http://linkedin.com/in/umar-nadeem-118181398" },
                { icon: <Github size={18} />, href: "https://github.com/umar24012003" },
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/umar_n24?igsh=cWdicHV6ZmUxeDNi&utm_source=qr" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[10px] font-mono text-slate-600 uppercase tracking-widest text-center md:text-left">
            <span>© 2026 Umar Nadeem</span>
            <span className="hidden md:block opacity-30">|</span>
            <span>Hand-crafted in MERN Stack</span>
          </div>

          {/* BACK TO TOP */}
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-blue-500 font-black text-[10px] uppercase tracking-widest bg-blue-500/5 hover:bg-blue-500/10 px-6 py-3 rounded-full border border-blue-500/20 transition-all"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* DECORATIVE TERMINAL STRIP */}
      <div className="mt-10 w-full overflow-hidden whitespace-nowrap opacity-5 select-none pointer-events-none">
        <div className="flex gap-10 text-white font-mono text-[80px] font-black leading-none animate-marquee">
          <span>DEPLOYMENT_READY</span>
          <span>SYSTEM_INITIATED</span>
          <span>DATA_FLOW_OPTIMIZED</span>
          <span>ELITE_ARCHITECTURE</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}