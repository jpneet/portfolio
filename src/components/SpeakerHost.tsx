"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { speakerContent } from "@/data/portfolio";

export default function SpeakerHost() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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
    margin: "-60px",
  });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-360 px-6 py-32 md:px-12 lg:px-20 lg:py-40"
    >
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16 border-t border-border pt-4"
      >
        <span className="font-heading text-xs uppercase tracking-[0.3em] text-text-secondary">
          02 / BEYOND THE CODE
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="section-title mb-20 max-w-5xl font-heading text-text-primary"
      >
        {speakerContent.headline}
      </motion.h2>

      {/* Cinematic Image */}
      <div
        ref={imageRef}
        className="relative isolate mb-16 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={imageInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1],
          }}
          className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[21/9]"
        >
          {/* Image Container */}
<div className="absolute inset-0 overflow-hidden">
  <motion.div
    style={{ y: imageY }}
    className="absolute inset-[-10%]"
  >
    <div className="relative h-full w-full">
      <Image
        src="/speaker.jpeg"
        alt="Japneet Singh as Speaker and Host"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  </motion.div>
</div>
          {/* Caption Overlay */}
          <div className="absolute bottom-0 left-0 z-10">
            <span className="inline-block bg-bg/80 px-4 py-2 text-xs uppercase tracking-wider text-text-secondary backdrop-blur-sm">
              {speakerContent.caption}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Supporting Text */}
      <div ref={textRef}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="max-w-3xl font-serif text-xl italic leading-relaxed text-text-secondary md:text-2xl"
        >
          {speakerContent.description}
        </motion.p>
      </div>
    </section>
  );
}