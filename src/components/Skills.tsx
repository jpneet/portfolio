"use client";

import { useRef, useState, useLayoutEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const skillStacks = [
  {
    id: 1,
    number: "01",
    title: "Programming",
    subtitle: "Languages & Fundamentals",
    description:
      "The languages I use to solve problems and build software.",
    skills: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    id: 2,
    number: "02",
    title: "Frontend",
    subtitle: "Interfaces & Experiences",
    description:
      "Building modern, responsive and interactive digital experiences.",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Backend",
    subtitle: "Logic & Architecture",
    description:
      "Developing scalable server-side applications and APIs.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Databases",
    subtitle: "Data & Management",
    description:
      "Structuring, managing and querying application data.",
    skills: [
      "PostgreSQL",
      "Prisma",
      "Drizzle ORM",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Machine Learning",
    subtitle: "Intelligence & Models",
    description:
      "Exploring machine learning concepts, data processing and predictive models.",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Regression",
      "Classification",
      "Decision Trees",
      "Random Forest",
      "SVM",
      "KNN",
      "PCA",
      "Feature Engineering",
      "Supervised Learning",
      "Unsupervised Learning",
    ],
  },
];

export function SkillsGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [scrollRange, setScrollRange] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal scrolling distance
  useLayoutEffect(() => {
    const update = () => {
      if (scrollRef.current) {
        const distance =
          scrollRef.current.scrollWidth - window.innerWidth;

        setScrollRange(-Math.max(0, distance));
      }
    };

    update();

    const observer = new ResizeObserver(update);

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, scrollRange]
  );

  return (
    <section
      ref={targetRef}
      id="skills"
      className="relative h-[400vh] bg-bg-surface"
    >
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Section Heading */}
        <div className="absolute left-6 top-[5%] z-30 md:left-12 md:top-[6%]">

          <span className="label mb-3 block tracking-editorial">
            04 / Technical Arsenal
          </span>

          <h2 className="display-md font-black tracking-tighter text-white">
            Built on{" "}
            <span className="clip-text-luxury">
              Skills.
            </span>
          </h2>

          <p className="mt-3 max-w-sm text-sm text-text-secondary">
            The tools, technologies and concepts behind my work.
          </p>

        </div>

        {/* Horizontal Scrolling Gallery */}
        <motion.div
          ref={scrollRef}
          style={{ x }}
         className="absolute left-0 top-[42%] flex w-max items-center gap-6 pl-[20vw] pr-[6vw] md:top-[35%] md:gap-10 md:pl-[22vw] md:pr-[10vw]"
        >

          {skillStacks.map((stack) => (
            <div
              key={stack.id}
              className="group relative flex h-[38vh] min-h-[260px] w-[82vw] shrink-0 flex-col overflow-hidden rounded-sm border border-white/10 bg-white/[0.035] p-5 backdrop-blur-md transition-colors duration-700 hover:border-accent/40 md:h-[42vh] md:min-h-[300px] md:w-[42vw] md:p-7"
            >

              {/* Decorative Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/[0.06] blur-[90px] transition-all duration-700 group-hover:bg-accent/[0.13]" />

              {/* Stack Header */}
              <div className="relative z-10 flex items-start justify-between border-b border-white/10 pb-4">

                <div className="min-w-0">

                  <span className="label mb-2 block tracking-[0.2em] text-accent">
                    {stack.subtitle}
                  </span>

                  <h3 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
                    {stack.title}
                  </h3>

                </div>

                <span className="shrink-0 font-heading text-xs tracking-widest text-white/40">
                  / {stack.number}
                </span>

              </div>

              {/* Description */}
              <p className="relative z-10 mt-3 max-w-sm text-xs leading-relaxed text-text-secondary md:text-sm">
                {stack.description}
              </p>

              {/* Marble Skill Pills */}
              <div className="relative z-10 mt-5 flex flex-1 flex-wrap content-start items-center gap-2 overflow-y-auto pb-2 pr-1">

                {stack.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.045,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.06,
                    }}
                    className="group/marble relative cursor-default overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-white/[0.15] via-white/[0.055] to-white/[0.02] px-4 py-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_5px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 hover:border-accent/60 hover:shadow-[0_5px_25px_rgba(255,255,255,0.08)]"
                  >

                    {/* Marble Highlight */}
                    <span className="pointer-events-none absolute left-3 top-1 h-3 w-8 rounded-full bg-white/20 blur-md transition-opacity duration-500 group-hover/marble:bg-accent/40" />

                    <span className="relative z-10 whitespace-nowrap text-xs font-medium tracking-wide text-white/80 transition-colors duration-300 group-hover/marble:text-white md:text-sm">
                      {skill}
                    </span>

                  </motion.div>
                ))}

              </div>

              {/* Stack Footer */}
              <div className="relative z-10 mt-3 flex items-center justify-between border-t border-white/10 pt-3">

                <span className="label tracking-[0.15em] text-white/40">
                  Skill Collection
                </span>

                <span className="text-xs text-accent">
                  {String(stack.skills.length).padStart(2, "0")} Technologies
                </span>

              </div>

            </div>
          ))}

          

        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 right-8 z-20 hidden items-center gap-4 md:flex">

          <span className="label tracking-[0.2em] text-white/40">
            Scroll to Explore
          </span>

          <div className="h-px w-20 bg-white/20">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full origin-left bg-accent"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default SkillsGallery;
