/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0A",
        sandstone: "#2A1A0A",
        sandstone2: "#3a2410",
        gold: "#D4AF37",
        bronze: "#8B6B2E",
        amber: "#FFCC66",
        embergold: "#F2C879",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-cormorant)", "serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
        widest3: "0.5em",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "0.55", filter: "brightness(0.9)" },
          "20%": { opacity: "0.85", filter: "brightness(1.15)" },
          "40%": { opacity: "0.6", filter: "brightness(0.95)" },
          "60%": { opacity: "0.9", filter: "brightness(1.2)" },
          "80%": { opacity: "0.65", filter: "brightness(1)" },
        },
        glowpulse: {
          "0%, 100%": { filter: "drop-shadow(0 0 6px rgba(212,175,55,0.55)) drop-shadow(0 0 14px rgba(255,204,102,0.25))" },
          "50%": { filter: "drop-shadow(0 0 22px rgba(212,175,55,0.95)) drop-shadow(0 0 46px rgba(255,204,102,0.55))" },
        },
        risefade: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(var(--dx), var(--dy))" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        flicker: "flicker 3.2s ease-in-out infinite",
        glowpulse: "glowpulse 3.4s ease-in-out infinite",
        risefade: "risefade 1.4s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
