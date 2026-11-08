"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/portfolio";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection using IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.href.replace("#", ""))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      x: "0%",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const linkVariants = {
    closed: { x: 80, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1 + i * 0.08,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-bg/80 border-b border-border backdrop-blur-xl"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-12">
          {/* Left: Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="font-heading text-sm font-bold tracking-wider text-text-primary"
          >
            {personalInfo.name.toUpperCase()}<sup className="ml-0.5 text-[8px] text-accent">®</sup>
          </button>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className={`group relative font-body text-xs tracking-widest transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label.toUpperCase()}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "w-full bg-accent"
                      : "w-0 bg-text-primary group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: Status (Desktop) */}
          <div className="hidden items-center gap-2 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-body text-[10px] tracking-widest text-text-secondary">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-px w-6 bg-text-primary"
              animate={
                isMobileMenuOpen
                  ? { rotate: 45, y: 4 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-px w-6 bg-text-primary"
              animate={
                isMobileMenuOpen
                  ? { rotate: -45, y: -3.5 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg px-8"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => handleNavClick(link.href)}
                  className="text-left font-heading text-4xl font-bold text-text-primary sm:text-5xl"
                >
                  <span className="mr-3 font-body text-sm text-accent">
                    0{i + 1}
                  </span>
                  {link.label}
                </motion.button>
              ))}

              {/* Download Resume */}
              <motion.a
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                href="/resume.pdf"
                download
                className="mt-4 inline-flex items-center gap-2 font-body text-sm tracking-widest text-accent"
              >
                DOWNLOAD RESUME
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m0 0l-6-6m6 6l6-6"
                  />
                </svg>
              </motion.a>

              {/* Status */}
              <motion.div
                custom={navLinks.length + 1}
                variants={linkVariants}
                initial="closed"
                animate="open"
                className="mt-8 flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-body text-[10px] tracking-widest text-text-secondary">
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
