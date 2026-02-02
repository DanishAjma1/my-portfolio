"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Atom,
  Database,
  ArrowRight,
  Download,
  CheckCircle2,
  Zap,
  Rocket,
  Server,
  MousePointer2,
  X
} from "lucide-react";

export default function Hero() {
  // 1. State for the popup
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#020617] text-white overflow-hidden flex items-center pt-20">
      
      {/* ================= BACKGROUND LAYER ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[140px]" 
        />
        <div className="absolute bottom-0 right-0 w-[30%] h-[30%] bg-blue-900/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-8 pt-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            System Status: Optimal
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter"
          >
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400">
              Modern Sites.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed max-w-xl border-l-2 border-blue-600/30 pl-6"
          >
            I am <span className="text-white font-bold">Umar Nadeem</span>. 
            A Software Engineer specialized in <span className="text-blue-400 font-mono">MERN Stack</span> architecture 
            and high-performance digital solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={handleScrollToProjects}
              className="group relative flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-bold overflow-hidden transition-all hover:bg-blue-500 active:scale-95"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 2. Added onClick to trigger the popup */}
            <button 
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl px-8 py-4 font-bold hover:bg-slate-800 transition-all active:scale-95"
            >
              <Download size={18} />
              Resume
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-6 pt-4 mb-10"
          >
            {[
              { icon: <CheckCircle2 size={16} />, text: "VERIFIED ARCHITECT", color: "text-blue-500" },
              { icon: <Zap size={16} />, text: "HIGH PERFORMANCE", color: "text-blue-400" },
              { icon: <Rocket size={16} />, text: "FAST DELIVERY", color: "text-blue-300" }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-500 uppercase">
                <span className={feature.color}>{feature.icon}</span>
                {feature.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="absolute -inset-4 bg-blue-600/10 blur-3xl rounded-[3rem]" />
            <div className="relative rounded-[2.5rem] overflow-hidden border border-blue-500/20 shadow-2xl bg-slate-900">
              <img
                src="/me.jpeg"
                alt="Profile"
                className="w-full h-[500px] object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
            </div>

            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-2 -left-6">
              <FloatingBadge icon={<Atom size={20} />} title="React" sub="Frontend" color="text-blue-400" />
            </motion.div>

            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/2 -right-4">
              <FloatingBadge icon={<Server size={20} />} title="Node.js" sub="Backend" color="text-blue-500" />
            </motion.div>

            <div className="absolute bottom-10 -left-10 bg-slate-950 border border-blue-500/20 p-4 rounded-2xl shadow-2xl">
              <Database className="text-blue-500" size={24} />
            </div>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[300px]">
            <div className="bg-slate-900/90 border border-blue-500/20 backdrop-blur-2xl rounded-2xl p-4 flex items-center gap-4 shadow-2xl">
              <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center font-black">UN</div>
              <div>
                <h4 className="font-bold text-xs tracking-tight">Umar Nadeem</h4>
                <p className="text-[10px] text-blue-500 font-mono font-bold uppercase tracking-tighter">Verified Engineer</p>
              </div>
              <MousePointer2 className="ml-auto text-blue-500 animate-bounce" size={16} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= 3. POPUP MODAL COMPONENT ================= */}
      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            {/* Content */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[80vh] bg-slate-900 rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl"
            >
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={() => setIsResumeOpen(false)}
                  className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              {/* Embed the PDF from public folder */}
              <iframe 
                src="/umar-nadeem-cv.pdf" 
                className="w-full h-full"
                title="Resume"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

function FloatingBadge({ icon, title, sub, color }: { icon: any, title: string, sub: string, color: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-blue-500/10 bg-slate-900/80 backdrop-blur-xl px-5 py-3 shadow-2xl">
      <div className={color}>{icon}</div>
      <div>
        <p className="text-xs font-black uppercase tracking-widest">{title}</p>
        <p className="text-[10px] text-slate-500 font-mono">{sub}</p>
      </div>
    </div>
  );
}