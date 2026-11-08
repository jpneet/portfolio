"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/data/portfolio";

export default function Education() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={containerRef}
      className="py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="border-t border-border pt-6 mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-text-secondary text-xs tracking-[0.3em] uppercase font-heading block mb-4"
        >
          05 / EDUCATION
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-heading font-semibold text-text-primary tracking-tight"
        >
          Academic foundation.
        </motion.h2>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 md:pl-10 border-l border-border space-y-16">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 * index }}
            className="relative group"
          >
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent bg-bg group-hover:bg-accent transition-colors duration-300" />

            {/* Content card */}
            <div className="bg-bg-elevated/40 border border-border/60 hover:border-border-light p-6 md:p-8 rounded-sm transition-all duration-300">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                <span className="text-accent text-xs md:text-sm font-heading font-semibold tracking-wider uppercase">
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-heading font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item.score}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-heading font-semibold text-text-primary mb-2">
                {item.degree}
              </h3>

              <p className="text-text-secondary text-sm md:text-base font-body">
                {item.institution}
              </p>

              {item.university && (
                <p className="text-text-muted text-xs md:text-sm font-body mt-1">
                  {item.university}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

