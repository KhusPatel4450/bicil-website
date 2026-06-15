"use client";

import { motion } from "framer-motion";
import galleryData from "@/data/gallery.json";

const ITEMS = galleryData.items as { photo: string; caption: string }[];

export default function Gallery() {
  if (ITEMS.length === 0) return null;

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
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.055 }}
              className="break-inside-avoid mb-4 overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 group relative"
            >
              <img
                src={item.photo}
                alt={item.caption}
                className="w-full object-cover"
                loading="lazy"
              />
              {item.caption && (
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white text-xs font-medium">{item.caption}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
