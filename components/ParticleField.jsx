"use client";

import { useEffect, useRef } from "react";

export default function ParticleField({ intensity = 1, embers = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    let running = true;
    let width = 0;
    let height = 0;

    const isMobile = window.innerWidth < 768;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const baseCount = reduceMotion ? 0 : isMobile ? 26 : 55;
    const count = Math.round(baseCount * intensity);

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function makeParticle() {
      const isEmber = embers && Math.random() < 0.35;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        r: isEmber ? 0.8 + Math.random() * 1.6 : 0.5 + Math.random() * 1.3,
        speedX: (Math.random() - 0.5) * 0.18,
        speedY: isEmber ? -0.25 - Math.random() * 0.35 : (Math.random() - 0.5) * 0.12 - 0.05,
        alpha: 0.15 + Math.random() * 0.45,
        flicker: Math.random() * Math.PI * 2,
        ember: isEmber,
        hue: isEmber ? "255,170,90" : "212,175,55",
      };
    }

    function init() {
      resize();
      particles = Array.from({ length: count }, makeParticle);
    }

    function step() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.flicker += 0.03;
        if (p.x < -5) p.x = width + 5;
        if (p.x > width + 5) p.x = -5;
        if (p.y < -5) p.y = height + 5;
        if (p.y > height + 5) p.y = -5;
        const a = p.alpha * (0.6 + 0.4 * Math.sin(p.flicker));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.hue},${a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    }

    init();
    step();

    const onResize = () => resize();
    const onVis = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(step);
      else cancelAnimationFrame(raf);
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [intensity, embers]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
