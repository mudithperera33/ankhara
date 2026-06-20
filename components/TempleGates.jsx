"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleField from "./ParticleField";

function DoorPanel({ side }) {
  const isLeft = side === "left";
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: isLeft ? "-101%" : "101%" }}
      transition={{ duration: 2.3, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
      className="relative h-full w-1/2 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #2a1a0a 0%, #1c1106 45%, #120b04 100%)",
        boxShadow: isLeft
          ? "inset -3px 0 0 rgba(212,175,55,0.5), inset 0 0 80px rgba(0,0,0,0.7)"
          : "inset 3px 0 0 rgba(212,175,55,0.5), inset 0 0 80px rgba(0,0,0,0.7)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-screen"
        style={{ backgroundImage: "var(--hiero-pattern)", backgroundSize: "180px 180px" }}
      />
      {/* carved panel frame */}
      <div className="absolute inset-4 sm:inset-8 border-2 border-gold/40 rounded-sm" />
      <div className="absolute inset-8 sm:inset-14 border border-bronze/50 rounded-sm" />
      {/* inner gold trim edge */}
      <div
        className={`absolute top-0 bottom-0 ${isLeft ? "right-0" : "left-0"} w-[6px]`}
        style={{
          background: "linear-gradient(180deg, #fff3cf, #d4af37 30%, #8b6b2e 70%, #fff3cf)",
          boxShadow: "0 0 18px rgba(212,175,55,0.7)",
        }}
      />
      {/* ankh emblem carving */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <svg width="70" height="110" viewBox="0 0 70 110" fill="none" stroke="#d4af37" strokeWidth="3">
          <circle cx="35" cy="22" r="16" />
          <path d="M35 38 V104 M14 58 H56" />
        </svg>
      </div>
    </motion.div>
  );
}

const SEQ = [
  "THE GODS HAVE NOT FORGOTTEN",
  "FRESHERS PREPARE TO ANSWER THEIR CALL",
];

export default function TempleGates({ onOpened, soundOn }) {
  const [textStep, setTextStep] = useState(-1);

  useEffect(() => {
    const t1 = setTimeout(() => setTextStep(0), 1300);
    const t2 = setTimeout(() => setTextStep(1), 3300);
    const t3 = setTimeout(() => onOpened(), 5500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onOpened]);

  return (
    <motion.div
      className="fixed inset-0 z-40 bg-void overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* golden light core revealed behind the parting doors */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.6 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(255,204,102,0.5), rgba(212,175,55,0.18) 45%, transparent 75%)",
          }}
        />
        <ParticleField intensity={1.4} embers />
      </motion.div>

      <div className="absolute inset-0 flex">
        <DoorPanel side="left" />
        <DoorPanel side="right" />
      </div>

      <div className="relative z-30 h-full w-full flex items-center justify-center px-6">
        <div className="text-center max-w-xs sm:max-w-md">
          <AnimatePresence mode="wait">
            {textStep === 0 && (
              <motion.h2
                key="g0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="font-display text-glow-gold text-xl sm:text-3xl uppercase tracking-wide leading-snug"
              >
                {SEQ[0]}
              </motion.h2>
            )}
            {textStep === 1 && (
              <motion.h3
                key="g1"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="font-display text-embergold text-glow-soft text-base sm:text-xl uppercase tracking-widest2 leading-relaxed"
              >
                {SEQ[1]}
              </motion.h3>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
