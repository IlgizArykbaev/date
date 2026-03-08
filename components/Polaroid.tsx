"use client";

import { motion } from "framer-motion";

interface PolaroidProps {
  src?: string;
  caption: string;
  compliment: string;
  rotation: number;
  delay: number;
  floatDuration: number;
  floatDelay: number;
  zIndex?: number;
}

export default function Polaroid({
  src,
  caption,
  compliment,
  rotation,
  delay,
  floatDuration,
  floatDelay,
  zIndex = 10,
}: PolaroidProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.7, rotate: rotation - 5 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: rotation }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className="polaroid cursor-pointer w-full"
      style={{
        zIndex,
        "--rot": `${rotation}deg`,
        "--float-dur": `${floatDuration}s`,
        "--float-delay": `${floatDelay}s`,
      } as React.CSSProperties}
      whileHover={{ scale: 1.08, rotate: 0, zIndex: 50 }}
    >
      {/* карточка — 160px на мобиле, 220px на md, 260px на lg */}
      <div
        className="rounded-sm shadow-2xl polaroid-card"
        style={{
          background: "linear-gradient(145deg, #1e1e30, #141428)",
          border: "1px solid rgba(201, 168, 76, 0.25)",
        }}
      >
        {/* фото */}
        <div className="w-full overflow-hidden rounded-sm polaroid-photo" style={{ position: "relative" }}>
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={caption}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span className="polaroid-emoji">🌸</span>
            </div>
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3))",
            }}
          />
        </div>

        {/* Дата */}
        <div className="polaroid-caption">
          {caption}
        </div>

        {/* Комплимент */}
        <div className="polaroid-compliment">
          {compliment}
        </div>
      </div>
    </motion.div>
  );
}
