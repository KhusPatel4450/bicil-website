"use client";

import { motion } from "framer-motion";
import fundersData from "@/data/funders.json";

const FUNDERS = fundersData.items;

export default function Funding() {
  return (
    <section id="funding" className="py-16 lg:py-20 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[11px] font-mono tracking-wide text-slate-500 mb-4">
            Industry Partners &amp; Funding
          </p>
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
            Industry research collaboration is supported by the{" "}
            <span className="text-slate-800 font-medium">
              Brock-Niagara Validation, Prototyping and Manufacturing Institute (VPMI)
            </span>{" "}
            and the{" "}
            <span className="text-slate-800 font-medium">
              Government of Canada through FedDev Ontario
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 max-w-2xl mx-auto"
        >
          {FUNDERS.map((f, i) => (
            <motion.div
              key={f.abbr}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white px-8 py-8 text-center hover:bg-slate-50 transition-colors duration-200"
            >
              <p className="font-semibold text-slate-700 text-sm mb-1.5">{f.abbr}</p>
              <p className="text-slate-500 text-[11px] leading-snug">{f.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
