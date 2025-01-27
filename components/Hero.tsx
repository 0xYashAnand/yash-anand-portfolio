"use client";

import { ArrowRight, Code, Cpu, Database, Terminal } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import softwareDeveloper from "../public/myimage-black.svg";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const rotateX = useTransform(smoothMouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const techStack = [
    { Icon: Code, name: "Node.js" },
    { Icon: Database, name: "MongoDB" },
    { Icon: Cpu, name: "Python" },
    { Icon: Terminal, name: "TypeScript" },
  ];

  return (
    // ... (keep previous imports and motion values setup)

    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen text-center lg:text-left px-4 lg:px-10 overflow-hidden">
      {/* Content container */}
      <motion.div className="lg:w-1/2 mb-8 lg:mb-0 relative z-10 mx-8">
        <motion.h1
          className="text-5xl lg:text-7xl font-bold mb-6 tracking-tighter"
          style={{ rotateX, rotateY, perspective: 1000 }}
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

        {/* Refined Contact Button */}
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

      {/* Image container */}
      <motion.div
        className="lg:w-1/2 relative z-10 mt-12 lg:mt-0"
        style={{ rotateX, rotateY, perspective: 1000 }}
      >
        <div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80">
          <Image
            src={softwareDeveloper}
            alt="Yash Anand"
            layout="fill"
            objectFit="cover"
            className="shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
