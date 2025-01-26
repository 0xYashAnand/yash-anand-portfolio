"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  Code,
  Globe,
  Server,
  Database,
  Zap,
  TrendingUp,
  Star,
  GlobeIcon,
} from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import redrobLogo from "@/public/redrob-logo.jpeg";
import Image from "next/image";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(
    null
  );

  const handleAchievementHover = (index: number | null) => {
    setHoveredAchievement(index);
  };

  const experiences = [
    {
      title: "Associate Python Developer",
      company: "Redrob By McKinley Rice · Full-time",
      logo: redrobLogo,
      website: "https://in.redrob.io/",
      location: "Noida, UP",
      period: "May 2023 - Jan 2024",
      technologies: [
        "NestJS",
        "Prisma",
        "Mongoose",
        "Elasticsearch",
        "Typescript",
        "AWS S3",
        "Google Generative AI",
      ],
      achievements: [
        "Engineered scalable backend services serving over 1M API requests monthly with 99.9% uptime",
        "Reduced query processing time by 40% through RESTful API optimizations",
        "Achieved 50% query time reduction in job recommendation APIs",
        "Implemented Mongoose aggregation pipelines handling 500k+ records",
        "Integrated AI-powered continuous chat interface with document upload",
        "Developed skill assessment assistant reducing time-to-hire by 30%",
      ],
    },
  ];

  const technologyIcons: { [key: string]: JSX.Element } = {
    NestJS: <Code className="h-4 w-4" />,
    Prisma: <Database className="h-4 w-4" />,
    Mongoose: <Server className="h-4 w-4" />,
    Elasticsearch: <Globe className="h-4 w-4" />,
    Typescript: <Code className="h-4 w-4" />,
    "AWS S3": <Code className="h-4 w-4" />,
    "Google Generative AI": <Code className="h-4 w-4" />,
  };

  return (
    <TooltipProvider>
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <motion.h2
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#f58a07] to-[#a63446] bg-clip-text text-transparent inline-block"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience
            </motion.h2>
            <p className="text-[#bfcde0] text-lg">
              Where Code Meets Impactful Solutions
            </p>
          </motion.div>

          <div className="relative space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="group relative pl-6 border-l-2 border-[#bfcde0]/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute w-3 h-3 bg-[#f58a07] rounded-full -left-[7px] top-0 shadow-glow" />

                <motion.div className="bg-gradient-to-br from-[#000505]/70 to-[#1a1a2e]/70 rounded-xl p-6 shadow-lg backdrop-filter backdrop-blur-lg border border-[#bfcde0]/20">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-[#FFA800] transition-colors"
                          >
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              fill
                              className="object-contain"
                            />
                          </a>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#FFA800] mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex flex-col md:flex-row md:items-center gap-4 text-[#bfcde0]">
                            <Briefcase className="h-4 w-4 flex-shrink-0" />
                            {exp.company}
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 hover:text-[#FFA800] transition-colors"
                            >
                              <GlobeIcon className="h-4 w-4" /> Website
                            </a>
                            <span className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 flex-shrink-0" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      className="p-2 hover:bg-[#2d2d2d] rounded-lg transition-colors"
                    >
                      <ChevronDown
                        className={`h-6 w-6 transition-transform ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 mb-6">
                    {exp.technologies.map((tech, techIndex) => (
                      <Tooltip key={techIndex}>
                        <TooltipTrigger>
                          <motion.span
                            className="px-3 py-1.5 text-sm bg-[#000505]/40 rounded-lg flex items-center gap-2 hover:bg-[#3d3d3d] transition-colors"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 + techIndex * 0.05 }}
                          >
                            {technologyIcons[tech] || (
                              <Code className="h-4 w-4" />
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
                      >
                        <ul className="space-y-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-3 p-3 bg-[#141414] rounded-lg hover:bg-[#1f1f1f] transition-colors"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 + achIndex * 0.05 }}
                              onMouseEnter={() =>
                                handleAchievementHover(achIndex)
                              }
                              onMouseLeave={() => handleAchievementHover(null)}
                            >
                              <Star
                                className={`h-5 w-5 ${
                                  hoveredAchievement === achIndex
                                    ? "text-[#00FF88]"
                                    : "text-[#FFA800]"
                                } flex-shrink-0 mt-1 transition-colors`}
                              />
                              <span className="text-[#fefcfd]">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="mt-6 pt-6 border-t border-[#2d2d2d]">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-[#0a0a0a] rounded-lg flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-[#FF6B00]/20">
                                <Server className="h-6 w-6 text-[#FF6B00]" />
                              </div>
                              <div>
                                <p className="font-semibold">1M+ Requests</p>
                                <p className="text-sm text-[#bfcde0]">
                                  Monthly API calls
                                </p>
                              </div>
                            </div>
                            <div className="p-4 bg-[#0a0a0a] rounded-lg flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-[#00FF88]/20">
                                <Zap className="h-6 w-6 text-[#00FF88]" />
                              </div>
                              <div>
                                <p className="font-semibold">60% Faster</p>
                                <p className="text-sm text-[#bfcde0]">
                                  Data retrieval
                                </p>
                              </div>
                            </div>
                            <div className="p-4 bg-[#0a0a0a] rounded-lg flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-[#FFA800]/20">
                                <TrendingUp className="h-6 w-6 text-[#FFA800]" />
                              </div>
                              <div>
                                <p className="font-semibold">30% Reduction</p>
                                <p className="text-sm text-[#bfcde0]">
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
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
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
