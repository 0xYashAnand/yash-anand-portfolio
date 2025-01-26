// Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#000505]/70 to-transparent py-8 mt-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-[#bfcde0] flex items-center justify-center gap-2 text-sm md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>Built with</span>
            <motion.span
              className="text-red-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="h-5 w-5 fill-current" />
            </motion.span>
            <span>by Yash Anand</span> |{" "}
            <span>© {new Date().getFullYear()}</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
