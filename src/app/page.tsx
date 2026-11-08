"use client";

import { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import SpeakerHost from "@/components/SpeakerHost";
import ProjectShowcase from "@/components/ProjectShowcase";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Responsibilities from "@/components/Responsibilities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Client-only components that use AnimatePresence or client browser APIs
const Preloader = dynamic(() => import("@/components/Preloader"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Suspense fallback={<div className="min-h-screen bg-bg" />}>
      {mounted && <Preloader onComplete={() => {}} />}
      {mounted && <CustomCursor />}
      <main >
        <HeroSection />
        <About />
        {/* <SpeakerHost /> */}
        <ProjectShowcase />
        {/* <Skills />
        <Education />
        <Achievements />
        <Certifications />
        <Responsibilities /> */}
        <Contact />
      </main>

      <Footer />
    </Suspense>
  );
}
