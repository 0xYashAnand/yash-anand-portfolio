"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/lib/data/raw-data";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Toggle selected skill
  const handleSkillClick = (index: number) => {
    setSelectedSkill(selectedSkill === index ? null : index);
  };

  // Handle click outside to deselect skill
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sectionRef.current && selectedSkill !== null) {
        const skillItems = sectionRef.current.querySelectorAll(".skill-item");
        let clickedOnSkill = false;

        skillItems.forEach((item) => {
          if (item.contains(event.target as Node)) {
            clickedOnSkill = true;
          }
        });

        if (!clickedOnSkill) {
          setSelectedSkill(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedSkill]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
    >
      {/* Floating bubble background animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-1"
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute rounded-full bg-[#a63446]"
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              width: 5 + Math.random() * 15,
              height: 5 + Math.random() * 15,
              opacity: 0.05 + Math.random() * 0.15,
            }}
            animate={{
              x: Math.random() * 150 - 75,
              y: Math.random() * 150 - 75,
              opacity: [
                0.05 + Math.random() * 0.15,
                0.15 + Math.random() * 0.15,
                0.05 + Math.random() * 0.15,
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 5 + Math.random() * 10,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#f58a07] to-[#a63446] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`skill-item w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-lg bg-[#ffffff08] border border-[#ffffff10] hover:border-[#f58a07] transition-all relative cursor-pointer ${
                  selectedSkill === index ? "border-[#f58a07]" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleSkillClick(index)}
                layout
              >
                {/* Glow effect when selected */}
                <AnimatePresence>
                  {selectedSkill === index && (
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-[#f58a07] opacity-20 blur-sm"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.2 }}
                      exit={{ scale: 1.2, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </AnimatePresence>

                {/* Skill icon with rotation animation */}
                <motion.div
                  animate={
                    selectedSkill === index
                      ? {
                          rotateY: 360,
                          scale: [1, 1.2, 1],
                          transition: {
                            rotateY: { duration: 0.8, ease: "easeInOut" },
                            scale: { duration: 0.8, times: [0, 0.5, 1] },
                          },
                        }
                      : {}
                  }
                  className="w-full h-full flex items-center justify-center"
                >
                  {skill.image ? (
                    <img
                      src={skill.image || "/placeholder.svg"}
                      alt={skill.name}
                      className={`w-full h-full object-contain ${
                        skill.invert ? "invert" : ""
                      }`}
                    />
                  ) : (
                    skill.icon && (
                      <skill.icon className="w-full h-full text-[#f58a07]" />
                    )
                  )}
                </motion.div>
              </motion.div>

              {/* Skill name with animation when selected */}
              <motion.span
                className="text-sm sm:text-base text-[#bfcde0]"
                animate={
                  selectedSkill === index
                    ? {
                        color: "#f58a07",
                        fontWeight: "bold",
                        scale: [1, 1.1, 1],
                        transition: {
                          scale: { duration: 0.5, times: [0, 0.5, 1] },
                        },
                      }
                    : {}
                }
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
