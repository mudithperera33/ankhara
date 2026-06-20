"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AwakeningOverlay from "@/components/AwakeningOverlay";
import TempleGates from "@/components/TempleGates";
import AnkharaTitle from "@/components/AnkharaTitle";
import EventTablet from "@/components/EventTablet";
import SummonsCTA from "@/components/SummonsCTA";
import SoundToggle from "@/components/SoundToggle";

export default function Home() {
  const [phase, setPhase] = useState("awakening"); // awakening -> gates -> open
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    document.body.style.overflow = phase === "open" ? "auto" : "hidden";
    window.scrollTo(0, 0);
  }, [phase]);

  return (
    <main className="relative bg-void min-h-screen w-full overflow-x-hidden">
      <SoundToggle soundOn={soundOn} setSoundOn={setSoundOn} />

      <AnimatePresence>
        {phase === "awakening" && (
          <AwakeningOverlay key="awakening" soundOn={soundOn} onAwaken={() => setPhase("gates")} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "gates" && (
          <TempleGates key="gates" soundOn={soundOn} onOpened={() => setPhase("open")} />
        )}
      </AnimatePresence>

      <div aria-hidden={phase !== "open"}>
        <AnkharaTitle active={phase === "open"} />
        <EventTablet />
        <SummonsCTA />
      </div>
    </main>
  );
}
