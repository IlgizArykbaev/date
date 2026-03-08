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
    src: "/photo_2025-02-28_22-29-59.jpg",
    caption: "28.02.25 ✦",
    compliment: "рядом с тобой - дома",
    rotation: -6,
    delay: 0.6,
    floatDuration: 4.2,
    floatDelay: 0,
  },
  {
    src: "/photo_2025-10-01_20-50-45.jpg",
    caption: "01.10.25 ✦",
    compliment: "твои глаз - эта самое прекрасное что я видел",
    rotation: 4,
    delay: 1.0,
    floatDuration: 3.8,
    floatDelay: 0.5,
  },
  {
    src: "/photo_2025-11-23_22-52-12.jpg",
    caption: "23.11.25 ✦",
    compliment: "самая милая и красивая в мире!!!",
    rotation: -3,
    delay: 1.4,
    floatDuration: 4.5,
    floatDelay: 1.0,
  },
  {
    src: "/photo_2026-01-19_13-45-26.jpg",
    caption: "19.01.26 ✦",
    compliment: "у тебя самая красивая улыбка в мире!!!",
    rotation: 7,
    delay: 1.8,
    floatDuration: 3.6,
    floatDelay: 0.3,
  },
  {
    src: "/photo_2026-02-14_20-40-01.jpg",
    caption: "14.02.26 ♥",
    compliment: "все цветы мира - это твои!",
    rotation: -5,
    delay: 2.2,
    floatDuration: 4.8,
    floatDelay: 0.8,
  },
  {
    src: "/photo_2026-03-08_02-50-14.jpg",
    caption: "08.03.26 ✿",
    compliment: "самая красивая - сегодня, сейчас, и всегда",
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

      <div className="relative z-10 flex flex-col items-center w-full px-4 py-16 md:py-20">
        {/* Дата */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(13px, 1.1vw, 17px)",
            letterSpacing: "0.4em",
            color: "rgba(201, 168, 76, 0.7)",
            textTransform: "uppercase",
            marginBottom: "12px",
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
            fontSize: "clamp(52px, 12vw, 180px)",
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: "12px",
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
            fontSize: "clamp(16px, 3vw, 42px)",
            fontStyle: "italic",
            color: "rgba(245, 240, 232, 0.65)",
            letterSpacing: "0.06em",
            marginBottom: "56px",
          }}
        >
          с международным женским днём
        </motion.p>

        {/* Поляроиды */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-14 mx-auto"
          style={{ maxWidth: "860px", width: "100%" }}
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
          style={{ maxWidth: "800px" }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(15px, 2.5vw, 32px)",
              fontStyle: "italic",
              color: "rgba(245, 240, 232, 0.8)",
              lineHeight: 1.8,
              letterSpacing: "0.03em",
              marginBottom: "24px",
            }}
          >
            Ты - моё любимое воспоминание, которое я хочу создавать каждый день.
            Спасибо за твою теплоту, свет и бесконечную красоту.
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(13px, 2vw, 28px)",
              color: "rgba(201, 168, 76, 0.75)",
              letterSpacing: "0.1em",
            }}
          >
            ✦ &nbsp; С любовью, твой любимый &nbsp; ✦
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
