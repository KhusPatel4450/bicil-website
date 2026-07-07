"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[11px] font-mono tracking-wide text-slate-400 mb-4">
              Join Us
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Shape the Future of{" "}
              <span className="bg-gradient-to-r from-[#2A7FC1] to-[#3DAF88] bg-clip-text text-transparent">
                Intelligent Systems
              </span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 text-lg">
              We welcome motivated MSc and PhD students, postdoctoral
              researchers, and collaborators interested in evolutionary
              computation, swarm intelligence, and optimization.
            </p>

            <div className="space-y-6 mb-10">
              <div className="pl-4 border-l border-[#2A7FC1]/25">
                <p className="text-[10px] font-mono tracking-wide text-slate-400 mb-1">
                  Email
                </p>
                <p className="text-slate-900 text-sm font-mono">
                  bombuki [at] brocku [dot] ca
                </p>
              </div>

              <div className="pl-4 border-l border-[#2A7FC1]/25">
                <p className="text-[10px] font-mono tracking-wide text-slate-400 mb-1">
                  Location
                </p>
                <p className="text-slate-900 text-sm leading-relaxed">
                  Department of Computer Science
                  <br />
                  Brock University
                  <br />
                  <span className="text-slate-600">
                    500 Glenridge Ave, St. Catharines, ON L2S 3A1
                  </span>
                </p>
              </div>

              <div className="pl-4 border-l border-[#2A7FC1]/25">
                <p className="text-[10px] font-mono tracking-wide text-slate-400 mb-1">
                  Admissions
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Applications accepted for Fall and Winter intake. Check the
                  Brock Graduate Calendar for deadlines and requirements.
                </p>
              </div>
            </div>

            <div className="pl-4 border-l-2 border-[#4BBFCF]/40 mb-10">
              <p className="text-[#4BBFCF] text-sm font-semibold mb-2">
                For Prospective Students
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                When reaching out, please include your CV, unofficial
                transcripts, a brief statement of research interests, and any
                relevant prior research experience.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
