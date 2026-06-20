"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

// TODO: replace with your real WhatsApp group invite or registration form URL
const REGISTRATION_LINK = "https://chat.whatsapp.com/Hg4D8z4viUd8Ak9iN5Abgm";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.7, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function SummonsCTA() {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((r) => [...r, { id, x, y }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);

    if (navigator.vibrate) {
      try { navigator.vibrate(30); } catch (err) {}
    }
    window.open(REGISTRATION_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden temple-walls vignette px-6 py-24">
      <div className="absolute inset-0">
        <ParticleField intensity={1} embers />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="relative z-10 flex flex-col items-center text-center max-w-sm sm:max-w-lg gap-4"
      >
        <motion.p variants={item} className="font-body italic text-lg sm:text-2xl text-glow-soft">
          The kingdom awaits its newest members.
        </motion.p>
        <motion.p variants={item} className="font-display text-xl sm:text-3xl text-glow-gold uppercase tracking-wide">
          Will you answer the call?
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <button
            onClick={handleClick}
            className="relative overflow-hidden px-10 py-5 sm:px-14 sm:py-6 rounded-sm font-display uppercase tracking-widest2 text-sm sm:text-base text-[#1a1106] active:scale-95 transition-transform duration-150 animate-glowpulse"
            style={{
              background: "linear-gradient(135deg, #fff3cf, #ffcc66 35%, #d4af37 70%, #8b6b2e)",
              boxShadow: "0 0 40px rgba(212,175,55,0.5)",
            }}
          >
            <span className="relative z-10">Enter Ankhara</span>
            {ripples.map((r) => (
              <motion.span
                key={r.id}
                initial={{ opacity: 0.55, scale: 0 }}
                animate={{ opacity: 0, scale: 4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute rounded-full bg-white pointer-events-none"
                style={{ left: r.x, top: r.y, width: 16, height: 16, marginLeft: -8, marginTop: -8 }}
              />
            ))}
          </button>
        </motion.div>

        <motion.p variants={item} className="mt-8 font-body text-xs sm:text-sm text-bronze">
          ANKHARA &middot; Minispazia 4.0 &middot; 21st June &middot; B2 Lecture Hall
        </motion.p>
      </motion.div>
    </section>
  );
}
