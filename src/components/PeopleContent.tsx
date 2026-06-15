"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import teamData from "@/data/team.json";

const PI = teamData.pi;
const STUDENTS = teamData.students;
const ALUMNI = teamData.alumni;

function InitialsAvatar({
  initials,
  photo,
  size,
  gradient = false,
}: {
  initials: string;
  photo: string | null;
  size: "sm" | "lg";
  gradient?: boolean;
}) {
  const dim = size === "lg" ? "w-44 h-44 lg:w-52 lg:h-52" : "w-16 h-16";
  const text = size === "lg" ? "text-3xl" : "text-sm";

  if (photo) {
    return (
      <img
        src={photo}
        alt=""
        aria-hidden="true"
        className={`${dim} object-cover flex-shrink-0`}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={`${dim} flex items-center justify-center flex-shrink-0 select-none border border-white/8 ${
        gradient
          ? "bg-gradient-to-br from-[#2A7FC1] to-[#3DAF88]"
          : "bg-gradient-to-br from-[#1a3a5c] to-[#0d2035]"
      }`}
    >
      <span
        className={`${text} font-mono font-bold ${
          gradient ? "text-white" : "text-white/65"
        }`}
      >
        {initials}
      </span>
    </div>
  );
}

export default function PeopleContent() {
  const phdCount = STUDENTS.filter((s) => s.role === "Doctoral Researcher").length;
  const mscCount = STUDENTS.filter((s) => s.role === "Graduate Researcher").length;
  const raCount = STUDENTS.filter((s) => s.role === "Undergraduate").length;

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-[#091628]/82">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors group focus:outline-none focus-visible:underline"
            >
              <svg
                className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-150"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to BICIL
            </Link>

            <p className="text-[11px] font-mono tracking-[0.2em] text-white/50 uppercase mb-4">
              Our People
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              The Team Behind{" "}
              <span className="bg-gradient-to-r from-[#2A7FC1] to-[#3DAF88] bg-clip-text text-transparent">
                BICIL
              </span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
              Researchers united by a passion for evolutionary computation,
              swarm intelligence, and bio-inspired optimization.
            </p>

            <div className="flex flex-wrap gap-6">
              {phdCount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2A7FC1]" />
                  <span className="text-white/65 text-sm">
                    {phdCount} PhD Researcher{phdCount !== 1 ? "s" : ""}
                  </span>
                </div>
              )}
              {mscCount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#3DAF88]" />
                  <span className="text-white/65 text-sm">
                    {mscCount} MSc Researcher{mscCount !== 1 ? "s" : ""}
                  </span>
                </div>
              )}
              {raCount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#4BBFCF]" />
                  <span className="text-white/65 text-sm">
                    {raCount} Research Assistant{raCount !== 1 ? "s" : ""}
                  </span>
                </div>
              )}
              {ALUMNI.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/20" />
                  <span className="text-white/65 text-sm">
                    {ALUMNI.length} Alumni
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className="py-16 bg-[#091628]/82 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase mb-8">
            Principal Investigator
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="border border-white/8 p-8 lg:p-12 hover:border-white/12 transition-colors duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <InitialsAvatar
                initials={PI.initials}
                photo={PI.photo}
                size="lg"
                gradient
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-bold text-white mb-1">{PI.name}</h2>
                <p className="text-[#4BBFCF] text-sm font-medium mb-1">{PI.role}</p>
                <p className="text-white/55 text-xs font-mono mb-6">{PI.title}</p>
                <p className="text-white/80 leading-relaxed mb-6 max-w-2xl">{PI.bio}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {PI.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 border border-white/10 text-white/65 text-xs font-mono"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                <a
                  href={`mailto:${PI.email}`}
                  className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm focus:outline-none focus-visible:underline"
                >
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
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {PI.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Members */}
      <section className="py-16 bg-[#091628]/82 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase mb-2">
              Current Researchers
            </p>
            <h2 className="text-3xl font-bold text-white">Active Lab Members</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {STUDENTS.map((s, i) => (
              <motion.div
                key={`${s.initials}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group border border-white/8 p-6 hover:border-white/18 hover:bg-white/[0.03] transition-all duration-200"
              >
                <div className="mb-4">
                  <InitialsAvatar
                    initials={s.initials}
                    photo={s.photo}
                    size="sm"
                  />
                </div>
                <p className="text-white/75 font-semibold text-sm mb-0.5">{s.name}</p>
                <p className="text-[#4BBFCF]/65 text-xs font-mono mb-0.5">{s.role}</p>
                <p className="text-white/50 text-[11px] font-mono mb-3">{s.year}</p>
                <p className="text-white/65 text-xs leading-relaxed">{s.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni */}
      {ALUMNI.length > 0 && (
        <section className="py-16 bg-[#091628]/82 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <p className="text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase mb-2">
                Alumni
              </p>
              <h2 className="text-3xl font-bold text-white">BICIL Graduates</h2>
              <p className="text-white/60 text-sm mt-2">
                Former members now making an impact in academia and industry.
              </p>
            </motion.div>

            {/* Column headers — desktop only */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-4 py-2 mb-1">
              <p className="col-span-3 text-[10px] font-mono uppercase tracking-widest text-white/40">
                Name
              </p>
              <p className="col-span-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                Degree
              </p>
              <p className="col-span-1 text-[10px] font-mono uppercase tracking-widest text-white/40">
                Year
              </p>
              <p className="col-span-3 text-[10px] font-mono uppercase tracking-widest text-white/40">
                Thesis
              </p>
              <p className="col-span-3 text-[10px] font-mono uppercase tracking-widest text-white/40">
                Now At
              </p>
            </div>

            <div className="divide-y divide-white/5">
              {ALUMNI.map((a, i) => (
                <motion.div
                  key={`${a.name}-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="md:grid md:grid-cols-12 gap-4 px-4 py-4 hover:bg-white/[0.02] transition-colors duration-150 flex flex-col gap-y-1.5"
                >
                  <p className="md:col-span-3 text-white/70 text-sm font-medium">
                    {a.name}
                  </p>
                  <p className="md:col-span-2 text-[#4BBFCF]/60 text-xs font-mono">
                    {a.degree}
                  </p>
                  <p className="md:col-span-1 text-white/55 text-xs font-mono tabular-nums">
                    {a.yearGraduated}
                  </p>
                  <p className="md:col-span-3 text-white/60 text-xs leading-relaxed">
                    {a.thesis}
                  </p>
                  <p className="md:col-span-3 text-white/80 text-xs">{a.nowAt}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join CTA */}
      <section className="py-20 bg-[#091628]/82 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-mono tracking-[0.2em] text-white/50 uppercase mb-4">
              Join Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Work with BICIL
            </h2>
            <p className="text-white/65 max-w-md mx-auto mb-8 leading-relaxed text-sm">
              We welcome motivated graduate students and postdoctoral researchers
              with backgrounds in computer science, engineering, or mathematics.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2A7FC1] hover:bg-[#1B6BA8] text-white font-semibold text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFCF]"
            >
              Apply to the Lab
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
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
