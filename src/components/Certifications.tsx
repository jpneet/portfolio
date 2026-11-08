"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
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
          CREDENTIALS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl md:text-4xl font-heading font-semibold text-text-primary tracking-tight"
        >
          Certifications & Specialized Training
        </motion.h2>
      </div>

      <div className="divide-y divide-border">
        {certifications.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-2 group hover:bg-bg-elevated/30 px-4 -mx-4 rounded transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-accent/60 group-hover:bg-accent group-hover:scale-125 transition-all" />
              <h3 className="text-base md:text-lg font-heading font-medium text-text-primary group-hover:text-accent transition-colors">
                {item.title}
              </h3>
            </div>
            <span className="text-xs md:text-sm text-text-secondary font-heading pl-6 md:pl-0">
              {item.issuer}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

