import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { projectType } from "@/types/projectType";
import { Badge, badgeVariants } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TfiWorld } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";

import Image from "next/image";

interface ProjectCardProps {
    project: projectType;
}
export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="">
                <CardHeader>
                        {/* picture of the card */}
                        <Image 
                            src={project.image} 
                            alt={project.name} 
                            width={600} 
                            height={400} 
                            className="rounded-lg border"/>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                        {/* Name of project and short description */}
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col gap-6 items-start">
                    {/* Tech stack and possible links to github or website */}
                    <div className="flex gap-1 w-full flex-wrap">
                        {project.techstack.map((tech, index) => (
                            <Badge key={index} variant={"secondary"}>{tech}</Badge>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        {project.github && 
                            <Button size={"sm"}>
                                <a href={project.github} target="_blank" className="flex items-center gap-2">
                                    <FiGithub/> Github 
                                </a>
                            </Button>
                        }
                        {project.website && 
                            <Button size={"sm"}>
                                <a href={project.website} target="_blank" className="flex items-center gap-2">
                                    <TfiWorld/> Website
                                </a>
                            </Button>
                        }
                    </div>
                </CardFooter>
        </Card>
    );
}
      