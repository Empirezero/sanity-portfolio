"use client";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/typings";
import { motion } from "framer-motion";
import React, { ReactElement, useRef } from "react";

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props): ReactElement {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative flex flex-col text-left
            max-w-full justify-evenly mx-auto items-center z-0 py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#F7AB0A] text-2xl font-bold mb-10">
        Projects
      </h3>

      <div
        ref={scrollContainerRef}
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-[90vw] sm:w-[80vw] md:w-[45vw] lg:w-[40vw] xl:w-[35vw] flex-shrink-0 snap-center flex flex-col space-y-6 items-center justify-center p-6 md:p-10"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Image Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#394897] to-[#F7AB0A] rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Image Container with Border */}
              <div className="relative bg-gradient-to-r from-[#394897] to-[#F7AB0A] p-0.5 rounded-xl">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-xl"
                  src={project.image ? urlFor(project.image).url() : ""}
                  alt={project.title}
                />
              </div>
            </motion.div>

            <div className="space-y-4 px-0 md:px-6 max-w-2xl text-center">
              <h4 className="text-xl md:text-2xl font-bold">
                <span className="bg-gradient-to-r from-[#F7AB0A] to-[#394897] bg-clip-text text-transparent text-sm">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                <span className="text-white text-lg md:text-xl block mt-1">
                  {project.title}
                </span>
              </h4>

              {/* Technologies with enhanced styling */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {project.technologies.map((technology) => (
                  <motion.div
                    key={technology._id}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="group/tech relative"
                  >
                    <img
                      className="h-8 w-8 rounded-full border border-gray-600 bg-white p-1.5 
                        hover:border-[#F7AB0A] transition-all duration-300"
                      src={
                        technology.image ? urlFor(technology.image).url() : ""
                      }
                      alt={technology.title}
                    />
                    <span
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                      bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 
                      transition-opacity whitespace-nowrap pointer-events-none z-10"
                    >
                      {technology.title}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Background Decoration */}
      <div className="w-full absolute top-[30%] bg-gradient-to-r from-[#394897]/20 via-[#F7AB0A]/20 to-[#394897]/20 left-0 h-[500px] -skew-y-12 blur-sm" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#394897]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#F7AB0A]/5 rounded-full blur-3xl" />
      </div>
    </motion.div>
  );
}

export default Projects;
