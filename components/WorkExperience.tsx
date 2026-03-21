"use client";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

interface Props {
  experiences: Experience[];
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.8,
      }}
      className="h-screen flex relative flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div
        className="w-full mt-32 flex space-x-5 overflow-x-scroll snap-x snap-mandatory p-10
             scrollbar-track-black scrollbar-thumb-[#394897]"
      >
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
