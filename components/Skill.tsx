"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "@/typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft = false }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-col items-center text-center space-y-0.5 group rounded-xl 
                 transition-shadow duration-600 hover:shadow-lg"
    >
      {/* Image - Smaller size */}
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={
          skill.image?._type === "image" && skill.image.asset?._ref
            ? urlFor(skill.image).url()
            : "https://via.placeholder.com/100"
        }
        alt={skill.title}
        className="rounded-full h-12 w-12 md:w-14 md:h-14 xl:w-16 xl:h-16 
                   border border-gray-500 object-cover 
                   filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      {/* Progress - Smaller text */}
      <p className="text-xs font-semibold text-gray-300">
        {skill.progress !== undefined ? `${skill.progress}%` : "N/A"}
      </p>

      {/* Title - Smaller text */}
      <p className="text-sm font-bold">{skill.title}</p>

      {/* Description - Smaller text */}
      {skill.description && (
        <p className="text-xs text-gray-400 max-w-[150px]">
          {skill.description}
        </p>
      )}
    </motion.div>
  );
}
