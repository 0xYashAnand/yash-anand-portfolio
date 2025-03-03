"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

interface MenuItem {
  label: string;
  href: string;
  gradient: string;
}

const menuItems: MenuItem[] = [
  {
    label: "Experience",
    href: "/#experience",
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
  },
  {
    label: "Projects",
    href: "/#projects",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
  },
  {
    label: "Resume",
    href: "/resume",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
  },
];

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setVisible(true);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleMouseMove = () => {
      setVisible(true);
      clearTimeout(timer);
      timer = setTimeout(() => setVisible(false), 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className="fixed top-4 left-0 right-0 z-50 w-screen px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.nav
              className="p-2 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] backdrop-blur-lg border border-[#ffffff10] shadow-lg relative overflow-hidden"
              initial="initial"
              whileHover="hover"
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-radial from-transparent via-blue-400/30 via-30% to-transparent rounded-3xl z-0 pointer-events-none"
                variants={navGlowVariants}
              />
              <div className="flex items-center justify-between px-4 py-1">
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link
                    href="/"
                    className="text-xl font-bold bg-gradient-to-r from-[#f58a07] to-[#f9b373] bg-clip-text text-transparent"
                  >
                    Yash Anand
                  </Link>
                </motion.div>

                <div className="hidden md:flex items-center relative z-10">
                  <ul className="flex items-center gap-2">
                    {menuItems.map((item) => (
                      <motion.li key={item.label} className="relative">
                        <motion.div
                          className="block rounded-xl overflow-visible group relative"
                          style={{ perspective: "600px" }}
                          whileHover="hover"
                          initial="initial"
                        >
                          <motion.div
                            className="absolute inset-0 z-0 pointer-events-none"
                            variants={glowVariants}
                            style={{
                              background: item.gradient,
                              opacity: 0,
                              borderRadius: "16px",
                            }}
                          />
                          <motion.a
                            href={item.href}
                            className="flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent text-[#bfcde0] group-hover:text-white transition-colors rounded-xl"
                            variants={itemVariants}
                            transition={sharedTransition}
                            style={{
                              transformStyle: "preserve-3d",
                              transformOrigin: "center bottom",
                            }}
                          >
                            <span>{item.label}</span>
                          </motion.a>
                          <motion.a
                            href={item.href}
                            className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent text-[#bfcde0] group-hover:text-white transition-colors rounded-xl"
                            variants={backVariants}
                            transition={sharedTransition}
                            style={{
                              transformStyle: "preserve-3d",
                              transformOrigin: "center top",
                              rotateX: 90,
                            }}
                          >
                            <span>{item.label}</span>
                          </motion.a>
                        </motion.div>
                      </motion.li>
                    ))}

                    <Link
                      href="/#contact"
                      className="group flex items-center bg-[#f58a07] hover:bg-[#e07d06] text-white pl-4 pr-6 py-2 rounded-full transition-all duration-300 hover:pl-6 hover:pr-8 relative overflow-hidden ml-2"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="relative w-5 h-5">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
                              •
                            </span>
                            <ArrowRight
                              className="w-5 h-5 absolute inset-0 opacity-0 -translate-x-2 transition-all duration-300 
                              group-hover:opacity-100 group-hover:translate-x-0 stroke-[3]"
                            />
                          </div>
                        </div>
                        <span className="font-medium">Contact Me</span>
                      </div>
                      <div className="absolute inset-0 w-full h-full border-2 border-[#ffffff30] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </ul>
                </div>

                <button
                  className="md:hidden text-[#bfcde0]"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </motion.nav>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                className="md:hidden fixed inset-0 bg-[#0a0a0a] bg-opacity-95 backdrop-filter backdrop-blur-lg z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container mx-auto px-4 py-6">
                  <div className="flex items-center justify-between mb-8 mx-6">
                    <Link
                      href="/"
                      className="text-3xl font-bold bg-gradient-to-r from-[#f58a07] to-[#f9b373] bg-clip-text text-transparent"
                    >
                      Yash Anand
                    </Link>
                    <button
                      className="text-[#bfcde0] p-2 hover:text-[#f58a07] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-8 w-8" />
                    </button>
                  </div>

                  <motion.ul
                    className="flex flex-col space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                  >
                    {menuItems.map((item) => (
                      <motion.li
                        key={item.label}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center text-2xl text-[#bfcde0] hover:text-[#f58a07] py-3 px-4 rounded-lg transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="mt-8"
                    >
                      <Link
                        href="/#contact"
                        className="group flex items-center justify-between bg-gradient-to-r from-[#f58a07] to-[#d6452c] text-white px-6 py-4 rounded-full transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-xl font-medium">Contact Me</span>
                        <div className="ml-4 p-2 rounded-full bg-white/10 backdrop-blur-sm">
                          <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </motion.li>
                  </motion.ul>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
