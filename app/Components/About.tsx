"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Activity,
  Cpu,
  Code,
  Layers,
  Database,
  Terminal,
  ShieldCheck,
  Zap,
  Box,
  Binary,
  Workflow
} from "lucide-react";

const AboutMe = () => {
  return (
    <section className="relative min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      
      {/* --- HYPER-ATMOSPHERE --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, 50, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            y: [0, -50, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] right-[5%] w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px]" 
        />
        
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* --- HEADER: COMMAND CENTER --- */}
      <div className="relative z-10 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-6">
            <Binary size={14} className="text-blue-400 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase">Protocol: Architect_v2.0</span>
          </div>
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl font-black tracking-[ -0.05em] leading-none mb-4">
          UMAR <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700">NADEEM</span>
        </h2>
        <div className="flex items-center justify-center gap-4 text-slate-500 font-mono text-sm">
          <span className="flex items-center gap-1"><Workflow size={14}/> Full-Stack</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="flex items-center gap-1"><Box size={14}/> MERN Specialist</span>
        </div>
      </div>

      {/* --- THE BENTO INTERFACE --- */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        
        {/* CARD 1: BIO / THE CORE (Wide & Glowing) */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="md:col-span-7 relative group border border-white/10 rounded-[2rem] p-10 bg-slate-900/40 backdrop-blur-2xl overflow-hidden"
        >
          {/* Animated Border Beam */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black tracking-[0.2em] mb-8">
              <User size={16} /> 01 // IDENTITY_CORE
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white leading-tight">
              Transforming <span className="italic font-serif">complexity</span> into <br />
              <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">seamless performance.</span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              I specialize in engineering high-traffic digital ecosystems. From <span className="text-white">robust API architectures</span> to <span className="text-white">dynamic user interfaces</span>, I build products that don't just work—they scale.
            </p>
          </div>
        </motion.div>

        {/* CARD 2: REAL-TIME METRICS (Vertical) */}
        <motion.div 
          className="md:col-span-5 border border-white/10 rounded-[2rem] p-10 bg-gradient-to-b from-blue-600/10 to-transparent backdrop-blur-xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black tracking-[0.2em]">
            <Activity size={16} /> 02 // PERFORMANCE_STATS
          </div>
          
          <div className="grid grid-cols-2 gap-8 my-6">
            <div className="space-y-1">
              <span className="text-5xl font-black text-white">3.65</span>
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">GPA Intensity</p>
            </div>
            <div className="space-y-1 text-right">
              <span className="text-5xl font-black text-white">12+</span>
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Deploy_Cycles</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase">
              <span>System Efficiency</span>
              <span>98%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "98%" }}
                transition={{ duration: 1.5 }}
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-400"
              />
            </div>
          </div>
        </motion.div>

        {/* CARD 3: TERMINAL / LOGS (Dark) */}
        <motion.div 
          className="md:col-span-4 border border-white/5 rounded-[2rem] p-8 bg-black/60 backdrop-blur-3xl font-mono text-[11px] relative overflow-hidden group"
        >
          <div className="flex items-center justify-between mb-6">
             <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/50 transition-colors" />
               <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500/50 transition-colors" />
             </div>
             <span className="text-slate-600 text-[9px]">bash — 80x24</span>
          </div>
          <div className="space-y-2 text-slate-400">
            <p className="text-blue-500 italic"># Latest Deployment</p>
            <p className="flex justify-between"><span>{"->"} env.production</span> <span className="text-green-400">[READY]</span></p>
            <p className="flex justify-between"><span>{"->"} cluster.optimize()</span> <span className="text-green-400">[DONE]</span></p>
            <p className="flex justify-between"><span>{"->"} node.status</span> <span className="text-blue-400">ACTIVE</span></p>
            <p className="animate-pulse text-blue-500 mt-4 underline decoration-blue-500/20">_ system_is_running_normally</p>
          </div>
        </motion.div>

        {/* CARD 4: CAPABILITIES CIRCUIT (Wide) */}
        <motion.div 
          className="md:col-span-8 border border-white/10 rounded-[2rem] p-10 bg-slate-900/20 backdrop-blur-md relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-blue-500 text-[10px] font-black tracking-[0.2em] mb-10">
            <Cpu size={16} /> 03 // TECH_CIRCUITRY
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Code />, title: "The Frontend", list: "React, Next.js, GSAP", color: "from-blue-500/20" },
              { icon: <Layers />, title: "The Logic", list: "Node.js, Express, PHP", color: "from-indigo-500/20" },
              { icon: <Database />, title: "The Storage", list: "MongoDB, MySQL, Redis", color: "from-cyan-500/20" },
            ].map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${skill.color} to-transparent border border-white/5 hover:border-blue-500/30 transition-all`}
              >
                <div className="p-3 bg-slate-950 rounded-xl w-fit mb-4 text-blue-400 border border-white/5">
                  {skill.icon}
                </div>
                <h5 className="font-bold text-white mb-1">{skill.title}</h5>
                <p className="text-[10px] text-slate-500 font-mono">{skill.list}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* --- FLOATING CTA --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 flex flex-col items-center gap-4"
      >
        <div className="h-12 w-px bg-gradient-to-b from-blue-500 to-transparent" />
        <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2 group">
          Init Contact <Zap size={16} className="fill-current group-hover:animate-bounce" />
        </button>
      </motion.div>

    </section>
  );
};

export default AboutMe;