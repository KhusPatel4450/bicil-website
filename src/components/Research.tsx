"use client";

import { motion } from "framer-motion";

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
];

export default function Research() {
  return (
    <section id="research" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[11px] font-mono tracking-[0.2em] text-[#2A7FC1]/80 uppercase mb-3">
            Research Areas
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 max-w-xl">
            What We Study
          </h2>
          <p className="text-slate-600 max-w-xl text-lg leading-relaxed">
            Five interconnected streams unified by one theme —{" "}
            <span className="text-slate-900 font-medium">optimization</span>.
            Finding the best solutions in complex, high-dimensional search landscapes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group bg-white p-8 hover:bg-slate-50 transition-colors duration-200 ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
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
  );
}
