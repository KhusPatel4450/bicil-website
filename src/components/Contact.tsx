"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#091628]/82">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[11px] font-mono tracking-[0.2em] text-white/50 uppercase mb-4">
              Join Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Shape the Future of{" "}
              <span className="bg-gradient-to-r from-[#2A7FC1] to-[#3DAF88] bg-clip-text text-transparent">
                Intelligent Systems
              </span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-10 text-lg">
              We welcome motivated MSc and PhD students, postdoctoral
              researchers, and collaborators interested in evolutionary
              computation, swarm intelligence, and optimization.
            </p>

            <div className="space-y-6 mb-10">
              <div className="pl-4 border-l border-[#2A7FC1]/25">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 mb-1">
                  Email
                </p>
                <a
                  href="mailto:bombuki@brocku.ca"
                  className="text-white hover:text-[#4BBFCF] transition-colors text-sm focus:outline-none focus-visible:underline"
                >
                  bombuki@brocku.ca
                </a>
              </div>

              <div className="pl-4 border-l border-[#2A7FC1]/25">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 mb-1">
                  Location
                </p>
                <p className="text-white text-sm leading-relaxed">
                  Department of Computer Science
                  <br />
                  Brock University
                  <br />
                  <span className="text-white/65">
                    500 Glenridge Ave, St. Catharines, ON L2S 3A1
                  </span>
                </p>
              </div>

              <div className="pl-4 border-l border-[#2A7FC1]/25">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/50 mb-1">
                  Admissions
                </p>
                <p className="text-white/65 text-sm leading-relaxed">
                  Applications accepted for Fall and Winter intake. Check the
                  Brock Graduate Calendar for deadlines and requirements.
                </p>
              </div>
            </div>

            <div className="pl-4 border-l-2 border-[#4BBFCF]/30 mb-10">
              <p className="text-[#4BBFCF]/70 text-sm font-semibold mb-2">
                For Prospective Students
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                When reaching out, please include your CV, unofficial
                transcripts, a brief statement of research interests, and any
                relevant prior research experience.
              </p>
            </div>

            <a
              href="mailto:bombuki@brocku.ca"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2A7FC1] hover:bg-[#1B6BA8] text-white font-semibold text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4BBFCF]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email the Research Director
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
