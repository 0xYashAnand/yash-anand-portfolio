"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Loader2, X } from "lucide-react"; // Added X icon

export function Resume() {
  const [showResume, setShowResume] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const GOOGLE_DRIVE_FILE_ID =
    process.env.GOOGLE_DRIVE_RESUME_FILE_ID ||
    "12LtUyT32SdkscP4CLO5duPW8piydHmMm";
  const embedUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

  const toggleResume = () => {
    setShowResume(!showResume);
    if (!showResume) {
      setIsLoading(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-center pb-16">
      <motion.button
        onClick={toggleResume}
        className="group relative mx-auto px-8 py-4 rounded-2xl backdrop-blur-sm border border-[#f58a07]/30 bg-[#a63446]/10 hover:bg-[#f58a07]/20 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-3">
          {showResume ? (
            <X className="h-6 w-6 text-[#9d9c9c]" /> // Close icon
          ) : (
            <FileText className="h-6 w-6 text-[#9d9c9c]" />
          )}
          <span className="bg-gradient-to-r from-[#f58a07] to-[#a63446] bg-clip-text text-transparent text-xl font-bold">
            {showResume ? "Close Resume" : "View Resume"}
          </span>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f58a07]/10 to-[#a63446]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>

      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 shadow-xl"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#f58a07] to-[#a63446] bg-clip-text text-transparent">
                Resume
              </h2>
              <motion.a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 mt-4 md:mt-0 bg-[#f58a07]/10 hover:bg-[#a63446]/20 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Download className="h-5 w-5 text-[#f58a07]" />
                <span className="text-[#f58a07] font-medium">Download PDF</span>
              </motion.a>
            </div>

            {/* PDF Preview */}
            <div className="relative aspect-[8.5/11] w-full rounded-xl overflow-hidden border-2 border-[#f58a07]/30">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                  <Loader2 className="h-8 w-8 animate-spin text-[#f58a07]" />
                </div>
              )}

              {hasError ? (
                <div className="absolute inset-0 flex items-center justify-center text-red-500 bg-gray-900/80 p-4">
                  Failed to load resume preview
                </div>
              ) : (
                <motion.iframe
                  src={embedUrl}
                  className="w-full h-full"
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setHasError(true);
                    setIsLoading(false);
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  title="Resume Preview"
                />
              )}
            </div>

            {/* Background Effects */}
            <div className="absolute -top-20 -right-20 -z-10 h-64 w-64 rounded-full bg-gradient-to-r from-[#f58a07]/10 to-[#a63446]/10 blur-3xl opacity-30" />
            <div className="absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-gradient-to-r from-[#a63446]/10 to-[#f58a07]/10 blur-3xl opacity-30" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
