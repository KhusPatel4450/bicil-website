"use client";

import { motion } from "framer-motion";
import newsData from "@/data/news.json";

const CATEGORY_COLORS: Record<string, string> = {
  Award:         "#4BBFCF",
  Publication:   "#2A7FC1",
  Conference:    "#3DAF88",
  "New Members": "#5BBF8A",
  Collaboration: "#7C9EBF",
  Event:         "#2A7FC1",
};

const NEWS = newsData.items;

export default function News() {
  return (
    <section id="news" className="py-24 lg:py-32 bg-[#091628]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-[11px] font-mono tracking-[0.2em] text-[#2A7FC1]/80 uppercase mb-3">
            Lab News
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest Updates
          </h2>
          <p className="text-white/70 max-w-xl leading-relaxed">
            Awards, publications, new members, conferences, and events from
            the BICIL community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white/[0.04] border border-white/8 p-6 hover:border-white/20 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-[11px] font-mono font-semibold uppercase tracking-wider"
                  style={{ color: CATEGORY_COLORS[item.category] ?? "#2A7FC1" }}
                >
                  {item.category}
                </span>
                <span className="text-white/50 text-xs font-mono">{item.date}</span>
              </div>
              <h3 className="font-semibold text-white text-base leading-snug mb-3 group-hover:text-[#4BBFCF] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                {item.excerpt}
              </p>
              <div className="mt-5 pt-4 border-t border-white/8">
                <span className="text-[#4BBFCF] text-sm inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                  Read more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
