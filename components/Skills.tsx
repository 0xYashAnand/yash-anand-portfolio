"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data/raw-data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background: "linear-gradient(45deg, #f58a07, #a63446)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Skills
      </motion.h2>

      {/* Flex container for skills */}
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center gap-3 w-[120px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          >
            {/* Image/Icon Container */}
            <motion.div
              className="relative w-20 h-20 cursor-pointer"
              whileHover={{
                transition: { staggerChildren: 0.1 },
              }}
            >
              {skill.image ? (
                <>
                  <motion.img
                    src={skill.image}
                    alt={skill.name}
                    className={`w-full h-full object-contain ${
                      skill.invert
                        ? "invert brightness-150"
                        : "filter drop-shadow-[0_4px_6px_rgba(165,180,208,0.25)]"
                    }`}
                    initial={{ scale: 1 }}
                    whileHover={{
                      scale: 1.15,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      },
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f58a07]/20 to-[#a63446]/20 blur-lg opacity-0"
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.4 },
                    }}
                  />
                </>
              ) : (
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  whileHover={{
                    scale: 1.15,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    },
                  }}
                >
                  {skill.icon && (
                    <skill.icon className="w-12 h-12 text-[#f58a07]" />
                  )}
                </motion.div>
              )}
            </motion.div>

            {/* Text Label */}
            <motion.div className="text-center w-full">
              <motion.span
                className="text-[#bfcde0] text-sm font-medium relative inline-block"
                initial={{ y: 0 }}
                whileHover={{
                  y: -3,
                  color: "#f58a07",
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
              >
                {skill.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#f58a07] to-[#a63446]"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{
                    scaleX: 1,
                    originX: 0,
                    transition: {
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                />
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Decorative motion elements */}
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
  );
}
