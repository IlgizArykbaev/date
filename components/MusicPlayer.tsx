"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VIDEO_ID = "UvL-yYegtfo";

declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function MusicPlayer() {
  const playerRef = useRef<YT.Player | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initPlayer = () => {
      if (!containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: VIDEO_ID,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: () => setReady(true),
          onStateChange: (e: YT.OnStateChangeEvent) => {
            setPlaying(e.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
      if (!document.querySelector("#yt-api-script")) {
        const script = document.createElement("script");
        script.id = "yt-api-script";
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);
      }
    }

    return () => {
      playerRef.current?.destroy();
    };
  }, []);

  const toggle = () => {
    if (!playerRef.current || !ready) return;
    if (playing) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.setVolume(40);
      playerRef.current.playVideo();
    }
  };

  return (
    <>
      {/* Скрытый YouTube плеер */}
      <div
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div ref={containerRef} />
      </div>

      {/* Кнопка */}
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
          cursor: ready ? "pointer" : "default",
          opacity: ready ? 1 : 0.5,
        }}
        whileHover={{ scale: ready ? 1.05 : 1 }}
        whileTap={{ scale: ready ? 0.95 : 1 }}
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
            <span>{ready ? "включить музыку" : "загрузка..."}</span>
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
          style={{
            width: "3px",
            background: "#c9a84c",
            borderRadius: "2px",
          }}
          animate={{ height: [`${h * 3}px`, `${h * 9}px`, `${h * 3}px`] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
