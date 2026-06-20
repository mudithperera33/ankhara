"use client";

import { motion } from "framer-motion";

const corner = (rotate) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    className={`absolute ${rotate}`}
    style={{ color: "#d4af37" }}
  >
    <path d="M2 2 H22 M2 2 V22" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="2" cy="2" r="3" fill="currentColor" />
  </svg>
);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.45, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function EventTablet() {
  return (
    <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden temple-walls vignette px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-10"
      >
        <p className="font-display text-[11px] sm:text-xs uppercase tracking-widest3 text-bronze">
          Inscribed Upon the Tablet
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="relative w-full max-w-sm sm:max-w-md mx-auto"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          initial={{ rotateX: 8, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative px-8 py-10 sm:px-12 sm:py-14 border-[1.5px] border-gold/70 rounded-sm"
          style={{
            background:
              "linear-gradient(165deg, #241608 0%, #150e06 60%, #0c0804 100%)",
            boxShadow:
              "0 0 0 1px rgba(139,107,46,0.4), 0 24px 60px rgba(0,0,0,0.6), inset 0 0 60px rgba(212,175,55,0.06)",
          }}
        >
          {corner("top-2 left-2")}
          {corner("top-2 right-2 rotate-90")}
          {corner("bottom-2 left-2 -rotate-90")}
          {corner("bottom-2 right-2 rotate-180")}

          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-screen pointer-events-none"
            style={{ backgroundImage: "var(--hiero-pattern)", backgroundSize: "160px 160px" }}
          />

          <div className="relative flex flex-col items-center gap-7 text-center">
            <motion.div variants={item} className="flex flex-col items-center gap-1">
              <span className="font-display text-[10px] uppercase tracking-widest2 text-bronze">
                The Day
              </span>
              <span className="font-display text-glow-gold text-2xl sm:text-3xl">
                21<sup className="text-base align-super">st</sup> June
              </span>
            </motion.div>

            <div className="gold-rule h-px w-24" />

            <motion.div variants={item} className="flex flex-col items-center gap-1">
              <span className="font-display text-[10px] uppercase tracking-widest2 text-bronze">
                The Hours
              </span>
              <span className="font-body text-lg sm:text-xl text-amber">
                9.00 A.M. &mdash; 5.00 P.M.
              </span>
            </motion.div>

            <div className="gold-rule h-px w-24" />

            <motion.div variants={item} className="flex flex-col items-center gap-1">
              <span className="font-display text-[10px] uppercase tracking-widest2 text-bronze">
                The Hall
              </span>
              <span className="font-body text-lg sm:text-xl text-amber">
                B2 Lecture Hall
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
