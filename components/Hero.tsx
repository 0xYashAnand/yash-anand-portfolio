"use client";

import { ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import softwareDeveloper from "@/public/myimage-black.svg";
import { techStack } from "@/lib/data/raw-data";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const rotateX = useTransform(smoothMouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-15, 15]);
  const translateX = useTransform(smoothMouseX, [-300, 300], [-30, 30]);
  const translateY = useTransform(smoothMouseY, [-300, 300], [-30, 30]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen text-center lg:text-left px-4 lg:px-10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Content container */}
      <motion.div className="lg:w-1/2 mb-8 lg:mb-0 relative z-10 mx-8">
        <motion.h1
          className="text-5xl lg:text-7xl font-bold mb-6 tracking-tighter"
          style={{ rotateX, rotateY, perspective: 1000 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#f58a07] to-[#a63446] text-transparent bg-clip-text animate-gradient">
            Yash Anand
          </span>
        </motion.h1>

        <motion.p
          className="text-xl lg:text-2xl text-[#bfcde0] mb-8 max-w-xl leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Building scalable solutions with expertise in backend development and
          AI integration
        </motion.p>

        {/* Tech stack icons */}
        <motion.div
          className="flex gap-4 mb-8 justify-center lg:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              className="p-3 rounded-xl bg-[#ffffff08] backdrop-blur-sm border border-[#ffffff10] hover:border-[#f58a07] transition-all cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <tech.Icon className="w-6 h-6 text-[#f58a07]" />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="#contact"
            className="group flex items-center bg-[#f58a07] hover:bg-[#e07d06] text-black pl-5 pr-7 py-3 rounded-full transition-all duration-300 hover:pl-6 hover:pr-8 relative overflow-hidden max-w-fit"
          >
            <div className="flex items-center space-x-2">
              <div className="relative w-5 h-5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowRight
                    className="w-5 h-5 transition-all duration-300 
                          group-hover:translate-x-1 stroke-[2.5]"
                  />
                </div>
              </div>
              <span className="font-medium text-base">Get In Touch</span>
            </div>
            <div className="absolute inset-0 w-full h-full border border-[#ffffff30] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Enhanced Image container */}
      <motion.div
        className="lg:w-1/2 relative z-10 mt-12 lg:mt-0"
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
          perspective: 1000,
        }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <motion.div
          className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80"
          initial={{ scale: 0.95 }}
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          {/* Floating gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#f58a07] to-[#a63446] rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main image with enhanced shadow */}
          <Image
            src={softwareDeveloper}
            alt="Yash Anand"
            className="shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-shadow"
            priority
            style={{
              transformStyle: "preserve-3d",
            }}
          />

          {/* Subtle particles animation */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-[#f58a07] rounded-full"
                style={{
                  width: Math.random() * 4 + 2 + "px",
                  height: Math.random() * 4 + 2 + "px",
                  top: Math.random() * 100 + "%",
                  left: Math.random() * 100 + "%",
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
