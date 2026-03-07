"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface Petal {
  x: number;
  duration: number;
  delay: number;
  color: string;
}

const PETAL_COLORS = ["#c9a84c", "#c2556a", "#e8a0b0", "#f5e29a", "#fff"];

export default function StarsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    const stars: Star[] = Array.from({ length: 120 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
    }));

    const petals: Petal[] = Array.from({ length: 18 }, (_, i) => ({
      x: (i / 18) * 100 + Math.random() * 6,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 10,
      color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    }));

    el.innerHTML = stars
      .map(
        (s) =>
          `<div class="star" style="
          left:${s.x}%;
          top:${s.y}%;
          width:${s.size}px;
          height:${s.size}px;
          --duration:${s.duration}s;
          --delay:${s.delay}s;
        "></div>`
      )
      .join("") +
      petals
        .map(
          (p) =>
            `<div class="petal" style="
          left:${p.x}%;
          top:-10px;
          background:${p.color};
          --fall-duration:${p.duration}s;
          --fall-delay:${p.delay}s;
          opacity:0.7;
        "></div>`
        )
        .join("");
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
}
