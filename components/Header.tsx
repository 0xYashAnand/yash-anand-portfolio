"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

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

  const navItems = ["Experience", "Projects", "Resume"];

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className="fixed top-4 left-4 right-4 z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] backdrop-filter backdrop-blur-lg rounded-full shadow-lg border border-[#ffffff10]">
              <div className="max-w-6xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
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
                  <nav className="hidden md:flex items-center space-x-6">
                    <ul className="flex space-x-6">
                      {navItems.map((item, index) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Link
                            href={
                              item === "Resume"
                                ? "/resume"
                                : `/#${item.toLowerCase()}`
                            }
                            className="text-[#bfcde0] hover:text-[#f58a07] transition duration-300"
                          >
                            {item}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                    <Link
                      href="/#contact"
                      className="group flex items-center bg-[#f58a07] hover:bg-[#e07d06] text-white pl-4 pr-6 py-2 rounded-full transition-all duration-300 hover:pl-6 hover:pr-8 relative overflow-hidden"
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
                  </nav>
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
              </div>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                className="md:hidden fixed inset-0 bg-[#0a0a0a] bg-opacity-95 backdrop-filter backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container mx-auto px-4 py-6">
                  <div className="flex items-center justify-between mb-8">
                    <Link
                      href="/"
                      className="text-xl font-bold bg-gradient-to-r from-[#f58a07] to-[#f9b373] bg-clip-text text-transparent"
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
                    {navItems.map((item) => (
                      <motion.li
                        key={item}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <Link
                          href={
                            item === "Resume"
                              ? "/resume"
                              : `/#${item.toLowerCase()}`
                          }
                          className="flex items-center text-2xl text-[#bfcde0] hover:text-[#f58a07] py-3 px-4 rounded-lg transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          <ArrowRight className="w-5 h-5 mr-3 text-[#f58a07]" />
                          {item}
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
                        className="group flex items-center justify-between bg-gradient-to-r from-[#f58a07] to-[#f9b373] text-white px-6 py-4 rounded-full transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-lg font-medium">Contact Me</span>
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
