"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/data/portfolio";

function CounterItem({
  value,
  label,
  isInView,
  delay,
}: {
  value: string;
  label: string;
  isInView: boolean;
  delay: number;
}) {
  const [displayValue, setDisplayValue] = useState<string>(
    value.includes("+") || value.includes("%") || !isNaN(Number(value)) ? "0" : value
  );

  useEffect(() => {
    if (!isInView) return;

    // Check if value is numeric or has suffixes
    if (value === "300+") {
      let start = 0;
      const end = 300;
      const duration = 1500;
      const stepTime = 15;
      const increment = Math.ceil(end / (duration / stepTime));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue("300+");
          clearInterval(timer);
        } else {
          setDisplayValue(`${start}+`);
        }
      }, stepTime);

      return () => clearInterval(timer);
    } else if (value === "8.81") {
      let current = 0;
      const timer = setInterval(() => {
        current += 0.15;
        if (current >= 8.81) {
          setDisplayValue("8.81");
          clearInterval(timer);
        } else {
          setDisplayValue(current.toFixed(2));
        }
      }, 25);
      return () => clearInterval(timer);
    } else if (value === "86%") {
      let start = 0;
      const end = 86;
      const timer = setInterval(() => {
        start += 2;
        if (start >= end) {
          setDisplayValue("86%");
          clearInterval(timer);
        } else {
          setDisplayValue(`${start}%`);
        }
      }, 25);
      return () => clearInterval(timer);
    } else {
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="bg-bg-elevated/50 border border-border/80 hover:border-border-light p-8 md:p-10 rounded-sm flex flex-col justify-between transition-all duration-300 group"
    >
      <div>
        <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors duration-300">
          {displayValue}
        </div>
        <p className="mt-4 text-text-secondary text-sm md:text-base leading-relaxed font-body">
          {label}
        </p>
      </div>
      <div className="w-12 h-0.5 bg-accent/40 group-hover:bg-accent group-hover:w-20 transition-all duration-300 mt-8" />
    </motion.div>
  );
}

export default function Achievements() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="milestones"
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
          06 / MILESTONES
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-heading font-semibold text-text-primary tracking-tight"
        >
          Key numbers & achievements.
        </motion.h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <CounterItem
            key={index}
            value={item.value}
            label={item.label}
            isInView={isInView}
            delay={0.15 * index}
          />
        ))}
      </div>
    </section>
  );
}

