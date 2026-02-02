"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Send, 
  Mail, 
  MessageSquare, 
  Sparkles, 
  ArrowRight, 
  Globe, 
  Zap 
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen bg-[#020617] text-white py-24 overflow-hidden">
      
      {/* Background Grid & Aura */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: EMOTIONAL HOOK */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase"
            >
              <Sparkles size={14} /> Ready to Scale?
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-black tracking-tighter leading-none"
            >
              LET&apos;S START THE <br />
              <span className="text-blue-600">JOURNEY TOGETHER.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-slate-400 text-lg max-w-md leading-relaxed"
            >
              Whether you have a fully-formed idea or just the spark of a concept, 
              I’m here to build the architecture that brings it to life.
            </motion.p>

            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:border-blue-500 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Email Me</p>
                  <p className="text-white font-medium">umarnadeem24@icloud.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:border-blue-500 transition-colors">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-white font-medium">Remote / Global Availability</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE INTERACTIVE TERMINAL FORM */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-20" />
            
            <div className="relative bg-slate-950 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-3xl">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-white/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="ml-4 text-[10px] font-mono text-slate-500 tracking-widest uppercase">System.Initiate_Project()</span>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue-500 uppercase tracking-widest ml-2">Client Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-blue-500 uppercase tracking-widest ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter Your Email"
                      className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-blue-500 uppercase tracking-widest ml-2">Project Brief</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-slate-900/50 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl transition-all shadow-[0_10px_30px_rgba(37,99,235,0.2)]"
                >
                  INITIALIZE PARTNERSHIP
                  <Send size={18} />
                </motion.button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Zap size={12} className="text-blue-500" /> Secure Protocol
                </div>
                <span>Est. Response: 24h</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer-lite */}
      <div className="absolute bottom-10 left-10 text-[10px] font-mono text-slate-800 tracking-[0.5em] uppercase">
        © 2026 umar Nadeem  All Rights Reserved
      </div>
    </section>
  );
}