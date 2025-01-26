"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import img1 from "@/public/1.png";
import img2 from "@/public/1.png";

export default function Projects() {
  const projects = [
    {
      title: "API Performance Optimizer",
      description:
        "A tool to analyze and optimize API endpoints for improved performance. This project showcases my skills in backend development and API optimization techniques.",
      technologies: [
        {
          name: "Nest.js",
          icon: (
            <Image
              src="https://cdn.worldvectorlogo.com/logos/nestjs.svg"
              alt="NestJS"
              width={20}
              height={20}
            />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <Image
              src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
              alt="TypeScript"
              width={20}
              height={20}
            />
          ),
        },
        {
          name: "MongoDB",
          icon: (
            <Image
              src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg"
              alt="MongoDB"
              width={20}
              height={20}
            />
          ),
        },
      ],
      github: "https://github.com/yourusername/api-performance-optimizer",
      live: "https://api-optimizer.yourdomain.com",
      image: img1,
    },
    {
      title: "E-commerce Backend",
      description:
        "Scalable backend system for a modern e-commerce platform. This project demonstrates my ability to design and implement complex backend systems with high performance and scalability.",
      technologies: [
        {
          name: "Nest.js",
          icon: (
            <Image
              src="https://cdn.worldvectorlogo.com/logos/nestjs.svg"
              alt="NestJS"
              width={20}
              height={20}
            />
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <Image
              src="https://cdn.worldvectorlogo.com/logos/typescript.svg"
              alt="TypeScript"
              width={20}
              height={20}
            />
          ),
        },
        {
          name: "MongoDB",
          icon: (
            <Image
              src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg"
              alt="MongoDB"
              width={20}
              height={20}
            />
          ),
        },
      ],
      github: "https://github.com/yourusername/ecommerce-backend",
      live: "https://api.ecommerce.yourdomain.com",
      image: img2,
    },
  ];

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
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

      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-[#f58a07] to-[#a63446] text-transparent bg-clip-text">
            Projects
          </span>
        </motion.h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[#000505]/70 to-[#1a1a2e]/70 rounded-xl p-6 shadow-lg backdrop-filter backdrop-blur-lg border border-[#bfcde0]/20">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8`}
                >
                  <motion.div
                    className="lg:w-1/2 relative overflow-hidden rounded-lg border border-[#bfcde0]/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  <div className="lg:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#f58a07] to-[#a63446] text-transparent bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="text-[#bfcde0] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          className="px-3 py-1.5 text-sm bg-[#000505]/40 rounded-lg flex items-center gap-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                        >
                          {tech.icon}
                          <span className="text-[#bfcde0]">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        className="flex items-center text-[#bfcde0] hover:text-[#f58a07] transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Github className="h-5 w-5 mr-2" />
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        className="flex items-center text-[#bfcde0] hover:text-[#f58a07] transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
