"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface PhotoModalProps {
  src?: string;
  caption: string;
  compliment: string;
  onClose: () => void;
}

export default function PhotoModal({ src, caption, compliment, onClose }: PhotoModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ background: "rgba(5, 5, 15, 0.92)", backdropFilter: "blur(16px)" }}
      >
        {/* Карточка */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.6, opacity: 0, y: 40 }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex flex-col items-center"
          style={{ maxWidth: "min(90vw, 520px)", width: "100%" }}
        >
          {/* Кнопка закрыть */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 flex items-center justify-center rounded-full w-9 h-9 transition-all"
            style={{
              background: "rgba(20, 20, 40, 0.9)",
              border: "1px solid rgba(201, 168, 76, 0.4)",
              color: "#c9a84c",
              fontSize: "18px",
              lineHeight: 1,
            }}
          >
            ×
          </button>

          {/* Поляроид-рамка */}
          <div
            className="w-full rounded-sm shadow-2xl"
            style={{
              background: "linear-gradient(145deg, #1e1e30, #141428)",
              border: "1px solid rgba(201, 168, 76, 0.3)",
              padding: "14px 14px 28px 14px",
            }}
          >
            {/* Фото */}
            <div className="w-full overflow-hidden rounded-sm" style={{ position: "relative" }}>
              {src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={src}
                  alt={caption}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "65vh",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "300px",
                    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "60px",
                  }}
                >
                  🌸
                </div>
              )}
            </div>

            {/* Дата */}
            <div
              style={{
                marginTop: "16px",
                textAlign: "center",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(15px, 2.5vw, 20px)",
                fontWeight: 600,
                color: "rgba(201, 168, 76, 1)",
                letterSpacing: "0.12em",
                fontStyle: "italic",
              }}
            >
              {caption}
            </div>

            {/* Комплимент */}
            <div
              style={{
                marginTop: "8px",
                textAlign: "center",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(13px, 2vw, 17px)",
                fontWeight: 400,
                fontStyle: "italic",
                color: "rgba(245, 240, 232, 0.8)",
                letterSpacing: "0.04em",
                lineHeight: 1.6,
              }}
            >
              {compliment}
            </div>
          </div>

          {/* Подсказка */}
          <p
            style={{
              marginTop: "16px",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "12px",
              color: "rgba(201, 168, 76, 0.4)",
              letterSpacing: "0.1em",
            }}
          >
            нажми в любое место чтобы закрыть
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
