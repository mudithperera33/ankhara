"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function SoundToggle({ soundOn, setSoundOn }) {
  const ambientRef = useRef(null);

  useEffect(() => {
    const audio = ambientRef.current;
    if (!audio) return;
    if (soundOn) {
      audio.volume = 0.35;
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [soundOn]);

  return (
    <>
      <audio ref={ambientRef} src="/sounds/temple-ambient.mp3" loop preload="none" />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={() => setSoundOn((s) => !s)}
        aria-label={soundOn ? "Mute ambient temple sound" : "Play ambient temple sound"}
        aria-pressed={soundOn}
        className="fixed top-4 right-4 z-[60] w-11 h-11 rounded-full border border-gold/50 bg-black/40 backdrop-blur-sm flex items-center justify-center text-gold hover:border-gold transition-colors"
      >
        {soundOn ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            <path d="M15.5 8.5a4 4 0 0 1 0 7" />
            <path d="M18 6a8 8 0 0 1 0 12" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5 6 9H3v6h3l5 4V5Z" />
            <path d="M16 9l5 6M21 9l-5 6" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
