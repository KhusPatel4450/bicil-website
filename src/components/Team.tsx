"use client";

import { motion } from "framer-motion";
import teamData from "@/data/team.json";

const PI = teamData.pi;
const STUDENTS = teamData.students;

export default function Team() {
  const phdCount = STUDENTS.filter((s) => s.role === "Doctoral Researcher").length;
  const mscCount = STUDENTS.filter((s) => s.role === "Graduate Researcher").length;
  const raCount = STUDENTS.filter((s) => s.role === "Undergraduate").length;

  return (
    <section id="team" className="py-24 lg:py-32 bg-[#091628]/82">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[11px] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            Our People
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-white/65 max-w-xl leading-relaxed">
            A dedicated group of researchers driven by curiosity, rigour, and
            a shared passion for algorithmic discovery.
          </p>
        </motion.div>

        {/* PI card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="border border-white/8 p-8 lg:p-10 mb-10 hover:border-white/15 transition-colors duration-300"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              {PI.photo ? (
                <img
                  src={PI.photo}
                  alt={PI.name}
                  className="w-20 h-20 object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-20 h-20 bg-gradient-to-br from-[#2A7FC1] to-[#3DAF88] flex items-center justify-center text-white text-lg font-bold font-mono select-none">
                  {PI.initials}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-white mb-1">{PI.name}</h3>
              <p className="text-[#4BBFCF] text-sm font-medium mb-0.5">{PI.role}</p>
              <p className="text-white/55 text-xs mb-4 font-mono">{PI.title}</p>
              <p className="text-white/75 text-sm leading-relaxed line-clamp-3 mb-4">
                {PI.bio}
              </p>
              <a
                href={`mailto:${PI.email}`}
                className="text-white/65 hover:text-white text-sm transition-colors focus:outline-none focus-visible:underline"
              >
                {PI.email}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Researcher count summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/5 mb-10"
        >
          {[
            { count: phdCount, label: "PhD Researchers", color: "#2A7FC1" },
            { count: mscCount, label: "MSc Researchers", color: "#3DAF88" },
            { count: raCount, label: "Research Assistants", color: "#4BBFCF" },
          ].map(({ count, label, color }) => (
            <div
              key={label}
              className="bg-white/[0.03] px-6 py-8 text-center"
            >
              <p
                className="text-3xl font-bold font-mono mb-1"
                style={{ color }}
              >
                {count}
              </p>
              <p className="text-white/60 text-xs">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <a
            href="/people"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A7FC1] hover:bg-[#1B6BA8] text-white font-semibold text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFCF]"
          >
            Meet the Full Team
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <p className="text-white/50 text-sm">
            View individual profiles, research focus, and alumni
          </p>
        </motion.div>
      </div>
    </section>
  );
}
