"use client"
import { Experience } from "@/components/experience";
import { MainInfo } from "@/components/mainInfo";
import { ProjectCard } from "@/components/projectCard";

const featuredProjects = [
  {
    name: "MX-Shell",
    description: "MX-Shell is a unique terminal-style portfolio that showcases my projects and skills in an interactive command-line interface.",
    image: "/mxshell.png",
    techstack: ["HTML", "CSS", "Javascript"],
    website: "https://maxvdp.github.io/portfolio-V1/cli/index.html",
    github: null,
  },
  {
    name: "Wishlink",
    description: "WishLink is a simple web app that lets you create and share personalized digital birthday cards.",
    image: "/wishlink.png",
    techstack: ["Next.js", "Typescript", "TailwindCSS"],
    website: "https://wishlinkapp.vercel.app/",
    github: null,
  },
]

export default function Home() {
  return (  
    <div className="flex flex-col gap-16 px-4">
      <MainInfo />
      <Experience />
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">featured projects</h1>
          <a className="text-[#71717a] dark:text-[#a1a1aa] text-lg" href="/projects">see all &#8594;</a>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
