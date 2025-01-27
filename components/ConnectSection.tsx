// ConnectSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  ClipboardCopy,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks, email } from "@/lib/data/raw-data";

export default function ConnectSection() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("your.email@example.com");
      alert("Email copied to clipboard!");
    } catch (err) {
      alert("Failed to copy email");
    }
  };

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-[#f58a07] to-[#a63446] text-transparent bg-clip-text drop-shadow-md">
          Connect With Me
        </span>
      </motion.h2>

      <motion.div
        className="bg-gradient-to-br from-[#000505]/70 to-[#1a1a2e]/70 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-[#bfcde0]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Email Section */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.p
              className="text-lg text-[#bfcde0] leading-relaxed text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Let's collaborate! Reach out to me:
            </motion.p>

            <motion.div
              className="flex items-center justify-between p-4 bg-[#000505]/30 rounded-lg border border-[#bfcde0]/10 group hover:border-[#f58a07]/50 transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-[#f58a07] flex-shrink-0" />
                <p className="text-[#bfcde0] truncate">{email}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyEmail}
                className="text-[#f58a07] hover:bg-[#fcfcfc] hover:text-black transform transition-transform hover:scale-110"
              >
                <ClipboardCopy className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-lg transition-all ${link.color} bg-[#000505]/30 border border-[#bfcde0]/10 hover:border-current group`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: 0.4 + index * 0.1,
                }}
              >
                <div className="flex items-center gap-4">
                  {link.icon}
                  <span className="text-lg text-[#bfcde0]">{link.name}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
