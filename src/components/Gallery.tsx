"use client";

import { motion } from "framer-motion";

const ITEMS = [
  { label: "Lab Environment",          aspect: "4/3",  bg: ["#0E1E30", "#091628"] },
  { label: "GECCO 2024 Presentation",  aspect: "16/9", bg: ["#0A2030", "#061220"] },
  { label: "Research in Progress",     aspect: "1/1",  bg: ["#0E2820", "#091A14"] },
  { label: "Algorithm Design Session", aspect: "4/3",  bg: ["#0A1830", "#060E20"] },
  { label: "Lab Group Photo 2023",     aspect: "16/9", bg: ["#102030", "#081428"] },
  { label: "Swarm Robotics Demo",      aspect: "1/1",  bg: ["#0A2028", "#06141C"] },
  { label: "CEC 2023 Poster Session",  aspect: "4/3",  bg: ["#0E2030", "#091628"] },
  { label: "Research Collaboration",   aspect: "16/9", bg: ["#0C1E2E", "#081220"] },
  { label: "Whiteboard Theory",        aspect: "1/1",  bg: ["#102428", "#08181C"] },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#091628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-[11px] font-mono tracking-[0.2em] text-white/50 uppercase mb-3">
            Gallery
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Lab Life</h2>
          <p className="text-white/65 max-w-xl leading-relaxed">
            Snapshots from our research, conferences, lab events, and collaborations.
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.055 }}
              className="break-inside-avoid mb-4 overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 group cursor-pointer relative"
            >
              <div
                className="w-full flex items-center justify-center"
                style={{
                  aspectRatio: item.aspect,
                  background: `linear-gradient(135deg, ${item.bg[0]}, ${item.bg[1]})`,
                }}
                role="img"
                aria-label={item.label}
              >
                <div className="text-center p-4 select-none">
                  <svg className="w-7 h-7 mx-auto mb-2 text-white/35" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white/50 text-xs">{item.label}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-xs font-medium">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/40 text-xs mt-6">
          Replace placeholders with actual lab photographs
        </p>
      </div>
    </section>
  );
}
