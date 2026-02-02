"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Server, 
  LayoutDashboard, 
  Globe2, 
  Zap, 
  Box, 
  CreditCard, 
  Infinity, 
  GitBranch,
  Code2,
  Table,
  FileJson,
  Wind,
  Coffee
} from 'lucide-react';

const skills = [
  { name: "React", icon: <LayoutDashboard />, x: 15, y: 25, level: 95, color: "#61DAFB" },
  { name: "Next.js", icon: <Globe2 />, x: 12, y: 55, level: 92, color: "#ffffff" },
  { name: "Node.js", icon: <Server />, x: 80, y: 20, level: 90, color: "#339933" },
  { name: "Express", icon: <FileJson />, x: 72, y: 42, level: 88, color: "#eeeeee" },
  { name: "MongoDB", icon: <Database />, x: 85, y: 70, level: 85, color: "#47A248" },
  { name: "MySQL", icon: <Table />, x: 62, y: 88, level: 82, color: "#00758F" },
  { name: "PHP", icon: <Coffee />, x: 40, y: 90, level: 75, color: "#777BB4" },
  { name: "Three.js", icon: <Box />, x: 50, y: 10, level: 78, color: "#fcca03" },
  { name: "Stripe", icon: <CreditCard />, x: 90, y: 45, level: 88, color: "#635bff" },
  { name: "Tailwind", icon: <Wind />, x: 30, y: 80, level: 98, color: "#06B6D4" },
  { name: "DevOps", icon: <Infinity />, x: 30, y: 12, level: 82, color: "#2563EB" },
  { name: "Git", icon: <GitBranch />, x: 10, y: 85, level: 90, color: "#F05032" },
];

export default function TechNeuralNetwork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-[#020617] flex flex-col items-center justify-center overflow-hidden py-20 px-4">
      
      {/* NEW HEADER SECTION */}
      <div className="relative z-20 text-center mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight"
        >
          Technical <span className='text-blue-600'>Ecosystem</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 mt-4 font-mono text-sm uppercase tracking-[0.3em]"
        >
          Neural Network of My Modern Tech Stack
        </motion.p>
      </div>

      {/* 1. CENTERED BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2 className="text-white/[0.03] text-[15vw] font-black uppercase tracking-tighter leading-none text-center">
          Stack<br/>Focus
        </h2>
      </div>

      {/* 2. BACKGROUND MESH */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="relative w-full max-w-5xl h-[600px] z-10">
        
        {/* SVG NETWORK CONNECTIONS */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <filter id="glow-effect">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {skills.map((skill, i) => (
            <React.Fragment key={`path-${i}`}>
              <motion.line
                x1="50%" y1="50%"
                x2={`${skill.x}%`} y2={`${skill.y}%`}
                stroke={hoveredIndex === i ? skill.color : "#1e40af"}
                strokeWidth={hoveredIndex === i ? "2" : "1"}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredIndex === i ? 0.8 : 0.2,
                }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.circle
                r="2"
                fill={skill.color}
                filter="url(#glow-effect)"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ 
                  duration: 2 + Math.random() * 2, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: i * 0.2 
                }}
                style={{
                  offsetPath: `path('M ${typeof window !== 'undefined' ? window.innerWidth * 0.5 : 500} ${typeof window !== 'undefined' ? 300 : 300} L ${skill.x * 10} ${skill.y * 6}')`,
                }}
              />
            </React.Fragment>
          ))}
        </svg>

        {/* 3. CENTRAL HUB */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
          <motion.div 
            animate={{ 
              boxShadow: hoveredIndex !== null 
                ? `0 0 60px ${skills[hoveredIndex].color}33` 
                : "0 0 20px rgba(37,99,235,0.1)"
            }}
            className="w-28 h-28 md:w-36 md:h-36 bg-slate-950 border-2 border-blue-500/20 rounded-full flex flex-col items-center justify-center backdrop-blur-3xl relative"
          >
            <div className="relative z-50">
              <AnimatePresence mode="wait">
                {hoveredIndex !== null ? (
                  <motion.div
                    key={hoveredIndex}
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: skills[hoveredIndex].color }}
                  >
                    {React.cloneElement(skills[hoveredIndex].icon as React.ReactElement, { size: 40 })}
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center"
                  >
                    <Code2 className="text-blue-500 animate-pulse" size={40} />
                    <span className="text-[10px] text-blue-400 font-mono tracking-widest mt-2 uppercase">Core</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-ping" />
          </motion.div>
        </div>

        {/* 4. SKILL NODES */}
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 15, delay: i * 0.05 }}
            style={{ left: `${skill.x}%`, top: `${skill.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div 
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                className={`p-3 md:p-4 rounded-2xl bg-slate-900/80 border transition-all duration-300 backdrop-blur-sm ${
                  hoveredIndex === i ? 'border-white shadow-xl' : 'border-blue-500/20'
                }`}
                style={{ 
                  borderColor: hoveredIndex === i ? skill.color : '',
                  boxShadow: hoveredIndex === i ? `0 0 20px ${skill.color}44` : ''
                }}
              >
                <div 
                  className="transition-colors duration-300" 
                  style={{ color: hoveredIndex === i ? skill.color : '#475569' }}
                >
                  {React.cloneElement(skill.icon as React.ReactElement, { size: 24 })}
                </div>
              </motion.div>

              {/* Mastery Tooltip - MODIFIED: NAMES ONLY */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -65 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap z-[60]"
                  >
                    <div className="bg-white text-slate-950 px-3 py-1.5 rounded-lg shadow-2xl">
                      <p className="text-[10px] font-black uppercase tracking-widest">
                        {skill.name}
                      </p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-white" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}