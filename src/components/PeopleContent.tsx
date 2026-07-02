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
      className={`${dim} flex items-center justify-center flex-shrink-0 select-none border border-slate-200 ${
        gradient
          ? "bg-gradient-to-br from-[#2A7FC1] to-[#3DAF88]"
          : "bg-gradient-to-br from-slate-100 to-slate-200"
      }`}
    >
      <span
        className={`${text} font-mono font-bold ${
          gradient ? "text-white" : "text-slate-500"
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
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm mb-8 transition-colors group focus:outline-none focus-visible:underline"
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

            <p className="text-[11px] font-mono tracking-[0.2em] text-slate-400 uppercase mb-4">
              Our People
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              The Team Behind{" "}
              <span className="bg-gradient-to-r from-[#2A7FC1] to-[#3DAF88] bg-clip-text text-transparent">
                BICIL
              </span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed mb-10">
              A dedicated group of researchers advancing the frontiers of
              computational intelligence at Brock University.
            </p>

            <div className="flex flex-wrap gap-6">
              {phdCount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#2A7FC1]" />
                  <span className="text-slate-600 text-sm">
                    {phdCount} PhD Researcher{phdCount !== 1 ? "s" : ""}
                  </span>
                </div>
              )}
              {mscCount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#3DAF88]" />
                  <span className="text-slate-600 text-sm">
                    {mscCount} MSc Researcher{mscCount !== 1 ? "s" : ""}
                  </span>
                </div>
              )}
              {raCount > 0 && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#4BBFCF]" />
                  <span className="text-slate-600 text-sm">
                    {raCount} Research Assistant{raCount !== 1 ? "s" : ""}
                  </span>
                </div>
              )}
              {ALUMNI.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-400" />
                  <span className="text-slate-600 text-sm">
                    {ALUMNI.length} Alumni
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase mb-8">
            Principal Investigator
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="border border-slate-200 p-8 lg:p-12 hover:border-slate-300 transition-colors duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <InitialsAvatar
                initials={PI.initials}
                photo={PI.photo}
                size="lg"
                gradient
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-bold text-slate-900 mb-1">{PI.name}</h2>
                <p className="text-[#4BBFCF] text-sm font-medium mb-1">{PI.role}</p>
                <p className="text-slate-500 text-xs font-mono mb-6">{PI.title}</p>
                <p className="text-slate-700 leading-relaxed mb-6 max-w-2xl">{PI.bio}</p>
                <p className="text-slate-400 text-sm font-mono">
                  ✉&nbsp; {PI.email.replace("@", " [at] ").replace(/\./g, " [dot] ")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Members — Clickable Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase mb-2">
              Current Researchers
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Active Members</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {STUDENTS.map((s, i) => {
              const slug = (s as typeof s & { slug: string }).slug;
              const isPlaceholder =
                s.name === "Ph.D. Candidate" ||
                s.name === "M.Sc. Candidate" ||
                s.name === "Research Assistant";
              const degLabel =
                s.role === "Doctoral Researcher"
                  ? "PhD"
                  : s.role === "Graduate Researcher"
                  ? "MSc"
                  : "Undergrad";

              const cardContent = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={`group border border-slate-200 p-5 text-center transition-all duration-200 bg-white ${
                    !isPlaceholder
                      ? "hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
                      : "opacity-50"
                  }`}
                >
                  {/* Circular photo */}
                  <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full bg-slate-100 border border-slate-200">
                    {s.photo ? (
                      <img
                        src={s.photo}
                        alt=""
                        aria-hidden="true"
                        className={`w-full h-full object-cover ${(s as typeof s & { photoPosition?: string }).photoPosition ?? "object-top"}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                        <span className="text-sm font-mono font-bold text-slate-500">
                          {s.initials}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-slate-800 font-semibold text-sm mb-0.5 group-hover:text-slate-900 transition-colors leading-snug">
                    {s.name}
                  </p>
                  <p className="text-[#2A7FC1] text-[11px] font-mono">{degLabel}</p>
                  {!isPlaceholder && (
                    <p className="text-slate-400 text-[10px] mt-2 font-mono group-hover:text-slate-600 transition-colors">
                      View profile →
                    </p>
                  )}
                </motion.div>
              );

              return isPlaceholder ? (
                <div key={`${s.initials}-${i}`}>{cardContent}</div>
              ) : (
                <Link key={`${s.initials}-${i}`} href={`/people/${slug}`}>
                  {cardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alumni */}
      {ALUMNI.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <p className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase mb-2">
                Alumni
              </p>
              <h2 className="text-3xl font-bold text-slate-900">Past Members</h2>
              <p className="text-slate-500 text-sm mt-2">
                Former members now making an impact in academia and industry.
              </p>
            </motion.div>

            {/* Column headers — desktop only */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-4 py-2 mb-1">
              <p className="col-span-3 text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Name
              </p>
              <p className="col-span-2 text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Degree
              </p>
              <p className="col-span-1 text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Year
              </p>
              <p className="col-span-3 text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Thesis
              </p>
              <p className="col-span-3 text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Now At
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {ALUMNI.map((a, i) => (
                <motion.div
                  key={`${a.name}-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="md:grid md:grid-cols-12 gap-4 px-4 py-4 hover:bg-slate-50 transition-colors duration-150 flex flex-col gap-y-1.5"
                >
                  <p className="md:col-span-3 text-slate-700 text-sm font-medium">
                    {a.name}
                  </p>
                  <p className="md:col-span-2 text-[#4BBFCF] text-xs font-mono">
                    {a.degree}
                  </p>
                  <p className="md:col-span-1 text-slate-500 text-xs font-mono tabular-nums">
                    {a.yearGraduated}
                  </p>
                  <p className="md:col-span-3 text-slate-500 text-xs leading-relaxed">
                    {a.thesis}
                  </p>
                  <p className="md:col-span-3 text-slate-700 text-xs">{a.nowAt}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Open Positions */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase mb-2">
              Opportunities
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Open Positions
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
              We currently have{" "}
              <span className="text-slate-900 font-semibold">2 MSc</span> and{" "}
              <span className="text-slate-900 font-semibold">1 PhD</span> positions
              available for{" "}
              <span className="text-slate-900 font-semibold">Fall 2026</span>.
              Interested applicants are encouraged to contact Prof.
              Ombuki-Berman directly at{" "}
              <a
                href={`mailto:${PI.email}`}
                className="text-[#4BBFCF] hover:text-slate-900 transition-colors focus:outline-none focus-visible:underline"
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
