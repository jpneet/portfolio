
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xnpdqdqr",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus(
          "Message sent successfully! I'll get back to you soon."
        );
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus(
        "Unable to send your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative isolate z-0 mx-auto max-w-[1440px] px-6 py-28 md:px-12 lg:px-20 lg:py-36"
    >
      {/* Background Grid: stays behind content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      />

      {/* Top Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1 }}
        className="mb-24 h-px w-full origin-left bg-white/[0.12]"
      />

      <div className="relative z-0 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">

        {/* LEFT COLUMN */}
        <div className="relative z-0 lg:col-span-6">

          {/* Section Label */}
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0}
            className="mb-9 font-heading text-[10px] font-semibold uppercase tracking-[0.35em] text-text-muted"
          >
            LET'S START A CONVERSATION
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
            className="mb-9 max-w-xl font-heading text-5xl font-normal leading-[1.08] tracking-tight text-text-primary sm:text-6xl lg:text-[clamp(3.5rem,5vw,5rem)]"
          >
            Looking For a
            <br />
            Software
            <br />
            developer<span className="text-accent">?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
            className="mb-10 max-w-md text-sm leading-[2] text-text-secondary md:text-[15px]"
          >
            I'm a full-stack engineer passionate about building impactful
            software. I am open to new full-time positions, contracting
            opportunities, and challenging projects. Tell me a little about
            your needs and the technology stack you're using.
          </motion.p>

          {/* Availability Indicator */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={3}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>

            <span className="font-heading text-xs tracking-wide text-text-secondary">
              Open to Software Engineering Role
            </span>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative z-0 lg:col-span-6"
        >
          <form
            onSubmit={handleSubmit}
            className="relative z-0 space-y-7"
          >

            {/* Name and Email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block font-heading text-xs font-semibold tracking-wide text-text-secondary"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Alex Morgan"
                  required
                  className="h-[54px] w-full rounded-[4px] border border-border bg-surface/40 px-4 font-heading text-xs text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent/30"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block font-heading text-xs font-semibold tracking-wide text-text-secondary"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="h-[54px] w-full rounded-[4px] border border-border bg-surface/40 px-4 font-heading text-xs text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent/30"
                />
              </div>

            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-3 block font-heading text-xs font-semibold tracking-wide text-text-secondary"
              >
                A little about your role/project
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="The role description, technology stack, and goals you have in mind ..."
                required
                className="min-h-[170px] w-full resize-y rounded-[4px] border border-border bg-surface/40 px-4 py-4 font-heading text-xs leading-relaxed text-text-primary outline-none transition-all placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent/30"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex h-[58px] min-w-[164px] items-center justify-center gap-5 rounded-[4px] bg-accent px-7 font-heading text-sm font-semibold text-[#101510] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(55,220,157,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Let's talk"}

              {!isSubmitting && (
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              )}
            </button>

            {/* Submission Status */}
            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`pt-2 text-xs ${
                  status.startsWith("Message sent")
                    ? "text-accent"
                    : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}

            {/* Privacy Note */}
            <p className="pt-1 text-[11px] leading-relaxed text-text-muted">
              Your details are kept private and used only to respond to this inquiry.
            </p>

          </form>
        </motion.div>

      </div>

      {/* Bottom Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-28 h-px w-full origin-left bg-white/[0.12]"
      />

    </section>
  );
}
