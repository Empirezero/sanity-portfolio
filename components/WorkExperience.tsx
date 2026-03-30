"use client";
import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";
import { Briefcase, Sparkles } from "lucide-react";

interface Props {
  experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="min-h-screen flex relative flex-col overflow-y-auto 
        text-left max-w-full px-4 py-24 mx-auto items-center bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#394897]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F7AB0A]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-16 z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Briefcase className="w-10 h-10 text-[#F7AB0A]" />
          <h3 className="uppercase tracking-[10px] sm:tracking-[20px] text-[#F7AB0A] text-2xl sm:text-3xl font-bold">
            Experience
          </h3>
          <Sparkles className="w-8 h-8 text-[#F7AB0A]" />
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-[#394897] to-[#F7AB0A] mx-auto"
        />

        <p className="text-gray-400 mt-4 text-base">
          My professional journey and experiences
        </p>
      </div>

      {experiences?.length === 0 ? (
        <div className="text-center text-gray-500 z-10">
          <Briefcase className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p className="text-lg">No experience added yet.</p>
          <p className="text-sm">Check back soon for updates!</p>
        </div>
      ) : (
        <div className="w-full max-w-7xl mx-auto px-4 z-10">
          {/* CHANGE THIS LINE - Updated grid for 3 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {experiences?.map((experience, index) => (
              <motion.div
                key={experience._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="h-full"
              >
                <ExperienceCard experience={experience} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default WorkExperience;
