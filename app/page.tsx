"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Polaroid from "@/components/Polaroid";
import MusicPlayer from "@/components/MusicPlayer";

const StarsBackground = dynamic(() => import("@/components/StarsBackground"), {
  ssr: false,
});

const POLAROIDS = [
  {
    caption: "наш первый день",
    rotation: -6,
    delay: 0.6,
    floatDuration: 4.2,
    floatDelay: 0,
  },
  {
    caption: "твоя улыбка",
    rotation: 4,
    delay: 1.0,
    floatDuration: 3.8,
    floatDelay: 0.5,
  },
  {
    caption: "вместе",
    rotation: -3,
    delay: 1.4,
    floatDuration: 4.5,
    floatDelay: 1.0,
  },
  {
    caption: "незабываемый вечер",
    rotation: 7,
    delay: 1.8,
    floatDuration: 3.6,
    floatDelay: 0.3,
  },
  {
    caption: "счастье",
    rotation: -5,
    delay: 2.2,
    floatDuration: 4.8,
    floatDelay: 0.8,
  },
  {
    caption: "моё всё",
    rotation: 3,
    delay: 2.6,
    floatDuration: 4.0,
    floatDelay: 1.2,
  },
];

export default function Home() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 20%, #1a0a2e 0%, #0a0a1a 50%, #100818 100%)",
      }}
    >
      <StarsBackground />
      <MusicPlayer />

      <div className="relative z-10 flex flex-col items-center w-full px-4">
        {/* Дата */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "13px",
            letterSpacing: "0.4em",
            color: "rgba(201, 168, 76, 0.7)",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          8 марта 2026
        </motion.div>

        {/* Имя */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.34, 1.2, 0.64, 1] }}
          className="gold-text"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(52px, 12vw, 96px)",
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: "4px",
          }}
        >
          Kamilla
        </motion.h1>

        {/* Подзаголовок */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(16px, 3vw, 22px)",
            fontStyle: "italic",
            color: "rgba(245, 240, 232, 0.65)",
            letterSpacing: "0.06em",
            marginBottom: "48px",
          }}
        >
          с международным женским днём
        </motion.p>

        {/* Поляроиды */}
        <div
          className="flex flex-wrap justify-center gap-5 mb-12"
          style={{ maxWidth: "800px" }}
        >
          {POLAROIDS.map((p, i) => (
            <Polaroid key={i} {...p} zIndex={10 + i} />
          ))}
        </div>

        {/* Разделитель */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.8 }}
          style={{
            width: "200px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #c9a84c, transparent)",
            marginBottom: "32px",
          }}
        />

        {/* Текст поздравления */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.0 }}
          className="text-center"
          style={{ maxWidth: "520px" }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(15px, 2.5vw, 19px)",
              fontStyle: "italic",
              color: "rgba(245, 240, 232, 0.8)",
              lineHeight: 1.8,
              letterSpacing: "0.03em",
              marginBottom: "24px",
            }}
          >
            Ты — моё любимое воспоминание, которое я хочу создавать каждый день.
            Спасибо за твою теплоту, свет и бесконечную красоту.
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(13px, 2vw, 16px)",
              color: "rgba(201, 168, 76, 0.75)",
              letterSpacing: "0.1em",
            }}
          >
            ✦ &nbsp; С любовью &nbsp; ✦
          </p>
        </motion.div>

        {/* Сердце снизу */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.4, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ marginTop: "40px", marginBottom: "60px" }}
        >
          <HeartSvg />
        </motion.div>
      </div>
    </main>
  );
}

function HeartSvg() {
  return (
    <motion.svg
      width="48"
      height="44"
      viewBox="0 0 48 44"
      fill="none"
      animate={{ scale: [1, 1.15, 1] }}
      transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M24 40S4 26 4 14a10 10 0 0 1 20-2 10 10 0 0 1 20 2c0 12-20 26-20 26z"
        fill="url(#heartGrad)"
      />
      <defs>
        <linearGradient id="heartGrad" x1="4" y1="4" x2="44" y2="44">
          <stop offset="0%" stopColor="#c2556a" />
          <stop offset="100%" stopColor="#c9a84c" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
