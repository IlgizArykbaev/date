"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.4;
    const onCanPlay = () => setLoaded(true);
    const onEnded = () => setPlaying(false);
    audio.addEventListener("canplaythrough", onCanPlay);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("canplaythrough", onCanPlay);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto" src="/Kaspijjskijj_gruz_-_Lyubov_HD_1080_49752177.mp3" />

      <motion.button
        onClick={toggle}
        title={playing ? "Выключить музыку" : "Включить музыку"}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-2"
        style={{
          background: "rgba(20, 20, 40, 0.85)",
          border: "1px solid rgba(201, 168, 76, 0.4)",
          color: "#c9a84c",
          backdropFilter: "blur(10px)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "13px",
          letterSpacing: "0.05em",
          cursor: "pointer",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5 }}
      >
        {playing ? (
          <>
            <MusicWave />
            <span>Каспийский Груз</span>
          </>
        ) : (
          <>
            <span style={{ fontSize: "16px" }}>♫</span>
            <span>включить музыку</span>
          </>
        )}
      </motion.button>
    </>
  );
}

function MusicWave() {
  return (
    <div className="flex items-end gap-px" style={{ height: "14px" }}>
      {[1, 2, 3, 2, 1].map((h, i) => (
        <motion.div
          key={i}
          style={{ width: "3px", background: "#c9a84c", borderRadius: "2px" }}
          animate={{ height: [`${h * 3}px`, `${h * 9}px`, `${h * 3}px`] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
