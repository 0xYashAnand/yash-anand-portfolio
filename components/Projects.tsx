"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { projects } from "@/lib/data/raw-data";
import { useState } from "react";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<
    string | StaticImageData | null
  >(null);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Item animation variants (slower and more pronounced)
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="projects" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-[#f58a07]/10 rounded-full"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 1], // Reduced scale range for subtlety
              opacity: [0.03, 0.1, 0.03], // Softer opacity
            }}
            transition={{
              duration: 6 + Math.random() * 4, // Slower cycle
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 md:mb-16 text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-[#f58a07] to-[#a63446] text-transparent bg-clip-text">
            Projects
          </span>
        </motion.h2>

        <motion.div
          className="grid gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#000505]/80 to-[#1a1a2e]/80 rounded-xl p-5 md:p-6 
                shadow-xl backdrop-blur-sm border border-[#bfcde0]/10 hover:border-[#f58a07]/40 
                transition-all duration-500" // Smoother hover transition
            >
              <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row items-start">
                {/* Image Container */}
                <motion.div
                  className="w-full lg:w-5/12 relative aspect-[16/9] rounded-lg overflow-hidden 
                    border border-[#bfcde0]/20 hover:border-[#f58a07]/40 cursor-pointer bg-[#1a1a2e]"
                  whileHover={{ opacity: 0.9 }}
                  onClick={() => setSelectedImage(project.image)}
                >
                  <div className="p-2 h-full w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 42vw"
                      placeholder="blur"
                      priority={index < 2}
                    />
                  </div>
                </motion.div>

                {/* Content Container */}
                <div className="w-full lg:w-7/12 space-y-4">
                  <h3
                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#f58a07] to-[#a63446] 
                    text-transparent bg-clip-text transition-all duration-300 hover:brightness-125"
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#bfcde0]/90 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies (slower animation) */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-2.5 py-1 text-xs sm:text-sm bg-[#000505]/50 rounded-md 
                          flex items-center gap-1.5 border border-[#bfcde0]/10 hover:border-[#f58a07]/30 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }} // More pronounced entrance
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.15, duration: 0.8 }} // Slower and staggered
                      >
                        {tech.icon}
                        <span className="text-[#bfcde0]">{tech.name}</span>
                      </motion.span>
                    ))}
                  </div>

                  {/* Links (enhanced hover) */}
                  <div className="flex gap-6 pt-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer" // Added for security
                        className="flex items-center text-[#bfcde0] hover:text-[#f58a07] 
                          transition-colors duration-300 text-sm sm:text-base"
                        whileHover={{ x: 6, transition: { duration: 0.3 } }}
                      >
                        <Github className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        GitHub
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#bfcde0] hover:text-[#f58a07] 
                          transition-colors duration-300 text-sm sm:text-base"
                        whileHover={{ x: 6, transition: { duration: 0.3 } }}
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[90%] sm:w-[80%] lg:w-[70%] max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Project preview"
                width={1200}
                height={675}
                className="w-full h-auto rounded-lg shadow-xl object-contain bg-[#1a1a2e]"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-red-700/80 hover:bg-red-700 text-white rounded-full p-2
                  transition-all duration-200 hover:scale-110"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
