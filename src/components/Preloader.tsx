"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const name = "JAPNEET SINGH";
  const letters = name.split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete?.();
      }, 800);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Centered Name */}
          <div className="flex overflow-hidden">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                className="font-heading text-4xl font-bold tracking-wider text-text-primary sm:text-5xl md:text-7xl"
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + i * 0.04,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            className="mt-4 font-body text-xs tracking-[0.3em] text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            SOFTWARE DEVELOPER
          </motion.p>

          {/* Progress Percentage */}
          <motion.span
            className="absolute bottom-16 right-8 font-heading text-7xl font-bold tabular-nums text-text-primary/10 sm:text-8xl md:bottom-12 md:right-12 md:text-9xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {String(progress).padStart(3, "0")}
          </motion.span>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-border">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>

          {/* Corner Details */}
          <motion.span
            className="absolute bottom-8 left-8 font-body text-[10px] tracking-widest text-text-secondary md:bottom-12 md:left-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            PORTFOLIO &copy;
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
