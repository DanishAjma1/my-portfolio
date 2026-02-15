"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const data = [
  {
    role: "Full Stack Developer",
    company: "ABCDMediaLTD (UK Remote)",
    time: "Nov 2024 - Present",
    desc: `Engineered a business-focused web platform for B2C Inc. using a modern full-stack JavaScript architecture built on
Next.js, leveraging server-side rendering and React to deliver a responsive, high-performance frontend. Currently
developing the backend within the Next.js ecosystem, implementing API-driven workflows and scalable server logic
to support application growth.`,
    skills: [
      "Next.js",
      "Tailwind",
      "MongoDB",
      "Node.js",
      "Framer Motion",
      "Hostinger",
      "Vercel",
      "GCP",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Trust-bridge AI - Solutions",
    time: "Aug 2025 - Nov 2025",
    desc: `Architected a scalable MERN platform connecting entrepreneurs and investors using secure, modular components.
Implemented role-based access control with JWT and granular permissions, along with a dedicated admin portal to
monitor user activity and detect suspicious behavior. Integrated Agora WebRTC for real-time collaboration and chat,
ensuring high performance, scalability, and a seamless user experience.`,
    skills: [
      "React.js",
      "Express.js",
      "Tailwind",
      "MongoDB",
      "Node.js",
      "Framer Motion",
      "Stripe",
      "Railway",
      "Vercel",
    ],
  },
  {
    role: "Full Stack Developer (Internship)",
    company: "Developers Hub Corporation",
    time: "Mar 2025 - Aug 2025",
    desc: `Developed a scalable, maintainable, component-based Global-Mart platform using the MERN stack with modular
microservices. Designed and deployed responsive interface with React.js & Tailwind CSS for seamless cross-platform
user experience. Optimized Express.js APIs and containerized deployment using Docker and CI/CD pipelines for`,
    skills: [
      "React.js",
      "Express.js",
      "Tailwind",
      "MongoDB",
      "Node.js",
      "Railway",
      "Vercel",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Apprenticeship | Gujrat",
    time: "Nov 2024 - April 2025",
    desc: `Built a full-stack finance management tool to track users’ daily transactions with secure JWT authentication.
Developed Next.js frontend for responsive and interactive UI, integrating efficient backend APIs and MongoDB.
Enabled data management, analytics, and personalized transaction insights for improved financial tracking.`,
    skills: ["Next.js, Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Web Developer",
    company: "Apprenticeship | Gujrat",
    time: "Jan 2024 - April 2024",
    desc: `Developed a dynamic e-commerce website using HTML, CSS, and PHP, delivering a clean, responsive user interface
and smooth browsing experience. Implemented core backend functionality for product listings, user authentication,
and order handling, with structured database interactions to manage inventory and transactions efficiently.
Designed the system to ensure reliability, maintainability, and straightforward administrative control.`,
    skills: ["PHP", "Tailwind css", "HTML", "CSS"],
  },
];

function Particles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-[#8847fd] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function Card({ item, index }: any) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
      className={`relative w-full md:w-1/2 ${
        isLeft ? "md:pr-16 md:ml-0 md:mr-auto" : "md:pl-16 md:mr-0 md:ml-auto"
      }`}
    >
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="relative backdrop-blur-3xl bg-slate-900/40 border border-[#8847fd]/20 rounded-[2rem] p-8 shadow-2xl hover:border-[#8847fd]/50 transition-all duration-500 group overflow-hidden"
      >
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all" />

        <div className="flex justify-between items-start gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white group-hover:text-[#8847fd] transition-colors">
              {item.role}
            </h3>
            <p className="text-[#8847fd] font-mono text-sm font-semibold">
              {item.company}
            </p>
          </div>
          <span className="whitespace-nowrap shrink-0 text-[10px] font-bold py-1 px-3 bg-[#8847fd]/10 text-[#8847fd] rounded-full border border-[#8847fd]/20">
            {item.time}
          </span>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {item.desc.slice(0, 150)}...
        </p>

        <div className="flex gap-2 flex-wrap">
          {item.skills.map((s: string) => (
            <span
              key={s}
              className="px-3 py-1 text-[10px] font-bold rounded-lg border border-slate-800 bg-slate-950 text-slate-300 group-hover:border-[#8847fd]/30 group-hover:text-blue-300 transition-all"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="relative min-h-screen bg-transparent text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.1),transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <h2 className="text-white/[0.02] text-[18vw] font-black uppercase leading-none">
          History
        </h2>
      </div>

      <Particles />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-8"
        >
          <h2 className="text-[#8847fd] font-mono text-sm font-black tracking-[0.5em] uppercase mb-2">
            Timeline
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#8847fd] to-transparent mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#120945]/20 border border-[#120945] text-xs font-bold tracking-[0.3em] mb-4 uppercase">
            <Zap size={14} className="fill-[#8847fd]" /> Professional
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
            MY{" "}
            <span className="bg-linear-to-r from-[#3c11a0] via-[#8847fd] to-white bg-clip-text text-transparent">
              EXPERIENCE
            </span>
          </h2>
        </motion.div>

        <div className="hidden md:block absolute left-1/2 top-[350px] bottom-0 w-[1px] bg-gradient-to-b from-[#8847fd] via-blue-900/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

        <div className="flex flex-col gap-20 relative">
          {data.map((item, i) => (
            <Card key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
