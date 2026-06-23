"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function PeopleContent() {
  const [activeMember, setActiveMember] = useState(0);
  const [slideDir, setSlideDir] = useState(1);

  const goTo = (index: number) => {
    setSlideDir(index > activeMember ? 1 : -1);
    setActiveMember(index);
  };
  const prev = () => goTo((activeMember - 1 + STUDENTS.length) % STUDENTS.length);
  const next = () => goTo((activeMember + 1) % STUDENTS.length);

  const phdCount = STUDENTS.filter((s) => s.role === "Doctoral Researcher").length;
  const mscCount = STUDENTS.filter((s) => s.role === "Graduate Researcher").length;
  const raCount = STUDENTS.filter((s) => s.role === "Undergraduate").length;

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-[#091628]">
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
              A dedicated group of researchers advancing the frontiers of
              computational intelligence at Brock University.
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
      <section className="py-16 bg-[#091628] border-t border-white/5">
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

      {/* Current Members — Showcase Carousel */}
      <section className="py-16 bg-[#091628] border-t border-white/5">
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
            <h2 className="text-3xl font-bold text-white">Active Members</h2>
          </motion.div>

          {/* Carousel */}
          <div className="border border-white/8 overflow-hidden">
            <AnimatePresence mode="wait" custom={slideDir}>
              {(() => {
                const s = STUDENTS[activeMember];
                const degreeLabel =
                  s.role === "Doctoral Researcher"
                    ? "PhD Researcher"
                    : s.role === "Graduate Researcher"
                    ? "MSc Researcher"
                    : "Undergraduate Researcher";

                return (
                  <motion.div
                    key={activeMember}
                    custom={slideDir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col md:flex-row"
                  >
                    {/* Photo */}
                    <div className="h-64 md:h-auto md:w-72 lg:w-80 flex-shrink-0 md:self-stretch relative bg-[#060f1c]">
                      {s.photo ? (
                        <img
                          src={s.photo}
                          alt=""
                          aria-hidden="true"
                          className="absolute inset-0 w-full h-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a3a5c] to-[#0d2035]">
                          <span className="text-4xl font-mono font-bold text-white/25">
                            {s.initials}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 p-7 lg:p-10 flex flex-col justify-center min-h-72">
                      <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase mb-4">
                        {activeMember + 1} / {STUDENTS.length}
                      </p>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                        {s.name}
                      </h3>
                      <p className="text-[#4BBFCF] text-sm font-mono mb-5">{degreeLabel}</p>

                      {s.focus && (
                        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-lg">
                          {s.focus}
                        </p>
                      )}

                      {/* Research Interests */}
                      {s.interests && (s.interests as string[]).length > 0 && (
                        <div className="mb-4">
                          <p className="text-[9px] font-mono uppercase tracking-widest text-white/35 mb-2">
                            Research Interests
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {(s.interests as string[]).map((item) => (
                              <span
                                key={item}
                                className="text-[11px] text-white/60 border border-white/12 px-2.5 py-1"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Hobbies */}
                      {s.hobbies && (s.hobbies as string[]).length > 0 && (
                        <div className="mb-4">
                          <p className="text-[9px] font-mono uppercase tracking-widest text-white/35 mb-2">
                            Hobbies
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {(s.hobbies as string[]).map((item) => (
                              <span
                                key={item}
                                className="text-[11px] text-white/60 border border-white/12 px-2.5 py-1"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Links */}
                      {s.links && (s.links as { label: string; url: string }[]).length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          {(s.links as { label: string; url: string }[]).map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-mono text-white/45 hover:text-[#4BBFCF] border border-white/12 hover:border-[#4BBFCF]/30 px-3 py-1 transition-colors"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Navigation bar */}
          <div className="flex items-center justify-between mt-4">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {STUDENTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to member ${i + 1}`}
                  className={`transition-all duration-200 rounded-none focus:outline-none ${
                    i === activeMember
                      ? "w-5 h-1.5 bg-[#4BBFCF]"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Previous member"
                className="border border-white/12 hover:border-white/28 p-2.5 transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
              >
                <svg
                  className="w-4 h-4 text-white/50 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next member"
                className="border border-white/12 hover:border-white/28 p-2.5 transition-colors group focus:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
              >
                <svg
                  className="w-4 h-4 text-white/50 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni */}
      {ALUMNI.length > 0 && (
        <section className="py-16 bg-[#091628] border-t border-white/5">
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
              <h2 className="text-3xl font-bold text-white">Past Members</h2>
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

      {/* Open Positions */}
      <section className="py-16 bg-[#091628] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-mono tracking-[0.25em] text-white/50 uppercase mb-2">
              Opportunities
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-xl">
              We currently have{" "}
              <span className="text-white font-semibold">2 MSc</span> and{" "}
              <span className="text-white font-semibold">1 PhD</span> positions
              available for{" "}
              <span className="text-white font-semibold">Fall 2026</span>.
              Interested applicants are encouraged to contact Prof.
              Ombuki-Berman directly at{" "}
              <a
                href={`mailto:${PI.email}`}
                className="text-[#4BBFCF] hover:text-white transition-colors focus:outline-none focus-visible:underline"
              >
                {PI.email}
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
