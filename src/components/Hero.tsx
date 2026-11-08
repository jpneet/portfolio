"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.4]);

  // Animation variants
  const fadeUp = (delay: number = 0) => ({
    initial: { y: 60, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: 2.9 + delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  });

  const nameReveal = (delay: number = 0) => ({
    initial: { y: "110%" },
    animate: {
      y: "0%",
      transition: {
        duration: 1,
        delay: 3.0 + delay,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  });

  const imageReveal = {
    initial: { clipPath: "inset(100% 0 0 0)" },
    animate: {
      clipPath: "inset(0% 0 0 0)",
      transition: {
        duration: 1.2,
        delay: 3.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-bg"
    >
      <div className="mx-auto w-full max-w-7xl px-6 pb-12 pt-24 md:px-12 md:pt-32 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column - Text Content */}
          <div ref={textRef} className="relative z-10 order-2 lg:order-1">
            {/* Label */}
            <motion.p
              {...fadeUp(0)}
              className="mb-6 font-body text-xs tracking-[0.3em] text-text-secondary md:mb-8"
            >
              SOFTWARE DEVELOPER / AI ENTHUSIAST / INDIA
            </motion.p>

            {/* Name - Oversized Typography */}
            <div className="mb-6 md:mb-8">
              <div className="overflow-hidden">
                <motion.h1
                  {...nameReveal(0)}
                  className="hero-name font-heading text-text-primary"
                  style={{
                    fontSize: "clamp(3.5rem, 10vw, 9rem)",
                    lineHeight: 0.9,
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                  }}
                >
                  JAPNEET
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  {...nameReveal(0.1)}
                  className="hero-name font-heading text-text-primary"
                  style={{
                    fontSize: "clamp(3.5rem, 10vw, 9rem)",
                    lineHeight: 0.9,
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                  }}
                >
                  SINGH<span className="text-accent">.</span>
                </motion.h1>
              </div>
            </div>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.3)}
              className="mb-6 max-w-md font-serif text-xl italic text-text-secondary md:text-2xl"
            >
              Building digital experiences that solve real problems.
            </motion.p>

            {/* Description */}
            <motion.p
              {...fadeUp(0.4)}
              className="mb-8 max-w-lg font-body text-base leading-relaxed text-text-secondary"
            >
              {personalInfo.description}
            </motion.p>

            {/* Info Row */}
            <motion.div
              {...fadeUp(0.5)}
              className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-[10px] tracking-widest text-text-secondary md:text-xs"
            >
              <span>DELHI, INDIA</span>
              <span className="hidden text-border sm:inline">|</span>
              <span>B.TECH COMPUTER SCIENCE | 2023–2027</span>
              <span className="hidden text-border sm:inline">|</span>
              <span>
                8.81 <span className="text-accent">CGPA</span>
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.6)}
              className="mb-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative inline-flex items-center gap-2 border border-accent px-6 py-3 font-body text-xs font-medium tracking-widest text-accent transition-all duration-300 hover:bg-accent hover:text-bg"
              >
                EXPLORE MY WORK
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 border border-border px-6 py-3 font-body text-xs font-medium tracking-widest text-text-secondary transition-all duration-300 hover:border-text-secondary hover:text-text-primary"
              >
                DOWNLOAD RESUME
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m0 0l-6-6m6 6l6-6"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              {...fadeUp(0.7)}
              className="flex items-center gap-6"
            >
              {[
                {
                  label: "GITHUB",
                  href: personalInfo.socialLinks.github,
                },
                {
                  label: "LINKEDIN",
                  href: personalInfo.socialLinks.linkedin,
                },
                {
                  label: "EMAIL",
                  href: `mailto:${personalInfo.socialLinks.email}`,
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "EMAIL" ? "_blank" : undefined}
                  rel={
                    social.label !== "EMAIL"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group inline-flex items-center gap-1.5 font-body text-[10px] tracking-widest text-text-secondary transition-colors duration-300 hover:text-accent"
                >
                  {social.label}
                  <svg
                    className="h-3 w-3 -rotate-45 transition-transform duration-300 group-hover:rotate-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div
            ref={imageRef}
            className="relative order-1 lg:order-2"
            style={{ position: "relative" }}
            {...imageReveal}
          >
            <div
              className="relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden lg:max-w-none"
              style={{ position: "relative", aspectRatio: "3/4" }}
            >
              <motion.div
                className="relative h-full w-full"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  y: imageY,
                  scale: imageScale,
                }}
              >
                <Image
                  src="/hero.jpeg"
                  alt={personalInfo.name}
                  fill
                  preload
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Overlay on scroll */}
                <motion.div
                  className="absolute inset-0 bg-bg"
                  style={{ opacity: overlayOpacity }}
                />
              </motion.div>

              {/* Image border accent */}
              <div className="absolute -bottom-2 -right-2 h-full w-full border border-accent/20 -z-10 hidden lg:block" />
            </div>

            {/* Side text on image */}
            <motion.div
              {...fadeUp(0.8)}
              className="absolute -left-4 bottom-8 hidden origin-bottom-left -rotate-90 lg:block"
            >
              <span className="font-body text-[10px] tracking-[0.4em] text-text-secondary">
                PORTFOLIO — 2024
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
      >
        <span
          className="font-body text-[9px] tracking-[0.3em] text-text-secondary"
          style={{
            writingMode: "vertical-lr",
          }}
        >
          SCROLL
        </span>
        <div className="relative h-16 w-px bg-text-secondary/30">
          <motion.div
            className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-accent"
            animate={{ y: [0, 52, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default Hero;
