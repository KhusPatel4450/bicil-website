"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "150+", label: "Publications" },
  { value: "20+", label: "Years Active" },
  { value: "50+", label: "Graduate Students" },
  { value: "5", label: "Research Areas" },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#091628]/82">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[11px] font-mono tracking-[0.2em] text-[#2A7FC1]/85 uppercase mb-4">
              About the Lab
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Nature-Inspired Solutions
              <br />
              for{" "}
              <span className="bg-gradient-to-r from-[#2A7FC1] to-[#3DAF88] bg-clip-text text-transparent">
                Complex Problems
              </span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-5">
              The Bio-Inspired Computational Intelligence Lab (BICIL) at Brock
              University investigates computational methods inspired by natural
              phenomena — from the collective behaviour of swarms to the
              adaptive power of evolution.
            </p>
            <p className="text-white/70 leading-relaxed mb-5">
              Led by Professor Beatrice Ombuki-Berman, we develop and apply
              metaheuristic algorithms to solve NP-hard optimization problems
              in logistics, engineering, machine learning, robotics, and beyond.
              Optimization is not just a theme — it is our lens for understanding
              complex systems.
            </p>
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              BICIL is housed in the Department of Computer Science, Faculty of
              Mathematics and Science, with strong ties to the broader Brock
              research community and international collaborators.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#research"
                className="px-6 py-3 bg-[#2A7FC1] hover:bg-[#1B6BA8] text-white font-semibold text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFCF]"
              >
                Our Research
              </a>
              <a
                href="#publications"
                className="px-6 py-3 border border-white/15 hover:border-white/40 text-white/65 hover:text-white font-medium text-sm transition-colors duration-200"
              >
                Publications
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.22 + i * 0.1 }}
                className="p-8 border border-white/8 hover:border-[#2A7FC1]/40 transition-all duration-300 bg-white/[0.03]"
              >
                <p className="text-5xl font-bold text-[#2A7FC1] mb-2 tabular-nums">
                  {stat.value}
                </p>
                <p className="text-white/65 text-sm">{stat.label}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="col-span-2 bg-[#091628]/70 p-6 border border-white/8"
            >
              <p className="text-white/55 text-[11px] font-mono mb-2">Location</p>
              <p className="text-white font-medium text-sm mb-1">
                Department of Computer Science
              </p>
              <p className="text-white/70 text-sm">
                Brock University · St. Catharines, ON L2S 3A1 · Canada
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
