"use client";

import { motion } from "framer-motion";

const AREAS = [
  {
    id: 1,
    title: "Evolutionary Computation",
    tags: ["Genetic Algorithms", "Evolution Strategies", "VRP", "CEC Benchmarks"],
  },
  {
    id: 2,
    title: "Swarm Intelligence & Robotics",
    tags: ["PSO", "ACO", "Swarm Robotics", "Multi-Agent Systems"],
  },
  {
    id: 3,
    title: "Reinforcement Learning Optimization",
    tags: ["Deep RL", "Policy Gradient", "Q-Learning", "Multi-Agent RL"],
  },
  {
    id: 4,
    title: "Feature Selection via Genetic Algorithms",
    tags: ["Wrapper Methods", "Filter Methods", "Dimensionality Reduction", "ML"],
  },
  {
    id: 5,
    title: "Multi-Objective Optimization",
    tags: ["NSGA-II", "MOEA/D", "Pareto Fronts", "Decomposition"],
  },
  {
    id: 6,
    title: "Bioinformatics & Health Applications",
    tags: ["Gene Expression", "Medical Data", "Predictive Modelling", "ML in Health"],
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[11px] font-mono tracking-wide text-[#2A7FC1]/80 mb-3">
              Research Areas
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              What We Study
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed lg:text-right">
            Six interconnected streams unified by one theme —{" "}
            <span className="text-slate-700 font-medium">optimization</span>.
          </p>
        </motion.div>

        {/* Numbered list */}
        <div className="border-t border-slate-200">
          {AREAS.map((area, i) => (
            <motion.a
              key={area.id}
              href="/research"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 border-b border-slate-200 py-5 hover:bg-white -mx-6 px-6 lg:-mx-8 lg:px-8 transition-colors duration-150 focus:outline-none focus-visible:bg-white"
            >
              {/* Number */}
              <span className="text-[11px] font-mono text-slate-300 group-hover:text-[#2A7FC1] transition-colors duration-150 w-6 flex-shrink-0 select-none">
                {String(area.id).padStart(2, "0")}
              </span>

              {/* Title */}
              <span className="flex-1 text-lg font-semibold text-slate-800 group-hover:text-slate-900 transition-colors duration-150 leading-snug">
                {area.title}
              </span>

              {/* Tags */}
              <span className="flex flex-wrap gap-2 sm:justify-end sm:max-w-xs">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-slate-400 group-hover:text-slate-500 transition-colors duration-150 bg-slate-100 group-hover:bg-slate-200 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </span>

              {/* Arrow */}
              <svg
                className="w-4 h-4 text-slate-300 group-hover:text-[#2A7FC1] group-hover:translate-x-1 transition-all duration-150 flex-shrink-0 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="/research"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#2A7FC1] hover:bg-[#1B6BA8] text-white font-semibold text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFCF]"
          >
            Explore all research
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/research#publications"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors focus:outline-none focus-visible:underline"
          >
            View publications →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
