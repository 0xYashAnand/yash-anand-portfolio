"use client";

import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ConnectSection from "@/components/ConnectSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Resume } from "@/components/Resume";

export default function Home() {
  useSmoothScroll();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-[#000505] text-[#fefcfd]"
      >
        <Hero />
        <main className="container mx-auto px-4 pt-20">
          <About />
          <div className="relative overflow-hidden">
            <Skills />
          </div>
          <Experience />
          <Projects />
          <Education />
          <Resume />
          <ConnectSection />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
