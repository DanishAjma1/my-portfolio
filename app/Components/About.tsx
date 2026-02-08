"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  User,
  Activity,
  Cpu,
  Layers,
  Database,
  Zap,
  Terminal,
  MousePointer2,
  Fingerprint,
  Radio,
  Globe,
  Plus,
} from "lucide-react";

const AboutMe = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-transparent text-white flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: "perspective(1000px) rotateX(60deg) translateY(100px)",
            maskImage: "linear-gradient(to bottom, transparent, black)",
          }}
        />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#120945]/20 blur-[150px] rounded-full"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl space-y-4">
        <div className="flex justify-between items-center border-b border-[#120945] pb-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#120945]/20 border border-[#120945] rounded-lg">
              <User className="text-[#8847fd]" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-mono text-[#8847fd]/60 uppercase tracking-tighter">
                Identity Verified
              </p>
              <p className="text-xs font-bold tracking-widest text-white">
                DANISH_AJMAL.FULLSTACK
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-mono text-white/50 uppercase">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-[#8847fd]" /> Region: Global
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-[#8847fd]" /> Performance: Optimized
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <motion.div
            style={{ y: y1 }}
            className="lg:col-span-7 group relative p-10 rounded-[2.5rem] bg-[#120945]/20 border border-[#120945] backdrop-blur-3xl overflow-hidden"
          >
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full border border-[#120945] bg[#120945] text-[10px] font-mono text-white mb-6 uppercase">
                Full‑Stack Developer
              </span>
              <h2 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[0.9]">
                BUILDING{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3c11a0] via-[#8847fd] to-white">
                  SCALABLE
                </span>
                <br />
                PRODUCTIVE SYSTEMS.
              </h2>
              <p className="text-blue-100/60 text-lg md:text-xl max-w-xl leading-relaxed">
                I design and ship production-grade web apps, APIs and deployment
                pipelines. I turn
                <span className="text-white italic font-serif">
                  {" "}
                  product ideas{" "}
                </span>{" "}
                into
                <span className="text-[#8847fd] font-mono font-bold uppercase tracking-tight">
                  {" "}
                  reliable, cloud-native{" "}
                </span>{" "}
                solutions that scale.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {/* Experience Card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-8 rounded-[2rem] bg-[#120945] border border-[#120945] flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="relative z-10">
                <p className="text-blue-100 font-mono text-xs uppercase tracking-[0.2em] mb-2">
                  Professional Experience
                </p>
                <h3 className="text-6xl font-black text-white italic">
                  2<span className="text-blue-500 text-xl">+</span>
                </h3>
                <p className="text-blue-100/80 text-sm font-medium">
                  Years delivering web platforms & services
                </p>
              </div>
              <Activity
                className="absolute right-[-20px] bottom-[-20px] opacity-10 text-white group-hover:rotate-12 transition-transform duration-500"
                size={200}
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative p-6 rounded-[2rem] bg-[#120945]/20 border border-[#120945] backdrop-blur-md overflow-hidden group">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-mono text-[#8847fd] uppercase tracking-widest">
                    Deployment Uptime
                  </p>
                  <div className="h-2 w-2 rounded-full bg-[#120945]/20 animate-ping" />
                </div>
                <p className="text-4xl font-black text-white">
                  99.95<span className="text-blue-500 text-xl">%</span>
                </p>

                {/* Heartbeat Visualization */}
                <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end opacity-30 px-2 gap-[2px]">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [8, 36, 8, 18, 8] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: i * 0.08,
                      }}
                      className="w-full bg-[#120945]/20 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>

              <div className="relative p-6 rounded-[2rem] bg-[#120945]/20 border border-[#120945] backdrop-blur-md overflow-hidden flex flex-col justify-center items-center group">
                <div className="absolute top-4 left-4">
                  <p className="text-[10px] font-mono text-[#8847fd] uppercase tracking-widest">
                    Production Projects
                  </p>
                </div>

                {/* Orbit Spinner Animation */}
                <div className="relative h-16 w-16 mb-2 mt-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border-2 border-dashed border-[#120945] rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Plus
                      size={20}
                      className="text-[#8847fd] group-hover:scale-125 transition-transform"
                    />
                  </div>
                </div>

                <p className="text-4xl font-black text-white">
                  10<span className="text-blue-500 text-xl">+</span>
                </p>
                <p className="text-[9px] font-mono text-[#8847fd]/40 uppercase">
                  Live & Maintaining
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-8 rounded-[2rem] bg-[#120945]/20 border border-[#120945] backdrop-blur-md">
              <h4 className="text-sm font-mono text-[#8847fd] uppercase tracking-widest mb-4">
                Core Technical Skills
              </h4>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-900/20 rounded-md">
                    <Layers className="text-[#8847fd]" size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Frontend</div>
                    <div className="text-xs text-white/60">
                      React · Next.js · TypeScript · Tailwind
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-900/20 rounded-md">
                    <Cpu className="text-[#8847fd]" size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Backend</div>
                    <div className="text-xs text-white/60">
                      Node.js · Express · REST · GraphQL
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-900/20 rounded-md">
                    <Database className="text-[#8847fd]" size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Data & APIs
                    </div>
                    <div className="text-xs text-white/60">
                      Databases · Third‑party APIs (GCP, Stripe, etc..) · OAuth 2.0
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-900/20 rounded-md">
                    <Terminal className="text-[#8847fd]" size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">DevOps</div>
                    <div className="text-xs text-white/60">
                      Docker · CI/CD · GitHub Actions · Vercel · Railway · AWS 
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2 bg-blue-900/20 rounded-md">
                    <Fingerprint className="text-[#8847fd]" size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Security & Auth
                    </div>
                    <div className="text-xs text-white/60">
                      OAuth2 · 2FA · JWT · Secure sessions
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#120945]/20 border border-[#120945] backdrop-blur-md">
              <h4 className="text-sm font-mono text-white uppercase tracking-widest mb-4">
                Soft Skills & Workflow
              </h4>

              <ul className="space-y-4">
                <li>
                  <div className="text-sm font-bold text-white">
                    Attention to Detail
                  </div>
                  <div className="w-full h-2 bg-[#120945]/20 rounded mt-2">
                    <div className="h-2 bg-[#3c11a0] rounded w-11/12" />
                  </div>
                </li>
                <li>
                  <div className="text-sm font-bold text-white">
                    User‑Centric Design
                  </div>
                  <div className="w-full h-2 bg-[#120945]/20 rounded mt-2">
                    <div className="h-2 bg-[#3c11a0] rounded w-10/12" />
                  </div>
                </li>
                <li>
                  <div className="text-sm font-bold text-white">
                    Cross‑Functional Collaboration
                  </div>
                  <div className="w-full h-2 bg-[#120945]/20 rounded mt-2">
                    <div className="h-2 bg-[#3c11a0] rounded w-10/12" />
                  </div>
                </li>
                <li>
                  <div className="text-sm font-bold text-white">
                    Effective Teamwork
                  </div>
                  <div className="w-full h-2 bg-[#120945]/20 rounded mt-2">
                    <div className="h-2 bg-[#3c11a0] rounded w-9/12" />
                  </div>
                </li>
                <li className="pt-3 text-xs text-white/70">
                  <Radio
                    className="inline-block mr-2 text-[#8847fd]"
                    size={14}
                  />
                  <span className="align-middle">
                    Peer Code Reviews - Expert in Modern Web Architecture & Best Practices
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <motion.div className="lg:col-span-12 relative rounded-[2rem] bg-[#010409] border border-[#120945] overflow-hidden">
            <div className="flex items-center px-6 py-4 bg-[#120945]/20 border-b border-[#120945] justify-between">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-900 border border-[#120945]" />
                <div className="w-2.5 h-2.5 rounded-full bg-blue-900 border border-[#120945]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#120945]/20/40" />
              </div>
              <div className="text-[10px] font-mono text-[#8847fd]/50 uppercase tracking-widest">
                Profile.sys
              </div>
              <Terminal size={14} className="text-blue-800" />
            </div>
            <div className="p-8 font-mono text-sm md:text-base leading-relaxed ">
              <p className="flex gap-4">
                <span className="text-[#3c11a0] italic">01</span>
                <span>
                  <span className="text-[#8847fd]">class</span>{" "}
                  <span className="text-white">DeveloperProfile</span>{" "}
                  <span className="text-blue-200">{"{"}</span>
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-[#3c11a0] italic">02</span>
                <span className="pl-6 text-blue-100/40 italic">
                   Building scalable, maintainable web systems
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-[#3c11a0] italic">03</span>
                <span className="pl-6">
                  stack ={" "}
                  <span className="text-[#8847fd]">
                    {`["MERN", "Next.js", "Third Party APIs"]`}
                  </span>
                  ;
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-[#3c11a0] italic">04</span>
                <span className="pl-6">
                  focus ={" "}
                  <span className="text-[#8847fd]">{`"Performance, UX & Security"`}</span>;
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-[#3c11a0] italic">05</span>
                <span className="pl-6">
                  architecture ={" "}
                  <span className="text-[#8847fd]">{`"Clean, Modular & Scalable"`}</span>;
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-[#3c11a0] italic">06</span>
                <span className="pl-6">
                  security ={" "}
                  <span className="text-[#8847fd]">{`"Role-Based Access, Multi Tenant"`}</span>;
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-[#3c11a0] italic">07</span>
                <span className="pl-6">
                  scalability = <span className="text-[#8847fd]">true</span>;
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-[#3c11a0] italic">08</span>
                <span className="pl-6">
                  status ={" "}
                  <span className="text-[#8847fd]">{`"Production Ready"`}</span>;
                </span>
              </p>
              <p className="flex gap-4">
                <span className="text-[#3c11a0] italic">09</span>
                <span>
                  <span className="text-blue-200">{"}"}</span>
                </span>
              </p>

              <div className="mt-6 flex items-center gap-2 text-[#8847fd] text-xs animate-pulse font-bold tracking-widest uppercase">
                <span>{">"} System initialized.</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative pt-20 flex flex-col items-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-[#8847fd] hover:text-white font-black uppercase tracking-[0.4em] text-xs rounded-full relative z-10 transition-shadow overflow-hidden group"
          >
            <span className="relative z-10">Initialize Port</span>
            <div className="absolute inset-0 bg-[#8847fd] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </motion.button>
          <div className="mt-8 flex gap-4">
            <div className="w-1 h-1 rounded-full bg-[#120945]/20 animate-ping" />
            <div className="w-1 h-1 rounded-full bg-[#120945]/20/50" />
            <div className="w-1 h-1 rounded-full bg-[#120945]/20/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
