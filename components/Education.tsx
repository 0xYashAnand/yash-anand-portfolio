// Education.tsx
"use client";
// className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-6 shadow-lg"

import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Clock,
  MapPin,
  ChevronDown,
  Globe,
  LibraryBig,
} from "lucide-react";
import { useState } from "react";
import universityLogo from "@/public/university-logo.svg";
import Image from "next/image";
import { TooltipProvider } from "./ui/tooltip";

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const education = [
    {
      degree: "Bachelor of Technology",
      major: "Computer Science and Engineering",
      institution: "Indian Institute of Information Technology, Nagpur",
      logo: universityLogo,
      website: "https://www.iiitn.ac.in",
      location: "Nagpur, Maharashtra",
      period: "2019 - 2023",
      courses: [
        "Advanced Algorithms",
        "Machine Learning",
        "Cloud Computing",
        "Data Structures",
        "Database Systems",
        "Artificial Intelligence",
      ],
    },
  ];

  return (
    <TooltipProvider>
      <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <motion.h2
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#f58a07] to-[#a63446] bg-clip-text text-transparent inline-block"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
            >
              📚 Academic Journey
            </motion.h2>
            <p className="text-[#bfcde0] text-lg">
              Where Curiosity Meets Innovation
            </p>
          </motion.div>

          <div className="relative space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="group relative pl-6 border-l-2 border-[#f58a07]/30 hover:border-[#f58a07] transition-colors"
              >
                <div className="absolute w-3 h-3 bg-[#f58a07] rounded-full -left-[7px] top-0 shadow-glow" />

                <motion.div className="bg-gradient-to-br from-[#000505]/70 to-[#1a1a2e]/70 rounded-xl p-6 shadow-lg backdrop-filter backdrop-blur-lg">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="relative h-16 w-16 rounded-lg overflow-hidden border border-[#f58a07]/20">
                          <Image
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#f58a07]">
                            {edu.degree}
                          </h3>
                          <p className="text-[#bfcde0]/90 text-lg mb-3">
                            {edu.major}
                          </p>

                          <div className="flex flex-col gap-2 text-[#bfcde0]">
                            <div className="flex items-center gap-3 flex-wrap">
                              <span className="flex items-center gap-2 bg-[#000505]/40 px-3 py-1.5 rounded-lg">
                                <LibraryBig className="h-4 w-4 text-[#a63446]" />
                                {edu.institution}
                              </span>
                              <a
                                href={edu.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-[#f58a07] transition-colors bg-[#000505]/40 px-3 py-1.5 rounded-lg"
                              >
                                <Globe className="h-4 w-4 text-[#a63446]" />
                                Official Website
                              </a>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-2">
                              <span className="flex items-center gap-2 bg-[#000505]/40 px-3 py-1.5 rounded-lg">
                                <Clock className="h-4 w-4 text-[#a63446]" />
                                {edu.period}
                              </span>
                              <span className="flex items-center gap-2 bg-[#000505]/40 px-3 py-1.5 rounded-lg">
                                <MapPin className="h-4 w-4 text-[#a63446]" />
                                {edu.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      className="p-2 hover:bg-[#f58a07]/10 rounded-lg transition-colors"
                    >
                      <ChevronDown
                        className={`h-6 w-6 text-[#f58a07] transition-transform ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 pt-6 border-t border-[#f58a07]/20"
                      >
                        <h4 className="text-lg font-semibold text-[#f58a07] mb-4 flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Key Courses
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {edu.courses.map((course, i) => (
                            <motion.div
                              key={i}
                              className="px-3 py-2 text-sm bg-[#000505]/40 rounded-lg flex items-center gap-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 + i * 0.05 }}
                            >
                              <div className="h-2 w-2 bg-[#f58a07] rounded-full" />
                              <span className="text-[#bfcde0]">{course}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-[#FF6B0055] rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </section>
    </TooltipProvider>
  );
}
