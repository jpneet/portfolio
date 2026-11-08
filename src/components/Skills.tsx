"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
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
          04 / TOOLKIT
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-heading font-semibold text-text-primary tracking-tight"
        >
          My tools of the trade.
        </motion.h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {categories.map(([category, items], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * catIndex }}
            className="border-t border-border pt-6"
          >
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent font-heading mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag px-3.5 py-2 text-sm text-text-primary bg-bg-card/40 rounded-sm cursor-default transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

