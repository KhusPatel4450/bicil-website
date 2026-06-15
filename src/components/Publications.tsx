"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pubData from "@/data/publications.json";

const PUBS = pubData.items;
const YEARS = ["All", "2024", "2023", "2022", "2021"];
const TYPES = ["All", "Journal", "Conference"];

export default function Publications() {
  const [yearFilter, setYearFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered = PUBS.filter((p) => {
    const yearOk = yearFilter === "All" || p.year === parseInt(yearFilter);
    const typeOk = typeFilter === "All" || p.type === typeFilter.toLowerCase();
    return yearOk && typeOk;
  });

  return (
    <section id="publications" className="py-24 lg:py-32 bg-[#091628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[11px] font-mono tracking-[0.2em] text-[#2A7FC1]/80 uppercase mb-3">
            Publications
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Recent Work
          </h2>
          <p className="text-white/70 max-w-xl leading-relaxed">
            A selection of published research from top-tier journals and
            internationally peer-reviewed conferences.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-8 mb-10 items-center"
          role="group"
          aria-label="Publication filters"
        >
          <div className="flex items-center gap-5 flex-wrap">
            <span className="text-[10px] font-mono text-white/55 uppercase tracking-wider">Year</span>
            {YEARS.map((y) => (
              <button
                key={y}
                onClick={() => setYearFilter(y)}
                aria-pressed={yearFilter === y}
                className={`text-sm pb-1 transition-all duration-150 focus:outline-none ${
                  yearFilter === y
                    ? "text-white border-b-2 border-[#2A7FC1] font-semibold"
                    : "text-white/60 border-b-2 border-transparent hover:text-white/70"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <span className="text-[10px] font-mono text-white/55 uppercase tracking-wider">Type</span>
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                aria-pressed={typeFilter === t}
                className={`text-sm pb-1 transition-all duration-150 focus:outline-none ${
                  typeFilter === t
                    ? "text-white border-b-2 border-[#3DAF88] font-semibold"
                    : "text-white/60 border-b-2 border-transparent hover:text-white/70"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </motion.div>

        {/* List */}
        <div className="divide-y divide-white/8" role="list" aria-label="Publication list">
          <AnimatePresence mode="popLayout">
            {filtered.map((pub, i) => (
              <motion.article
                key={pub.title}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                role="listitem"
                className="group py-6 hover:bg-white/[0.04] -mx-3 px-3 transition-colors duration-150"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                        {pub.type}
                      </span>
                      <span className="text-[10px] font-mono text-white/40">·</span>
                      <span className="text-[10px] font-mono text-white/60 tabular-nums">
                        {pub.year}
                      </span>
                    </div>
                    <h3 className="font-semibold text-white text-base leading-snug mb-2 group-hover:text-[#4BBFCF] transition-colors duration-150">
                      {pub.title}
                    </h3>
                    <p className="text-white/65 text-sm mb-1">{pub.authors}</p>
                    <p className="text-white/70 text-sm">{pub.venue}</p>
                  </div>
                  <a
                    href="#"
                    className="flex-shrink-0 self-start inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/15 hover:border-[#4BBFCF] hover:text-[#4BBFCF] text-white/55 text-xs transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFCF]"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View paper: ${pub.title}`}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    PDF
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/55 py-16 text-sm font-mono">
            No publications match the selected filters.
          </p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-white/8"
        >
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#4BBFCF] hover:text-[#3DAF88] font-medium text-sm transition-colors focus:outline-none focus-visible:underline"
          >
            Complete publication list on Google Scholar
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
