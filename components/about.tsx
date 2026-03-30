"use client";
import { motion } from "framer-motion";
import React from "react";
import { PostInfo } from "@/typings";
import { urlFor } from "@/sanity/lib/image";
import { User, Mail, MapPin, Calendar, Award, Sparkles } from "lucide-react";

type Props = {
  postInfo: PostInfo | null;
};

export default function About({ postInfo }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black px-4 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h3 className="uppercase tracking-[20px] text-[#F7AB0A] text-2xl font-bold">
          About
        </h3>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-0.5 bg-gradient-to-r from-[#394897] to-[#F7AB0A] mx-auto mt-2"
        />
      </motion.div>

      {/* Main Content - Side by Side */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative flex justify-center"
        >
          <div className="relative group">
            {/* Animated Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#394897] to-[#F7AB0A] rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            {/* Image Container */}
            <div className="relative rounded-full bg-gradient-to-r from-[#394897] to-[#F7AB0A] p-1">
              {postInfo?.heroImage ? (
                <img
                  src={urlFor(postInfo.heroImage).url()}
                  alt="Profile picture"
                  className="rounded-full h-64 w-64 md:h-80 md:w-80 object-cover 
                    border-4 border-white/20 group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div
                  className="rounded-full h-64 w-64 md:h-80 md:w-80 bg-gradient-to-br from-gray-700 to-gray-900 
                  flex items-center justify-center text-gray-400 border-4 border-white/20"
                >
                  <User className="w-20 h-20" />
                </div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 bg-[#F7AB0A] rounded-full p-3 shadow-lg">
              <Sparkles className="w-5 h-5 text-black" />
            </div>
          </div>
        </motion.div>

        {/* Right Column - Info with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Title */}
          <div>
            <h4 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-[#F7AB0A] bg-clip-text text-transparent">
              {postInfo?.title ?? "Your Name"}
            </h4>
           
          </div>

          {/* Bio/Description */}
          <div className="space-y-4">
            <p className="text-gray-300 text-base leading-relaxed">
              {postInfo?.backgroundInformation ??
                "Passionate about creating beautiful and functional web experiences. With a keen eye for design and a love for coding, I bring ideas to life through innovative solutions."}
            </p>
          </div>

          {/* Optional: Additional Info Cards */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 text-[#F7AB0A] mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-semibold">Experience</span>
              </div>
              <p className="text-white text-sm">3+ Years</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 text-[#F7AB0A] mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs font-semibold">Projects</span>
              </div>
              <p className="text-white text-sm">15+ Completed</p>
            </div>
          </div>

     
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#394897]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#F7AB0A]/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
