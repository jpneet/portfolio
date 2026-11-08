"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { responsibilities } from "@/data/portfolio";

export default function Responsibilities() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="responsibilities"
      ref={containerRef}
      className="py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
    >
      <div className="border-t border-border pt-6 mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-text-secondary text-xs tracking-[0.3em] uppercase font-heading block mb-2"
        >
          LEADERSHIP
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl md:text-4xl font-heading font-semibold text-text-primary tracking-tight"
        >
          Positions of Responsibility
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {responsibilities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 * index }}
            className="p-8 bg-bg-elevated/40 border border-border/80 hover:border-border-light rounded-sm transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-accent font-heading font-semibold">
                {item.period}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-text-primary mb-2">
              {item.role}
            </h3>
            <p className="text-text-secondary text-sm font-body">
              {item.organization}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

