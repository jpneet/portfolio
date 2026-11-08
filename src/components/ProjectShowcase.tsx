"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";

export default function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const featuredProjects = projects.slice(0, 5);
  const activeProject =
    hoveredIndex !== null ? featuredProjects[hoveredIndex] : null;

  return (
    <section
      id="projects"
      className="spacing-section bg-bg relative overflow-hidden"
    >
      <div className="container relative z-10">

        {/* Section Heading */}
        <h2 className="display-lg uppercase font-black tracking-tighter mb-16 md:mb-24 text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT: Project List */}
          <div className="border-t border-white/10">
            {featuredProjects.map((project, idx) => (
              <div
                key={project.slug}
                className="relative group border-b border-white/10 py-8 md:py-10 cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredIndex(idx)}
                onClick={() =>
                  setHoveredIndex(hoveredIndex === idx ? null : idx)
                }
                role="button"
                tabIndex={0}
                aria-expanded={hoveredIndex === idx}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setHoveredIndex(
                      hoveredIndex === idx ? null : idx
                    );
                  }
                }}
              >
                {/* Hover Background */}
                <div
                  className={`absolute inset-0 bg-white/[0.02] origin-bottom transition-transform duration-500 ${
                    hoveredIndex === idx
                      ? "scale-y-100"
                      : "scale-y-0"
                  }`}
                />

                {/* Project Information */}
                <div className="relative z-10 flex items-center justify-between px-3">
                  <div className="flex flex-col min-w-0">
                    <h3
                      className={`display-md transition-colors duration-300 mb-3 ${
                        hoveredIndex === idx
                          ? "text-white"
                          : "text-text-muted group-hover:text-white"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-text-muted">
                      <span className="label tracking-[0.15em]">
                        {project.category}
                      </span>

                      <span className="w-1 h-1 bg-current rounded-full shrink-0" />

                      <span className="label tracking-[0.15em]">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{
                      rotate: hoveredIndex === idx ? 0 : -45,
                    }}
                    transition={{ duration: 0.4 }}
                    className={`shrink-0 ${
                      hoveredIndex === idx
                        ? "text-white"
                        : "text-text-muted"
                    }`}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Mobile Project Details */}
                <AnimatePresence initial={false}>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="lg:hidden overflow-hidden relative z-10 px-3"
                    >
                      <div className="pt-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-[16/10] object-cover rounded-sm"
                          loading="lazy"
                        />

                        <p className="text-text-secondary text-sm leading-relaxed mt-6">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-7">
                          <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                            Technologies
                          </span>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-2 border border-white/10 text-text-secondary text-xs rounded-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mt-7">
                          <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                            Key Features
                          </span>

                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 mt-4">
                            {project.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-text-secondary text-xs leading-relaxed"
                              >
                                <span className="text-accent mt-1">↗</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Project Links */}
                        <div className="flex flex-wrap gap-5 mt-8 pb-5">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs uppercase tracking-widest text-white border-b border-white/40 pb-1 hover:border-accent transition-colors"
                            >
                              GitHub ↗
                            </a>
                          )}

                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs uppercase tracking-widest text-white border-b border-white/40 pb-1 hover:border-accent transition-colors"
                            >
                              Live Demo ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* RIGHT: Desktop Project Preview */}
          <div className="hidden lg:block sticky top-24 self-start">
            <AnimatePresence mode="wait">
              {activeProject && (
                <motion.div
                  key={activeProject.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45 }}
                  className="w-full"
                >
                  {/* Project Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm bg-white/5">
                    <motion.img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.05 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>

                  {/* Project Description */}
                  <div className="mt-8">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {activeProject.title}
                      </h3>

                      <span className="text-xs tracking-widest text-text-muted shrink-0">
                        {String(activeProject.id).padStart(2, "0")} / 04
                      </span>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                      Technologies Used
                    </span>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {activeProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 border border-white/10 text-text-secondary text-xs rounded-sm hover:border-accent/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mt-8">
                    <span className="text-xs uppercase tracking-[0.2em] text-text-muted">
                      Key Features
                    </span>

                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mt-4">
                      {activeProject.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-text-secondary text-xs leading-relaxed"
                        >
                          <span className="text-accent mt-0.5">↗</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-7 mt-8 pt-6 border-t border-white/10">
                    {activeProject.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-[0.15em] text-white hover:text-accent transition-colors"
                      >
                        GitHub ↗
                      </a>
                    )}

                    {activeProject.liveDemo && (
                      <a
                        href={activeProject.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-[0.15em] text-white hover:text-accent transition-colors"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}