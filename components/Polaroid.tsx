"use client";

import { motion } from "framer-motion";

interface PolaroidProps {
  src?: string;
  caption: string;
  rotation: number;
  delay: number;
  floatDuration: number;
  floatDelay: number;
  zIndex?: number;
}

export default function Polaroid({
  src,
  caption,
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
      className="polaroid cursor-pointer"
      style={{
        zIndex,
        "--rot": `${rotation}deg`,
        "--float-dur": `${floatDuration}s`,
        "--float-delay": `${floatDelay}s`,
      } as React.CSSProperties}
      whileHover={{ scale: 1.08, rotate: 0, zIndex: 50 }}
    >
      <div
        className="rounded-sm shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #1e1e30, #141428)",
          border: "1px solid rgba(201, 168, 76, 0.25)",
          padding: "10px 10px 40px 10px",
          width: "160px",
        }}
      >
        <div
          className="w-full overflow-hidden rounded-sm"
          style={{ height: "140px", position: "relative" }}
        >
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={caption}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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
              <span style={{ fontSize: "36px", opacity: 0.6 }}>🌸</span>
            </div>
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3))",
            }}
          />
        </div>
        <div
          style={{
            marginTop: "10px",
            textAlign: "center",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "11px",
            color: "rgba(201, 168, 76, 0.85)",
            letterSpacing: "0.08em",
            fontStyle: "italic",
            lineHeight: 1.3,
          }}
        >
          {caption}
        </div>
      </div>
    </motion.div>
  );
}
