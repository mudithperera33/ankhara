"use client";

import { motion } from "framer-motion";

export default function EyeOfHorus({ size = 120, intense = false, className = "" }) {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center animate-glowpulse ${className}`}
      style={{ width: size, height: size * 0.78 }}
      animate={intense ? { scale: [1, 1.25, 1.1] } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 200 156"
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
      >
        <defs>
          <linearGradient id="eyeGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff3cf" />
            <stop offset="45%" stopColor="#ffcc66" />
            <stop offset="100%" stopColor="#d4af37" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#eyeGold)" strokeWidth="3.5" strokeLinecap="round">
          {/* brow */}
          <path d="M30 46 Q100 8 168 46" />
          {/* upper lid */}
          <path d="M8 78 Q60 30 100 38 Q140 30 192 78" />
          {/* lower lid */}
          <path d="M8 78 Q60 112 100 104 Q140 112 192 78" />
          {/* iris */}
          <circle cx="100" cy="78" r="20" fill="url(#eyeGold)" stroke="none" />
          <circle cx="100" cy="78" r="20" fill="none" stroke="#3a2410" strokeWidth="1.4" opacity="0.5" />
          {/* tear marking */}
          <path d="M96 104 L88 142 Q83 152 70 148" />
          {/* spiral / staff marking */}
          <path d="M150 86 Q176 96 180 118 Q182 132 168 134" />
        </g>
      </svg>
    </motion.div>
  );
}
