"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/data/portfolio";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isContactVisible, setIsContactVisible] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateSections = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 280);
        let currentSection = "home";

        navLinks.forEach((link) => {
          const section = document.getElementById(link.href.slice(1));
          if (section && section.getBoundingClientRect().top + window.scrollY <= marker) {
            currentSection = section.id;
          }
        });
        setActiveSection(currentSection);

        const contact = document.getElementById("contact");
        const contactBounds = contact?.getBoundingClientRect();
        const contactIsVisible = Boolean(
          contactBounds &&
            contactBounds.top < window.innerHeight &&
            contactBounds.bottom > 0
        );
        setIsContactVisible(contactIsVisible);
        if (contactIsVisible) {
          setIsMobileMenuOpen((isOpen) => (isOpen ? false : isOpen));
        }
      });
    };

    updateSections();
    window.addEventListener("scroll", updateSections, { passive: true });
    window.addEventListener("resize", updateSections);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateSections);
      window.removeEventListener("resize", updateSections);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      } else if (event.key === "Tab") {
        const links = mobileMenuRef.current?.querySelectorAll<HTMLAnchorElement>("a");
        const firstLink = links?.[0];
        const lastLink = links?.[links.length - 1];

        if (!firstLink || !lastLink) {
          event.preventDefault();
        } else if (event.shiftKey && document.activeElement === firstLink) {
          event.preventDefault();
          lastLink.focus();
        } else if (!event.shiftKey && document.activeElement === lastLink) {
          event.preventDefault();
          firstLink.focus();
        }
      }
    };

    mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
      <AnimatePresence>
        {!isContactVisible && (
          <motion.nav
            key="main-navbar"
            aria-label="Primary navigation"
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
              isScrolled
                ? "bg-bg/80 border-b border-border backdrop-blur-xl"
                : "bg-transparent"
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-12">
              <a
                href="#home"
                aria-label={`${personalInfo.name} - Home`}
                className="font-heading text-sm font-bold tracking-wider text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
              >
                {personalInfo.name.toUpperCase()}
                <sup aria-hidden="true" className="ml-0.5 text-[8px] text-accent">®</sup>
              </a>

              <div className="hidden items-center gap-8 lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={
                      activeSection === link.href.slice(1) ? "location" : undefined
                    }
                    className={`group relative font-body text-xs tracking-widest transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg ${
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
                  </a>
                ))}
              </div>

              <div className="hidden items-center gap-2 lg:flex">
                <span aria-hidden="true" className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>

                <span className="font-body text-[10px] tracking-widest text-text-secondary">
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>

              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg lg:hidden"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls={isMobileMenuOpen ? "mobile-navigation" : undefined}
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
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && !isContactVisible && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg px-8"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  href={link.href}
                  onClick={closeMobileMenu}
                  aria-current={
                    activeSection === link.href.slice(1) ? "location" : undefined
                  }
                  className="text-left font-heading text-4xl font-bold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg sm:text-5xl"
                >
                  <span className="mr-3 font-body text-sm text-accent">
                    0{i + 1}
                  </span>
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                href="/resume.pdf"
                download="resume.pdf"
                onClick={closeMobileMenu}
                className="mt-4 inline-flex items-center gap-2 font-body text-sm tracking-widest text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
              >
                DOWNLOAD RESUME

                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
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

              <motion.div
                custom={navLinks.length + 1}
                variants={linkVariants}
                initial="closed"
                animate="open"
                className="mt-8 flex items-center gap-2"
              >
                <span aria-hidden="true" className="relative flex h-2 w-2">
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