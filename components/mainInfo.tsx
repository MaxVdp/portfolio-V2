"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiOutlineFolderDownload } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const getAge = () => {
    return new Date().getFullYear() - 2003;
}

export function MainInfo() {
  return (
    <div className="w-full flex gap-4 flex-col md:justify-between md:items-center md:flex-row-reverse">
      <Image
        src="/max.jpg"
        alt="Picture of the author"
        width={200}
        height={200}
        className="rounded-lg"
      />
      
      <div className="flex flex-col gap-4 ">
        <h1 className="text-4xl font-bold">hey, Max here!</h1>
        <p className="">I'm a {getAge()} year old software developer from Belgium</p>
        <p className="">I like to develop websites, do bouldering and calisthenics, play the guitar and run around the table with my dog.</p>
        <div className="flex gap-8 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <a href="">
                <Button variant="outline">Resume <HiOutlineFolderDownload/></Button>
              </a>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Dutch resume</DropdownMenuItem>
              <DropdownMenuItem>English resume</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="https://www.linkedin.com/in/max-vandeput/" target="_blank" rel="noreferrer">
            <LuLinkedin className="text-[#71717a] hover:text-[#09090b] dark:text-[#a1a1aa] dark:hover:text-white w-5 h-5"/>
          </a>
          <a href="mailto:maxyuji.vandeput@gmail.com" target="_blank">
            <MdOutlineEmail className="text-[#71717a] hover:text-[#09090b] dark:text-[#a1a1aa] dark:hover:text-white w-5 h-5"/>
          </a>
        </div>
      </div>
    </div>
  );
}