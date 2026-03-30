import About from "@/components/about";
import Contact from "@/components/Contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";
import Link from "next/link";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchSkills } from "@/utils/fetchSkill";
import { fetchExperiences } from "@/utils/fetchExperience";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchProjects } from "@/utils/fetchProjects";
import { PostInfo, Skill, Experience, Social, Project } from "@/typings"; 

async function getData() {
const postInfo: PostInfo | null = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const experiences: Experience[] = await fetchExperiences();
  const socials: Social[] = await fetchSocials();

  return {
    postInfo,
    skills,
    projects,
    experiences,
    socials,
  };
}

export default async function Home() {
  const { postInfo, experiences, projects, skills, socials } = await getData();

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar-track-black scrollbar-thumb-[#394897]">
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={postInfo} />
      </section>

      <section id="about" className="snap-center">
        <About postInfo={postInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
   o     <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 cursor-pointer">
          <div className="flex items-center justify-center">
            {/* ✅ Replaced <img> with Next.js <Image> */}
            <Image
              className="h-10 w-10 rounded-full cursor-pointer"
              src="data:image/jpeg;base64,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"
              alt="Back to top"
              width={40}
              height={40}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}


export const metadata = {
  title: "Dan Portfolio",
};

