"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleField from "./ParticleField";
import EyeOfHorus from "./EyeOfHorus";

const LINES = [
  "THE SANDS HAVE SHIFTED…",
  "The kingdom has slept for centuries.",
  "Now, the gates awaken once more.",
];

export default function AwakeningOverlay({ onAwaken, soundOn }) {
  const [step, setStep] = useState(-1); // -1 nothing, 0..2 lines, 3 eye ready
  const [flash, setFlash] = useState(false);
  const [tapped, setTapped] = useState(false);
  const rumbleRef = useRef(null);

  useEffect(() => {
    const timers = [];
    timers.push(setTimeout(() => setStep(0), 1000));
    timers.push(setTimeout(() => setStep(1), 3200));
    timers.push(setTimeout(() => setStep(2), 5400));
    timers.push(setTimeout(() => setStep(3), 7700));
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleTap = () => {
    if (tapped) return;
    setTapped(true);

    if (navigator.vibrate) {
      try { navigator.vibrate(60); } catch (e) {}
    }

    if (soundOn && rumbleRef.current) {
      rumbleRef.current.currentTime = 0;
      rumbleRef.current.play().catch(() => {});
    }

    setFlash(true);
    setTimeout(() => setFlash(false), 650);
    setTimeout(() => onAwaken(), 900);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-void overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <audio ref={rumbleRef} src="/sounds/temple-rumble.mp3" preload="auto" />

      <div className="absolute inset-0">
        <ParticleField intensity={0.7} />
      </div>

      {/* faint radial torch glow breathing in the void */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 55%, rgba(139,107,46,0.18), transparent 70%)",
        }}
        animate={{ opacity: [0.4, 0.75, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
        <div className="min-h-[9rem] flex flex-col items-center justify-center gap-4 sm:gap-5">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.p
                key="l0"
                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                animate={{ opacity: 1, letterSpacing: "0.35em" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                className="font-display text-amber text-glow-gold text-lg sm:text-2xl uppercase"
              >
                {LINES[0]}
              </motion.p>
            )}
            {step === 1 && (
              <motion.p
                key="l1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="font-body italic text-embergold/90 text-glow-soft text-base sm:text-xl tracking-wide"
              >
                {LINES[1]}
              </motion.p>
            )}
            {step === 2 && (
              <motion.p
                key="l2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="font-body italic text-embergold/90 text-glow-soft text-base sm:text-xl tracking-wide"
              >
                {LINES[2]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mt-10 flex flex-col items-center gap-6"
            >
              <button
                onClick={handleTap}
                aria-label="Tap the sacred seal to awaken the gates"
                className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-amber/70 active:scale-95 transition-transform"
              >
                <EyeOfHorus size={108} intense={tapped} />
              </button>
              <motion.p
                animate={{ opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="font-display text-xs sm:text-sm uppercase tracking-widest2 text-gold"
              >
                Tap the Sacred Seal
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0] }}
            transition={{ duration: 0.65, times: [0, 0.3, 1] }}
            className="absolute inset-0 z-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #ffe9b0, #d4af37 55%, transparent 80%)" }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
