"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Publications from "@/components/Publications";

const AREAS = [
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Evolutionary Computation",
    description:
      "Designing and applying evolutionary algorithms — genetic algorithms, evolution strategies, and differential evolution — to solve NP-hard combinatorial and continuous optimization problems in logistics, scheduling, and engineering design.",
    tags: ["Genetic Algorithms", "Evolution Strategies", "VRP", "CEC Benchmarks"],
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Swarm Intelligence & Robotics",
    description:
      "Investigating collective intelligence emerging from simple agent interactions. Our work spans Particle Swarm Optimization (PSO), Ant Colony Optimization (ACO), and swarm robotics, enabling autonomous coordination in complex, dynamic environments.",
    tags: ["PSO", "ACO", "Swarm Robotics", "Multi-Agent Systems"],
  },
  {
    id: 3,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Reinforcement Learning Optimization",
    description:
      "Bridging bio-inspired computation with deep reinforcement learning to create adaptive agents that learn optimal policies in dynamic, uncertain environments. Applications include robotics control, resource allocation, and sequential decision-making.",
    tags: ["Deep RL", "Policy Gradient", "Q-Learning", "Multi-Agent RL"],
  },
  {
    id: 4,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
    ),
    title: "Feature Selection via Genetic Algorithms",
    description:
      "Leveraging genetic algorithms and other evolutionary methods for intelligent feature selection in high-dimensional datasets, improving ML model performance while reducing computational cost. Key applications in bioinformatics and medical data.",
    tags: ["Wrapper Methods", "Filter Methods", "Dimensionality Reduction", "ML"],
  },
  {
    id: 5,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: "Multi-Objective Optimization",
    description:
      "Developing algorithms that simultaneously optimize multiple conflicting objectives, producing entire Pareto-optimal solution fronts. Our MOEA work addresses trade-offs in engineering design, resource planning, and portfolio optimization.",
    tags: ["NSGA-II", "MOEA/D", "Pareto Fronts", "Decomposition"],
  },
  {
    id: 6,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Bioinformatics & Health Applications",
    description:
      "Applying bio-inspired and machine learning methods to biological and medical data problems — including gene expression analysis, protein structure prediction, and clinical decision support — to accelerate discovery and improve patient outcomes.",
    tags: ["Gene Expression", "Medical Data", "Predictive Modelling", "ML in Health"],
  },
];

export default function ResearchContent() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to BICIL
            </Link>

            <p className="text-[11px] font-mono tracking-wide text-[#2A7FC1]/80 mb-4">
              Research Areas
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              What We{" "}
              <span className="bg-gradient-to-r from-[#2A7FC1] to-[#3DAF88] bg-clip-text text-transparent">
                Study
              </span>
            </h1>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              Six interconnected research streams unified by one theme —{" "}
              <span className="text-slate-900 font-medium">optimization</span>.
              Finding the best solutions in complex, high-dimensional search landscapes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All research areas */}
      <section className="pb-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {AREAS.map((area, i) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-white p-8 hover:bg-slate-50 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-[#2A7FC1]/70 group-hover:text-[#2A7FC1] transition-colors duration-200">
                    {area.icon}
                  </div>
                  <span className="text-[11px] font-mono text-slate-300 select-none">
                    0{area.id}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {area.description}
                </p>
                <p className="text-[11px] font-mono text-slate-500">
                  {area.tags.join(" · ")}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full publications */}
      <Publications />
    </>
  );
}
