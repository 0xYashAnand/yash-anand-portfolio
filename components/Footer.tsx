// Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#060606] to-[#000505] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#bfcde0] flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
            Built with
            <motion.span
              className="text-red-400"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
            </motion.span>
            by Yash Anand | © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
