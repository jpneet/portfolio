
"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { aboutContent } from "@/data/portfolio";

const personalDetails = [
  { label: "Location", value: "Delhi, India" },
  { label: "Degree", value: "B.Tech Computer Science" },
  { label: "Institution", value: "GTBIT, GGSIPU" },
  { label: "Graduation", value: "2027" },
  { label: "CGPA", value: "8.81" },
  { label: "LeetCode", value: "300+ Problems Solved" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const imageInView = useInView(imageRef, {
    once: true,
    margin: "-80px",
  });

  const textInView = useInView(textRef, {
    once: true,
    margin: "-80px",
  });

  const detailsInView = useInView(detailsRef, {
    once: true,
    margin: "-60px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#141414] px-6 py-28 md:px-12 md:py-36 lg:px-20 lg:py-40"
    >
      {/* Ambient Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 10%, transparent 75%)",
        }}
      />

      {/* Ambient Green Glow */}
      <div
        className="pointer-events-none absolute -left-64 top-1/4 -z-10 h-[550px] w-[550px] rounded-full blur-[140px]"
        style={{ background: "rgba(55,220,157,0.07)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 border-t border-white/15 pt-5"
        >
          <div className="flex items-center justify-between">
            <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.35em] text-text-secondary">
              01 / ABOUT
            </span>

            <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-text-muted">
              GET TO KNOW ME
            </span>
          </div>
        </motion.div>

        {/* Oversized Parallax Heading */}
        <motion.div
          style={{ y: titleY }}
          className="relative z-20 mb-24 md:mb-32"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-5 font-heading text-xs uppercase tracking-[0.3em] text-accent"
          >
            THE PERSON BEHIND THE CODE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-6xl break-words font-heading text-5xl font-black uppercase leading-[0.9] tracking-[-0.065em] text-text-primary sm:text-7xl md:text-8xl lg:text-[clamp(6rem,11vw,10rem)]"
          >
            Beyond
            <br />
            <span className="text-accent">the code</span>
          </motion.h2>
        </motion.div>

        {/* Asymmetrical Image + Content */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">

          {/* LEFT: Portrait */}
          <div
            ref={imageRef}
            className="relative min-w-0 lg:col-span-7"
          >


            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden bg-[#1b1b1b] lg:mx-0"
            >
              <Image
                src="/about.jpeg"
                alt="Japneet Singh"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 z-10">
                <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-white/80">
                  DELHI, INDIA
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Personal Story */}
          <div className="flex min-w-0 flex-col justify-center lg:col-span-5">

            <div ref={textRef} className="mb-16 space-y-7">
              <motion.span
                initial="hidden"
                animate={textInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={0}
                className="block font-heading text-[10px] uppercase tracking-[0.3em] text-accent"
              >
                A LITTLE ABOUT ME
              </motion.span>

              {aboutContent.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  custom={i + 1}
                  initial="hidden"
                  animate={textInView ? "visible" : "hidden"}
                  variants={fadeUp}
                  className="text-sm leading-[2.1] text-text-secondary md:text-[15px]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Personal Details */}
            <div ref={detailsRef}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={detailsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-7 flex items-center justify-between border-b border-white/15 pb-4"
              >
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-text-primary">
                  QUICK FACTS
                </span>

              </motion.div>

              <div className="grid grid-cols-2 gap-x-6">
                {personalDetails.map((detail, i) => (
                  <motion.div
                    key={detail.label}
                    custom={i}
                    initial="hidden"
                    animate={detailsInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="border-b border-white/10 py-5"
                  >
                    <span className="mb-2 block font-heading text-[9px] uppercase tracking-[0.2em] text-text-muted md:text-[10px]">
                      {detail.label}
                    </span>

                    <span className="block break-words text-xs font-medium leading-relaxed text-text-primary md:text-sm">
                      {detail.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-28 h-px w-full origin-left bg-white/15 md:mt-40"
        />

      </div>
    </section>
  );
}
