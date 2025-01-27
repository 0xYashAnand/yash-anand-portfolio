import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Database, Cpu, Cloud, GitBranch, Box } from "lucide-react";
import MyImage from "@/public/myimage.svg";
import { technologies } from "@/lib/data/raw-data";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-[#f58a07] to-[#a63446] text-transparent bg-clip-text">
          About Me
        </span>
      </motion.h2>

      <motion.div
        className="bg-gradient-to-br from-[#000505]/70 to-[#1a1a2e]/70 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg border border-[#bfcde0]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <motion.div
            className="relative w-48 h-48 rounded-full  p-1 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-full h-full overflow-hidden border-2 border-[#000505]/20">
              <Image
                src={MyImage}
                alt="Yash Anand"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <motion.p
                className="text-lg text-[#bfcde0] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I'm a passionate Backend Developer and recent Computer Science
                graduate from IIIT Nagpur. With professional experience in
                building scalable systems, I specialize in optimizing API
                performance using modern technologies.
              </motion.p>

              <motion.p
                className="text-lg text-[#bfcde0] leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                My focus is on creating efficient, high-performance backend
                systems. I constantly explore new technologies to enhance system
                capabilities and improve developer experience.
              </motion.p>
            </div>

            <motion.div
              className="pt-4 border-t border-[#bfcde0]/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-[#f58a07] mb-4">
                Core Expertise
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 bg-[#000505]/40 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    {tech.icon}
                    <span className="text-[#bfcde0] text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
