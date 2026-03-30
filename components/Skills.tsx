"use client";
import React from "react";
import { Skill as SkillType } from "@/typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[] | null;
};

export default function Skills({ skills }: Props) {
  const safeSkills = Array.isArray(skills) ? skills : [];

  const fallbackSkills = [
    {
      _id: "1",
      _type: "skill" as const,
      title: "JavaScript",
      progress: 85,
      image: null,
    },
    {
      _id: "2",
      _type: "skill" as const,
      title: "React",
      progress: 90,
      image: null,
    },
    {
      _id: "3",
      _type: "skill" as const,
      title: "Node.js",
      progress: 80,
      image: null,
    },
  ];

  const displaySkills = safeSkills.length > 0 ? safeSkills : fallbackSkills;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mb-2">
        Skills
      </h3>

      <h3 className="uppercase tracking-[3px] text-gray-500 text-sm mb-10">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full max-w-[1000px]">
        {displaySkills.slice(0, displaySkills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill as SkillType} />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full max-w-[1000px] mt-3">
        {displaySkills.slice(displaySkills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill as SkillType} directionLeft />
        ))}
      </div>
    </div>
  );
}
