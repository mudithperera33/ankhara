"use client";

import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

export default function AnkharaTitle({ active }) {
  return (
    <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden temple-walls vignette">
      <div className="absolute inset-0">
        <ParticleField intensity={0.9} embers />
      </div>

      {/* torch glows at the edges */}
      <div className="absolute left-[6%] top-1/3 w-24 h-40 rounded-full bg-bronze/30 blur-3xl animate-flicker" />
      <div className="absolute right-[6%] top-1/3 w-24 h-40 rounded-full bg-bronze/30 blur-3xl animate-flicker" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-[10px] sm:text-xs uppercase tracking-widest3 text-bronze mb-4"
        >
          Freshers&rsquo; Welcome
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 90, letterSpacing: "0.05em" }}
          animate={
            active
              ? { opacity: 1, y: 0, letterSpacing: "0.02em" }
              : {}
          }
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="title-stone font-display font-black uppercase text-[3.4rem] sm:text-[6rem] md:text-[7.5rem] leading-[0.95] select-none"
        >
          ANKHARA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={active ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1.1 }}
          className="gold-rule h-px w-40 sm:w-64 my-5"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.3 }}
          className="font-display text-glow-soft text-sm sm:text-lg uppercase tracking-widest2 text-amber"
        >
          Minispazia 4.0
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: [0, 1, 0.6, 1] } : {}}
          transition={{ duration: 2.4, delay: 2.4 }}
          className="mt-14 flex flex-col items-center gap-2 text-bronze"
        >
          <span className="font-display text-[10px] uppercase tracking-widest2">Descend Further</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold text-lg"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
