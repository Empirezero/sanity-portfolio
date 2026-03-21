"use client";
import { motion } from "framer-motion";
import React from "react";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  experience: Experience;
};
function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center w-[350px] md:w-[400px] xl:w-[600px] snap-center bg-[#292929] p-10
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-100 overflow-hidden
        "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
        }}
        className="w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.company}
      />
      <div className="px-0 md:px-10">
        <h4 className=" font-light">{experience.jobTite}</h4>
        <p className=" mt-1">{experience.company}</p>

        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 text-lg ml-5 max-h-96 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
