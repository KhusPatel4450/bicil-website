"use client";

import { motion } from "framer-motion";
import fundersData from "@/data/funders.json";

const FUNDERS = fundersData.items;

export default function Funding() {
  return (
    <section id="funding" className="py-16 lg:py-20 border-t border-white/8 bg-[#091628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono tracking-[0.25em] text-white/55 uppercase text-center mb-12"
        >
          Funding &amp; Partners
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/8"
        >
          {FUNDERS.map((f, i) => (
            <motion.div
              key={f.abbr}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white/[0.04] px-6 py-8 text-center hover:bg-white/[0.07] transition-colors duration-200"
              title={f.name}
            >
              <p className="font-semibold text-white/80 text-sm mb-1.5">{f.abbr}</p>
              <p className="text-white/60 text-[11px] leading-snug">{f.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
