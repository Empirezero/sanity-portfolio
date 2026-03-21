"use client";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/typings";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";

interface Props {
  projects: Project[];
}

function Projects({ projects }: Props): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen relative flex flex-col text-left md:flex-row
            max-w-full justify-evenly mx-auto items-center z-0 py-24"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-10">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
                            justify-center p-10 md:p-44"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-72 h-72 object-contain"
              src={project.image ? urlFor(project.image).url() : ""}
              alt={project.title}
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((technology) => (
                  <img
                    className="h-10 w-10"
                    key={technology._id}
                    src={technology.image ? urlFor(technology.image).url() : ""}
                    alt={technology.title}
                  />
                ))}
              </div>
              <p className="justify-center md:text-left">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
