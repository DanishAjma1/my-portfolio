"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { 
  Calendar, 
  Video, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Zap,
  Download,
  Mail,
  Sparkles,
  MessageCircle,
  Linkedin,
  ArrowUpRight
} from "lucide-react";

export default function UltimateContactSection() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({ date: "", time: "", type: "Discovery Call (15m)" });

  // Mouse Glow Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const downloadCalendarInvite = () => {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Sync with Umar: ${bookingData.type}\nDTSTART:20260215T100000Z\nDTEND:20260215T103000Z\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent], { type: "text/calendar" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "meeting-umar.ics";
    link.click();
  };

  const finalizeBooking = () => {
    window.location.href = `mailto:umarnadeem24@icloud.com?subject=Booking: ${bookingData.type}&body=Scheduled for ${bookingData.date} at ${bookingData.time}.`;
  };

  return (
    <section className="min-h-screen bg-[#020617] text-white py-24 px-6 overflow-hidden selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: DIRECT CHANNELS */}
          <div className="space-y-12">
            <div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                <Sparkles size={12} /> System Status: Available
              </motion.div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
                LET'S BUILD <br /> <span className="text-blue-600 italic">THE FUTURE.</span>
              </h2>
            </div>

            <div className="space-y-4 max-w-sm">
              {[
                { label: "WhatsApp", icon: <MessageCircle size={20} />, value: "+92 314 7865460", color: "text-emerald-400", link: "https://wa.me/923147865460" },
                { label: "LinkedIn", icon: <Linkedin size={20} />, value: "umar-nadeem", color: "text-blue-400", link: "http://linkedin.com/in/umar-nadeem-118181398" },
                { label: "Email", icon: <Mail size={20} />, value: "umarnadeem24@icloud.com", color: "text-purple-400", link: "mailto:umarnadeem24@icloud.com" },
              ].map((item, i) => (
                <motion.a
                  key={i} href={item.link} target="_blank" rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${item.color} p-2 bg-slate-950 rounded-lg border border-white/5`}>{item.icon}</div>
                    <div>
                      <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest">{item.label}</p>
                      <p className="text-sm font-bold">{item.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: THE INTERACTIVE TERMINAL */}
          <div className="relative group" onMouseMove={handleMouseMove}>
            <motion.div
              className="absolute -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(37, 99, 235, 0.15),
                    transparent 80%
                  )
                `,
              }}
            />
            
            <motion.div layout className="relative bg-[#0b1120] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden">
              <div className="flex justify-between items-center mb-10">
                <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/20" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" /><div className="w-2.5 h-2.5 rounded-full bg-green-500/20" /></div>
                <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Secure Booking Terminal</div>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="text-3xl font-black mb-8 uppercase italic tracking-tighter">Choose a Session</h3>
                    <div className="space-y-3">
                      {["Discovery Call (15m)", "Project Deep Dive (45m)", "Consultation"].map((type) => (
                        <button
                          key={type} onClick={() => { setBookingData({ ...bookingData, type }); nextStep(); }}
                          className={`w-full p-6 rounded-2xl border text-left transition-all flex justify-between items-center ${bookingData.type === type ? "bg-blue-600 border-blue-600" : "bg-slate-900/50 border-white/5 hover:border-blue-500/50"}`}
                        >
                          <span className="font-bold text-lg">{type}</span>
                          <ChevronRight size={20} />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="text-3xl font-black mb-8 italic tracking-tighter uppercase">Pick a Slot</h3>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {["Feb 10", "Feb 11", "Feb 12", "Feb 13"].map((d) => (
                        <button key={d} onClick={() => setBookingData({...bookingData, date: d})} className={`py-4 rounded-xl border font-bold ${bookingData.date === d ? "bg-white text-black" : "bg-slate-900 border-white/5 hover:border-white/20"}`}>{d}</button>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {["10:00 AM", "02:00 PM", "04:30 PM"].map((t) => (
                        <button key={t} onClick={() => setBookingData({...bookingData, time: t})} className={`px-5 py-2 rounded-lg border text-xs font-mono transition-all ${bookingData.time === t ? "bg-blue-600 border-blue-600 text-white" : "bg-slate-900 border-white/5 text-slate-400"}`}>{t}</button>
                      ))}
                    </div>
                    <div className="flex justify-between items-center border-t border-white/5 pt-8">
                      <button onClick={prevStep} className="text-slate-500 text-xs font-black tracking-widest hover:text-white uppercase">Back</button>
                      <button disabled={!bookingData.date || !bookingData.time} onClick={nextStep} className="bg-blue-600 px-10 py-4 rounded-2xl font-black text-xs tracking-[0.2em] disabled:opacity-20 shadow-[0_10px_30px_rgba(37,99,235,0.2)]">CONTINUE</button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                    <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/20"><Video className="text-blue-500" size={32} /></div>
                    <h3 className="text-4xl font-black mb-4 tracking-tighter italic">READY?</h3>
                    <div className="bg-black/30 rounded-3xl p-6 mb-8 text-left space-y-3 border border-white/5 font-mono text-[11px] leading-relaxed">
                      <div className="flex justify-between"><span className="text-slate-500">SERVICE_TYPE:</span> <span className="text-blue-400 font-bold">{bookingData.type}</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">TIMESTAMP:</span> <span>{bookingData.date} @ {bookingData.time}</span></div>
                    </div>
                    <div className="grid gap-3">
                      <button onClick={finalizeBooking} className="w-full py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-xs tracking-[0.2em] flex items-center justify-center gap-3 transition-all"><Mail size={18} /> CONFIRM VIA EMAIL</button>
                      <button onClick={downloadCalendarInvite} className="w-full py-4 bg-slate-950/50 hover:bg-slate-900 rounded-2xl font-bold text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 border border-white/5 text-slate-500 hover:text-white transition-all"><Download size={14} /> DOWNLOAD .ICS</button>
                    </div>
                    <button onClick={prevStep} className="mt-8 text-slate-600 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Adjust Details</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}