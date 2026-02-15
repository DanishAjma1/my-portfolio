"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "ABCDMediaLTD",
    tech: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Hostinger"],
    description:
      "A digital marketing agency platform to create and manage advertising campaigns, publish creatives across channels, track performance, and optimize ROI with analytics and A/B testing.",
    link: "https://abcdmedia.co.uk/",
    color: "#2563eb",
  },
  {
    title: "B2C INC",
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Hostinger",
      "Vercel",
    ],
    description:
      "A results-driven B2C digital marketing platform designed to attract, engage, and convert customers through data-backed strategies, seamless user journeys, and performance-focused campaigns.",
    link: "https://b2cinc.com/",
    color: "#2563eb",
  },

  {
    title: "TrustBridge-AI",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB", "TypeScript"],
    description:
      "A secure and scalable investment collaboration platform designed to connect investors and entrepreneurs, enabling seamless networking, deal-making, due diligence, and transparent transaction management.",
    link: "https://nexus-gules-seven.vercel.app/",
    github: "#", // Added missing github property to prevent errors
    color: "#2563eb",
  },
  {
    title: "Gujrat Fans",
    tech: ["Next.js", "Tailwind CSS","Vercel"],
    description:
      "Official brand website for Gujrat Fans, designed to display fan models, specifications, and company information. Optimized for speed and mobile devices.",
    // FIXED: Added https:// and removed the *
    link: "https://gf-att.vercel.app",
    color: "#3b82f6",
  },

  {
    title: "Finance Management System",
    tech: ["Next.Js", "Tailwind CSS", "Material Ui"],
    description:
      "A modern finance dashboard for tracking expenses, budgets, and financial reports in real time. Features interactive charts.",
    link: "https://gujrat-fans-mainn.vercel.app/", // Keep as # if not deployed
    color: "#60a5fa",
  },

  {
    title: "Trading Web",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "A responsive single-page trading interface for monitoring markets and viewing live price updates with real-time data.",
    link: "https://trading-app-4xjl.vercel.app/",
    color: "#1d4ed8",
  },
];

export default function RecentProjects() {
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section
      ref={targetRef}
      className={`relative ${isMobile ? "h-auto py-20" : `h-[500dvh]`} bg-transparent`}
    >
      <div
        className={`${isMobile ? "relative" : "sticky top-0 h-screen"} flex items-center overflow-hidden`}
      >
        <div className="absolute top-10 left-4 md:left-10 pointer-events-none">
          <h2 className="text-white/[0.02] text-[25vw] lg:text-[20vw] font-black uppercase leading-none">
            WORK
          </h2>
        </div>

        <motion.div
          style={{ x: isMobile ? 0 : x }}
          className={`flex ${isMobile ? "flex-col gap-8 px-6" : "flex-row gap-12 px-20"} w-full transition-all`}
        >
          <div
            className={`flex-shrink-0 ${isMobile ? "w-full mb-10" : "w-[400px]"} flex flex-col justify-center`}
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-[#8847fd]" />
              <span className="text-[#8847fd] font-mono tracking-widest text-xs md:text-sm uppercase">
                Selected Works
              </span>
            </div>
            <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-8">
              Crafting{" "}
              <span className="bg-linear-to-r from-[#3c11a0] via-[#8847fd] to-white bg-clip-text text-transparent">
                Digital
              </span>{" "}
              Experiences
            </h3>
          </div>

          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={isMobile ? {} : { y: -20 }}
              className={`flex-shrink-0 ${isMobile ? "w-full h-auto" : "w-[450px] h-[550px]"} bg-slate-900/40 border border-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-between group hover:border-[#8847fd]/50 transition-colors duration-500 relative overflow-hidden backdrop-blur-xl`}
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#8847fd]/10 rounded-full blur-3xl group-hover:bg-[#8847fd]/20 transition-all duration-700" />

              <div>
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <span className="text-4xl md:text-6xl font-black text-white/5 group-hover:text-[#8847fd]/20 transition-colors duration-500 font-mono">
                    0{idx + 1}
                  </span>
                  <div className="flex gap-2 md:gap-3 relative z-50"></div>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:translate-x-1 transition-transform">
                  {project.title}
                </h4>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 md:px-3 py-1 bg-slate-900/40 border border-[#8847fd]/20 text-[#8049e5] text-[10px] md:text-xs font-mono rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={project.link} target="blank">
                <div className="mt-8 pt-6 md:pt-8 border-t border-slate-800 flex justify-between items-center group-hover:border-[#8847fd]/30 hover:cursor-pointer">
                  <div className="flex items-center gap-2 text-white text-[10px] md:text-xs uppercase font-bold tracking-widest">
                    <div className="w-2 h-2 bg-[#8847fd] rounded-full animate-pulse" />
                    <span>View Live</span>
                  </div>
                  <ArrowUpRight className="text-slate-700 group-hover:text-[#8847fd] transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
