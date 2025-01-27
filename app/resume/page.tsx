"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("");
  const GOOGLE_DRIVE_FILE_ID = process.env.GOOGLE_DRIVE_RESUME_FILE_ID;
  const embedUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

  useEffect(() => {
    // Calculate last Sunday
    const today = new Date();
    const lastSunday = new Date(today);
    lastSunday.setDate(today.getDate() - today.getDay());
    setLastUpdated(
      lastSunday.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
      >
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold bg-gradient-to-r from-[#f58a07] to-[#a63446] bg-clip-text text-transparent"
          >
            Resume
          </motion.h1>
        </div>

        {/* Download Button */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex justify-end mb-6"
        >
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-[#a63446]/20 rounded-lg transition-colors group border border-[#bfcde0]/20"
          >
            <Download className="h-5 w-5 text-white group-hover:text-[#077af5]" />
            <span className="text-white group-hover:text-[#077af5] font-medium">
              Download PDF
            </span>
          </a>
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative w-full aspect-[8.5/11] bg-neutral-900/50 rounded-xl shadow-2xl border-2 border-[#bfcde0]/20 backdrop-blur-sm"
        >
          {isLoading && (
            <div className="absolute inset-0 flex flex-col gap-4 p-6 bg-neutral-900/50">
              <div className="space-y-4 mt-4">
                {[...Array(15)].map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-4 w-full md:h-12 bg-neutral-800/50"
                  />
                ))}
              </div>
            </div>
          )}

          {hasError ? (
            <div className="absolute inset-0 flex items-center justify-center text-red-500 p-4 bg-neutral-900 rounded-lg">
              Failed to load resume preview. Please download the PDF.
            </div>
          ) : (
            <iframe
              src={embedUrl}
              className="w-full h-full rounded-lg border-none"
              onLoad={() => setIsLoading(false)}
              onError={() => setHasError(true)}
              title="Yash Anand's Resume"
            />
          )}
        </motion.div>

        {/* Last Updated Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 text-neutral-400 text-sm"
        >
          Last updated: {lastUpdated}
        </motion.div>

        {/* Background Elements */}
        <div className="fixed -top-48 -right-48 -z-10 h-96 w-96 rounded-full bg-gradient-to-r from-[#f58a07]/10 to-[#a63446]/10 blur-3xl opacity-20" />
        <div className="fixed -bottom-48 -left-48 -z-10 h-96 w-96 rounded-full bg-gradient-to-r from-[#a63446]/10 to-[#f58a07]/10 blur-3xl opacity-20" />

        {/* Grid Overlay */}
        <div className="fixed inset-0 -z-20 opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black)]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat" />
        </div>
      </motion.div>
    </div>
  );
}
