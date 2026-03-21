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
      className="flex flex-col items-center text-center space-y-1 group  rounded-xl 
                 transition-shadow duration-600 hover:shadow-lg"
    >
      {/* Image */}
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={
          skill.image?._type === "image" && skill.image.asset?._ref
            ? urlFor(skill.image).url()
            : "https://via.placeholder.com/100" // fallback image
        }
        alt={skill.title}
        className="rounded-full h-16 w-16 md:w-20 md:h-20 xl:w-24 xl:h-24 
                   border border-gray-500 object-cover 
                   filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      {/* Progress */}
      <p className="text-sm font-semibold text-gray-300">
        {skill.progress !== undefined ? `${skill.progress}%` : "N/A"}
      </p>

      {/* Title */}
      <p className="text-base font-bold">{skill.title}</p>

      {/* Description */}
      {skill.description && (
        <p className="text-xs text-gray-400 max-w-[180px]">
          {skill.description}
        </p>
      )}
    </motion.div>
  );
}
