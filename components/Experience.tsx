"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  Code,
  Server,
  Zap,
  TrendingUp,
  Star,
  GlobeIcon,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { experiences, technologyIcons } from "@/lib/data/raw-data";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(
    null
  );

  const handleAchievementHover = (index: number | null) => {
    setHoveredAchievement(index);
  };

  return (
    <TooltipProvider>
      <section
        id="experience"
        className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 sm:mb-12 text-center"
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#f58a07] to-[#a63446] bg-clip-text text-transparent inline-block"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience
            </motion.h2>
            <p className="text-[#bfcde0] text-base sm:text-lg">
              Where Code Meets Impactful Solutions
            </p>
          </motion.div>

          <div className="relative space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative pl-4 sm:pl-6 border-l-2 border-[#bfcde0]/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute w-3 h-3 bg-[#f58a07] rounded-full -left-[7px] top-0 shadow-glow" />

                <motion.div className="bg-gradient-to-br from-[#000505]/70 to-[#1a1a2e]/70 rounded-xl p-4 sm:p-6 shadow-lg backdrop-filter backdrop-blur-lg border border-[#bfcde0]/20">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0">
                    <div className="space-y-4 w-full">
                      <div className="flex items-start gap-4">
                        <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Link
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-[#FFA800] transition-colors"
                          >
                            <Image
                              src={exp.logo || "/placeholder.svg"}
                              alt={`${exp.company} logo`}
                              fill
                              className="object-contain"
                            />
                          </Link>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#FFA800] mb-2 text-nowrap">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-[#bfcde0] text-sm sm:text-base">
                            <Briefcase className="h-4 w-4 flex-shrink-0 text-[#4CAF50]" />
                            <span className="line-clamp-1">{exp.company}</span>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            setExpandedIndex(
                              expandedIndex === index ? null : index
                            )
                          }
                          className="p-2 hover:bg-[#2d2d2d] rounded-lg transition-colors self-start ml-auto"
                          aria-label={
                            expandedIndex === index
                              ? "Collapse details"
                              : "Expand details"
                          }
                        >
                          <ChevronDown
                            className={`h-5 w-5 sm:h-6 sm:w-6 transition-transform ${
                              expandedIndex === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-3 text-[#bfcde0] text-sm sm:text-base">
                        <Link
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-[#FFA800] transition-colors"
                        >
                          <GlobeIcon className="h-4 w-4 flex-shrink-0 text-[#2196F3]" />
                          <span>Website</span>
                        </Link>
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 flex-shrink-0 text-[#FF9800]" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 flex-shrink-0 text-[#E91E63]" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {exp.technologies.map((tech, techIndex) => (
                      <Tooltip key={techIndex}>
                        <TooltipTrigger asChild>
                          <motion.span
                            className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-[#000505]/40 rounded-lg flex items-center gap-1.5 sm:gap-2 hover:bg-[#3d3d3d] transition-colors"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 + techIndex * 0.05 }}
                          >
                            {technologyIcons[tech] || (
                              <Code className="h-3 w-3 sm:h-4 sm:w-4" />
                            )}
                            <span className="text-[#fefcfd]">{tech}</span>
                          </motion.span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tech} Expertise</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 sm:space-y-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#141414] rounded-lg hover:bg-[#1f1f1f] transition-colors"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 + achIndex * 0.05 }}
                              onMouseEnter={() =>
                                handleAchievementHover(achIndex)
                              }
                              onMouseLeave={() => handleAchievementHover(null)}
                            >
                              <Star
                                className={`h-4 w-4 sm:h-5 sm:w-5 ${
                                  hoveredAchievement === achIndex
                                    ? "text-[#00FF88]"
                                    : "text-[#FFA800]"
                                } flex-shrink-0 mt-1 transition-colors`}
                              />
                              <span className="text-[#fefcfd] text-sm sm:text-base">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#2d2d2d]">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                            <div className="p-3 sm:p-4 bg-[#0a0a0a] rounded-lg flex items-center gap-2 sm:gap-3">
                              <div className="p-1.5 sm:p-2 rounded-lg bg-[#FF6B00]/20">
                                <Server className="h-4 w-4 sm:h-6 sm:w-6 text-[#FF6B00]" />
                              </div>
                              <div>
                                <p className="font-semibold text-sm sm:text-base">
                                  1M+ Requests
                                </p>
                                <p className="text-xs sm:text-sm text-[#bfcde0]">
                                  Monthly API calls
                                </p>
                              </div>
                            </div>
                            <div className="p-3 sm:p-4 bg-[#0a0a0a] rounded-lg flex items-center gap-2 sm:gap-3">
                              <div className="p-1.5 sm:p-2 rounded-lg bg-[#00FF88]/20">
                                <Zap className="h-4 w-4 sm:h-6 sm:w-6 text-[#00FF88]" />
                              </div>
                              <div>
                                <p className="font-semibold text-sm sm:text-base">
                                  60% Faster
                                </p>
                                <p className="text-xs sm:text-sm text-[#bfcde0]">
                                  Data retrieval
                                </p>
                              </div>
                            </div>
                            <div className="p-3 sm:p-4 bg-[#0a0a0a] rounded-lg flex items-center gap-2 sm:gap-3 sm:col-span-2 lg:col-span-1">
                              <div className="p-1.5 sm:p-2 rounded-lg bg-[#FFA800]/20">
                                <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 text-[#FFA800]" />
                              </div>
                              <div>
                                <p className="font-semibold text-sm sm:text-base">
                                  30% Reduction
                                </p>
                                <p className="text-xs sm:text-sm text-[#bfcde0]">
                                  Time-to-hire
                                </p>
                              </div>
                            </div>
                          </div>
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
          className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-2 border-[#f58a0755] rounded-full"
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
