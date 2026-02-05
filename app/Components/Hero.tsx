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
  X,
} from "lucide-react";

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-transparent text-white overflow-hidden flex items-center pt-24 md:pt-32 pb-12">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[70%] md:w-[50%] h-[50%] bg-[#8847fd]/50 rounded-full blur-[100px] md:blur-[140px]"
        />
      </div>

      <div className="relative mx-auto max-w-10/12 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        <div className="order-2 lg:order-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black w-fit leading-15 tracking-wide flex items-center flex-col"
          >
            DANISH AJMAL <br />
            <span className="text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight bg-clip-text bg-linear-to-r from-[#8d59ed] via-[#3b0b94] to-[#220756]">
              FULL STACK DEVELOPER
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl lg:mx-0 border-none lg:border-l-2 lg:border-blue-600/30 lg:pl-6"
          >
            A{" "}
            <span className="text-white font-medium">
              {" "}
              Full stack Developer{" "}
            </span>{" "}
            specialized in{" "}
            <span className="text-[#8847fd] font-mono </span> text-sm md:text-base">
              MERN Stack & Next.js
            </span>{" "}
            architecture and high-performance digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto group relative flex items-center justify-center gap-3 rounded-2xl bg-[#3c11a0] md:text-base text-sm md:px-8 px-6 py-2 font-bold overflow-hidden hover:bg-[#5122be] active:scale-95 transition-colors duration-300 hover:cursor-pointer"
            >
              View Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>

            <button
              onClick={() => setIsResumeOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl border border-[#120945] bg-[#120945]/50 backdrop-blur-xl md:text-base text-sm md:px-8 px-6 py-2 font-bold hover:bg-[#120945] hover:cursor-pointer transition-colors duration-300 active:scale-95"
            >
              <Download size={18} />
              Resume
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4"
          >
            {[
              {
                icon: <CheckCircle2 size={14} />,
                text: "VERIFIED ARCHITECT",
                color: "text-[#8847fd]",
              },
              {
                icon: <Zap size={14} />,
                text: "HIGH PERFORMANCE",
                color: "text-[#8847fd]",
              },
              {
                icon: <Rocket size={14} />,
                text: "FAST DELIVERY",
                color: "text-[#8847fd]",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-[8px] md:text-[10px] font-black tracking-widest text-slate-500 uppercase"
              >
                <span className={feature.color}>{feature.icon}</span>
                {feature.text}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 relative px-4 sm:px-10 lg:px-0"
        >
          <div className="relative max-w-[450px] mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[120%] h-[120%] border border-dashed border-[#3c11a0] rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[105%] h-[105%] border border-dotted border-blue-600/10 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute w-[80%] h-[80%] bg-blue-500/10 blur-[60px] rounded-full"
              />
            </div>

            <div className="absolute -inset-4 bg-[#8847fd]/10 blur-3xl rounded-[3rem]" />
            <div className="relative rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/me.jpeg"
                alt="Profile"
                className="w-full h-85 sm:h-100 md:h-125 object-cover object-top opacity-80 grayscale transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-1 -left-2 md:-left-10 z-20"
            >
              <FloatingBadge
                icon={<Atom size={16} className="md:w-5 md:h-5" />}
                title="React & Next.js"
                sub="Frontend"
                color="text-[#8847fd]"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/3 -right-2 md:-right-4 z-20"
            >
              <FloatingBadge
                icon={<Server size={16} className="md:w-5 md:h-5" />}
                title="Node.js"
                sub="Backend"
                color="text-[#8847fd]"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-16 -left-4 md:-left-10 z-20"
            >
              <FloatingBadge
                icon={<Atom size={16} className="md:w-5 md:h-5" />}
                title="MongoDB & MYSQL"
                sub="Databases"
                color="text-[#8847fd]"
              />
            </motion.div>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-55 md:w-full md:max-w-75">
            <div className="bg-[#120945]/20 border border-[#120945] backdrop-blur-2xl rounded-xl md:rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 shadow-2xl">
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-[#3c11a0] flex items-center justify-center font-black text-xs md:text-base">
                DA
              </div>
              <div>
                <h4 className="font-bold text-[10px] md:text-xs tracking-tight uppercase">
                  Danish Ajmal
                </h4>
                <p className="text-[8px] md:text-[10px] text-[#8847fd] font-mono font-bold uppercase tracking-tighter">
                  MERN & Next.js Specialist
                </p>
              </div>
              <p className="ml-auto text-[#8847fd] animate-bounce font-extrabold">
                !
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[85vh] sm:h-[80vh] bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden border border-[#120945] shadow-2xl"
            >
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-110">
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
              <iframe
                src="/umar-nadeem-cv.pdf"
                className="w-full h-full border-none"
                title="Resume"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FloatingBadge({
  icon,
  title,
  sub,
  color,
}: {
  icon: any;
  title: string;
  sub: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 md:gap-3 rounded-lg md:rounded-2xl border border-[#120945] bg-[#120945]/20 backdrop-blur-xl px-2 py-1.5 md:px-5 md:py-3 shadow-2xl">
      <div className={color}>{icon}</div>
      <div>
        <p className="text-[7px] md:text-xs font-black uppercase tracking-widest leading-none">
          {title}
        </p>
        <p className="text-[6px] md:text-[10px] text-slate-500 font-mono mt-0.5 md:mt-1">
          {sub}
        </p>
      </div>
    </div>
  );
}
