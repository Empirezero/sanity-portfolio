"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity/lib/image";
import { Calendar, MapPin, Briefcase, ChevronDown, Award } from "lucide-react";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="relative w-full h-full min-h-[480px] bg-gradient-to-br from-[#1f1f1f] to-[#292929] 
        rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Content Container */}
      <div className="p-8 h-full flex flex-col">
        {/* Header Section with Company Image */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1 min-w-0">
            <h4 className="text-2xl font-bold text-white mb-2 line-clamp-2">
              {experience.jobTite}
            </h4>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#F7AB0A] flex-shrink-0" />
              <p className="text-gray-300 font-medium text-lg truncate">
                {experience.company}
              </p>
            </div>
          </div>

          {/* Company Logo - Larger */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F7AB0A] rounded-full blur-md opacity-30" />
              <img
                className="relative w-20 h-20 rounded-full object-cover object-center border-2 border-[#F7AB0A] bg-white"
                src={urlFor(experience?.companyImage).url()}
                alt={experience?.company}
                onError={(e) => {
                  e.currentTarget.src = "/default-company-logo.png";
                }}
              />
            </div>
          </div>
        </div>

        {/* Date and Location */}
        <div className="flex flex-wrap gap-2 mb-5">
          <div className="flex items-center gap-1 bg-[#1a1a1a] px-3 py-1.5 rounded-full text-sm">
            <Calendar className="w-4 h-4 text-[#F7AB0A]" />
            <span className="text-gray-300">
              {new Date(experience.dateStarted).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}{" "}
              -{" "}
              {experience.isCurrentWorkingHere
                ? "Present"
                : new Date(experience.dateEnded).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
            </span>
          </div>
        </div>

        {/* Technologies - Larger Icons */}
        <div className="flex flex-wrap gap-3 mb-5">
          {experience.technologies.map((technology, idx) => (
            <div key={technology._id} className="group/tech relative">
              <img
                className="h-10 w-10 rounded-full border border-gray-600 bg-white p-1.5 
                  hover:border-[#F7AB0A] transition-all duration-300"
                src={urlFor(technology.image).url()}
                alt={technology.title}
                onError={(e) => {
                  e.currentTarget.src = "/default-tech-icon.png";
                }}
              />
              <span
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 
                transition-opacity whitespace-nowrap pointer-events-none z-10"
              >
                {technology.title}
              </span>
            </div>
          ))}
        </div>

        {/* Points with Expand/Collapse - More Space */}
        <div className="flex-1">
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? "max-h-96" : "max-h-32"
            }`}
          >
            <ul className="list-none space-y-3 text-base text-gray-300">
              {experience.points
                .slice(0, isExpanded ? undefined : 2)
                .map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-[#F7AB0A] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
            </ul>
          </div>

          {experience.points.length > 2 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-[#F7AB0A] text-sm font-medium flex items-center gap-1 
                hover:gap-2 transition-all duration-300"
            >
              {isExpanded
                ? "Show Less"
                : `Show ${experience.points.length - 2} More`}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
