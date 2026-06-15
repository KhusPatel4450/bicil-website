"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#091628] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#091628]/40 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <img
            src="/logo.png"
            alt="BICIL Logo"
            className="w-32 h-32 object-contain"
            style={{ mixBlendMode: "screen" }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-xs tracking-[0.25em] text-white/70 uppercase mb-8 font-sans"
        >
          Department of Computer Science · Brock University
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold text-white leading-[1.05] mb-5 tracking-tight"
        >
          Bio-Inspired
          <br />
          <span className="bg-gradient-to-r from-[#2A7FC1] to-[#3DAF88] bg-clip-text text-transparent">
            Computational
          </span>
          <br />
          Intelligence Lab
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/80 text-base mb-2 tracking-wide font-sans"
        >
          Prof. Beatrice Ombuki-Berman
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/75 text-lg sm:text-xl mb-11 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Advancing evolutionary computation, swarm intelligence, and
          multi-objective optimization to solve complex real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#research"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#2A7FC1] hover:bg-[#1B6BA8] text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-blue-900/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFCF]"
          >
            Explore Research
          </a>
          <a
            href="#team"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/20 hover:border-white/45 text-white/70 hover:text-white hover:bg-white/5 font-medium text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFCF]"
          >
            Meet the Team
          </a>
        </motion.div>

      </div>
    </section>
  );
}
