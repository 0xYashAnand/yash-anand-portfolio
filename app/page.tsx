"use client";

import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

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
        <Header />
        <main className="container mx-auto px-4 py-20">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <ContactForm />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
