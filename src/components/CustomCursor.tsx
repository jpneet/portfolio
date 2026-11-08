"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Spring config for the outer circle (delayed, smooth follow)
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const outerX = useSpring(0, springConfig);
  const outerY = useSpring(0, springConfig);

  // Tighter spring for inner dot
  const innerSpringConfig = { damping: 35, stiffness: 400, mass: 0.2 };
  const innerX = useSpring(0, innerSpringConfig);
  const innerY = useSpring(0, innerSpringConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      outerX.set(e.clientX - 20);
      outerY.set(e.clientY - 20);
      innerX.set(e.clientX - 4);
      innerY.set(e.clientY - 4);

      if (!isVisible) setIsVisible(true);
    },
    [outerX, outerY, innerX, innerY, isVisible]
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", () => setIsVisible(false));
      document.removeEventListener("mouseenter", () => setIsVisible(true));
    };
  }, [isMobile, handleMouseMove]);

  // Listen for hover on interactive elements
  useEffect(() => {
    if (isMobile) return;

    const interactiveSelectors =
      "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";

    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    const elements = document.querySelectorAll(interactiveSelectors);
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll(interactiveSelectors);
      newElements.forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
      observer.disconnect();
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer circle */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border border-accent"
        style={{
          x: outerX,
          y: outerY,
          mixBlendMode: "difference",
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.3 }, opacity: { duration: 0.2 } }}
      />

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-accent"
        style={{
          x: innerX,
          y: innerY,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.2 } }}
      />
    </>
  );
};

export default CustomCursor;
