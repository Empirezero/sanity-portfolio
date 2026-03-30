"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PostInfo } from "@/typings";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import {
  Mail,
  ChevronDown,
  User,
} from "lucide-react";

type Props = {
  pageInfo: PostInfo | null;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, my name is ${pageInfo?.title ?? "Developer"}`,
      "I'm a guy who loves gaming.tsx",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 100,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      {/* Background Circles - Original */}
      <BackgroundCircles />

      {/* Profile Image - Original Style with Enhancements */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative z-20"
      >
        <div className="relative group">
          {/* Animated Ring around image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#394897] to-[#F7AB0A] p-[2px] animate-spin-slow">
            <div className="w-full h-full rounded-full bg-black" />
          </div>

          {/* Image Container */}
          <div className="relative rounded-full bg-black p-1">
            {pageInfo?.heroImage ? (
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-full h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 mx-auto object-cover border-4 border-white/20"
                src={urlFor(pageInfo.heroImage).url()}
                alt={pageInfo?.title ?? "Profile picture"}
              />
            ) : (
              <div className="relative rounded-full h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 mx-auto bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-400 border-4 border-white/20">
                <User className="w-16 h-16" />
              </div>
            )}
          </div>

          {/* Online Status Indicator */}
          <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="z-20">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm uppercase text-gray-500 tracking-[15px] pb-2"
        >
          {pageInfo?.role ?? "Full-Stack Developer"}
        </motion.h2>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl lg:text-4xl font-semibold px-10"
        >
          <span className="mr-3 bg-gradient-to-r from-white to-[#F7AB0A] bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </motion.h1>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-5 flex flex-wrap justify-center gap-3"
        >
          <Link href="#about">
            <button className="heroButton px-6 py-2 border border-[#F7AB0A] text-[#F7AB0A] rounded-full text-sm font-semibold hover:bg-[#F7AB0A] hover:text-black transition-all duration-300">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton px-6 py-2 border border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300">
              Experiences
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton px-6 py-2 border border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton px-6 py-2 border border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white/10 transition-all duration-300">
              Projects
            </button>
          </Link>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
