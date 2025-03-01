"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { socialLinks, email } from "@/lib/data/raw-data";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ConnectSection() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  //const [activeTab, setActiveTab] = useState<"social" | "form">("social")
  //const [isSubmitting, setIsSubmitting] = useState(false)

  //const {
  //  register,
  //  handleSubmit,
  //  reset,
  //  formState: { errors },
  //} = useForm<FormData>()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({
        title: "Email copied!",
        description: "The email address has been copied to your clipboard.",
        duration: 3000,
      });

      // Reset the copied state after 3 seconds
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-4 sm:px-6">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-[#f58a07] to-[#a63446] text-transparent bg-clip-text drop-shadow-md">
          Connect With Me
        </span>
      </motion.h2>

      <motion.div
        className="bg-gradient-to-br from-[#000505]/80 to-[#1a1a2e]/80 backdrop-filter backdrop-blur-lg rounded-xl p-4 sm:p-8 shadow-2xl border border-[#bfcde0]/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Email Section */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.p
              className="text-lg text-[#bfcde0] leading-relaxed text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Got an idea? Let's chat!
            </motion.p>

            <motion.div
              className="flex items-center justify-between p-4 bg-[#000505]/50 rounded-lg border border-[#bfcde0]/10 group hover:border-[#f58a07]/50 transition-all hover:shadow-md hover:shadow-[#f58a07]/10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="bg-[#f58a07]/10 p-2 rounded-full flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#f58a07]" />
                </div>
                <p className="text-[#bfcde0] truncate font-medium">{email}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={copyEmail}
                className="text-[#f58a07] hover:bg-[#f58a07]/20 hover:text-[#f58a07] transform transition-all hover:scale-105 focus:ring-2 focus:ring-[#f58a07]/30 focus:outline-none ml-2 flex-shrink-0"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="h-5 w-5" />
                  </>
                ) : (
                  <>
                    <Copy className="h-5 w-5" />
                  </>
                )}
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-[#bfcde0]/70 text-center lg:text-left mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Or connect with me on social media
            </motion.p>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-lg transition-all ${link.color} bg-[#000505]/50 border border-[#bfcde0]/10 hover:border-[#f58a07] group hover:shadow-md`}
                whileHover={{ scale: 1.03, y: -2 }}
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
                  <div className="bg-[#000505]/30 p-2 rounded-full">
                    {link.icon}
                  </div>
                  <span className="text-lg text-[#bfcde0] font-medium">
                    {link.name}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#f58a07]" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
      <Toaster />
    </section>
  );
}
