"use client"
import { ProjectCard } from "@/components/projectCard";

const projects = [
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
  {
    name: "Portfolio v1",
    description: "This was my first portfolio website, built with HTML, CSS and Javascript.",
    image: "/portfolio.png",
    techstack: ["HTML", "CSS", "Javascript"],
    website: "https://maxvdp.github.io/portfolio-V1/",
    github: "https://github.com/MaxVdp/portfolio-V1",
  },
  {
    name: "Placeholder",
    description: "er komt nog ietser komt nog ietser komt nog ietser komt nog ietser komt nog ietser komt nog ietser komt nog ietser komt nog ietser komt nog ietser komt ",
    image: "/wishlink.png",
    techstack: ["HTML", "CSS", "Javascript"],
    website: null,
    github: null,
  },
]

export default function Projects() {
  return (
    <div className="flex flex-col px-4">
        <h1 className="text-4xl font-bold">my projects</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
