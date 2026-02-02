"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: "01",
        title: "Restaurant Management System",
        tech: ["C++"],
        description: "A complete restaurant operations system for managing orders, menus, billing, and table reservations. Streamlines kitchen workflows with real-time order tracking and inventory updates. Designed for fast performance and reliable day-to-day restaurant management.",
        link: "#",
        github: "#",
        color: "#3b82f6"
      },
      {
        id: "02",
        title: "Finance Management System",
        tech: ["Next.Js","Tailwind Css","Material Ui"],
        description: "A modern finance dashboard for tracking expenses, budgets, and financial reports in real time. Features interactive charts, secure authentication, and responsive UI components. Helps users make smarter financial decisions with clear data insights.",
        link: "#",
        github: "#",
        color: "#60a5fa"
      },
      {
        id: "03",
        title: "B2C",
        tech: ["React","Express","Node.js","MongoDb","TypeScript"],
        description: "A scalable business-to-customer platform enabling product browsing, secure purchases, and user account management. Built with a robust MERN stack for high performance and seamless API integration. Optimized for smooth customer experience and fast content delivery.",
        link: "#",
        github: "#",
        color: "#2563eb"
      },
      {
        id: "04",
        title: "Trading Single Page",
        tech: ["Next.js","Tailwind CSS","TypeScript"],
        description: "A responsive single-page trading interface for monitoring markets, executing trades, and viewing live price updates. Designed with real-time data visualization and smooth navigation. Focused on speed, clarity, and a clean user-centric experience.",
        link: "#",
        github: "#",
        color: "#1d4ed8"
      }
      
];

export default function RecentProjects() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Creates the horizontal sliding effect
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#020617]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Watermark */}
        <div className="absolute top-10 left-10 pointer-events-none">
           <h2 className="text-white/[0.02] text-[20vw] font-black uppercase leading-none">
            WORK
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-20">
          {/* Introductory Header Card */}
          <div className="flex-shrink-0 w-[400px] flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-blue-600" />
              <span className="text-blue-500 font-mono tracking-widest text-sm uppercase">Selected Works</span>
            </div>
            <h3 className="text-white text-6xl font-bold leading-tight mb-8">
              Crafting <span className="text-blue-600">Digital</span> Experiences
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              A collection of systems and interfaces built with precision and modern engineering.
            </p>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -20 }}
              className="flex-shrink-0 w-[450px] h-[550px] bg-slate-900/40 border border-slate-800 rounded-3xl p-10 flex flex-col justify-between group hover:border-blue-500/50 transition-colors duration-500 relative overflow-hidden backdrop-blur-xl"
            >
              {/* Background Glow Effect */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700" />

              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="text-6xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors duration-500 font-mono">
                    {project.id}
                  </span>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-3 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="p-3 bg-blue-600 rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h4 className="text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h4>
                
                <p className="text-slate-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-950 border border-slate-800 text-blue-400 text-xs font-mono rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800 flex justify-between items-center group-hover:border-blue-500/30">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Layers size={16} />
                  <span>Architecture Verified</span>
                </div>
                <ArrowUpRight className="text-slate-700 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </motion.div>
          ))}

          {/* End Of Section Placeholder */}
          <div className="flex-shrink-0 w-[400px] flex items-center justify-center">
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full border border-dashed border-slate-700 flex items-center justify-center mb-4 mx-auto group-hover:border-blue-500 group-hover:rotate-90 transition-all duration-500">
                 <ArrowUpRight className="text-slate-700 group-hover:text-blue-500" size={32} />
              </div>
              <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">View Archive</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}